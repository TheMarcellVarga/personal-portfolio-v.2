import { expect, test, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

async function prepareHomepage(page: Page) {
  await page.addInitScript(() => {
    window.sessionStorage.setItem("mv-home-intro", "1");
  });
}

test("homepage presents the product-engineering story and selected work", async ({ page }) => {
  await prepareHomepage(page);
  await page.goto("/");
  await expect(page.locator(".home-intro-shell")).toHaveCount(0);

  await expect(page).toHaveTitle(/Marcell Varga/i);
  await expect(page.getByTestId("case-study-restructuring-notice")).toHaveCount(0);

  await page.locator("header nav").getByRole("button", { name: "Contact", exact: true }).click();
  await expect(page.locator("#contact")).toBeInViewport();
  await expect(page.locator("[data-case-study-content]")).not.toHaveAttribute("inert");
  await expect(page.locator("[data-hero-badge-label]").last()).toBeVisible();
  await expect(page.locator('#work a[href="/ai-finance"]')).toBeVisible();
  await expect(page.locator('#work a[href="/first-revenue-game"]')).toBeVisible();
  await expect(page.locator('#work a[href="/wild-route"]')).toBeVisible();
  await expect(page.locator('#work a[href="/threadscribe"]')).toHaveCount(0);
  await expect(page.locator('#work a[href="/focusin"]')).toBeVisible();
  await expect(page.locator('#work a[href="/endless-activity"]')).toBeVisible();
  await expect(page.locator('#work a[href="/catchscan"]')).toHaveCount(0);

  await expect(page.getByRole("button", { name: /legacy projects/i })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await expect(page.locator("[data-case-study-content] a")).toHaveCount(5);
  await expect(page.locator('#work a[href="/about"]')).toHaveCount(0);
});

test("homepage is ready behind the playing intro", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });

  await expect(page.locator(".home-intro-shell")).toBeVisible();
  await expect(page.locator(".home-intro-stage")).toHaveCSS("opacity", "1");
  await expect(
    page.locator('img[alt="Portrait of Marcell Varga"]').first(),
  ).toHaveAttribute("src", /personalpageprofilealt/);
});

test("header uses the dark treatment only over the hero", async ({ page }) => {
  await prepareHomepage(page);
  await page.goto("/");

  const headerSurface = page.locator("header > div").first();
  await expect(headerSurface).toHaveClass(/bg-\[#0a1521\]\/95/);

  await page.locator("header nav").getByRole("button", { name: "Contact", exact: true }).click();
  await expect(page.locator("#contact")).toBeInViewport();
  await expect(headerSurface).toHaveClass(/bg-white\/72/);
  await expect(headerSurface).not.toHaveClass(/bg-\[#0a1521\]\/95/);

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "auto" }));
  await expect(headerSurface).toHaveClass(/bg-\[#0a1521\]\/95/);
});

test("principles statement types forward and reverses on scroll back", async ({ page }) => {
  await prepareHomepage(page);
  await page.goto("/");
  await expect(page.locator(".home-intro-shell")).toHaveCount(0);

  const principles = page.locator("#about");
  const statement = principles.locator('[data-scroll-anchor="about"] p');
  const fullStatement =
    "I turn complex product workflows into clear interfaces, then carry them through backend architecture, reliability, testing, and release.";

  await page.evaluate(() => {
    const section = document.querySelector<HTMLElement>('#about');
    if (!section) return;
    window.scrollTo({
      top: section.offsetTop + section.offsetHeight * 0.82,
      behavior: "auto",
    });
  });
  await page.waitForTimeout(1200);

  await expect(statement).toHaveText(fullStatement);

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "auto" }));
  await page.waitForTimeout(900);

  await expect(statement).not.toHaveText(fullStatement);
  await expect(statement).toHaveText("");
});

test("about and resume routes are reachable", async ({ page }) => {
  await page.goto("/about");
  await expect(
    page.getByRole("heading", { name: "Hi, I’m Marcell." }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /more about me/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Home has meant a few different places." })).toBeVisible();

  await page.goto("/resume");
  await expect(page.getByRole("heading", { name: "Design-engineering work, on one page." })).toBeVisible();
  await expect(page.getByRole("button", { name: /reveal phone number/i })).toBeVisible();
});

test("branded recovery route guides visitors back to the portfolio", async ({ page }) => {
  const response = await page.goto("/this-route-does-not-exist");

  expect(response?.status()).toBe(404);
  await expect(page).toHaveTitle("Page not found | Marcell Varga");
  await expect(page.getByRole("heading", { name: "This path led nowhere." })).toBeVisible();
  await expect(page.getByRole("link", { name: /return to portfolio/i })).toHaveAttribute(
    "href",
    "/",
  );
  await expect(page.getByRole("link", { name: /open resume/i })).toHaveAttribute(
    "href",
    "/resume",
  );
});

test("featured work uses the shared evidence record", async ({ page }) => {
  for (const [route, evidenceId, status] of [
    ["/ai-finance", "aperture", "Live guided demo"],
    ["/first-revenue-game", "first-revenue-game", "Live public demo"],
    ["/wild-route", "wild-route", "Live public demo"],
    ["/threadscribe", "threadscribe", "Guided product walkthrough"],
    ["/focusin", "focusin", "Native macOS build"],
    ["/endless-activity", "endless-activity", "Native iOS build"],
  ]) {
    await page.goto(route);
    await expect(page.locator(`[data-case-study-evidence="${evidenceId}"]`)).toBeVisible();
    await expect(page.locator(`[data-case-study-status="${evidenceId}"]`)).toHaveText(status);
  }
});

test("case study recommendations use current work and vary by the page", async ({ page }) => {
  test.setTimeout(45_000);

  for (const [route, currentTitle, expectedCount] of [
    ["/ai-finance", "Aperture Financial Intelligence", 4],
    ["/first-revenue-game", "First Revenue Game", 4],
    ["/wild-route", "Wild Route", 4],
    ["/threadscribe", "ThreadScribe Studio", 5],
    ["/focusin", "Focusin", 4],
    ["/endless-activity", "Endless Activity", 4],
    ["/catchscan", "CatchScan", 5],
    ["/askcody", "AskCody", 5],
    ["/ess", "European Study Solution", 5],
  ] as const) {
    await page.goto(route);

    const currentWork = page.locator("[data-other-works]");
    await expect(currentWork).toContainText("Current case studies");
    await expect(currentWork.locator("[data-other-works-card]")).toHaveCount(expectedCount);
    await expect(currentWork.getByRole("heading", { name: currentTitle })).toHaveCount(0);
    await expect(currentWork).not.toContainText("CatchScan");
    await expect(currentWork).not.toContainText("AskCody");
    await expect(currentWork).not.toContainText("European Study Solution");
  }
});

test("Aperture case study presents measurable systems evidence", async ({ page }) => {
  await page.goto("/ai-finance");

  await expect(page.getByRole("heading", { name: "Aperture Financial Intelligence" })).toBeVisible();
  await expect(page.getByText(/40 of 40 evidence regression cases pass/i)).toBeVisible();
  await expect(page.getByText("Research with a visible chain of evidence.")).toBeVisible();
  await expect(page.getByRole("heading", { name: "From financial data to a reviewable decision-support workflow." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Verification", exact: true })).toBeVisible();
  await expect(page.getByText(/without crossing into trade execution or personal advice/i)).toBeVisible();
  await expect(page.getByAltText(/time-stamped public ETF market prices/i)).toBeVisible();
  await expect(page.getByAltText(/mapping Microsoft filing findings to SEC source locations/i)).toBeVisible();
  await expect(page.getByAltText(/human review history and reviewed Markdown export state/i)).toBeVisible();
});

test("First Revenue Game connects product judgment to reliable backend evidence", async ({ page }) => {
  await page.goto("/first-revenue-game");

  await expect(page.getByRole("heading", { name: "First Revenue Game", exact: true })).toBeVisible();
  await expect(page.getByText(/Forty-one Vitest tests and 36 passing Playwright checks/i)).toBeVisible();
  await expect(page.getByText("One mission, then proof.")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Verification", exact: true })).toBeVisible();
  await expect(page.getByText(/production end-user identity/i)).toBeVisible();
  await expect(page.getByAltText("First Revenue Game member proof pending review state")).toBeVisible();
});

test("Wild Route case study proves product engineering beyond the interface", async ({ page }) => {
  await page.goto("/wild-route");

  await expect(page.getByRole("heading", { name: "Wild Route" })).toBeVisible();
  await expect(page.getByText(/74 deterministic Vitest cases pass/i)).toBeVisible();
  await expect(page.getByText("A calm interface for a dense decision.")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Verification", exact: true })).toBeVisible();
  await expect(page.getByText(/deterministic planning dataset, planning estimates/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /open public demo/i })).toHaveAttribute(
    "href",
    "https://ai-travel-planner-psi-five.vercel.app",
  );
  await expect(page.getByAltText("Wild Route selected route planner with ranking reasons")).toBeVisible();
});

test("ThreadScribe case study shows trustworthy AI interaction evidence", async ({ page }) => {
  await page.goto("/threadscribe");

  await expect(page.getByRole("heading", { name: "ThreadScribe Studio" })).toBeVisible();
  await expect(page.getByText(/45 of 45 deterministic checks/i)).toBeVisible();
  await expect(page.getByText("Keep the source close to the draft.")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Verification", exact: true })).toBeVisible();
  await expect(page.getByText(/public walkthrough uses deterministic sample transforms/i)).toBeVisible();
  await expect(page.getByAltText("ThreadScribe raw timestamped transcript view")).toBeVisible();
});

test("Focusin case study connects native product judgment to verified engineering", async ({ page }) => {
  await page.goto("/focusin");

  await expect(page.getByRole("heading", { name: "Focusin", exact: true })).toBeVisible();
  await expect(page.getByText(/Fifty-four deterministic tests/i)).toBeVisible();
  await expect(page.getByText("A small reset that knows when to get out of the way.")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Verification", exact: true })).toBeVisible();
  await expect(page.getByText(/no signed archive, installable external beta/i)).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Small on the surface. Deliberate underneath." }),
  ).toBeVisible();
  await expect(
    page.getByAltText("Focusin moving from a focus interval into an active micro-break"),
  ).toBeVisible();
  await expect(page.getByAltText("Focusin macOS micro-break recommendation")).toBeVisible();
  await expect(
    page.getByAltText("Focusin activity and system settings showing local preferences and recovery"),
  ).toBeVisible();
});

test("Endless Activity case study presents native product craft with honest scope", async ({ page }) => {
  await page.goto("/endless-activity");

  await expect(page.getByRole("heading", { name: "Endless Activity", exact: true })).toBeVisible();
  await expect(page.getByText(/Twelve unit tests and seven UI tests/i)).toBeVisible();
  await expect(page.getByText("A quick choice for the moment between plans.")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Verification", exact: true })).toBeVisible();
  await expect(page.getByText(/latest full simulator verification is dated/i)).toBeVisible();
  await expect(page.getByAltText("Endless Activity saved activity collection")).toBeVisible();
});

test.describe("mobile and motion fallbacks", () => {
  test.use({ viewport: { width: 390, height: 844 }, isMobile: true });

  test("featured case studies stay readable without horizontal overflow", async ({ page }) => {
    for (const [route, evidenceId] of [
      ["/ai-finance", "aperture"],
      ["/first-revenue-game", "first-revenue-game"],
      ["/wild-route", "wild-route"],
      ["/threadscribe", "threadscribe"],
      ["/focusin", "focusin"],
      ["/endless-activity", "endless-activity"],
    ]) {
      await page.goto(route);
      await expect(page.locator(`[data-case-study-evidence="${evidenceId}"]`)).toBeVisible();

      const horizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth,
      );
      expect(horizontalOverflow).toBeLessThanOrEqual(1);
    }
  });

  test("about page preserves its editorial layout without horizontal overflow", async ({ page }) => {
    await page.goto("/about");
    await expect(
      page.getByRole("heading", { name: "Hi, I’m Marcell." }),
    ).toBeVisible();

    const horizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );
    expect(horizontalOverflow).toBeLessThanOrEqual(1);
  });

  test("Endless Activity stacks the device artwork below the mobile copy", async ({ page }) => {
    await page.goto("/endless-activity");

    const copy = await page.getByRole("heading", { name: "Endless Activity", exact: true }).boundingBox();
    const device = await page.getByAltText("Endless Activity interface preview").boundingBox();

    expect(copy).not.toBeNull();
    expect(device).not.toBeNull();
    expect(device!.y).toBeGreaterThan(copy!.y + copy!.height - 1);
  });

  test("reduced-motion preference shortens interface transitions", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/about");

    const transitionDuration = await page
      .getByRole("link", { name: "Resume" })
      .evaluate((element) => {
        const duration = getComputedStyle(element).transitionDuration;
        return duration === "" ? 0 : Number.parseFloat(duration);
      });

    expect(transitionDuration).toBeLessThanOrEqual(0.001);

    for (const [route, heading] of [
      ["/threadscribe", "ThreadScribe Studio"],
      ["/first-revenue-game", "First Revenue Game"],
      ["/focusin", "Focusin"],
      ["/endless-activity", "Endless Activity"],
    ] as const) {
      await page.goto(route);
      await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    }
  });

  test("mobile navigation remains usable with a keyboard", async ({ page }) => {
    await page.goto("/about");

    const menuButton = page.getByRole("button", { name: "Open navigation" });
    await menuButton.focus();
    await expect(menuButton).toBeFocused();
    await page.keyboard.press("Enter");

    const resumeLink = page.getByRole("link", { name: "Open Resume" });
    await expect(resumeLink).toBeVisible();
    await resumeLink.focus();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/\/resume$/);
  });
});

test("public routes send baseline browser security headers", async ({ page }) => {
  const response = await page.request.get("/");

  expect(response.status()).toBe(200);
  expect(response.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response.headers()["x-frame-options"]).toBe("DENY");
  expect(response.headers()["referrer-policy"]).toBe("strict-origin-when-cross-origin");
  expect(response.headers()["permissions-policy"]).toContain("camera=()");
  expect(response.headers()["content-security-policy"]).toContain("frame-ancestors 'none'");
  expect(response.headers()["content-security-policy"]).toContain("https://*.vercel-insights.com");
  expect(response.headers()["content-security-policy"]).toContain("script-src");
  expect(response.headers()["content-security-policy"]).toContain("script-src 'self' 'unsafe-inline'");
  expect(response.headers()["content-security-policy"]).toContain("https://*.posthog.com");
  expect(response.headers()["content-security-policy"]).toContain("connect-src 'self'");
  expect(response.headers()["content-security-policy"]).toContain("worker-src 'self' blob: data:");
});

test("homepage header changes tone at the bottom of the page", async ({ page }) => {
  await prepareHomepage(page);
  await page.goto("/");
  await expect(page.locator(".home-intro-shell")).toHaveCount(0);

  const headerSurface = page.locator("header.sticky-header > div").first();
  await expect(headerSurface).toHaveClass(/bg-\[#0a1521\]\/95/);

  await page.evaluate(() => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "auto" });
  });

  await expect(headerSurface).toHaveClass(/bg-white\/72/);
});

test("analytics loads without an interrupting privacy popover", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("complementary", { name: "Privacy choices" })).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Privacy" })).toHaveCount(0);
  await expect
    .poll(() =>
      page.evaluate(() => {
        const analyticsWindow = window as Window & {
          va?: unknown;
          si?: unknown;
        };

        return typeof analyticsWindow.va === "function" && typeof analyticsWindow.si === "function";
      }),
    )
    .toBe(true);
});

test("privacy page explains analytics behavior", async ({ page }) => {
  await page.goto("/privacy");

  await expect(page.getByRole("heading", { name: "Analytics, clearly explained." })).toBeVisible();
  await expect(page.getByText("Analytics is active")).toBeVisible();
  await expect(page.getByText("Service providers")).toBeVisible();
});

test("public pages do not expose stale private repository URLs", async ({ page }) => {
  const staleUrls = [
    "https://github.com/TheMarcellVarga/gamified-business-development",
    "https://github.com/TheMarcellVarga/ai-travel-planner",
    "https://github.com/TheMarcellVarga/ai-transcriber",
    "https://github.com/TheMarcellVarga/focusin",
    "https://github.com/TheMarcellVarga/endless-activity",
  ];

  for (const route of [
    "/first-revenue-game",
    "/wild-route",
    "/threadscribe",
    "/focusin",
    "/endless-activity",
  ]) {
    const response = await page.request.get(route);
    const html = await response.text();
    for (const staleUrl of staleUrls) {
      expect(html, `${route} should not expose ${staleUrl}`).not.toContain(staleUrl);
    }
  }
});

test("phone number is served only through the no-cache reveal endpoint", async ({ page }) => {
  const phoneResponse = await page.request.get("/api/contact/phone");
  const homepageResponse = await page.request.get("/");
  const resumeResponse = await page.request.get("/resume");

  expect(phoneResponse.status()).toBe(200);
  expect(phoneResponse.headers()["cache-control"]).toContain("no-store");
  await expect(phoneResponse.json()).resolves.toEqual({ phone: "+6589771730" });
  await expect(homepageResponse.text()).resolves.not.toContain("Reveal phone number");
  await expect(resumeResponse.text()).resolves.toContain("Reveal phone number");
  await expect(homepageResponse.text()).resolves.not.toContain("+6589771730");
  await expect(resumeResponse.text()).resolves.not.toContain("+6589771730");
});

test("the dedicated contact route is removed in favor of the homepage section", async ({ page }) => {
  const response = await page.request.get("/contact");

  expect(response.status()).toBe(404);
});

test("selected work exposes canonical metadata and is listed in the sitemap", async ({ page }) => {
  const selectedRoutes = [
    ["/ai-finance", /Aperture Financial Intelligence Case Study/i],
    ["/first-revenue-game", /First Revenue Game Case Study/i],
    ["/wild-route", /Wild Route Case Study/i],
    ["/threadscribe", /ThreadScribe Studio Case Study/i],
    ["/focusin", /Focusin Case Study/i],
    ["/endless-activity", /Endless Activity Case Study/i],
    ["/catchscan", /CatchScan Case Study/i],
    ["/askcody", /AskCody Case Study/i],
    ["/ess", /European Study Solution Case Study/i],
  ] as const;

  for (const [route, title] of selectedRoutes) {
    await page.goto(route);
    await expect(page).toHaveTitle(title);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://marcellvarga.com${route}`,
    );
  }

  const sitemap = await page.request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const sitemapText = await sitemap.text();
  expect(sitemapText).toContain("https://marcellvarga.com/about");
  for (const [route] of selectedRoutes.slice(0, 6)) {
    expect(sitemapText).toContain(`https://marcellvarga.com${route}`);
  }
  for (const route of ["/catchscan", "/askcody", "/ess"]) {
    expect(sitemapText).not.toContain(`https://marcellvarga.com${route}`);
  }
});

test("internal portfolio links resolve", async ({ page }) => {
  await prepareHomepage(page);
  await page.goto("/");

  const routes = await page.locator('a[href^="/"]').evaluateAll((links) =>
    [
      ...new Set(
        links.map((link) => new URL((link as HTMLAnchorElement).href).pathname),
      ),
    ],
  );

  for (const route of routes) {
    const response = await page.request.get(route);
    expect(response.status(), `${route} should resolve`).toBeLessThan(400);
  }
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

test("public routes have no serious or critical automated accessibility violations", async ({ page }) => {
  test.setTimeout(60_000);

  for (const route of [
    "/",
    "/ai-finance",
    "/first-revenue-game",
    "/wild-route",
    "/threadscribe",
    "/focusin",
    "/endless-activity",
    "/about",
    "/resume",
    "/askcody",
    "/catchscan",
    "/ess",
  ]) {
    if (route === "/") {
      await prepareHomepage(page);
    }
    await page.goto(route);
    await page.waitForTimeout(1_000);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    const blockingViolations = results.violations.filter((violation) =>
      ["serious", "critical"].includes(violation.impact ?? ""),
    );

    expect(blockingViolations, `${route} accessibility violations`).toEqual([]);
  }
});
