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
  "burnout3-ios": {
    id: "burnout3-ios",
    role: "Independent iOS port and interaction engineering: an initial PS2 experiment followed by the main Xbox-based app, built on Takedawn and xboxrecomp.",
    problem: "Turn a controller-first console racer into an iPhone experience, from runtime and rendering through setup, touch input, settings and returning to play.",
    user: "A personal technical experiment for playing a supported Burnout 3: Takedown Xbox release on iPhone.",
    decisions: [
      "Move the main app to the Xbox-based Takedawn/xboxrecomp foundation while preserving the earlier PS2 work as source history.",
      "Keep stick pickup neutral and input release immediate; use a compact throttle, boost and brake cluster with adjustable steering response.",
      "Stage and verify all 716 game files before installation, preserving existing game files and saved profiles on failure.",
      "Keep Settings, Launcher and Background pause ownership independent so one dismissed screen cannot resume another hold.",
      "Reduce the presentation shell to verified imports and four touch preferences; disable gameplay and enhanced display choices by default while known issues remain.",
      "Measure frame presentation, guest flips and whole-process CPU separately, retaining the scope and thermal limits of each experiment.",
    ],
    verification: [
      "Historical source baseline b4cd396 records the Xbox migration. Build 13 is the last recorded device installation; the 5 November presentation cleanup is local, uncommitted source and is not installed on the phone.",
      "On 5 November 2026, the local iPhone Release build, all seven focused host suites and native UIKit checks for asynchronous validation/import and disabled states passed. The supplied 716-file folder also validated. Host coverage includes hybrid touch, original touch, preferences/imports, session ownership, guest menu entries, shared-memory aliases and ARM64 MMIO decoding.",
      "Earlier October physical iPhone checks exercised intro, menus, garage, scripted acceleration/steering/braking, profile save/reload, native settings, launcher/resume and the original race Quit flow.",
      "A roughly 155-second single-track sample reported 59.9–60.1 Metal presentations per second across 31 five-second samples. It is a bounded observation, not full-game performance certification.",
      "A short menu comparison recorded 76.92% versus 52.98% mean CPU time on one core for 8 ms versus 4 ms pacing spin lead, with comparable recent guest-flip p95. Runs were sequential on a warm phone.",
    ],
    limitations: [
      "Supports the USA original Xbox release. Players supply their own extracted game folder; PS2 ISOs and saves are incompatible. Game data and generated code are not distributed.",
      "Gameplay is disabled in the default presentation build. BO3_IOS_GAMEPLAY_PREVIEW is an explicit build-time opt-in to the incomplete prototype, not a fix or release certification.",
      "Display stays on the original 640 × 480 / 4:3 baseline. Enhanced display options are disabled; the legacy layout selector, reset action and duplicate launcher action are omitted.",
      "A checker-pattern defect remains in the lower-left race HUD. Full-game compatibility, complete races, physical touch comfort, audio quality and sustained thermals need broader validation.",
      "The native Files validator and staged import are tested; the on-device Files picker/provider flow has not been exercised end to end.",
      "Returning to the launcher preserves a paused live runtime rather than tearing it down. It still used about 58% of one core in a held-session sample. Background ownership is unit-tested; physical interruption/resume needs further checks.",
      "This page shows historical device captures and distinguishes them from the 5 November local source checks. The updated app has not been installed or tested on the phone, and game benchmarks were not rerun. No public app or game download is offered here.",
    ],
  },
  aperture: {
    id: "aperture",
    role: "Independent product design and engineering: UX, Next.js, Go, market data, private document research, and release verification.",
    problem:
      "Markets, holdings, and goals are easier to understand together. I built Aperture to connect them without turning financial research into a trading terminal or hiding uncertainty behind an AI answer.",
    user: "Individuals reviewing their holdings, comparing contribution scenarios, and checking the evidence behind a financial conclusion.",
    decisions: [
      "Keep five primary destinations: Overview, Markets, Portfolio, Plan, and Learn. Supporting research tools stay outside the main navigation.",
      "Prioritize the market table; reveal geography and its country enrichment only when requested.",
      "Remove duplicate cards, decorative workspace effects, lengthy settings copy, and paid-plan promotion.",
      "Disable unavailable actions explicitly, preserve editable empty states, and prevent Refresh from overlapping a portfolio save.",
      "Keep provider freshness visible and goal calculations contribution-only, with zero investment return assumed.",
      "Preserve owner-scoped document retrieval and a human review record separate from generated output.",
    ],
    verification: [
      "On 6 November 2026, the deployed Go API passed its health check and rejected an unauthenticated portfolio request. The signed-in public overview showed the portfolio service connected.",
      "On 5 November 2026, the local presentation pass passed lint, TypeScript, the production build, and 20 focused tests covering goals, structured research, review, Markdown export, and overview charts.",
      "The existing Google/Clerk sign-in flow, connected overview, portfolio entry, planner empty state, and a Markets view with 98 provider-backed instruments were checked locally in Chrome.",
      "Live checks used a separate development identity to create and read a provider-backed portfolio through Next.js and Go, calculate a goal scenario, and deny access from another identity. The temporary portfolio was deleted.",
      "A synthetic text document was uploaded and processed to ready by a separate worker with Postgres persistence; cross-owner research access was denied.",
      "A cold start through npm run dev launched the API, web app, and persistent worker on conflict-free ports without resetting existing data. Startup also rejected ports owned by unrelated projects.",
      "The earlier research baseline records 40 of 40 regression cases across five source documents. That historical suite and its disposable-database review/export check were not rerun during the latest presentation pass.",
    ],
    limitations: [
      "The public deployment uses a Railway trial and Clerk development authentication. Document research is disabled there; the worker and private-document workflow were verified locally only.",
      "External model calls remain disabled by default; verified planning and research paths use deterministic calculations or generation, not a live paid model.",
      "Paid subscriptions, account-wide export, email alerts, and the older risk-report generation/save action are disabled in the current preview.",
      "Private workflows require sign-in, configured services, and user-supplied holdings or source material. Browser and live integration checks do not constitute a complete production-readiness audit.",
      "The mobile companion is outside the current verified web-demo scope; device release, push delivery, and full parity are not claimed.",
      "Research and educational decision support only, without crossing into trade execution or personal advice.",
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
      "Forty-one Vitest tests and 36 passing Playwright checks cover the product shell, API contracts, responsive behavior, and member/operator workflow.",
      "Thirty-four JUnit and Testcontainers tests exercise the backend against real PostgreSQL and Redpanda services.",
      "The verification harness proves application-to-approval state, BFF reads, outbox drain and recovery, custom metrics, Grafana provisioning, and log privacy.",
    ],
    limitations: [
      "The public demo is deployed in deterministic demo mode; managed persistence, production end-user identity, and the Java service stack are not activated on the public URL.",
      "The demonstrated golden path uses link proof. MinIO file handling is verified separately through permission and storage coverage.",
      "Redis is readiness-checked but owns no product workload, and production SLOs, alert routing, retention, scaling, and incident ownership remain open.",
    ],
  },
  "wild-route": {
    id: "wild-route",
    role: "Independent product direction, UX/UI, Next.js frontend, route/API architecture, security boundaries, testing, and deployment",
    problem:
      "Turn an open-ended adventure brief into a small, explainable set of route options without presenting planning estimates or external booking handoffs as confirmed travel inventory.",
    user: "Independent adventure travelers comparing pace, budget, and detours before validating details and booking with external providers.",
    decisions: [
      "Simplified the demo to brief, comparison, local save/share, and external flight search; restored the interactive globe with an ordered journey fallback and disabled unavailable account features.",
      "Started from travel intent and kept route reasoning, confidence, freshness, and estimate boundaries visible at the point of decision.",
      "Built a deterministic, schema-validated route engine before adding live model or provider dependencies.",
      "Kept browser traffic behind same-origin Next.js handlers, with ownership checks, Supabase RLS, and server-only booking-link construction.",
      "Reworked save and preview flows for stateless serverless hosting after the first deployed implementation exposed a process-memory assumption.",
    ],
    verification: [
      "109 deterministic Vitest cases pass locally (November 2026) across route generation, entitlements, validation, security, share, and handoff behavior.",
      "24 Chromium checks pass locally across the demo golden path, responsive collision guards, keyboard flow, axe accessibility, reduced motion, and media fallbacks.",
      "The November production build, TypeScript checks, and ESLint pass. Demo-session isolation and missing share/provider links have dedicated regression tests.",
    ],
    limitations: [
      "The public URL is an earlier release. November screenshots and verification describe the local simplification, which has not been deployed.",
      "The public demo uses a deterministic planning dataset, planning estimates, and inspectable route generation rather than live inventory or an LLM.",
      "Managed authentication, cloud persistence, billing, email, and live travel integrations are outside the verified demo path. Demo account features stay disabled; external providers own bookings and final prices.",
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
      "Reduced the popover to one status, one suggestion, and clear actions; removed duplicate controls, progress displays, and beta-only UI. Active-break selectors and unsupported local integrations expose explicit disabled states.",
      "Persisted wall-clock deadlines instead of countdown ticks so focus and break state reconcile after sleep, relaunch, clock changes, and delayed timers.",
      "Separated non-negotiable safety preferences from softer state, duration, and same-day novelty matching through a documented fallback order.",
      "Bundled a versioned, human-reviewed activity catalog instead of introducing remote generation, accounts, or runtime networking.",
      "Kept notification and login-item services outside the local state core so platform denial never blocks the focus-and-break loop.",
    ],
    verification: [
      "Fifty-eight deterministic tests pass, covering lifecycle, persistence, quiet hours, recommendation policy, catalog validation, permissions, active-break identity, immediate hard-filter updates, and no-activity focus recovery. Local validation and the app build also pass.",
      "Twenty-one bundled activities pass state, duration, safety, and default-filter coverage validation, with named human content approval for version 0.1.0 (1).",
      "November native view checks covered break start, finish, skip, Return-key activation, all three Settings tabs, disabled selectors and login-item control, light/dark appearance, and larger-text dark layout. A temporary window host exposed the actual SwiftUI views to automation; this does not verify exact menu-bar opening. Earlier July/September screenshots remain historical engineering evidence.",
    ],
    limitations: [
      "The November local build and test rerun passed after correcting the privacy manifest to property-list format. Launch at login is intentionally disabled in Debug/local builds. No signed release candidate, installable external beta, TestFlight build, or App Store listing is evidenced.",
      "Exact menu-bar opening, full keyboard traversal, VoiceOver speech, display accommodations beyond the recorded smoke checks, and signed-candidate notification, login-item, lifecycle, upgrade, and final-media checks remain open.",
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
      "Separated the catalog, pure ranking, persistence, and presentation state. Mutations read the latest stored state so a delayed swipe or stale Preferences screen cannot overwrite newer saves or filters.",
      "Used practical constraints and saved-category signals instead of opaque personalization or generated content.",
      "Kept the version-one loop local and deterministic, with compact filters, explicit empty-deck recovery, and a cancellable history-reset alert.",
    ],
    verification: [
      "Fifty bundled activities pass unique ID, unique title, schema, tagging, step-count, and content-quality validation.",
      "Seventeen unit tests and twelve UI tests passed on 5 November 2026 on iPhone 17e, covering catalog validation, ranking, persistence, swipes, details, filters, reset confirmation, Saved, and immediate relaunch state.",
      "Four iPhone 17 Pro Max dark-mode checks passed. After the metadata layout correction, the two screen and accessibility XXXL checks passed again on each phone; current captures were visually reviewed.",
    ],
    limitations: [
      "The project is a polished local MVP and portfolio proof point, not an App Store release or evidence of real-world retention or recommendation quality.",
      "Accounts, cloud sync, live events, required location, booking, payments, social planning, and AI-generated activities are intentionally outside version one.",
      "Physical haptic feel and spoken VoiceOver quality still require device-level review before a distribution claim.",
    ],
  },
  catchscan: {
    id: "catchscan",
    role: "Product UX, interface direction, design system work, Tailwind CSS, Atomic Design, and dashboard frontend",
    problem:
      "Help creators review copyright monitoring signals through a calmer, more structured workflow instead of making a dense dashboard the starting point.",
    user: "Creators and rights teams who need to understand ownership signals, review matches, and decide what to do next.",
    decisions: [
      "Organized monitoring data around ownership, status, and next action so the dashboard could support a repeatable review loop.",
      "Used reusable Atomic Design patterns to keep navigation, tables, filters, and status treatments consistent.",
      "Reduced visual competition between high-volume data and the actions that move a review forward.",
      "Carried the system into responsive layouts so the product stayed useful outside a wide desktop canvas.",
    ],
    verification: [
      "The dashboard concept demonstrates a reusable visual language across navigation, review states, and content density.",
      "The case study covers the design system decisions that made future product areas easier to extend.",
      "The interface was reviewed as a workflow, not only as a collection of polished screens.",
    ],
    limitations: [
      "This is an archived concept case study, not evidence of a current production deployment.",
      "The available material documents the interface direction and reusable patterns more than live product outcomes.",
    ],
  },
  askcody: {
    id: "askcody",
    role: "Enterprise UX, React and TypeScript interface work, Fluent UI patterns, information architecture, and responsive product design",
    problem:
      "Make desk booking, room availability, and workplace resources easier to find and act on inside Microsoft Teams without overwhelming enterprise users.",
    user: "People planning where and how to work, alongside workplace operators managing rooms, desks, and shared resources.",
    decisions: [
      "Grouped the workplace system around the decisions users make most often: find a place, understand availability, and confirm a booking.",
      "Used Fluent UI conventions to make the experience feel native to the Microsoft Teams environment.",
      "Kept navigation and resource states legible across a complex information architecture.",
      "Used reusable content and interaction patterns so the concept could scale beyond one booking flow.",
    ],
    verification: [
      "The concept maps a complex office-management system into a structured, navigable workflow.",
      "The interface direction keeps resource availability and next actions visible together.",
      "Responsive layouts were considered as part of the product system rather than as a final adjustment.",
    ],
    limitations: [
      "This is an archived enterprise concept and is not presented as a current Microsoft Teams integration.",
      "The available material focuses on interface and workflow direction rather than measured adoption or production telemetry.",
    ],
  },
  ess: {
    id: "ess",
    role: "UX/UI direction, information architecture, responsive web design, content strategy, usability testing, implementation, and SEO",
    problem:
      "Give American students a clearer way to understand European study options, application support, pricing, partner universities, and the practical reality of moving abroad.",
    user: "American students aged 18 and older who are exploring study abroad and need trustworthy information before they commit to a new path.",
    decisions: [
      "Started with research, personas, and the Five Planes method to connect organizational goals with student needs.",
      "Built the information architecture around services, universities, pricing, practical guidance, and contact paths.",
      "Used content structure and readable page templates to make a dense, trust-sensitive decision easier to navigate.",
      "Carried the system through responsive prototypes, implementation, usability checks, and SEO metadata.",
    ],
    verification: [
      "Five-second and think-aloud checks were used to evaluate first impressions and task clarity.",
      "The final direction brings research, client feedback, content, and responsive behavior into one information platform.",
      "The project documents a full design-to-code path from strategy and structure through implementation.",
    ],
    limitations: [
      "This is an archived project and does not claim current content, partner, or search-performance results.",
      "The case study preserves the design process and final direction rather than presenting a live service inventory.",
    ],
  },
};
