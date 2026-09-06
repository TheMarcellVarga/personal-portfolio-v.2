import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const repoRoot = process.cwd();
const focusinRoot = path.resolve(repoRoot, "../focusin");
const evidenceRoot = path.join(focusinRoot, "docs/evidence/rework-phase-1");
const outputRoot = path.join(repoRoot, "public/images/focusin");

const sources = {
  focusing: path.join(evidenceRoot, "light-normal-focusing.png"),
  breakDue: path.join(evidenceRoot, "light-normal-break-due.png"),
  breaking: path.join(evidenceRoot, "dark-normal-breaking.png"),
  activities: path.join(evidenceRoot, "light-normal-settings-activities.png"),
  system: path.join(evidenceRoot, "light-normal-settings-system.png"),
};

const svg = (width, height, content) =>
  Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <radialGradient id="blueGlow" cx="0" cy="0" r="1" gradientTransform="translate(${width * 0.82} ${height * 0.12}) rotate(128) scale(${width * 0.7} ${height * 0.9})">
          <stop stop-color="#237CF4" stop-opacity=".48"/>
          <stop offset="1" stop-color="#237CF4" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="greenGlow" cx="0" cy="0" r="1" gradientTransform="translate(${width * 0.28} ${height * 0.95}) rotate(-62) scale(${width * 0.52} ${height * 0.64})">
          <stop stop-color="#28C76F" stop-opacity=".2"/>
          <stop offset="1" stop-color="#28C76F" stop-opacity="0"/>
        </radialGradient>
        <filter id="shadow" x="-40%" y="-40%" width="180%" height="200%">
          <feDropShadow dx="0" dy="34" stdDeviation="34" flood-color="#020A14" flood-opacity=".42"/>
        </filter>
      </defs>
      ${content}
    </svg>
  `);

async function resized(input, width, height, options = {}) {
  let pipeline = sharp(input);
  if (options.extract) pipeline = pipeline.extract(options.extract);
  return pipeline
    .resize(width, height, { fit: options.fit ?? "contain" })
    .png()
    .toBuffer();
}

async function writeHero() {
  const width = 2400;
  const height = 1350;
  const focusing = await resized(sources.focusing, 790, 960);
  const breaking = await resized(sources.breaking, 760, 1008);
  const background = svg(
    width,
    height,
    `<rect width="2400" height="1350" fill="#071726"/>
     <rect width="2400" height="1350" fill="url(#blueGlow)"/>
     <rect width="2400" height="1350" fill="url(#greenGlow)"/>
     <path d="M1040 675 C1140 590 1238 590 1345 675" fill="none" stroke="#8BC2FF" stroke-opacity=".46" stroke-width="4" stroke-linecap="round" stroke-dasharray="2 18"/>
     <circle cx="1192" cy="625" r="13" fill="#58A0FF"/>
     <rect x="152" y="146" width="856" height="1056" rx="52" fill="#0D2135" opacity=".9" filter="url(#shadow)"/>
     <rect x="1378" y="96" width="822" height="1120" rx="52" fill="#0D2135" opacity=".9" filter="url(#shadow)"/>
     <text x="180" y="104" fill="#A9C8E7" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="600" letter-spacing="5">FOCUS INTERVAL</text>
     <text x="1404" y="54" fill="#A9C8E7" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="600" letter-spacing="5">ACTIVE RESET</text>`
  );

  await sharp(background)
    .composite([
      { input: focusing, left: 185, top: 190 },
      { input: breaking, left: 1408, top: 146 },
    ])
    .webp({ quality: 92, smartSubsample: true })
    .toFile(path.join(outputRoot, "focusin-loop-hero.webp"));
}

async function writeBreakSequence() {
  const width = 2000;
  const height = 1300;
  const breakDue = await resized(sources.breakDue, 760, 922);
  const breaking = await resized(sources.breaking, 700, 928);
  const background = svg(
    width,
    height,
    `<rect width="2000" height="1300" fill="#EDE8E1"/>
     <circle cx="1760" cy="80" r="440" fill="#CFE2FA"/>
     <circle cx="130" cy="1210" r="360" fill="#DCECDD"/>
     <rect x="110" y="180" width="830" height="1015" rx="50" fill="#FFFFFF" opacity=".72" filter="url(#shadow)"/>
     <rect x="1068" y="120" width="820" height="1065" rx="50" fill="#0B1A2A" opacity=".94" filter="url(#shadow)"/>
     <text x="130" y="114" fill="#24405E" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="700" letter-spacing="5">01 · BREAK DUE</text>
     <text x="1090" y="70" fill="#24405E" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="700" letter-spacing="5">02 · RESET IN PROGRESS</text>`
  );

  await sharp(background)
    .composite([
      { input: breakDue, left: 145, top: 224 },
      { input: breaking, left: 1128, top: 176 },
    ])
    .webp({ quality: 92, smartSubsample: true })
    .toFile(path.join(outputRoot, "break-sequence.webp"));
}

async function writeSettings() {
  const width = 2000;
  const height = 1300;
  const crop = { left: 68, top: 52, width: 1080, height: 1176 };
  const activities = await resized(sources.activities, 1030, 1122, { extract: crop });
  const system = await resized(sources.system, 790, 860, { extract: crop });
  const background = svg(
    width,
    height,
    `<rect width="2000" height="1300" fill="#071726"/>
     <rect width="2000" height="1300" fill="url(#blueGlow)"/>
     <rect x="84" y="104" width="1094" height="1170" rx="52" fill="#10263C" filter="url(#shadow)"/>
     <rect x="1096" y="298" width="850" height="930" rx="52" fill="#10263C" filter="url(#shadow)"/>
     <text x="116" y="78" fill="#A9C8E7" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="600" letter-spacing="5">PREFERENCES + RECOVERY</text>`
  );

  await sharp(background)
    .composite([
      { input: activities, left: 116, top: 136 },
      { input: system, left: 1126, top: 332 },
    ])
    .webp({ quality: 92, smartSubsample: true })
    .toFile(path.join(outputRoot, "settings-and-resilience.webp"));
}

await fs.mkdir(outputRoot, { recursive: true });
await Promise.all([writeHero(), writeBreakSequence(), writeSettings()]);
console.log("Generated Focusin portfolio media in public/images/focusin");
