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
      items: ["React", "TypeScript", "Next.js", "Svelte"],
    },
    {
      label: "Backend & Data",
      items: ["Node.js / Express", "Java / Spring", "PostgreSQL", "REST APIs"],
    },
    {
      label: "Platform",
      items: ["Docker", "GCP", "CI/CD"],
    },
    {
      label: "Design Engineering",
      items: ["Figma", "Design Systems", "WCAG", "Prototyping"],
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
        "Built and shipped React/TypeScript performance-monitoring and diagnostics interfaces for network equipment, including health checks, historical trends, and detailed snapshot views.",
        "Designed and implemented a configurable analytics workspace where users can arrange graphs and save, search, restore, and manage personalized views.",
        "Develop reusable React/TypeScript components and design-system patterns across a modular frontend platform, backed by automated interaction and accessibility tests.",
        "Implement supporting REST APIs and middleware in Node.js and Express when product workflows require backend changes.",
        "Apply WCAG-aligned accessibility practices across shared components and shipped interfaces, covering semantics, keyboard and focus behavior, responsive states, and 200% text reflow.",
        "Work with product, engineering, QA, analytics, and stakeholders to clarify ambiguous requirements, validate workflows, and turn them into implementable frontend solutions.",
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
