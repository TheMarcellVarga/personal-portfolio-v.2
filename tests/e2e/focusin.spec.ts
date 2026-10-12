import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [1440, 390, 320]) {
  test(`Focusin walkthrough, recovery and evidence work at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/focusin");
    await expect(page.locator('[data-case-study-status="focusin"]')).toHaveText("Native macOS build");
    await expect(page.locator(".focusin-capture-stage")).toHaveCSS("display", "flex");
    await expect(page.locator(".focusin-refinements")).toHaveCSS("display", "grid");
    if (width < 768) {
      const hero = await page.locator(".aperture-hero img").boundingBox();
      expect(hero!.y).toBeLessThan(640);
    }
    const stages = page.getByRole("group", { name: "Focusin walkthrough stages" });
    for (const label of ["Focus", "Break due", "Reset"]) {
      const button = stages.getByRole("button", { name: label, exact: true });
      await button.focus();
      await page.keyboard.press("Enter");
      await expect(button).toHaveAttribute("aria-pressed", "true");
      await expect(stages.locator('[aria-pressed="true"]')).toHaveCount(1);
      await expect(page.locator("#focusin-screen img")).toBeVisible();
      await expect.poll(() => page.locator("#focusin-screen img").evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
    }
    const scenarios = page.getByRole("group", { name: "Recovery scenarios" });
    await scenarios.getByRole("button", { name: "Notifications denied" }).click();
    await expect(page.locator("#focusin-recovery-result")).toContainText("The menu bar and popover still show break due");
    await scenarios.getByRole("button", { name: "Activity removed" }).click();
    await expect(page.locator("#focusin-recovery-result")).toContainText("instead of substituting a different activity");
    await scenarios.getByRole("button", { name: "After sleep" }).click();
    await expect(page.locator("#focusin-recovery-result")).toContainText("On wake");
    const disclosure = page.locator(".aperture-evidence-details");
    await disclosure.locator("summary").click();
    await expect(disclosure).toContainText("Fifty-four deterministic tests");
    await expect(disclosure).toContainText("beta has not run");
    await disclosure.locator("summary").click();
    await expect(disclosure).not.toHaveAttribute("open");
    expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
    expect(results.violations).toEqual([]);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: `/tmp/focusin-case-${width}.png`, fullPage: true });

  });
}
