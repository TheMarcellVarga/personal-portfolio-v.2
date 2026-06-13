"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { projects } from "../data/projects";
import { SectionLabel } from "./SectionLabel";

type OtherWorksProps = {
  currentProjectTitle: string;
};

export function OtherWorks({ currentProjectTitle }: OtherWorksProps) {
  const otherProjects = projects.filter(
    (p) => p.title !== currentProjectTitle && !p.inProgress
  );
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasPlayedRef.current) return;
        hasPlayedRef.current = true;
        setInView(true);
        observer.disconnect();
      },
      { threshold: 0.28, rootMargin: "0px 0px -16% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-other-works-card]"));

    if (!inView) {
      gsap.set(cards, { opacity: 0, y: 22 });
      return;
    }

    gsap.set(cards, { opacity: 0, y: 22 });

    const tl = gsap.timeline({
      delay: 0.08,
      defaults: { ease: "power4.out" },
    });

    tl.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.66,
      stagger: 0.08,
    });

    return () => {
      tl.kill();
    };
  }, [inView]);

  return (
    <section ref={sectionRef} className="mt-24 sm:mt-32 lg:mt-40">
      <SectionLabel index="More" label="Selected Work" />
      <div className="mt-8 grid gap-3.5 sm:mt-12 md:grid-cols-2">
        {otherProjects.map((project, index) => (
          <article
            key={project.title}
            data-other-works-card
            className="glass-panel group relative min-h-[19rem] overflow-hidden rounded-[1.9rem] bg-white/65 shadow-[0_12px_40px_rgba(11,17,26,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(11,17,26,0.05)] sm:min-h-[22rem] sm:rounded-[2.1rem]"
          >
            <Link
              href={project.link}
              className="relative flex h-full flex-col justify-between p-5 sm:p-7"
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
                <span className="font-label rounded-full bg-white/16 px-2.5 py-1.5 text-[0.54rem] font-medium uppercase tracking-[0.15em] text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] backdrop-blur-xl">
                  {project.category}
                </span>
                <span className="font-label rounded-full bg-white/16 px-2.5 py-1.5 text-[0.54rem] font-medium uppercase tracking-[0.15em] text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] backdrop-blur-xl">{project.date}</span>
              </div>

              <div className="relative z-10 mt-auto transform transition-transform duration-700 group-hover:-translate-y-2">
                <h3 className="font-display text-[2rem] leading-[0.95] tracking-[-0.02em] text-white sm:text-[2.4rem]">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-white/85">
                  {project.subTitle}
                </p>
                <div className="mt-8 inline-flex w-fit items-center gap-2.5 rounded-full bg-white/92 px-5 py-2.5 text-xs font-bold text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.66)] transition-all duration-300 hover:bg-[#67d9ff] hover:text-white">
                  View case study
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
