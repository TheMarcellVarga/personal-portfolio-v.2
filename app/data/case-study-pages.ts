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
  aperture: {
    demoUrl: "https://ai-finance-two-bice.vercel.app/",
    demoLabel: "Visit Aperture",
    heroImage: "/images/ai-finance/aperture-home-2026.jpg",
    heroAlt: "Aperture Financial Intelligence homepage introducing a calm private wealth research workspace",
    contextTitle: "One financial picture before many tools.",
    contextBody:
      "Aperture connects the portfolio, provider-backed market context, private source material, planning assumptions, and the next useful question. It does not try to make uncertainty disappear. It makes the reasoning easier to inspect and revisit.",
    processTitle: "From a broad fintech idea to one inspectable system.",
    processBody:
      "The work moved from product restraint and information architecture into secure data boundaries, evidence-grounded AI, failure states, and finally a quieter visual language that could hold dense information without feeling like a trading terminal.",
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
        title: "Test the uncomfortable states",
        body: "I treated missing providers, empty portfolios, stale prices, unsafe prompts, cross-owner access, malformed output, rejected citations, and reduced-motion behavior as core product states, then captured release evidence around them.",
      },
    ],
    gallery: [
      {
        src: "/images/ai-finance/aperture-markets.jpg",
        alt: "Aperture cross-market monitor showing provider-backed market states, freshness, filters, and research controls",
        caption: "The market monitor keeps timeframe, provider freshness, confirmed state, flip distance, and study links together while labeling every indicator as research context—not a trade signal.",
        fit: "contain",
        wide: true,
      },
      {
        src: "/images/ai-finance/aperture-research.jpg",
        alt: "Aperture private research room with a structured earnings-review prompt and source-first empty state",
        caption: "The research room makes the sequence explicit: add authorized source material, preserve page boundaries, retrieve evidence, then allow structured interpretation.",
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
    heroImage: "/images/wild-route/home-2026.jpg",
    heroAlt: "Wild Route landing page introducing explainable adventure route planning",
    heroAspect: "16/10",
    contextTitle: "A calm interface for a dense decision.",
    contextBody:
      "Wild Route starts with the traveler's intent, then exposes route reasoning, confidence, estimate boundaries, and provider handoffs at the point of choice. The experience stays useful even when live providers or immersive media are unavailable.",
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
        body: "The prompt is normalized into origin, trip length, route shape, stop limit, budget posture, travel wishes, and exclusions. Schema validation happens before the system selects or scores a destination.",
      },
      {
        title: "Compose and rank complete routes",
        body: "Deterministic logic evaluates direct, one-stop, and two-stop journeys, calculates round-trip legs and planning costs, then explains why each stop earned its place. Free-plan promotion limits remain enforced after scoring.",
      },
      {
        title: "Design for fallbacks and handoff",
        body: "Provider and media adapters can degrade to disclosed fixtures without breaking the route. Save, share, and booking handoff flows preserve ownership and privacy boundaries, then verification covers accessibility, reduced motion, failure states, and the hosted golden path.",
      },
    ],
    gallery: [
      {
        src: "/images/wild-route/compose-2026.jpg",
        alt: "Wild Route route composer showing a structured travel brief beside the generated route globe",
        caption: "A plain-language brief becomes explicit origin, duration, route-shape, stop, budget, and wish constraints before composition.",
      },
      {
        src: "/images/wild-route/planner-2026.jpg",
        alt: "Wild Route ranked planner showing a round-trip route on the globe with weather, confidence, and estimate status",
        caption: "Ranked complete routes keep route shape, confidence, current conditions, sources, and estimate status visible together.",
        wide: true,
      },
      {
        src: "/images/wild-route/share-2026.jpg",
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
        body: "The release work concentrated on permission denial, quiet hours, invalid content, large text, contrast, reduced transparency, and service failures—not only the ideal timer path.",
      },
    ],
    gallery: [
      {
        src: "/images/focusin/break-sequence.webp",
        alt: "Focusin macOS micro-break recommendation",
        caption: "The lifecycle changes clearly from break due to one active, time-bounded reset.",
      },
      {
        src: "/images/focusin/settings-and-resilience.webp",
        alt: "Focusin activity and system settings showing local preferences and recovery",
        caption: "Preferences shape the recommendation while platform-service failure stays recoverable and non-blocking.",
        wide: true,
      },
    ],
  },
  "endless-activity": {
    heroScreens: [
      {
        src: "/images/endless-activity/detail.png",
        alt: "Endless Activity activity detail sheet with steps and safety guidance",
      },
      {
        src: "/images/endless-activity/discover.png",
        alt: "Endless Activity Discover deck with a realistic activity and visible save and skip controls",
      },
      {
        src: "/images/endless-activity/preferences.png",
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
        src: "/images/endless-activity/discover.png",
        alt: "Endless Activity Discover activity deck",
        caption: "The app opens on one concrete activity with visible alternatives to the swipe gesture.",
        presentation: "phone",
      },
      {
        src: "/images/endless-activity/detail.png",
        alt: "Endless Activity activity detail view",
        caption: "The native detail sheet adds materials, steps, and safety guidance only when needed.",
        presentation: "phone",
      },
      {
        src: "/images/endless-activity/saved.png",
        alt: "Endless Activity saved activity collection",
        caption: "Saved activities remain a useful return path instead of disappearing into a feed.",
        presentation: "phone",
      },
      {
        src: "/images/endless-activity/preferences.png",
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
