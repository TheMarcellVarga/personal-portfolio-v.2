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
      "A dashboard concept for automated copyright protection, focused on helping creators monitor ownership issues through a clear, system-driven interface.",
    highlight:
      "This project still stands out because it shows how I translate dense product logic into something visually ordered, calm under pressure, and ready for design-system thinking.",
    skills: ["Design System", "Tailwind CSS", "Dashboard UX", "Atomic Design"],
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
    skills: ["In Progress"],
    link: "http://github.com/TheMarcellVarga",
    image: "/images/personalpageprofilealt.png",
    category: "Now building",
    backgroundClass:
      "bg-[radial-gradient(circle_at_40%_20%,_rgba(56,188,255,0.28),_transparent_26%),linear-gradient(160deg,_#e1f3ff_0%,_#d7eaf1_52%,_#bdd7df_100%)]",
    inProgress: true,
  },
];
