# Burnout 3: Takedown supporting case

Updated: 27 October 2026. Route: `/burnout3-ios`.

The case remains supporting work alongside Focusin and Endless Activity. It
uses the existing index/Aperture typography, warm surfaces, rust emphasis and
navy engineering panel. No gaming-themed replacement shell was introduced.

## Current story and source

The project began as an Apple adaptation of burnout3-pc’s PS2 implementation.
The main app now uses the Xbox-based Takedawn/xboxrecomp foundation, direct
Metal presentation and a native iOS launcher. The old PS2 work is preserved on
`ps2-legacy`; its main-scene submission metrics are not used to describe the
Xbox runtime.

Content is grounded in committed source
`b4cd396f5536f5bcaf33d5e3a6e624c01709abf5` in
[burnout3-ios](https://github.com/TheMarcellVarga/burnout3-ios/tree/b4cd396f5536f5bcaf33d5e3a6e624c01709abf5):
`README.md`, `ios/README.md`, `ios/DEVICE_STATUS.md`, `ios/OPTIMIZATION.md`, the
native shell, preference/import validator, session guard and touch overlay.
Main is the current app; build 13 changes identity/artwork over the recorded
build-9/10 interaction implementation.

The case now covers:

- The PS2 origin and move to the Xbox runtime, with accurate upstream attribution.
- Neutral stick pickup, immediate release, compact driving actions, response curves and faint visuals.
- Game menu → native Settings → Launcher → Resume game, using genuine captures.
- Manifest-verified, staged installation of 716 files and preservation of existing data.
- Pacing and redundant-draw optimization with explicit metric and test limits.
- Runtime architecture, the seven host suites and unresolved device validation.

## Evidence boundary

The roughly 155-second single-track race sample measured 59.9–60.1 Metal
presentations per second across 31 five-second samples. It is not a claim of
sustained full-game 60 FPS. The separate menu pacing comparison used five
five-second windows per setting: 76.92% versus 52.98% mean whole-process CPU
relative to one core, with recent guest-flip p95 of 16.760 versus 16.744 ms
for 8 ms versus 4 ms spin lead. Runs were sequential on a warm phone; these
are not thermally controlled measurements, a PS2/Xbox benchmark or a battery-life result.

The visible native screens are from build 9 and the quieter controls from
build 10, captured 23 October. Portfolio updates did not rerun game tests or
benchmarks. Seven host suites and scripted device checks establish the bounded
behaviors described in the source. Physical touch comfort, end-to-end Files
provider integration, audio quality and long-session behavior remain open.
The held live runtime still used about 58% of one core in a recorded sample.

## Media provenance

The following full device screenshots were converted losslessly to WebP,
without cropping, retouching, composites or recreated controls. Paths below are
relative to the development Xbox checkout’s ignored run folder
`local/runs/iphone-20261023/`.

| Portfolio file | Original screenshot | Meaning |
| --- | --- | --- |
| `xbox-hybrid-controls-20261023.webp` | `build10-grid.png` | Xbox build 10 race start, actual faint hybrid controls |
| `xbox-pause-menu-20261023.webp` | `final9-pause-menu.png` | Original pause menu with the injected IOS SETTINGS row |
| `xbox-settings-20261023.webp` | `final9-native-panel.png` | Native Settings and Launcher toolbar action |
| `xbox-resume-launcher-20261023.webp` | `native-launcher-roundtrip.png` | Resume game launcher from the earlier build-9 menu test |

Files live under `public/images/burnout3/`. The older PS2 captures from
19 October and build-45/46 renderer output remain as historical media but no
longer represent the current app in the case or work index. No browser game
controls or device surround are fabricated. The selector changes recorded
screens; it does not operate a game session.

## Portfolio verification

The focused browser suite checks genuine media, current source/legacy links,
keyboard-operated screen selection, inspectable measurement limits, index and
sitemap presence, and the incumbent font/background/alignment. At 1440, 390
and 320 pixels it checks image loading, horizontal containment and WCAG A/AA
with axe. These verify the portfolio page, not game runtime behavior.

Verified on 27 October 2026 with Node 22.13.1: production build, TypeScript,
scoped ESLint and all seven focused Playwright tests pass. WCAG A/AA checks
pass at 1440, 390 and 320 pixels. All four lossless WebP files were compared
pixel-for-pixel against the original screenshots. The keyboard test allows
for the existing reduced-motion provider’s startup wrapper remount before
asserting the selected screen. Evidence is under `tmp/burnout-case/`.
