# Wild Route portfolio refresh

Updated 2026-10-12. Scope: presentation work corresponding to Wild Route product
roadmap Phase 8. Primary skill: impeccable (distill); supporting skill:
travel-product-guardrails. No product phase or managed-service gate changed.

The case inherits the index's PortfolioShell, page background, typography,
container, section spacing, accent, buttons, and dark panel. It replaces the
generic context/decisions/process/gallery repetition with a three-step journey:
describe the trip, compare complete routes, then save/share and hand off.
Screenshots open at full size; verification and limitations use native details.

## Capture provenance

`public/images/wild-route/*-october-2026.jpg` are unretouched captures of the
current local Wild Route checkout at 1440 × 900. They show the homepage, empty
composer with an entered brief, generated planner, and published demo preview.
The demonstration prompt is a 12-day Singapore round trip with hiking, surf,
and one meaningful stop. The local demo uses deterministic route generation,
disclosed destination fallback, no live fare inventory, and source-attributed
Open-Meteo conditions. Captures are interface evidence, not production-service
verification or current travel advice. No real account or private prompt appears.

## Verification

- Current Wild Route unit/API suite: 24 files, 104 passing tests.
- Portfolio Chromium test checks the three-step story, demo URL, opening and
  closing the evidence disclosure, and containment at 390px and 320px.
- Desktop/mobile visual inspection and axe scan cover the refreshed route.
- Axe reports zero WCAG A/AA violations at 1440px and 390px. No horizontal
  overflow occurs at either width.
- The portfolio production build, changed-file lint, and shared index-foundation
  browser checks at 1440px, 390px, and 320px pass.
- The 22 Chromium checks in the shared evidence record are a previously recorded
  baseline, not a new full Wild Route browser-suite execution in this refresh.

Existing Aperture edits in the same workspace were preserved.
