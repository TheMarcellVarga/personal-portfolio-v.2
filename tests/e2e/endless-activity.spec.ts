import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [1440, 390, 320]) {
  test(`Endless Activity walkthrough and evidence work at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/endless-activity");
    await expect(page.locator('[data-case-study-status="endless-activity"]')).toHaveText("Native iOS build");
    const stages = page.getByRole("group", { name: "Endless Activity walkthrough stages" });
    for (const [label, file] of [["Discover", "discover"], ["Details", "detail"], ["Saved", "saved"], ["Preferences", "preferences"]]) {
      const button = stages.getByRole("button", { name: label, exact: true });
      await button.focus();
      await page.keyboard.press("Enter");
      await expect(button).toHaveAttribute("aria-pressed", "true");
      await expect(stages.locator('[aria-pressed="true"]')).toHaveCount(1);
      const capture = page.locator("#endless-screen img");
      await expect(capture).toHaveAttribute("src", new RegExp(`${file}-november-2026.*png`));
      await expect.poll(() => capture.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
      expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1);
    }
    const video = page.getByLabel("Endless Activity 24-second screen walkthrough");
    await expect(video).toHaveAttribute("controls", "");
    await expect(video).not.toHaveAttribute("autoplay");
    await expect(video.locator("track")).toHaveAttribute("src", /november-2026\.vtt$/);
    await expect(video.locator("source")).toHaveAttribute("src", /november-2026\.mp4$/);
    await video.evaluate((element: HTMLVideoElement) => { element.preload = "metadata"; element.load(); });
    await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.duration)).toBe(24);
    const disclosure = page.locator(".aperture-evidence-details");
    await disclosure.locator("summary").click();
    await expect(disclosure).toContainText("5 November 2026");
    await expect(disclosure).toContainText("Seventeen unit tests and twelve UI tests");
    await expect(disclosure).toContainText("accessibility XXXL");
    await expect(page.locator("#endless-refinements")).not.toContainText("pending");
    await disclosure.locator("summary").click();
    await expect(disclosure).not.toHaveAttribute("open");
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
    expect(results.violations).toEqual([]);
    if (width === 1440) {
      await page.setViewportSize({ width, height: 1400 });
      await page.locator("#endless-product").evaluate(element => element.scrollIntoView({ block: "start", behavior: "instant" }));
      await page.screenshot({ path: "/tmp/endless-case-preview.png" });
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: `/tmp/endless-case-${width}.png`, fullPage: true });
  });
}
