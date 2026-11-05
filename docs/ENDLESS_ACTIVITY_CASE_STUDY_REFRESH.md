# Endless Activity case study refresh

Original refresh: 16 October 2026. Updated: 5 November 2026.

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

## November evidence refresh

This local follow-up synchronizes the case with the native interview cleanup.
It preserves the existing page structure, motion, four-stage selector, portfolio
placement, private-source policy, and route.

- Copied the four current iPhone 17e light captures into versioned November URLs.
  The index project image, shared gallery data, hero, selector, and Open Graph
  image now reference those files. Existing media URLs remain available.
- Rebuilt a 24-second H.264 screen tour from the same four captures and updated
  WebVTT captions. The page identifies the format as assembled simulator captures.
- Replaced the October pending-check narrative with compact filters, concise
  Saved rows, immediate persistence before animation, and vertical metadata at
  accessibility sizes.
- Updated the shared evidence record to 17 unit and 12 UI tests passing on
  iPhone 17e on 5 November 2026. Four large-phone dark-mode checks passed;
  after the final metadata-only correction, two screen/XXXL checks passed again
  on each phone. No physical haptic, spoken VoiceOver, App Store, or user-outcome
  claim was added.

Sources: the sibling `endless-activity` checkout's
[testing strategy](../../endless-activity/docs/TESTING_STRATEGY.md),
[roadmap](../../endless-activity/docs/MASTER_EXECUTION_ROADMAP.md), and
[November captures](../../endless-activity/docs/assets/interview-2026-11-05/README.md).

### November verification

- Node 22.13.1; `npm run check` passes (lint and production build).
- Seven scoped Playwright tests pass: 1440px, 390px, and 320px walkthroughs,
  keyboard selection, real image loading, 24-second video metadata, captions,
  evidence disclosure, mobile containment, case content, private-source links,
  canonical metadata, and sitemap membership.
- Axe WCAG A/AA reports zero violations in the three walkthrough viewport tests.
- The existing local dev server on port 3100 was reused. The updated Preferences
  stage was inspected in the in-app browser; desktop/mobile page captures were
  generated for visual review.
- This is a local source update. No commit, push, or deployment was performed.
