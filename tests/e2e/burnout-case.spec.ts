import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("Burnout case shows genuine captures without invented game controls", async ({ page }) => {
  await page.goto("/burnout3-ios");
  const frame = page.locator("[data-recorded-game-frame]");
  await expect(frame.locator("img")).toHaveAttribute("src", /gameplay-controller-20261019/);
  await expect(frame).toContainText("native touch controls visible");
  const controller = page.locator("[data-native-controller-capture]");
  await expect(controller.locator("img")).toHaveAttribute("src", /gameplay-controller-detail-20261019/);
  await expect(controller).toContainText("Actual controller during a race replay");
  await expect(page.getByRole("button", { name: "Steering stick" })).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Hold accelerator" })).toHaveCount(0);
  await expect(page.locator("[data-control-demo]")).toHaveCount(0);
  await expect(page.locator(".page-lead")).toHaveText("An experimental iOS port of Burnout 3: Takedown.");
});

test("Burnout recorded presets and evidence work with a keyboard", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/burnout3-ios");
  await page.getByRole("button", { name: "Live reflections Build 46" }).click();
  await expect(page.locator("#burnout-preset")).toContainText("48.55");
  await expect(page.locator("#burnout-preset img")).toHaveAttribute("alt", /Build 46/);
  await page.getByRole("button", { name: "Faster preset Build 45" }).click();
  await expect(page.locator("#burnout-preset")).toContainText("59.9");
  await page.getByText("Verification, limitations and credits", { exact: true }).click();
  await expect(page.locator("details")).toContainText("SLUS_210.50");
  await expect(page.locator("details")).toContainText("b27cd98");
});

for (const width of [1440, 390, 320]) {
  test(`Burnout case inherits the index system and fits ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/ai-finance");
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("h1")).toHaveCSS("font-family", /sans-serif/);
    const reference = await page.evaluate(() => { const el = document.querySelector("h1")!; return { font: getComputedStyle(el).fontFamily, left: el.getBoundingClientRect().left, background: getComputedStyle(document.documentElement).backgroundColor }; });
    await page.goto("/burnout3-ios");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Burnout 3: Takedown for iOS");
    const actual = await page.evaluate(() => { const el = document.querySelector("h1")!; return { font: getComputedStyle(el).fontFamily, left: el.getBoundingClientRect().left, background: getComputedStyle(document.documentElement).backgroundColor, overflow: document.documentElement.scrollWidth - innerWidth }; });
    expect(actual.font).toBe(reference.font);
    expect(actual.left).toBe(reference.left);
    expect(actual.background).toBe(reference.background);
    expect(actual.overflow).toBeLessThanOrEqual(1);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
    expect(results.violations).toEqual([]);
    for (const image of await page.locator("main img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty("complete", true);
      await expect(image).not.toHaveJSProperty("naturalWidth", 0);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    if (process.env.CAPTURE_BURNOUT === "1") {
      await page.screenshot({ path: `tmp/burnout-case/${width}-full.png`, fullPage: true });
      await page.screenshot({ path: `tmp/burnout-case/${width}-hero.png` });
    }
  });
}

test("Burnout is listed as supporting work on the index", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator('#work a[href="/burnout3-ios"]').first()).toBeAttached();
  await page.goto("/sitemap.xml");
  await expect(page.locator("body")).toContainText("/burnout3-ios");
});
