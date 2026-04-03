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
    title: "CatchScan",
    subTitle: "Copyright protection SaaS",
    date: "2021",
    description:
      "A high-performance dashboard for automated copyright protection. Designed to help creators effortlessly monitor and resolve ownership issues.",
    highlight:
      "This project proves that dense, complex operational logic can be designed into a system that is visually flawless, incredibly fast, and scalable.",
    skills: ["Design System", "Tailwind CSS", "Dashboard UX", "Atomic Architecture"],
    link: "/catchscan",
    image: "/images/catchscan-index.png",
    category: "Product Architecture",
    backgroundClass:
      "bg-[radial-gradient(circle_at_top_left,_rgba(11,17,26,0.03),_transparent_30%),linear-gradient(160deg,_#ffffff_0%,_#f2f5f8_50%,_#e6edf4_100%)]",
  },
  {
    title: "AskCody",
    subTitle: "Hybrid office management inside Microsoft Teams",
    date: "2022",
    description:
      "A frictionless hybrid workplace experience. Blends desk booking and operational clarity seamlessly into the Microsoft Teams enterprise workflow.",
    highlight:
      "Tackled the challenge of enterprise software: creating tools that handle supreme complexity without slowing down the user. Fast, legible, intuitive.",
    skills: ["TypeScript", "React", "Fluent UI", "Enterprise Velocity"],
    link: "/askcody",
    image: "/images/askcody-index.png",
    category: "Enterprise Scale",
    backgroundClass:
      "bg-[radial-gradient(circle_at_top_right,_rgba(11,17,26,0.03),_transparent_26%),linear-gradient(160deg,_#ffffff_0%,_#f0f4f9_52%,_#e0e9f2_100%)]",
  },
  {
    title: "European Study Solution",
    subTitle: "Student agency platform",
    date: "2021",
    description:
      "A conversion-machine designed for American students aiming for Europe. Engineered to communicate absolute trust, guidance, and endless possibility.",
    highlight:
      "A showcase in editorial web experience and storytelling. Built from the ground up to aggressively pull the user through a persuasive narrative.",
    skills: ["Web Performance", "JavaScript", "SEO", "Conversion Strategy"],
    link: "/ess",
    image: "/images/ess-index.png",
    category: "Web Experience",
    backgroundClass:
      "bg-[radial-gradient(circle_at_20%_20%,_rgba(11,17,26,0.02),_transparent_28%),linear-gradient(160deg,_#ffffff_0%,_#f4f6fa_50%,_#e6ecef_100%)]",
  },
  {
    title: "Singapore & Beyond",
    subTitle: "New chapter, maximum velocity",
    date: "2026",
    description:
      "A slate of upcoming projects engineered in Singapore. Sharper technical stack, deeper design logic, and zero compromises on performance.",
    highlight:
      "The next era is defined by extreme technical ambition, Apple-tier smoothness, and rapid execution. Watch this space.",
    skills: ["Framer Motion", "Next.js 15", "Performance", "Velocity"],
    link: "http://github.com/TheMarcellVarga",
    image: "/images/personalpageprofilealt.png",
    category: "Now Shipping",
    backgroundClass:
      "bg-[radial-gradient(circle_at_40%_20%,_rgba(0,113,227,0.04),_transparent_26%),linear-gradient(160deg,_#ffffff_0%,_#f7f9fc_52%,_#edf2f7_100%)]",
    inProgress: true,
  },
];
