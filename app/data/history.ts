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
      "Working across UX, UI, frontend implementation, and product iteration on AXON Orchestrator in close collaboration with engineering and analytics teams.",
      "Building interactive prototypes and interface foundations that make complex workflows easier to reason about, discuss, and ship.",
      "Bringing AI-leaning features and technical product thinking into the experience layer while keeping usability and clarity intact.",
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
      "Improved MapsIndoors CMS through research, exploration, and animated prototyping work that helped ideas become more tangible earlier in the process.",
      "Contributed to a live design system and learned how accessibility, documentation, and product constraints shape real SaaS decisions.",
      "Worked cross-functionally inside a shipping product team, tightening both execution speed and visual consistency.",
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
      "Built the foundations in UX, frontend development, content production, and design strategy through practical, company-connected projects.",
      "Focused on the design-to-code handoff before it was a buzzword, learning how visual decisions, user needs, and implementation constraints shape each other.",
      "Used research, testing, and reflective practice to solve real product problems with a strong bias toward clarity and craft.",
    ],
    skills: ["UX/UI", "Frontend", "Research", "Content Strategy"],
  },
];
