import { expect, test, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

async function prepareHomepage(page: Page) {
  await page.addInitScript(() => {
    window.sessionStorage.setItem("mv-home-intro", "1");
  });
}

test("homepage presents the product-engineering story and current work", async ({ page }) => {
  await prepareHomepage(page);
  await page.goto("/");
  await expect(page.locator(".home-intro-shell")).toHaveCount(0);

  await expect(page).toHaveTitle(/Marcell Varga/i);
  await expect(page.locator("[data-hero-badge-label]").last()).toBeVisible();
  await expect(page.locator('a[href="/ai-finance"]').first()).toBeVisible();
  await expect(page.locator('a[href="/wild-route"]').first()).toBeVisible();
  await expect(page.locator("#work a")).toHaveCount(3);
  await expect(page.locator('#work a[href="/askcody"]')).toHaveCount(0);
  await expect(page.locator('#work a[href="/catchscan"]')).toHaveCount(0);
  await expect(page.locator('#work a[href="/ess"]')).toHaveCount(0);
});

test("contact and resume routes are reachable", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByRole("heading", { name: "Say hi." })).toBeVisible();
  await expect(page.getByRole("link", { name: /themarcellvarga@gmail.com/i })).toBeVisible();

  await page.goto("/resume");
  await expect(page.getByRole("heading", { name: "Design-engineering work, on one page." })).toBeVisible();

  const legacyPhoneEndpoint = await page.request.get("/api/contact/phone");
  expect(legacyPhoneEndpoint.status()).toBe(404);
});

test("featured work uses the shared evidence record", async ({ page }) => {
  for (const [route, evidenceId] of [
    ["/ai-finance", "aperture"],
    ["/wild-route", "wild-route"],
    ["/about", "professional-product-work"],
  ]) {
    await page.goto(route);
    await expect(page.locator(`[data-case-study-evidence="${evidenceId}"]`)).toBeVisible();
  }
});

test("public routes send baseline browser security headers", async ({ page }) => {
  const response = await page.request.get("/");

  expect(response.status()).toBe(200);
  expect(response.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response.headers()["x-frame-options"]).toBe("DENY");
  expect(response.headers()["referrer-policy"]).toBe("strict-origin-when-cross-origin");
  expect(response.headers()["permissions-policy"]).toContain("camera=()");
});

test("public routes do not serve personal phone data", async ({ page }) => {
  const phoneResponse = await page.request.get("/api/contact/phone");
  const contactResponse = await page.request.get("/contact");
  const resumeResponse = await page.request.get("/resume");

  expect(phoneResponse.status()).toBe(404);
  await expect(contactResponse.text()).resolves.not.toContain("Reveal phone number");
  await expect(resumeResponse.text()).resolves.not.toContain("Available on request");
});

test("homepage has no serious or critical automated accessibility violations", async ({ page }) => {
  await prepareHomepage(page);
  await page.goto("/");
  await expect(page.locator(".home-intro-shell")).toHaveCount(0);
  await expect(page.locator("[data-hero-badge-label]").last()).toBeVisible();

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();
  const blockingViolations = results.violations.filter((violation) =>
    ["serious", "critical"].includes(violation.impact ?? ""),
  );

  expect(blockingViolations).toEqual([]);
});
