---
name: Marcell Varga Portfolio
description: Shared visual system extracted from the portfolio foundation and established case studies.
colors:
  custom-blue: "#111b28"
  title-accent: "#b64a2b"
  page-background: "#f3ede5"
  page-surface: "rgba(255, 251, 247, 0.68)"
  page-surface-strong: "rgba(255, 252, 249, 0.84)"
  page-border: "rgba(17, 27, 40, 0.08)"
  panel-background: "#071726"
  case-muted: "#4e5965"
  panel-muted: "#c4ccd4"
  white: "#ffffff"
  custom-teal: "#4ccfff"
typography:
  display:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Apple Color Emoji", Inter, Roboto, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif'
    fontSize: "clamp(3rem, 7vw, 5.4rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontSize: "clamp(2.3rem, 10vw, 5.4rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  title:
    fontSize: "clamp(1.35rem, 2vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  body:
    fontSize: "1rem"
    lineHeight: 1.75
  label:
    fontSize: "0.68rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.2em"
rounded:
  panel: "1.65rem"
  panel-tablet: "2.5rem"
  panel-desktop: "3rem"
  selector: "0.85rem"
  pill: "999px"
spacing:
  section: "5rem"
  section-tablet: "6rem"
  section-desktop: "8rem"
  gutter: "1.5rem"
  gutter-desktop: "2.5rem"
components:
  button-primary:
    backgroundColor: "{colors.custom-blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
  button-secondary:
    backgroundColor: "{colors.page-surface-strong}"
    textColor: "{colors.custom-blue}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.custom-blue}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
  selector:
    textColor: "{colors.custom-blue}"
    rounded: "{rounded.selector}"
    padding: "0.7rem 1.1rem"
  selector-selected:
    backgroundColor: "{colors.custom-blue}"
    textColor: "{colors.white}"
  dark-panel:
    backgroundColor: "{colors.panel-background}"
    textColor: "{colors.white}"
    rounded: "{rounded.panel}"
---

# Design System: Marcell Varga Portfolio

## Overview

This records the existing index foundation and the shared Aperture and Burnout case-study presentation. The user has explicitly pinned that incumbent visual identity. Warm page surfaces, dark blue text, rust emphasis, large medium-weight headings and generous section spacing carry the portfolio framing. Product captures retain their own colors.

The shared shell supplies the background, fixed header and footer. Case studies reuse the same introduction, container, buttons, selectors and dark engineering panel. A new named creative metaphor has not been established; this document describes the implementation without inventing one.

**Key Characteristics:**
- Warm page background with dark blue text and rust title emphasis.
- Shared sans-serif type across headings, prose and labels.
- Wide containers, generous section separation and compact related content.
- Product imagery framed by portfolio surfaces without recoloring its contents.
- Interactive selectors and expandable evidence within normal page flow.

## Colors

The portfolio uses a warm neutral foundation, rust primary emphasis and dark navy surfaces.

### Primary
- **Rust title accent:** selected title phrases, link hover and keyboard focus on light surfaces.

### Secondary
- **Cyan detail accent:** existing architecture arrows on the dark engineering panel. It is a supporting detail, not a replacement page accent.

### Neutral
- **Dark blue:** shared foreground, primary buttons and selected controls.
- **Warm page background:** the document foundation.
- **Translucent warm surfaces:** lighter controls and the existing shared shell surfaces.
- **Subtle page border:** lightweight separators.
- **Navy panel:** engineering and implementation content.
- **Muted case text:** prose, metadata and image captions on light backgrounds.
- **Muted panel text and white:** supporting copy and primary content on dark surfaces.

**The Capture Color Rule.** Portfolio chrome follows the shared palette; captured interfaces and game frames keep their native colors.

## Typography

**Display and Body Font:** the shared `--font` stack recorded in the frontmatter. Display, body and label utilities all resolve to this same stack. Cabinet Grotesk is loaded in the stylesheet but is not the shared page-title font. The user has confirmed retaining the incumbent font and eyebrow treatment.

The type hierarchy relies on size, medium weight, tight heading tracking and relaxed prose leading. Page titles are balanced and normally constrained to 18ch; the Burnout title explicitly removes that width constraint. Section headings use the headline role and tighten to a line height of 0.96 from the tablet breakpoint. Case-study third-level headings use the title role.

Body copy generally measures 58–62ch, with paragraph leading between 1.75 and 1.8. The shared introductory lead increases to 1.125rem from 640px. Metadata and captions step down to 0.875rem and 0.75rem. The shared uppercase eyebrow uses the label role; this documents an explicitly retained incumbent choice, not a requirement to add more labels.

The mono stack is available for code and data, while tabular numerals support architecture-adjacent measurements and readouts. It is not the default technical case-study voice.

## Layout

The main container spans the available width up to 80rem and centers horizontally. Main padding begins at 8rem above the content and 3rem below; the top grows to 9rem from 640px. Horizontal gutters follow the frontmatter, with desktop gutters applied from 1024px. On screens below 640px, the shared page-gutter utility uses `max(clamp(1.75rem, 8.25vw, 2rem), env(safe-area-inset-left/right))`.

Section spacing follows the responsive section scale: base, tablet from 640px and desktop from 1024px. Content groups use smaller gaps, commonly 1.5–4rem. Wide case-study compositions pair media with explanatory prose. Columns collapse according to content: walkthrough changes start below 1024px, while most case grids, architecture steps and evidence columns stack below 768px. In-page section targets allow 7rem for the fixed header.

The Burnout case places title and subtitle before a genuine full-screen gameplay capture with native controls, then introduction and metadata. This is that case's evidence-first composition, not a universal ordering rule for all routes. Captions distinguish full-app captures from historical renderer-only output.

## Elevation & Depth

The implementation combines tonal layering with soft, offset shadows. The shared dark panel and major capture frames use the panel shadow; shared translucent shell surfaces use the lighter page shadow and inset highlights. These existing surface treatments are retained, not generalized into a requirement for glass on new content.

The exact shadow strings and shared interaction timings are recorded in the sidecar. Case-study section organization primarily uses space and thin dividers rather than enclosing every paragraph in a card.

## Shapes

Large panels and recurring capture frames use the responsive panel radius. Buttons use pill silhouettes. Selectable walkthrough controls use the smaller selector radius. These established radii are explicitly retained by the user and should be inherited through the shared variables.

Burnout uses genuine full-app gameplay captures and separately captioned historical renderer-only output. Do not recreate controller UI, invent device chrome, or composite different captures into an apparent screenshot.

## Components

### Buttons

Primary actions use a dark blue fill and white text, secondary actions a strong warm translucent fill and dark text, and light actions a white fill. All share pill shape, centered inline content, a 3rem minimum height, a 0.75rem icon gap and the padding in the frontmatter. Hover lifts by 2px over 300ms; active scales to 0.985. Primary hover becomes a slightly lighter blue; secondary hover becomes white. Keyboard focus is a rust outline offset from the control.

### Selectors

Case walkthrough and recorded-experiment selectors wrap horizontally with a 0.5rem gap. Controls have a 48px minimum height, pale translucent unselected backgrounds and solid dark selected backgrounds with white text. Selection is conveyed through `aria-pressed`; hover brightens only an unselected control. Below 768px they can wrap into approximately two columns. Their grouped buttons reveal corresponding content rather than navigating away.

### Navigation

The shared shell owns the header and footer. Case-study section navigation is a wrapping row of text links above a thin bottom divider. Links use muted text, turn rust on hover and have visible keyboard focus. Their target sections account for the fixed header.

### Cards / Containers

The shared dark engineering panel uses the panel background, responsive radius, panel shadow and responsive internal padding (`clamp(1.5rem, 4vw, 3rem)`). Architecture steps form three columns with directional SVG arrows, then stack with downward arrows on narrow screens. Supporting verification content forms two columns and stacks on mobile.

### Evidence Disclosure

Native details/summary reveals supporting implementation evidence without leaving the page. The summary is a full-width row with at least 60px height, a thin top divider and a chevron that rotates when open. On dark panels, primary labels and focus outlines are white and supporting evidence text is muted blue-gray.

### Page Introduction and Captures

The existing introduction combines a restrained uppercase eyebrow, large heading, rust inline emphasis and a measured lead. The shell and introduction are reusable; each project's image composition follows its source material. Screens and game frames preserve aspect ratio and explain their provenance in captions. Interactive explanations are labeled as explanations when placed over recorded imagery.

## Do's and Don'ts

### Do:
- **Do** extend the index and Aperture foundation through shared type, containers, buttons and surface variables.
- **Do** preserve native colors and truthful captions in product captures.
- **Do** retain visible keyboard focus, pressed states and responsive wrapping for existing controls.
- **Do** keep detailed evidence available through the established disclosure pattern.
- **Do** honor the implementation's reduced-motion overrides.

### Don't:
- **Don't** replace the established portfolio identity for a supporting case study.
- **Don't** promote device controls, game imagery colors or one case's measurements into global design tokens.
- **Don't** describe recorded frames or explanatory overlays as live product execution.
- **Don't** fabricate product UI for a case study. Use genuine captures and distinguish historical app screenshots from game-only output.
