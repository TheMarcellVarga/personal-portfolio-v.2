# Wild Route portfolio refresh

Updated 2026-11-05. Scope: the Wild Route Phase 8 presentation simplification
and its Phase 7 session-isolation follow-up. Primary skill: impeccable (clarify);
support: travel-product-guardrails. This updates the portfolio, not either deployment.

The case preserves PortfolioShell, typography, spacing, and the three-step journey.
It now explains the open trip brief, optional preferences, ordered journey overview
in place of WebGL, local saves, public previews, and external flight search.
Repeated landing-page sections and newsletter signup were removed in the source
app; unverified demo profile/cloud/billing features are disabled. Demo logins now
receive unique server-generated identities, and incomplete share/provider responses
show controlled errors. Source freshness, app confidence, and price boundaries remain.

## Capture provenance

`public/images/wild-route/*-november-2026.jpg` are unretouched browser captures
at 1440 × 900 of the local production build on 2026-11-05. They show the simplified
homepage, an entered trip brief with optional preferences collapsed, the generated
ordered journey, and its published preview. The sample prompt is a 12-day Singapore
round trip with hiking, surf, and one meaningful stop. No real account or private
travel prompt is used. Destinations use disclosed fallback data; the local build
may resolve attributed destination media, but no live fare or stay inventory is
claimed. Weather and the globe are absent from the current planner.

The public demo URL remains an earlier deployed release. The case explicitly
labels the November screenshots and evidence as local work pending deployment.
Older assets remain available for historical references but current case, project
thumbnail, shared case data, and Open Graph references use November captures.

## Source application verification

Verified in the Wild Route checkout during this chat:

- 109 passing unit/API tests across 26 files, including demo session isolation and
  missing share/provider response regressions.
- 24 passing Chromium checks for the demo journey, keyboard access, accessibility,
  responsive layout, reduced motion, media fallback, and retry behavior.
- ESLint and production build including TypeScript validation pass.

## Portfolio verification

The case-specific browser check validates the three-step narrative, current
screenshots, deployment boundary, verification disclosure, demo URL, and mobile
containment. Build, lint, and visual review results are recorded at completion.

Unrelated existing edits in `app/page.tsx` and
`app/components/ExpertiseJourney.tsx` are preserved.

Portfolio results for this refresh: repository ESLint passed; the scoped Chromium
case-study test passed against the existing port-3100 server, including the current
asset references, local-versus-deployed boundary, evidence disclosure, and 390px /
320px containment. Desktop (1440px) and phone (390px) visual review passed. The
mechanical design detector reported no findings. Full production verification is
not claimed: the first build encountered unrelated concurrent homepage props and
project-status typing changes; a later attempt found another build already active.
Those concurrent edits and processes were preserved.
