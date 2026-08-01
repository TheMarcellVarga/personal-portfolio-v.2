# StoryWeave Upgrade Plan

Repositories:

- `/Users/marcellvarga/Github - Personal Projects/untitled folder`
- `/Users/marcellvarga/Github - Personal Projects/storyweave-platform`

Classification: Optional Upgrade Candidate

Priority: 10

Suggested time box: 3-5 weeks, only if a data-story project is still needed

## Portfolio Objective

Merge the strongest original work into one narrowly scoped data-story editor
that proves complex frontend state, visualization judgment, import validation,
accessible output, and reliable export.

Do not maintain two StoryWeave repositories.

## Target Outcome

A reviewer can import a small CSV, build a short narrative from three
visualization scenes, preview transitions, inspect data and accessibility
summaries, and export or share the result.

## Phase 0: Merge or Archive Decision

Status: Not started

### Work

- identify the canonical repository;
- compare duplicate components and preserve unique user work;
- document which code is original;
- remove generic dashboard features and unsupported claims;
- define one target user and one story format;
- choose a maximum of three supported chart types for v1.

### Acceptance Gate

- one repository remains;
- no unique work is lost;
- scope is limited to one import-to-story flow;
- README describes current behavior.

## Phase 1: Data Import and Model

Status: Not started

### Work

- validate CSV and JSON size, columns, types, and missing values;
- provide mapping UI for category, measure, date, and label fields;
- preserve original source data separately from presentation state;
- implement clear import errors and sample data;
- define versioned story and scene schemas;
- support deterministic save/load.

### Acceptance Gate

- malformed data fails with useful guidance;
- a valid dataset maps into a versioned model;
- saved stories reopen identically;
- sample data is licensed and documented.

## Phase 2: Story Editor

Status: Not started

### Work

- implement three scene types;
- use accessible drag-and-drop with keyboard alternatives;
- provide undo/redo with explicit state boundaries;
- support scene reorder, duplicate, and delete;
- keep editing and preview state separate;
- validate chart choices against the mapped data;
- avoid freeform controls that create unreadable output.

### Acceptance Gate

- complete editor works with keyboard;
- undo/redo is predictable;
- invalid chart/data combinations are blocked;
- scene state is serializable and tested.

## Phase 3: Visualization and Accessibility

Status: Not started

### Work

- use one charting strategy consistently;
- provide titles, units, source notes, and text summaries;
- support color-blind-safe palettes and contrast checks;
- respect reduced motion;
- provide a table or textual alternative;
- test resize and long-label behavior;
- avoid decorative 3D unless it communicates data.

### Acceptance Gate

- every visualization has a non-visual equivalent;
- color is not the only status signal;
- labels remain legible at supported widths;
- transitions do not block comprehension.

## Phase 4: Export and Verification

Status: Not started

### Work

- choose one reliable export target for v1;
- validate export fidelity and fonts;
- add unit tests for schemas and transforms;
- add E2E from import to export;
- test large but supported data;
- measure editor interaction and rendering performance;
- document unsupported export features.

### Acceptance Gate

- export is deterministic;
- E2E passes;
- performance limit is documented;
- exported story preserves source and accessibility information.

## Phase 5: Portfolio Package

Status: Not started

### Work

- create one evidence-based example story;
- record a 30-45 second demo;
- show import, edit, accessibility, and export;
- explain complex state and visualization constraints;
- state that StoryWeave is a focused prototype, not a publishing platform.

### Acceptance Gate

- example uses real, cited data;
- demo matches the current build;
- case study does not claim collaboration, AI insight, or CMS integrations that
  are not implemented.

## Stop Conditions

Stop after one reliable import, three scene types, accessible output, and one
export.

Do not add AI insights, real-time collaboration, CMS integrations, teams,
billing, or a template marketplace.

## Definition of Done

- duplicate repositories are consolidated;
- import and story schemas are tested;
- keyboard editor and accessible charts work;
- export and E2E pass;
- focused example and case study are published, or both repositories are
  archived.
