# Endless Activity case study refresh

Date: 16 October 2026.

Scope: post-roadmap portfolio refresh. The native app behavior is unchanged.

## Design and content

The index and the refreshed ai-finance route are the presentation references.
The old generic case template repeated context, decisions, and process before
showing the product. A dedicated EndlessActivityCaseStudy component now uses
PortfolioShell, PageIntro, index tokens, shared controls, and the same evidence
disclosure pattern as Aperture.

A real three-screen hero leads into a selectable Discover, Details, Saved, and
Preferences walkthrough. Each capture has a concrete interaction explanation,
one design decision, and an outcome. The existing 24-second video is available
with controls and captions. No autoplay or simulated native app is introduced.
October refinements and a compact catalog-to-ranking-to-state flow replace long
process and decision grids. Detailed evidence stays in a native disclosure.

## Evidence boundaries

Source: endless-activity README, MASTER_EXECUTION_ROADMAP, PRODUCT_SPEC,
PORTFOLIO_CASE_STUDY, TESTING_STRATEGY, and the current SwiftUI view corrections.

The portfolio evidence record previously claimed a September rerun and current
large-device/dark-appearance verification. The source roadmap and testing record
support a full June 28 simulator baseline and October 2 compilation-only
corrections. The case now uses that dated baseline and explicitly says that
fresh simulator verification is pending. Existing portfolio captures are
historical and do not illustrate the October changes. No new native test run,
App Store distribution, or user-outcome evidence is claimed.

## Verification

Run `npm run check` and the Endless Activity, shared design-system, and portfolio
Playwright coverage. Walkthrough tests exercise keyboard selection, actual image
loading, controls/captions, disclosure behavior, mobile containment, and Axe
WCAG A/AA at 1440px, 390px, and 320px. Review the resulting full-page captures.
Publication is outside this local refresh.

## Recorded result

- `npm run check`: passed, including the final link correction.
- Shared design-system and new walkthrough suite: 8 passed, including 320px,
  390px, and 1440px containment and zero Axe violations on the refreshed route.
- Wider portfolio suite: 32 passed, 7 failed on its first run. One failure caught
  a source link introduced here; it was replaced with the contact action to
  preserve the portfolio's private-source policy.
- Six remaining failures concern unchanged homepage WebGL/Principles behavior
  and stale Focusin heading/content expectations (including the motion loop).
  They are outside this case refresh; the whole portfolio suite is not green.
- Desktop and mobile full-page captures were reviewed. The native app itself
  was not rebuilt or simulator-tested during this presentation update.
- Final targeted rerun: all 6 walkthrough, case-content, mobile-artwork, and
  private-repository-link checks passed.
