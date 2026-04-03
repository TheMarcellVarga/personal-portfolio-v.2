"use client";

import { startTransition, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Rocket,
  Sparkles,
} from "lucide-react";
import Header from "./header";
import Footer from "./footer";
import { history } from "./data/history";
import { projects } from "./data/projects";

const manifesto =
  "Danish precision. Singaporean velocity. I architect high-performance interfaces that don’t just look premium—they execute flawlessly.";

const capabilityCards = [
  {
    title: "Engineering At Velocity",
    body: "Shipping isn't a milestone; it's a cadence. I build highly stable, scalable interface architectures that allow teams to move incredibly fast without breaking the system layer.",
    icon: Blocks,
    colSpan: "lg:col-span-2",
  },
  {
    title: "Uncompromising Execution",
    body: "Apple-tier smoothness, flawless accessibility, and absolute responsiveness. The gap between a good mockup and a great product is entirely in the implementation details.",
    icon: Code2,
    colSpan: "lg:col-span-1",
  },
  {
    title: "High-Signal Strategy",
    body: "No bloated processes or design theater. I rely on rapid iteration, tactical user insight, and high-fidelity prototypes that act as sources of truth for engineering teams.",
    icon: Sparkles,
    colSpan: "lg:col-span-1",
  },
  {
    title: "Technical Product Sense",
    body: "Interfaces don't exist in a vacuum. I work deeply with backend architecture and product requirements to ensure the UX is not just beautiful, but systematically sound.",
    icon: Rocket,
    colSpan: "lg:col-span-2",
  },
];

const capabilityTags = [
  "system architecture",
  "React & Next.js",
  "framer-motion physics",
  "performance optimization",
  "WCAG 2.2",
  "technical strategy",
  "high-fps prototyping",
  "TypeScript",
  "SvelteKit",
  "Docker & CI/CD",
  "AI-fluent UX",
  "complex state logic",
];

function fadeInUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28, scale: 0.96, filter: "blur(8px)" },
    whileInView: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };
}

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: any, range: [number, number] }) => {
  // Adjusted opacity floor from 0.5 to 0.6 to fix readability issue against light background
  const opacity = useTransform(progress, range, [0.6, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block relative">
      {children}
    </motion.span>
  );
};

function scrollToId(id: string, reducedMotion: boolean) {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({
    behavior: reducedMotion ? "auto" : "smooth",
    block: "start",
  });
}

function SectionLabel({
  index,
  label,
  tone = "dark",
}: {
  index: string;
  label: string;
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  return (
    <div
      className={`mb-6 flex items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.32em] ${
        isLight ? "text-white/62" : "text-custom-blue/55"
      }`}
    >
      <span>{index}</span>
      <span className={`h-px w-12 ${isLight ? "bg-white/20" : "bg-custom-blue/20"}`} />
      <span>{label}</span>
    </div>
  );
}

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [footerHover, setFooterHover] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = Boolean(prefersReducedMotion);

  const heroRef = useRef<HTMLElement>(null);
  const manifestoRef = useRef<HTMLElement>(null);
  const capabilitiesRef = useRef<HTMLElement>(null);
  const trajectoryRef = useRef<HTMLElement>(null);
  const [activeTrajectoryIndex, setActiveTrajectoryIndex] = useState(0);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroCopyY = useTransform(heroProgress, [0, 1], [0, -120]);
  const heroCopyOpacity = useTransform(heroProgress, [0, 0.4], [1, 0]);
  const portraitY = useTransform(heroProgress, [0, 1], [0, 200]);
  const portraitScale = useTransform(heroProgress, [0, 1], [1, 1.2]);
  const portraitOpacity = useTransform(heroProgress, [0, 0.5], [1, 0.4]);

  const { scrollYProgress: manifestoProgress } = useScroll({
    target: manifestoRef,
    offset: ["start center", "end center"],
  });
  const { scrollYProgress: trajectoryProgress } = useScroll({
    target: trajectoryRef,
    offset: ["start center", "end end"],
  });

  useMotionValueEvent(trajectoryProgress, "change", (value) => {
    const nextIndex = Math.min(history.length - 1, Math.floor(value * history.length));
    startTransition(() => {
      setActiveTrajectoryIndex((current) => (current === nextIndex ? current : nextIndex));
    });
  });

  const scrollHome = useCallback(() => {
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" });
  }, [shouldReduceMotion]);

  const scrollAbout = useCallback(() => {
    scrollToId("about", shouldReduceMotion);
  }, [shouldReduceMotion]);

  const scrollWork = useCallback(() => {
    scrollToId("work", shouldReduceMotion);
  }, [shouldReduceMotion]);

  const scrollContact = useCallback(() => {
    scrollToId("contact", shouldReduceMotion);
  }, [shouldReduceMotion]);

  const featuredProjects = useMemo(() => projects.filter((project) => !project.inProgress), []);
  const activeTrajectoryItem = history[activeTrajectoryIndex];

  return (
    <div className="relative overflow-x-clip bg-[#fafafc]">
      {/* Background patterns */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(0,113,227,0.03),_transparent_40%),radial-gradient(circle_at_80%_80%,_rgba(11,17,26,0.02),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0)_0%,_rgba(240,242,245,0.4)_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(11,17,26,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(11,17,26,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToHome={scrollHome}
        scrollToAbout={scrollAbout}
        scrollToWork={scrollWork}
        scrollToContact={scrollContact}
      />

      <main className="relative z-10 px-4 pb-8 pt-24 sm:px-6 sm:pb-12 sm:pt-32 lg:px-10">
        <section
          id="hero"
          ref={heroRef}
          className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center pt-10 text-center lg:min-h-[75vh] xl:min-h-[85vh] 2xl:min-h-[90vh]"
        >
          {/* Main Hero Content - Layered ON TOP */}
          <motion.div
            {...fadeInUp(0.05)}
            style={shouldReduceMotion ? undefined : { y: heroCopyY, opacity: heroCopyOpacity }}
            className="relative z-20 flex flex-col items-center gap-6"
          >
            <div className="inline-block rounded-full border border-custom-blue/10 bg-white/70 px-5 py-2 font-display text-[0.65rem] font-bold uppercase tracking-[0.4em] text-custom-blue/75 backdrop-blur-md shadow-sm">
              UX & Frontend Engineer • SG
            </div>
            <h1 className="max-w-[12ch] font-display text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.9] tracking-[-0.06em] text-custom-blue">
              Precision design.<br/>Absolute velocity.
            </h1>
            <p className="mt-4 max-w-2xl text-[clamp(1rem,1.6vw,1.1rem)] leading-relaxed text-custom-blue/75 px-4">
              Danish design roots. Singapore ambition. Architecting interfaces that execute flawlessly and refuse to compromise on performance.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap pb-10">
              <button
                onClick={scrollWork}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-custom-blue px-8 py-4 text-sm font-semibold text-white shadow-[0_16px_45px_rgba(11,17,26,0.22)] transition-all duration-300 hover:scale-105 hover:bg-[#0071e3] hover:shadow-[0_22px_55px_rgba(0,113,227,0.3)]"
              >
                View Selected Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-custom-blue/15 bg-white/80 px-8 py-4 text-sm font-semibold text-custom-blue shadow-[0_12px_35px_rgba(11,17,26,0.06)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-custom-blue/35 hover:bg-white"
              >
                Inspect Spec Sheet
                <Download className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Portrait - Restored Image Rendering and Z-Index */}
          <motion.div
            style={shouldReduceMotion ? undefined : { y: portraitY, scale: portraitScale, opacity: portraitOpacity }}
            className="absolute bottom-0 left-1/2 -z-10 h-full w-full -translate-x-1/2 overflow-hidden px-4"
          >
            <div className="relative mx-auto h-full w-full max-w-5xl">
              <Image
                src="/images/personalpageprofilealt.png" 
                alt="Portrait of Marcell Varga"
                fill
                priority
                className="object-contain object-bottom opacity-25 filter blur-[0.5px] mix-blend-darken sm:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fafafc] via-transparent to-transparent" />
            </div>
          </motion.div>
        </section>

        <section
          id="about"
          ref={manifestoRef}
          className="relative mx-auto mt-20 h-auto w-full max-w-5xl sm:mt-32 xl:mt-48"
        >
          <div className="flex items-center justify-center py-20 pb-40">
            <motion.div
              {...fadeInUp(0.1)}
              className="glass-panel w-full rounded-[3.5rem] p-10 text-custom-blue shadow-[0_32px_90px_rgba(11,17,26,0.08)] sm:p-16 lg:p-24"
            >
              <SectionLabel index="01" label="Manifesto" />
              <div className="mb-12 h-px w-full bg-[linear-gradient(90deg,rgba(11,17,26,0.12),rgba(11,17,26,0.00))]" />
              <p className="max-w-[40rem] font-display text-[clamp(2rem,3.8vw,3.8rem)] leading-[1.02] tracking-[-0.04em] flex flex-wrap gap-x-[1.2rem] gap-y-3">
                {manifesto.split(" ").map((word, i, arr) => {
                  const start = i / arr.length;
                  const end = start + 1 / arr.length;
                  return (
                    <Word key={i} progress={manifestoProgress} range={[start, end]}>
                      {word}
                    </Word>
                  );
                })}
              </p>
              <div className="mt-20 flex items-center gap-5 text-sm font-bold uppercase tracking-widest text-custom-blue/55">
                <span className="relative flex h-3 w-3">
                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0071e3] opacity-50" />
                   <span className="relative inline-flex h-3 w-3 rounded-full bg-[#0071e3]" />
                </span>
                Design. Engineer. Execute.
              </div>
            </motion.div>
          </div>
        </section>

        <section ref={capabilitiesRef} className="relative mx-auto mt-20 w-full max-w-7xl sm:mt-32">
          <SectionLabel index="02" label="Capabilities" />
          <div className="py-10">
            <motion.div {...fadeInUp(0.04)} className="mb-14 max-w-3xl">
              <h2 className="font-display text-[clamp(2.5rem,4.5vw,4.2rem)] leading-[0.95] tracking-[-0.05em] text-custom-blue">
                The intersection of extreme precision and speed.
              </h2>
              <p className="mt-8 max-w-2xl text-[1.1rem] leading-relaxed text-custom-blue/70">
                Interfaces, system architecture, motion physics, and frontend delivery perfectly aligned. I obsess over the mechanics so the user doesn't have to.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {capabilityCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.article
                    key={card.title}
                    {...fadeInUp(index * 0.1)}
                    className={`glass-panel group relative flex min-h-[22rem] flex-col overflow-hidden rounded-[2.8rem] bg-white/65 p-8 shadow-[0_16px_48px_rgba(11,17,26,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(11,17,26,0.08)] ${card.colSpan}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="mb-10 inline-flex h-15 w-15 items-center justify-center rounded-[1.2rem] border border-custom-blue/8 bg-white text-custom-blue shadow-sm transition-transform duration-500 group-hover:scale-110">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h2 className="font-display text-[2rem] font-medium leading-[1.05] tracking-[-0.04em] text-custom-blue sm:text-[2.2rem]">
                        {card.title}
                      </h2>
                      <p className="mt-5 max-w-[28rem] text-[0.95rem] leading-relaxed text-custom-blue/72">
                        {card.body}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-2.5 pt-10">
                        {capabilityTags.slice(index * 3, index * 3 + 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-custom-blue/12 bg-white/60 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-custom-blue/65"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto mt-20 w-full max-w-7xl sm:mt-32">
          <SectionLabel index="03" label="Selected Work" />
          <motion.div {...fadeInUp(0.04)} className="mt-10 grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, index) => {
              return (
                <motion.article
                  key={project.title}
                  {...fadeInUp(index * 0.1)}
                  className="glass-panel group relative min-h-[26rem] overflow-hidden rounded-[3rem] border-white/90 shadow-[0_32px_80px_rgba(11,17,26,0.06)] transition duration-700 hover:-translate-y-2 hover:shadow-[0_45px_100px_rgba(11,17,26,0.12)]"
                >
                  <Link href={project.link} className="relative flex h-full flex-col justify-between p-8 sm:p-12">
                    {/* RESTORED PROJECT IMAGE RENDERING */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                      <div className={`absolute inset-0 opacity-20 ${project.backgroundClass}`} />
                    </div>
                    
                    <div className="relative z-10 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-white/40 bg-white/10 px-5 py-2 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-xl">
                        {project.category}
                      </span>
                      <span className="text-[0.85rem] font-bold tracking-widest text-white/75">{project.date}</span>
                    </div>

                    <div className="relative z-10 mt-auto transform transition-transform duration-700 group-hover:-translate-y-2">
                      <h3 className="font-display text-[2.5rem] leading-[0.9] tracking-[-0.04em] text-white sm:text-[3.2rem] lg:text-[3.8rem]">
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-md text-[1.1rem] leading-relaxed text-white/85">
                        {project.subTitle}
                      </p>
                      <div className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-bold text-custom-blue transition-all duration-300 hover:bg-[#0071e3] hover:text-white">
                        Read Case Study
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <section ref={trajectoryRef} className="mx-auto mt-20 w-full max-w-7xl sm:mt-40" style={{ minHeight: `${(history.length * 70) + 50}vh` }}>
          <SectionLabel index="04" label="Trajectory" />
          <div className="sticky top-10 flex min-h-[85vh] items-center py-10">
            <div className="grid w-full gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <motion.div
                {...fadeInUp(0.04)}
                className="glass-panel flex flex-col justify-center rounded-[3.2rem] border-white/70 bg-[#081827] p-10 text-white shadow-[0_45px_120px_rgba(7,20,38,0.22)] lg:p-12"
              >
                <div className="inline-block rounded-full border border-white/12 bg-white/6 px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#00a2ff] mb-8">
                   Engineering Path
                </div>
                <h2 className="font-display text-[clamp(2rem,3vw,3.2rem)] leading-[0.95] tracking-[-0.05em]">
                  Built in Denmark.<br/>Now shipping from Singapore.
                </h2>
                <p className="mt-8 text-[1.05rem] leading-relaxed text-white/72">
                  Multimedia design first. Product work next. My trajectory follows a pattern of extreme ownership and rapid technical adaptation.
                </p>
                <div className="mt-12 flex flex-wrap gap-3.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/65">
                  <span className="rounded-full border border-white/18 bg-white/10 px-5 py-2.5">
                    UX Strategy
                  </span>
                  <span className="rounded-full border border-white/18 bg-white/10 px-5 py-2.5">
                    Design Systems
                  </span>
                  <span className="rounded-full border border-white/18 bg-white/10 px-5 py-2.5">
                    Node.js & React
                  </span>
                </div>
              </motion.div>

              <div className="glass-panel rounded-[3.2rem] border border-white/80 bg-white/70 p-6 shadow-[0_24px_90px_rgba(11,17,26,0.08)] sm:p-8 lg:p-10">
                <div className="grid gap-8 h-full xl:grid-cols-[19rem_1fr]">
                  <div className="relative rounded-[2.8rem] border border-custom-blue/8 bg-white/55 p-7 shadow-inner">
                    <div className="pointer-events-none absolute bottom-8 left-[3.15rem] top-8 w-[2px] -translate-x-1/2 bg-custom-blue/10" />
                    <div className="space-y-4">
                      {history.map((item, index) => {
                        const isActive = index === activeTrajectoryIndex;
                        const isPast = index < activeTrajectoryIndex;

                        return (
                          <button
                            key={`${item.company}-${item.time.start}`}
                            type="button"
                            onClick={() => setActiveTrajectoryIndex(index)}
                            className={`relative grid w-full grid-cols-[2.8rem_1fr] items-center gap-5 rounded-[1.6rem] py-4 pr-4 transition duration-500 ${
                              isActive
                                ? "bg-white shadow-[0_12px_45px_rgba(11,17,26,0.08)]"
                                : "hover:bg-white/45"
                            }`}
                            aria-pressed={isActive}
                          >
                            <span className="relative flex h-8 items-center justify-center">
                              {isActive ? (
                                <motion.span
                                  layoutId="trajectory-dot-v2"
                                  className="relative z-10 h-3.5 w-3.5 rounded-full border-[3px] border-[#0071e3] bg-[#0071e3] shadow-[0_0_0_8px_rgba(0,113,227,0.18)]"
                                />
                              ) : (
                                <span
                                  className={`relative z-10 h-3.5 w-3.5 rounded-full border-[3px] transition duration-500 ${
                                    isPast
                                      ? "border-[#0071e3]/45 bg-white"
                                      : "border-custom-blue/22 bg-white"
                                  }`}
                                />
                              )}
                            </span>
                            <span className="min-w-0 pr-2">
                              <span className="block text-[0.68rem] font-bold uppercase tracking-[0.24em] text-custom-blue/45">
                                {item.time.start} {item.time.end ? `- ${item.time.end}` : "- Present"}
                              </span>
                              <span className="mt-1 block text-[1rem] font-bold text-custom-blue truncate">
                                {item.company}
                              </span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.article
                      key={activeTrajectoryIndex}
                      initial={{ opacity: 0, scale: 0.98, x: 15 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.98, x: -15 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="relative flex flex-col justify-center overflow-hidden rounded-[2.8rem] border border-white bg-white/85 p-8 shadow-[0_14px_50px_rgba(11,17,26,0.05)] lg:p-12"
                    >
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="rounded-full border border-custom-blue/12 bg-custom-blue/6 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-custom-blue/65">
                          {activeTrajectoryItem.time.start}{" "}
                          {activeTrajectoryItem.time.end
                            ? `- ${activeTrajectoryItem.time.end}`
                            : "- Present"}
                        </span>
                      </div>
                      <p className="mt-8 font-display text-[clamp(1.8rem,2.8vw,2.5rem)] leading-[0.98] tracking-[-0.04em] text-custom-blue">
                        {activeTrajectoryItem.jobTitle}
                      </p>
                      <div className="mt-6 space-y-5">
                        {activeTrajectoryItem.description.map((paragraph, index) => (
                           <p key={index} className="max-w-[38rem] text-[1rem] leading-relaxed text-custom-blue/75">
                             {paragraph}
                           </p>
                        ))}
                      </div>

                      <div className="mt-12 flex flex-wrap gap-2.5">
                        {activeTrajectoryItem.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-custom-blue/15 bg-white px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-custom-blue/60 shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.article>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto mt-20 w-full max-w-7xl sm:mt-40"
          onMouseEnter={() => setFooterHover(true)}
          onMouseLeave={() => setFooterHover(false)}
        >
          <motion.div
            {...fadeInUp(0.06)}
            className="relative overflow-hidden rounded-[3.5rem] border border-white/70 bg-[#071726] p-10 text-white shadow-[0_45px_150px_rgba(7,20,38,0.3)] sm:p-16 lg:p-24"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,113,227,0.45),_transparent_45%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_60%)]" />
            <div className="relative grid gap-14 lg:grid-cols-[1.25fr_0.75fr] items-center">
              <div>
                <SectionLabel index="05" label="Contact" tone="light" />
                <h2 className="max-w-xl font-display text-[clamp(3rem,6vw,5rem)] leading-[0.92] tracking-[-0.05em] text-white">
                  Ready for the next bold build.
                </h2>
                <p className="mt-10 max-w-lg text-[1.2rem] leading-relaxed text-white/72">
                  If you need a UX-minded engineer who can think visually, move fast in code, and perfect the end product, let’s talk.
                </p>
              </div>

              <div className="grid gap-6">
                <a
                  href="mailto:themarcellvarga@gmail.com"
                  className="glass-panel group flex items-center justify-between rounded-[2rem] border-white/20 bg-white/10 px-8 py-7 transition-all duration-500 hover:-translate-y-2 hover:bg-white/22 hover:border-white/45 hover:shadow-[0_16px_50px_rgba(0,0,0,0.4)] w-full"
                >
                  <span className="flex items-center gap-5">
                    <Mail className="h-7 w-7 text-white" />
                    <span className="text-[1rem] font-bold uppercase tracking-[0.24em] text-white">
                      Email
                    </span>
                  </span>
                  <ArrowUpRight className="h-6 w-6 text-white transition-transform duration-500 group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/marcellvarga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel group flex items-center justify-between rounded-[2rem] border-white/20 bg-white/10 px-8 py-7 transition-all duration-500 hover:-translate-y-2 hover:bg-white/22 hover:border-white/45 hover:shadow-[0_16px_50px_rgba(0,0,0,0.4)] w-full"
                >
                  <span className="flex items-center gap-5">
                    <Linkedin className="h-7 w-7 text-white" />
                    <span className="text-[1rem] font-bold uppercase tracking-[0.24em] text-white">
                      LinkedIn
                    </span>
                  </span>
                  <ArrowUpRight className="h-6 w-6 text-white transition-transform duration-500 group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
                </a>
                <a
                  href="https://github.com/TheMarcellVarga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel group flex items-center justify-between rounded-[2rem] border-white/20 bg-white/10 px-8 py-7 transition-all duration-500 hover:-translate-y-2 hover:bg-white/22 hover:border-white/45 hover:shadow-[0_16px_50px_rgba(0,0,0,0.4)] w-full"
                >
                  <span className="flex items-center gap-5">
                    <Github className="h-7 w-7 text-white" />
                    <span className="text-[1rem] font-bold uppercase tracking-[0.24em] text-white">
                      GitHub
                    </span>
                  </span>
                  <ArrowUpRight className="h-6 w-6 text-white transition-transform duration-500 group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer isHover={footerHover} />
    </div>
  );
}
