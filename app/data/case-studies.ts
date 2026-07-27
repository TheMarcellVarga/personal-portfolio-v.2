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
    role: "Product concept, interaction design, and frontend representation",
    problem:
      "Make portfolio research, risk context, and goal scenarios easier to review without implying trade execution or personal advice.",
    user: "People reviewing investment information who need visible sources, freshness, and decision boundaries.",
    decisions: [
      "Keep research support separate from trade execution and advice.",
      "Show provider freshness and unavailable states instead of estimates.",
      "Use deterministic fixtures for repeatable portfolio demonstrations.",
    ],
    verification: [
      "Current portfolio routes build and render with reserved screenshot media.",
      "Research-only guardrails are visible in the case-study interface.",
    ],
    limitations: [
      "The public source repository was unavailable during the portfolio audit.",
      "The portfolio representation uses deterministic fixture data.",
    ],
  },
  "wild-route": {
    id: "wild-route",
    role: "Product direction, interaction design, and frontend implementation",
    problem:
      "Turn an open-ended travel brief into a smaller, explainable set of route options rather than an endless destination list.",
    user: "Adventure travelers comparing pace, climate, budget, and detours before booking elsewhere.",
    decisions: [
      "Start from intent rather than a destination-first search form.",
      "Keep route ranking reasons and estimate boundaries visible.",
      "Use a deterministic scoring spine before live provider enrichment.",
    ],
    verification: [
      "Current portfolio routes build and render with real project media.",
      "The selected-route flow is represented with responsive screenshots.",
    ],
    limitations: [
      "This is a partial project, not a claimed production service.",
      "The linked public source repository was unavailable during the audit.",
    ],
  },
  "professional-product-work": {
    id: "professional-product-work",
    role: "Product-focused frontend engineering in a confidential environment",
    problem:
      "Translate complex product requirements into clear, resilient interfaces while keeping implementation details confidential.",
    user: "Product teams and customers working through complex network-product workflows.",
    decisions: [
      "Use component systems to keep product decisions consistent in implementation.",
      "Work across UX, frontend delivery, and AI-aware workflow exploration.",
      "Describe outcomes at a high level without exposing proprietary material.",
    ],
    verification: [
      "Current role and responsibilities are represented without confidential screenshots.",
      "The portfolio separates this work from independently verifiable prototypes.",
    ],
    limitations: [
      "Screenshots, code, customer data, and detailed metrics are intentionally omitted.",
      "This page is an evidence summary, not a public project repository.",
    ],
  },
};
