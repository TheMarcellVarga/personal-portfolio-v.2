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
  await expect(page.locator('#work a[href="/wild-route"]')).toBeVisible();
  await expect(page.locator('#work a[href="/threadscribe"]')).toBeVisible();
  await expect(page.locator('#work a[href="/catchscan"]')).toBeVisible();
  await expect(page.locator('#work a[href="/askcody"]')).toBeVisible();
  await expect(page.locator('#work a[href="/ess"]')).toHaveCount(0);
  await expect(page.locator("#work a")).toHaveCount(5);
  await expect(page.locator('#work a[href="/about"]')).toHaveCount(0);
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
  for (const [route, evidenceId, status] of [
    ["/ai-finance", "aperture", "Local release-ready"],
    ["/wild-route", "wild-route", "Deployed demo"],
    ["/threadscribe", "threadscribe", "Local release-ready"],
    ["/about", "professional-product-work", "Working"],
  ]) {
    await page.goto(route);
    await expect(page.locator(`[data-case-study-evidence="${evidenceId}"]`)).toBeVisible();
    await expect(page.locator(`[data-case-study-status="${evidenceId}"]`)).toHaveText(status);
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

test("Wild Route case study proves product engineering beyond the interface", async ({ page }) => {
  await page.goto("/wild-route");

  await expect(page.getByRole("heading", { name: "Wild Route" })).toBeVisible();
  await expect(page.getByText("74", { exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "What broke in production." })).toBeVisible();
  await expect(page.getByText(/process memory would be shared/i)).toBeVisible();
  await expect(page.getByText(/fixture-backed data and planning estimates/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /open live demo/i })).toHaveAttribute(
    "href",
    "https://ai-travel-planner-psi-five.vercel.app",
  );
  await expect(page.getByRole("link", { name: /inspect source/i })).toHaveAttribute(
    "href",
    "https://github.com/TheMarcellVarga/ai-travel-planner",
  );
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
  await expect(page.getByText(/public walkthrough uses deterministic fixture/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /inspect source/i })).toHaveAttribute(
    "href",
    "https://github.com/TheMarcellVarga/ai-transcriber",
  );
});

test.describe("mobile and motion fallbacks", () => {
  test.use({ viewport: { width: 390, height: 844 }, isMobile: true });

  test("featured case studies stay readable without horizontal overflow", async ({ page }) => {
    for (const [route, evidenceId] of [
      ["/ai-finance", "aperture"],
      ["/wild-route", "wild-route"],
      ["/threadscribe", "threadscribe"],
      ["/about", "professional-product-work"],
    ]) {
      await page.goto(route);
      await expect(page.locator(`[data-case-study-evidence="${evidenceId}"]`)).toBeVisible();

      const horizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth,
      );
      expect(horizontalOverflow).toBeLessThanOrEqual(1);
    }
  });

  test("reduced-motion preference shortens interface transitions", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/about");

    const transitionDuration = await page
      .getByRole("link", { name: "View full resume" })
      .evaluate((element) => Number.parseFloat(getComputedStyle(element).transitionDuration));

    expect(transitionDuration).toBeLessThanOrEqual(0.001);
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
    ["/wild-route", /Wild Route Case Study/i],
    ["/threadscribe", /ThreadScribe Studio Case Study/i],
    ["/catchscan", /CatchScan Case Study/i],
    ["/askcody", /AskCody Case Study/i],
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
  for (const [route] of selectedRoutes) {
    expect(sitemapText).toContain(`https://marcellvarga.com${route}`);
  }
});

test("internal portfolio links resolve", async ({ page }) => {
  await prepareHomepage(page);
  await page.goto("/");

  const routes = await page.locator('a[href^="/"]').evaluateAll((links) =>
    [...new Set(links.map((link) => new URL(link.href).pathname))],
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
  for (const route of [
    "/",
    "/ai-finance",
    "/wild-route",
    "/threadscribe",
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
