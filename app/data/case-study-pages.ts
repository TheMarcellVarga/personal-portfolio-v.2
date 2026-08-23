import type { CaseStudyId } from "./projects";

export type CaseStudyVisual = {
  src: string;
  alt: string;
  caption: string;
  fit?: "cover" | "contain";
};

export type CaseStudyPageContent = {
  demoUrl?: string;
  demoLabel?: string;
  contextTitle: string;
  contextBody: string;
  gallery: readonly CaseStudyVisual[];
};

export const caseStudyPages: Record<CaseStudyId, CaseStudyPageContent> = {
  aperture: {
    demoUrl: "https://ai-finance-two-bice.vercel.app/demo",
    demoLabel: "Open guided demo",
    contextTitle: "Research with a visible chain of evidence.",
    contextBody:
      "Aperture keeps source documents, retrieval evidence, structured analysis, human edits, and reviewed export in one workflow. The product does not try to make uncertainty disappear. It makes the work easier to challenge.",
    gallery: [
      {
        src: "/images/ai-finance/aperture-product.jpg",
        alt: "Aperture Financial Intelligence research workspace",
        caption: "The research workspace keeps citations and review state close to the analysis.",
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
    contextTitle: "A calm interface for a dense decision.",
    contextBody:
      "Wild Route starts with the traveler's intent, then exposes route reasoning, confidence, estimate boundaries, and provider handoffs at the point of choice. The experience stays useful even when live providers or immersive media are unavailable.",
    gallery: [
      {
        src: "/images/wild-route/planner.png",
        alt: "Wild Route selected route planner with ranking reasons",
        caption: "Ranked alternatives make the route logic inspectable before a traveler commits.",
      },
      {
        src: "/images/wild-route/planner-mobile.png",
        alt: "Wild Route mobile route planner",
        caption: "The mobile sequence keeps route order, reasons, estimates, and actions intact.",
        fit: "contain",
      },
      {
        src: "/images/wild-route/share-mobile.png",
        alt: "Wild Route mobile route sharing view",
        caption: "Sharing is bounded to an explicit preview instead of exposing the original prompt.",
        fit: "contain",
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
    contextTitle: "A small reset that knows when to get out of the way.",
    contextBody:
      "Focusin turns a focus deadline into one state-aware micro-break. The product keeps the loop local, optional, and resilient across sleep, relaunch, permission changes, and the imperfect timing of desktop work.",
    gallery: [
      {
        src: "/images/focusin/light-breaking.png",
        alt: "Focusin macOS micro-break recommendation",
        caption: "The break state offers one useful action instead of another dashboard to manage.",
      },
      {
        src: "/images/focusin/dark-settings-reminder.png",
        alt: "Focusin macOS settings reminder in dark mode",
        caption: "Platform settings remain supportive context rather than a blocker to the core loop.",
      },
    ],
  },
  "endless-activity": {
    contextTitle: "A quick choice for the moment between plans.",
    contextBody:
      "Endless Activity opens directly into a tactile, local-first deck. Save, skip, filtering, and recovery are visible as part of the same interaction, while deterministic ranking keeps the recommendation understandable and private.",
    gallery: [
      {
        src: "/images/endless-activity/saved.png",
        alt: "Endless Activity saved activity collection",
        caption: "Saved activities remain a useful return path instead of disappearing into a feed.",
        fit: "contain",
      },
      {
        src: "/images/endless-activity/detail.png",
        alt: "Endless Activity activity detail view",
        caption: "The detail view gives enough context to decide without adding onboarding.",
        fit: "contain",
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
