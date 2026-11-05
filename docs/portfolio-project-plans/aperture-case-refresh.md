# Aperture case refresh — 5 November 2026

Source: the AI Finance repository's `docs/INTERVIEW_PRESENTATION.md` and the local runtime verification recorded during its presentation pass.

The case now leads with Overview, Markets, Portfolio, Plan, and Learn. It replaces the digest/mobile expansion story with product simplification, optional geography, explicit disabled actions, outage recovery, and authoritative Next.js → Go → Postgres boundaries.

Evidence is scoped explicitly:

- Latest local source: lint, TypeScript, production build, and 20 focused tests.
- Running local services: existing Google/Clerk sign-in, provider-backed portfolio creation/read, contribution-only goal scenarios, document upload/processing with Postgres persistence, ownership denial, and cold startup of web/API/worker.
- Historical baseline: 40 evidence cases and earlier review/export verification; not rerun in the presentation pass.
- Existing captures and public illustrations remain labeled as historical; no image claims to be a fresh capture of the current authenticated interface.
- Public preview URL retained; these local changes do not establish a fresh deployment or public-provider verification.
- No paid live-model result, email delivery, checkout, account-wide export, or mobile release is claimed.

Portfolio verification: focused ESLint and TypeScript checks passed. The three walkthrough states and evidence disclosure were exercised in Chrome; the recent-work section was inspected on desktop and at 390px with no horizontal overflow. The existing Aperture E2E expectations were updated to the new story; the browser runner suite was not executed in this pass.
