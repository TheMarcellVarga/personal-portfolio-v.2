import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("Burnout case shows the current Xbox capture without invented controls", async ({ page }) => {
  await page.goto("/burnout3-ios");
  const frame = page.locator("[data-recorded-game-frame]");
  await expect(frame.locator("img")).toHaveAttribute("src", /xbox-hybrid-controls-20261023/);
  await expect(frame).toContainText("Xbox-based build 10");
  await expect(frame).toContainText("actual native touch controls visible");
  await expect(page.getByRole("button", { name: "Steering stick" })).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Hold accelerator" })).toHaveCount(0);
  await expect(page.locator("[data-control-demo]")).toHaveCount(0);
  await expect(page.locator(".page-lead")).toHaveText("A console racer, adapted for the way a phone is held.");
  await expect(page.getByRole("link", { name: "Explore the PS2 origin" })).toHaveAttribute("href", /tree\/ps2-legacy$/);
});

test("Burnout recorded native session screens work with a keyboard", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/burnout3-ios");
  const settings = page.getByRole("button", { name: "iOS settings Build 9" });
  // The shared reduced-motion provider replaces its Lenis wrapper after hydration.
  // Retry this idempotent keyboard selection if that remount detaches the target.
  await expect(async () => {
    await settings.press("Enter");
    await expect(settings).toHaveAttribute("aria-pressed", "true", { timeout: 500 });
  }).toPass({ timeout: 10_000 });
  await expect(page.locator("#burnout-session-screen img")).toHaveAttribute("src", /xbox-settings-20261023/);
  await expect(page.locator("#burnout-session-screen")).toContainText("display changes wait for the next app launch");
  const resume = page.getByRole("button", { name: "Resume game Build 9" });
  await resume.focus();
  await expect(resume).toBeFocused();
  await resume.press("Enter");
  await expect(page.locator("#burnout-session-screen img")).toHaveAttribute("src", /xbox-resume-launcher/);
  await expect(page.locator("#burnout-session-screen")).toContainText("runtime stays in memory");
});

test("Burnout keeps current evidence, metric scope and upstream credits inspectable", async ({ page }) => {
  await page.goto("/burnout3-ios");
  await expect(page.locator("#burnout-performance table")).toContainText("76.92%");
  await expect(page.locator("#burnout-performance table")).toContainText("52.98%");
  await expect(page.locator("#burnout-performance")).toContainText("sequential runs on a warm phone");
  await page.getByText("Verification, limitations and credits", { exact: true }).click();
  await expect(page.locator("details")).toContainText("USA original Xbox release");
  await expect(page.locator("details")).toContainText("b4cd396");
  await expect(page.locator("details")).toContainText("58% of one core");
  await expect(page.locator("details").getByRole("link", { name: "Takedawn", exact: true })).toHaveAttribute("href", "https://github.com/xenophobentx/takedawn");
  await expect(page.getByRole("link", { name: "Explore the source" })).toHaveAttribute("href", "https://github.com/TheMarcellVarga/burnout3-ios/tree/main");
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
      await page.locator("#burnout-session").screenshot({ path: `tmp/burnout-case/${width}-session.png` });
      await page.locator("#burnout-performance").screenshot({ path: `tmp/burnout-case/${width}-performance.png` });
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
