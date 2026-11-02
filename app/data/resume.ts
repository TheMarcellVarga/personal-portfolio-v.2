export const resume = {
  name: "Marcell Varga",
  title: "UX & Frontend Engineer | Product Engineering, React & TypeScript",
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
    "UX & Frontend Engineer with 4 years of experience building production React/TypeScript interfaces for complex B2B platforms. Combines UX design, reusable components, and API integration across diagnostics, monitoring, and analytics.",
  skillGroups: [
    {
      label: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Redux", "D3.js", "Next.js", "Svelte"],
    },
    {
      label: "Architecture",
      items: ["Module Federation", "single-spa", "Webpack", "Design Systems"],
    },
    {
      label: "Backend & Integration",
      items: ["Node.js (Fastify/Express)", "Go", "Java / Spring", "REST APIs", "WebSocket", "PostgreSQL"],
    },
    {
      label: "UX & Product",
      items: [
        "Figma",
        "UX Research",
        "Interaction Design",
        "Usability Testing",
      ],
    },
    {
      label: "Quality & Security",
      items: ["WCAG 2.1 (AA & AAA Criteria)", "Vitest", "Jest", "Cypress", "Web Application Security"],
    },
    {
      label: "Delivery & AI",
      items: ["Git", "CI/CD", "GCP", "Docker", "AI-Assisted Development (Codex, Claude, Kimi)"],
    },
  ],
  languages: [
    { name: "Hungarian", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Danish", level: "Limited working proficiency" },
  ],
  experience: [
    {
      company: "AXON Networks",
      role: "UX & Frontend Engineer",
      period: "Oct 2022 - Present",
      bullets: [
        "Use customer feedback to shape interaction design and ship React/TypeScript workflows for AXON's Operator-as-a-Service (OaaS) platform, from exploration through production.",
        "Build frontend workflows for diagnostics, performance monitoring, and agentic AI features, including health checks, historical trends, and equipment snapshots.",
        "Designed and implemented a configurable analytics workspace with personalized monitoring views users can arrange, save, search, restore, and manage.",
        "Build reusable React components and design-system patterns across maintainable, modular frontends using Webpack, Module Federation, and single-spa.",
        "Implement internationalization (i18n) across translated UI, text expansion, locale-aware dates/numbers, and right-to-left (RTL) layouts.",
        "Address WCAG 2.1 AA/AAA criteria with semantic chart tables, screen-reader access, keyboard navigation, and focus preservation across topology updates; test responsive layouts and 200% text resizing.",
        "Contribute to Node.js/Fastify and Go APIs for saved analytics views, including PostgreSQL persistence, ownership checks, and regression tests; collaborate with product, QA, and backend engineers.",
        "Contributed to OaaS, winner of Most Innovative Cloud Product or Solution at the 2025 Leading Lights Awards.",
      ],
    },
    {
      company: "MapsPeople",
      role: "UX Designer Intern",
      period: "Jan 2022 - Apr 2022",
      bullets: [
        "Conducted UX research and built interactive prototypes for the MapsIndoors CMS, translating findings into product improvements.",
        "Contributed design-system patterns, responsive desktop/mobile interfaces, documentation, and developer handoff; delivered Jira-managed tasks with engineers, balancing interaction detail, accessibility, and SaaS constraints.",
      ],
    },
  ],
  education: [
    {
      school: "University College of Northern Denmark",
      degree: "AP Degree in Multimedia Design",
      period: "Sep 2020 - Jun 2022",
    },
  ],
} as const;
