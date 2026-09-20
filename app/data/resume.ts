export const resume = {
  name: "Marcell Varga",
  title: "Product-minded UX & Frontend Engineer",
  descriptor:
    "Building production interfaces, design systems, and complex product workflows with React and TypeScript.",
  location: "Singapore",
  email: "themarcellvarga@gmail.com",
  website: "marcellvarga.com",
  linkedin: "linkedin.com/in/marcellvarga",
  github: "github.com/TheMarcellVarga",
  githubHandle: "TheMarcellVarga",
  photo: "/images/personalpageprofilealt.webp",
  tags: ["Product UX", "Frontend Engineering", "Design Systems", "React + TypeScript"],
  profile:
    "UX & Frontend Engineer focused on React, TypeScript, design systems, and complex product workflows. Combines product UX and frontend engineering to take ambiguous requirements from exploration to production.",
  skillGroups: [
    {
      label: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "D3.js", "Next.js", "Svelte"],
    },
    {
      label: "Architecture",
      items: ["Module Federation", "single-spa", "Webpack", "Design Systems"],
    },
    {
      label: "Backend & Integration",
      items: ["Node.js / Express", "Java / Spring", "REST APIs", "WebSocket", "PostgreSQL"],
    },
    {
      label: "UX & Delivery",
      items: [
        "UX Engineering",
        "Product Engineering",
        "WCAG",
        "Jest",
        "Git",
        "GCP / Docker",
        "CI/CD",
        "Artificial Intelligence",
      ],
    },
  ],
  languages: [
    { name: "Hungarian", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Danish", level: "Working proficiency" },
  ],
  experience: [
    {
      company: "AXON Networks",
      role: "UX & Frontend Engineer",
      period: "Oct 2022 - Present",
      bullets: [
        "Build and ship React/TypeScript product workflows for complex telecom software, taking work from interaction architecture and prototyping through production delivery.",
        "Develop network diagnostics and performance-monitoring interfaces for network equipment, including health checks, historical trends, and detailed snapshot views.",
        "Designed a configurable D3.js analytics workspace where users arrange graphs and save, search, restore, and manage personalized views.",
        "Create reusable components and design-system patterns across a modular frontend architecture using Webpack, Module Federation, and single-spa.",
        "Deliver WCAG-aligned accessibility and automated quality coverage across semantics, keyboard and focus behavior, responsive and 200% text reflow, and interaction tests.",
        "Work beyond the frontend across REST and WebSocket integrations, Node.js/Express APIs, and Java/Spring services, partnering with product, QA, analytics, and engineering to turn technical requirements into shipped solutions.",
      ],
    },
    {
      company: "MapsPeople",
      role: "UX Designer Intern",
      period: "Jan 2022 - Apr 2022",
      bullets: [
        "Conducted UX research and built interactive prototypes for the MapsIndoors CMS, translating findings into product improvements.",
        "Contributed design-system patterns, responsive interface work, documentation, and developer handoff across desktop and mobile experiences.",
        "Delivered Jira-managed product tasks with engineers, balancing interaction detail, accessibility, and SaaS implementation constraints.",
      ],
    },
  ],
  education: [
    {
      school: "University College of Northern Denmark",
      degree: "AP Degree in Multimedia Design",
      period: "2020 - 2022",
    },
  ],
} as const;
