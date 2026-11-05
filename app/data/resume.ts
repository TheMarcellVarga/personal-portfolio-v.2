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
    "UX & Frontend Engineer with 4 years of experience designing and shipping production software for complex B2B platforms. Combines product thinking, interaction design, and React/TypeScript engineering to deliver data-intensive interfaces and end-to-end product features integrating frontend interfaces with backend services.",
  skillGroups: [
    {
      label: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "Next.js", "Redux", "HTML", "CSS", "D3.js", "Svelte"],
    },
    {
      label: "Architecture & Design Systems",
      items: ["Design Systems", "Module Federation", "single-spa", "Webpack"],
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
        "Prototyping",
      ],
    },
    {
      label: "Quality & Accessibility",
      items: ["WCAG 2.1", "Accessibility", "Vitest", "Jest", "Cypress", "Web Application Security"],
    },
    {
      label: "Development & AI",
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
        "Designed and implemented a configurable analytics workspace, enabling users to customize monitoring dashboards through rearrangeable components and persistent views.",
        "Translate customer feedback and product requirements into React/TypeScript workflows, shaping interaction design and iterative improvements across AXON's Operator-as-a-Service platform.",
        "Build data-intensive interfaces for diagnostics, performance monitoring, and agentic AI workflows, including health checks, historical trends, and equipment insights.",
        "Develop reusable React components and design-system patterns across modular frontends using Webpack, Module Federation, and single-spa.",
        "Contribute to Node.js/Fastify and Go APIs for saved analytics views, including PostgreSQL persistence, ownership checks, and regression tests.",
        "Implement accessible, responsive interfaces with keyboard navigation, screen-reader support, semantic chart tables, and focus management aligned with WCAG 2.1.",
        "Enabled internationalization across translated interfaces, locale-aware formatting, text expansion, and right-to-left layouts.",
        "Contributed to AXON OaaS, recognized as Most Innovative Cloud Product or Solution at the 2025 Leading Lights Awards.",
      ],
    },
    {
      company: "MapsPeople",
      role: "UX Designer Intern",
      period: "Jan 2022 - Apr 2022",
      bullets: [
        "Conducted UX research and built interactive prototypes for the MapsIndoors CMS, translating findings into product improvements.",
        "Contributed design-system patterns and responsive interfaces, documenting designs and collaborating with engineers on developer handoff.",
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
