export type HistoryItem = {
  company: string;
  jobTitle: string;
  time: {
    start: string;
    end: string;
  };
  description: string[];
  skills: string[];
};

export const history: HistoryItem[] = [
  {
    company: "AXON Networks",
    jobTitle: "UX & Frontend Engineer",
    time: {
      start: "Oct 2022",
      end: "",
    },
    description: [
      "Designing and building AXON Orchestrator across UX, UI, and frontend implementation.",
      "Creating prototypes, design-system patterns, and AI-aware product flows with engineering and analytics teams.",
    ],
    skills: ["UX", "React", "TypeScript", "Node.js", "AI-fluent UX"],
  },
  {
    company: "MapsPeople",
    jobTitle: "UX Designer Intern",
    time: {
      start: "Jan 2022",
      end: "Apr 2022",
    },
    description: [
      "Improved MapsIndoors CMS through research, interaction design, and animated prototypes.",
      "Worked with Jira, documentation, accessibility, and the company design system inside a SaaS product team.",
    ],
    skills: ["Figma", "Prototyping", "Accessibility", "SaaS UX"],
  },
  {
    company: "University College of Northern Denmark",
    jobTitle: "Multimedia Design",
    time: {
      start: "Aug 2020",
      end: "Jun 2022",
    },
    description: [
      "Built a foundation in UX/UI, frontend development, content production, and product communication.",
      "Worked on practical, company-connected projects using research, usability testing, and design-to-code delivery.",
    ],
    skills: ["UX/UI", "Frontend", "Research", "Content Strategy"],
  },
];
