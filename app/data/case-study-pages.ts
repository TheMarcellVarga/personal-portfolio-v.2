import type { CaseStudyId } from "./projects";

export type CaseStudyVisual = {
  src: string;
  alt: string;
  caption: string;
  fit?: "cover" | "contain";
  presentation?: "landscape" | "phone";
  wide?: boolean;
};

export type CaseStudyPageContent = {
  demoUrl?: string;
  demoLabel?: string;
  heroImage?: string;
  heroAlt?: string;
  heroAspect?: "16/9" | "16/10";
  heroScreens?: readonly {
    src: string;
    alt: string;
  }[];
  contextTitle: string;
  contextBody: string;
  processTitle?: string;
  processBody?: string;
  process?: readonly {
    title: string;
    body: string;
  }[];
  gallery: readonly CaseStudyVisual[];
};

export const caseStudyPages: Record<CaseStudyId, CaseStudyPageContent> = {
  "burnout3-ios": {
    heroImage: "/images/burnout3/xbox-hybrid-controls-20261023.webp",
    heroAlt: "Xbox-based Burnout 3 running on iPhone with the actual faint hybrid steering and driving controls",
    contextTitle: "A console racer, adapted for the way a phone is held.",
    contextBody: "An initial PS2 port evolved into an Xbox-based iOS prototype. The current local source simplifies the launcher and keeps verified imports and four touch preferences. Gameplay and enhanced display choices are disabled by default; October captures document the earlier prototype.",
    gallery: [
      {
        src: "/images/burnout3/xbox-hybrid-controls-20261023.webp",
        alt: "Xbox-based build 10 race start with subtle action-labelled touch controls",
        caption: "Historical iPhone capture · build 10 · 23 October 2026 · actual hybrid controls.",
        fit: "contain",
        wide: true,
      },
      {
        src: "/images/burnout3/xbox-pause-menu-20261023.webp",
        alt: "Original race pause menu with the injected IOS SETTINGS entry before Quit",
        caption: "Historical build 9 · the game menu opens native iOS settings while preserving its existing actions.",
        fit: "contain",
      },
      {
        src: "/images/burnout3/xbox-settings-20261023.webp",
        alt: "Native iOS settings with display preferences, control size and a Launcher action",
        caption: "Historical build 9 · persistent native settings and a route back to the launcher.",
        fit: "contain",
      },
      {
        src: "/images/burnout3/xbox-resume-launcher-20261023.webp",
        alt: "Native Burnout 3 launcher offering Resume game for the paused live session",
        caption: "Historical build 9 · Resume game preserves the current session in memory.",
        fit: "contain",
      },
    ],
  },
  aperture: {
    demoUrl: "https://ai-finance-two-bice.vercel.app/",
    demoLabel: "Visit web preview",
    heroImage: "/images/ai-finance/aperture-home-2026.jpg",
    heroAlt: "Aperture Financial Intelligence homepage introducing a calm private wealth research workspace",
    contextTitle: "One financial picture before many tools.",
    contextBody:
      "Aperture connects market context, holdings, contribution-only goal scenarios, and learning through five primary destinations. The latest local pass removes competing UI and disables unavailable actions so a smaller product is easier to use and demonstrate.",
    processTitle: "From feature expansion to a focused, working demo.",
    processBody:
      "The latest work simplified the product surface, restored the local services, and verified the core flows through Next.js, Go, and Postgres. External model calls stayed disabled.",
    process: [
      {
        title: "Set the product boundary",
        body: "I framed Aperture as financial organization, research, scenario planning, and education—not a broker, trading bot, or source of personalized advice. That decision shaped the language, data model, tools, and release criteria from the start.",
      },
      {
        title: "Find the smallest coherent map",
        body: "I consolidated the experience into Overview, Markets, Portfolio, Plan, and Learn. Research, risk, journals, and evaluations remain available where the decision calls for them instead of competing as equal navigation destinations.",
      },
      {
        title: "Build authoritative boundaries",
        body: "Next.js owns the product and AI experience while Go owns market normalization, calculations, ownership, rate limits, and audit behavior. The browser never receives raw provider, database, or model credentials.",
      },
      {
        title: "Make evidence a product feature",
        body: "The research path preserves page boundaries, retrieves owner-scoped passages, validates structured sections, and binds material claims to the active evidence run. Unsupported interpretation stays visible instead of receiving a decorative citation.",
      },
      {
        title: "Verify the real runtime",
        body: "I checked connected and empty states, disabled actions, provider-backed portfolio creation, goal calculations, document processing, and ownership isolation. A cold start also verified the API, web app, and persistent document worker.",
      },
    ],
    gallery: [
      {
        src: "/images/ai-finance/aperture-markets.jpg",
        alt: "Aperture cross-market monitor showing provider-backed market states, freshness, filters, and research controls",
        caption: "Earlier Markets capture. The latest local version prioritizes this table and makes geography optional; displayed figures are historical.",
        fit: "contain",
        wide: true,
      },
      {
        src: "/images/ai-finance/aperture-research.jpg",
        alt: "Aperture private research room with a structured earnings-review prompt and source-first empty state",
        caption: "Earlier research-room capture. The current local runtime was checked with a synthetic document upload, persistent processing, and cross-owner access denial.",
        fit: "contain",
        wide: true,
      },
      {
        src: "/images/ai-finance/aperture-learn.jpg",
        alt: "Aperture education workspace showing an evidence-led curriculum and account-scoped study record",
        caption: "Learning progress rewards evidence, repeatable process, and review discipline—not profit, prediction, or risk-taking.",
        fit: "contain",
        wide: true,
      },
    ],
  },
  "first-revenue-game": {
    demoUrl: "https://gamified-business-development.vercel.app",
    demoLabel: "Open public demo",
    contextTitle: "One mission, then proof.",
    contextBody:
      "First Revenue Game turns a broad ambition into one commercially specific mission. Progress is earned through submitted evidence and an explicit review loop, so the interface stays accountable to what has actually happened.",
    gallery: [
      {
        src: "/images/first-revenue-game/proof-pending.jpg",
        alt: "First Revenue Game member proof pending review state",
        caption: "The pending state preserves exactly what the operator needs to review.",
      },
      {
        src: "/images/first-revenue-game/operator-review.jpg",
        alt: "First Revenue Game operator proof review queue",
        caption: "Member evidence, outcome signal, notes, and supported unlocks stay together.",
      },
      {
        src: "/images/first-revenue-game/operations.jpg",
        alt: "First Revenue Game operations dashboard",
        caption: "The release story closes on observable workflow health, not only a polished shell.",
      },
    ],
  },
  "wild-route": {
    demoUrl: "https://ai-travel-planner-psi-five.vercel.app",
    demoLabel: "Open public demo",
    heroImage: "/images/wild-route/home-november-2026.jpg",
    heroAlt: "Wild Route landing page introducing explainable adventure route planning",
    heroAspect: "16/10",
    contextTitle: "A calm interface for a dense decision.",
    contextBody:
      "Wild Route starts with the traveler's intent, then exposes route reasoning, confidence, estimate boundaries, and provider handoffs at the point of choice. The November local demo removes secondary UI, restores the interactive globe with an ordered journey fallback, and disables unavailable account features.",
    processTitle: "How intent becomes a route.",
    processBody:
      "I treated route generation as a product pipeline rather than a chat response. Each stage narrows uncertainty, preserves the planning boundary, and leaves the traveler with something they can inspect before continuing elsewhere.",
    process: [
      {
        title: "Set an honest product boundary",
        body: "I defined Wild Route as planning and decision support—not an agency or booking engine. Prices remain estimates, availability belongs to external providers, and the interface keeps freshness, confidence, and assumptions close to every recommendation.",
      },
      {
        title: "Turn intent into a structured brief",
        body: "The prompt is normalized into origin, trip length, route shape, stop limit, budget posture, travel wishes, and exclusions. Optional controls stay behind a disclosure; schema validation precedes route scoring.",
      },
      {
        title: "Compose and rank complete routes",
        body: "Deterministic logic evaluates direct, one-stop, and two-stop journeys, calculates round-trip legs and planning costs, then explains why each stop earned its place. Free-plan promotion limits remain enforced after scoring.",
      },
      {
        title: "Design for fallbacks and handoff",
        body: "Provider and media adapters can degrade to disclosed fixtures without breaking the route. Save, share, and booking handoff flows preserve ownership and privacy boundaries, then local verification covers accessibility, reduced motion, failure states, session isolation, and the demo golden path.",
      },
    ],
    gallery: [
      {
        src: "/images/wild-route/compose-november-2026.jpg",
        alt: "Wild Route route composer showing an open trip brief with optional preferences collapsed",
        caption: "A plain-language brief becomes explicit origin, duration, route-shape, stop, budget, and wish constraints before composition.",
      },
      {
        src: "/images/wild-route/planner-november-2026.jpg",
        alt: "Wild Route ranked planner showing an ordered journey, route alternatives, app confidence, and price status",
        caption: "The November 5 screenshot shows the fallback journey view; the interactive globe has since been restored locally.",
        wide: true,
      },
      {
        src: "/images/wild-route/share-november-2026.jpg",
        alt: "Wild Route published route preview with journey breakdown and planning estimate disclosures",
        caption: "The published view shares a sanitized route snapshot while keeping costs, freshness, and external-provider boundaries explicit.",
        wide: true,
      },
    ],
  },
  threadscribe: {
    contextTitle: "Keep the source close to the draft.",
    contextBody:
      "ThreadScribe treats raw speech, provider state, transformed output, retention, and recovery as first-class parts of the same product. The useful artifact is only trustworthy when the path that produced it remains inspectable.",
    gallery: [
      {
        src: "/images/threadscribe/raw-transcript.png",
        alt: "ThreadScribe raw timestamped transcript view",
        caption: "Timestamped source segments stay available beside the transformed work.",
      },
      {
        src: "/images/threadscribe/transformed-output.png",
        alt: "ThreadScribe transformed transcript output",
        caption: "The output is useful without pretending a sample transform is a live model result.",
      },
      {
        src: "/images/threadscribe/worker-failure.png",
        alt: "ThreadScribe recoverable worker failure state",
        caption: "Failure preserves prior work and gives the user a clear recovery path.",
      },
    ],
  },
  focusin: {
    heroImage: "/images/focusin/focusin-loop-hero.webp",
    heroAlt: "Focusin moving from a focus interval into an active micro-break",
    contextTitle: "A small reset that knows when to get out of the way.",
    contextBody:
      "Focusin turns a focus deadline into one state-aware micro-break. The product keeps the loop local, optional, and resilient across sleep, relaunch, permission changes, and the imperfect timing of desktop work.",
    process: [
      {
        title: "Find the smallest useful loop",
        body: "I reduced the product to one repeatable transition: focus, notice the deadline, take one suitable reset, and return. Accounts, streaks, task management, and remote content stayed outside version one.",
      },
      {
        title: "Model time as durable state",
        body: "The interaction was mapped as a date-derived state machine before visual polish. Persisted deadlines let the app reconcile honestly after sleep, relaunch, delayed timers, and clock changes.",
      },
      {
        title: "Make recommendations inspectable",
        body: "A reviewed 21-activity catalog and ordered fallback policy separate hard safety preferences from softer state, duration, and novelty matching—without remote generation.",
      },
      {
        title: "Prove the uncomfortable states",
        body: "The November pass removed duplicate controls and beta-only UI, locked selectors during active breaks, and added Start Focus recovery when no activity is available. Native view smoke checks and 58 deterministic tests support the local build; signed integrations remain a release gate.",
      },
    ],
    gallery: [
      {
        src: "/images/focusin/break-sequence.webp",
        alt: "Focusin macOS micro-break recommendation",
        caption: "Historical September UI showing the transition from break due to an active reset; the November app removes duplicate status and progress displays.",
      },
      {
        src: "/images/focusin/settings-and-resilience.webp",
        alt: "Focusin activity and system settings showing local preferences and recovery",
        caption: "Historical July Settings. The current app has three tabs, while launch at login is disabled in local builds.",
        wide: true,
      },
    ],
  },
  "endless-activity": {
    heroScreens: [
      {
        src: "/images/endless-activity/detail-november-2026.png",
        alt: "Endless Activity activity detail sheet with steps and safety guidance",
      },
      {
        src: "/images/endless-activity/discover-november-2026.png",
        alt: "Endless Activity Discover deck with a realistic activity and visible save and skip controls",
      },
      {
        src: "/images/endless-activity/preferences-november-2026.png",
        alt: "Endless Activity native preference controls for practical activity constraints",
      },
    ],
    contextTitle: "A quick choice for the moment between plans.",
    contextBody:
      "Endless Activity opens directly into a tactile, local-first deck. Save, skip, filtering, and recovery are visible as part of the same interaction, while deterministic ranking keeps the recommendation understandable and private.",
    processTitle: "From restraint to a dependable loop.",
    processBody:
      "The work moved from a deliberately narrow product promise to deterministic architecture, inclusive interaction, and verified recovery states.",
    process: [
      {
        title: "Protect the smallest useful loop",
        body: "I reduced the product to one immediate suggestion, save, skip, practical filters, and a durable Saved list. Accounts, location, live events, booking, and generated content stayed outside version one.",
      },
      {
        title: "Make the catalog deterministic",
        body: "I defined a 50-activity schema, validation rules, pure eligibility filters, transparent preference boosts, and seeded ordering so the deck could vary without becoming opaque or difficult to test.",
      },
      {
        title: "Prototype the gesture as a system",
        body: "The swipe interaction was built with threshold and velocity commits, spring-back cancellation, visible Save and Skip controls, haptics, named VoiceOver actions, and Reduce Motion behavior.",
      },
      {
        title: "Finish the recovery paths",
        body: "I treated exhausted decks, filter conflicts, saved removal, destructive reset, relaunch persistence, large text, and dark appearance as part of the core experience rather than cleanup work.",
      },
    ],
    gallery: [
      {
        src: "/images/endless-activity/discover-november-2026.png",
        alt: "Endless Activity Discover activity deck",
        caption: "The app opens on one concrete activity with visible alternatives to the swipe gesture.",
        presentation: "phone",
      },
      {
        src: "/images/endless-activity/detail-november-2026.png",
        alt: "Endless Activity activity detail view",
        caption: "The native detail sheet adds materials, steps, and safety guidance only when needed.",
        presentation: "phone",
      },
      {
        src: "/images/endless-activity/saved-november-2026.png",
        alt: "Endless Activity saved activity collection",
        caption: "Saved activities remain a useful return path instead of disappearing into a feed.",
        presentation: "phone",
      },
      {
        src: "/images/endless-activity/preferences-november-2026.png",
        alt: "Endless Activity preference controls",
        caption: "Practical filters shape the deck without turning first launch into onboarding.",
        presentation: "phone",
      },
    ],
  },
  catchscan: {
    contextTitle: "Make monitoring signals easier to act on.",
    contextBody:
      "CatchScan is an early product UX study in turning copyright monitoring into a repeatable review workflow. The visual system gives dense ownership signals a clearer hierarchy and keeps the next action close to the evidence.",
    gallery: [
      {
        src: "/images/legacy/CS-Images/Figure11.png",
        alt: "CatchScan copyright monitoring interface",
        caption: "The review workflow separates monitoring detail from the action that follows it.",
      },
      {
        src: "/images/legacy/CS-Images/Figure13.png",
        alt: "CatchScan copyright monitoring dashboard detail",
        caption: "Reusable interface patterns keep high-volume product states consistent.",
      },
    ],
  },
  askcody: {
    contextTitle: "A complex workplace system with a simpler path through it.",
    contextBody:
      "AskCody explores how desk booking, room availability, and workplace resources can feel native inside Microsoft Teams. The system is organized around what people need to decide, not around the complexity of the underlying inventory.",
    gallery: [
      {
        src: "/images/legacy/AC-Images/Figure11.png",
        alt: "AskCody workplace management interface",
        caption: "Resource availability and the next booking action share the same view.",
      },
      {
        src: "/images/legacy/AC-Images/Figure14.jpg",
        alt: "AskCody Microsoft Teams workplace management detail",
        caption: "Fluent UI patterns help the concept sit naturally inside an enterprise product environment.",
      },
    ],
  },
  ess: {
    contextTitle: "Information architecture as a confidence system.",
    contextBody:
      "European Study Solution needed more than a polished landing page. It needed a readable information platform that could help students compare services, universities, costs, and practical next steps while building trust over time.",
    gallery: [
      {
        src: "/images/legacy/ESS-Images/Picture 13.2.png",
        alt: "European Study Solution final website direction",
        caption: "The final direction brings research, client feedback, and content structure together.",
      },
      {
        src: "/images/legacy/ESS-Images/Picture 14.2.png",
        alt: "European Study Solution responsive website prototype",
        caption: "Responsive prototypes preserve the same information hierarchy on smaller screens.",
      },
      {
        src: "/images/legacy/ESS-Images/Picture 15.png",
        alt: "European Study Solution SEO and website detail",
        caption: "Implementation and SEO were treated as part of the product, not postscript work.",
      },
    ],
  },
};
