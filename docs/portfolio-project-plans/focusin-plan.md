# Focusin Rework and Release Plan

Repository: `/Users/marcellvarga/Github - Personal Projects/focusin`

Classification: Supporting Project, featured as a main case study

Priority: 3

Suggested time box: 3-4 weeks

## Portfolio Objective

Present Focusin as a small, complete native macOS product that demonstrates
scope judgment, state-machine design, lifecycle integration, accessibility,
local-first privacy, and release discipline.

## Target Portfolio Outcome

A reviewer sees a polished menu-bar workflow:

1. select current state and available time;
2. receive a suitable micro-break;
3. start and complete the break;
4. return to focus;
5. configure reminders and quiet hours;
6. relaunch and recover the correct state.

## Preserve

- local-only architecture;
- no account, analytics, cloud, billing, or generative AI;
- curated activity catalog;
- explicit state transitions and restoration rules;
- quiet hours and notification behavior;
- native SwiftUI controls and platform conventions;
- accessibility and safety review.

## Cut or De-emphasize

- roadmap and evidence document volume on the public page;
- speculative post-v1 features;
- “TestFlight-ready” language until signing evidence exists;
- unnecessary visual effects that make the menu-bar app feel web-like.

## Phase 0: Release Baseline

Status: Not started

### Work

- run the current build, test, and release-preflight scripts;
- record Xcode, Swift, macOS, and hardware versions;
- inspect warnings in Debug and Release;
- verify repository ignores build output and machine files;
- reconcile README with actual release evidence;
- capture current app states before visual polish.

### Acceptance Gate

- tests pass;
- unsigned Release build passes;
- no tracked local build output remains;
- README does not imply signed release verification.

## Phase 1: Native Product Polish

Status: Not started

### Work

- review every popover and Settings state at normal and large text;
- refine hierarchy without replacing native patterns;
- verify empty and catalog-error recovery;
- verify focus, break-due, breaking, and restored presentations;
- finalize icon and menu-bar symbol;
- review all activity copy for clarity, safety, and office suitability;
- verify light, dark, increased-contrast, and reduced-transparency modes.

### Acceptance Gate

- no clipped or overlapping text;
- every error has a recovery action;
- icon works at all required sizes;
- native controls remain recognizable;
- content review has a named human owner.

## Phase 2: Lifecycle and Platform Verification

Status: Not started

### Work

- test notification permission denied, granted, and changed externally;
- test login-item permission and System Settings recovery;
- test sleep, wake, clock change, timezone change, and midnight rollover;
- test app termination during focus and break states;
- verify quiet hours at boundary times;
- confirm reminder mutation leaves zero or one pending notification;
- record results by build number and macOS version.

### Acceptance Gate

- signed-build lifecycle matrix is complete;
- failed scenarios include logs and resolution;
- restoration behavior matches the behavioral contract;
- no duplicate reminders are observed.

## Phase 3: Accessibility and Beta

Status: Not started

### Work

- run VoiceOver through the complete workflow;
- verify keyboard-only operation;
- test large accessibility sizes;
- verify reduced motion and transparency;
- recruit 5-8 beta testers;
- give testers three task-based scenarios;
- record issues without inventing satisfaction metrics;
- fix P0/P1 issues and explain deferred feedback.

### Acceptance Gate

- no workflow blocker remains for keyboard or VoiceOver;
- beta feedback is recorded anonymously;
- release-blocking issues are resolved;
- catalog and safety copy receive human review.

## Phase 4: Signed Distribution

Status: Not started

### Work

- configure signing and archive;
- inspect entitlements and privacy manifest in the archived product;
- validate launch-at-login and notifications in the signed build;
- prepare support and privacy URLs;
- finalize App Store Connect metadata and screenshots;
- distribute through TestFlight if available for the target;
- prepare rollback and support response.

### Acceptance Gate

- signed archive passes validation;
- support and privacy pages are live;
- store assets match the current build;
- a beta build is installable outside the development environment.

## Phase 5: Case Study Package

Status: Not started

### Work

- capture six core states;
- record a 30-45 second native workflow;
- create a small state-machine diagram;
- explain local-first and curated-catalog decisions;
- show lifecycle and accessibility test evidence;
- state remaining release limitations;
- avoid presenting documentation volume as the outcome.

### Acceptance Gate

- product can be understood in 30 seconds;
- engineering depth supports a 5-10 minute discussion;
- screenshots are from the signed or release-candidate build;
- privacy and accessibility claims are evidenced.

## Stop Conditions

Stop when signed-build verification, beta feedback, store-quality presentation,
and case-study evidence are complete.

Do not add accounts, cloud sync, AI generation, social features, or streak
pressure for the portfolio version.

## Definition of Done

- build and tests pass;
- lifecycle matrix is recorded;
- VoiceOver and keyboard flow work;
- beta issues are triaged;
- signed archive is validated;
- release or beta link exists;
- case study and demo video are published.
