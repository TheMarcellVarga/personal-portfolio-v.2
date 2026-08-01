# Robot Remote Control Rework Plan

Repository:
`/Users/marcellvarga/Github - Personal Projects/2025-frontend-takehome`

Classification: Supporting Project after rework

Priority: 6

Suggested time box: 1-2 weeks

## Portfolio Objective

Turn the take-home into a focused interaction-engineering specimen that proves
input handling, geometry, animation, accessibility, component API design, and
testing.

Publication is conditional on the original company's rules. If permission is
unclear, keep the repository private and reproduce only a generic, independently
written interaction with different branding and assets.

## Target Outcome

A reviewer can use the control with pointer, touch, and keyboard input, observe
clear direction and speed output, and inspect tests for geometry, dead zones,
clamping, cancellation, and input-state recovery.

## Preserve

- narrow robot-control problem;
- Storybook presentation;
- spring-based feedback;
- extracted joystick utilities and hook;
- speed and direction output.

## Replace or Simplify

- duplicated mouse and gesture paths;
- React state updates for continuous values where avoidable;
- company branding if publication is not authorized;
- debug-only behavior in the public story;
- oversized dependency and repository artifacts.

## Phase 0: Permission and Baseline

Status: Not started

### Work

- confirm publication rights;
- identify starter code versus personal contribution;
- record current browser and device behavior;
- run build and Storybook;
- inspect generated or vendored files;
- define supported inputs and output contract.

### Acceptance Gate

- publication decision is documented;
- contribution boundary is explicit;
- current build works;
- supported input matrix is fixed.

## Phase 1: Interaction Architecture

Status: Not started

### Work

- consolidate pointer and touch behavior with Pointer Events;
- use pointer capture and handle cancel/lost-capture behavior;
- extract pure geometry for radius, clamping, normalization, and dead zone;
- keep continuous movement outside unnecessary React rerenders;
- define speed and direction update frequency;
- restore neutral state reliably on release, blur, and cancellation;
- remove unused or duplicate handlers.

### Acceptance Gate

- one input pipeline handles mouse, pen, and touch;
- geometry is framework-independent;
- control returns to neutral after every cancellation path;
- no listener or timer leaks remain.

## Phase 2: Accessibility and Alternative Input

Status: Not started

### Work

- provide arrow-key control and a neutral/reset command;
- expose current direction and speed with a sensible accessible value;
- add visible focus and instructions;
- support high contrast and reduced motion;
- ensure the control is usable without dragging;
- verify touch target size and orientation changes.

### Acceptance Gate

- complete interaction works with keyboard only;
- screen-reader output is useful without becoming noisy;
- reduced motion removes spring-heavy feedback;
- touch behavior works on a real device or browser emulator.

## Phase 3: Tests and Storybook

Status: Not started

### Work

- add unit tests for geometry, dead zone, clamping, speed, and direction;
- add interaction tests for pointer down, move, release, cancel, and keyboard;
- create stories for neutral, active, disabled, error/disconnected, high
  contrast, and reduced motion;
- add a small performance check for continuous movement;
- document the component API and event contract.

### Acceptance Gate

- unit and interaction tests pass;
- all supported states have stories;
- no state relies on manual timing;
- Storybook can be reviewed without the full app.

## Phase 4: Portfolio Package

Status: Not started

### Work

- record a 15-20 second interaction demo;
- write a one-page technical note;
- show the geometry and input architecture;
- explain one performance decision and one accessibility decision;
- state the original time constraint and starter-code boundary if permitted.

### Acceptance Gate

- case study is explicitly a technical specimen;
- claims are limited to personal work;
- demo and tests match the current implementation.

## Stop Conditions

Stop after interaction architecture, accessibility, tests, Storybook, and the
technical note. Do not add authentication, telemetry, backend control, or a
robot fleet dashboard.

## Definition of Done

- publication is authorized or branding is independently recreated;
- pointer and keyboard paths work;
- geometry and interactions are tested;
- reduced-motion and high-contrast modes work;
- concise specimen page is published.
