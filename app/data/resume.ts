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
    "UX & Frontend Engineer building complex React and TypeScript products since 2022. Combines UX research, interaction design, and frontend engineering to take workflows from exploration to production, with a focus on reusable design systems, accessibility, and API integration.",
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
      items: ["Node.js / Express", "Java / Spring", "REST APIs", "WebSocket", "PostgreSQL"],
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
      items: ["WCAG Accessibility", "Jest", "Cypress", "Web Application Security"],
    },
    {
      label: "Delivery & AI",
      items: ["Git", "CI/CD", "GCP", "Docker", "Large Language Models (LLMs)"],
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
        // Company-wide scope, not a claim that this interface serves every user.
        // Source: https://news.axon-networks.com/2026/10/axon-networks-launches-axon-datum.html
        "Deliver React/TypeScript workflows for AXON's OaaS platform, from UX exploration to production; AXON reports 30+ operators and 97M+ managed users across its platforms.",
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
      period: "Sep 2020 - Jun 2022",
    },
  ],
} as const;
