# Marcell Varga Portfolio

Professional portfolio for Marcell Varga, a Singapore-based product-focused frontend engineer working across React, TypeScript, UX, design systems, and AI-aware product workflows.

## Purpose

The site presents a focused, evidence-led view of product work rather than a complete repository history. It separates locally verified products, confidential professional experience, partial prototypes, and archived case studies.

## Information architecture

- `/` — portfolio overview and selected work.
- `/ai-finance` — Aperture, a locally release-ready financial research workspace.
- `/wild-route` — Wild Route, a deployed adventure travel-planning demo.
- `/threadscribe` — ThreadScribe Studio, a local-first trustworthy AI case study.
- `/about` — professional experience and working approach.
- `/askcody`, `/catchscan`, and `/ess` — archived case studies.
- `/resume` and `/resume/ats` — human-readable and ATS-oriented resumes.
- `/contact` — contact details.

## Project-status rules

Projects are intentionally labelled to avoid overstating the available evidence:

- **Working** — current professional or active work.
- **Local release-ready** — the complete local product path and release gates pass, while public infrastructure or paid providers remain intentionally inactive.
- **Fixture-backed** — a prototype powered by deterministic local fixture data.
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

The site exposes email and professional social links. Private environment values, credentials, and personal phone numbers must never be committed or served from public routes. PostHog is optional and should be configured only with the appropriate consent and privacy policy.

## Deployment

The canonical production domain is `marcellvarga.com`. Keep the deployment configuration and canonical metadata aligned when making domain changes.

## Current limitations

- Source-code links are withheld until their public repositories are verified.
- Professional AXON work is represented without confidential screenshots or implementation details.
- Archived case studies do not represent the current technical scope.
