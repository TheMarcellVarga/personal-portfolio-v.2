# Marcell Varga Portfolio Review

Review date: 2026-07-25

Scope: `/Users/marcellvarga/Github - Personal Projects`

Governing context: `/Users/marcellvarga/Downloads/marcell_context_and_portfolio_goals.md`

## Executive Summary

The strongest portfolio is not the one with the most repositories. It is a deliberately edited body of three main case studies and two smaller supporting pieces.

My recommended public portfolio:

1. **Aperture Financial Intelligence (`ai-finance`)** as the primary flagship.
2. **First Revenue Game (`gamified-business-development`)** as the second flagship.
3. **Focusin (`focusin`)** as the product-quality and native-platform case study.
4. **ThreadScribe Studio (`ai-transcriber`)** as a supporting applied-AI case study.
5. **One focused interaction or visual engineering specimen**, preferably a rebuilt `shader-lab` or a cleaned version of `2025-frontend-takehome`.

`Endless Activity` is credible and complete, but it overlaps with Focusin as another small local-first Swift product. Keep it public and link it from GitHub, but feature only one of the two prominently. Focusin has the more distinctive product boundary and release story.

The highest-value move is to finish and present existing strong work. Building another broad SaaS app now would dilute effort. If a new project is added, it should fill a specific missing capability: a data-dense institutional frontend, a design-system/accessibility package, or an AI evaluation and human-review tool.

The portfolio has a clear maturity split:

- Newer repositories such as `ai-finance`, `ai-transcriber`, `focusin`, `endless-activity`, and `gamified-business-development` contain explicit scope boundaries, test evidence, security notes, limitation audits, and case-study material.
- Many 2024-2025 repositories are tutorial-derived, UI-first demos, or broad concepts whose README claims exceed the implementation.
- Several repositories contain generated build artifacts, `.history` directories, generic clone language, placeholder GitHub URLs, or unrelated README content. These weaken public credibility.

### The direct recommendation

Feature **three projects**, show **two supporting experiments**, and archive or make private most of the rest.

Do not put `ownership-app`, `personal-finance-webapp`, `collaborative-whiteboard`, `global-tax-calculator-mobile`, `crypto-travel-platform`, or generic clones on the portfolio in their current form. Their claims and implementation boundaries are not aligned tightly enough with your current level.

## Target Professional Positioning

The portfolio should make the following claim:

> Marcell is a product-focused frontend engineer with strong UX judgment who can turn complex requirements into reliable interfaces, API boundaries, and production-minded systems.

The project set should show:

- frontend architecture and complex interaction design;
- data-heavy and trust-sensitive product thinking;
- APIs, ownership boundaries, persistence, and failure handling;
- testing, accessibility, privacy, and operational awareness;
- applied AI with structured output, visible uncertainty, evidence, and safe fallback behavior;
- clear product scope and honest trade-offs.

It should not position you as:

- a generic UX designer;
- a tutorial collector;
- a clone-app developer;
- a Web3 generalist;
- an AI wrapper builder;
- a generalist whose repositories contain every technology but no clear depth.

## Review Method and Evidence

I inspected 49 Git repositories plus non-Git project folders. The review used:

- actual source and configuration files;
- README files and project documentation;
- commit recency and repository structure;
- test files and verification scripts;
- infrastructure, migrations, environment templates, and deployment configuration;
- explicit completion and unfinished-surface audits where present;
- tracked environment files and obvious repository hygiene risks;
- local verification of the leading candidates.

Verified during this review:

- `ai-finance`: frontend lint and production build passed; Go tests passed.
- `ai-travel-planner`: 9 test files and 40 tests passed; production build passed.
- `ai-transcriber`: formatting, lint, type checking, 22 tests, and production build passed.
- `gamified-business-development`: Spring Boot tests passed with real PostgreSQL and Redpanda Testcontainers. Frontend tests could not run under the active Node 20 environment because the repository requires Node 22.13 or newer and the installed pnpm also requires that version.

Important limits:

- I did not deploy every repository or manually execute every external-provider flow.
- A passing local build does not prove production readiness.
- A README claim was not treated as evidence when the code, tests, or configuration did not support it.
- Public GitHub visibility was not checked, so “remove from public view” means the recommended public posture.

## Portfolio-Wide Findings

### 1. Your recent work is substantially stronger than your older public history

The best recent projects show unusually good portfolio discipline:

- documented non-goals;
- deterministic local or fixture modes;
- explicit live-provider boundaries;
- security and privacy notes;
- owner-scoped APIs;
- tested failure behavior;
- case-study and demo scripts;
- honest unfinished-surface audits.

This is the correct direction. It reads as product engineering rather than visual prototyping.

### 2. Documentation is sometimes stronger than the implementation

Several recent projects contain large documentation systems. That can be valuable, but recruiters will notice if the number of planning documents exceeds the number of meaningful user flows or tests.

The rule for the public portfolio should be:

- show the product first;
- show one architecture diagram;
- show two or three important decisions;
- link to deeper documentation for engineers;
- avoid presenting process volume as engineering depth.

### 3. Too many projects claim “real-time,” “AI-powered,” “secure,” or “production-ready”

These words should only appear when supported:

- “real-time” needs a working server, synchronization model, reconnect behavior, and conflict semantics;
- “AI-powered” needs an actual model path or must clearly say deterministic fixture mode;
- “secure” needs authorization, validation, secret handling, and tested negative cases;
- “production-ready” needs deployment evidence, monitoring, operational configuration, and release verification.

Older projects often use these terms as aspirations. That lowers trust across the whole profile.

### 4. There is substantial concept duplication

Duplicated clusters:

- **Finance:** `ai-finance`, `personal-finance-webapp`, `crypto-dashboard`.
- **Travel:** `ai-travel-planner`, `crypto-travel-platform`, `travel-agency`, `flight-experience-app`.
- **Localization:** `polyglot-app`, `polyglot-publisher`, `untitled folder 2`.
- **Data storytelling:** `storyweave-platform`, `untitled folder`.
- **Whiteboard:** `collaborative-whiteboard` and the incorrect README inside `global-tax-calculator-mobile`.
- **Portfolio:** `personal-portfolio-v.1`, `personal-portfolio-v.2`, `themarcellvarga.github.io`.
- **Native small products:** `focusin`, `endless-activity`.

Keep only the strongest expression in each cluster public.

### 5. Repository hygiene is a visible risk

Observed issues include:

- tracked `.env.local` in `ownership-app`;
- tracked `frontend/.env` in `shader-lab`;
- many `.history` directories;
- checked-in local build output and caches in some projects;
- placeholder repository URLs such as `github.com/yourusername/...`;
- generic scaffold READMEs;
- empty or unclear repository names;
- `.DS_Store` files;
- screenshots or preview references that do not resolve;
- local absolute paths inside public documentation.

Even placeholder credentials should not live in a tracked `.env.local`. Use `.env.example`, remove tracked environment files, and verify history before making repositories public.

## Recommended Portfolio Structure

### Primary case study 1: Aperture Financial Intelligence

Role in portfolio: fintech, applied AI, data-heavy frontend, Go API, trust and safety.

The case study should focus on:

- why it is decision support rather than trading or financial advice;
- frontend and BFF boundaries;
- owner-scoped Go APIs and data provenance;
- structured AI output, citations, freshness, and deterministic evaluation;
- document research ingestion and retry behavior;
- security, billing, audit, and privacy trade-offs;
- what remains fixture-backed or environment-dependent.

### Primary case study 2: First Revenue Game

Role in portfolio: end-to-end product ownership, React/Next.js, Java/Spring, event-driven workflow, operational thinking.

The case study should focus on:

- the narrow product loop from application to mission, proof, review, and progression;
- why the architecture migrated from a Next.js-centered demo toward an authoritative backend;
- transactional outbox and event-projection design;
- proof-artifact authorization;
- test strategy with PostgreSQL and Redpanda containers;
- the difference between demo mode and configured-provider operation.

### Primary case study 3: Focusin

Role in portfolio: product judgment, native interaction quality, accessibility, state restoration, release discipline.

The case study should focus on:

- why local-only and no-account are product decisions;
- the focus/break state machine and restoration rules;
- recommendation filtering and fallback behavior;
- notification, quiet-hours, login-item, and lifecycle integration;
- accessibility and alternate-state testing;
- honest release gates that still require signed-build evidence.

### Supporting case study: ThreadScribe Studio

Role in portfolio: trustworthy AI UX and local-first architecture.

Use it as a short case study rather than another full flagship. Emphasize:

- raw transcript and transformed output remain separately inspectable;
- structured and validated AI transformations;
- provider mode and privacy posture are visible;
- local SQLite history, edits, search, and safe exports;
- fixtures make evaluation repeatable;
- live Whisper and model-provider paths are optional, not falsely presented as the default.

### Supporting specimen: Shader Lab or Robot Remote Control

Role in portfolio: interaction engineering and browser/platform depth.

Choose one:

- **Shader Lab:** rebuild into a small, reliable WebGL playground with Monaco, compile errors, uniform controls, shareable URLs, keyboard support, and performance instrumentation.
- **Robot Remote Control:** keep the scope tiny, add pointer-event and keyboard behavior, dead-zone logic, unit tests, Storybook interaction tests, reduced-motion handling, and a short technical note.

This specimen should prove frontend mechanics without another account, billing, database, and SaaS shell.

## Detailed Project Assessments

## Project: ai-finance

### Purpose

AI-assisted financial research and portfolio decision-support workspace with explicit boundaries against trading, return prediction, and personalized advice.

### Current Stack

Next.js 16, React 19, TypeScript, Tailwind 4, Clerk, Supabase/Postgres, Go, OpenAPI-generated TypeScript contracts, AI SDK, structured schemas, Stripe, rate limits, audit logging, and private document research storage.

### Product Assessment

This is the strongest strategic fit. It targets a trust-sensitive, data-heavy workflow relevant to Wise, Airwallex, banks, wealthtech, and AI product teams. The product boundary is unusually disciplined. Research, portfolio, watchlist, goals, risk, settings, and billing surfaces form a coherent workspace.

The main product risk is breadth. It currently contains enough surfaces to look like a whole company product. The public demo must lead with one golden path, not a tour of every route.

### Technical Assessment

The architecture has meaningful boundaries: browser to Next.js, Next.js to Go, owner-scoped data access, OpenAPI contracts, Postgres migrations, provider adapters, and a worker path for document processing. The frontend production build and Go tests passed during this review.

The Go service still has packages without direct tests. Live production integration for Clerk, Stripe, Supabase, provider data, EDGAR, and embeddings is not demonstrated by the local checks.

### Frontend Assessment

Strong potential for data-heavy product presentation. The application includes loading, error, empty, retry, freshness, and safety states. The frontend should be reviewed for keyboard navigation, chart accessibility, responsive tables, focus order, and reduced motion before being called polished.

### Backend and Data Assessment

Owner-scoped APIs, storage boundaries, jobs, retry logic, migrations, and private documents provide credible backend depth. The most important next proof is an automated owner-isolation integration suite against real local Postgres/Supabase behavior, not additional endpoints.

### AI Assessment

The project handles AI more credibly than the average portfolio project:

- external calls disabled by default;
- structured output schemas;
- tool boundaries;
- usage tracking;
- citations and freshness contract;
- deterministic evaluation and safety fixtures;
- explicit non-advice positioning.

The principal weakness is that live document retrieval and model-backed document analysis remain future hardening. The case study must say exactly what is live, deterministic, dormant, and unimplemented.

### Testing and Reliability

Frontend lint/build and Go tests passed. AI evaluation and security scripts are present. Add browser E2E for the golden path and an integration test that proves cross-user access is rejected.

### Security and Privacy

Strong written and implemented posture. Remaining risk lies in configured-provider and deployed webhook validation. Do not imply regulatory compliance.

### Documentation and Presentation

Excellent depth, but too much documentation for a recruiter entry point. Condense the public story to problem, flow, architecture, three decisions, verification, and limitations.

### Career Relevance

Extremely high.

### Strongest Evidence

Working build, tested Go service, owner-scoped APIs, document-processing foundation, structured AI contracts, explicit trust boundaries, and portfolio-ready architecture material.

### Main Weaknesses

Too broad, significant fixture/local mode, missing production integration proof, and risk of documentation volume masking the central product narrative.

### Recommended Classification

**Flagship.**

### Recommended Action

Rework presentation, narrow the demo, add cross-user E2E/integration tests, verify accessibility, and capture a real deployment with safe demo data.

### Estimated Improvement Value

**Very high.** This should receive the largest share of portfolio effort.

## Project: gamified-business-development

### Purpose

Social execution platform for solo builders, centered on missions, proof, pod accountability, and operator review.

### Current Stack

Next.js, TypeScript, Java 21/Spring Boot, Postgres/Flyway, Redpanda/Kafka-compatible events, transactional outbox, Redis, MinIO/S3, Docker Compose, Kubernetes manifests, OpenTelemetry, Prometheus, Grafana, Vitest, Playwright, JUnit, and Testcontainers.

### Product Assessment

The problem and workflow are coherent. The project has a real member and operator loop rather than a collection of dashboard screens. This makes it a stronger product story than many technically similar portfolio apps.

The product should avoid presenting gamification as decoration. The case study should explain how mission state, proof, review, retry, and progression reduce a specific user failure mode.

### Technical Assessment

This is the strongest architecture and backend discussion project. The migration story from a Next.js-centered demo to Spring-owned authoritative slices is useful because it shows trade-offs rather than a greenfield diagram.

The architecture risks appearing overbuilt for a portfolio product. Redpanda, Redis, MinIO, observability, Kubernetes, and multiple providers need to be justified by behavior that can be demonstrated. Remove any infrastructure from the public diagram that has no meaningful runtime responsibility.

### Frontend Assessment

The route map is broad and supports member and admin perspectives. The strongest frontend story is workflow coherence across application, mission, evidence upload, review, rejection, and retry.

Frontend verification was blocked in the active Node 20 environment because the project correctly declares Node 22.13 or newer, but the README setup does not foreground that prerequisite clearly enough.

### Backend and Data Assessment

Spring tests passed with real PostgreSQL and Redpanda containers during this review. Five Flyway migrations were applied. The transactional outbox and permission-aware artifact path are strong evidence.

Production identity inside Spring remains incomplete. The internal BFF token is a transitional boundary, not a final authorization design.

### AI Assessment

AI is not the main reason to feature this project. Keep AI-assisted mission generation secondary and deterministic fallback explicit.

### Testing and Reliability

Strong backend evidence and documented Playwright/Vitest coverage. Add a one-command environment verifier or containerized frontend check so a reviewer does not need to reconcile Node and pnpm versions manually.

### Security and Privacy

Input validation, role checks, webhook verification, artifact validation, scoped downloads, and token tests are meaningful. Production user identity and full route permission testing remain the largest gap.

### Documentation and Presentation

Strong but overly process-heavy. Replace local absolute Markdown links with repository-relative links before publication.

### Career Relevance

Very high, especially for product companies that value full-stack collaboration and system design.

### Strongest Evidence

Real integration tests, migrations, event workflows, outbox, artifact authorization, member/admin flow, and explicit migration limitations.

### Main Weaknesses

Architecture may be too broad for the product scale, frontend verification environment is not frictionless, production identity is incomplete, and the public story needs ruthless simplification.

### Recommended Classification

**Flagship.**

### Recommended Action

Make the golden path reproducible under one documented toolchain, finish production-grade identity ownership checks, capture one configured-mode demo, and reduce the architecture diagram to the parts demonstrated.

### Estimated Improvement Value

**Very high.**

## Project: focusin

### Purpose

Native macOS menu-bar app that recommends state-aware micro-breaks and helps users return to focus.

### Current Stack

Swift 6, SwiftUI, Swift Package Manager, Xcode project, UserDefaults persistence, notifications, login-item integration, sandbox entitlements, and privacy manifest.

### Product Assessment

Excellent scope. The choice to avoid accounts, analytics, cloud storage, and generative AI improves the product. The state model, quiet hours, recommendation fallback, same-day history, and menu-bar workflow support a coherent use case.

### Technical Assessment

The project shows platform knowledge, lifecycle behavior, migration compatibility, injected boundaries, and release thinking. It is a useful counterweight to broad web SaaS projects.

### Frontend Assessment

Native UI, keyboard operation, alternate states, large text, VoiceOver semantics, reduced transparency, and increased contrast are strong UX engineering evidence.

### Backend and Data Assessment

No backend is an intentional and correct boundary.

### AI Assessment

No AI is needed. The curated and reviewable catalog is safer and more credible.

### Testing and Reliability

The repository contains extensive domain and adapter tests. The remaining release gate is signed-build and real lifecycle evidence, not more unit test volume.

### Security and Privacy

Strong local-first posture, sandbox resources, and explicit privacy material.

### Documentation and Presentation

Very thorough. Public presentation should be much shorter and include real macOS captures and a 30-45 second workflow video.

### Career Relevance

High for product engineering and Apple-adjacent roles. It also proves judgment beyond React.

### Strongest Evidence

State restoration, native lifecycle integration, accessibility matrix, catalog safety review, and honest release gates.

### Main Weaknesses

No signed release evidence, no external beta feedback, and the visual product needs final App Store-quality assets.

### Recommended Classification

**Supporting Project, promoted as the third featured case study.**

### Recommended Action

Complete signed archive verification, capture lifecycle evidence, obtain a small beta round, finalize icon and screenshots, and release through TestFlight or the Mac App Store if feasible.

### Estimated Improvement Value

**High.**

## Project: ai-transcriber

### Purpose

Local-first transcript workspace that turns audio into timestamped transcripts, cleaned notes, summaries, action items, searchable sessions, and safe exports.

### Current Stack

Next.js 16, React 19, TypeScript, CSS Modules, SQLite, optional Python transcription facade, optional local model providers, schema-validated fixtures, Vitest, and Playwright screenshots.

### Product Assessment

The product moves beyond a single transcript result. It supports capture, validation, progress, cancellation, partial output, editing, persistence, search, reopen, and export.

### Technical Assessment

The local-first boundary and same-origin routes keep the architecture understandable. The current source is compact relative to its documentation, so the demo must prove the flow rather than relying on feature lists.

### Frontend Assessment

The compare/edit workspace, timeline, AI tabs, command palette, and provider metadata make this a useful AI UX specimen. It needs manual accessibility and responsive verification.

### Backend and Data Assessment

SQLite is appropriate for local persistence. The route boundaries and safe exports are credible. Multi-user cloud scale is intentionally out of scope.

### AI Assessment

Good trust patterns: fixture mode, schema validation, prompt-injection warnings, confidence, redaction, provider readiness, and cloud opt-in. The weakness is obvious: deterministic transformations are not a live-model accomplishment. Present this as evaluation and interaction architecture, not model sophistication.

### Testing and Reliability

The full check passed: formatting, lint, type checking, 22 tests, and production build.

### Security and Privacy

Strong local-first and explicit-provider posture. Add a privacy-focused browser test for exports and deletion if the product is featured.

### Documentation and Presentation

Good case-study source material. Condense it and show one complete session lifecycle.

### Career Relevance

High, but it overlaps with AI Finance. Use as a supporting project.

### Strongest Evidence

Passing full verification, structured transforms, inspectable raw output, provider visibility, local persistence, and export safety.

### Main Weaknesses

Fixture-heavy AI, optional rather than demonstrated local Whisper path, compact source relative to claims, and overlap with the AI flagship.

### Recommended Classification

**Supporting Project.**

### Recommended Action

Record a real local Whisper run, add one model-provider comparison/evaluation view, verify keyboard and screen-reader behavior, and keep the public case study short.

### Estimated Improvement Value

**High.**

## Project: endless-activity

### Purpose

Native iOS swipe deck for finding realistic activities based on time, cost, energy, setting, company, and category.

### Current Stack

SwiftUI, Swift 6, bundled JSON, local persistence, deterministic ranking, XCTest, XCUITest.

### Product Assessment

Clear problem, coherent boundary, real empty and recovery states, and a 50-item curated catalog. It avoids unnecessary AI, accounts, location, marketplace, and social features.

### Technical and Frontend Assessment

Good native interaction evidence, including swipe alternatives, haptics, VoiceOver, Dynamic Type, Reduce Motion, persistence, filtering, and deterministic ranking.

### Testing and Reliability

The repository reports 12 unit and 7 UI tests plus simulator captures and large-device build evidence.

### Career Relevance

Good supporting proof, but it overlaps with Focusin and is less relevant to the target React/fintech role.

### Recommended Classification

**Supporting Project.**

### Recommended Action

Keep public on GitHub. Feature it only if Focusin is not released or if an interview specifically values iOS. Do not spend months adding social or AI features.

### Estimated Improvement Value

**Medium.**

## Project: ai-travel-planner

### Purpose

Wild Route is an adventure route planner with deterministic route generation, persistence, sharing, booking handoff, account controls, and billing foundations.

### Current Stack

Next.js 15, React 19, TypeScript, Supabase Auth/Postgres/RLS, Stripe, Zod, Three.js globe, GSAP, Vitest.

### Product Assessment

The save, publish, share, and handoff loop is coherent. The visual direction is specific. The product currently depends on local destination data and deterministic scoring, not live travel inventory or AI.

### Technical Assessment

The build and 40 tests passed. Ownership, public-share sanitization, health redaction, billing, and webhook behavior have useful coverage.

### AI Assessment

There is no live AI path. That is acceptable, but the repository name and product language must not imply one. Either rename it to Wild Route everywhere or implement a justified, schema-validated itinerary interpretation path with evaluation.

### Main Weaknesses

Fallback memory persistence, no automated RLS verification, no provider freshness, no live billing QA, incomplete accessibility/security/observability pass, and no launch package.

### Recommended Classification

**Upgrade Candidate.**

### Recommended Action

Do not make it a third flagship. Either finish one real provider-backed route with freshness and harden RLS/accessibility, or keep it as a private learning project. Avoid adding generic AI before the data contract is credible.

### Estimated Improvement Value

**Medium to high**, but lower than finishing the selected flagships.

## Project: momentum-labs

### Purpose

Portfolio sprint monorepo led by ASEAN Tender Twin, a compliance matrix and risk-flag product for tenders.

### Current Stack

TypeScript monorepo with shared core contracts, AI runtime abstraction, audit SDK, route handlers, tests, and multiple queued app scaffolds.

### Product Assessment

ASEAN Tender Twin is strategically excellent for Singapore: B2B workflow, document evidence, compliance, human review, and applied AI. The other five app scaffolds dilute the repository and look like an idea backlog.

### Technical Assessment

The current repository has substantial service and contract code but almost no product UI. It is not portfolio-ready as a product case study.

### Recommended Classification

**Upgrade Candidate.**

### Recommended Action

Delete or move queued Wave 2-6 app scaffolds out of the public narrative. Turn ASEAN Tender Twin into a single credible vertical slice:

1. upload tender documents;
2. parse clauses with page citations;
3. build a compliance matrix;
4. flag uncertainty and missing evidence;
5. let a human approve or correct findings;
6. export an evidence pack;
7. evaluate extraction accuracy on a small labeled set.

This is the best new-project direction already present in your workspace.

### Estimated Improvement Value

**High**, after the current three featured projects are stable.

## Project: 2025-frontend-takehome

### Purpose

Robot remote-control interaction implemented with React, TypeScript, Storybook, springs, and gesture handling.

### Assessment

The scope is useful and more distinctive than another dashboard. The current repository has no automated tests and the interaction hook contains multiple input paths and continuous state that deserve cleanup.

### Recommended Classification

**Supporting Project after rework**, subject to the take-home owner's publication rules.

### Recommended Action

Confirm you may publish it. Add Pointer Events, keyboard controls, dead-zone and clamping tests, Storybook interaction tests, accessible state output, reduced motion, touch QA, and a technical note on continuous input without unnecessary React renders.

### Estimated Improvement Value

**Medium to high** for a small effort.

## Project: shader-lab

### Purpose

WebGL fragment-shader editor with live preview and planned sharing/community features.

### Assessment

The concept is a strong focused technical specimen, but the repository is currently fragmented across several frontend/backend copies, contains a tracked environment file, has extensive uncommitted changes, and the README still says setup is TBD.

### Recommended Classification

**Upgrade Candidate.**

### Recommended Action

Preserve the user's current uncommitted work. Consolidate to one frontend and one optional server, remove tracked environment configuration, delete duplicate deploy copies and history after review, implement compiler errors and recoverable rendering, add shareable URL state, and benchmark frame time. Do not build a community platform.

### Estimated Improvement Value

**High as a supporting specimen**, low as a broad platform.

## Project: ownership-app

### Purpose

AI-assisted asset tokenization, marketplace, and blockchain platform.

### Assessment

This repository has a large codebase and contract suite, but the README uses unsupported language such as “revolutionary,” “one-click tokenization,” “secure,” marketplace trading, broad asset support, production deployment, monitoring, Storybook, and AI agents. Asset tokenization has serious legal, identity, custody, valuation, and securities implications that are not solved by frontend and contracts.

It also tracks `.env.local` and contains placeholder repository links. The tracked environment file appears to use test/local-style values, but it should still not be tracked.

### Recommended Classification

**Remove From Public View.**

### Recommended Action

Do not rework this into a flagship. If retained, narrow it to a clearly labeled technical prototype for token metadata and contract testing. Remove legal/marketplace claims, remove tracked environment files, scan history, and avoid implying real-world asset ownership.

### Estimated Improvement Value

**Low relative to risk.**

## Project: personal-finance-webapp

### Purpose

Personal finance dashboard with investments, tax views, goals, and claimed AI advice.

### Assessment

The project has broad UI coverage but is superseded by `ai-finance`. The README claims authentication, a proprietary financial health score, AI advice, portfolio tracking, and comprehensive finance behavior without matching evidence in the repository's tests and integrations. Placeholder GitHub URLs and generated preview assets further weaken trust.

### Recommended Classification

**Archive.**

### Recommended Action

Keep private as historical work or use it only as a before-and-after source in the Aperture case study. Do not feature both.

### Estimated Improvement Value

**Low.**

## Project: collaborative-whiteboard

### Purpose

Claimed real-time collaborative whiteboard plus an unrelated PON management dashboard.

### Assessment

The README combines two unrelated products and claims collaboration, live cursors, autosave, authentication, teams, performance improvements, and accessibility without a corresponding server architecture or meaningful test evidence. This creates a credibility problem.

### Recommended Classification

**Remove From Public View.**

### Recommended Action

Do not repair the combined product. If the whiteboard interaction itself is good, extract it into a tiny canvas/selection experiment. If PON management reflects professional domain knowledge, create a separate sanitized case study without company-confidential details.

### Estimated Improvement Value

**Low in current form.**

## Project Inventory

### Scoring legend

Each score is 1-10:

- `CR`: career relevance
- `PC`: product credibility
- `FE`: frontend depth
- `BE`: backend depth
- `UX`: UX quality
- `AR`: architecture
- `RE`: reliability
- `TE`: testing
- `AC`: accessibility
- `SE`: security
- `AI`: AI credibility (`-` means not applicable)
- `DO`: documentation
- `PP`: portfolio presentation
- `IV`: interview discussion value

Scores are not averaged. A narrow supporting experiment can be valuable with low backend depth. A finance or AI project is judged more heavily on trust, security, evidence, and reliability.

| Project | CR | PC | FE | BE | UX | AR | RE | TE | AC | SE | AI | DO | PP | IV | Classification |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| ai-finance | 10 | 9 | 9 | 9 | 8 | 9 | 8 | 8 | 7 | 8 | 9 | 10 | 8 | 10 | Flagship |
| gamified-business-development | 9 | 8 | 8 | 10 | 8 | 9 | 8 | 9 | 7 | 8 | 5 | 9 | 7 | 10 | Flagship |
| focusin | 8 | 9 | 8 | - | 9 | 8 | 9 | 9 | 9 | 9 | - | 10 | 8 | 9 | Supporting, featured |
| ai-transcriber | 8 | 8 | 8 | 7 | 8 | 8 | 8 | 9 | 6 | 8 | 8 | 9 | 8 | 9 | Supporting |
| endless-activity | 7 | 8 | 8 | - | 9 | 7 | 9 | 9 | 9 | 9 | - | 9 | 8 | 8 | Supporting |
| ai-travel-planner | 8 | 7 | 8 | 7 | 8 | 8 | 7 | 9 | 6 | 7 | 2 | 8 | 7 | 8 | Upgrade Candidate |
| momentum-labs | 9 | 7 | 4 | 8 | 4 | 8 | 7 | 8 | 3 | 7 | 7 | 8 | 5 | 8 | Upgrade Candidate |
| 2025-frontend-takehome | 7 | 6 | 8 | 1 | 7 | 6 | 5 | 2 | 4 | 5 | - | 4 | 6 | 7 | Supporting after rework |
| shader-lab | 7 | 6 | 8 | 3 | 7 | 4 | 3 | 2 | 3 | 3 | - | 2 | 5 | 8 | Upgrade Candidate |
| personal-portfolio-v.2 | 8 | 7 | 8 | 2 | 8 | 7 | 6 | 2 | 6 | 6 | - | 8 | 8 | 8 | Portfolio shell, not a case study |
| airmee | 4 | 4 | 7 | 1 | 7 | 4 | 3 | 1 | 4 | 4 | - | 1 | 5 | 4 | Archive |
| bike-project | 5 | 5 | 6 | 5 | 6 | 5 | 4 | 1 | 4 | 4 | 3 | 5 | 5 | 5 | Archive |
| booking-utazzvelem | 2 | 2 | 2 | 1 | 2 | 1 | 1 | 1 | 1 | 2 | - | 1 | 1 | 2 | Remove From Public View |
| car-dealership | 3 | 3 | 6 | 2 | 6 | 3 | 2 | 1 | 3 | 3 | - | 5 | 3 | 4 | Archive |
| crypto-dashboard | 6 | 5 | 7 | 5 | 7 | 6 | 4 | 1 | 4 | 4 | - | 6 | 6 | 6 | Archive |
| crypto-travel-platform | 4 | 3 | 6 | 3 | 6 | 4 | 3 | 2 | 4 | 3 | 1 | 5 | 4 | 4 | Remove From Public View |
| global-tax-calculator-mobile | 5 | 2 | 6 | 1 | 6 | 4 | 3 | 1 | 4 | 3 | - | 1 | 3 | 4 | Remove From Public View |
| habitforge | 5 | 5 | 6 | 1 | 6 | 4 | 4 | 1 | 4 | 4 | - | 1 | 5 | 5 | Archive |
| ownership-app | 5 | 3 | 7 | 6 | 6 | 6 | 4 | 5 | 4 | 3 | 3 | 6 | 3 | 7 | Remove From Public View |
| personal-finance-webapp | 6 | 4 | 7 | 4 | 6 | 5 | 4 | 3 | 4 | 4 | 2 | 5 | 5 | 6 | Archive |
| collaborative-whiteboard | 6 | 3 | 7 | 2 | 6 | 4 | 3 | 2 | 4 | 3 | - | 5 | 4 | 5 | Remove From Public View |
| storyweave-platform | 6 | 4 | 7 | 1 | 7 | 4 | 4 | 1 | 4 | 4 | - | 4 | 6 | 6 | Archive or merge |
| untitled folder | 7 | 6 | 8 | 1 | 8 | 5 | 5 | 1 | 5 | 4 | 2 | 7 | 7 | 7 | Upgrade Candidate |
| polyglot-app | 6 | 3 | 6 | 3 | 6 | 4 | 3 | 1 | 4 | 3 | 2 | 6 | 4 | 5 | Remove From Public View |
| polyglot-publisher | 3 | 2 | 3 | 1 | 3 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | 2 | 3 | Archive |
| untitled folder 2 | 5 | 4 | 6 | 1 | 6 | 4 | 3 | 1 | 4 | 3 | 2 | 6 | 4 | 5 | Archive or merge |
| spring-project | 6 | 5 | 5 | 6 | 5 | 5 | 4 | 2 | 4 | 4 | - | 6 | 5 | 6 | Archive |
| flight-experience-app | 5 | 4 | 5 | 4 | 5 | 4 | 3 | 1 | 3 | 3 | - | 2 | 4 | 5 | Archive |
| tiktok-clone | 4 | 3 | 6 | 4 | 5 | 4 | 3 | 1 | 3 | 3 | - | 5 | 4 | 4 | Remove From Public View |
| squishy-token | 2 | 2 | 5 | 4 | 4 | 4 | 3 | 3 | 2 | 2 | - | 6 | 3 | 4 | Remove From Public View |
| hardhat-project1 | 3 | 3 | 4 | 4 | 3 | 4 | 4 | 5 | 2 | 3 | - | 6 | 3 | 5 | Archive |
| property-test | 4 | 4 | 5 | 3 | 5 | 4 | 3 | 1 | 3 | 3 | - | 1 | 3 | 4 | Archive |
| nemes-website | 5 | 6 | 7 | 1 | 7 | 5 | 5 | 1 | 5 | 5 | - | 1 | 6 | 5 | Supporting only if real client work |
| isr-blog-nextjs-wordpress | 4 | 3 | 5 | 3 | 4 | 4 | 4 | 1 | 3 | 4 | - | 2 | 3 | 4 | Remove if copied example |
| my-headless-wordpress | 2 | 2 | 3 | 2 | 3 | 2 | 2 | 1 | 2 | 2 | - | 1 | 2 | 2 | Archive |
| nextjs-dashboard | 2 | 2 | 3 | 2 | 3 | 2 | 3 | 2 | 3 | 3 | - | 1 | 2 | 3 | Remove From Public View |
| nextjs-project1 | 1 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 2 | - | 1 | 1 | 2 | Remove From Public View |
| travel-agency | 2 | 2 | 3 | 1 | 3 | 2 | 2 | 1 | 2 | 2 | - | 1 | 2 | 2 | Remove From Public View |
| exercise2 | 1 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 2 | - | 1 | 1 | 2 | Remove From Public View |
| exercise3 | 1 | 1 | 2 | 1 | 2 | 1 | 2 | 1 | 2 | 2 | - | 1 | 1 | 2 | Remove From Public View |
| svelte-project1 | 2 | 2 | 3 | 1 | 3 | 2 | 2 | 1 | 2 | 2 | - | 1 | 2 | 3 | Archive |
| svelte-project2 | 2 | 2 | 3 | 1 | 3 | 2 | 2 | 1 | 2 | 2 | - | 1 | 2 | 3 | Archive |
| react-practice | 4 | 4 | 6 | 1 | 5 | 4 | 5 | 2 | 4 | 4 | - | 7 | 4 | 6 | Keep private for interview practice |
| adventofcode2024 | 3 | 3 | 3 | 1 | 1 | 3 | 4 | 1 | - | 4 | - | 1 | 2 | 5 | Keep public, do not feature |
| python-project | 1 | 2 | 1 | 2 | 1 | 1 | 2 | 1 | - | 2 | - | 4 | 1 | 2 | Remove From Public View |
| djangotutorial | 1 | 1 | 1 | 2 | 1 | 1 | 2 | 2 | 1 | 2 | - | 1 | 1 | 2 | Remove From Public View |
| javascript-algorithms | 1 | 2 | 2 | 1 | 1 | 2 | 8 | 9 | - | 5 | - | 8 | 1 | 2 | Remove if it is an upstream clone |
| demoapp | 2 | 3 | 3 | 3 | 3 | 2 | 2 | 1 | 2 | 2 | - | 1 | 2 | 3 | Archive |
| exercise | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | - | 2 | - | 1 | 1 | 2 | Remove From Public View |
| speag-interview | 3 | 3 | 5 | 1 | 4 | 3 | 4 | 3 | 3 | 3 | - | 1 | 3 | 5 | Private unless publication is allowed |
| speag-interview-test1 | 2 | 2 | 3 | 1 | 3 | 2 | 2 | 1 | 2 | 2 | - | 1 | 2 | 3 | Remove From Public View |
| speag-interview-test2 | 2 | 2 | 4 | 1 | 3 | 3 | 3 | 1 | 2 | 2 | - | 1 | 2 | 4 | Remove From Public View |
| vendo-interview | 4 | 4 | 6 | 1 | 6 | 3 | 3 | 1 | 4 | 4 | - | 5 | 4 | 6 | Private unless publication is allowed |
| personal-portfolio-v.1 | 3 | 4 | 5 | 1 | 5 | 3 | 3 | 1 | 3 | 4 | - | 1 | 4 | 3 | Archive |
| themarcellvarga.github.io | 4 | 7 | 2 | 1 | 4 | 2 | 8 | 1 | 4 | 6 | - | 8 | 4 | 2 | Keep as redirect utility |

### Inventory notes and recommended actions

#### 2025-frontend-takehome

Purpose: focused robot joystick interaction. Current status: implemented Storybook component with custom hook and gesture/spring behavior. Main weakness: no tests and potential input-path complexity. Action: rework as a compact supporting specimen only if publication is permitted.

#### adventofcode2024

Purpose: coding puzzles. Current status: multiple TypeScript solutions, no README. Action: keep public if desired as learning history, but do not place on the portfolio. Add a one-paragraph README if it remains public.

#### airmee

Purpose: appears to contain an Airmee/Nordica-style marketing site and animation work. Current status: unclear product boundary, no root README, mixed top-level static and nested Next.js structure. Action: archive unless it represents authorized client work that can be reframed as a real case study.

#### bike-project

Purpose: mountain-bike commerce experience with Supabase and an AI parts advisor. Current status: meaningful UI surface but weak tests and broad commerce/security claims. Action: archive. It does not differentiate you enough to justify a large rebuild.

#### booking-utazzvelem

Purpose and status: no readable project evidence found in the initial inventory. Action: remove from public view.

#### car-dealership

Purpose: luxury dealership experience. Current status: README explicitly says the real Next.js app has build problems and deploys a coming-soon page. Action: archive. A portfolio should not advertise an unresolved build as a project outcome.

#### collaborative-whiteboard

Purpose: whiteboard and PON dashboard combined. Current status: contradictory scope and unsupported real-time claims. Action: remove from public view.

#### crypto-dashboard

Purpose: crypto market and portfolio dashboard. Current status: substantial UI and backend folders, but no meaningful tests and likely provider/mock dependence. Action: archive. Aperture replaces it with a more credible finance story.

#### crypto-travel-platform

Purpose: crypto travel booking. Current status: many UI routes and components, but blockchain and live booking claims are not supported strongly. Action: remove from public view.

#### demoapp

Purpose: small Express/SQLite recipe-style demo. Current status: non-Git folder with minimal documentation and odd filenames. Action: archive.

#### djangotutorial

Purpose: Django tutorial. Action: remove from public view.

#### exercise, exercise2, exercise3

Purpose: practice and create-next-app exercises. Action: remove from public view.

#### flight-experience-app

Purpose: split frontend/backend flight experience prototype. Current status: build outputs are checked in, no meaningful root documentation, minimal tests. Action: archive.

#### global-tax-calculator-mobile

Purpose implied by repository name: global tax calculator mobile app. Actual README: copied collaborative-whiteboard description. Current code: Expo/React Native finance/tax-style dependencies. Action: remove from public view until identity, documentation, and behavior agree. Even after repair, it overlaps with finance work.

#### habitforge

Purpose: habit product UI. Current status: generic Vite README and no tests. Action: archive.

#### hardhat-project1

Purpose: Hardhat learning example with token contracts and React UI. Current status: explicit example project. Action: archive.

#### isr-blog-nextjs-wordpress

Purpose: Next.js/WordPress App Router example. The README closely identifies it as an example and links to the Vercel example source. Action: remove from public view if it is substantially copied; never present upstream example code as personal project work.

#### javascript-algorithms

Purpose: algorithms and data structures. The repository has 1,120 commits and a multilingual upstream-style README attributed to the well-known `trekhleb/javascript-algorithms` project. Action: remove from your public profile if it is a clone/fork that GitHub does not already label clearly. Use your own interview-practice repository for original solutions.

#### my-headless-wordpress

Purpose: create-next-app/headless WordPress practice. Current README is still the scaffold. Action: archive.

#### nemes-website

Purpose: content-led website with staged sections, video gallery, motion, quote carousel, and SEO files. Action: if this is real authorized work, it may remain public as a small client delivery example. Add a proper README explaining client, constraints, your contribution, accessibility, performance, and deployment. Otherwise archive.

#### nextjs-dashboard and nextjs-project1

Purpose: Next.js course/starter work. Action: remove from public view.

#### ownership-app

Purpose: AI/Web3 asset tokenization. Current status: overclaimed, legally risky, broad, and tracks `.env.local`. Action: remove from public view.

#### personal-finance-webapp

Purpose: broad personal finance dashboard. Action: archive because Aperture supersedes it.

#### personal-portfolio-v.1 and personal-portfolio-v.2

Purpose: portfolio site history and current site. Keep v2 public and deployed. Archive or make v1 private. The current portfolio repository itself should not be presented as one of the selected case studies.

#### polyglot-app, polyglot-publisher, untitled folder 2

Purpose: localization workflow SaaS. Current status: three overlapping implementations, broad AI/collaboration/integration claims, little test evidence, and one non-Git folder with an `.env`. Action: choose none for the current portfolio. Archive all three or merge only if you later decide localization is strategically important.

#### property-test

Purpose: property/building elements UI using mock data and a Supabase client. Current README remains create-next-app. Action: archive.

#### python-project

Purpose: beginner Python learning. Action: remove from public view.

#### react-practice

Purpose: React interview practice environment. Action: keep private or public as a clearly labeled practice repository. Do not feature it. Add tests only where they help interview preparation, not for portfolio polish.

#### shader-lab

Purpose: shader editing and preview. Action: rebuild as one focused supporting project.

#### speag-interview, speag-interview-test1, speag-interview-test2, vendo-interview

Purpose: interview tasks. Action: keep private unless the company explicitly permits publication. If permitted, feature at most one and explain the time constraint and original brief. Remove template-only attempts.

#### spring-project

Purpose: task manager with Spring Boot and React. Current status: conventional CRUD project, little test evidence. Action: archive. First Revenue Game now demonstrates Java/Spring at a much stronger level.

#### squishy-token

Purpose: deflationary and staking token. Current README uses hype, fixed APY, and broad protocol claims. Action: remove from public view. It does not support your target role and creates security/economic credibility risk.

#### storyweave-platform and untitled folder

Purpose: data visualization dashboard versus interactive data-story builder. `untitled folder` is the stronger concept because it includes editing, narrative structure, export, and drag-and-drop dependencies. If you want a future supporting project, merge the best visualization components into a narrowly scoped evidence-based story builder. Otherwise archive both.

#### svelte-project1 and svelte-project2

Purpose: Svelte starter/practice projects. Action: archive.

#### themarcellvarga.github.io

Purpose: redirect to the main domain. Action: keep public as infrastructure utility, but do not list it as a project.

#### tiktok-clone

Purpose: TikTok clone. Current status: broad feature claims, no meaningful tests, generic clone story. Action: remove from public view.

#### travel-agency

Purpose: create-next-app travel site. Action: remove from public view.

#### untitled folder 2

Purpose: another localization dashboard. Action: archive or merge into a single private localization exploration.

## Comparative Ranking

### Best Flagship Candidate

**ai-finance**

Why:

- strongest direct relevance to Singapore fintech and financial-product roles;
- credible frontend, API, data, and AI boundaries;
- trust, citations, freshness, and non-advice constraints;
- working build and tests;
- strongest senior-level interview surface.

### Second Flagship Candidate

**gamified-business-development**

Why:

- strongest backend and architecture evidence;
- coherent member/operator workflow;
- real database and event integration tests;
- useful migration and trade-off story;
- strong complement to the fintech flagship.

### Strongest Technical Project

**gamified-business-development**, because it has the deepest demonstrated distributed workflow, database migrations, eventing, outbox, artifact storage, observability, and Testcontainers story.

### Strongest Product Project

**focusin**, because its scope, non-goals, local-first decision, state restoration, lifecycle rules, and release gates all serve a coherent user need.

### Strongest UX Project

**focusin**, with `endless-activity` second.

### Strongest AI Project

**ai-finance**, with `ai-transcriber` as the cleaner AI UX and privacy supporting specimen.

### Best Supporting Projects

1. `focusin`
2. `ai-transcriber`
3. `endless-activity`
4. reworked `shader-lab` or `2025-frontend-takehome`

### Upgrade Candidates

Prioritized:

1. `momentum-labs`, but only ASEAN Tender Twin.
2. `shader-lab`, as a focused technical specimen.
3. `2025-frontend-takehome`, as a compact interaction specimen.
4. `ai-travel-planner`, if travel remains personally important.
5. `untitled folder` StoryWeave, only if a data-story tool fills a desired gap.

### Archive Candidates

`airmee`, `bike-project`, `car-dealership`, `crypto-dashboard`, `demoapp`, `flight-experience-app`, `habitforge`, `hardhat-project1`, `my-headless-wordpress`, `personal-finance-webapp`, `personal-portfolio-v.1`, `property-test`, `spring-project`, `storyweave-platform`, `svelte-project1`, `svelte-project2`, and the localization duplicates.

### Remove From Public View

Highest priority:

- `ownership-app`
- `collaborative-whiteboard`
- `global-tax-calculator-mobile`
- `crypto-travel-platform`
- `squishy-token`
- `tiktok-clone`
- obvious course/tutorial repositories
- copied or upstream example repositories
- interview tasks without publication permission
- empty, duplicated, or misleadingly named folders

## Missing Portfolio Capabilities

### 1. A deployed, observable flagship

The repositories contain production-minded configuration, but the portfolio needs one publicly accessible flagship with:

- stable demo data;
- safe anonymous access;
- error monitoring;
- performance measurements;
- health status;
- documented deployment boundary;
- no secret or billing setup required for a recruiter.

### 2. Measured frontend performance

Add evidence such as:

- route-level bundle size;
- Web Vitals;
- table/chart rendering behavior;
- memoization or virtualization decisions;
- interaction latency;
- before/after performance measurement.

Do not invent metrics. Record them from real runs.

### 3. Automated accessibility evidence

The native projects have good accessibility thinking. The web flagships need:

- keyboard walkthrough;
- focus-order checks;
- axe or equivalent automated checks;
- screen-reader notes for charts and dynamic AI output;
- reduced-motion behavior;
- accessible error summaries.

### 4. A reusable design-system or component API story

Your professional positioning mentions design systems, but the personal projects mostly consume component libraries. A small, rigorous package could show:

- tokens and semantic themes;
- accessible component APIs;
- Storybook;
- visual regression;
- interaction tests;
- documentation;
- migration strategy.

This could come from the Robot Remote Control or a subset of the finance workspace rather than a completely new app.

### 5. Real external feedback

The projects need at least limited evidence from real use:

- 5-8 beta testers for Focusin;
- a small task-based usability test for Aperture;
- one domain expert review for ASEAN Tender Twin;
- issue/feedback triage and one iteration based on findings.

Do not create fake usage metrics.

### 6. Concise engineering communication

The documentation is strong but often too large. Senior communication includes knowing what not to show. Every featured case study should have:

- 30-second summary;
- 2-minute visual walkthrough;
- 5-minute architecture discussion;
- deep technical appendix.

## New Project Recommendations

Do not start all of these. Pick at most one after the selected portfolio projects are presented well.

### Recommendation A: ASEAN Tender Evidence Workspace

Best strategic choice because the concept already exists in `momentum-labs`.

Build:

- document upload and page-aware parsing;
- clause extraction with citations;
- compliance matrix with confidence and missing-evidence state;
- reviewer corrections and approvals;
- prompt-injection and untrusted-document boundary;
- evaluation set with precision/recall or field-level accuracy;
- exportable audit package.

Why it helps:

- Singapore and ASEAN relevance;
- applied AI beyond a wrapper;
- complex frontend;
- trust, evidence, and approval UX;
- B2B workflow and document system design.

### Recommendation B: Institutional Operations Workbench

A non-AI or lightly AI-assisted data-dense interface for operations teams:

- large virtualized data grid;
- saved filters and URL state;
- keyboard-first bulk actions;
- optimistic and failure-safe mutations;
- role permissions;
- audit history;
- accessibility for dense data;
- performance budgets.

Why it helps:

- fills the clearest frontend-system-design gap;
- relevant to banking, fintech, and enterprise product roles;
- avoids another generic marketing site.

### Recommendation C: Design-System Migration Lab

Build a small package and migration case:

- 8-12 components;
- tokens, light/dark themes, and semantic color;
- Storybook docs;
- accessibility and interaction tests;
- visual regression;
- codemod or migration notes from an inconsistent legacy UI;
- bundle and API compatibility measurements.

Why it helps:

- directly supports your professional design-system experience;
- proves reusable frontend engineering;
- can be completed without another backend.

## Recommended Improvement Roadmap

Assumption: job search begins in 9-12 months.

### Phase 1: Immediate fixes, weeks 1-2

1. Decide the public set: Aperture, First Revenue Game, Focusin, ThreadScribe, and one specimen.
2. Make tutorial, duplicate, clone, risky Web3, and misleading repositories private or archive them.
3. Remove tracked environment files from public candidates and scan Git history before publishing.
4. Replace placeholder GitHub URLs and local absolute documentation links.
5. Remove `.history`, local build output, `.DS_Store`, caches, and duplicate deploy folders after confirming they contain no user work that must be preserved.
6. Add clear repository descriptions and topics.
7. Mark fixture, demo, local, and live modes consistently.

### Phase 2: Flagship upgrades, weeks 3-10

#### Aperture

- select one golden path;
- add cross-user ownership integration tests;
- add browser E2E for portfolio to cited research;
- run accessibility and Web Vitals checks;
- deploy a safe recruiter demo;
- capture real screenshots and a short video;
- reduce public documentation.

#### First Revenue Game

- fix one-command Node 22 setup;
- finish backend-native identity/ownership checks;
- run configured-mode golden-path E2E;
- justify or remove infrastructure that is not visible in behavior;
- capture one architecture trade-off story;
- make the public demo reproducible.

### Phase 3: Supporting evidence, weeks 11-15

#### Focusin

- signed archive verification;
- lifecycle QA on a real build;
- beta feedback;
- final icon and store assets;
- short product video.

#### ThreadScribe

- one real local transcription run;
- provider comparison/evaluation;
- keyboard and screen-reader QA;
- a concise AI trust case study.

#### Interaction specimen

- choose Shader Lab or Robot Remote Control;
- keep scope under two weeks;
- add tests, accessibility, performance notes, and polished presentation.

### Phase 4: Presentation and case studies, weeks 16-20

For each featured project:

1. one-sentence outcome;
2. target user and problem;
3. 4-6 screenshots showing a complete flow;
4. architecture diagram;
5. three important decisions;
6. one failure or trade-off;
7. verification evidence;
8. exact personal contribution;
9. current limitations;
10. repository and live demo links.

The portfolio homepage should show three main projects, not a grid of every repository.

### Phase 5: Optional gap project, months 6-8

Only start ASEAN Tender Twin or a design-system lab if the main case studies are deployed, verified, and written.

### Phase 6: Interview packaging, months 8-9

Prepare:

- 2-minute and 10-minute versions of each flagship story;
- frontend system-design diagrams;
- trade-off questions and answers;
- one debugging story;
- one accessibility story;
- one security/authorization story;
- one performance story;
- one AI evaluation/failure story;
- honest statements about what is fixture-backed or not deployed.

## Interview Value of Each Selected Project

### ai-finance

Best for:

- frontend system design;
- BFF versus direct API access;
- owner-scoped data;
- financial trust and disclaimers;
- structured AI and tool calling;
- citations and freshness;
- document processing;
- rate limits, billing, and observability;
- progressive hardening from deterministic mode.

### gamified-business-development

Best for:

- migration from Next.js server logic to Spring Boot;
- event-driven workflow;
- transactional outbox;
- database migrations;
- integration testing with real dependencies;
- authorization of member/admin and proof artifacts;
- operational trade-offs;
- avoiding or recognizing over-engineering.

### focusin

Best for:

- product scope;
- native state machine;
- restoration after sleep/relaunch/time changes;
- accessibility;
- notification and quiet-hour behavior;
- local-first privacy;
- release gating and support thinking.

### ai-transcriber

Best for:

- AI UX;
- raw versus transformed data;
- structured output validation;
- fixture-based evaluation;
- privacy and provider disclosure;
- cancellation, partial progress, and export behavior.

### shader-lab or robot remote control

Best for:

- browser events and pointer mechanics;
- continuous input;
- rendering performance;
- animation;
- testable geometry;
- keyboard and reduced-motion alternatives;
- focused component API design.

## Risks and Misleading Claims

Correct before publication:

1. Do not call deterministic generation “AI.”
2. Do not call fixture/provider-ready behavior “live.”
3. Do not call a frontend with Socket.io client imports “real-time collaboration.”
4. Do not call a local demo “production-ready.”
5. Do not call test-mode or placeholder credential setup “secure.”
6. Do not imply asset tokenization creates legally enforceable ownership.
7. Do not imply external travel links represent confirmed inventory.
8. Do not imply generated finance insights are advice, predictions, or regulatory compliance.
9. Do not present upstream examples, tutorials, or take-home starter code as original end-to-end work.
10. Do not display fake user metrics, revenue, latency, precision, or adoption.
11. Do not list tools in an architecture diagram only because configuration files exist.
12. Do not let documentation status labels substitute for a working demo.

## Final Recommendations

### Invest heavily

- `ai-finance`
- `gamified-business-development`
- `focusin`

### Invest selectively

- `ai-transcriber`
- one of `shader-lab` or `2025-frontend-takehome`

### Keep public but do not feature

- `endless-activity`
- `adventofcode2024`
- `react-practice` if clearly labeled
- `themarcellvarga.github.io`
- `nemes-website` only if it is authorized real work

### Consider later

- `momentum-labs`, narrowed to ASEAN Tender Twin
- `ai-travel-planner`, only after real provider and trust hardening
- StoryWeave, only as a focused data-story editor

### Archive or make private

Everything else, especially tutorials, duplicates, generic clones, misleading broad SaaS concepts, and risky Web3 claims.

The strongest narrative is not “I have built dozens of apps.” It is:

> I use product and UX judgment to define the right scope, then build the frontend, APIs, data boundaries, failure states, and verification needed to make complex workflows credible.
