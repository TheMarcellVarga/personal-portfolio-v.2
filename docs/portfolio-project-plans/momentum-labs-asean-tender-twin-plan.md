# ASEAN Tender Twin Build Plan

Repository: `/Users/marcellvarga/Github - Personal Projects/momentum-labs`

Classification: Upgrade Candidate with flagship potential

Priority: 8, only after current flagships

Suggested time box: 6-8 weeks

## Portfolio Objective

Turn the broad Momentum Labs sprint repository into one credible Singapore and
ASEAN-focused AI product: a tender evidence workspace that extracts
requirements, builds a compliance matrix, flags uncertainty, supports human
review, and exports an auditable evidence pack.

## Target User

Bid managers, proposal teams, and operations specialists reviewing complex
tender documents under time pressure.

## Target Golden Path

1. create a workspace;
2. upload one or more tender documents;
3. process pages and clauses;
4. inspect a citation-backed compliance matrix;
5. correct, approve, or reject extracted requirements;
6. identify missing evidence and high-risk obligations;
7. export a reviewed evidence pack with an audit trail.

## Preserve

- ASEAN Tender Twin domain;
- shared contracts;
- AI runtime abstraction;
- audit SDK;
- evidence-pack direction;
- organization and membership boundaries.

## Remove From Public Scope

- Article 50 Studio;
- TreasuryPilot SG;
- StableOps SG;
- Agent Permit OS;
- Fund Token Ops;
- multi-product sprint and revenue claims;
- scaffolds that do not support the tender workflow.

They may remain private idea notes, but should not appear in the public
architecture.

## Phase 0: Product and Dataset Lock

Status: Not started

### Work

- select one tender type and user role;
- obtain a small set of legally usable public tender documents;
- label a small ground-truth set of requirements and citations;
- define requirement, evidence, risk, confidence, and review schemas;
- define non-goals and legal/privacy boundaries;
- remove unrelated app scaffolds from public navigation and documentation.

### Acceptance Gate

- 5-10 documents are legally usable;
- ground truth exists for a representative subset;
- golden path and schemas are stable;
- unrelated products are removed from scope.

## Phase 1: Document Ingestion

Status: Not started

### Work

- implement private upload with type and size validation;
- store page-aware text and file metadata;
- add processing job state, progress, retry, and cancellation;
- preserve page numbers and source identity;
- handle scanned, malformed, encrypted, and duplicate documents;
- isolate untrusted document text from system instructions;
- enforce organization ownership.

### Acceptance Gate

- uploaded documents remain private;
- page citations survive parsing;
- failure and retry work;
- cross-organization access is rejected;
- unsupported files fail clearly.

## Phase 2: Requirement Extraction and Evaluation

Status: Not started

### Work

- extract structured requirements with page citations;
- validate every model result against a schema;
- separate quoted evidence from model interpretation;
- include confidence and “needs review” state;
- evaluate extraction against labeled ground truth;
- measure field-level accuracy, citation correctness, and unsupported claims;
- implement deterministic fallback or manual entry.

### Acceptance Gate

- evaluation is repeatable;
- all extracted requirements have source evidence or an explicit missing-source
  state;
- unsupported claims are not silently accepted;
- measured results come from the labeled dataset.

## Phase 3: Compliance Matrix and Human Review

Status: Not started

### Work

- build a dense, keyboard-usable compliance matrix;
- support status, owner, due date, evidence, notes, and risk;
- let reviewers correct extracted fields;
- preserve original model output and review history;
- add filters, saved views, and URL state;
- provide bulk actions with confirmation and rollback;
- add accessible table semantics or a proven data-grid library.

### Acceptance Gate

- full review works without a mouse;
- model and human changes are distinguishable;
- every change is auditable;
- large matrices remain responsive;
- empty, partial, and failed extraction states are useful.

## Phase 4: Risk, Draft Assistance, and Export

Status: Not started

### Work

- derive risk only from explicit rules and cited requirements;
- show missing evidence and deadline conflicts;
- constrain draft assistance to selected reviewed requirements;
- require human approval before export;
- export compliance matrix and evidence pack;
- include source pages, review status, timestamps, and limitations;
- prevent hidden prompts or private metadata from entering exports.

### Acceptance Gate

- risk explanation points to evidence;
- drafts cannot bypass review;
- exported pack is reproducible and privacy-safe;
- missing evidence remains visible.

## Phase 5: Security, Reliability, and Operations

Status: Not started

### Work

- test organization and role isolation;
- add rate limits and job idempotency;
- test prompt injection from documents;
- redact document content from logs and telemetry;
- add audit event integrity checks;
- measure processing latency and model cost;
- create deletion and retention behavior;
- add E2E for upload through export.

### Acceptance Gate

- security and injection fixtures pass;
- E2E golden path passes;
- latency and cost are measured;
- deletion removes owned artifacts according to policy;
- audit history cannot be edited through normal product APIs.

## Phase 6: Case Study and Domain Review

Status: Not started

### Work

- ask one tender/procurement domain expert to review the workflow;
- record corrections without fabricating business outcomes;
- capture 5-7 screens;
- record a 60-90 second demo;
- create one architecture and one evaluation diagram;
- explain human approval, evidence, and prompt-injection boundaries;
- publish current limitations.

### Acceptance Gate

- domain feedback is incorporated or explicitly deferred;
- case study shows real public documents;
- evaluation results are reproducible;
- product is presented as decision support, not autonomous bid compliance.

## Stop Conditions

Stop after one tender domain, one evidence-backed extraction workflow, one
reviewable matrix, and one export format.

Do not build the other Momentum Labs products, autonomous submission, broad
agent orchestration, or unsupported regulatory advice.

## Definition of Done

- unrelated products are removed from public scope;
- document ownership and parsing work;
- labeled evaluation passes at an honestly reported level;
- human review and audit history work;
- E2E and security fixtures pass;
- domain review is recorded;
- case study and demo are published.
