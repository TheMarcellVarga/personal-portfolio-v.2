import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";

// Run against the local development server: node scripts/export-ats-resume.mjs
const baseUrl = process.env.RESUME_EXPORT_URL ?? "http://localhost:3100";
const output = "output/pdf/Marcell_Varga_CV_ATS_2026.pdf";
const browser = await chromium.launch({ headless: true });

try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1200 },
    reducedMotion: "reduce",
  });
  await page.goto(new URL("/resume/ats", baseUrl).href, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.evaluate(async () => {
    await document.fonts.ready;
    // Put the name first, and eliminate geometry-dependent date placement.
    const sheet = document.querySelector(".ats-sheet");
    sheet.querySelector("header > p:first-child").remove();
    for (const element of sheet.querySelectorAll("*")) {
      for (const token of [...element.classList]) {
        if (token.startsWith("space-y-")) element.classList.remove(token);
      }
    }
  });
  await page.addStyleTag({ content: `
    .ats-sheet * { letter-spacing: normal !important; font-variant-ligatures: none; }
    .ats-resume-route > div { padding: 9mm 14mm !important; }
    .ats-sheet header { padding-bottom: 10px !important; }
    .ats-sheet header .ats-name { margin-top: 0 !important; font-size: 30px !important; }
    .ats-resume-route address { display: block !important; margin-top: 9px !important; }
    .ats-resume-route address p { display: inline-block; margin: 0 14px 2px 0; }
    .ats-resume-route address { font-size: 10.5px !important; }
    .ats-content section > p, .ats-content article > p,
    .ats-content li, .ats-content section > div { font-size: 12px !important; }
    .ats-content h2 { font-size: 10.5px !important; }
    .ats-content h3 { font-size: 13px !important; }
    .ats-content article > div:first-child p { font-size: 10px !important; }
    .ats-content { margin-top: 12px !important; }
    .ats-content > section + section { margin-top: 8px !important; }
    .ats-content section > p, .ats-content section > div { margin-top: 7px !important; }
    .ats-content h2 { padding-bottom: 5px !important; }
    .ats-content article > div:first-child { display: block !important; padding-bottom: 5px !important; }
    .ats-content article > div:first-child > p { margin-top: 3px; }
    .ats-content article + article { margin-top: 10px; }
    .ats-content ul { margin-top: 7px !important; }
    .ats-content ul > li + li { margin-top: 2px !important; }
    .ats-content section > div > p + p { margin-top: 3px; }
  ` });
  await page.evaluate(() => document.fonts.ready);
  const height = await page.locator(".ats-sheet").evaluate((sheet) => sheet.getBoundingClientRect().bottom);
  if (height > 1100) throw new Error(`ATS resume would overflow the A4 page: ${height}px`);
  await mkdir("output/pdf", { recursive: true });
  await page.pdf({
    path: output,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
    outline: true,
  });
  console.log(`Exported ${output}.`);
} finally {
  await browser.close();
}
