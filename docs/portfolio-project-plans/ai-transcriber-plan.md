# ThreadScribe Studio Rework Plan

Repository: `/Users/marcellvarga/Github - Personal Projects/ai-transcriber`

Classification: Supporting Project

Priority: 5

Suggested time box: 2-3 weeks

## Portfolio Objective

Present ThreadScribe as a compact example of trustworthy AI interaction design,
local-first persistence, provider disclosure, structured output, and
recoverable long-running workflows.

## Target Portfolio Outcome

A reviewer can record or upload a short audio file, inspect timestamped raw
segments, run a structured transformation, edit the result, save the session,
find it later, and export it safely.

## Preserve

- raw and transformed output separation;
- local SQLite session library;
- deterministic fixture mode;
- schema validation;
- provider and privacy visibility;
- progress, cancellation, partial results, and retry;
- safe Markdown, text, and JSON exports.

## Cut or De-emphasize

- broad “AI studio” language;
- unverified speaker-label accuracy;
- provider configuration as a main feature;
- documentation volume;
- any implication that fixture transformation is a live model result.

## Phase 0: Claim and Workflow Audit

Status: Not started

### Work

- run the full `npm run check` gate;
- classify transcription and transform paths as fixture, local, cloud, or
  disabled;
- verify every README claim against code;
- inspect sample SQLite and artifact files for private data;
- choose one short demo audio asset with permission;
- document deletion and retention behavior.

### Acceptance Gate

- full verification passes;
- no private transcript data is tracked;
- one permitted demo asset is selected;
- fixture and live paths are labeled consistently.

## Phase 1: Real Local Transcription Path

Status: Not started

### Work

- run one real local Whisper-compatible transcription path;
- validate audio type, size, duration, and failure behavior;
- preserve progress and cancellation semantics;
- handle worker unavailable, model missing, malformed output, and timeout;
- record actual processing time on the demo machine;
- keep fixtures for tests and recruiter demos without local models.

### Acceptance Gate

- one real audio file produces timestamped segments;
- failure does not lose the user's workspace state;
- fixture and local results are visually distinguishable;
- measured latency is recorded honestly.

## Phase 2: AI Evaluation and Review

Status: Not started

### Work

- define a small labeled transcript set;
- evaluate clean, notes, and action extraction;
- test malformed model output and schema recovery;
- include prompt-injection and instruction-like transcript fixtures;
- show confidence and provider metadata without overstating accuracy;
- require user confirmation before overwriting edited content;
- compare fixture and one configured provider if available.

### Acceptance Gate

- evaluation runs deterministically;
- malformed output has a recoverable UI state;
- user edits are never overwritten silently;
- any quality numbers come from the recorded dataset.

## Phase 3: Accessibility, Privacy, and Reliability

Status: Not started

### Work

- run keyboard-only QA through upload, transform, edit, save, search, and export;
- add accessible announcements for job progress and cancellation;
- verify focus behavior in command palette and dialogs;
- add tests for export redaction and session deletion;
- verify health/status routes never expose paths or keys;
- test mobile and narrow-window layouts;
- run automated accessibility checks.

### Acceptance Gate

- core flow works with keyboard only;
- job state changes are announced accessibly;
- export and deletion privacy tests pass;
- no critical accessibility violations remain.

## Phase 4: Case Study Package

Status: Not started

### Work

- capture the complete session lifecycle;
- record a 45-60 second demo;
- show raw versus transformed evidence;
- create one small architecture diagram;
- explain fixture-based evaluation, local-first persistence, and provider
  disclosure;
- include one provider or worker failure;
- state exact live-model limitations.

### Acceptance Gate

- supporting case study is shorter than the main flagships;
- screenshots come from the current build;
- AI trust behavior is visible;
- no claim suggests model research or production-scale transcription.

## Stop Conditions

Stop after one reliable local transcription path, one evaluation set,
accessibility/privacy verification, and the case-study package.

Do not add teams, cloud sync, subscriptions, meetings, or a general knowledge
base.

## Definition of Done

- full project check passes;
- real local transcription is demonstrated;
- evaluation and injection fixtures pass;
- privacy and keyboard behavior are verified;
- demo video and concise case study are published.
