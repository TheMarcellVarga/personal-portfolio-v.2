# Focusin case study refresh

Date: 12 October 2026.

Scope: Focusin Rework Phase 5 portfolio presentation. This changes the portfolio,
not the native app or its release gates.

The generic process-and-gallery page is replaced by a dedicated screen-led case,
following the index foundation and Aperture / AI Finance composition: shared
PortfolioShell, PageIntro, container, type, warm background, rust accent, section
rhythm, and navy engineering panel. No separate route theme is introduced.

The first product view shows the focus-to-reset transition. Visitors can select
Focus, Break due, and Reset to inspect readable native captures and the decision
behind each state. Three selectable recovery explanations make persisted time,
notification independence, and activity identity concrete. Long verification and
release details remain available through a native disclosure.

Source truth: Focusin's current Models, Views, behavioral contract, design system,
unfinished-surfaces audit, rework evidence, and portfolio capture manifest. The
recent-work section covers opaque semantic panels, stable VoiceOver progress,
named Settings buttons, and adaptive large-text layouts. No beta or user-impact
outcomes are invented.

## Media provenance

`npm run media:focusin` reproducibly exports the three standalone loop images
from `focusin/docs/evidence/opaque-panels`. The hero uses those same native
captures. Settings media uses the historical July rework-phase-1 fixtures. Both
sources are labeled beside their images. These unsigned debug captures are
engineering illustrations, not final signed-candidate or App Store media.
The source project's signed-media manifest and Phase 5 release gates stay open.

## Verification

- Production build and targeted ESLint.
- Playwright walkthrough, keyboard activation, recovery scenarios, disclosure,
  loaded image, mobile containment, and WCAG A/AA checks at 1440, 390, and 320px.
- Existing cross-route design-system checks against the index foundation.
- Desktop/mobile screenshot review.
- Focusin's required local test and build scripts were attempted. Both stopped at
  the installed Command Line Tools' missing `SwiftUIMacros.StateMacro` plugin.
  Native code was not changed; the 54-test result is historical source-repository
  evidence, not a successful native rerun during this refresh.

Publication remains outside this local refresh.

The finish review identified a mobile opening dominated by introductory copy.
The mobile hero now follows PageIntro directly, before the explanatory paragraph
and metadata. A full-size Settings capture link supports closer inspection.
The desktop opening retains the inherited Aperture composition.
