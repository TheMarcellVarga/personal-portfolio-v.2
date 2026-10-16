# Portfolio design system

The index (`app/page.tsx`) is the visual reference. Internal pages should share its
foundation while keeping layouts appropriate to their content.

## Foundation

- Typography: the system sans stack in `--font`; `--mono-font` only for metadata.
- Colors: warm `--page-background`, ink `--color-custom-blue`, rust `--title-accent`.
  Cyan belongs to the index's technical artwork and dark supporting details.
- Background: `PageBackground`, never a separately colored route background.
- Content width: `portfolio-container` (80rem), with `page-gutter` for mobile safe areas.
- Rhythm: `portfolio-section` and `--section-space` (5rem / 6rem / 8rem).
- Panels: `dark-panel`, sharing radius, navy background, and shadow with the index.
  `glass-panel` is the existing lighter surface treatment.

## Shared components

`PortfolioShell` owns the background, navigation, mobile menu state, and footer.
Internal pages render one `main` with `id="main-content"` and
`className="portfolio-main page-gutter"` inside it.

`PageIntro` owns internal-page titles, the topic label, lead copy, and actions.
Use `title-accent` for emphasis and `section-heading` for major section headings.
Use `portfolio-button`, with `portfolio-button-secondary` on warm backgrounds or
`portfolio-button-light` inside navy panels. Keep visible keyboard focus.

Most case studies render through `CaseStudyPage`. Aperture, Focusin, Wild Route, and Endless Activity use dedicated
screen-led layouts that retain `PortfolioShell`, `PageIntro`, the shared container,
and index tokens. Product screenshots retain their
own product colors; surrounding typography and surfaces belong to the portfolio.
Use real captions below photographs instead of tilted or floating badges.

Walkthrough selectors and Focusin recovery examples use labelled button groups
with `aria-pressed`. Selected controls use ink with white text; unselected controls use a
light surface and ink text. Keep the shared rust focus outline, a minimum 48px
control height, and polite live announcements for changing explanatory copy.
Native disclosures keep longer evidence readable without interrupting the main
story; their focus outline is white inside a navy panel.

Focusin adapts these shared patterns to native popover captures: images preserve
their aspect ratio and fit within a neutral stage, with provenance in the caption.
The walkthrough pairs a readable capture with its design decision on desktop and
stacks them below 1024px. Recovery examples and refinement copy stack below
768px. The screenshot stage color and capture shadow are local presentation
details, not additional portfolio color or elevation tokens.

## Motion and document layouts

Use the existing reduced-motion hook for entrance effects. Keep reading and links
available when animation is disabled.

The styled and ATS resumes share the screen shell. Print CSS hides navigation,
page introductions, actions, and footer. The styled document keeps its A4 navy
layout; the ATS document keeps a simple white, single-column print layout. Screen
changes must preserve those document layouts and the existing PDF download paths.

## Verification

`tests/e2e/design-system.spec.ts` checks all routes against the index's font and
background, common content alignment, mobile containment, navigation, and print
presentation. Keep that coverage current when adding a route.

Endless Activity pairs native portrait captures with concise interaction copy.
Its three-device hero collapses to Discover on mobile. Walkthrough controls use
the shared labelled button group and selected state; only the capture transition
animates, respecting reduced motion. Historical capture provenance and pending
simulator checks remain visible outside the evidence disclosure.
