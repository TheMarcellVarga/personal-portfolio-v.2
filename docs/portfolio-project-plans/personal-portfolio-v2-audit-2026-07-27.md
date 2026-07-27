# Personal Portfolio v2: M1 Audit

Audit date: 2026-07-27

Scope: current repository, public deployment at `marcellvarga.com`, public project links, package health, and the portfolio planning documents in this repository.

## Verdict

The site is visually distinctive, builds successfully, and has a credible Aperture case-study direction. It is not ready for a positioning rewrite yet because the public work selection conflicts with the current portfolio strategy, two featured source links return GitHub 404, lint fails, and there is no automated test or CI baseline.

The next milestone should be a focused M2 implementation after the featured-project set is explicitly approved. Do not silently choose between the conflicting plan documents.

## Evidence recorded

| Check | Result |
| --- | --- |
| Production build | Passed with Next.js 16.2.1 on 2026-07-27. |
| Lint | Failed: one `react-hooks/set-state-in-effect` error in `app/components/About.tsx`, plus one `useImperativeHandle` dependency warning in `app/components/PhoneReveal.tsx`. |
| Tests | No test files, Playwright configuration, Vitest configuration, Jest configuration, or test script found. |
| CI | No GitHub Actions or other CI configuration found. |
| Public routes | Home, all current work pages, about, contact, both resume routes, sitemap, robots, and security.txt returned HTTP 200. |
| External project links | The GitHub links for `TheMarcellVarga/ai-finance` and `TheMarcellVarga/ai-travel-planner` returned HTTP 404. The profile itself returned HTTP 200. |
| Dependency audit | 15 production vulnerabilities: 5 high and 10 moderate. Direct affected dependencies include Next.js, js-cookie, DOMPurify, and PostHog. |
| Repository hygiene | `.env.local` and `.history` are ignored and not tracked. The local `.history` directory contains historical environment-file snapshots and should remain outside any public archive or upload. |

## Current public story

The homepage currently leads with "UX & Frontend Engineer" and the statement "I design and build product interfaces that stay calm, sharp, and useful in practice." This is credible, but it does not make the requested product-focused frontend-engineering position clear enough in the first scan.

The public selected work list is:

1. Aperture Financial Intelligence
2. Wild Route
3. CatchScan
4. AskCody
5. European Study Solution

This conflicts with the current local portfolio review and its `MOST_RECOMMENDED.md` plan, which recommend Aperture, First Revenue Game, and Focusin as the featured case studies, with ThreadScribe and one technical specimen as supporting work. The provided product-plan document instead names Aperture, Wild Route, and the portfolio as flagships.

### Decision required before M2

Approve one canonical featured-project set and archive policy. My recommendation, based on the newest local review and detailed project plans, is:

- Featured: Aperture Financial Intelligence, First Revenue Game, Focusin.
- Supporting: ThreadScribe Studio and one technical specimen.
- Earlier work: AskCody and CatchScan as clearly labelled archived evidence.
- Remove from homepage selection: European Study Solution and Wild Route unless Wild Route completes its upgrade plan and a real provider-backed data flow is demonstrated.

If the provided product-plan document is the newer authority, keep Wild Route but update the local review and plans to match before implementation.

## Project-status assessment

| Work | Public representation | Evidence in this repository | Recommended status now |
| --- | --- | --- | --- |
| Aperture | Dedicated 2026 case study with explicit research-only boundaries and fixture-mode disclosure. | Portfolio copy and screenshots only. The linked source repository returned 404, so the underlying implementation cannot be re-verified from this audit. | Keep featured, but label the case-study status as fixture-backed where applicable until the source link and underlying repository evidence are restored. |
| Wild Route | Dedicated 2026 case study, listed as full stack. | Portfolio copy and screenshots only. The linked source repository returned 404. Its own rework plan classifies it as an upgrade candidate, not a current flagship. | De-emphasize or archive pending a decision, a repaired source link, and completion of the provider, RLS, billing, accessibility, and E2E gates. |
| AskCody | Full case study on the selected-work path. | Static legacy image assets and a retrospective case-study page. | Keep only as archived enterprise UX evidence and mark it explicitly as archived. |
| CatchScan | Full case study on the selected-work path. | Static legacy image assets and a retrospective case-study page. | Keep only as archived product-design evidence and mark it explicitly as archived. |
| European Study Solution | Full case study on the selected-work path. | Static legacy image assets and a retrospective case-study page. | Move out of selected work. Keep only if there is a deliberate Earlier Work archive. |
| First Revenue Game, Focusin, ThreadScribe | Not represented on the current site. | Stronger, current planning material exists in the repository documentation, but their projects were not available in this repository for implementation verification. | Do not claim them on the public site until their source repositories, current screenshots, and precise implementation states are verified. |

## Engineering findings

### Blockers and high-priority fixes

1. Repair or remove the two public GitHub links before any public positioning work. A recruiter following "View source" currently reaches a 404 page.
2. Resolve the lint error before adding new work. The production build passing is not a substitute for the repository quality gate passing.
3. Upgrade the vulnerable dependency chain, starting with Next.js and js-cookie. Confirm the resulting lockfile with a fresh audit and build.
4. Remove the false privacy boundary around the phone number. `app/data/private-contact.server.ts` contains the phone number in repository source, while the unauthenticated `/api/contact/phone` route returns it to any caller. A click-to-reveal UI does not keep it off scraping lists.
5. Establish tests and CI before larger visual changes. At minimum: lint, type check, build, a homepage/resume/contact smoke suite, and an automated accessibility scan.

### Performance and deployment

- The build passes, but all page routes are server-rendered dynamically. `app/layout.tsx` reads cookies to control the intro sequence, which prevents otherwise public portfolio pages from being statically generated. The deployed response is `Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate`.
- Public assets total about 46 MB. The legacy asset library should be removed from the default public experience before performance claims are made.
- `next.config.mjs` sets `images.unoptimized: true`, so image delivery is not using Next.js image optimization. This may be an intentional deployment constraint, but needs an explicit alternative image strategy and measurement.
- The live response has HSTS but did not expose a Content Security Policy, frame protections, referrer policy, permissions policy, or content-type protection in the inspected headers. The Cloudflare helper script does not configure those headers.

### Accessibility and interaction

- A global reduced-motion CSS override exists and several interactive components check the user preference. This is a good starting point.
- The homepage is a 1,550-line client component with several direct scroll, mouse, resize, and animation-frame listeners. This makes accessibility and performance regressions harder to isolate and test.
- The current design has multiple numbered labels, decorative dots, hover-only project-image behavior, and several motion systems. These should be simplified as part of M2/M4, not expanded.
- There is no automated accessibility coverage or documented keyboard/screen-reader verification.

### Dependency and code hygiene

- The direct dependency list includes several unused or legacy packages, including the Font Awesome packages, Heroicons, d3, DOMPurify, js-cookie, Locomotive Scroll, polished, react-icons, and react-sizeme. Confirm actual use before removing anything, then reduce to one icon and one motion strategy where practical.
- The README is materially out of date: it describes Next.js 13 and Locomotive Scroll, says the local server is on port 3000 rather than 3100, and makes unverified claims such as "performance optimized" and "SEO friendly."
- The source and the README name multiple icon and animation libraries. The public component code currently uses Lucide, Framer Motion, GSAP, and Lenis. The package list still carries several alternatives.

## SEO and identity findings

Existing foundations are good: canonical homepage metadata, Open Graph/Twitter metadata, a `Person` schema graph, `sameAs` links, robots.txt, security.txt, HTTPS, and an XML sitemap are present.

The gaps are:

- Page-level case-study metadata is not yet demonstrated as distinct from the root metadata.
- The sitemap indexes all five public work pages, including work that should be archived or de-emphasized.
- The global title and structured-data role remain "UX & Frontend Engineer," which conflicts with the intended "product-focused frontend engineer" positioning.
- The `lastUpdated` value is manual and stale whenever site content changes without updating `app/seo.ts`.
- The social image is a profile portrait rather than a purpose-built Open Graph asset for the homepage or individual projects.

## M2 scope recommendation

Once the project set is approved, M2 should make no visual-system rewrite beyond what is necessary to clarify the story:

1. Repair source links and publish a single `implemented / fixture-backed / partial / archived` status field per project.
2. Replace the homepage project list with the approved featured set and move old work into an explicit Earlier Work archive.
3. Rewrite the hero around product-focused frontend engineering, Singapore, React/TypeScript, UX as an engineering advantage, and proof of ownership.
4. Update the README to document actual architecture, verification commands, limitations, accessibility approach, analytics/privacy behavior, and deployment.
5. Add the first small quality gate: lint, type check, build, Playwright smoke tests, and accessibility checks in CI.

## M1 completion status

M1 is complete as an audit. It does not authorize implementation claims for the external project repositories that were unavailable through their linked public URLs. The M2 feature selection is the only material product decision required before the homepage rewrite begins.
