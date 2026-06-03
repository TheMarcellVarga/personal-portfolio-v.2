#!/usr/bin/env node
/**
 * Applies Cloudflare Security Insights recommendations for marcellvarga.com.
 *
 * Required env:
 *   CLOUDFLARE_API_TOKEN — API token with Zone:Edit, Account:Read, Account:Turnstile:Edit
 *
 * Optional env:
 *   CLOUDFLARE_ZONE_NAME (default: marcellvarga.com)
 *   CLOUDFLARE_ACCOUNT_ID — skip account lookup if set
 *
 * Usage:
 *   CLOUDFLARE_API_TOKEN=... node scripts/apply-cloudflare-security.mjs
 */

const API = "https://api.cloudflare.com/client/v4";
const ZONE_NAME = process.env.CLOUDFLARE_ZONE_NAME ?? "marcellvarga.com";
const TOKEN = process.env.CLOUDFLARE_API_TOKEN;

const SECURITY_TXT = {
  enabled: true,
  contact: [
    "mailto:themarcellvarga@gmail.com",
    "https://marcellvarga.com/contact",
  ],
  canonical: ["https://marcellvarga.com/.well-known/security.txt"],
  expires: "2027-06-02T00:00:00.000Z",
  preferred_languages: "en",
};

const BOT_MANAGEMENT = {
  fight_mode: true,
  ai_bots_protection: "block",
  crawler_protection: "enabled",
  is_robots_txt_managed: true,
  cf_robots_variant: "policy_only",
};

const TURNSTILE_WIDGET = {
  name: "marcellvarga.com portfolio",
  domains: ["marcellvarga.com", "www.marcellvarga.com", "localhost"],
  mode: "managed",
};

async function cf(path, { method = "GET", body } = {}) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json();
  if (!json.success) {
    const detail = json.errors?.map((e) => e.message).join("; ") ?? res.statusText;
    throw new Error(`${method} ${path}: ${detail}`);
  }
  return json;
}

async function getZoneId() {
  const { result } = await cf(`/zones?name=${encodeURIComponent(ZONE_NAME)}`);
  const zone = result?.[0];
  if (!zone?.id) throw new Error(`Zone not found: ${ZONE_NAME}`);
  return zone;
}

async function getAccountId(zone) {
  if (process.env.CLOUDFLARE_ACCOUNT_ID) return process.env.CLOUDFLARE_ACCOUNT_ID;
  return zone.account.id;
}

async function applyBotManagement(zoneId) {
  await cf(`/zones/${zoneId}/bot_management`, {
    method: "PUT",
    body: BOT_MANAGEMENT,
  });
  console.log("✓ Bot Fight Mode, Block AI bots, AI Labyrinth, managed robots.txt");
}

async function applySecurityTxt(zoneId) {
  await cf(`/zones/${zoneId}/security-center/securitytxt`, {
    method: "PUT",
    body: SECURITY_TXT,
  });
  console.log("✓ Cloudflare-managed security.txt enabled");
}

async function ensureTurnstileWidget(accountId) {
  const { result } = await cf(
    `/accounts/${accountId}/challenges/widgets?per_page=50`,
  );
  const existing = result?.find((w) =>
    w.domains?.some((d) => d.includes("marcellvarga.com")),
  );
  if (existing) {
    console.log(`✓ Turnstile widget already exists (${existing.sitekey})`);
    return;
  }
  const { result: widget } = await cf(`/accounts/${accountId}/challenges/widgets`, {
    method: "POST",
    body: TURNSTILE_WIDGET,
  });
  console.log(`✓ Turnstile widget created (sitekey: ${widget.sitekey})`);
  console.log(
    "  Store the secret in your env as TURNSTILE_SECRET_KEY when you add a protected form.",
  );
}

function printManualSteps() {
  console.log("\nManual step (cannot be automated via zone API):");
  console.log(
    "• Enable 2FA on your Cloudflare account: https://dash.cloudflare.com/profile/authentication",
  );
}

async function main() {
  if (!TOKEN) {
    console.error(
      "Missing CLOUDFLARE_API_TOKEN. Create a token at https://dash.cloudflare.com/profile/api-tokens",
    );
    console.error(
      "Suggested permissions: Zone > Bot Management > Edit, Zone > Security Center > Edit, Account > Turnstile > Edit.",
    );
    process.exit(1);
  }

  const zone = await getZoneId();
  const accountId = await getAccountId(zone);
  console.log(`Applying settings for ${ZONE_NAME} (zone ${zone.id})…\n`);

  await applyBotManagement(zone.id);
  await applySecurityTxt(zone.id);
  await ensureTurnstileWidget(accountId);

  printManualSteps();
  console.log("\nDone. Re-run Security Insights in Cloudflare after a few minutes.");
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
