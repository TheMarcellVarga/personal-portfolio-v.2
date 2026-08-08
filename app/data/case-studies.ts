import type { CaseStudyId } from "./projects";

export type CaseStudyRecord = {
  id: CaseStudyId;
  role: string;
  problem: string;
  user: string;
  decisions: readonly string[];
  verification: readonly string[];
  limitations: readonly string[];
};

export const caseStudies: Record<CaseStudyRecord["id"], CaseStudyRecord> = {
  aperture: {
    id: "aperture",
    role: "Independent product direction, UX/UI, Next.js frontend, Go API integration, AI evaluation, and release engineering",
    problem:
      "Turn private financial source material into structured research that remains traceable, challengeable, and human-approved without implying trade execution or personal advice.",
    user: "Research-minded investors and analysts who need evidence, freshness, uncertainty, and decision boundaries visible in one workflow.",
    decisions: [
      "Separated Next.js product rendering from the authoritative Go finance and document API.",
      "Bound material claims to the active retrieval evidence or a visible unsupported state.",
      "Stored immutable raw output and append-only human edits, decisions, and citation feedback.",
      "Kept external providers disabled by default while deterministic evaluation and failure handling matured.",
    ],
    verification: [
      "40 of 40 evidence regression cases pass across five source documents.",
      "The disposable-database E2E flow passes from upload through reviewed export.",
      "Cross-owner isolation, prompt injection, schema repair, accessibility, and deployment contracts are automated release gates.",
    ],
    limitations: [
      "The complete product path is available as a guided build; this case study does not claim a public production service.",
      "External model calls and paid-provider comparisons remain disabled pending explicit cost and credential approval.",
    ],
  },
  "first-revenue-game": {
    id: "first-revenue-game",
    role: "Independent product direction, UX/UI, Next.js shell and BFF, Java/Spring domain workflow, event reliability, observability, testing, and release evidence",
    problem:
      "Help solo builders move one monetizable skill toward first revenue without rewarding planning theater, while ensuring that progression changes only when submitted proof supports it.",
    user: "Solo builders pursuing a first paid outcome, and operators responsible for reviewing commercial evidence and unlocking supported progression.",
    decisions: [
      "Centered the member experience on one commercially specific mission, external evidence, and an explicit reject-revise-approve recovery loop.",
      "Migrated the authoritative workflow one vertical slice at a time, preserving the Next.js product contract while Spring Boot took ownership in the verified mode.",
      "Signed short-lived viewer context across the BFF boundary and enforced role plus resource ownership inside the backend.",
      "Committed workflow state and event intent atomically through a transactional outbox, then made projections idempotent by event ID.",
      "Resolved proof ownership before issuing short-lived MinIO access and kept operational telemetry free of secrets and applicant data.",
    ],
    verification: [
      "Forty-one Vitest tests and 35 passing Playwright checks cover the product shell, API contracts, responsive behavior, and member/operator workflow.",
      "Thirty-four JUnit and Testcontainers tests exercise the backend against real PostgreSQL and Redpanda services.",
      "The verification harness proves application-to-approval state, BFF reads, outbox drain and recovery, custom metrics, Grafana provisioning, and log privacy.",
    ],
    limitations: [
      "The end-to-end product slice is verified against its supporting services; no hosted production environment or production end-user identity deployment is claimed.",
      "The demonstrated golden path uses link proof. MinIO file handling is verified separately through permission and storage coverage.",
      "Redis is readiness-checked but owns no product workload, and production SLOs, alert routing, retention, scaling, and incident ownership remain open.",
    ],
  },
  "wild-route": {
    id: "wild-route",
    role: "Independent product direction, UX/UI, Next.js frontend, route/API architecture, security boundaries, testing, and deployment",
    problem:
      "Turn an open-ended adventure brief into a small, explainable set of route options without presenting planning estimates or external booking handoffs as confirmed travel inventory.",
    user: "Independent adventure travelers comparing pace, climate, budget, and detours before validating details and booking with external providers.",
    decisions: [
      "Started from travel intent and kept route reasoning, confidence, freshness, and estimate boundaries visible at the point of decision.",
      "Built a deterministic, schema-validated route engine before adding live model or provider dependencies.",
      "Kept browser traffic behind same-origin Next.js handlers, with ownership checks, Supabase RLS, and server-only booking-link construction.",
      "Reworked save and preview flows for stateless serverless hosting after the first deployed implementation exposed a process-memory assumption.",
    ],
    verification: [
      "74 deterministic Vitest cases pass across route generation, entitlements, validation, security, share, and handoff behavior.",
      "15 Chromium checks cover the hosted golden path, keyboard flow, axe accessibility, reduced motion, and media fallbacks.",
      "Five Supabase migrations pass static verification; the local and Vercel production builds pass with zero production dependency vulnerabilities.",
    ],
    limitations: [
      "The public demo uses a deterministic planning dataset, planning estimates, and inspectable route generation rather than live inventory or an LLM.",
      "Live managed Supabase, Stripe, email, and travel-provider integrations remain intentionally off; booking completes on external provider sites.",
      "Demo saves use browser-local storage and previews use schema-validated stateless recipes, not cross-device account persistence.",
    ],
  },
  threadscribe: {
    id: "threadscribe",
    role: "Independent product direction, UX/UI, Next.js implementation, local persistence, AI evaluation, privacy review, accessibility, and release evidence",
    problem:
      "Turn private speech into useful written artifacts without hiding where processing happens, replacing source material silently, or presenting sample output as live-model intelligence.",
    user: "Solo builders who record implementation notes, bug reports, planning thoughts, and short voice memos that need to become durable, searchable work.",
    decisions: [
      "Kept timestamped raw segments beside transformed drafts so the source remains inspectable.",
      "Made sample, local, and cloud provider modes explicit, with external calls disabled by default.",
      "Stored sessions, edits, outputs, tags, and exports in a local SQLite library with verified deletion behavior.",
      "Preserved audio previews and prior work across cancellation, worker failure, malformed output, and retry.",
    ],
    verification: [
      "Five labeled sample cases pass 45 of 45 deterministic checks across cleanup, notes, actions, empty input, and instruction-like transcript text.",
      "Thirty-seven application tests pass alongside privacy samples, keyboard workflow checks, production build, and automated accessibility scans.",
      "One permitted 8.63-second clip completed with local faster-whisper in 2.068 seconds warm on the recorded demo machine.",
    ],
    limitations: [
      "The public walkthrough uses deterministic sample transforms. It is not evidence of general model quality.",
      "The local Whisper result covers one short English clip on one machine and does not establish production-scale accuracy or latency.",
      "Speaker labels and segment confidence remain exploratory; hosted sync, sharing, and compliance certification are outside the project scope.",
    ],
  },
  focusin: {
    id: "focusin",
    role: "Independent product direction, native macOS UX, SwiftUI implementation, state and persistence architecture, accessibility, testing, and release preparation",
    problem:
      "Help desk workers move from a focus interval into a useful micro-break without adding a dashboard, an account, or another decision at the moment their attention is already depleted.",
    user: "Mac-based desk workers who notice stiffness, fatigue, scattered attention, or anxiety and want a small, optional reset that stays close to their current task.",
    decisions: [
      "Persisted wall-clock deadlines instead of countdown ticks so focus and break state reconcile after sleep, relaunch, clock changes, and delayed timers.",
      "Separated non-negotiable safety preferences from softer state, duration, and same-day novelty matching through a documented fallback order.",
      "Bundled a versioned, human-reviewed activity catalog instead of introducing remote generation, accounts, or runtime networking.",
      "Kept notification and login-item services outside the local state core so platform denial never blocks the focus-and-break loop.",
    ],
    verification: [
      "Fifty-four deterministic tests cover lifecycle, persistence, quiet hours, recommendation passes, catalog validation, permission reconciliation, and beta templates.",
      "Twenty-one bundled activities pass state, duration, safety, and default-filter coverage validation, with named human content approval for version 0.1.0 (1).",
      "Forty-one current appearance and accessibility captures cover light and dark modes, large text, increased contrast, reduced transparency, recovery states, and Settings.",
    ],
    limitations: [
      "The current build and unsigned Release integrity are verified; no signed archive, installable external beta, TestFlight build, or App Store listing exists yet.",
      "Exact-candidate VoiceOver, notification, login-item, lifecycle, upgrade, and final-media checks remain open until a signed candidate exists.",
      "The five-to-eight-person beta has not run, so the case study makes no usability, satisfaction, or real-world recommendation-quality claim.",
    ],
  },
  "endless-activity": {
    id: "endless-activity",
    role: "Independent product direction, native iOS UX, SwiftUI implementation, catalog and ranking architecture, accessibility, testing, and portfolio release preparation",
    problem:
      "Help someone move from an unfocused moment of boredom to one realistic activity without requiring a search query, onboarding, account, location permission, or network connection.",
    user: "People between plans or low on ideas who want a fast, private suggestion they can save, skip, filter, and return to later.",
    decisions: [
      "Opened directly into a tactile card deck and made save and skip available as both gestures and visible controls.",
      "Separated the immutable bundled catalog, pure ranking rules, persisted signals, and presentation deck so interaction state never corrupts source data.",
      "Used practical constraints and saved-category signals instead of opaque personalization or generated content.",
      "Kept the complete version-one loop local and deterministic, with explicit recovery for exhausted decks and destructive history reset.",
    ],
    verification: [
      "Fifty bundled activities pass unique ID, unique title, schema, tagging, step-count, and content-quality validation.",
      "Twelve unit tests and seven UI tests passed on the iPhone 17e simulator, covering ranking, persistence, swipes, details, filters, Saved, and relaunch state.",
      "The large-device build passed on iPhone 17 Pro Max, with recorded checks for accessibility-size text, VoiceOver actions, Reduce Motion, and current presentation captures.",
    ],
    limitations: [
      "The latest full simulator verification is dated 28 June 2026; the current audit environment has no full Xcode installation for a fresh rerun.",
      "The project is a polished local MVP and portfolio proof point, not an App Store release or evidence of real-world retention or recommendation quality.",
      "Accounts, cloud sync, live events, required location, booking, payments, social planning, and AI-generated activities are intentionally outside version one.",
    ],
  },
};
