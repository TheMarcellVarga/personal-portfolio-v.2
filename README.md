# Marcell Varga Portfolio

Professional portfolio for Marcell Varga, a Singapore-based product-focused frontend engineer working across React, TypeScript, UX, design systems, and AI-aware product workflows.

## Purpose

The site presents a focused, evidence-led view of product work rather than a complete repository history. It separates current work, confidential professional experience, fixture-backed prototypes, and archived case studies.

## Information architecture

- `/` — portfolio overview and selected work.
- `/ai-finance` — Aperture, a fixture-backed finance prototype.
- `/wild-route` — Wild Route, a partial travel-planning project.
- `/about` — professional experience and working approach.
- `/askcody`, `/catchscan`, and `/ess` — archived case studies.
- `/resume` and `/resume/ats` — human-readable and ATS-oriented resumes.
- `/contact` — contact details.

## Project-status rules

Projects are intentionally labelled to avoid overstating the available evidence:

- **Working** — current professional or active work.
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
```

Browser, accessibility, and CI coverage are planned work. Performance claims should only be added after measurement.

## Accessibility and performance approach

The portfolio uses semantic structure, reduced-motion support, and explicit image dimensions. Performance is treated as a measurable outcome, not a marketing claim.

## Privacy and analytics

The site exposes contact and social links, with an optional click-to-reveal phone interaction. It is not scrape-proof; private environment values and credentials must never be committed. PostHog is optional and should be configured only with the appropriate consent and privacy policy.

## Deployment

The canonical production domain is `marcellvarga.com`. Keep the deployment configuration and canonical metadata aligned when making domain changes.

## Current limitations

- Source-code links are withheld until their public repositories are verified.
- Professional AXON work is represented without confidential screenshots or implementation details.
- Archived case studies do not represent the current technical scope.
