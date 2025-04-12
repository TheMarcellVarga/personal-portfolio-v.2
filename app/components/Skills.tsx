import React from 'react';
import {
  FaPaintBrush,
  FaUserFriends,
  FaSearch,
  FaVial,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaSketch,
  FaVuejs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiSvelte,
  SiAdobe,
  SiVercel,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiExpress,
  SiPython,
  SiDjango,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

const skillCategories = {
  design: [
    { name: "UI Design", icon: <FaPaintBrush /> },
    { name: "UX Design", icon: <FaUserFriends /> },
    { name: "User Research", icon: <FaSearch /> },
    { name: "Usability Testing", icon: <FaVial /> },
    { name: "Adobe CC Suite", icon: <SiAdobe /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Sketch", icon: <FaSketch /> },
  ],
  frontend: [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Angular", icon: <SiAngular /> },
    { name: "Vue", icon: <FaVuejs /> },
    { name: "Svelte", icon: <SiSvelte /> },
    { name: "SvelteKit", icon: <SiSvelte /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Vercel", icon: <SiVercel /> },
  ],
};

export default function Skills() {
  return (
    <article className="mt-8 w-full p-4">
      <h2
        className="text-custom-blue text-sm font-bold mb-8 tracking-wider uppercase flex items-center
        before:content-[''] before:block before:w-4 before:h-[2px] before:bg-custom-blue before:mr-2"
      >
        Experience
      </h2>

      <div className="space-y-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="relative">
            <h3
              className="text-sm font-semibold text-custom-blue/80 mb-4 capitalize
              flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-300"
            >
              <span className="w-8 h-[1px] bg-custom-blue/30"></span>
              {category}
            </h3>

            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group relative flex flex-col items-center justify-center
                    bg-custom-blue/5 hover:bg-custom-blue/10
                    p-3 rounded-xl
                    transform transition-all duration-300 hover:scale-105 hover:-translate-y-1
                    cursor-pointer"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <span
                    className="text-xl sm:text-2xl text-custom-blue/70 
                    group-hover:text-custom-blue transition-colors duration-300 mb-1"
                    aria-hidden="true"
                  >
                    {skill.icon}
                  </span>

                  <span
                    className="text-[10px] sm:text-xs text-custom-blue/60 
                    group-hover:text-custom-blue/80 text-center line-clamp-1 md:hidden
                    transition-colors duration-300"
                  >
                    {skill.name.split(" ")[0]}
                  </span>

                  <span
                    className="hidden md:inline text-xs text-custom-blue/60 
                    group-hover:text-custom-blue/80 text-center
                    transition-colors duration-300"
                  >
                    {skill.name}
                  </span>

                  <div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2
                    bg-custom-blue text-white px-2 py-1 rounded text-xs
                    opacity-0 group-hover:opacity-100 transition-all duration-200
                    pointer-events-none whitespace-nowrap md:hidden
                    shadow-lg backdrop-blur-xs"
                  >
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
} 