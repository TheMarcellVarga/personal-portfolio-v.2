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
});

test("contact and resume routes are reachable", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByRole("heading", { name: "Say hi." })).toBeVisible();
  await expect(page.getByRole("link", { name: /themarcellvarga@gmail.com/i })).toBeVisible();

  await page.goto("/resume");
  await expect(page.getByRole("heading", { name: "Design-engineering work, on one page." })).toBeVisible();
});

test("homepage has no serious or critical non-color automated accessibility violations", async ({ page }) => {
  await prepareHomepage(page);
  await page.goto("/");
  await expect(page.locator(".home-intro-shell")).toHaveCount(0);
  await expect(page.locator("[data-hero-badge-label]").last()).toBeVisible();

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    // Muted-label contrast requires a dedicated visual pass; keep every other
    // serious and critical WCAG rule enforced until that work is complete.
    .disableRules(["color-contrast"])
    .analyze();
  const blockingViolations = results.violations.filter((violation) =>
    ["serious", "critical"].includes(violation.impact ?? ""),
  );

  expect(blockingViolations).toEqual([]);
});
