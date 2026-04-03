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
      "Architecting and shipping critical interfaces for AXON Orchestrator. Bridging the gap between deeply complex backend systems and flawless user experiences.",
      "Leading interactive prototyping that accelerates engineering velocity. Turning abstract enterprise requirements into tangible, high-performance UI components.",
      "Integrating AI-driven features gracefully into the product layer—focusing on reducing friction and maximizing velocity without sacrificing clarity.",
    ],
    skills: ["React", "TypeScript", "System Architecture", "AI-fluent UX", "Velocity"],
  },
  {
    company: "MapsPeople",
    jobTitle: "UX Designer",
    time: {
      start: "Jan 2022",
      end: "Apr 2022",
    },
    description: [
      "Overhauled the MapsIndoors CMS through aggressive prototyping and research. Turned sluggish ideas into tangible workflows ready for engineering.",
      "Contributed heavily to a live SaaS design system. Learned early on how accessibility, documentation, and rigorous constraints shape world-class products.",
      "Operated inside a fast-moving, cross-functional product team, emphasizing execution speed and uncompromising visual consistency.",
    ],
    skills: ["Figma", "Prototyping", "Design Systems", "SaaS UX"],
  },
  {
    company: "University College of Northern Denmark",
    jobTitle: "Multimedia Design",
    time: {
      start: "Aug 2020",
      end: "Jun 2022",
    },
    description: [
      "Laid the foundational grid: Danish design principles paired with practical frontend execution. Focused entirely on the design-to-code pipeline.",
      "Learned that beautiful mockups mean nothing without elegant code. Developed a strong bias toward building things that actually ship.",
      "Mastered the balance between research-heavy iteration and high-speed execution.",
    ],
    skills: ["UI/UX", "Frontend execution", "Danish Design"],
  },
];
