# Burnout 3: Takedown supporting case

Date: 19 October 2026.

Route: `/burnout3-ios`. Placement: supporting work after Focusin and Endless
Activity. Reference: the index and `/ai-finance`; this page extends their visual
system rather than introducing a separate gaming theme.

The story is the Apple adaptation and interaction work built on burnout3-pc.
It opens with a genuine full-screen gameplay capture including the native
controller. A second race capture shows the same actual app controls in the
interaction section. Three practical decisions lead into historical graphics
experiments.
The architecture, validation limits and upstream credit remain accessible
without turning the case into a development log.

## Evidence boundary

Content was grounded in committed `burnout3-ios` revision `b27cd98`, specifically
`docs/GPU_STATUS.md`, `docs/NATIVE_STATUS.md`, the UIKit input/launch code and the
build configuration. Uncommitted reports and the in-progress README rewrite were
not used to advance the reported performance status. On 19 October 2026, at the
user’s request, the installed app’s existing `--race-soak` replay was run to
capture the actual gameplay UI via `devicectl device capture screenshot`. This
is new visual evidence, not a rerun of the historical GPU/math regressions or a
new benchmark. The replay uses its existing disposable memory card.

The graphics selector shows historical builds 45 and 46, each with 42 two-second
main-scene intervals. These are scene submissions, not simulation ticks or display
refreshes. The frames show different replay moments, so the selector is not a
matched image-difference comparison. Build 51's later short-race measurement is
identified separately. Build 53's race comparison remains pending in the committed
source. Full-game compatibility and stable 50–60 FPS are not claimed.

## Media provenance

Two historical renderer captures and two new full-screen device captures were
converted losslessly to WebP without cropping, retouching or compositing:

| Portfolio file | Source capture | Meaning |
| --- | --- | --- |
| `public/images/burnout3/race-live-reflections.webp` | `local/reports/iphone-race46-race.png` | Build 46 race with live reflections |
| `public/images/burnout3/race-fast-preset.webp` | `local/reports/iphone-race45-original-12000.png` | Build 45 faster preset at original camera distances |
| `public/images/burnout3/gameplay-controller-20261019.webp` | `local/reports/portfolio-gameplay-controller-20261019.png` | Full-screen race replay with actual native controls, captured 19 October 2026 |
| `public/images/burnout3/gameplay-controller-detail-20261019.webp` | `local/reports/portfolio-gameplay-controller-detail-20261019.png` | A second full-screen gameplay/controller capture from the same replay |

No controller UI or device surround is recreated in HTML/CSS. Both gameplay
captures include the native overlay in the original device screenshot. The
historical graphics selector retains raw renderer-only images, explicitly
captioned as excluding the app controls, to preserve its original benchmark
context. No controls were added to those historical frames. The only interactive
elements are portfolio navigation, recorded-image selection and evidence disclosure.

The game is introduced as a 2000s console racer. References to PS2 identify the
specific source version and toolchain used for this port, not platform exclusivity.

## Design and verification

Shared `PortfolioShell`, `PageIntro`, portfolio containers, warm background, rust
accent, typography, buttons, section spacing and navy evidence panel follow the
existing index/Aperture implementation. The case-specific image framing
and measurement table are contained in `BurnoutCaseStudy.module.css`.

Verification covers the production build, TypeScript, scoped ESLint and six
Playwright cases: genuine capture presentation without fabricated controls, keyboard
graphics selection, expandable evidence, index placement, sitemap,
shared typography/background/alignment, mobile containment and WCAG A/AA axe
checks at 1440, 390 and 320 pixels. Portfolio checks do not establish game runtime
correctness or performance.
