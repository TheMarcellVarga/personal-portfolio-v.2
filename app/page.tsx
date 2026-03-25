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
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Radar,
} from "lucide-react";
import Header from "./header";
import Footer from "./footer";
import { history } from "./data/history";
import { projects } from "./data/projects";

const manifesto =
  "I design and ship product systems for companies that need clarity, speed, and technical credibility.";

const heroMetrics = [
  {
    value: "4+",
    label: "Years in product teams",
    detail: "UX, UI, and frontend across SaaS and operational tooling.",
  },
  {
    value: "3",
    label: "Core disciplines",
    detail: "Design systems, interaction design, and TypeScript delivery.",
  },
  {
    value: "Now",
    label: "Current base",
    detail: "Singapore, working across product thinking and implementation.",
  },
];

const operatingPrinciples = [
  {
    title: "Design for decisions",
    body: "Interfaces should reduce hesitation, expose the right signals, and make the next action obvious.",
  },
  {
    title: "Ship with technical intent",
    body: "I work in code, not just mockups, so system constraints and implementation details are part of the design process.",
  },
  {
    title: "Keep enterprise products human",
    body: "Operational software can be precise without feeling cold, overloaded, or visually exhausted.",
  },
];

const capabilityCards = [
  {
    title: "Product systems",
    body: "I structure complex product surfaces so they scale across teams, features, and edge cases without losing coherence.",
    icon: Blocks,
  },
  {
    title: "Frontend execution",
    body: "I turn direction into shipped interfaces with React, Next.js, TypeScript, and enough rigor to survive production pressure.",
    icon: Code2,
  },
  {
    title: "Business-facing UX",
    body: "I design for SaaS, admin, analytics, and workflow-heavy products where clarity matters more than decoration.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Signal-driven polish",
    body: "Motion, hierarchy, states, and copy all support the product story. The goal is confidence, not noise.",
    icon: Radar,
  },
];

const capabilityTags = [
  "design systems",
  "enterprise UX",
  "workflow design",
  "frontend architecture",
  "analytics surfaces",
  "AI product flows",
  "accessibility",
  "TypeScript",
  "React / Next.js",
  "prototyping",
  "cross-functional delivery",
  "product clarity",
];

function fadeInUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };
}

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
        isLight ? "text-white/58" : "text-custom-blue/50"
      }`}
    >
      <span>{index}</span>
      <span className={`h-px w-12 ${isLight ? "bg-white/16" : "bg-custom-blue/12"}`} />
      <span>{label}</span>
    </div>
  );
}

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [footerHover, setFooterHover] = useState(false);
  const [typedText, setTypedText] = useState("");
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
  const heroCopyY = useTransform(heroProgress, [0, 1], [0, -36]);
  const heroPanelY = useTransform(heroProgress, [0, 1], [0, -24]);
  const heroCopyOpacity = useTransform(heroProgress, [0, 0.85], [1, 0.62]);
  const portraitY = useTransform(heroProgress, [0, 1], [0, -72]);
  const portraitRotate = useTransform(heroProgress, [0, 1], [0, -3]);
  const portraitScale = useTransform(heroProgress, [0, 1], [1, 0.972]);
  const haloScale = useTransform(heroProgress, [0, 1], [1, 1.12]);

  const { scrollYProgress: manifestoProgress } = useScroll({
    target: manifestoRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: capabilitiesProgress } = useScroll({
    target: capabilitiesRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: trajectoryProgress } = useScroll({
    target: trajectoryRef,
    offset: ["start start", "end end"],
  });
  const manifestoOpacity = useTransform(manifestoProgress, [0, 0.08, 0.82, 1], [0.35, 1, 1, 0.24]);
  const manifestoScale = useTransform(manifestoProgress, [0, 0.25, 1], [0.96, 1, 1.02]);
  const manifestoGlow = useTransform(manifestoProgress, [0, 1], [0.12, 0.55]);
  const capabilityTrackX = useTransform(capabilitiesProgress, [0, 1], ["0%", "-62%"]);

  useMotionValueEvent(trajectoryProgress, "change", (value) => {
    const nextIndex = Math.min(history.length - 1, Math.floor(value * history.length));

    startTransition(() => {
      setActiveTrajectoryIndex((current) => (current === nextIndex ? current : nextIndex));
    });
  });

  useMotionValueEvent(manifestoProgress, "change", (value) => {
    if (shouldReduceMotion) return;

    const nextLength = Math.round(value * manifesto.length);
    const nextText = manifesto.slice(0, nextLength);

    startTransition(() => {
      setTypedText((current) => (current === nextText ? current : nextText));
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
  const manifestoText = shouldReduceMotion ? manifesto : typedText;

  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),_transparent_24%),radial-gradient(circle_at_82%_12%,_rgba(96,165,250,0.12),_transparent_22%),linear-gradient(180deg,_#04111d_0%,_#071827_30%,_#0c1f32_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:88px_88px] [mask-image:radial-gradient(circle_at_center,black_48%,transparent_86%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.08),transparent_40%)]" />

      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToHome={scrollHome}
        scrollToAbout={scrollAbout}
        scrollToWork={scrollWork}
        scrollToContact={scrollContact}
      />

      <main className="relative z-10 px-4 pb-8 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-10">
        <section
          id="hero"
          ref={heroRef}
          className="mx-auto grid w-full max-w-7xl items-center gap-10 pb-10 pt-4 md:pb-16 lg:min-h-[46rem] lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 xl:min-h-[52rem]"
        >
          <div className="relative min-w-0">
            <motion.div
              {...fadeInUp(0.05)}
              style={shouldReduceMotion ? undefined : { y: heroCopyY, opacity: heroCopyOpacity }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/60">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
                  Product Design
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
                  Frontend Engineering
                </span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-cyan-100 backdrop-blur-xl">
                  Singapore
                </span>
              </div>

              <p className="font-display text-sm uppercase tracking-[0.38em] text-cyan-100/55">
                UX & Frontend Engineer
              </p>
              <h1 className="max-w-[9.2ch] font-display text-[3rem] font-medium leading-[0.88] tracking-[-0.08em] text-white sm:text-[4rem] md:text-[4.8rem] lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7.2rem]">
                Business software should feel as sharp as it performs.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                I help companies turn complex workflows into confident product experiences with clear systems, strong interaction design, and production-ready frontend execution.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp(0.12)}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            >
              <button
                onClick={scrollWork}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(34,211,238,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Review selected work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_44px_rgba(3,12,24,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
              >
                Open resume
                <Download className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              {...fadeInUp(0.18)}
              style={shouldReduceMotion ? undefined : { y: heroPanelY }}
              className="mt-10 grid gap-4 lg:grid-cols-3"
            >
              {heroMetrics.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[1.8rem] border border-white/10 bg-white/6 p-5 shadow-[0_18px_50px_rgba(4,14,28,0.2)] backdrop-blur-2xl"
                >
                  <p className="text-[2rem] font-semibold tracking-[-0.06em] text-white">{item.value}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-100">{item.label}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.detail}</p>
                </article>
              ))}
            </motion.div>
          </div>

          <motion.div
            style={shouldReduceMotion ? undefined : { y: portraitY, scale: portraitScale }}
            className="relative mx-auto w-full max-w-[36rem]"
          >
            <motion.div
              aria-hidden="true"
              style={shouldReduceMotion ? undefined : { scale: haloScale }}
              className="absolute inset-x-[10%] top-[6%] -z-10 aspect-square rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.34)_0%,_rgba(34,211,238,0.08)_34%,_transparent_72%)] blur-3xl"
            />
            <div className="grid gap-4">
              <motion.div
                style={shouldReduceMotion ? undefined : { rotate: portraitRotate }}
                className="glass-panel relative overflow-hidden rounded-[2.6rem] border border-white/10 p-4 shadow-[0_40px_120px_rgba(2,10,20,0.36)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
                <div className="relative rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,#0b2034_0%,#10314d_35%,#17395a_70%,#0d1827_100%)] p-5 pb-0">
                  <div className="absolute right-5 top-5 rounded-full border border-cyan-300/24 bg-cyan-300/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-100 backdrop-blur-md">
                    Available for ambitious teams
                  </div>
                  <Image
                    src="/images/personalpageprofilealt.png"
                    alt="Portrait of Marcell Varga"
                    width={960}
                    height={1280}
                    priority
                    className="mx-auto h-auto w-full max-w-[26rem] object-contain"
                  />
                </div>
              </motion.div>

              <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <article className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 shadow-[0_24px_80px_rgba(2,10,20,0.28)] backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-400">
                      Current focus
                    </p>
                    <ChartNoAxesCombined className="h-4 w-4 text-cyan-200" />
                  </div>
                  <p className="mt-4 text-lg font-semibold leading-7 text-white">
                    UX, interface systems, and frontend delivery for workflow-heavy products.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "Enterprise UX",
                      "Design systems",
                      "React + TypeScript",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>

                <article className="rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-[0_24px_80px_rgba(2,10,20,0.24)] backdrop-blur-xl">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Working style
                  </p>
                  <div className="mt-4 space-y-4">
                    {[
                      "Align product goals with interface hierarchy",
                      "Prototype enough to remove ambiguity",
                      "Ship details that hold up in production",
                    ].map((item, index) => (
                      <div key={item} className="flex gap-3">
                        <span className="mt-0.5 text-xs font-semibold text-cyan-200/72">0{index + 1}</span>
                        <p className="text-sm leading-6 text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </motion.div>
        </section>

        <section
          id="about"
          ref={manifestoRef}
          className="relative mx-auto mt-16 h-[210vh] w-full max-w-7xl sm:mt-24 sm:h-[240vh]"
        >
          <div className="sticky top-0 flex min-h-screen items-center py-12">
            <motion.div
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: manifestoOpacity,
                      scale: manifestoScale,
                    }
              }
              className="grid w-full gap-8 rounded-[2.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(6,18,31,0.96),rgba(8,28,45,0.92))] p-8 text-white shadow-[0_40px_140px_rgba(2,10,20,0.34)] lg:grid-cols-[1.05fr_0.95fr] lg:p-12"
            >
              <div className="flex flex-col justify-between">
                <div>
                  <SectionLabel index="01" label="Positioning" tone="light" />
                  <motion.div
                    style={shouldReduceMotion ? undefined : { opacity: manifestoGlow }}
                    className="mb-8 h-px w-full bg-[linear-gradient(90deg,rgba(34,211,238,0.85),rgba(34,211,238,0.02))]"
                  />
                  <p
                    className="max-w-4xl font-display text-[clamp(2.2rem,4vw,4.8rem)] leading-[1.02] tracking-[-0.06em] text-slate-50"
                  >
                    {manifestoText}
                    {!shouldReduceMotion && (
                      <span className="ml-1 inline-block animate-pulse text-cyan-300">|</span>
                    )}
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-4 text-sm text-slate-400">
                  <span className="inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                  Strong product taste, translated into working systems.
                </div>
              </div>

              <div className="grid gap-4 self-stretch">
                {operatingPrinciples.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-[1.8rem] border border-white/10 bg-white/4 p-5 backdrop-blur-xl"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/54">
                        Principle 0{index + 1}
                      </p>
                      <span className="h-px w-10 bg-white/10" />
                    </div>
                    <h3 className="mt-4 font-display text-[1.5rem] leading-tight tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
                  </article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section ref={capabilitiesRef} className="relative mt-16 h-[180vh] w-full sm:mt-24 sm:h-[220vh]">
          <SectionLabel index="02" label="Capabilities" tone="light" />
          <div className="sticky top-0 flex min-h-screen items-center py-10">
            <div className="w-full">
              <motion.div {...fadeInUp(0.04)} className="mb-6 max-w-3xl">
                <h2 className="max-w-[12ch] font-display text-[clamp(2.3rem,4vw,4.6rem)] leading-[0.95] tracking-[-0.06em] text-white">
                  What I bring to product teams that need both taste and throughput.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                  This is the overlap I care about: business-facing UX, interaction systems, and implementation detail that can survive real product velocity.
                </p>
              </motion.div>

              <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-slate-950/42 p-5 shadow-[0_28px_90px_rgba(2,10,20,0.3)] backdrop-blur-2xl sm:p-6">
                <div className="pointer-events-none absolute inset-x-6 top-6 h-px bg-white/10" />
                <motion.div
                  style={shouldReduceMotion ? undefined : { x: capabilityTrackX }}
                  className="relative z-10 flex w-max gap-5 pr-8 will-change-transform"
                >
                  {capabilityCards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                      <motion.article
                        key={card.title}
                        {...fadeInUp(index * 0.05)}
                        className="flex h-[21rem] w-[min(82vw,28rem)] shrink-0 flex-col rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,24,39,0.96),rgba(12,34,54,0.9))] p-6 shadow-[0_24px_80px_rgba(2,10,20,0.34)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/22 hover:shadow-[0_28px_90px_rgba(2,10,20,0.4)] backdrop-blur-xl"
                      >
                        <div className="mb-8 inline-flex rounded-2xl border border-cyan-300/16 bg-cyan-300/10 p-3 text-cyan-100">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h2 className="font-display text-[clamp(1.8rem,3vw,2.7rem)] leading-tight tracking-[-0.05em] text-white">
                          {card.title}
                        </h2>
                        <p className="mt-4 max-w-[24rem] text-sm leading-7 text-slate-300">{card.body}</p>
                        <div className="mt-auto flex flex-wrap gap-2 pt-5">
                          {capabilityTags.slice(index * 3, index * 3 + 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.article>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mt-16 w-full sm:mt-24">
          <SectionLabel index="03" label="Selected Work" tone="light" />
          <motion.div {...fadeInUp(0.04)} className="mb-8 max-w-3xl">
            <h2 className="max-w-[12ch] font-display text-[clamp(2.3rem,4vw,4.5rem)] leading-[0.95] tracking-[-0.06em] text-white">
              Product case studies built around systems, not surface-level styling.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              SaaS, enterprise tooling, and interface problems where structure, trust, and execution quality matter.
            </p>
          </motion.div>
          <motion.div {...fadeInUp(0.04)} className="mt-4 grid gap-4 lg:grid-cols-12">
            {featuredProjects.map((project, index) => {
              const isLarge = index === 0;
              return (
                <motion.article
                  key={project.title}
                  {...fadeInUp(index * 0.05)}
                  className={`group overflow-hidden rounded-[2.3rem] border border-white/10 bg-slate-950/34 shadow-[0_28px_90px_rgba(2,10,20,0.26)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-white/18 ${
                    isLarge ? "lg:col-span-7 lg:row-span-2 min-h-[22rem]" : "lg:col-span-5 min-h-[11rem]"
                  }`}
                >
                  <Link href={project.link} className="relative flex h-full min-h-[11rem] flex-col justify-between p-6 sm:p-7">
                    <div className={`absolute inset-0 opacity-90 ${project.backgroundClass}`} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(135deg,rgba(6,18,31,0.24),rgba(6,18,31,0.64))]" />
                    <div className="relative flex items-center justify-between gap-3">
                      <span className="rounded-full border border-white/16 bg-slate-950/30 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-100 backdrop-blur-md">
                        {project.category}
                      </span>
                      <span className="text-sm text-slate-200/72">{project.date}</span>
                    </div>
                    <div className="relative mt-auto max-w-[28rem]">
                      <h3 className={`font-display leading-[0.95] tracking-[-0.06em] text-white ${isLarge ? "text-[clamp(2.2rem,4vw,4rem)]" : "text-[clamp(1.8rem,3vw,2.5rem)]"}`}>
                        {project.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-100/82">
                        {project.subTitle}
                      </p>
                    </div>
                    <div className="relative mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white">
                      Open case study
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <section
          ref={trajectoryRef}
          className="mt-12 w-full sm:mt-20"
          style={{ minHeight: `${history.length * 110 + 100}vh` }}
        >
          <SectionLabel index="04" label="Experience" tone="light" />
          <div className="sticky top-0 flex min-h-screen items-center py-10">
            <div className="grid w-full gap-6 lg:grid-cols-[0.86fr_1.14fr]">
              <motion.div
                {...fadeInUp(0.04)}
                className="min-w-0 rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(6,18,31,0.95),rgba(7,25,41,0.92))] p-7 text-white shadow-[0_32px_110px_rgba(2,10,20,0.34)]"
              >
                <p className="font-display text-[clamp(1.8rem,2.8vw,3.3rem)] leading-tight tracking-[-0.06em]">
                  Built in Denmark. Operating from Singapore.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  My path moved from multimedia design into product UX and then into frontend execution. Each step added more technical depth without dropping the design standard.
                </p>
                <div className="mt-8 flex flex-wrap gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
                  <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5">
                    Product systems
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5">
                    Design-to-code
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5">
                    Enterprise software
                  </span>
                </div>
              </motion.div>

              <div className="rounded-[2.4rem] border border-white/10 bg-white/6 p-5 shadow-[0_28px_90px_rgba(2,10,20,0.24)] backdrop-blur-xl sm:p-6">
                <div className="grid gap-5 xl:grid-cols-[19rem_1fr]">
                  <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/52 p-5 shadow-[0_16px_48px_rgba(2,10,20,0.2)]">
                    <div className="pointer-events-none absolute bottom-5 left-10 top-5 w-px -translate-x-1/2 bg-white/10" />
                    <div className="space-y-3">
                      {history.map((item, index) => {
                        const isActive = index === activeTrajectoryIndex;
                        const isPast = index < activeTrajectoryIndex;

                        return (
                          <button
                            key={`${item.company}-${item.time.start}`}
                            type="button"
                            className={`relative grid w-full grid-cols-[2.5rem_1fr] items-start gap-3 rounded-[1.4rem] py-3 pr-3 text-left transition duration-300 ${
                              isActive
                                ? "bg-white/8 shadow-[0_12px_36px_rgba(2,10,20,0.18)]"
                                : "hover:bg-white/5"
                            }`}
                            aria-pressed={isActive}
                          >
                            <span className="relative flex h-7 items-center justify-center">
                              {isActive ? (
                                <motion.span
                                  layoutId="trajectory-dot"
                                  className="relative z-10 h-2.5 w-2.5 rounded-full border-2 border-cyan-300 bg-cyan-300 shadow-[0_0_0_7px_rgba(34,211,238,0.16)]"
                                />
                              ) : (
                                <span
                                  className={`relative z-10 h-2.5 w-2.5 rounded-full border-2 transition duration-300 ${
                                    isPast ? "border-cyan-300/65 bg-transparent" : "border-white/18 bg-transparent"
                                  }`}
                                />
                              )}
                            </span>
                            <span className="min-w-0 pt-0.5">
                              <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                                {item.time.start} {item.time.end ? `- ${item.time.end}` : "- Present"}
                              </span>
                              <span className="mt-1 block text-sm font-semibold text-white">{item.company}</span>
                              <span className="mt-0.5 block text-[0.72rem] leading-5 text-slate-400">
                                {item.jobTitle}
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
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(9,24,39,0.96),rgba(14,35,56,0.92))] p-6 shadow-[0_18px_55px_rgba(2,10,20,0.24)] sm:p-7"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.05),transparent_22%)]" />
                      <div className="relative flex h-full flex-col">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-slate-400">
                            {activeTrajectoryItem.time.start}{" "}
                            {activeTrajectoryItem.time.end
                              ? `- ${activeTrajectoryItem.time.end}`
                              : "- Present"}
                          </p>
                          <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-300">
                            Step {activeTrajectoryIndex + 1} of {history.length}
                          </span>
                        </div>
                        <p className="mt-4 font-display text-[clamp(1.9rem,3vw,3rem)] leading-[0.96] tracking-[-0.06em] text-white">
                          {activeTrajectoryItem.jobTitle}
                        </p>
                        <p className="mt-3 max-w-[38rem] text-sm leading-7 text-slate-300">
                          {activeTrajectoryItem.description[0]}
                        </p>
                        <p className="mt-3 max-w-[38rem] text-sm leading-7 text-slate-300">
                          {activeTrajectoryItem.description[1]}
                        </p>
                        <p className="mt-3 max-w-[38rem] text-sm leading-7 text-slate-300">
                          {activeTrajectoryItem.description[2]}
                        </p>

                        <div className="mt-auto flex flex-wrap gap-2 pt-6">
                          {activeTrajectoryItem.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
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
          className="mt-16 w-full sm:mt-24"
          onMouseEnter={() => setFooterHover(true)}
          onMouseLeave={() => setFooterHover(false)}
        >
          <motion.div
            {...fadeInUp(0.06)}
            className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(5,17,30,0.96),rgba(7,26,42,0.92))] p-8 text-white shadow-[0_40px_140px_rgba(2,10,20,0.3)] sm:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_55%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <SectionLabel index="05" label="Contact" tone="light" />
                <h2 className="max-w-3xl font-display text-[clamp(2.6rem,5vw,5rem)] leading-[0.96] tracking-[-0.07em] text-white">
                  Looking for product design with engineering credibility.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  I work best with teams building serious software: SaaS platforms, internal tools, AI-assisted workflows, and business products that need a higher standard of execution.
                </p>
              </div>

              <div className="grid gap-4 self-end">
                <a
                  href="mailto:themarcellvarga@gmail.com"
                  className="group flex items-center justify-between rounded-[1.8rem] border border-white/10 bg-white/6 px-5 py-4 transition duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  <span className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-cyan-200" />
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/84">
                      themarcellvarga@gmail.com
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a
                  href="https://www.linkedin.com/in/marcellvarga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-[1.8rem] border border-white/10 bg-white/6 px-5 py-4 transition duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  <span className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-cyan-200" />
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/84">
                      LinkedIn
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a
                  href="https://github.com/TheMarcellVarga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-[1.8rem] border border-white/10 bg-white/6 px-5 py-4 transition duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  <span className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-cyan-200" />
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/84">
                      GitHub
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
