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
    role: "Independent product direction, UX/UI, Next.js frontend, route/API architecture, security boundaries, testing, and deployment",
    problem:
      "Turn an open-ended adventure brief into a small, explainable set of route options without presenting planning estimates, fixture data, or external booking handoffs as confirmed travel inventory.",
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
      "The public deployment is a portfolio demo: route metadata is fixture-backed, prices are planning estimates, and generation is deterministic rather than a live LLM.",
      "Live managed Supabase, Stripe, email, and travel-provider integrations remain intentionally unconfigured; booking completes on external provider sites.",
      "Demo saves use browser-local storage and previews use schema-validated stateless recipes, not cross-device account persistence.",
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
