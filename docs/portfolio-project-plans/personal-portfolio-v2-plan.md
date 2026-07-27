# Personal Portfolio v2 Integration Plan

Repository:
`/Users/marcellvarga/Github - Personal Projects/personal-portfolio-v.2`

Classification: Portfolio shell

Priority: 4, developed alongside the featured projects

Suggested time box: 3-4 weeks across the rework program

## Portfolio Objective

Turn the portfolio into a selective engineering narrative for product,
frontend, fintech, and applied-AI roles in Singapore and internationally.

The site should feature three main case studies, not expose the entire repository
history.

## Target Visitor Outcome

Within 60 seconds, a hiring manager should understand:

- Marcell is a product-focused frontend engineer;
- UX judgment is an engineering advantage;
- the work includes complex interfaces, APIs, data, reliability, and AI trust;
- three projects provide credible evidence;
- current role, location, and contact path are clear.

## Content Hierarchy

### Featured

1. Aperture Financial Intelligence
2. Wild Route
3. Professional product work (confidential)

### Supporting

- Earlier work is retained only as clearly labelled archive evidence.

### GitHub only

- Endless Activity and selected learning or utility repositories

## Phase 0: Content and Analytics Baseline

Status: Complete (audit recorded 2026-07-27)

### Work

- record current routes, metadata, analytics events, and deployment;
- inventory existing project cards and claims;
- preserve URLs with existing external links;
- identify current performance and accessibility baseline;
- decide which old projects disappear from navigation;
- define one primary contact CTA label.

### Acceptance Gate

- new information architecture is approved;
- redirect needs are known;
- current metrics are recorded without inventing user behavior;
- selected project set is fixed.

## Phase 1: Positioning and Information Architecture

Status: Complete (implemented and verified 2026-07-28)

### Work

- rewrite homepage around product-focused frontend engineering;
- make Singapore context useful, not decorative;
- summarize design background as an engineering advantage;
- feature three current proof points with distinct roles;
- move full project depth to dedicated routes;
- provide a concise experience and capabilities section;
- keep resume and contact easy to reach;
- remove generic skill-cloud and project-grid clutter.

### Acceptance Gate

- role positioning is clear above the fold;
- each featured project has a different proof purpose;
- no archive project appears in the homepage selection;
- navigation fits on one desktop line and works on mobile.

## Phase 2: Case Study System

Status: Complete (implemented and verified 2026-07-28)

### Work

- create a reusable but flexible case-study content model;
- support problem, user, role, flow, architecture, decisions, failures,
  verification, limitations, and links;
- avoid forcing every project into identical visual blocks;
- use real screenshots and videos from current builds;
- provide image dimensions and responsive behavior;
- add code or architecture details only where they aid comprehension.

### Acceptance Gate

- all three featured case studies use the model;
- layouts preserve project-specific identity;
- media has alt text and reserved dimensions;
- limitations are visible.

Implementation note: the shared evidence record is rendered within each
project's existing route so Aperture, Wild Route, and confidential product work
retain their own visual context while exposing role, user, decisions,
verification, and limitations consistently.

## Phase 3: Visual and Interaction Rework

Status: Complete (implemented and verified 2026-07-28)

### Work

- preserve recognizable personal identity unless a full rebrand is chosen;
- define typography, spacing, color, radius, and motion tokens;
- use one accent and coherent theme behavior;
- prioritize screenshots over fake UI previews;
- use motion only for hierarchy, storytelling, feedback, or state change;
- respect reduced motion;
- design explicit mobile fallbacks;
- keep contact and project links clear.

### Acceptance Gate

- visual system is consistent;
- project screenshots remain the main evidence;
- motion has reduced alternatives;
- mobile case studies remain readable;
- CTA text and contrast pass accessibility checks.

Implementation note: the existing visual identity and project-specific media
are retained. Browser coverage confirms the featured case studies remain
readable at a 390px viewport with no horizontal overflow, and motion preference
handling hydrates without markup mismatches.

## Phase 4: Accessibility, Performance, and SEO

Status: Local implementation complete; deployed Web Vitals pending release candidate

### Work

- run keyboard and screen-reader QA;
- add automated accessibility checks;
- optimize image and video loading;
- record LCP, INP, CLS, bundle size, and route payloads;
- add project metadata, canonical URLs, sitemap, and structured data where
  appropriate;
- generate current Open Graph images;
- verify redirects and broken links;
- provide print-friendly resume behavior.

### Acceptance Gate

- no critical accessibility violations;
- keyboard navigation works across all routes;
- Core Web Vitals meet documented targets on the deployed site;
- metadata and social previews are current;
- no broken internal or project links remain.

Implementation note: canonical metadata, social metadata, JSON-LD, sitemap,
responsive `next/image` media, print-friendly resume behavior, browser security
headers, keyboard navigation, internal-link checks, and Axe checks are covered
locally. LCP, INP, CLS, bundle and route-payload measurement still require a
deployed release candidate and real-user or production-lab data.

## Phase 5: Deployment and Evidence

Status: Not started

### Work

- deploy a release candidate;
- test on Chrome, Safari, Firefox, iOS Safari, and one Android browser;
- verify contact delivery and analytics consent behavior;
- run a privacy review;
- ask 3-5 engineers or hiring managers for task-based feedback;
- fix comprehension blockers;
- record release date and current project status.

### Acceptance Gate

- deployed site works from a fresh browser;
- contact route is verified;
- feedback confirms the intended role positioning is understood;
- no unpublished or private repository is linked.

## Phase 6: Ongoing Maintenance

Status: Not started

### Work

- review project status monthly during the job search;
- remove stale demo links immediately;
- keep screenshots aligned with current builds;
- add articles only when they deepen a featured project;
- track broken links and deployment health;
- update resume and availability without redesigning the site.

### Acceptance Gate

- content owner and review cadence are defined;
- project status can be updated without code duplication;
- stale claims have an explicit removal process.

## Stop Conditions

Stop visual expansion when the positioning, three case studies, accessibility,
performance, SEO, and deployed validation are complete.

Do not add more project cards to make the portfolio look larger.

## Definition of Done

- three featured and two supporting projects are presented;
- archive projects are absent;
- accessibility and performance evidence is recorded;
- case studies use real current media;
- deployed links and contact work;
- external reviewers understand the target role;
- ongoing maintenance is simple.
