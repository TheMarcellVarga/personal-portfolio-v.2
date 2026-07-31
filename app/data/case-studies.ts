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
      "The complete product path is verified locally, not claimed as a public production service.",
      "External model calls and paid-provider comparisons remain disabled pending explicit cost and credential approval.",
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
