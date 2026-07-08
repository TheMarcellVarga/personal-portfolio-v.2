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
  inProgress?: boolean;
};

export const projects: Project[] = [
  {
    title: "Aperture Financial Intelligence",
    subTitle: "Portfolio-aware research, risk, and goal intelligence",
    date: "2026",
    description:
      "A recruiter-grade fintech workspace for portfolio review, cited AI briefs, goal scenarios, risk explanation, billing, and security-aware research flows.",
    highlight:
      "A premium dark fintech product with Clerk auth, Go-backed finance APIs, Supabase persistence, deterministic AI fixture mode, and explicit advice boundaries.",
    skills: ["Next.js", "Go", "Clerk", "Supabase"],
    link: "/ai-finance",
    image: "/images/ai-finance/aperture-home.jpg",
    category: "Fintech product + AI safety",
    backgroundClass:
      "bg-[radial-gradient(circle_at_top_right,_rgba(103,232,249,0.3),_transparent_28%),linear-gradient(155deg,_#071112_0%,_#111820_52%,_#1f1a16_100%)]",
  },
  {
    title: "Wild Route",
    subTitle: "Prompt-first route planning for adventure travelers",
    date: "2026",
    description:
      "A prompt-first adventure travel planner that turns a rough trip idea into ranked, shareable multi-stop routes with reasoning and external booking handoffs.",
    highlight:
      "A production-style Next.js app with deterministic route generation, Supabase-backed saves, public share pages, account controls, and Stripe billing routes.",
    skills: ["Next.js", "Supabase", "Stripe", "Vitest"],
    link: "/wild-route",
    image: "/images/wild-route/home.png",
    category: "Travel product + full stack",
    backgroundClass:
      "bg-[radial-gradient(circle_at_top_right,_rgba(214,255,64,0.32),_transparent_28%),linear-gradient(160deg,_#192018_0%,_#59634f_52%,_#d9ddd0_100%)]",
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
  },
  {
    title: "Upcoming Projects",
    subTitle: "New chapter, new experiments",
    date: "In Progress",
    description:
      "New projects are taking shape around a stronger engineering stack, AI-aware product flows, and a sharper point of view.",
    highlight:
      "The next additions will reflect the work I want to keep doing: product-focused, technically grounded, and distinct.",
    skills: ["Coming Soon"],
    link: "https://github.com/TheMarcellVarga",
    image: "/images/personalpageprofilealt.png",
    category: "Now building",
    backgroundClass:
      "bg-[radial-gradient(circle_at_40%_20%,_rgba(56,188,255,0.28),_transparent_26%),linear-gradient(160deg,_#e1f3ff_0%,_#d7eaf1_52%,_#bdd7df_100%)]",
    inProgress: true,
  },
];
