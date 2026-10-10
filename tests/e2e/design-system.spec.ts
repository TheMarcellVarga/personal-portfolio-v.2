import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/about", "/privacy", "/resume", "/resume/ats", "/ai-finance", "/wild-route",
  "/first-revenue-game", "/threadscribe", "/focusin", "/endless-activity",
  "/askcody", "/catchscan", "/ess", "/missing-design-system-page",
];

for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }, { width: 320, height: 640 }]) {
  test(`portfolio pages share the index foundation at ${viewport.width}px`, async ({ page }) => {
    test.setTimeout(120_000);
    await page.setViewportSize(viewport);
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.addInitScript(() => sessionStorage.setItem("mv-home-intro", "1"));
    await page.goto("/");
    await expect(page.locator(".home-intro-stage")).toHaveAttribute("aria-hidden", "false");
    const reference = await page.locator("#process").evaluate(element => ({
      left: element.getBoundingClientRect().left,
      font: getComputedStyle(element.querySelector("h2")!).fontFamily,
      bodyFont: getComputedStyle(element.querySelector("p")!).fontFamily,
      background: getComputedStyle(document.documentElement).backgroundColor,
      mainBackground: getComputedStyle(element.closest("main")!).backgroundColor,
    }));

    for (const route of routes) {
      await page.goto(route);
      await expect(page.locator("main h1"), route).toHaveCount(1);
      await expect(page.locator("main h1"), route).toBeVisible();
      await expect(page.locator("header nav").first(), route).toHaveCount(1);
      await expect(page.getByRole("navigation", { name: "Footer navigation" }), route).toHaveCount(1);
      const actual = await page.locator("main h1").evaluate(element => ({
        left: element.getBoundingClientRect().left,
        right: element.getBoundingClientRect().right,
        top: element.getBoundingClientRect().top,
        font: getComputedStyle(element).fontFamily,
        bodyFont: getComputedStyle(element.closest("main")!.querySelector("p:not(.page-eyebrow):not(.page-lead)")!).fontFamily,
        background: getComputedStyle(document.documentElement).backgroundColor,
        mainBackground: getComputedStyle(element.closest("main")!).backgroundColor,
        overflow: document.documentElement.scrollWidth - innerWidth,
      }));
      expect(actual.font, `${route} font`).toBe(reference.font);
      expect(actual.bodyFont, `${route} body font`).toBe(reference.bodyFont);
      expect(actual.background, `${route} background`).toBe(reference.background);
      expect(actual.mainBackground, `${route} main background`).toBe(reference.mainBackground);
      expect(actual.left, `${route} alignment`).toBeCloseTo(reference.left, 0);
      expect(actual.right, `${route} heading containment`).toBeLessThanOrEqual(viewport.width);
      expect(actual.top, `${route} navigation clearance`).toBeGreaterThanOrEqual(100);
      expect(actual.overflow, `${route} horizontal overflow`).toBeLessThanOrEqual(1);
    }
  });
}

test("newly unified document routes remain accessible", async ({ page }) => {
  test.setTimeout(60_000);
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const route of ["/privacy", "/resume/ats", "/missing-design-system-page"]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
    expect(results.violations.filter(violation => ["serious", "critical"].includes(violation.impact ?? "")), route).toEqual([]);
  }
});

test("resume print layouts hide portfolio chrome and keep their document presentation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const route of ["/resume", "/resume/ats"]) {
    await page.goto(route);
    await page.emulateMedia({ media: "print", reducedMotion: "reduce" });
    await expect(page.locator(".sticky-header")).toBeHidden();
    await expect(page.locator("footer")).toBeHidden();
    await expect(page.locator(".page-intro")).toBeHidden();
    if (route === "/resume") {
      await expect(page.locator(".resume-sheet")).toHaveCSS("width", "793.688px");
      await expect(page.locator(".resume-print-grid")).toHaveCSS("grid-template-columns", /219.*574/);
      await expect(page.locator(".resume-sheet")).toHaveCSS("border-radius", "0px");
      await expect(page.locator(".resume-sheet")).toHaveCSS("opacity", "1");
    } else {
      await expect(page.locator(".ats-sheet")).toHaveCSS("background-color", "rgb(255, 255, 255)");
      await expect(page.locator(".ats-sheet")).toHaveCSS("padding", "0px");
      await expect(page.locator(".ats-content")).toContainText("Technical Skills");
    }
    await page.emulateMedia({ media: "screen", reducedMotion: "reduce" });
  }
});
