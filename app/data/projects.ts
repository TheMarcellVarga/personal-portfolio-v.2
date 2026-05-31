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
    subTitle: "AI financial research and portfolio decision support",
    date: "2026",
    description:
      "A financial research and portfolio decision-support workspace with portfolio, watchlist, deterministic research, goal-scenario, risk-review, settings, and billing surfaces.",
    highlight:
      "This project shows a calm fintech interface with explicit product boundaries: visible freshness, research-only framing, unavailable states, citations, and scenario planning without trade execution.",
    skills: ["Next.js", "Go", "Vercel AI SDK", "Supabase"],
    link: "/ai-finance",
    image: "/images/ai-finance/aperture-home.jpg",
    category: "AI fintech product",
    backgroundClass:
      "bg-[radial-gradient(circle_at_top_right,_rgba(103,232,249,0.3),_transparent_28%),linear-gradient(155deg,_#071112_0%,_#111820_52%,_#1f1a16_100%)]",
  },
  {
    title: "Wild Route",
    subTitle: "Prompt-first travel planning for adventure nomads",
    date: "2026",
    description:
      "A full-stack travel planning product that turns an open-ended trip brief into a ranked set of one-way journeys, with clear tradeoffs, save and share flows, and a path to booking.",
    highlight:
      "Wild Route brings my current product approach together: an opinionated visual language, a focused planning workflow, and production-minded engineering across the interface, data model, auth, and billing layers.",
    skills: ["Next.js", "Supabase", "Stripe", "Product UX"],
    link: "/wild-route",
    image: "/images/wild-route/home.png",
    category: "Prompt-first product + full stack",
    backgroundClass:
      "bg-[radial-gradient(circle_at_top_right,_rgba(214,255,64,0.32),_transparent_28%),linear-gradient(160deg,_#192018_0%,_#59634f_52%,_#d9ddd0_100%)]",
  },
  {
    title: "CatchScan",
    subTitle: "Copyright protection SaaS",
    date: "2021",
    description:
      "A dashboard concept for automated copyright protection, focused on helping creators monitor ownership issues through a clear, system-driven interface.",
    highlight:
      "This project still stands out because it shows how I translate dense product logic into something visually ordered, calm under pressure, and ready for design-system thinking.",
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
      "A hybrid workplace experience built around desk booking, room availability, and operational clarity inside the daily workflow of Microsoft Teams.",
    highlight:
      "The value here is the ability to design for operational software without making it feel dead. It had to support complexity while staying fast, legible, and intuitive.",
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
      "A conversion-oriented website for American students exploring education in Europe, designed to communicate trust, guidance, and a feeling of possibility.",
    highlight:
      "This project captures an earlier part of my trajectory: storytelling, information design, and user trust shaped into a more persuasive digital journey.",
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
      "A new set of projects is coming into the portfolio, shaped by the move to Singapore, a stronger engineering stack, and a sharper design point of view.",
    highlight:
      "The next additions will likely be more technical, more opinionated, and more representative of where I am headed than where I started.",
    skills: ["Coming Soon"],
    link: "https://github.com/TheMarcellVarga",
    image: "/images/personalpageprofilealt.png",
    category: "Now building",
    backgroundClass:
      "bg-[radial-gradient(circle_at_40%_20%,_rgba(56,188,255,0.28),_transparent_26%),linear-gradient(160deg,_#e1f3ff_0%,_#d7eaf1_52%,_#bdd7df_100%)]",
    inProgress: true,
  },
];
