# Shader Lab Rework Plan

Repository: `/Users/marcellvarga/Github - Personal Projects/shader-lab`

Classification: Upgrade Candidate and supporting technical specimen

Priority: 6, choose this or Robot Remote Control

Suggested time box: 1-2 weeks

## Portfolio Objective

Turn Shader Lab into a focused browser graphics tool that proves code-editor
integration, WebGL lifecycle management, error recovery, URL state, and
performance awareness.

Do not build the planned community platform.

## Current Risk

The repository contains multiple frontend/backend/deploy copies, a tracked
environment file, extensive uncommitted work, generated artifacts, and a README
with incomplete setup instructions. Existing user changes must be preserved
during consolidation.

## Target Outcome

A reviewer can edit a fragment shader, see a live preview, understand compiler
errors, adjust generated uniform controls, reset safely, and share the current
shader through a URL or exported file.

## Phase 0: Preserve and Consolidate

Status: Not started

### Work

- inventory all uncommitted and duplicate files before editing;
- identify the canonical frontend and server, if a server is still needed;
- create a recoverable backup or branch before moving files;
- remove tracked `.env` in favor of `.env.example`;
- inspect history for secrets without printing them;
- remove generated deploy and build copies after confirming no unique work;
- replace the TBD setup instructions.

### Acceptance Gate

- no user work is lost;
- one canonical app exists;
- tracked environment files are removed;
- clean install and build instructions work;
- worktree state is understood.

## Phase 1: Rendering Core

Status: Not started

### Work

- isolate WebGL renderer lifecycle from React rendering;
- compile on a controlled debounce;
- preserve the last valid frame after compile failure;
- map compiler errors to editor lines;
- handle context loss and restoration;
- resize using device-pixel-ratio limits;
- dispose shaders, buffers, textures, and animation frames;
- pause rendering when the tab is hidden.

### Acceptance Gate

- invalid shaders never crash the app;
- context loss has a recoverable state;
- resources are disposed on replacement and unmount;
- resize remains sharp without unbounded GPU cost.

## Phase 2: Editing and Uniform Controls

Status: Not started

### Work

- configure Monaco for GLSL editing and accessible keyboard use;
- parse a small documented uniform convention;
- generate number, color, vector, and texture controls only for supported types;
- make reset and example selection explicit;
- save current shader and controls to URL-safe state or an exported JSON file;
- validate imported state before applying it.

### Acceptance Gate

- supported uniforms generate reliable controls;
- unsupported declarations fail visibly;
- URL or file sharing reproduces the same valid state;
- keyboard users can reach editor, errors, controls, and preview actions.

## Phase 3: Testing and Performance

Status: Not started

### Work

- unit test parser, serialization, validation, and error normalization;
- add browser tests for valid compile, invalid compile, recovery, import, and
  share;
- measure compile delay, frame rate, and GPU/CPU behavior on one reference
  shader;
- cap resolution or pause expensive previews on constrained devices;
- respect reduced motion for animated examples.

### Acceptance Gate

- core browser tests pass;
- invalid input is recoverable;
- real performance values are recorded;
- the app remains responsive while editing.

## Phase 4: Portfolio Package

Status: Not started

### Work

- include three original or clearly licensed example shaders;
- record a 20-30 second editing demo;
- write a concise rendering lifecycle diagram;
- explain compile recovery, resource cleanup, and performance decisions;
- publish as a technical specimen, not a social platform.

### Acceptance Gate

- demo opens without configuration;
- examples and licenses are documented;
- case study focuses on browser graphics engineering;
- README reflects the consolidated repository.

## Stop Conditions

Stop after the editor, preview, compiler errors, uniform controls, sharing,
tests, and performance note work.

Do not add accounts, comments, feeds, likes, discovery, or a database.

## Definition of Done

- canonical repository is clean;
- no environment file is tracked;
- shader errors and context loss recover;
- sharing is deterministic;
- tests pass;
- performance evidence and specimen page are published.
