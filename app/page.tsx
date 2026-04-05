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
import { SectionLabel } from "./components/SectionLabel";
import { PageBackground } from "./components/PageBackground";

const manifesto =
  "I build interfaces that feel deliberate: design systems, motion details, frontend code, and product thinking in one lane.";

const capabilityCards = [
  {
    title: "I make systems feel alive",
    body: "I turn rough ideas into interface systems with taste, tension, and enough structure for teams to extend without flattening them.",
    icon: Blocks,
    colSpan: "lg:col-span-2",
  },
  {
    title: "I care about shipped feeling",
    body: "Motion, responsiveness, accessibility, and implementation detail all matter. I care about how the live product feels, not just how the mockup looks.",
    icon: Code2,
    colSpan: "lg:col-span-1",
  },
  {
    title: "Research without theater",
    body: "I use interviews, testing, and iteration when they move the product forward. Useful insight beats a beautiful process doc.",
    icon: Sparkles,
    colSpan: "lg:col-span-1",
  },
  {
    title: "Nerdy, but collaborative",
    body: "I like the details, but I also like momentum. I work comfortably across design, engineering, and product without losing the plot.",
    icon: Rocket,
    colSpan: "lg:col-span-2",
  },
];

const capabilityTags = [
  "design systems",
  "interaction design",
  "motion details",
  "frontend architecture",
  "accessibility",
  "prototyping",
  "research",
  "TypeScript",
  "React / Next.js",
  "SvelteKit",
  "AI product flows",
  "weird edge cases",
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

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [footerHover, setFooterHover] = useState(false);
  const [typedText, setTypedText] = useState("");
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = Boolean(prefersReducedMotion);

  const heroRef = useRef<HTMLElement>(null);
  const manifestoRef = useRef<HTMLElement>(null);
  const trajectoryRef = useRef<HTMLElement>(null);
  const [activeTrajectoryIndex, setActiveTrajectoryIndex] = useState(0);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroCopyY = useTransform(heroProgress, [0, 1], [0, -36]);
  const heroPillsY = useTransform(heroProgress, [0, 1], [0, -18]);
  const heroCardsY = useTransform(heroProgress, [0, 1], [0, -28]);
  const heroCopyOpacity = useTransform(heroProgress, [0, 0.85], [1, 0.58]);
  const portraitY = useTransform(heroProgress, [0, 1], [0, -80]);
  const portraitRotate = useTransform(heroProgress, [0, 1], [0, -4]);
  const portraitScale = useTransform(heroProgress, [0, 1], [1, 0.965]);
  const haloScale = useTransform(heroProgress, [0, 1], [1, 1.14]);

  const { scrollYProgress: manifestoProgress } = useScroll({
    target: manifestoRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: trajectoryProgress } = useScroll({
    target: trajectoryRef,
    offset: ["start start", "end end"],
  });
  const manifestoOpacity = useTransform(manifestoProgress, [0, 0.08, 0.82, 1], [0.35, 1, 1, 0.24]);
  const manifestoScale = useTransform(manifestoProgress, [0, 0.25, 1], [0.96, 1, 1.02]);
  const manifestoGlow = useTransform(manifestoProgress, [0, 1], [0.15, 0.5]);

  useMotionValueEvent(trajectoryProgress, "change", (value) => {
    const nextIndex = Math.min(history.length - 1, Math.floor(value * history.length));

    startTransition(() => {
      setActiveTrajectoryIndex((current) => (current === nextIndex ? current : nextIndex));
    });
  });

  useEffect(() => {
    if (shouldReduceMotion) {
      setTypedText(manifesto);
    }
  }, [shouldReduceMotion]);

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

  const [activeSection, setActiveSection] = useState("Intro");

  useEffect(() => {
    const sectionIds = ["hero", "about", "work", "contact"];
    const sectionMap: Record<string, string> = {
      hero: "Intro",
      about: "Manifesto",
      work: "Work",
      contact: "Contact",
    };

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionMap[id]);
            }
          });
        },
        { threshold: 0.2, rootMargin: "-20% 0px -20% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o?.disconnect());
    };
  }, []);

  const featuredProjects = useMemo(() => projects.filter((project) => !project.inProgress), []);
  const activeTrajectoryItem = history[activeTrajectoryIndex];

  return (
    <div className="relative overflow-x-clip">
      <PageBackground />

      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToHome={scrollHome}
        scrollToAbout={scrollAbout}
        scrollToWork={scrollWork}
        scrollToContact={scrollContact}
        activeSection={activeSection}
      />

      <main className="relative z-10 px-4 pb-8 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-10">
        <section
          id="hero"
          ref={heroRef}
          className="mx-auto grid w-full max-w-7xl items-center gap-10 pb-10 pt-4 md:pb-16 lg:min-h-screen lg:grid-cols-[1.15fr_0.85fr] lg:gap-14"
        >
          <div className="relative min-w-0">
            {/* <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={shouldReduceMotion ? undefined : { y: heroPillsY }}
              className="mb-6 flex flex-wrap gap-3"
            >
              {[
                "Product Design",
                "Design systems",
                "Frontend",
              ].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/70 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-custom-blue/70 shadow-[0_10px_30px_rgba(7,20,38,0.08)] backdrop-blur-xl"
                >
                  {pill}
                </span>
              ))}
            </motion.div> */}

            <motion.div
              {...fadeInUp(0.05)}
              style={shouldReduceMotion ? undefined : { y: heroCopyY, opacity: heroCopyOpacity }}
              className="space-y-6"
            >
              <p className="font-display text-sm uppercase tracking-[0.4em] text-custom-blue/45">
                UX & Frontend Engineer
              </p>
              <h1 className="max-w-[7.2ch] font-display text-[2.8rem] font-medium leading-[0.9] tracking-[-0.08em] text-custom-blue sm:text-[3.8rem] md:text-[4.6rem] lg:text-[5.2rem] xl:text-[6.4rem] 2xl:text-[7.6rem]">
                Marcell Varga
              </h1>
              <p className="max-w-2xl text-base leading-7 text-custom-blue/72 sm:text-lg sm:leading-8">
                Born in Denmark, now building from Singapore. I make product interfaces and the code behind them feel sharp.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp(0.12)}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            >
              <button
                onClick={scrollWork}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-custom-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(6,23,44,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0f3555]"
              >
                View selected work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-custom-blue/14 bg-white/70 px-6 py-3 text-sm font-semibold text-custom-blue shadow-[0_10px_30px_rgba(7,20,38,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-custom-blue/28 hover:bg-white"
              >
                Open resume
                <Download className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* <motion.div
              {...fadeInUp(0.18)}
              style={shouldReduceMotion ? undefined : { y: heroCardsY }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {["Product UX", "Interface systems", "Motion + code"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/70 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-custom-blue/65 shadow-[0_10px_30px_rgba(7,20,38,0.08)] backdrop-blur-xl"
                >
                  {item}
                </span>
              ))}
            </motion.div> */}
          </div>

          <motion.div
            style={shouldReduceMotion ? undefined : { y: portraitY, scale: portraitScale }}
            className="relative mx-auto w-full max-w-[32rem]"
          >
            <motion.div
              aria-hidden="true"
              style={shouldReduceMotion ? undefined : { scale: haloScale }}
              className="absolute inset-x-[12%] top-[4%] -z-10 aspect-square rounded-full bg-[radial-gradient(circle,_rgba(56,188,255,0.42)_0%,_rgba(56,188,255,0.12)_30%,_transparent_72%)] blur-3xl"
            />
            <motion.div
              style={shouldReduceMotion ? undefined : { rotate: portraitRotate }}
              className="glass-panel relative overflow-hidden rounded-[3rem] p-4 shadow-[0_40px_120px_rgba(7,20,38,0.16)]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.66),rgba(255,255,255,0.1))]" />
              <div className="relative rounded-[2.35rem] bg-[linear-gradient(160deg,#f0d3bc_0%,#8db5c9_46%,#263f55_100%)] p-5 pb-0">
                <div className="absolute right-5 top-5 rounded-full border border-white/30 bg-white/12 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur-md">
                  Marcell Varga
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

          </motion.div>
        </section>

        <section
          id="about"
          ref={manifestoRef}
          className="relative mx-auto mt-16 h-[200vh] w-full max-w-7xl sm:mt-24 sm:h-[240vh]"
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
              className="grid w-full gap-8 rounded-[3rem] border border-white/60 bg-[#071726]/92 p-8 text-white shadow-[0_40px_140px_rgba(5,16,32,0.28)] lg:p-12"
            >
              <div className="flex flex-col justify-between">
                <div>
                  <SectionLabel index="01" label="Manifesto" tone="light" />
                  <motion.div
                    style={shouldReduceMotion ? undefined : { opacity: manifestoGlow }}
                    className="mb-8 h-px w-full bg-[linear-gradient(90deg,rgba(76,216,255,0.85),rgba(76,216,255,0.02))]"
                  />
                  <p
                    className="max-w-4xl font-display text-[clamp(2rem,4vw,4.6rem)] leading-[1.02] tracking-[-0.06em] !text-[#f8fbff]"
                    style={{
                      color: "#f8fbff",
                      WebkitTextFillColor: "#f8fbff",
                      textShadow: "0 1px 0 rgba(255,255,255,0.06)",
                    }}
                  >
                    {typedText}
                    {!shouldReduceMotion && (
                      <span className="ml-1 inline-block animate-pulse text-[#67d9ff]">|</span>
                    )}
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-4 text-sm text-white/58">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#67d9ff]" />
                  Design, code, motion.
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center py-10 sm:py-16">
          <SectionLabel index="02" label="Capabilities" />
          <div className="pt-2">
            <motion.div {...fadeInUp(0.04)} className="mb-6 max-w-3xl">
              <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.8rem)] leading-[0.95] tracking-[-0.05em] text-custom-blue">
                The useful overlap between taste and implementation.
              </h2>
              <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-custom-blue/70">
                Interfaces, motion, systems, and frontend detail all need to line up. These are the pieces I actually care about.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {capabilityCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.article
                    key={card.title}
                    {...fadeInUp(index * 0.1)}
                    className={`glass-panel group relative flex min-h-[14rem] flex-col overflow-hidden rounded-[2.2rem] bg-white/65 p-6 shadow-[0_12px_40px_rgba(11,17,26,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(11,17,26,0.06)] ${card.colSpan}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-[1rem] border border-custom-blue/8 bg-white text-custom-blue shadow-sm transition-transform duration-500 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="font-display text-[1.4rem] font-medium leading-[1.05] tracking-[-0.04em] text-custom-blue sm:text-[1.6rem]">
                        {card.title}
                      </h2>
                      <p className="mt-3 max-w-[28rem] text-[0.82rem] leading-relaxed text-custom-blue/72">
                        {card.body}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-2 pt-6">
                        {capabilityTags.slice(index * 3, index * 3 + 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-custom-blue/12 bg-white/60 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-custom-blue/65"
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

        <section id="work" className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center py-10 sm:py-16">
          <SectionLabel index="03" label="Selected Work" />
          <motion.div {...fadeInUp(0.04)} className="mt-8 grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                {...fadeInUp(index * 0.1)}
                className="glass-panel group relative min-h-[18rem] overflow-hidden rounded-[2.5rem] border-white/90 shadow-[0_28px_70px_rgba(11,17,26,0.06)] transition duration-700 hover:-translate-y-1.5 hover:shadow-[0_35px_90px_rgba(11,17,26,0.1)]"
              >
                <Link
                  href={project.link}
                  className="relative flex h-full flex-col justify-between p-7 sm:p-9"
                  aria-label={`Open ${project.title}`}
                >
                  <div className="absolute inset-0">
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
                    <h3 className="font-display text-[1.8rem] leading-[0.9] tracking-[-0.04em] text-white sm:text-[2.2rem] lg:text-[2.6rem]">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-white/85">
                      {project.highlight}
                    </p>
                    <div className="mt-8 inline-flex w-fit items-center gap-2.5 rounded-full bg-white px-6 py-2.5 text-xs font-bold text-custom-blue transition-all duration-300 hover:bg-[#0071e3] hover:text-white">
                      Read Case Study
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section ref={trajectoryRef} className="mx-auto mt-20 w-full max-w-7xl sm:mt-32" style={{ minHeight: `${(history.length * 110) + 100}vh` }}>
          <SectionLabel index="04" label="Trajectory" />
          <div className="sticky top-0 flex min-h-screen items-center py-10">
            <div className="w-full space-y-6">
              <motion.div
                {...fadeInUp(0.04)}
                className="glass-panel rounded-[2.5rem] bg-white/72 p-6 shadow-[0_18px_65px_rgba(11,17,26,0.07)] backdrop-blur-xl sm:p-8 lg:p-8"
              >
                <div className="space-y-3">
                  <div className="inline-flex rounded-full border border-custom-blue/10 bg-white/75 px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-custom-blue/55">
                    Engineering Path
                  </div>
                  <p className="font-display text-[clamp(1.75rem,2.8vw,2.8rem)] leading-[0.94] tracking-[-0.05em] text-custom-blue">
                    Built in Denmark. Now shipping from Singapore.
                  </p>
                  <p className="max-w-2xl text-sm leading-7 text-custom-blue/68">
                    Multimedia design first. Product work next. The timeline stays pinned while each step advances one by one.
                  </p>
                </div>
              </motion.div>

              <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-start">
                <div className="glass-panel relative h-full rounded-[2.8rem] bg-white/70 p-7 shadow-[0_12px_45px_rgba(11,17,26,0.06)]">
                  <div className="pointer-events-none absolute bottom-8 left-[3rem] top-8 w-[2px] -translate-x-1/2 bg-custom-blue/10" />
                  <div className="space-y-4">
                    {history.map((item, index) => {
                      const isActive = index === activeTrajectoryIndex;
                      const isPast = index < activeTrajectoryIndex;

                      return (
                        <button
                          key={`${item.company}-${item.time.start}`}
                          type="button"
                          onClick={() => setActiveTrajectoryIndex(index)}
                          className={`relative grid w-full grid-cols-[2.5rem_1fr] items-center gap-3 rounded-[1.4rem] py-3 pr-3 text-left transition duration-300 ${
                            isActive
                              ? "bg-white shadow-[0_12px_45px_rgba(11,17,26,0.08)]"
                              : "hover:bg-white/45"
                          }`}
                          aria-pressed={isActive}
                        >
                          <span className="relative flex h-7 items-center justify-center">
                            {isActive ? (
                              <motion.span
                                layoutId="trajectory-dot-v2"
                                className="relative z-10 h-2.5 w-2.5 rounded-full border-2 border-[#67d9ff] bg-[#67d9ff] shadow-[0_0_0_7px_rgba(103,217,255,0.15)]"
                              />
                            ) : (
                              <span
                                className={`relative z-10 h-2.5 w-2.5 rounded-full border-2 transition duration-300 ${
                                  isPast
                                    ? "border-[#67d9ff]/65 bg-white"
                                    : "border-custom-blue/18 bg-white"
                                }`}
                              />
                            )}
                          </span>
                          <span className="min-w-0 pr-2">
                            <span className="block text-[0.68rem] font-bold uppercase tracking-[0.24em] text-custom-blue/45">
                              {item.time.start} {item.time.end ? `- ${item.time.end}` : "- Present"}
                            </span>
                            <span className="mt-1 block truncate text-[1rem] font-bold text-custom-blue">
                              {item.company}
                            </span>
                            <span className="mt-0.5 block text-[0.72rem] leading-5 text-custom-blue/60">
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
                    initial={{ opacity: 0, scale: 0.98, x: 15 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.98, x: -15 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="glass-panel relative flex flex-col justify-start overflow-hidden rounded-[2.8rem] bg-white/72 p-8 shadow-[0_12px_45px_rgba(11,17,26,0.06)] lg:p-10"
                  >
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="rounded-full border border-custom-blue/12 bg-custom-blue/6 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-custom-blue/65">
                        {activeTrajectoryItem.time.start}{" "}
                        {activeTrajectoryItem.time.end
                          ? `- ${activeTrajectoryItem.time.end}`
                          : "- Present"}
                      </span>
                      <span className="rounded-full border border-custom-blue/10 bg-white px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-custom-blue/55">
                        Step {activeTrajectoryIndex + 1} of {history.length}
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
        </section>

        <section
          id="contact"
          className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center py-10 sm:py-16"
          onMouseEnter={() => setFooterHover(true)}
          onMouseLeave={() => setFooterHover(false)}
        >
          <motion.div
            {...fadeInUp(0.06)}
            className="relative overflow-hidden rounded-[3rem] border border-white/60 bg-[#071726] p-8 text-white shadow-[0_40px_140px_rgba(7,20,38,0.26)] sm:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(72,205,255,0.26),_transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_55%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <SectionLabel index="05" label="Contact" tone="light" />
                <h2 className="max-w-3xl font-display text-[clamp(2.6rem,5vw,5rem)] leading-[0.96] tracking-[-0.07em] text-white">
                  Ready for the next ambitious build.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                  If you need a UX-minded engineer who can think visually, move fast in code, and care about the end product as much as the process, let’s talk.
                </p>
              </div>

              <div className="grid gap-4 self-end">
                <a
                  href="mailto:themarcellvarga@gmail.com"
                  className="group flex items-center justify-between rounded-[1.8rem] border border-white/12 bg-white/6 px-5 py-4 transition duration-300 hover:border-white/24 hover:bg-white/10"
                >
                  <span className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#67d9ff]" />
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                      themarcellvarga@gmail.com
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a
                  href="https://www.linkedin.com/in/marcellvarga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-[1.8rem] border border-white/12 bg-white/6 px-5 py-4 transition duration-300 hover:border-white/24 hover:bg-white/10"
                >
                  <span className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-[#67d9ff]" />
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                      LinkedIn
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a
                  href="https://github.com/TheMarcellVarga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-[1.8rem] border border-white/12 bg-white/6 px-5 py-4 transition duration-300 hover:border-white/24 hover:bg-white/10"
                >
                  <span className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-[#67d9ff]" />
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
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
