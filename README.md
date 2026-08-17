# Marcell Varga Portfolio

Professional portfolio for Marcell Varga, a Singapore-based product-focused frontend engineer working across React, TypeScript, UX, design systems, and AI-aware product workflows.

## Purpose

The site presents a focused, evidence-led view of product work rather than a complete repository history. It separates public demos, guided product walkthroughs, native builds, confidential professional experience, and archived case studies.

The selected-work hierarchy intentionally uses three featured projects and three
supporting case studies. Supporting work adds a distinct proof point without
competing with the main portfolio narrative.

## Information architecture

- `/` — portfolio overview and selected work.
- `/ai-finance` — Aperture, a live read-only guided demo plus private evidence-led financial research workspace.
- `/first-revenue-game` — First Revenue Game, a live public demo of a social execution product.
- `/wild-route` — Wild Route, a live public adventure travel-planning demo.
- `/threadscribe` — ThreadScribe Studio, a guided walkthrough of a local-first trustworthy AI workspace.
- `/focusin` — Focusin, a native macOS product build and case study.
- `/endless-activity` — Endless Activity, a native iOS product-craft case study.
- `/askcody`, `/catchscan`, and `/ess` — archived case studies.
- `/about` — professional background, working approach, and current direction.
- `/resume` and `/resume/ats` — human-readable and ATS-oriented resumes.
- Contact details live in the homepage footer/contact section and are reachable at `/#contact`.

## Experience labels

Project labels lead with what a visitor can experience while keeping the evidence boundary clear:

- **Guided product walkthrough** — the key product flow is shown through the case study, screens, and recorded or deterministic walkthrough evidence.
- **Live guided demo** — a public read-only route demonstrates the product loop while protected or provider-backed areas remain private.
- **End-to-end product slice** — an implemented vertical slice demonstrates the product shell, workflow boundaries, and supporting verification.
- **Live public demo** — the product is deployed and available to try at its public route.
- **Native macOS build / Native iOS build** — a current platform build and case-study evidence are available; external distribution is not implied.
- **Archived case study** — earlier work retained for historical context.

## Stack

- Next.js 16 and React 19
- TypeScript and Tailwind CSS 4
- Framer Motion, GSAP, and Lenis
- Vercel deployment with PostHog, Vercel Analytics, and Speed Insights

## Local development

Requires Node.js 22.13 or later.

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

The site exposes email and professional social links, with an optional click-to-reveal phone interaction. The reveal keeps the number out of initial page markup but is not scrape-proof; private environment values and credentials must never be committed. PostHog, Vercel Analytics, and Speed Insights are available only after a visitor explicitly opts in through the privacy choices popover. If enabled, they collect pageviews, autocapture, session recording, performance, console logs, and error measurements. Inputs are masked in session recordings, and visitors can withdraw consent from the persistent Privacy control. The short-lived homepage intro cookie only remembers whether the visual intro has completed and is not used for measurement.

## Deployment

The canonical production domain is `marcellvarga.com`. Keep the deployment configuration and canonical metadata aligned when making domain changes.

## Current limitations

- Source-code links are withheld until their public repositories are verified. Current case studies state that private source is available on request.
- Professional AXON work is represented without confidential screenshots or implementation details.
- Archived case studies do not represent the current technical scope.
