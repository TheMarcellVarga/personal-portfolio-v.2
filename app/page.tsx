"use client";

import {
  startTransition,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
import { HomeIntro } from "./components/HomeIntro";
import { PageBackground } from "./components/PageBackground";

const manifesto =
  "I build interfaces that feel deliberate: design systems, motion details, frontend code, and product thinking in one lane.";

const capabilityCards = [
  {
    title: "Systems with character",
    body: "I turn rough concepts into interface systems with enough structure to scale and enough taste to stay distinct.",
    icon: Blocks,
    colSpan: "lg:col-span-2",
  },
  {
    title: "Shipped feeling matters",
    body: "Motion, responsiveness, accessibility, and implementation detail matter as much as the mockup itself.",
    icon: Code2,
    colSpan: "lg:col-span-1",
  },
  {
    title: "Research without theater",
    body: "I use interviews, testing, and iteration when they move the product forward. Useful insight beats ceremony.",
    icon: Sparkles,
    colSpan: "lg:col-span-1",
  },
  {
    title: "Cross-functional by default",
    body: "I work comfortably across design, engineering, and product without losing momentum or diluting the craft.",
    icon: Rocket,
    colSpan: "lg:col-span-2",
  },
];

const capabilityTags = [
  "design systems",
  "interaction design",
  "motion systems",
  "frontend architecture",
  "accessibility",
  "prototyping",
  "product thinking",
  "AI product flows",
  "React / Next.js",
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
  const [introStage, setIntroStage] = useState<"checking" | "playing" | "done">(
    "checking",
  );
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = Boolean(prefersReducedMotion);
  const headerLogoRef = useRef<HTMLSpanElement>(null);

  const heroRef = useRef<HTMLElement>(null);
  const manifestoRef = useRef<HTMLElement>(null);
  const trajectoryRef = useRef<HTMLElement>(null);
  const workSectionRef = useRef<HTMLElement>(null);
  const workCarouselViewportRef = useRef<HTMLDivElement>(null);
  const workCarouselTrackRef = useRef<HTMLDivElement>(null);
  const [workCarouselMaxScroll, setWorkCarouselMaxScroll] = useState(0);
  const [activeTrajectoryIndex, setActiveTrajectoryIndex] = useState(0);
  const trajectoryHeightVh = history.length * 110 + 100;
  const [trajectoryMinHeightPx, setTrajectoryMinHeightPx] = useState<
    number | null
  >(null);

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
  const liquidProgress = useTransform(heroProgress, [0.08, 0.55], [0, 1]);
  const liquidRise = useTransform(liquidProgress, [0, 1], [260, -54]);
  const { scrollYProgress: manifestoProgress } = useScroll({
    target: manifestoRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: trajectoryProgress } = useScroll({
    target: trajectoryRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: workScrollProgress } = useScroll({
    target: workSectionRef,
    offset: ["start start", "end end"],
  });
  const manifestoRevealEnd = 0.74;
  const manifestoOpacity = useTransform(
    manifestoProgress,
    [0, 0.12, 0.74, 0.86, 0.95, 1],
    [0.2, 1, 1, 0.88, 0.32, 0],
  );
  const manifestoScale = useTransform(
    manifestoProgress,
    [0, 0.18, 0.74, 0.86, 1],
    [0.95, 1, 1, 0.99, 0.92],
  );
  const manifestoY = useTransform(
    manifestoProgress,
    [0, 0.2, 0.74, 0.86, 1],
    [28, 0, 0, -8, -72],
  );
  const manifestoGlow = useTransform(manifestoProgress, [0, 1], [0.15, 0.5]);
  const workCarouselX = useTransform(
    workScrollProgress,
    (p) => -p * workCarouselMaxScroll,
  );

  useMotionValueEvent(trajectoryProgress, "change", (value) => {
    const nextIndex = Math.min(
      history.length - 1,
      Math.floor(value * history.length),
    );

    startTransition(() => {
      setActiveTrajectoryIndex((current) =>
        current === nextIndex ? current : nextIndex,
      );
    });
  });

  useEffect(() => {
    if (shouldReduceMotion) {
      setTypedText(manifesto);
    }
  }, [shouldReduceMotion]);

  useLayoutEffect(() => {
    if (shouldReduceMotion) {
      setIntroStage("done");
      return;
    }

    const hasPlayedIntro = window.sessionStorage.getItem("mv-home-intro") === "1";
    setIntroStage(hasPlayedIntro ? "done" : "playing");
  }, [shouldReduceMotion]);

  const finishIntro = useCallback(() => {
    window.sessionStorage.setItem("mv-home-intro", "1");
    setIntroStage("done");
  }, []);

  useEffect(() => {
    if (introStage !== "playing") return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [introStage]);

  useMotionValueEvent(manifestoProgress, "change", (value) => {
    if (shouldReduceMotion) return;

    const revealProgress = Math.min(value / manifestoRevealEnd, 1);
    const nextLength = Math.round(revealProgress * manifesto.length);
    const nextText = manifesto.slice(0, nextLength);

    startTransition(() => {
      setTypedText((current) => (current === nextText ? current : nextText));
    });
  });

  const scrollHome = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateMinHeight = () => {
      setTrajectoryMinHeightPx((window.innerHeight * trajectoryHeightVh) / 100);
    };

    updateMinHeight();
    window.addEventListener("resize", updateMinHeight);
    return () => window.removeEventListener("resize", updateMinHeight);
  }, [trajectoryHeightVh]);

  const trajectorySectionStyle = trajectoryMinHeightPx
    ? { minHeight: `${trajectoryMinHeightPx}px` }
    : { minHeight: `${trajectoryHeightVh}vh` };

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
        { threshold: 0.2, rootMargin: "-20% 0px -20% 0px" },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o?.disconnect());
    };
  }, []);

  const featuredProjects = useMemo(
    () => projects.filter((project) => !project.inProgress),
    [],
  );
  const activeTrajectoryItem = history[activeTrajectoryIndex];
  const introIsActive = introStage === "playing";

  useLayoutEffect(() => {
    if (shouldReduceMotion) return;

    const viewport = workCarouselViewportRef.current;
    const track = workCarouselTrackRef.current;
    if (!viewport || !track) return;

    const measure = () => {
      const max = track.scrollWidth - viewport.clientWidth;
      setWorkCarouselMaxScroll((prev) => {
        const next = Math.max(0, max);
        return prev === next ? prev : next;
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    ro.observe(viewport);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [shouldReduceMotion, featuredProjects.length]);

  const scrollWorkCarouselStep = useCallback(
    (direction: -1 | 1) => {
      if (shouldReduceMotion) {
        const el = document.getElementById("work-carousel");
        if (el) el.scrollBy({ left: direction * 400, behavior: "smooth" });
        return;
      }

      const section = workSectionRef.current;
      if (!section || workCarouselMaxScroll <= 0) return;

      const rect = section.getBoundingClientRect();
      const startY = window.scrollY + rect.top;
      const endY = startY + section.offsetHeight - window.innerHeight;
      const scrollRange = Math.max(1, endY - startY);
      const step = 1 / Math.max(1, featuredProjects.length - 1);
      const current = workScrollProgress.get();
      const next = Math.max(0, Math.min(1, current + direction * step));

      window.scrollTo({
        top: startY + next * scrollRange,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    },
    [
      shouldReduceMotion,
      workCarouselMaxScroll,
      featuredProjects.length,
      workScrollProgress,
    ],
  );

  return (
    <div className="relative overflow-x-clip">
      <PageBackground />

      <motion.div
        initial={false}
        animate={
          introIsActive
            ? { opacity: 0.22, filter: "blur(14px)" }
            : { opacity: 1, filter: "blur(0px)" }
        }
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className={`home-intro-stage ${introIsActive ? "pointer-events-none" : ""}`}
      >
        <Header
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          scrollToHome={scrollHome}
          scrollToAbout={scrollAbout}
          scrollToWork={scrollWork}
          scrollToContact={scrollContact}
          activeSection={activeSection}
          logoRef={headerLogoRef}
          revealBrand={!introIsActive}
        />

        <main className="relative z-10 px-4 pb-8 pt-0 sm:px-6 sm:pb-12 lg:px-10">
          <section
            id="hero"
            ref={heroRef}
            className="relative left-1/2 min-h-[100svh] w-screen -translate-x-1/2 overflow-hidden"
          >
          <div className="absolute inset-0 bg-[#06111c]" />
          <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(5,10,18,0.98)_0%,rgba(8,18,29,0.94)_28%,rgba(16,39,56,0.84)_56%,rgba(88,121,134,0.92)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.1),transparent_18%),radial-gradient(circle_at_72%_24%,rgba(76,207,255,0.18),transparent_18%),radial-gradient(circle_at_84%_66%,rgba(255,224,182,0.18),transparent_24%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,14,0.1)_0%,rgba(4,8,14,0.02)_40%,rgba(4,8,14,0.32)_100%)]" />

          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : { y: portraitY, scale: portraitScale }
            }
            className="pointer-events-none absolute inset-y-0 right-[-24vw] flex items-end sm:right-[-12vw] lg:right-[-4vw] xl:right-[2vw]"
          >
            <motion.div
              aria-hidden="true"
              style={shouldReduceMotion ? undefined : { scale: haloScale }}
              className="absolute bottom-[12%] right-[18%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(76,207,255,0.24)_0%,_rgba(76,207,255,0.1)_36%,_transparent_74%)] blur-3xl sm:h-[30rem] sm:w-[30rem] xl:h-[36rem] xl:w-[36rem]"
            />
            <motion.div
              style={
                shouldReduceMotion ? undefined : { rotate: portraitRotate }
              }
              className="relative flex h-[72svh] min-h-[32rem] w-[min(104vw,46rem)] items-end justify-center sm:h-[78svh] sm:w-[min(88vw,42rem)] lg:h-[86svh] lg:w-[44rem] xl:h-[90svh] xl:w-[50rem]"
            >
              <div className="absolute inset-x-[12%] bottom-[4%] h-[16%] rounded-full bg-[radial-gradient(circle,_rgba(0,0,0,0.42)_0%,_transparent_72%)] blur-2xl" />
              <div className="absolute inset-y-[8%] left-[10%] w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.16),transparent)]" />
              <Image
                src="/images/personalpageprofilealt.png"
                alt="Portrait of Marcell Varga"
                width={1210}
                height={1777}
                priority
                className="relative z-10 h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_40px_120px_rgba(0,0,0,0.34)]"
              />
            </motion.div>
          </motion.div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,9,15,0.98)_0%,rgba(4,9,15,0.9)_30%,rgba(4,9,15,0.6)_52%,rgba(4,9,15,0.18)_72%,rgba(4,9,15,0.08)_100%)]" />

          <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-6 pb-10 pt-24 sm:px-10 sm:pb-14 lg:px-14 lg:pb-12">
            <div className="max-w-[36rem]">
              <motion.div
                {...fadeInUp(0.05)}
                style={shouldReduceMotion ? undefined : { y: heroPillsY }}
                className="mb-7 flex flex-wrap gap-3"
              >
                <span className="font-label rounded-full bg-white/10 px-4 py-2 text-[0.66rem] font-medium uppercase tracking-[0.28em] text-white/74 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                  Singapore based UX engineer
                </span>
              </motion.div>

              <motion.div
                {...fadeInUp(0.08)}
                style={
                  shouldReduceMotion
                    ? undefined
                    : { y: heroCopyY, opacity: heroCopyOpacity }
                }
                className="space-y-6"
              >
                <h1 className="max-w-[6.6ch] font-display text-[3.35rem] font-semibold leading-[0.95] tracking-[-0.02em] text-white sm:text-[4.5rem] md:text-[5.3rem] lg:text-[6rem] xl:text-[6.8rem] 2xl:text-[7.5rem]">
                  Marcell Varga
                </h1>
                <p className="max-w-[30rem] text-[1.02rem] leading-7 text-white/72 sm:text-[1.08rem] sm:leading-8">
                  I design and build product interfaces that feel calm, sharp,
                  and ready to ship.
                </p>
              </motion.div>

              <motion.div
                {...fadeInUp(0.12)}
                style={shouldReduceMotion ? undefined : { y: heroCardsY }}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
              >
                <button
                  onClick={scrollWork}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-custom-blue shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#eef4f8]"
                >
                  Selected work
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/72 transition duration-300 hover:text-white"
                >
                  Resume
                  <Download className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>

          <motion.div
            aria-hidden="true"
            style={shouldReduceMotion ? undefined : { y: liquidRise }}
            className="pointer-events-none absolute inset-x-0 bottom-[-17rem] z-20 h-[34rem] overflow-hidden sm:bottom-[-15rem] sm:h-[38rem]"
          >
            <div className="absolute inset-x-[-10%] bottom-0 h-[22rem] overflow-hidden rounded-t-[44%] sm:h-[26rem]">
              {/* Matches PageBackground exactly */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_#f8f1e8_0%,_#f6efe5_46%,_#fff8f1_100%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(17,27,40,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(17,27,40,0.03)_1px,transparent_1px)] bg-[size:92px_92px] [mask-image:radial-gradient(circle_at_center,black_35%,transparent_80%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(76,207,255,0.10),_transparent_28%),radial-gradient(circle_at_20%_70%,_rgba(255,153,102,0.08),_transparent_34%)]" />
            </div>
          </motion.div>
        </section>

          <section
            id="about"
            ref={manifestoRef}
            className="relative mx-auto -mt-8 h-[240vh] w-full max-w-7xl sm:-mt-12 sm:h-[300vh]"
          >
          <div className="sticky top-20 flex min-h-[calc(100svh-5rem)] items-center py-12 sm:top-24">
            <motion.div
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: manifestoOpacity,
                      scale: manifestoScale,
                      y: manifestoY,
                    }
              }
              className="mx-auto flex h-[28rem] w-full max-w-5xl flex-col overflow-hidden rounded-[3rem] bg-[#071726]/92 p-8 text-white shadow-[0_40px_140px_rgba(5,16,32,0.28),inset_0_1px_0_rgba(255,255,255,0.16)] sm:h-[32rem] lg:h-[36rem] lg:p-12"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <SectionLabel index="01" label="Manifesto" tone="light" />
                  <motion.div
                    style={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: manifestoGlow }
                    }
                    className="mb-8 h-px w-full bg-[linear-gradient(90deg,rgba(76,216,255,0.85),rgba(76,216,255,0.02))]"
                  />
                  <p
                    className="max-w-4xl font-display text-[clamp(2rem,4vw,4.6rem)] leading-[1.06] tracking-[-0.02em] !text-[#f8fbff]"
                    style={{
                      color: "#f8fbff",
                      WebkitTextFillColor: "#f8fbff",
                      textShadow: "0 1px 0 rgba(255,255,255,0.06)",
                    }}
                  >
                    {typedText}
                    {!shouldReduceMotion && (
                      <span className="ml-1 inline-block animate-pulse text-[#67d9ff]">
                        |
                      </span>
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

        <section className="relative mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl flex-col justify-center py-10 sm:py-16">
          <SectionLabel index="02" label="Capabilities" />
          <div className="pt-2">
            <motion.div {...fadeInUp(0.04)} className="mb-6 max-w-3xl">
              <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.8rem)] leading-[1.02] tracking-[-0.02em] text-custom-blue">
                The useful overlap between taste and implementation.
              </h2>
              <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-custom-blue/70">
                Interfaces, motion, systems, and frontend detail all need to
                line up. These are the pieces I actually care about.
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
                      <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-[1rem] bg-white/82 text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_10px_28px_rgba(17,27,40,0.08)] transition-transform duration-500 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="font-display text-[1.4rem] font-medium leading-[1.08] tracking-[-0.02em] text-custom-blue sm:text-[1.6rem]">
                        {card.title}
                      </h2>
                      <p className="mt-3 max-w-[28rem] text-[0.82rem] leading-relaxed text-custom-blue/72">
                        {card.body}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-2 pt-6">
                        {capabilityTags
                          .slice(index * 2, index * 2 + 2)
                          .map((tag) => (
                            <span
                              key={tag}
                              className="font-label rounded-full bg-white/62 px-3 py-1.5 text-[0.58rem] font-medium uppercase tracking-[0.16em] text-custom-blue/62 shadow-[inset_0_1px_0_rgba(255,255,255,0.66)]"
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

        <section
          id="work"
          ref={workSectionRef}
          className={
            shouldReduceMotion
              ? "relative flex flex-col justify-center py-10 sm:py-16"
              : "relative w-full"
          }
          style={
            shouldReduceMotion
              ? undefined
              : { height: `calc(100vh + ${workCarouselMaxScroll}px)` }
          }
        >
          {shouldReduceMotion ? (
            <>
              <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
                <SectionLabel index="03" label="Selected Work" />
                <div className="mt-8 flex items-end justify-between">
                  <motion.div {...fadeInUp(0.04)} className="max-w-2xl">
                    <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.02em] text-custom-blue">
                      Case studies from the workbench.
                    </h2>
                    <p className="mt-4 text-custom-blue/70">
                      A selection of projects where product thinking,
                      interaction design, and technical execution come together.
                    </p>
                  </motion.div>

                  <div className="hidden items-center gap-3 md:flex">
                    <button
                      type="button"
                      onClick={() => scrollWorkCarouselStep(-1)}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white/58 text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition-all hover:bg-white hover:shadow-lg active:scale-95"
                      aria-label="Previous Project"
                    >
                      <ArrowRight className="h-5 w-5 rotate-180" />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollWorkCarouselStep(1)}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white/58 text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition-all hover:bg-white hover:shadow-lg active:scale-95"
                      aria-label="Next Project"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              <motion.div
                id="work-carousel"
                {...fadeInUp(0.1)}
                className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-8 overflow-x-auto pb-12 pl-[max(1rem,calc((100%-80rem)/2+2.5rem))] pr-[max(1rem,calc((100%-80rem)/2+2.5rem))]"
              >
                {featuredProjects.map((project) => (
                  <motion.article
                    key={project.title}
                    className="glass-panel group relative min-h-[28rem] min-w-[min(90vw,38rem)] shrink-0 snap-start overflow-hidden rounded-[3rem] border-white/90 shadow-[0_32px_80px_rgba(11,17,26,0.08)] transition duration-700 hover:-translate-y-1.5 hover:shadow-[0_45px_110px_rgba(11,17,26,0.12)]"
                  >
                    <Link
                      href={project.link}
                      className="relative grid h-full min-h-[28rem] grid-rows-[42%_58%] p-0"
                      aria-label={`Open ${project.title}`}
                    >
                      <div className="relative min-h-0 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071726]/40 to-transparent" />
                      </div>

                      <div className="relative z-10 flex flex-col justify-between p-8 sm:p-10">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-2">
                            <span className="font-label rounded-full bg-custom-blue/7 px-4 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-custom-blue/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.56)] backdrop-blur-md">
                              {project.category}
                            </span>
                            <span className="font-label rounded-full bg-white/84 px-4 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-custom-blue/42 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-md">
                              {project.date}
                            </span>
                          </div>
                        </div>

                        <div className="mt-8">
                          <h3 className="font-display text-[2.2rem] leading-[0.95] tracking-[-0.02em] text-custom-blue sm:text-[2.8rem]">
                            {project.title}
                          </h3>
                          <p className="mt-4 line-clamp-3 max-w-[42ch] text-[0.95rem] leading-relaxed text-custom-blue/70 sm:text-[1rem]">
                            {project.highlight}
                          </p>
                        </div>

                        <div className="mt-10 flex items-center justify-between border-t border-custom-blue/5 pt-8">
                          <div className="flex flex-wrap gap-2">
                            {project.skills.slice(0, 3).map((skill) => (
                              <span
                                key={skill}
                                className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-custom-blue/40"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          <div className="hidden items-center gap-2 text-sm font-bold text-custom-blue md:flex">
                            View Study
                            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            </>
          ) : (
            <div className="sticky top-20 flex min-h-[calc(100svh-5rem)] flex-col justify-center sm:top-24">
              <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
                <SectionLabel index="03" label="Selected Work" />
                <div className="mt-8 flex items-end justify-between">
                  <motion.div {...fadeInUp(0.04)} className="max-w-2xl">
                    <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.02em] text-custom-blue">
                      Case studies from the workbench.
                    </h2>
                    <p className="mt-4 text-custom-blue/70">
                      A selection of projects where product thinking,
                      interaction design, and technical execution come together.
                    </p>
                  </motion.div>

                  <div className="hidden items-center gap-3 md:flex">
                    <button
                      type="button"
                      onClick={() => scrollWorkCarouselStep(-1)}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white/58 text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition-all hover:bg-white hover:shadow-lg active:scale-95"
                      aria-label="Previous Project"
                    >
                      <ArrowRight className="h-5 w-5 rotate-180" />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollWorkCarouselStep(1)}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white/58 text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition-all hover:bg-white hover:shadow-lg active:scale-95"
                      aria-label="Next Project"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div
                ref={workCarouselViewportRef}
                className="mt-12 w-full overflow-hidden pb-12"
              >
                <motion.div
                  id="work-carousel"
                  ref={workCarouselTrackRef}
                  style={{ x: workCarouselX }}
                  className="flex w-max gap-8 pl-[max(1rem,calc((100%-80rem)/2+2.5rem))] pr-[max(1rem,calc((100%-80rem)/2+2.5rem))]"
                >
                  {featuredProjects.map((project) => (
                    <motion.article
                      key={project.title}
                      className="glass-panel group relative min-h-[28rem] w-[min(90vw,38rem)] shrink-0 overflow-hidden rounded-[3rem] border-white/90 shadow-[0_32px_80px_rgba(11,17,26,0.08)] transition duration-700 hover:-translate-y-1.5 hover:shadow-[0_45px_110px_rgba(11,17,26,0.12)]"
                    >
                      <Link
                        href={project.link}
                        className="relative grid h-full min-h-[28rem] grid-rows-[42%_58%] p-0"
                        aria-label={`Open ${project.title}`}
                      >
                        <div className="relative min-h-0 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#071726]/40 to-transparent" />
                        </div>

                        <div className="relative z-10 flex flex-col justify-between p-8 sm:p-10">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-2">
                              <span className="font-label rounded-full bg-custom-blue/7 px-4 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-custom-blue/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.56)] backdrop-blur-md">
                                {project.category}
                              </span>
                              <span className="font-label rounded-full bg-white/84 px-4 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-custom-blue/42 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-md">
                                {project.date}
                              </span>
                            </div>
                          </div>

                          <div className="mt-8">
                            <h3 className="font-display text-[2.2rem] leading-[0.95] tracking-[-0.02em] text-custom-blue sm:text-[2.8rem]">
                              {project.title}
                            </h3>
                            <p className="mt-4 line-clamp-3 max-w-[42ch] text-[0.95rem] leading-relaxed text-custom-blue/70 sm:text-[1rem]">
                              {project.highlight}
                            </p>
                          </div>

                          <div className="mt-10 flex items-center justify-between border-t border-custom-blue/5 pt-8">
                            <div className="flex flex-wrap gap-2">
                              {project.skills.slice(0, 3).map((skill) => (
                                <span
                                  key={skill}
                                  className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-custom-blue/40"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                            <div className="hidden items-center gap-2 text-sm font-bold text-custom-blue md:flex">
                              View Study
                              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </div>
          )}
        </section>

        <section
          ref={trajectoryRef}
          className="relative mx-auto mt-20 w-full max-w-7xl sm:mt-32"
          style={trajectorySectionStyle}
        >
          <SectionLabel index="04" label="Trajectory" />
          <div className="sticky top-20 flex min-h-[calc(100svh-5rem)] items-center sm:top-24">
            <div className="w-full space-y-6">
              <motion.div
                {...fadeInUp(0.04)}
                className="glass-panel rounded-[2.5rem] bg-white/72 p-6 shadow-[0_18px_65px_rgba(11,17,26,0.07)] backdrop-blur-xl sm:p-8 lg:p-8"
              >
                <div className="space-y-3">
                  <div className="font-label inline-flex rounded-full bg-white/76 px-4 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-custom-blue/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                    Engineering Path
                  </div>
                  <p className="font-display text-[clamp(1.75rem,2.8vw,2.8rem)] leading-[1.02] tracking-[-0.02em] text-custom-blue">
                    Built in Denmark. Now shipping from Singapore.
                  </p>
                  <p className="max-w-2xl text-sm leading-7 text-custom-blue/68">
                    Multimedia design first. Product work next. The timeline
                    stays pinned while each step advances one by one.
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
                              {item.time.start}{" "}
                              {item.time.end
                                ? `- ${item.time.end}`
                                : "- Present"}
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
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1] as const,
                    }}
                    className="glass-panel relative flex flex-col justify-start overflow-hidden rounded-[2.8rem] bg-white/72 p-8 shadow-[0_12px_45px_rgba(11,17,26,0.06)] lg:p-10"
                  >
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="font-label rounded-full bg-custom-blue/7 px-4 py-2 text-[0.64rem] font-medium uppercase tracking-[0.16em] text-custom-blue/62 shadow-[inset_0_1px_0_rgba(255,255,255,0.58)]">
                        {activeTrajectoryItem.time.start}{" "}
                        {activeTrajectoryItem.time.end
                          ? `- ${activeTrajectoryItem.time.end}`
                          : "- Present"}
                      </span>
                      <span className="font-label rounded-full bg-white px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-custom-blue/52 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                        Step {activeTrajectoryIndex + 1} of {history.length}
                      </span>
                    </div>
                    <p className="mt-8 font-display text-[clamp(1.8rem,2.8vw,2.5rem)] leading-[1.04] tracking-[-0.02em] text-custom-blue">
                      {activeTrajectoryItem.jobTitle}
                    </p>
                    <div className="mt-6 space-y-5">
                      {activeTrajectoryItem.description.map(
                        (paragraph, index) => (
                          <p
                            key={index}
                            className="max-w-[38rem] text-[1rem] leading-relaxed text-custom-blue/75"
                          >
                            {paragraph}
                          </p>
                        ),
                      )}
                    </div>

                    <div className="mt-12 flex flex-wrap gap-2.5">
                      {activeTrajectoryItem.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-label rounded-full bg-white px-4 py-2 text-[0.64rem] font-medium uppercase tracking-[0.15em] text-custom-blue/58 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_10px_24px_rgba(17,27,40,0.04)]"
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
            className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl flex-col justify-end py-10 sm:py-16"
            onMouseEnter={() => setFooterHover(true)}
            onMouseLeave={() => setFooterHover(false)}
          >
          <motion.div
            {...fadeInUp(0.06)}
            className="relative overflow-hidden rounded-[3rem] bg-[#071726] p-8 text-white shadow-[0_40px_140px_rgba(7,20,38,0.26),inset_0_1px_0_rgba(255,255,255,0.16)] sm:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(72,205,255,0.26),_transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_55%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <SectionLabel index="05" label="Contact" tone="light" />
                <h2 className="max-w-3xl font-display text-[clamp(2.6rem,5vw,5rem)] leading-[1] tracking-[-0.03em] text-white">
                  Ready for the next ambitious build.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                  If you need a UX-minded engineer who can think visually, move
                  fast in code, and care about the end product as much as the
                  process, let’s talk.
                </p>
              </div>

              <div className="grid gap-4 self-end">
                <a
                  href="mailto:themarcellvarga@gmail.com"
                  className="group flex items-center justify-between rounded-[1.8rem] bg-white/7 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-300 hover:bg-white/10"
                >
                  <span className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#67d9ff]" />
                    <span className="font-label text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white/80">
                      themarcellvarga@gmail.com
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a
                  href="https://www.linkedin.com/in/marcellvarga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-[1.8rem] bg-white/7 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-300 hover:bg-white/10"
                >
                  <span className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-[#67d9ff]" />
                    <span className="font-label text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white/80">
                      LinkedIn
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a
                  href="https://github.com/TheMarcellVarga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-[1.8rem] bg-white/7 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-300 hover:bg-white/10"
                >
                  <span className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-[#67d9ff]" />
                    <span className="font-label text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white/80">
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
      </motion.div>

      {introIsActive && (
        <HomeIntro targetRef={headerLogoRef} onComplete={finishIntro} />
      )}
    </div>
  );
}
