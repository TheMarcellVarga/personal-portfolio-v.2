"use client";

import { motion } from "framer-motion";
import {
  FaFigma,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaSketch,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiDjango,
  SiSvelte,
  SiJavascript,
} from "react-icons/si";

const lanes = [
  {
    title: "Design",
    items: [
      { name: "UX Strategy", icon: FaFigma },
      { name: "Interaction Design", icon: FaSketch },
      { name: "User Research", icon: FaFigma },
      { name: "Usability Testing", icon: FaFigma },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Svelte", icon: SiSvelte },
    ],
  },
  {
    title: "Backend & Delivery",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Django", icon: SiDjango },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Docker", icon: FaDocker },
      { name: "Git", icon: FaGitAlt },
    ],
  },
];

export default function Skills() {
  return (
    <section className="w-full">
      <div className="mb-5">
        <h2 className="hairline text-2xl font-semibold text-custom-blue sm:text-3xl">
          Capabilities
        </h2>
      </div>

      <div className="space-y-4">
        {lanes.map((lane, laneIndex) => (
          <motion.article
            key={lane.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.48,
              delay: laneIndex * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flow-card flow-lift rounded-xl border border-custom-blue/16 bg-white/82 p-5 backdrop-blur-md sm:p-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-custom-blue/58">
              {lane.title}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {lane.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 rounded-md border border-custom-blue/14 bg-white/88 px-3 py-2 text-sm text-custom-blue/82 transition-all duration-300 hover:-translate-y-0.5 hover:border-custom-blue/35"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span className="leading-tight">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
