import { chromium } from "@playwright/test";
import { copyFile, mkdir } from "node:fs/promises";

// Run against the local development server: node scripts/export-designed-resume.mjs
const baseUrl = process.env.RESUME_EXPORT_URL ?? "http://localhost:3100";
const output = "output/pdf/Marcell-Varga-UX-Frontend-Engineer-Designed.pdf";
const browser = await chromium.launch({ headless: true });

try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1200 },
    reducedMotion: "reduce",
  });
  await page.goto(new URL("/resume", baseUrl).href, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Reveal phone number", exact: true }).click();
  await page.locator('.resume-sheet a[href^="tel:"]').waitFor();
  await page.emulateMedia({ media: "print" });
  await page.addStyleTag({
    content: ".resume-sheet * { letter-spacing: normal !important; font-variant-ligatures: none !important; }",
  });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map((image) => image.decode()));

    // Keep the visual columns while putting the name and work history first
    // in the tagged PDF's logical structure. Geometric readers may ignore tags.
    const grid = document.querySelector(".resume-print-grid");
    const sidebar = grid.querySelector(":scope > aside");
    const content = grid.querySelector(":scope > div");
    sidebar.style.gridColumn = "1";
    sidebar.style.gridRow = "1";
    content.style.gridColumn = "2";
    content.style.gridRow = "1";
    grid.prepend(content);
  });
  await mkdir("output/pdf", { recursive: true });
  await page.pdf({
    path: output,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
    outline: true,
  });
  await copyFile(output, "public/MarcellVargaResume2026.pdf");
  console.log(`Exported ${output} and updated the website download.`);
} finally {
  await browser.close();
}
