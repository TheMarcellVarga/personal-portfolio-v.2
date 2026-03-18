"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { projects } from "../data/projects";

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 92,
    damping: 26,
    mass: 0.35,
  });
  const rightPaneY = useTransform(smoothProgress, [0, 1], [0, -12]);

  useMotionValueEvent(smoothProgress, "change", (value) => {
    // Reserve a little leading/trailing pause for breathing room.
    const staged = clamp((value - 0.06) / 0.88, 0, 0.999);
    const next = Math.floor(staged * projects.length);
    setActiveIndex(clamp(next, 0, projects.length - 1));
  });

  const activeProject = projects[activeIndex];

  return (
    <section id="projects-content" ref={sectionRef} className="relative min-h-[360vh]">
      <div className="sticky top-20 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flow-panel p-6 sm:p-7">
          <h2 className="hairline text-2xl font-semibold text-custom-blue sm:text-3xl">
            Selected work
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-custom-blue/72 sm:text-base">
            Scroll to move through featured projects.
          </p>
          <div className="mt-4 flex items-center gap-1.5">
            {projects.map((project, index) => (
              <div
                key={`indicator-${project.title}`}
                className={`h-1.5 rounded-full bg-custom-blue/30 transition-all duration-500 ${
                  index === activeIndex ? "w-8 bg-custom-blue/70" : "w-2"
                }`}
              />
            ))}
          </div>

          <div className="mt-6 space-y-2">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => setActiveIndex(index)}
                className={`w-full rounded-xl border px-3 py-3 text-left transition-all duration-400 ${
                  index === activeIndex
                    ? "border-custom-blue/26 bg-custom-blue/8 shadow-[0_10px_30px_rgba(7,46,64,0.08)]"
                    : "border-custom-blue/12 bg-white/72 hover:border-custom-blue/22"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-custom-blue/88">
                    {project.title}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-custom-blue/58">
                    {project.date}
                  </span>
                </div>
                <p className="mt-1 text-xs text-custom-blue/70">{project.subTitle}</p>
              </button>
            ))}
          </div>

          <Link
            href="https://github.com/TheMarcellVarga"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-custom-blue/70 transition-colors hover:text-custom-blue"
          >
            More on GitHub
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <motion.div style={{ y: rightPaneY }} className="flow-panel relative min-h-[560px] overflow-hidden p-4 sm:p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.title}
              initial={{ opacity: 0, y: 18, scale: 0.99 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12, scale: 0.99 }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col"
            >
              <div className="flow-card relative overflow-hidden rounded-[1.4rem] bg-white/70">
                {activeProject.inProgress ? (
                  <div className="flex aspect-[16/10] items-center justify-center bg-[radial-gradient(circle_at_20%_10%,rgba(79,213,204,0.26),transparent_50%),linear-gradient(135deg,rgba(23,107,135,0.26),rgba(79,213,204,0.2))]">
                    <div className="flow-card rounded-full border-white/45 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-custom-blue/80">
                      In active build
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={activeProject.image}
                      alt={`${activeProject.title} preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 52vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="mt-5 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-custom-blue">{activeProject.title}</h3>
                  <span className="flow-card rounded-full border-custom-blue/16 bg-white/75 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.12em] text-custom-blue/62">
                    {activeProject.date}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-custom-blue/72 sm:text-base">
                  {activeProject.subTitle}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-custom-blue/75 sm:text-base">
                  {activeProject.description}
                </p>

                <div className="mt-4 space-y-1.5">
                  {activeProject.highlights?.map((item) => (
                    <p key={item} className="text-sm text-custom-blue/67">
                      {item}
                    </p>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {activeProject.skills.map((skill) => (
                    <span
                      key={skill}
                      className="flow-card rounded-md border-custom-blue/14 bg-custom-blue/6 px-2.5 py-1 text-xs font-medium text-custom-blue/75"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <Link
                  href={activeProject.link}
                  target={activeProject.inProgress ? "_blank" : undefined}
                  rel={activeProject.inProgress ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-custom-blue/78 transition-colors hover:text-custom-blue"
                >
                  {activeProject.inProgress ? "Track progress" : "View case study"}
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
