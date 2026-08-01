# First Revenue Game Rework Plan

Repository:
`/Users/marcellvarga/Github - Personal Projects/gamified-business-development`

Classification: Flagship

Priority: 2

Suggested time box: 4-6 weeks

## Portfolio Objective

Present First Revenue Game as a coherent member and operator workflow that
demonstrates React/Next.js product engineering, Java/Spring ownership,
event-driven workflow design, authorization, testing, and operational judgment.

## Target Portfolio Outcome

A reviewer can:

1. enter a deterministic demo;
2. view an assigned mission;
3. submit proof;
4. see the proof in an operator review queue;
5. reject it with actionable feedback;
6. resubmit;
7. approve it and observe progression;
8. inspect the audit/event history.

## Preserve

- narrow application, mission, proof, review, and progression loop;
- member and operator perspectives;
- Spring-owned authoritative workflow slices;
- Flyway migrations;
- PostgreSQL and Redpanda integration tests;
- transactional outbox;
- scoped proof-artifact access;
- observability foundation.

## Cut or De-emphasize

- infrastructure with no visible behavioral reason;
- generic gamification language;
- billing as a lead story;
- parallel auth systems in the public narrative;
- roadmap volume;
- Kubernetes as evidence of production scale.

## Phase 0: Toolchain and Baseline

Status: Not started

### Work

- foreground Node 22.13 or newer in prerequisites;
- pin package manager and Java versions;
- provide one setup or verification command;
- run lint, type checking, unit tests, browser tests, and backend tests;
- record Docker and Testcontainers requirements;
- remove local absolute links from public Markdown;
- audit fixture, demo, configured-provider, and production-mode claims.

### Acceptance Gate

- a fresh environment can run the documented verifier;
- frontend and backend checks are reproducible;
- README prerequisites match `package.json`;
- current limitations are consistent across docs.

## Phase 1: Product Loop and UX

Status: Not started

### Work

- make one mission and proof loop the main demo;
- clarify member state after submission, rejection, resubmission, and approval;
- make operator decisions visible to the member;
- provide upload progress, validation, retry, and unavailable-storage states;
- explain XP and progression only where they change product behavior;
- remove decorative or redundant gamification;
- ensure demo data persists for the walkthrough or resets predictably.

### Acceptance Gate

- full loop completes without manual database edits;
- member and operator states remain coherent;
- every failure has a recovery action;
- the demo can be reset safely.

## Phase 2: Backend Identity and Authorization

Status: Not started

### Work

- replace or harden the transitional internal BFF identity boundary;
- propagate a verifiable user identity and role to Spring;
- enforce ownership and role decisions inside the backend;
- add tests for member, operator, and unauthorized access;
- verify proof download and signed URL behavior;
- test artifact metadata cannot be enumerated across users;
- document trust boundaries between Next.js, Spring, storage, and events.

### Acceptance Gate

- backend-native permission tests pass;
- a member cannot reach admin operations;
- cross-user proof access is rejected;
- BFF headers cannot be forged by public clients;
- authorization rules have one source of truth.

## Phase 3: Event and Reliability Hardening

Status: Not started

### Work

- demonstrate why each event exists;
- test outbox recovery from producer failure;
- verify idempotent consumption;
- record retry and dead-letter or failed-event behavior;
- confirm event replay does not duplicate progression;
- add contract tests for migrated Next.js BFF routes;
- reduce background shutdown noise in tests where possible;
- add structured production log format.

### Acceptance Gate

- event failure and recovery are automated;
- duplicate events do not duplicate outcomes;
- outbox state can be inspected;
- API contracts and migrations pass in CI.

## Phase 4: Frontend Quality and E2E

Status: Not started

### Work

- extend Playwright through the complete member/operator loop;
- add keyboard and screen-reader checks for forms, uploads, queues, and dialogs;
- test responsive member and admin layouts;
- add accessible status announcements for upload and review state changes;
- verify reduced motion;
- measure route and interaction performance;
- document optimistic versus server-confirmed state.

### Acceptance Gate

- golden-path and rejection-path E2E pass;
- keyboard-only workflow works;
- no critical accessibility violations;
- user-visible state never claims success before authoritative confirmation.

## Phase 5: Configured Runtime and Operations

Status: Not started

### Work

- run one complete configured-provider environment;
- verify PostgreSQL, Redpanda, Redis, MinIO, and Spring readiness behavior;
- add useful Grafana panels for latency, errors, outbox backlog, and events;
- verify privacy-safe tracing across Next.js and Spring;
- document local, staging, and portfolio-demo configurations;
- remove unused Kubernetes or provider configuration if not demonstrated.

### Acceptance Gate

- configured golden path passes;
- monitoring shows real request and event behavior;
- secrets are not present in logs or traces;
- architecture diagram contains only active components.

## Phase 6: Case Study Package

Status: Not started

### Work

- capture the member and operator flow;
- record a 60-90 second walkthrough;
- create one current-state architecture diagram;
- show the migration from Next.js-owned logic to Spring-owned slices;
- explain the outbox and artifact permission decisions;
- include the Node toolchain lesson and one architecture simplification;
- publish real test evidence.

### Acceptance Gate

- product story leads, infrastructure supports it;
- diagram matches configured runtime;
- limitations on production identity and scale are resolved or explicit;
- case study supports a 10-minute system-design discussion.

## Stop Conditions

Stop when the end-to-end workflow, backend-native permissions, event recovery,
accessibility, configured runtime, and case study are complete.

Do not add more gamification systems, social features, or infrastructure unless
they change the demonstrated product loop.

## Definition of Done

- one-command verifier works on the documented toolchain;
- frontend, backend, and E2E tests pass;
- backend-native ownership is enforced;
- outbox failure and idempotency are tested;
- configured demo works;
- monitoring and logs are privacy-safe;
- case study is published.
