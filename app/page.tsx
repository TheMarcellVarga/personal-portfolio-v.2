"use client";

import {
  startTransition,
  useCallback,
  useEffect,
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
  useMotionValue,
  useSpring,
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
import { history, type HistoryItem } from "./data/history";
import { projects } from "./data/projects";
import { SectionLabel } from "./components/SectionLabel";
import { HomeIntro } from "./components/HomeIntro";
import { PageBackground } from "./components/PageBackground";
import { HeroCanvasBackdrop } from "./components/HeroCanvasBackdrop";

const principlesStatement =
  "I turn complex product requirements into clear interfaces, then carry the strongest ideas from prototype to production.";

const PRINCIPLES_REVEAL_END = 0.74;

const capabilityCards = [
  {
    title: "Clarity before decoration",
    body: "I turn complex workflows into interfaces that help people understand what matters and act with confidence.",
    icon: Blocks,
    colSpan: "lg:col-span-2",
  },
  {
    title: "Built beyond the mockup",
    body: "Responsive behavior, accessibility, and implementation detail are part of the product, not a handoff checklist.",
    icon: Code2,
    colSpan: "lg:col-span-1",
  },
  {
    title: "Research that changes the work",
    body: "I use interviews, testing, and iteration to reduce uncertainty and improve the decisions that reach production.",
    icon: Sparkles,
    colSpan: "lg:col-span-1",
  },
  {
    title: "Design and engineering together",
    body: "I work across UX, frontend, and product conversations so useful ideas stay intact as they become real interfaces.",
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

function HeroDynamicBackdrop({
}) {
  return (
    <div
      aria-hidden="true"
      className="hero-dynamic-field pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#06111c]" />
      <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(5,10,18,0.98)_0%,rgba(8,18,29,0.94)_28%,rgba(16,39,56,0.84)_56%,rgba(72,104,122,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_72%_24%,rgba(76,207,255,0.14),transparent_18%),radial-gradient(circle_at_84%_66%,rgba(255,224,182,0.08),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,14,0.16)_0%,rgba(4,8,14,0.04)_40%,rgba(4,8,14,0.28)_100%)]" />
      <HeroCanvasBackdrop />
    </div>
  );
}

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

function heroIntroFoldUp(isVisible: boolean, shouldAnimate: boolean, delay = 0) {
  if (!shouldAnimate) {
    return {
      initial: false,
      animate: { opacity: 1, y: 0, rotateX: 0 },
      transition: { duration: 0 },
    };
  }

  return {
    initial: false,
    animate: isVisible
      ? { opacity: 1, y: 0, rotateX: 0 }
      : { opacity: 0, y: 32, rotateX: -14 },
    transition: {
      duration: 0.78,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };
}

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

function smoothstep(value: number) {
  const t = clamp01(value);
  return t * t * (3 - 2 * t);
}

function HistoryItemComponent({ 
  item, 
  index, 
  focus,
  reduceMotion,
  compact,
}: { 
  item: HistoryItem; 
  index: number; 
  focus: number;
  reduceMotion: boolean;
  compact: boolean;
}) {
  const normalizedFocus = reduceMotion ? 1 : focus;
  const restOffset = 28 + index * 12;
  const cardMotion = reduceMotion || compact
    ? {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }
    : {
        x: (1 - normalizedFocus) * restOffset,
        opacity: 0.48 + normalizedFocus * 0.52,
        scale: 0.965 + normalizedFocus * 0.035,
        filter: `blur(${(1 - normalizedFocus) * 0.35}px)`,
      };

  return (
    <motion.article
      id={`history-item-${index}`}
      initial={false}
      animate={cardMotion}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="glass-panel relative flex min-h-[18rem] snap-center flex-col overflow-hidden rounded-[1.9rem] bg-white/65 p-5 shadow-[0_12px_40px_rgba(11,17,26,0.04)] transition-[border-color] duration-300 sm:rounded-[2.1rem]"
      style={{
        willChange: reduceMotion || compact ? "auto" : "transform, opacity, filter",
      }}
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div
            className="inline-flex h-10 w-10 items-center justify-center rounded-[0.95rem] bg-white/82 text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_8px_22px_rgba(17,27,40,0.06)]"
            style={{
              transform: `scale(${0.98 + normalizedFocus * 0.08})`,
            }}
          >
            <span className="font-label text-[0.56rem] font-bold tracking-[0.16em] text-custom-blue/60">
              0{index + 1}
            </span>
          </div>
          {index === 0 && (
            <span
              className="font-label rounded-full bg-white/62 px-2.5 py-1.5 text-[0.54rem] font-medium uppercase tracking-[0.15em] text-custom-blue/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.66)]"
              style={{
                opacity: 0.58 + normalizedFocus * 0.42,
              }}
            >
              Current
            </span>
          )}
        </div>

        <div className="space-y-1">
          <h3 className="max-w-[16ch] font-display text-[1.18rem] font-medium leading-[1.06] tracking-[-0.02em] text-custom-blue sm:text-[1.38rem]">
            {item.jobTitle}
          </h3>
          <p className="font-label text-[0.58rem] font-medium uppercase tracking-[0.18em] text-custom-blue/35">
            {item.company}
          </p>
        </div>

        <div className="mt-2.5 grid max-w-[32rem] gap-2.5">
          {item.description.map((paragraph: string) => (
            <p
              key={paragraph}
              className="text-[0.78rem] leading-6 text-custom-blue/70"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <span className="font-label rounded-full bg-white/62 px-2.5 py-1.5 text-[0.54rem] font-medium uppercase tracking-[0.15em] text-custom-blue/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.66)]">
            {item.time.start} {item.time.end ? `- ${item.time.end}` : "- Present"}
          </span>
          {item.skills.map((skill: string) => (
            <span
              key={skill}
              className="font-label rounded-full bg-white/62 px-2.5 py-1.5 text-[0.54rem] font-medium uppercase tracking-[0.15em] text-custom-blue/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.66)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function scrollToId(id: string, reducedMotion: boolean) {
  const section = document.getElementById(id);

  if (id === "about" && section) {
    const rect = section.getBoundingClientRect();
    const scrollableDistance = Math.max(
      section.offsetHeight - window.innerHeight,
      0,
    );

    window.scrollTo({
      top: Math.max(0, window.scrollY + rect.top + scrollableDistance * PRINCIPLES_REVEAL_END),
      behavior: reducedMotion ? "auto" : "smooth",
    });
    return;
  }

  const element =
    document.querySelector<HTMLElement>(`[data-scroll-anchor="${id}"]`) ??
    section;
  if (!element) return;

  const rect = element.getBoundingClientRect();
  const targetTop =
    window.scrollY +
    rect.top -
    Math.max((window.innerHeight - rect.height) / 2, 96);

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: reducedMotion ? "auto" : "smooth",
  });
}

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [footerHover, setFooterHover] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [introStage, setIntroStage] = useState<
    "checking" | "playing" | "exiting" | "done"
  >("checking");
  const [introPlayedThisVisit, setIntroPlayedThisVisit] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = Boolean(prefersReducedMotion);
  const enableScrollMotion = hasMounted && !shouldReduceMotion;
  const headerLogoRef = useRef<HTMLSpanElement>(null);

  const heroRef = useRef<HTMLElement>(null);
  const principlesRef = useRef<HTMLElement>(null);
  const workSectionRef = useRef<HTMLElement>(null);
  const [activeProjectImage, setActiveProjectImage] = useState<string | null>(
    null,
  );
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 32, stiffness: 180, mass: 0.5 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const smoothHeroProgress = useSpring(heroProgress, {
    damping: 34,
    stiffness: 220,
    mass: 0.24,
    restDelta: 0.001,
  });
  const heroCopyY = useTransform(smoothHeroProgress, [0, 1], [0, -36]);
  const heroPillsY = useTransform(smoothHeroProgress, [0, 1], [0, -18]);
  const heroCardsY = useTransform(smoothHeroProgress, [0, 1], [0, -28]);
  const heroCopyOpacity = useTransform(smoothHeroProgress, [0, 0.85], [1, 0.58]);
  const portraitY = useTransform(smoothHeroProgress, [0, 1], [0, -80]);
  const portraitRotate = useTransform(smoothHeroProgress, [0, 1], [0, -4]);
  const portraitScale = useTransform(smoothHeroProgress, [0, 1], [1, 0.965]);
  const liquidProgress = useTransform(smoothHeroProgress, [0.08, 0.55], [0, 1]);
  const liquidRise = useTransform(liquidProgress, [0, 1], [260, -54]);
  const { scrollYProgress: principlesProgress } = useScroll({
    target: principlesRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: workScrollProgress } = useScroll({
    target: workSectionRef,
    offset: ["start end", "end start"],
  });
  const principlesRevealEnd = PRINCIPLES_REVEAL_END;
  const principlesOpacity = useTransform(
    principlesProgress,
    [0, 0.12, 0.74, 0.86, 0.95, 1],
    [0, 1, 1, 0.88, 0.32, 0],
  );
  const principlesScale = useTransform(
    principlesProgress,
    [0, 0.18, 0.74, 0.86, 1],
    [0.92, 1, 1, 0.99, 0.92],
  );
  const principlesY = useTransform(
    principlesProgress,
    [0, 0.2, 0.74, 0.86, 1],
    [36, 0, 0, -8, -72],
  );
  const principlesGlow = useTransform(principlesProgress, [0, 1], [0, 0.5]);

  const [isCompactViewport, setIsCompactViewport] = useState(false);
  useEffect(() => {
    const check = () => setIsCompactViewport(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTypedText(principlesStatement);
    }
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIntroStage("done");
      return;
    }

    const hasPlayedIntro =
      window.sessionStorage.getItem("mv-home-intro") === "1";
    setIntroPlayedThisVisit(!hasPlayedIntro);
    setIntroStage(hasPlayedIntro ? "done" : "playing");
  }, [shouldReduceMotion]);

  const finishIntro = useCallback(() => {
    window.sessionStorage.setItem("mv-home-intro", "1");
    setIntroStage("done");
  }, []);

  const startIntroExit = useCallback(() => {
    setIntroStage("exiting");
  }, []);

  useEffect(() => {
    if (introStage === "checking" || introStage === "done") return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [introStage]);

  useMotionValueEvent(principlesProgress, "change", (value) => {
    if (shouldReduceMotion) return;

    const revealProgress = Math.min(value / principlesRevealEnd, 1);
    const nextLength = Math.round(revealProgress * principlesStatement.length);
    const nextText = principlesStatement.slice(0, nextLength);

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

  const [activeSection, setActiveSection] = useState("Intro");

  useEffect(() => {
    const sectionIds = ["hero", "about", "work", "contact"];
    const sectionMap: Record<string, string> = {
      hero: "Intro",
      about: "Skills",
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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const bottomThreshold = 72;
    let animationFrameId = 0;

    const updateBottomState = () => {
      const doc = document.documentElement;
      const nearBottom =
        window.innerHeight + window.scrollY >= doc.scrollHeight - bottomThreshold;

      if (nearBottom) {
        setActiveSection("Contact");
      }

      animationFrameId = 0;
    };

    const onScroll = () => {
      if (animationFrameId) return;
      animationFrameId = window.requestAnimationFrame(updateBottomState);
    };

    updateBottomState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateBottomState);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateBottomState);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  useEffect(() => {
    if (introStage !== "done") return;
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const timer = setTimeout(() => {
        if (id === "hero") {
          scrollHome();
        } else {
          scrollToId(id, shouldReduceMotion);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [introStage, shouldReduceMotion, scrollHome]);

  const featuredProjects = useMemo(
    () => projects.filter((project) => !project.inProgress),
    [],
  );
  const introIsVisible = introStage !== "done";
  const introHasCompleted = introStage === "done";
  const introHeaderMuted = introStage !== "done";
  const revealHeroIntroText = introStage === "exiting" || introStage === "done";
  const principlesIntroReady = introStage === "done";
  const principlesDisplayText =
    isCompactViewport || shouldReduceMotion ? principlesStatement : typedText;

  const [historyFocusValues, setHistoryFocusValues] = useState(() =>
    history.map(() => 0),
  );
  const historyFocusRef = useRef(history.map(() => 0));
  const [historyActiveIndex, setHistoryActiveIndex] = useState(0);
  const historyActiveIndexRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let animationFrameId = 0;

    const updateHistoryFocus = () => {
      const viewportCenter = window.innerHeight / 2;
      const influenceRadius = Math.max(window.innerHeight * 0.42, 420);
      let didChange = false;

      const nextValues = history.map((_, index) => {
        const element = document.getElementById(`history-item-${index}`);
        if (!element) return 0;

        const rect = element.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);
        const focus = smoothstep(1 - distance / influenceRadius);
        const nextFocus = shouldReduceMotion ? (focus > 0.5 ? 1 : 0) : focus;

        if (Math.abs(nextFocus - historyFocusRef.current[index]) > 0.01) {
          didChange = true;
        }

        return nextFocus;
      });

      const nextActiveIndex = nextValues.reduce(
        (activeIndex, value, index, values) =>
          value > values[activeIndex] ? index : activeIndex,
        0,
      );

      if (didChange) {
        historyFocusRef.current = nextValues;
        setHistoryFocusValues(nextValues);
      }

      if (nextActiveIndex !== historyActiveIndexRef.current) {
        historyActiveIndexRef.current = nextActiveIndex;
        setHistoryActiveIndex(nextActiveIndex);
      }
    };

    const onScroll = () => {
      if (animationFrameId) return;
      animationFrameId = window.requestAnimationFrame(() => {
        updateHistoryFocus();
        animationFrameId = 0;
      });
    };

    updateHistoryFocus();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateHistoryFocus);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateHistoryFocus);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [shouldReduceMotion]);

  return (
    <div className="relative">
      <PageBackground showGrid={false} />

      <div
        className={`${introPlayedThisVisit ? "transition-opacity duration-700" : ""} ${
          introHeaderMuted ? "pointer-events-none opacity-25" : "opacity-100"
        } home-intro-header`}
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
          revealBrand={introHasCompleted}
          animateBrand={introHasCompleted}
        />
      </div>

      <div className={`home-intro-stage ${introIsVisible ? "pointer-events-none" : ""}`}>
        <main className="relative z-10 px-4 pb-8 pt-0 sm:px-6 sm:pb-12 lg:px-10">
          <section
            id="hero"
            ref={heroRef}
            className="relative left-1/2 min-h-[100svh] w-screen -translate-x-1/2 overflow-x-clip overflow-y-visible"
          >
            <div className="absolute inset-0 bg-[#06111c]" />
            <HeroDynamicBackdrop />
            <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(4,9,15,0.92)_0%,rgba(4,9,15,0.82)_36%,rgba(4,9,15,0.44)_100%)] lg:bg-[linear-gradient(90deg,rgba(4,9,15,0.98)_0%,rgba(4,9,15,0.9)_30%,rgba(4,9,15,0.6)_52%,rgba(4,9,15,0.18)_72%,rgba(4,9,15,0.08)_100%)]" />

            <div className="relative z-30 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col gap-8 px-6 pb-8 pt-24 sm:gap-10 sm:px-10 sm:pb-12 md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-7 lg:hidden">
              <div className="max-w-[36rem]">
                <motion.div
                  style={enableScrollMotion ? { y: heroPillsY } : undefined}
                  className="hero-scroll-layer mb-7 flex flex-wrap gap-3"
                >
                  <motion.div
                    {...heroIntroFoldUp(revealHeroIntroText, introPlayedThisVisit, 0)}
                    className="home-intro-fold [transform-origin:bottom]"
                  >
                    <span className="font-label block rounded-full bg-white/10 px-4 py-2 text-[0.66rem] font-medium uppercase tracking-[0.28em] text-white/74 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_40px_rgba(0,0,0,0.18)_opacity-60] backdrop-blur-xl">
                      UX & Frontend Engineer
                    </span>
                  </motion.div>
                </motion.div>

                <motion.div
                  style={
                    enableScrollMotion
                      ? { y: heroCopyY, opacity: heroCopyOpacity }
                      : undefined
                  }
                  className="hero-scroll-layer space-y-6"
                >
                  <motion.div
                    {...heroIntroFoldUp(revealHeroIntroText, introPlayedThisVisit, 0.08)}
                    className="home-intro-fold space-y-6 [transform-origin:bottom]"
                  >
                    <h1 className="max-w-[8ch] font-display text-[clamp(2.8rem,10vw,4.2rem)] font-semibold leading-[0.95] tracking-[-0.02em] text-white sm:text-[clamp(3.4rem,8vw,4.8rem)] md:text-[clamp(3.8rem,7vw,5.4rem)]">
                      Marcell Varga
                    </h1>
                    <p className="max-w-[30rem] text-[0.98rem] leading-7 text-white/72 sm:text-[1.05rem] sm:leading-8">
                      I design and build product interfaces that feel calm, sharp,
                      and ready for real use.
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div
                  style={enableScrollMotion ? { y: heroCardsY } : undefined}
                  className="hero-scroll-layer mt-10"
                >
                  <motion.div
                    {...heroIntroFoldUp(revealHeroIntroText, introPlayedThisVisit, 0.16)}
                    className="home-intro-fold flex flex-col gap-4 [transform-origin:bottom] sm:flex-row sm:items-center sm:gap-6"
                  >
                  <button
                    onClick={scrollWork}
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-custom-blue shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#eef4f8] sm:w-fit"
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
                </motion.div>
              </div>

              <motion.div
                {...fadeInUp(0.1)}
                style={enableScrollMotion ? { y: portraitY, scale: portraitScale } : undefined}
                className="hero-scroll-layer relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-white/6 p-2.5 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:rounded-[2rem] sm:p-3"
              >
                <motion.div
                  style={enableScrollMotion ? { rotate: portraitRotate } : undefined}
                  className="relative overflow-hidden rounded-[1.2rem] bg-[#071726] sm:rounded-[1.5rem]"
                >
                  <div className="absolute inset-x-[12%] bottom-[4%] h-[16%] rounded-full bg-[radial-gradient(circle,_rgba(0,0,0,0.42)_0%,_transparent_72%)] blur-2xl" />
                  <div className="absolute inset-y-[8%] left-[10%] w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.16),transparent)]" />
                  <div className="relative aspect-[0.9] w-full sm:aspect-[1.04] md:aspect-[0.78]">
                    <Image
                      src="/images/personalpageprofilealt.png"
                      alt="Portrait of Marcell Varga"
                      fill
                      priority
                      className="object-cover object-[center_18%]"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="relative z-30 mx-auto hidden min-h-[100svh] w-full max-w-7xl items-center px-6 pb-10 pt-24 sm:px-10 sm:pb-14 lg:flex lg:px-14 lg:pb-12">
              <div className="max-w-[36rem]">
                <motion.div
                  style={enableScrollMotion ? { y: heroPillsY } : undefined}
                  className="hero-scroll-layer mb-7 flex flex-wrap gap-3"
                >
                  <motion.div
                    {...heroIntroFoldUp(revealHeroIntroText, introPlayedThisVisit, 0)}
                    className="home-intro-fold [transform-origin:bottom]"
                  >
                    <span className="font-label block rounded-full bg-white/10 px-4 py-2 text-[0.66rem] font-medium uppercase tracking-[0.28em] text-white/74 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_40px_rgba(0,0,0,0.18)_opacity-60] backdrop-blur-xl">
                      UX & Frontend Engineer
                    </span>
                  </motion.div>
                </motion.div>

                <motion.div
                  style={
                    enableScrollMotion
                      ? { y: heroCopyY, opacity: heroCopyOpacity }
                      : undefined
                  }
                  className="hero-scroll-layer space-y-6"
                >
                  <motion.div
                    {...heroIntroFoldUp(revealHeroIntroText, introPlayedThisVisit, 0.08)}
                    className="home-intro-fold space-y-6 [transform-origin:bottom]"
                  >
                    <h1 className="max-w-[6.6ch] font-display text-[3.35rem] font-semibold leading-[0.95] tracking-[-0.02em] text-white sm:text-[4.5rem] md:text-[5.3rem] lg:text-[6rem] xl:text-[6.8rem] 2xl:text-[7.5rem]">
                      Marcell Varga
                    </h1>
                    <p className="max-w-[30rem] text-[1.02rem] leading-7 text-white/72 sm:text-[1.08rem] sm:leading-8">
                      I design and build product interfaces that feel calm, sharp,
                      and ready for real use.
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div
                  style={enableScrollMotion ? { y: heroCardsY } : undefined}
                  className="hero-scroll-layer mt-10"
                >
                  <motion.div
                    {...heroIntroFoldUp(revealHeroIntroText, introPlayedThisVisit, 0.16)}
                    className="home-intro-fold flex flex-col gap-4 [transform-origin:bottom] sm:flex-row sm:items-center sm:gap-6"
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
                </motion.div>
              </div>

              <motion.div
                style={enableScrollMotion ? { y: portraitY, scale: portraitScale } : undefined}
                className="hero-scroll-layer pointer-events-none absolute inset-y-0 right-[-24vw] z-20 flex items-end sm:right-[-12vw] lg:right-[-4vw] xl:right-[-3vw]"
              >
                <motion.div
                  style={enableScrollMotion ? { rotate: portraitRotate } : undefined}
                  className="hero-scroll-layer relative flex h-[72svh] min-h-[32rem] w-[min(104vw,46rem)] items-end justify-end sm:h-[78svh] sm:w-[min(88vw,42rem)] lg:h-[86svh] lg:w-[44rem] xl:h-[90svh] xl:w-[50rem]"
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
            </div>

            <motion.div
              aria-hidden="true"
              style={
                enableScrollMotion
                  ? {
                      y: liquidRise,
                      opacity: introStage === "done" ? 1 : 0,
                    }
                  : { opacity: introStage === "done" ? 1 : 0 }
              }
              className="hero-scroll-layer pointer-events-none absolute inset-x-0 bottom-[-17rem] z-20 h-[34rem] overflow-hidden sm:bottom-[-15rem] sm:h-[38rem]"
            >
              <div className="absolute inset-x-0 bottom-0 h-[22rem] overflow-hidden rounded-t-[44%] [mask-image:linear-gradient(to_bottom,black_0%,black_65%,transparent_100%)] sm:h-[26rem] lg:inset-x-[-10%]">
                {/* Keep the rising mask aligned with the fixed page surface underneath. */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(76,207,255,0.16),_transparent_28%),radial-gradient(circle_at_20%_70%,_rgba(255,153,102,0.16),_transparent_34%),radial-gradient(circle_at_85%_18%,_rgba(17,27,40,0.12),_transparent_24%),linear-gradient(180deg,_#f8f1e8_0%,_#f6efe5_46%,_#fff8f1_100%)] [background-attachment:fixed]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(17,27,40,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(17,27,40,0.04)_1px,transparent_1px)] bg-[size:92px_92px] [background-attachment:fixed] [mask-image:radial-gradient(circle_at_center,black_45%,transparent_88%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(76,207,255,0.10),_transparent_28%),radial-gradient(circle_at_20%_70%,_rgba(255,153,102,0.08),_transparent_34%)] [background-attachment:fixed]" />
              </div>
            </motion.div>
          </section>

          <section
            id="about"
            ref={principlesRef}
            className="relative mx-auto mt-12 w-full max-w-7xl lg:-mt-12 lg:h-[260vh]"
          >
            <div className="lg:sticky lg:top-16 lg:flex lg:h-[32rem] lg:items-center lg:py-10 xl:top-24 xl:h-[40rem] xl:py-12">
                <motion.div
                  data-scroll-anchor="about"
                  style={
                    enableScrollMotion && !isCompactViewport
                      ? principlesIntroReady
                        ? {
                            opacity: principlesOpacity,
                            scale: principlesScale,
                            y: principlesY,
                          }
                        : { opacity: 0, scale: 0.98, y: 24 }
                      : principlesIntroReady
                        ? undefined
                        : { opacity: 0, scale: 0.98, y: 24 }
                  }
                className="mx-auto flex h-auto min-h-[24rem] w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] bg-[#071726]/92 p-6 text-white shadow-[0_40px_140px_rgba(5,16,32,0.28),inset_0_1px_0_rgba(255,255,255,0.16)] sm:min-h-[28rem] sm:rounded-[2.5rem] sm:p-8 lg:h-[40rem] lg:min-h-0 lg:rounded-[3rem] lg:p-12"
              >
                <div className="flex h-full flex-col justify-between gap-8">
                  <div>
                    <SectionLabel index="01" label="Principles" tone="light" />
                    <motion.div
                      style={
                        enableScrollMotion && !isCompactViewport && principlesIntroReady
                          ? { opacity: principlesGlow }
                          : principlesIntroReady
                            ? undefined
                            : { opacity: 0 }
                      }
                      className="mb-8 h-px w-full bg-[linear-gradient(90deg,rgba(76,216,255,0.85),rgba(76,216,255,0.02))]"
                    />
                    <p
                      className="max-w-4xl font-display text-[clamp(1.95rem,7vw,4.6rem)] leading-[1.08] tracking-[-0.02em] !text-[#f8fbff]"
                      style={{
                        color: "#f8fbff",
                        WebkitTextFillColor: "#f8fbff",
                        textShadow: "0 1px 0 rgba(255,255,255,0.06)",
                      }}
                    >
                      {principlesDisplayText}
                      {!shouldReduceMotion && typedText.length > 0 && (
                        <span className="ml-1 inline-block animate-pulse text-[#67d9ff]">
                          |
                        </span>
                      )}
                    </p>
                  </div>
                  <div className={`${isCompactViewport ? "hidden lg:flex" : "mt-10 flex"} items-center gap-2 text-sm text-white/58`}>
                    {/* Dot-based progress bar for the intro/principles typing */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 6 }).map((_, i) => {
                        // Show more filled dots as typing progresses
                        // If shouldReduceMotion: just fill all
                        const progress = shouldReduceMotion
                          ? 1
                          : Math.max(
                              0,
                              Math.min(1, typedText.length / principlesStatement.length)
                            );
                        const activeDots = Math.round(progress * 6);
                        return (
                          <span
                            key={i}
                            className={`inline-block h-2 w-2 rounded-full transition-all duration-300 ${
                              i < activeDots
                                ? "bg-[#67d9ff] scale-70 opacity-60"
                                : "bg-[#67d9ff]/20 scale-40 opacity-60"
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
      
                </div>
              </motion.div>
            </div>
          </section>

          <section className="relative mx-auto w-full max-w-7xl py-16 sm:py-24 lg:py-32">
            <motion.div
              {...fadeInUp(0.04)}
              className="mb-6 grid gap-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end"
            >
              <div className="max-w-2xl">
                <SectionLabel index="02" label="Capabilities" />
                <h2 className="mt-6 font-display text-[clamp(2.35rem,4.8vw,4.6rem)] leading-[0.92] tracking-[-0.035em] text-custom-blue">
                  The useful overlap between taste and implementation.
                </h2>
              </div>
              <p className="max-w-xl text-[0.9rem] leading-7 text-custom-blue/66 lg:justify-self-end">
                My work sits between product design and frontend engineering:
                understanding the problem, shaping the interface, and building
                the details that make it usable.
              </p>
            </motion.div>

            <div className="grid auto-rows-fr gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilityCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.article
                    key={card.title}
                    {...fadeInUp(index * 0.1)}
                    className={`glass-panel group relative flex min-h-[11.75rem] flex-col overflow-hidden rounded-[1.9rem] bg-white/65 p-5 shadow-[0_12px_40px_rgba(11,17,26,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(11,17,26,0.05)] sm:rounded-[2.1rem] ${card.colSpan}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-[0.95rem] bg-white/82 text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_8px_22px_rgba(17,27,40,0.06)] transition-transform duration-500 group-hover:scale-105">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <h2 className="max-w-[14ch] font-display text-[1.18rem] font-medium leading-[1.06] tracking-[-0.02em] text-custom-blue sm:text-[1.38rem]">
                        {card.title}
                      </h2>
                      <p className="mt-2.5 max-w-[26rem] text-[0.78rem] leading-6 text-custom-blue/70">
                        {card.body}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-2 pt-5">
                        {capabilityTags
                          .slice(index * 2, index * 2 + 2)
                          .map((tag) => (
                            <span
                              key={tag}
                              className="font-label rounded-full bg-white/62 px-2.5 py-1.5 text-[0.54rem] font-medium uppercase tracking-[0.15em] text-custom-blue/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.66)]"
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
          </section>

          <section
            id="work"
            ref={workSectionRef}
            data-scroll-anchor="work"
            className="relative mx-auto w-full max-w-7xl py-16 sm:py-24 lg:py-32"
          >
            <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <SectionLabel index="03" label="Selected Work" />
                <h2 className="mt-8 font-display text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.9] tracking-[-0.04em] text-custom-blue">
                  Product thinking, made tangible.
                </h2>
                <p className="mt-6 text-[1.05rem] leading-relaxed text-custom-blue/65">
                  A focused selection of interfaces where UX decisions shape
                  the implementation.
                </p>
              </div>
              <div className="hidden items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-custom-blue/40 md:flex">
                <span className="h-px w-8 bg-custom-blue/15" />
                Hover to reveal
              </div>
            </div>

            <div className="border-t border-custom-blue/10">
              {featuredProjects.map((project, idx) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  onMouseEnter={() =>
                    !shouldReduceMotion &&
                    !isCompactViewport &&
                    setActiveProjectImage(project.image)
                  }
                  onMouseLeave={() => setActiveProjectImage(null)}
                  className="group relative"
                >
                  <Link
                    href={project.link}
                    className="grid gap-4 rounded-[1.5rem] border-b border-custom-blue/5 px-4 py-5 transition-colors duration-500 hover:bg-custom-blue/[0.01] sm:rounded-none sm:px-0 sm:py-6 md:grid-cols-[minmax(0,1.15fr)_auto_minmax(0,0.95fr)_auto] md:items-center md:gap-8 md:px-0 md:py-8"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
                      <span className="font-label min-w-[2.5rem] text-[0.62rem] font-bold text-custom-blue/20">
                        0{idx + 1}
                      </span>
                      <h3 className="font-display text-[1.8rem] leading-none tracking-[-0.02em] text-custom-blue transition-transform duration-500 group-hover:translate-x-2 sm:text-[2.2rem] lg:text-[2.8rem]">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-1 md:justify-self-end md:justify-end">
                      {project.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="text-[0.58rem] font-medium uppercase tracking-[0.15em] text-custom-blue/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-6 md:justify-self-end">
                      <div className="flex flex-col items-end gap-0.5 text-right">
                        <span className="font-label text-[0.58rem] font-medium uppercase tracking-[0.18em] text-custom-blue/40">
                          {project.category}
                        </span>
                        <span className="font-label text-[0.58rem] font-bold text-custom-blue/20">
                          {project.date}
                        </span>
                      </div>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-custom-blue/10 transition-all duration-500 group-hover:rotate-45 group-hover:bg-custom-blue group-hover:text-white sm:h-12 sm:w-12 md:justify-self-end">
                      <ArrowUpRight className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                    </div>

                    <div className="overflow-hidden rounded-[1.25rem] border border-custom-blue/8 md:hidden">
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="relative mx-auto mt-24 w-full max-w-7xl sm:mt-36 lg:mt-48">
            <div className="pointer-events-none absolute left-1/2 top-8 h-[40rem] w-[min(48rem,90vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(103,217,255,0.14)_0%,_rgba(103,217,255,0.04)_40%,_transparent_75%)] blur-3xl" />
            
            <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              {/* Sticky Left Content */}
              <div className="lg:sticky lg:top-32 lg:h-fit lg:pt-4">
                <SectionLabel index="04" label="Trajectory" />
                <div className="mt-8 space-y-6">
                  <div className="space-y-5">
                    <h2 className="font-display text-[clamp(2.4rem,8vw,5.6rem)] leading-[0.9] tracking-[-0.045em] text-custom-blue">
                      Design. <br />
                      Product. <br />
                      Craft.
                    </h2>
                    {/* <p className="max-w-md text-[1.02rem] leading-7 text-custom-blue/60">
                      A compact read of the path from multimedia design in Denmark into product engineering and AI-leaning interface work from Singapore.
                    </p> */}
                  </div>

                  <div className="mt-10 hidden flex-col gap-6 lg:flex">
                    <div className="relative flex flex-col gap-3">
                      {history.map((item, idx) => (
                        <div 
                          key={`nav-${idx}`}
                          className="group relative flex items-center gap-6 py-2 transition-colors duration-300"
                        >
                          <div
                            className={`relative z-10 inline-block h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                              historyActiveIndex === idx
                                ? "bg-[#67d9ff] opacity-60"
                                : "bg-[#67d9ff]/20 opacity-60"
                            }`}
                          />
                          <button
                            onClick={() => {
                              const el = document.getElementById(`history-item-${idx}`);
                              el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }}
                            className="font-label text-left text-[0.62rem] font-medium uppercase tracking-[0.18em] transition-all duration-300"
                            style={{
                              opacity: historyActiveIndex === idx ? 1 : 0.28,
                              color: `rgba(17, 27, 40, ${historyActiveIndex === idx ? 1 : 0.3})`,
                            }}
                          >
                            {item.company}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Scrolling History List */}
              <div className="relative snap-y snap-proximity space-y-8 py-10 sm:space-y-16 lg:py-[20vh]">
                <div className="pointer-events-none absolute bottom-12 left-5 top-12 hidden w-px bg-gradient-to-b from-custom-blue/0 via-custom-blue/10 to-custom-blue/0 sm:block" />
                
                {history.map((item, index) => (
                  <HistoryItemComponent
                    key={`${item.company}-${item.time.start}`}
                    item={item}
                    index={index}
                    focus={historyFocusValues[index] ?? 0}
                    reduceMotion={shouldReduceMotion}
                    compact={isCompactViewport}
                  />
                ))}
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="mx-auto mt-20 flex min-h-[auto] w-full max-w-7xl items-start py-6 sm:mt-28 sm:min-h-[calc(100svh-12rem)] sm:items-center sm:py-10 lg:mt-36 lg:min-h-[calc(100svh-10rem)]"
            onMouseEnter={() => setFooterHover(true)}
            onMouseLeave={() => setFooterHover(false)}
          >
            <motion.div
              data-scroll-anchor="contact"
              {...fadeInUp(0.06)}
              className="relative mx-auto flex min-h-[24rem] w-full max-w-5xl items-start overflow-hidden rounded-[2rem] bg-[#071726] p-6 text-white shadow-[0_40px_140px_rgba(7,20,38,0.26),inset_0_1px_0_rgba(255,255,255,0.16)] sm:min-h-[28rem] sm:items-center sm:rounded-[2.75rem] sm:p-8"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(72,205,255,0.26),_transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_55%)]" />
              <div className="relative grid w-full gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
                <div>
                  <SectionLabel index="05" label="Contact" tone="light" />
                  <h2 className="max-w-3xl font-display text-[clamp(2.15rem,8vw,5rem)] leading-[0.96] tracking-[-0.04em] text-white">
                    Looking for the next product challenge.
                  </h2>
                  <p className="mt-4 max-w-2xl text-[0.96rem] leading-7 text-white/72 sm:text-[1.05rem] sm:leading-8">
                    If you need an engineer who can move between UX decisions,
                    interface systems, and production code, let’s talk.
                  </p>
                </div>

                <div className="grid gap-2.5 self-end sm:gap-3">
                  <a
                    href="mailto:themarcellvarga@gmail.com"
                    className="group flex items-center justify-between gap-4 rounded-[1.35rem] bg-white/7 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-300 hover:bg-white/10 sm:px-5 sm:py-3.5"
                  >
                    <span className="flex min-w-0 flex-1 items-center gap-3">
                      <Mail className="h-5 w-5 text-[#67d9ff]" />
                      <span className="min-w-0 break-all font-label text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/80 sm:text-[0.72rem]">
                        themarcellvarga@gmail.com
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/marcellvarga/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-[1.35rem] bg-white/7 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-300 hover:bg-white/10 sm:px-5 sm:py-3.5"
                  >
                    <span className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-[#67d9ff]" />
                      <span className="font-label text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white/80">
                        LinkedIn
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                  <a
                    href="https://github.com/TheMarcellVarga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-[1.35rem] bg-white/7 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-300 hover:bg-white/10 sm:px-5 sm:py-3.5"
                  >
                    <span className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-[#67d9ff]" />
                      <span className="font-label text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white/80">
                        GitHub
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          </section>
        </main>

        <Footer isHover={footerHover} />
      </div>

      {introIsVisible && (
        <HomeIntro onExitStart={startIntroExit} onComplete={finishIntro} />
      )}

      <AnimatePresence>
        {activeProjectImage && !isCompactViewport && (
          <motion.div
            className="pointer-events-none fixed z-[100] h-[11rem] w-[16rem] overflow-hidden rounded-[1.35rem] border-[1px] border-white/20 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-2xl md:h-[14rem] md:w-[22rem]"
            style={{
              left: mouseXSpring,
              top: mouseYSpring,
              x: 18,
              y: 18,
            }}
            initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotate: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-full w-full">
              <Image
                src={activeProjectImage}
                alt="Project preview"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-3 flex justify-center">
                <span className="font-label rounded-full bg-white/20 px-2 py-0.75 text-[0.5rem] font-medium uppercase tracking-[0.14em] text-white shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-md">
                  View case study
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
