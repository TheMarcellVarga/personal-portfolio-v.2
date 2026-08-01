# Aperture Financial Intelligence Rework Plan

Repository: `/Users/marcellvarga/Github - Personal Projects/ai-finance`

Classification: Flagship

Priority: 1

Suggested time box: 5-7 weeks

## Portfolio Objective

Present Aperture as a trustworthy financial research workspace that proves
frontend depth, product judgment, API design, Go backend collaboration, and
structured AI behavior.

The case study must not present Aperture as a broker, trading system,
robo-advisor, return predictor, or production-regulated financial service.

## Target Portfolio Outcome

A reviewer can:

1. enter a safe demo account;
2. inspect a portfolio with visible data freshness;
3. open or upload research evidence;
4. generate a cited research or risk brief;
5. inspect assumptions, citations, and provider metadata;
6. save the brief;
7. see a controlled failure or retry path.

## Preserve

- finance decision-support boundary;
- Next.js BFF and Go service separation;
- owner-scoped API behavior;
- OpenAPI contract generation;
- deterministic AI evaluation;
- citations, assumptions, freshness, and non-advice language;
- private document ingestion and retry foundation;
- explicit fixture and live-provider modes.

## Cut or De-emphasize

- broad tours of every route;
- generic marketing pages in the main demo;
- billing as a headline feature;
- infrastructure that cannot be demonstrated;
- claims of live AI document analysis until verified;
- feature-count storytelling.

## Phase 0: Baseline and Claim Audit

Status: Not started

### Work

- record the exact passing commands and environment versions;
- classify every feature as live, configured, fixture-backed, dormant, or
  planned;
- inspect tracked files for secrets, local artifacts, history, and generated
  output;
- review README, demo script, case study, and UI copy for inconsistent claims;
- choose one golden path;
- record current accessibility and performance baseline;
- capture the current UI before visual changes.

### Acceptance Gate

- one current-state matrix exists;
- no public claim lacks code or verification evidence;
- golden path and non-goals are approved;
- repository starts from a clean worktree;
- lint, frontend build, and Go tests pass.

## Phase 1: Golden Path Simplification

Status: Not started

### Work

- make portfolio, research evidence, cited brief, and saved output the primary
  flow;
- add a safe demo entry that does not require a recruiter to configure Clerk,
  Stripe, Supabase, or provider keys;
- reduce navigation emphasis on secondary surfaces;
- ensure fixture mode is visible but not visually dominant;
- make freshness, citation, assumptions, and non-advice behavior consistent;
- implement clear loading, empty, provider-unavailable, partial-data, retry,
  and save-failure states;
- ensure destructive actions require confirmation.

### Acceptance Gate

- golden path completes in under three minutes;
- every step has a deterministic demo state;
- no setup secrets are required for the reviewer path;
- failure and retry behavior can be demonstrated intentionally.

## Phase 2: Authorization and Data Integrity

Status: Not started

### Work

- add Postgres-backed cross-user ownership integration tests;
- prove User A cannot read or mutate User B portfolios, watchlists, research
  documents, jobs, or saved briefs;
- verify document retry remains owner-scoped;
- validate request and response schemas at service boundaries;
- verify signed webhook rejection and event deduplication;
- confirm private storage paths never leak service-role credentials;
- add negative tests for malformed provider data;
- document transaction and idempotency decisions.

### Acceptance Gate

- automated owner-isolation suite passes;
- negative permission cases are included in CI;
- service-role and provider secrets remain server-only;
- data ownership is explained by one concise diagram.

## Phase 3: AI and Evidence Hardening

Status: Not started

### Work

- connect one carefully scoped live model path if budget and keys are available;
- retain deterministic fixture mode for CI;
- validate every AI output against a schema;
- show tool inputs, freshness, and evidence boundaries without exposing hidden
  prompts or secrets;
- add an evaluation set for citation presence, unsupported claims, safe refusal,
  and malformed provider output;
- add a prompt-injection fixture for uploaded documents;
- measure latency and token usage from real test runs;
- require human review before saving consequential language.

### Acceptance Gate

- deterministic evaluation passes in CI;
- one real-provider run is recorded, or the project clearly remains
  fixture-only;
- unsupported statements are visible and recoverable;
- measured latency and cost use real recorded values.

## Phase 4: Frontend Quality

Status: Not started

### Work

- run keyboard-only QA through the golden path;
- add accessible names and text alternatives for charts;
- verify focus movement for dialogs, retries, and generated output;
- run automated accessibility checks on core routes;
- test 320px mobile, tablet, laptop, and wide desktop layouts;
- respect reduced motion;
- measure LCP, INP, CLS, bundle size, and route payloads;
- optimize only after recording a baseline;
- add Playwright coverage for the golden path and a failure path.

### Acceptance Gate

- no critical or serious automated accessibility violations;
- golden path works with keyboard only;
- performance results are recorded;
- browser E2E passes in CI;
- charts have non-visual summaries.

## Phase 5: Deployment and Operations

Status: Not started

### Work

- deploy the web app and API using a documented environment;
- create stable seeded demo data;
- configure safe CORS and origin policy;
- add health/readiness behavior for real dependencies;
- configure error monitoring with privacy scrubbing;
- verify deployed webhook endpoints in test mode if exposed;
- document rollback and demo-reset procedures;
- add uptime monitoring only if it reflects a real deployment.

### Acceptance Gate

- public demo works from a fresh browser;
- no reviewer action can create financial transactions;
- errors are observable without exposing private data;
- demo state can be reset;
- deployment limitations are explicit.

## Phase 6: Case Study Package

Status: Not started

### Work

- capture 5-7 real screenshots;
- record a 60-90 second demo;
- create one simplified architecture diagram;
- write decisions on BFF/API separation, AI evidence, and owner isolation;
- include one failure or trade-off;
- list real verification commands and results;
- state exact personal contribution;
- link deeper technical documentation separately.

### Acceptance Gate

- recruiter summary can be understood in 30 seconds;
- technical discussion supports a 10-minute interview walkthrough;
- screenshots match the current build;
- no claim implies production scale or regulatory compliance.

## Stop Conditions

Stop adding features when the golden path, ownership evidence, AI evaluation,
accessibility, deployment, and case study are complete.

Do not add trading, execution, social feeds, prediction, or additional financial
modules for portfolio breadth.

## Definition of Done

- golden-path E2E passes;
- cross-user isolation is tested;
- frontend build and Go tests pass;
- AI evaluation and safety fixtures pass;
- accessibility and performance evidence is recorded;
- safe demo is deployed;
- case study and demo video are published;
- current limitations are visible.
