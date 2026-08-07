# Marcell Varga Portfolio

Professional portfolio for Marcell Varga, a Singapore-based product-focused frontend engineer working across React, TypeScript, UX, design systems, and AI-aware product workflows.

## Purpose

The site presents a focused, evidence-led view of product work rather than a complete repository history. It separates locally verified products, confidential professional experience, partial prototypes, and archived case studies.

The selected-work hierarchy intentionally uses three featured projects and three
supporting case studies. Supporting work adds a distinct proof point without
competing with the main portfolio narrative.

## Information architecture

- `/` — portfolio overview and selected work.
- `/ai-finance` — Aperture, a locally release-ready financial research workspace.
- `/first-revenue-game` — First Revenue Game, a configured runtime-verified social execution product.
- `/wild-route` — Wild Route, a deployed adventure travel-planning demo.
- `/threadscribe` — ThreadScribe Studio, a local-first trustworthy AI case study.
- `/focusin` — Focusin, a locally verified native macOS product case study.
- `/endless-activity` — Endless Activity, a locally verified supporting native iOS product-craft case study.
- `/askcody`, `/catchscan`, and `/ess` — archived case studies.
- `/about` — professional background, working approach, and current direction.
- `/resume` and `/resume/ats` — human-readable and ATS-oriented resumes.
- `/contact` — contact details.

## Project-status rules

Projects are intentionally labelled to avoid overstating the available evidence:

- **Working** — current professional or active work.
- **Local release-ready** — the complete local product path and release gates pass, while public infrastructure or paid providers remain intentionally inactive.
- **Configured runtime verified** — the product shell and backend workflow have been verified against a configured local runtime, without claiming hosted production.
- **Fixture-backed** — a prototype powered by deterministic local fixture data.
- **Locally verified** — current local device or simulator evidence exists, while external distribution is not claimed.
- **Partial** — an incomplete project whose scope is shown accurately.
- **Archived** — earlier work retained for historical context.

## Stack

- Next.js 16 and React 19
- TypeScript and Tailwind CSS 4
- Framer Motion, GSAP, and Lenis
- Vercel deployment and optional PostHog analytics

## Local development

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

The development server runs on port `3100`.

## Verification

```bash
npm run lint
npm run build
npm run test:e2e
```

Playwright covers core routes, responsive layouts, links, browser security headers, and serious or critical automated accessibility violations. Performance claims should only be added after deployed measurement.

## Accessibility and performance approach

The portfolio uses semantic structure, reduced-motion support, and explicit image dimensions. Performance is treated as a measurable outcome, not a marketing claim.

## Privacy and analytics

The site exposes email and professional social links. Private environment values, credentials, and personal phone numbers must never be committed or served from public routes. PostHog is opt-in only: it records anonymous page-performance and error measurements after a visitor selects “Allow analytics”; session recording, autocapture, and input capture are disabled.

## Deployment

The canonical production domain is `marcellvarga.com`. Keep the deployment configuration and canonical metadata aligned when making domain changes.

## Current limitations

- Source-code links are withheld until their public repositories are verified. Current case studies state that private source is available on request.
- Professional AXON work is represented without confidential screenshots or implementation details.
- Archived case studies do not represent the current technical scope.
