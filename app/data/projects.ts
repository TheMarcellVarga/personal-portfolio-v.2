export type CaseStudyId =
  | "aperture"
  | "first-revenue-game"
  | "wild-route"
  | "threadscribe"
  | "focusin"
  | "endless-activity";

export type Project = {
  title: string;
  subTitle: string;
  date: string;
  description: string;
  highlight: string;
  skills: string[];
  link: string;
  image: string;
  category: string;
  backgroundClass: string;
  status:
    | "Working"
    | "Local release-ready"
    | "Deployed demo"
    | "Fixture-backed"
    | "Locally verified"
    | "Configured runtime verified"
    | "In progress"
    | "Partial"
    | "Archived";
  portfolioPlacement: "featured" | "supporting" | "archive";
  caseStudyId?: CaseStudyId;
};

export const projects: Project[] = [
  {
    title: "Aperture Financial Intelligence",
    subTitle: "Evidence-led financial research with human approval",
    date: "2026",
    description:
      "A full-stack financial research workspace that turns private source documents into cited, reviewable analysis without crossing into trade execution or personal advice.",
    highlight:
      "The complete local workflow covers upload, retrieval, structured analysis, citation inspection, human approval, and reviewed export.",
    skills: ["Next.js", "Go", "Supabase", "AI evaluation"],
    link: "/ai-finance",
    image: "/images/ai-finance/aperture-home.jpg",
    category: "Fintech systems + trustworthy AI",
    backgroundClass:
      "bg-[radial-gradient(circle_at_top_right,_rgba(103,232,249,0.3),_transparent_28%),linear-gradient(155deg,_#071112_0%,_#111820_52%,_#1f1a16_100%)]",
    status: "Local release-ready",
    portfolioPlacement: "featured",
    caseStudyId: "aperture",
  },
  {
    title: "First Revenue Game",
    subTitle: "Commercial proof, operator review, and reliable progression",
    date: "2026",
    description:
      "A social execution product that helps solo builders turn one monetizable skill into first-revenue evidence through focused missions, accountable proof, and operator review.",
    highlight:
      "A configured vertical slice connects the Next.js product shell to an authoritative Java/Spring workflow, transactional outbox, replay-safe events, scoped artifacts, and operational evidence.",
    skills: ["Next.js", "Java / Spring", "PostgreSQL", "Kafka", "OpenTelemetry"],
    link: "/first-revenue-game",
    image: "/images/first-revenue-game/member-dashboard.jpg",
    category: "Enterprise product + event-driven systems",
    backgroundClass:
      "bg-[radial-gradient(circle_at_top_right,_rgba(239,178,86,0.34),_transparent_28%),linear-gradient(155deg,_#0c1820_0%,_#18343b_52%,_#725232_100%)]",
    status: "Configured runtime verified",
    portfolioPlacement: "featured",
    caseStudyId: "first-revenue-game",
  },
  {
    title: "Wild Route",
    subTitle: "Prompt-first route planning for adventure travelers",
    date: "2026",
    description:
      "A deployed prompt-first travel planner that turns a rough adventure brief into ranked multi-stop routes with visible reasoning, estimates, and booking boundaries.",
    highlight:
      "An end-to-end product-engineering case study spanning interaction design, deterministic route logic, secure data boundaries, accessibility, testing, and a serverless production repair.",
    skills: ["Next.js", "TypeScript", "Supabase RLS", "Stripe", "Playwright"],
    link: "/wild-route",
    image: "/images/wild-route/home.png",
    category: "Product engineering + applied AI UX",
    backgroundClass:
      "bg-[radial-gradient(circle_at_top_right,_rgba(214,255,64,0.32),_transparent_28%),linear-gradient(160deg,_#192018_0%,_#59634f_52%,_#d9ddd0_100%)]",
    status: "Deployed demo",
    portfolioPlacement: "featured",
    caseStudyId: "wild-route",
  },
  {
    title: "ThreadScribe Studio",
    subTitle: "Trustworthy AI transcript interaction, built local-first",
    date: "2026",
    description:
      "A local-first transcript workspace that keeps raw speech, AI drafts, provider state, retention, and failure recovery visible throughout the workflow.",
    highlight:
      "The verified lifecycle covers audio capture, timestamped transcription, structured transforms, local persistence, safe export, and recoverable worker failure.",
    skills: ["Next.js", "TypeScript", "SQLite", "AI evaluation"],
    link: "/threadscribe",
    image: "/images/threadscribe/transformed-output.png",
    category: "Trustworthy AI + frontend systems",
    backgroundClass:
      "bg-[radial-gradient(circle_at_top_right,_rgba(99,206,194,0.28),_transparent_28%),linear-gradient(155deg,_#071312_0%,_#10201f_52%,_#233332_100%)]",
    status: "Local release-ready",
    portfolioPlacement: "supporting",
    caseStudyId: "threadscribe",
  },
  {
    title: "Focusin",
    subTitle: "A native macOS focus-and-reset loop",
    date: "2026",
    description:
      "A local-first SwiftUI menu bar app that turns a focus deadline into one state-aware micro-break, then gets out of the way.",
    highlight:
      "The verified product work spans a date-derived state machine, curated recommendation policy, resilient platform integrations, accessibility behavior, and local persistence.",
    skills: ["SwiftUI", "Swift", "macOS", "Accessibility"],
    link: "/focusin",
    image: "/images/focusin/light-focusing.png",
    category: "Native macOS product",
    backgroundClass:
      "bg-[radial-gradient(circle_at_top_right,_rgba(48,132,255,0.32),_transparent_28%),linear-gradient(160deg,_#102347_0%,_#245da8_52%,_#dce8f8_100%)]",
    status: "Locally verified",
    portfolioPlacement: "featured",
    caseStudyId: "focusin",
  },
  {
    title: "Endless Activity",
    subTitle: "A native iOS activity deck for the moment between plans",
    date: "2026",
    description:
      "A local-first SwiftUI product that turns boredom into a quick, realistic choice through a curated swipe deck and practical filters.",
    highlight:
      "The supporting case study connects interaction craft to deterministic ranking, local persistence, accessibility alternatives, testing, and deliberate product restraint.",
    skills: ["SwiftUI", "Swift", "iOS", "Accessibility"],
    link: "/endless-activity",
    image: "/images/endless-activity/discover.png",
    category: "Native iOS product craft",
    backgroundClass:
      "bg-[radial-gradient(circle_at_top_right,_rgba(255,91,82,0.34),_transparent_30%),linear-gradient(160deg,_#111820_0%,_#202a35_48%,_#f4eee8_100%)]",
    status: "Locally verified",
    portfolioPlacement: "supporting",
    caseStudyId: "endless-activity",
  },
  {
    title: "CatchScan",
    subTitle: "Copyright protection SaaS",
    date: "2021",
    description:
      "A dashboard concept for automated copyright monitoring that helps creators review ownership signals through a clear workflow.",
    highlight:
      "An early example of translating dense product logic into a structured interface and reusable design patterns.",
    skills: ["Design System", "Tailwind CSS", "Atomic Design"],
    link: "/catchscan",
    image: "/images/catchscan-index.png",
    category: "Product UX + frontend",
    backgroundClass:
      "bg-[radial-gradient(circle_at_top_left,_rgba(99,174,255,0.35),_transparent_30%),linear-gradient(160deg,_#d9e8ff_0%,_#cfe0ef_50%,_#bad4e4_100%)]",
    status: "Archived",
    portfolioPlacement: "archive",
  },
  {
    title: "AskCody",
    subTitle: "Hybrid office management in Microsoft Teams",
    date: "2022",
    description:
      "A hybrid workplace concept for desk booking, room availability, and resource management inside Microsoft Teams.",
    highlight:
      "The challenge was keeping a complex system fast, legible, and easy to move through.",
    skills: ["TypeScript", "React", "Fluent UI", "Enterprise UX"],
    link: "/askcody",
    image: "/images/askcody-index.png",
    category: "Enterprise product",
    backgroundClass:
      "bg-[radial-gradient(circle_at_top_right,_rgba(76,214,255,0.28),_transparent_26%),linear-gradient(160deg,_#d8f5ff_0%,_#dce8ff_52%,_#c8dde8_100%)]",
    status: "Archived",
    portfolioPlacement: "archive",
  },
  {
    title: "European Study Solution",
    subTitle: "Student agency and information platform",
    date: "2021",
    description:
      "A content-rich website for American students exploring education in Europe, designed to build trust and make a complex decision easier to navigate.",
    highlight:
      "An early project centered on information architecture, responsive design, and trust through clear content.",
    skills: ["HTML", "CSS", "JavaScript", "SEO"],
    link: "/ess",
    image: "/images/ess-index.png",
    category: "Editorial web experience",
    backgroundClass:
      "bg-[radial-gradient(circle_at_20%_20%,_rgba(120,197,255,0.26),_transparent_28%),linear-gradient(160deg,_#ebf4ff_0%,_#dbe7f2_50%,_#cedee8_100%)]",
    status: "Archived",
    portfolioPlacement: "archive",
  },
];

export const projectStatusByCaseStudyId = projects.reduce(
  (statusByCaseStudyId, project) => {
    if (project.caseStudyId) {
      statusByCaseStudyId[project.caseStudyId] = project.status;
    }
    return statusByCaseStudyId;
  },
  {} as Record<CaseStudyId, Project["status"]>,
);
