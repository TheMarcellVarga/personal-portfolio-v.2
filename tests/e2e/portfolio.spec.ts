import { expect, test, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { projects } from "../../app/data/projects";

test.use({ launchOptions: { args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] } });

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
  await expect(page.locator("#process h2")).toContainText("How I think and build.");
  await expect(page.locator("[data-expertise-area]")).toHaveCount(3);
  await expect(page.locator("#process")).toContainText("React");
  await expect(page.locator("#process")).toContainText("WCAG");
  await expect(page.locator("#process")).toContainText("Working with AI");
  await expect(page.locator("header nav").getByRole("button", { name: "Approach", exact: true })).toBeVisible();
  await expect(page.getByTestId("case-study-restructuring-notice")).toHaveCount(0);

  await page.locator("header nav").getByRole("button", { name: "Contact", exact: true }).click();
  await expect(page.locator("#contact")).toBeInViewport();
  await expect(page.locator("[data-case-study-content]")).not.toHaveAttribute("inert");
  await expect(page.locator("[data-hero-badge-label]").last()).toBeVisible();
  await expect(page.locator('#work a[href="/ai-finance"]')).toBeVisible();
  await expect(page.locator('#work a[href="/first-revenue-game"]')).toHaveCount(0);
  await expect(page.locator('#work a[href="/wild-route"]')).toBeVisible();
  await expect(page.locator('#work a[href="/threadscribe"]')).toHaveCount(0);
  await expect(page.locator('#work a[href="/focusin"]')).toBeVisible();
  await expect(page.locator('#work a[href="/endless-activity"]')).toBeVisible();
  await expect(page.locator('#work a[href="/catchscan"]')).toHaveCount(0);

  await expect(page.getByRole("button", { name: /legacy projects/i })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await expect(page.locator("[data-case-study-content] a")).toHaveCount(4);
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

test("capabilities keep expertise readable and graphics decorative", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await prepareHomepage(page);
  await page.goto("/");
  await expect(page.locator(".home-intro-stage")).toHaveAttribute("aria-hidden", "false");
  const section = page.locator("#process");
  await expect(section.getByRole("heading", { level: 3 })).toHaveText([
    "Designing interactions", "Building interfaces", "Working with AI",
  ]);
  await expect(section.getByRole("button")).toHaveCount(0);
  await expect(section.locator('[aria-live]')).toHaveCount(0);
  const graphics = section.locator("[data-expertise-graphic]");
  await expect(graphics).toHaveCount(3);
  for (const graphic of await graphics.all()) {
    await expect(graphic).toHaveAttribute("aria-hidden", "true");
    await expect(graphic.locator('button, a, [tabindex]')).toHaveCount(0);
  }
});

test("capabilities move with normal scrolling without pinned holds", async ({ page }) => {
  await prepareHomepage(page);
  await page.goto("/");
  await expect(page.locator(".home-intro-stage")).toHaveAttribute("aria-hidden", "false");
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }, { width: 320, height: 640 }]) {
    await page.setViewportSize(viewport);
    for (const area of await page.locator("[data-expertise-area]").all()) {
      const row = area.locator(".expertise-row");
      await area.evaluate(element => scrollTo({ top: element.getBoundingClientRect().top + scrollY - 100, behavior: "instant" }));
      await expect(area.locator("h3")).toBeInViewport();
      await expect(area.locator("[data-expertise-graphic]")).toBeInViewport();
      const before = await row.evaluate(element => element.getBoundingClientRect().top);
      await page.evaluate(() => scrollBy({ top: 160, behavior: "instant" }));
      await expect.poll(() => row.evaluate(element => element.getBoundingClientRect().top)).toBeCloseTo(before - 160, 0);
      const bounds = await area.evaluate(element => {
        const row = element.firstElementChild!;
        return { rowHeight: row.clientHeight, areaHeight: element.clientHeight, fits: row.scrollHeight <= row.clientHeight + 1 };
      });
      expect(bounds.areaHeight).toBeLessThanOrEqual(bounds.rowHeight + 2);
      expect(bounds.fits).toBe(true);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".expertise-row").first()).toHaveCSS("position", "relative");
});

test("capabilities keep the heading above varied row compositions", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await prepareHomepage(page);
  await page.goto("/");
  await expect(page.locator(".home-intro-stage")).toHaveAttribute("aria-hidden", "false");
  const section = page.locator("#process");
  for (const viewport of [{ width: 1440, height: 900 }, { width: 1024, height: 720 }, { width: 390, height: 844 }, { width: 320, height: 640 }]) {
    await page.setViewportSize(viewport);
    await expect(section.locator('[data-expertise-area="frontend"] [data-expertise-copy]')).toHaveCSS(
      "order", viewport.width >= 1024 ? "2" : "1",
    );
    const bounds = await section.evaluate(element => {
      const heading = element.querySelector("h2")!.getBoundingClientRect();
      const firstRow = element.querySelector(".expertise-row")!.getBoundingClientRect();
      const rows = Array.from(element.querySelectorAll(".expertise-row")).map(row => {
        const text = row.querySelector("[data-expertise-copy]")!.getBoundingClientRect();
        const graphic = row.querySelector("[data-expertise-graphic]")!.getBoundingClientRect();
        return { kind: row.closest("[data-expertise-area]")!.getAttribute("data-expertise-area"), textLeft: text.left, textTop: text.top, textRight: text.right, textBottom: text.bottom, graphicLeft: graphic.left, graphicRight: graphic.right, graphicTop: graphic.top, graphicBottom: graphic.bottom };
      });
      return { headingBottom: heading.bottom, rowTop: firstRow.top, rows };
    });
    expect(bounds.headingBottom).toBeLessThan(bounds.rowTop);
    for (const row of bounds.rows) {
      if (viewport.width >= 1024) {
        if (row.kind === "frontend") expect(row.graphicRight).toBeLessThan(row.textLeft);
        else expect(row.textRight).toBeLessThan(row.graphicLeft);
      } else {
        expect(row.textBottom).toBeLessThan(row.graphicTop);
      }
    }
  }
  await expect(section.getByRole("navigation")).toHaveCount(0);
});

test("capability graphics stay usable without WebGL", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await prepareHomepage(page);
  await page.addInitScript(() => {
    const getContext = HTMLCanvasElement.prototype.getContext;
    Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
      value(this: HTMLCanvasElement, contextId: string, options: unknown) {
        if (contextId === "webgl2") {
          this.dataset.webglAttempted = "true";
          return null;
        }
        return Reflect.apply(getContext, this, [contextId, options]);
      },
    });
  });
  await page.goto("/");
  await expect(page.locator(".home-intro-stage")).toHaveAttribute("aria-hidden", "false");
  await expect(page.locator("[data-expertise-graphic]")).toHaveCount(3);
  for (const graphic of await page.locator("[data-expertise-graphic]").all()) {
    await graphic.scrollIntoViewIfNeeded();
    await expect(graphic.locator("canvas")).toHaveAttribute("data-webgl-attempted", "true");
    await expect(graphic).toHaveAttribute("data-renderer", "vector");
    await expect(graphic.locator("svg")).toBeVisible();
  }
  await expect(page.locator("#process")).toContainText("React");
  await expect(page.locator("#process")).toContainText("Figma");
  await expect(page.locator("#process").getByRole("button")).toHaveCount(0);
});

test.describe("ambient capability graphics", () => {
  test("ambient motion pauses offscreen and with reduced motion", async ({ page }) => {
    await prepareHomepage(page);
    await page.addInitScript(() => {
      const getContext = HTMLCanvasElement.prototype.getContext;
      const tracked = new WeakSet<WebGL2RenderingContext>();
      Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
        value(this: HTMLCanvasElement, contextId: string, options: unknown) {
          const context = Reflect.apply(getContext, this, [contextId, options]);
          if (contextId === "webgl2" && context instanceof WebGL2RenderingContext && this.parentElement?.dataset.expertiseGraphic && !tracked.has(context)) {
            tracked.add(context);
            const canvas = this;
            const draw = context.drawElements;
            context.drawElements = (...args: Parameters<WebGL2RenderingContext["drawElements"]>) => {
              canvas.dataset.drawCalls = String(Number(canvas.dataset.drawCalls ?? 0) + 1);
              return Reflect.apply(draw, context, args);
            };
          }
          return context;
        },
      });
    });
    await page.goto("/");
    await expect(page.locator(".home-intro-stage")).toHaveAttribute("aria-hidden", "false");
    for (const graphic of await page.locator("[data-expertise-graphic]").all()) {
      await page.emulateMedia({ reducedMotion: "no-preference" });
      await graphic.scrollIntoViewIfNeeded();
      await expect(graphic).toHaveAttribute("data-renderer", "three", { timeout: 15000 });
      const canvas = graphic.locator("canvas");
      const count = async () => Number(await canvas.getAttribute("data-draw-calls"));
      await expect.poll(count).toBeGreaterThan(0);
      const running = await count();
      await expect.poll(count).toBeGreaterThan(running);

      await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
      await expect(graphic).not.toBeInViewport();
      await page.waitForTimeout(100);
      const paused = await count();
      await page.waitForTimeout(200);
      expect(await count()).toBe(paused);

      await graphic.scrollIntoViewIfNeeded();
      await expect.poll(count).toBeGreaterThan(paused);
      await page.emulateMedia({ reducedMotion: "reduce" });
      // Allow the final static pose to render on the software GPU.
      await page.waitForTimeout(500);
      const reduced = await count();
      await page.waitForTimeout(200);
      expect(await count()).toBe(reduced);
      await expect(graphic).toHaveAttribute("data-renderer", "three");
    }
  });
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

test("Principles preserves the desktop reveal and fits shorter screens", async ({ page }) => {
  await prepareHomepage(page);
  await page.goto("/");
  await expect(page.locator(".home-intro-stage")).toHaveAttribute("aria-hidden", "false");
  const panel = page.locator('#about [data-scroll-anchor="about"]');

  for (const size of [{ width: 1440, height: 900 }, { width: 1280, height: 720 }, { width: 1024, height: 720 }]) {
    await page.setViewportSize(size);
    for (const progress of [0.2, 0.6, 0.75]) {
      await page.locator("#about").evaluate((section, fraction) => {
        const top = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: top + (section.clientHeight - window.innerHeight) * fraction, behavior: "instant" });
      }, progress);
      await expect(panel).toBeInViewport();
      await expect.poll(() => panel.evaluate(element => Number(getComputedStyle(element).opacity))).toBeGreaterThan(0.98);
      await expect(panel).toContainText("Principles");
    }
    await expect(panel.locator("p")).toContainText("testing, and release.");
    const bounds = await panel.evaluate((element) => {
      const rect = element.getBoundingClientRect();
      return { top: rect.top, bottom: rect.bottom, contentFits: element.scrollHeight <= element.clientHeight + 1 };
    });
    expect(bounds.top).toBeGreaterThanOrEqual(0);
    expect(bounds.bottom).toBeLessThanOrEqual(size.height);
    expect(bounds.contentFits).toBe(true);
  }
});

test("mobile Principles and Contact share the portfolio panel treatment", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await prepareHomepage(page);
  await page.goto("/");
  await expect(page.locator(".home-intro-shell")).toHaveCount(0);
  const principles = page.locator('#about [data-scroll-anchor="about"]');
  const contact = page.locator('#contact [data-scroll-anchor="contact"]');
  await principles.scrollIntoViewIfNeeded();
  await expect(principles).toHaveCSS("opacity", "1");
  await expect(principles.locator("p")).toHaveText(
    "I turn complex product workflows into clear interfaces, then carry them through backend architecture, reliability, testing, and release.",
  );
  await contact.scrollIntoViewIfNeeded();
  await expect(contact.getByText("Contact", { exact: true })).toBeVisible();
  const surfaces = await Promise.all([principles, contact].map((panel) => panel.evaluate((element) => {
    const style = getComputedStyle(element);
    return { background: style.backgroundColor, radius: style.borderRadius, left: element.getBoundingClientRect().left, width: element.clientWidth };
  })));
  expect(surfaces[0]).toEqual(surfaces[1]);
});

test("contact keeps desktop button styling across responsive breakpoints", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await prepareHomepage(page);
  await page.goto("/");
  await expect(page.locator(".home-intro-stage")).toHaveAttribute("aria-hidden", "false");
  const contact = page.locator("#contact");
  let desktopStyles: unknown;
  for (const width of [1440, 768, 640, 390, 320]) {
    await page.setViewportSize({ width, height: 844 });
    await contact.scrollIntoViewIfNeeded();
    await expect(contact.getByRole("link")).toHaveCount(3);
    await expect(contact.getByRole("link", { name: /themarcellvarga@gmail.com/i })).toBeVisible();
    const buttons = await contact.locator("a").evaluateAll((links) => links.map((link) => {
      const style = getComputedStyle(link);
      const label = link.querySelector("span span")!;
      return {
        treatment: { background: style.backgroundColor, radius: style.borderRadius, shadow: style.boxShadow, textTransform: getComputedStyle(label).textTransform },
        fits: link.scrollWidth <= link.clientWidth + 1,
        touchHeight: link.getBoundingClientRect().height,
      };
    }));
    const styles = buttons.map((button) => button.treatment);
    if (width === 1440) {
      desktopStyles = styles;
      for (const style of styles) {
        expect(style.radius).toBe("21.6px");
        expect(style.textTransform).toBe("uppercase");
        expect(style.shadow).toContain("inset");
        expect(style.background).toMatch(/(?:, |\/ )0\.07\)$/);
      }
    }
    else expect(styles).toEqual(desktopStyles);
    for (const button of buttons) {
      expect(button.fits).toBe(true);
      expect(button.touchHeight).toBeGreaterThanOrEqual(44);
    }
  }
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
    ["/ai-finance", "aperture", "Live product preview"],
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

  for (const [route, currentTitle] of [
    ["/ai-finance", "Aperture Financial Intelligence"],
    ["/first-revenue-game", "First Revenue Game"],
    ["/wild-route", "Wild Route"],
    ["/threadscribe", "ThreadScribe Studio"],
    ["/focusin", "Focusin"],
    ["/endless-activity", "Endless Activity"],
    ["/catchscan", "CatchScan"],
    ["/askcody", "AskCody"],
    ["/ess", "European Study Solution"],
  ] as const) {
    await page.goto(route);

    const expectedRecommendations = projects.filter(
      (project) =>
        project.isListed !== false &&
        project.portfolioPlacement !== "archive" &&
        project.title !== currentTitle,
    );
    const currentWork = page.locator("[data-other-works]");
    await expect(currentWork).toContainText("Current case studies");
    await expect(currentWork.locator("[data-other-works-card]")).toHaveCount(
      expectedRecommendations.length,
    );
    for (const project of expectedRecommendations) {
      await expect(
        currentWork.getByRole("heading", { name: project.title, exact: true }),
      ).toBeVisible();
    }
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
  await expect(page.getByText("One financial picture before many tools.")).toBeVisible();
  await expect(page.getByRole("heading", { name: "From a broad fintech idea to one inspectable system." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Verification", exact: true })).toBeVisible();
  await expect(page.getByText(/without crossing into trade execution or personal advice/i)).toBeVisible();
  await expect(page.getByAltText(/cross-market monitor showing provider-backed market states/i)).toBeVisible();
  await expect(page.getByAltText(/private research room with a structured earnings-review prompt/i)).toBeVisible();
  await expect(page.getByAltText(/education workspace showing an evidence-led curriculum/i)).toBeVisible();
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
  await expect(page.getByText(/101 deterministic Vitest cases pass/i)).toBeVisible();
  await expect(page.getByText(/22 Chromium checks cover/i)).toBeVisible();
  await expect(page.getByText("A calm interface for a dense decision.")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Verification", exact: true })).toBeVisible();
  await expect(page.getByText(/deterministic planning dataset, planning estimates/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /open public demo/i })).toHaveAttribute(
    "href",
    "https://ai-travel-planner-psi-five.vercel.app",
  );
  await expect(page.getByRole("heading", { name: "How intent becomes a route." })).toBeVisible();
  await expect(
    page.getByAltText(/Wild Route ranked planner showing a round-trip route/i),
  ).toBeVisible();

  const heroRatio = await page
    .getByAltText(/Wild Route landing page introducing explainable adventure route planning/i)
    .locator("xpath=ancestor::figure")
    .evaluate((figure) => {
      const bounds = figure.getBoundingClientRect();
      return bounds.width / bounds.height;
    });
  expect(heroRatio).toBeGreaterThan(1.57);
  expect(heroRatio).toBeLessThan(1.63);

  const galleryWidths = await Promise.all(
    [
      /Wild Route route composer showing/i,
      /Wild Route ranked planner showing/i,
      /Wild Route published route preview/i,
    ].map((alt) =>
      page
        .getByAltText(alt)
        .locator("xpath=ancestor::figure")
        .evaluate((figure) => figure.getBoundingClientRect().width),
    ),
  );
  expect(Math.max(...galleryWidths) - Math.min(...galleryWidths)).toBeLessThan(2);

  await page.setViewportSize({ width: 390, height: 844 });
  const mobileWidths = await page.evaluate(() => ({
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: window.innerWidth,
  }));
  expect(mobileWidths.documentWidth).toBeLessThanOrEqual(mobileWidths.viewportWidth + 1);
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
  await expect(page.getByText("From restraint to a dependable loop.")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Verification", exact: true })).toBeVisible();
  await expect(page.getByText(/passed again on 8 September 2026/i)).toBeVisible();
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
    const device = await page
      .getByAltText(
        "Endless Activity Discover deck with a realistic activity and visible save and skip controls",
      )
      .boundingBox();

    expect(copy).not.toBeNull();
    expect(device).not.toBeNull();
    expect(device!.y).toBeGreaterThan(copy!.y + copy!.height - 1);
  });

  test("reduced-motion preference shortens interface transitions", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/about");

    const transitionDuration = await page
      .getByRole("link", { name: "More about me" })
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

test("utility routes keep titles, social metadata, and canonicals aligned", async ({ page }) => {
  await prepareHomepage(page);

  await page.goto("/");
  await expect(page).toHaveTitle("Marcell Varga | UX & Frontend Engineer in Singapore");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /clear, resilient interfaces/i,
  );

  await page.goto("/about");
  await expect(page).toHaveTitle("About | Marcell Varga");
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    "https://marcellvarga.com/about",
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "About Marcell Varga | UX & Frontend Engineer",
  );

  await page.goto("/resume/ats");
  await expect(page).toHaveTitle("ATS Resume | Marcell Varga");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://marcellvarga.com/resume/ats",
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    "https://marcellvarga.com/resume/ats",
  );
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/i,
  );

  await page.goto("/privacy");
  await expect(page).toHaveTitle("Privacy and analytics | Marcell Varga");
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    "https://marcellvarga.com/privacy",
  );
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
