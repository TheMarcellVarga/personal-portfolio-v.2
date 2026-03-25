"use client";

import React from 'react';
import { motion } from 'framer-motion';
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

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function Skills() {
  return (
    <article className="mt-24 mb-16 w-full p-4 md:p-8 lg:p-12 z-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 flex flex-col items-center justify-center text-center max-w-2xl mx-auto"
      >
        <h2 className="text-gray-400 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Experience
        </h2>
        <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
          Tools & Capabilities
        </div>
      </motion.div>

      <div className="space-y-20 max-w-5xl mx-auto">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-8"
            >
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">
                {category}
              </h3>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent"></div>
            </motion.div>

            <motion.div 
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariant}
                  className="group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 hover:bg-[#111] transition-all duration-300 cursor-pointer"
                >
                  <span
                    className="text-2xl sm:text-3xl text-gray-500 group-hover:text-gray-200 transition-colors duration-300 mb-3"
                    aria-hidden="true"
                  >
                    {skill.icon}
                  </span>

                  <span className="text-[10px] sm:text-xs font-medium text-gray-500 group-hover:text-gray-300 text-center transition-colors duration-300">
                    {skill.name.split(' ')[0]}
                  </span>

                  {/* Tooltip for small screens */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#1a1a1a] border border-white/10 text-gray-300 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none sm:hidden whitespace-nowrap z-50 shadow-xl">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </article>
  );
}