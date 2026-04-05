"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { SectionLabel } from "./SectionLabel";

type OtherWorksProps = {
  currentProjectTitle: string;
};

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.6,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  },
});

export function OtherWorks({ currentProjectTitle }: OtherWorksProps) {
  const otherProjects = projects.filter(
    (p) => p.title !== currentProjectTitle && !p.inProgress
  );

  return (
    <section className="mt-40">
      <SectionLabel index="More" label="Selected Work" />
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {otherProjects.map((project, index) => (
          <motion.article
            key={project.title}
            {...fadeInUp(index * 0.1)}
            className="glass-panel group relative min-h-[22rem] overflow-hidden rounded-[2.5rem] border-white/90 shadow-[0_28px_70px_rgba(11,17,26,0.06)] transition duration-700 hover:-translate-y-1.5 hover:shadow-[0_35px_90px_rgba(11,17,26,0.1)]"
          >
            <Link
              href={project.link}
              className="relative flex h-full flex-col justify-between p-8 sm:p-10"
              aria-label={`Open ${project.title}`}
            >
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className={`absolute inset-0 opacity-20 ${project.backgroundClass}`} />
              </div>

              <div className="relative z-10 flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/40 bg-white/10 px-5 py-2 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-xl">
                  {project.category}
                </span>
                <span className="text-[0.85rem] font-bold tracking-widest text-white/75">{project.date}</span>
              </div>

              <div className="relative z-10 mt-auto transform transition-transform duration-700 group-hover:-translate-y-2">
                <h3 className="font-display text-[2rem] leading-[0.9] tracking-[-0.04em] text-white sm:text-[2.4rem]">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-white/85">
                  {project.subTitle}
                </p>
                <div className="mt-8 inline-flex w-fit items-center gap-2.5 rounded-full bg-white px-6 py-2.5 text-xs font-bold text-custom-blue transition-all duration-300 hover:bg-[#67d9ff] hover:text-white">
                  Read Case Study
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
