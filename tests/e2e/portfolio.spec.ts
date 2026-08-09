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
  await expect(page.locator("[data-hero-badge-label]").last()).toBeVisible();
  await expect(page.locator('#work a[href="/ai-finance"]')).toBeVisible();
  await expect(page.locator('#work a[href="/first-revenue-game"]')).toBeVisible();
  await expect(page.locator('#work a[href="/wild-route"]')).toBeVisible();
  await expect(page.locator('#work a[href="/threadscribe"]')).toBeVisible();
  await expect(page.locator('#work a[href="/focusin"]')).toBeVisible();
  await expect(page.locator('#work a[href="/endless-activity"]')).toBeVisible();
  await expect(page.locator('#work a[href="/catchscan"]')).toHaveCount(0);
  await expect(page.getByRole("button", { name: /legacy projects/i })).toBeVisible();
  await expect(page.locator("#work a")).toHaveCount(6);

  await page.getByRole("button", { name: /legacy projects/i }).click();
  await expect(page.locator('#work a[href="/catchscan"]')).toBeVisible();
  await expect(page.locator('#work a[href="/askcody"]')).toBeVisible();
  await expect(page.locator('#work a[href="/ess"]')).toBeVisible();
  await expect(page.locator("#work a")).toHaveCount(9);
  await expect(page.locator('#work a[href="/about"]')).toHaveCount(0);
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

test("about, contact, and resume routes are reachable", async ({ page }) => {
  await page.goto("/about");
  await expect(
    page.getByRole("heading", { name: "Product thinking, built into code." }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /selected work/i })).toBeVisible();

  await page.goto("/contact");
  await expect(page.getByRole("heading", { name: "Say hi." })).toBeVisible();
  await expect(page.getByRole("link", { name: /themarcellvarga@gmail.com/i })).toBeVisible();

  await page.goto("/resume");
  await expect(page.getByRole("heading", { name: "Design-engineering work, on one page." })).toBeVisible();

  const legacyPhoneEndpoint = await page.request.get("/api/contact/phone");
  expect(legacyPhoneEndpoint.status()).toBe(404);
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
    ["/ai-finance", "Aperture Financial Intelligence", 5],
    ["/first-revenue-game", "First Revenue Game", 5],
    ["/wild-route", "Wild Route", 5],
    ["/threadscribe", "ThreadScribe Studio", 5],
    ["/focusin", "Focusin", 5],
    ["/endless-activity", "Endless Activity", 5],
    ["/catchscan", "CatchScan", 6],
    ["/askcody", "AskCody", 6],
    ["/ess", "European Study Solution", 6],
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
  await expect(page.getByText("40/40")).toBeVisible();
  await expect(page.getByText("From private document to reviewed evidence.")).toBeVisible();
  await expect(page.getByRole("list", { name: "Aperture system architecture" })).toBeVisible();
  await expect(page.getByText("Local rigor before live-model theatre.")).toBeVisible();
  await expect(page.getByText(/not a public financial service/i)).toBeVisible();
});

test("First Revenue Game connects product judgment to reliable backend evidence", async ({ page }) => {
  await page.goto("/first-revenue-game");

  await expect(page.getByRole("heading", { name: "First Revenue Game", exact: true })).toBeVisible();
  await expect(page.getByText("41", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("list", { name: "First Revenue Game product workflow" }),
  ).toBeVisible();
  await expect(
    page.getByRole("list", { name: "First Revenue Game system architecture" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "The backend earns its complexity." })).toBeVisible();
  await expect(page.getByText(/no hosted production environment/i).first()).toBeVisible();
  await expect(page.locator("video")).toHaveAttribute(
    "poster",
    "/images/first-revenue-game/member-dashboard.jpg",
  );
  await expect(page.getByText("Source available privately on request")).toBeVisible();
});

test("Wild Route case study proves product engineering beyond the interface", async ({ page }) => {
  await page.goto("/wild-route");

  await expect(page.getByRole("heading", { name: "Wild Route" })).toBeVisible();
  await expect(page.getByText("74", { exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "What broke in production." })).toBeVisible();
  await expect(page.getByText(/process memory would be shared/i)).toBeVisible();
  await expect(page.getByText(/deterministic planning dataset and estimates/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /open live demo/i })).toHaveAttribute(
    "href",
    "https://ai-travel-planner-psi-five.vercel.app",
  );
  await expect(page.getByText("Source available privately on request")).toBeVisible();
});

test("ThreadScribe case study shows trustworthy AI interaction evidence", async ({ page }) => {
  await page.goto("/threadscribe");

  await expect(page.getByRole("heading", { name: "ThreadScribe Studio" })).toBeVisible();
  await expect(page.getByText("45/45")).toBeVisible();
  await expect(
    page.getByRole("list", { name: "ThreadScribe system architecture" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Failure stays truthful and useful." }),
  ).toBeVisible();
  await expect(page.getByText(/public walkthrough uses deterministic sample/i)).toBeVisible();
  await expect(page.getByText("Source available privately on request")).toBeVisible();
  await expect(page.locator("video track[kind='captions']")).toHaveAttribute(
    "src",
    "/images/threadscribe/threadscribe-demo.vtt",
  );
});

test("Focusin case study connects native product judgment to verified engineering", async ({ page }) => {
  await page.goto("/focusin");

  await expect(page.getByRole("heading", { name: "Focusin", exact: true })).toBeVisible();
  await expect(page.getByText("54", { exact: true }).first()).toBeVisible();
  await expect(page.getByRole("list", { name: "Focusin product state loop" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "The local loop does not depend on platform permission." }),
  ).toBeVisible();
  await expect(page.getByText(/no signed archive, installable external beta/i)).toBeVisible();
  await expect(page.getByText("Source available privately on request")).toBeVisible();
});

test("Endless Activity case study presents native product craft with honest scope", async ({ page }) => {
  await page.goto("/endless-activity");

  await expect(page.getByRole("heading", { name: "Endless Activity", exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Core logic and golden paths" }).click();
  await expect(page.getByText("12 + 7", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "The deck owns presentation, not truth." }),
  ).toBeVisible();
  await expect(page.getByText(/latest full simulator verification is dated/i)).toBeVisible();
  await expect(page.getByText("Source available privately on request").first()).toBeVisible();
  await expect(page.locator("#walkthrough video track[kind='descriptions']")).toHaveAttribute(
    "src",
    "/images/endless-activity/endless-activity-demo.vtt",
  );
  await expect(page.locator("#endless-activity-transcript")).toContainText(
    "Preferences expose duration",
  );
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

  test("Endless Activity stacks the device artwork below the mobile copy", async ({ page }) => {
    await page.goto("/endless-activity");

    const copy = await page.locator("main header > div").nth(0).boundingBox();
    const device = await page.locator("main header img").boundingBox();

    expect(copy).not.toBeNull();
    expect(device).not.toBeNull();
    expect(device!.y).toBeGreaterThan(copy!.y + copy!.height - 1);
  });

  test("reduced-motion preference shortens interface transitions", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/contact");

    const transitionDuration = await page
      .getByRole("link", { name: "Resume" })
      .evaluate((element) => Number.parseFloat(getComputedStyle(element).transitionDuration));

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
    await page.goto("/contact");

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
  expect(response.headers()["content-security-policy"]).not.toMatch(/posthog|vercel-insights|analytics/i);
});

test("public pages contain no analytics or tracking surface", async ({ page }) => {
  await page.goto("/contact");

  await expect(page.getByRole("complementary", { name: "Optional analytics" })).toHaveCount(0);
  await expect(page.locator('script[src*="posthog"], script[src*="vercel-insights"], script[src*="analytics"]')).toHaveCount(0);

  const cookies = await page.context().cookies();
  expect(cookies.some((cookie) => /analytics|posthog|tracking/i.test(cookie.name))).toBe(false);
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

test("public routes do not serve personal phone data", async ({ page }) => {
  const phoneResponse = await page.request.get("/api/contact/phone");
  const contactResponse = await page.request.get("/contact");
  const resumeResponse = await page.request.get("/resume");

  expect(phoneResponse.status()).toBe(404);
  await expect(contactResponse.text()).resolves.not.toContain("Reveal phone number");
  await expect(resumeResponse.text()).resolves.not.toContain("Available on request");
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
    "/contact",
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
