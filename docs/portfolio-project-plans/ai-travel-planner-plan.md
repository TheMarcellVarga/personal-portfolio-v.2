# Wild Route Upgrade Plan

Repository: `/Users/marcellvarga/Github - Personal Projects/ai-travel-planner`

Classification: Upgrade Candidate

Priority: 9

Suggested time box: 3-5 weeks, only after featured projects

## Portfolio Objective

Decide whether Wild Route should become a credible provider-aware travel
planning product or remain a private learning project.

It should not use “AI” in its public identity while route generation remains
deterministic.

## Target Outcome

A reviewer can create a route, understand which data is local versus current,
save it, publish a privacy-safe share page, follow an external booking handoff,
and inspect provider freshness and limitations.

## Preserve

- Wild Route brand and visual direction;
- deterministic prompt interpretation;
- save, publish, share, and handoff loop;
- Supabase ownership model;
- safe public-share payload;
- billing and webhook test foundation;
- explicit demo-memory fallback.

## Cut or De-emphasize

- AI naming without a model path;
- live travel and availability implications;
- remote imagery that can fail unpredictably;
- subscription surfaces before test-mode verification;
- globe effects that harm accessibility or performance.

## Phase 0: Continue or Stop Decision

Status: Not started

### Work

- rerun tests and production build;
- review all claims for AI, live inventory, prices, weather, and persistence;
- choose one differentiating travel use case;
- estimate one real provider integration;
- decide whether this project adds more value than ASEAN Tender Twin.

### Acceptance Gate

- product is called Wild Route consistently;
- unsupported live/AI claims are removed;
- one real data lane is selected;
- continuation has an explicit 3-5 week cap.

## Phase 1: Data and Provider Boundary

Status: Not started

### Work

- define a provider adapter with normalized result, timestamp, source, and
  failure metadata;
- integrate one legally usable provider or public dataset;
- cache results with an explicit freshness policy;
- distinguish sample, cached, unavailable, and current data;
- retain deterministic route generation when provider data is missing;
- use local or licensed media.

### Acceptance Gate

- one route includes real sourced data;
- freshness is visible;
- provider failure degrades safely;
- no price or availability is presented as guaranteed.

## Phase 2: Persistence, RLS, and Billing Verification

Status: Not started

### Work

- run automated Supabase RLS tests locally;
- prove cross-user route access is rejected;
- verify public share exposes only the safe snapshot;
- run Stripe checkout and portal in test mode;
- verify webhook signature and idempotency against actual test events;
- ensure demo memory fallback is never silent.

### Acceptance Gate

- owner-isolation tests pass;
- Stripe test-mode checklist is recorded;
- persistence mode is visible in API and UI;
- account export/delete behavior is verified.

## Phase 3: Optional AI Interpretation

Status: Deferred

### Work

Only proceed if deterministic prompt interpretation cannot meet the product
need.

- constrain the model to a structured trip-intent schema;
- validate output;
- keep route selection and provider truth deterministic;
- evaluate malformed dates, unsafe requests, impossible routes, and unsupported
  claims;
- record latency and cost;
- show fallback behavior.

### Acceptance Gate

- model adds measurable value over deterministic interpretation;
- structured evaluation passes;
- model cannot invent provider availability;
- live AI status is labeled.

## Phase 4: Frontend and Launch Quality

Status: Not started

### Work

- complete keyboard and focus-order QA;
- provide a non-WebGL route view;
- verify reduced motion;
- add browser E2E for generate, save, publish, share, and handoff;
- replace unstable image delivery;
- add threat model, rate limits, and privacy-safe observability;
- capture screenshots and a short demo.

### Acceptance Gate

- golden path works without WebGL;
- E2E and accessibility checks pass;
- external data failures are visible;
- launch documentation matches behavior.

## Stop Conditions

Stop if a real provider cannot be used legally and reliably within the time box,
or if the project remains less strategically valuable than the selected
flagships.

Do not add more destinations, social planning, or generic AI features as a
substitute for provider credibility.

## Definition of Done

- naming and claims are honest;
- one real data adapter works;
- RLS and billing test mode are verified;
- accessibility and browser E2E pass;
- concise case study is published, or the project is archived.
