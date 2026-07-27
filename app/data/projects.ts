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
  status: "Working" | "Fixture-backed" | "Partial" | "Archived";
  portfolioPlacement: "featured" | "professional" | "archive";
};

export const projects: Project[] = [
  {
    title: "Aperture Financial Intelligence",
    subTitle: "Portfolio-aware research, risk, and goal intelligence",
    date: "2026",
    description:
      "A finance-product prototype for portfolio review, cited research briefs, goal scenarios, and risk explanation with clear decision-support boundaries.",
    highlight:
      "A polished product concept shown with deterministic fixture data and explicit advice boundaries.",
    skills: ["Next.js", "Go", "Clerk", "Supabase"],
    link: "/ai-finance",
    image: "/images/ai-finance/aperture-home.jpg",
    category: "Fintech product + AI safety",
    backgroundClass:
      "bg-[radial-gradient(circle_at_top_right,_rgba(103,232,249,0.3),_transparent_28%),linear-gradient(155deg,_#071112_0%,_#111820_52%,_#1f1a16_100%)]",
    status: "Fixture-backed",
    portfolioPlacement: "featured",
  },
  {
    title: "Wild Route",
    subTitle: "Prompt-first route planning for adventure travelers",
    date: "2026",
    description:
      "A prompt-first adventure travel-planning concept that turns a rough trip idea into ranked multi-stop routes with visible reasoning.",
    highlight:
      "A partial product build centered on deterministic route generation and an editorial interface for comparing route options.",
    skills: ["Next.js", "Supabase", "Stripe", "Vitest"],
    link: "/wild-route",
    image: "/images/wild-route/home.png",
    category: "Travel product + full stack",
    backgroundClass:
      "bg-[radial-gradient(circle_at_top_right,_rgba(214,255,64,0.32),_transparent_28%),linear-gradient(160deg,_#192018_0%,_#59634f_52%,_#d9ddd0_100%)]",
    status: "Partial",
    portfolioPlacement: "featured",
  },
  {
    title: "Professional product work",
    subTitle: "Frontend engineering for complex network products",
    date: "Current",
    description:
      "Confidential product work focused on translating complex requirements into clear, resilient interfaces for AXON Networks.",
    highlight:
      "Professional work is described at a high level to respect confidentiality while showing current product and engineering scope.",
    skills: ["React", "TypeScript", "Product delivery", "Design systems"],
    link: "/about",
    image: "/images/cinematic-profile-pic-sg.png",
    category: "Professional product work",
    backgroundClass:
      "bg-[radial-gradient(circle_at_top_right,_rgba(103,232,249,0.28),_transparent_28%),linear-gradient(155deg,_#071112_0%,_#111820_52%,_#1f1a16_100%)]",
    status: "Working",
    portfolioPlacement: "professional",
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
