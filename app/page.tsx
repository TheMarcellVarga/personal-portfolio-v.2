"use client";

import {
  type CSSProperties,
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
import { history } from "./data/history";
import { projects } from "./data/projects";
import { SectionLabel } from "./components/SectionLabel";
import { HomeIntro } from "./components/HomeIntro";
import { PageBackground } from "./components/PageBackground";

const principlesStatement =
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

const heroSignatureEchoes = [
  {
    id: "sig-0",
    top: "15%",
    left: "55%",
    width: "32rem",
    style: {
      ["--echo-duration" as string]: "4.2s",
      ["--echo-delay" as string]: "-0.2s",
      ["--echo-opacity" as string]: "0.22",
      ["--echo-drift-x" as string]: "8vw",
      ["--echo-drift-y" as string]: "4vh",
      ["--echo-rotate" as string]: "-14deg",
    } as CSSProperties,
  },
  {
    id: "sig-1",
    top: "30%",
    left: "25%",
    width: "14rem",
    style: {
      ["--echo-duration" as string]: "3.8s",
      ["--echo-delay" as string]: "-1.5s",
      ["--echo-opacity" as string]: "0.08",
      ["--echo-drift-x" as string]: "-6vw",
      ["--echo-drift-y" as string]: "3vh",
      ["--echo-rotate" as string]: "10deg",
    } as CSSProperties,
  },
  {
    id: "sig-2",
    top: "10%",
    left: "70%",
    width: "18rem",
    style: {
      ["--echo-duration" as string]: "4.5s",
      ["--echo-delay" as string]: "-2.8s",
      ["--echo-opacity" as string]: "0.14",
      ["--echo-drift-x" as string]: "12vw",
      ["--echo-drift-y" as string]: "-2vh",
      ["--echo-rotate" as string]: "-20deg",
    } as CSSProperties,
  },
  {
    id: "sig-3",
    top: "45%",
    left: "8%",
    width: "10rem",
    style: {
      ["--echo-duration" as string]: "3.5s",
      ["--echo-delay" as string]: "-0.8s",
      ["--echo-opacity" as string]: "0.05",
      ["--echo-drift-x" as string]: "-10vw",
      ["--echo-drift-y" as string]: "5vh",
      ["--echo-rotate" as string]: "8deg",
    } as CSSProperties,
  },
  {
    id: "sig-4",
    top: "50%",
    left: "60%",
    width: "15rem",
    style: {
      ["--echo-duration" as string]: "4.8s",
      ["--echo-delay" as string]: "-3.2s",
      ["--echo-opacity" as string]: "0.10",
      ["--echo-drift-x" as string]: "5vw",
      ["--echo-drift-y" as string]: "6vh",
      ["--echo-rotate" as string]: "-12deg",
    } as CSSProperties,
  },
  {
    id: "sig-5",
    top: "65%",
    left: "15%",
    width: "12rem",
    style: {
      ["--echo-duration" as string]: "4.0s",
      ["--echo-delay" as string]: "-1.1s",
      ["--echo-opacity" as string]: "0.04",
      ["--echo-drift-x" as string]: "-4vw",
      ["--echo-drift-y" as string]: "8vh",
      ["--echo-rotate" as string]: "15deg",
    } as CSSProperties,
  },
  {
    id: "sig-6",
    top: "20%",
    left: "15%",
    width: "13rem",
    style: {
      ["--echo-duration" as string]: "5.2s",
      ["--echo-delay" as string]: "-4.5s",
      ["--echo-opacity" as string]: "0.12",
      ["--echo-drift-x" as string]: "-15vw",
      ["--echo-drift-y" as string]: "2vh",
      ["--echo-rotate" as string]: "25deg",
    } as CSSProperties,
  },
  {
    id: "sig-7",
    top: "75%",
    left: "45%",
    width: "22rem",
    style: {
      ["--echo-duration" as string]: "5.8s",
      ["--echo-delay" as string]: "-2.1s",
      ["--echo-opacity" as string]: "0.15",
      ["--echo-drift-x" as string]: "4vw",
      ["--echo-drift-y" as string]: "12vh",
      ["--echo-rotate" as string]: "-18deg",
    } as CSSProperties,
  },
  {
    id: "sig-8",
    top: "40%",
    left: "80%",
    width: "11rem",
    style: {
      ["--echo-duration" as string]: "3.9s",
      ["--echo-delay" as string]: "-1.7s",
      ["--echo-opacity" as string]: "0.06",
      ["--echo-drift-x" as string]: "20vw",
      ["--echo-drift-y" as string]: "4vh",
      ["--echo-rotate" as string]: "-30deg",
    } as CSSProperties,
  },
];

function HeroSignatureEchoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="85"
      height="37"
      viewBox="0 0 85 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        pathLength={1}
        d="M0.396973 36.3291C0.396973 36.3291 1.80464 21.811 13.6633 7.89246"
        className="hero-signature-stroke hero-signature-stroke-lead"
      />
      <path
        pathLength={1}
        d="M84.6029 0.378418C83.4907 1.72562 28.5188 31.0478 28.5188 31.0478C34.2765 18.2493 39.5275 5.38881 37.4414 4.87415C37.3274 4.8523 37.2096 4.85749 37.0982 4.88928C31.574 6.017 19.8186 16.4677 17.715 17.2805C17.665 17.3015 17.6107 17.3113 17.5561 17.3093C16.4821 17.2881 15.8514 13.5856 15.4907 9.68776"
        className="hero-signature-stroke hero-signature-stroke-main"
      />
    </svg>
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

function scrollToId(id: string, reducedMotion: boolean) {
  const section = document.getElementById(id);

  if (id === "about" && section) {
    const rect = section.getBoundingClientRect();
    const scrollableDistance = Math.max(section.offsetHeight - window.innerHeight, 0);

    window.scrollTo({
      top: Math.max(0, window.scrollY + rect.top + scrollableDistance * 0.72),
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
    window.scrollY + rect.top - Math.max((window.innerHeight - rect.height) / 2, 96);

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: reducedMotion ? "auto" : "smooth",
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
  const principlesRef = useRef<HTMLElement>(null);
  const trajectoryRef = useRef<HTMLElement>(null);
  const workSectionRef = useRef<HTMLElement>(null);
  const [activeTrajectoryIndex, setActiveTrajectoryIndex] = useState(0);
  const trajectoryHeightVh = history.length * 110 + 100;
  const [trajectoryMinHeightPx, setTrajectoryMinHeightPx] = useState<
    number | null
  >(null);
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
  const { scrollYProgress: principlesProgress } = useScroll({
    target: principlesRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: trajectoryProgress } = useScroll({
    target: trajectoryRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: workScrollProgress } = useScroll({
    target: workSectionRef,
    offset: ["start end", "end start"],
  });
  const principlesRevealEnd = 0.74;
  const principlesOpacity = useTransform(
    principlesProgress,
    [0, 0.12, 0.74, 0.86, 0.95, 1],
    [0.2, 1, 1, 0.88, 0.32, 0],
  );
  const principlesScale = useTransform(
    principlesProgress,
    [0, 0.18, 0.74, 0.86, 1],
    [0.95, 1, 1, 0.99, 0.92],
  );
  const principlesY = useTransform(
    principlesProgress,
    [0, 0.2, 0.74, 0.86, 1],
    [28, 0, 0, -8, -72],
  );
  const principlesGlow = useTransform(principlesProgress, [0, 1], [0.15, 0.5]);

  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    const check = () => setIsMobileView(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
      setTypedText(principlesStatement);
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

  const featuredProjects = useMemo(
    () => projects.filter((project) => !project.inProgress),
    [],
  );
  const activeTrajectoryItem = history[activeTrajectoryIndex];
  const introIsActive = introStage === "playing";

  // Removed carousel measurements and scroll functions

  return (
    <div className="relative overflow-x-clip">
      <PageBackground />

      <div
        className={`transition-opacity duration-700 ${
          introIsActive ? "pointer-events-none opacity-25" : "opacity-100"
        }`}
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
      </div>

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
            className="pointer-events-none absolute inset-y-0 right-[-24vw] z-20 flex items-end sm:right-[-12vw] lg:right-[-4vw] xl:right-[2vw]"
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

          <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(4,9,15,0.98)_0%,rgba(4,9,15,0.9)_30%,rgba(4,9,15,0.6)_52%,rgba(4,9,15,0.18)_72%,rgba(4,9,15,0.08)_100%)]" />

          <div
            aria-hidden="true"
            className="hero-signature-field pointer-events-none absolute inset-0 z-0 overflow-hidden"
          >
            <div className="hero-signature-vignette absolute inset-0" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(101,229,255,0.16),transparent_22%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_18%),radial-gradient(circle_at_58%_72%,rgba(125,230,255,0.07),transparent_24%)]" />
            {heroSignatureEchoes.map((echo) => (
              <div
                key={echo.id}
                className="hero-signature-echo"
                style={
                  {
                    ...echo.style,
                    top: echo.top,
                    left: echo.left,
                    width: echo.width,
                  } as CSSProperties
                }
              >
                <HeroSignatureEchoMark className="hero-signature-mark h-auto w-full" />
              </div>
            ))}
          </div>

          <div className="relative z-30 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-6 pb-10 pt-24 sm:px-10 sm:pb-14 lg:px-14 lg:pb-12">
            <div className="max-w-[36rem]">
              <motion.div
                {...fadeInUp(0.05)}
                style={shouldReduceMotion ? undefined : { y: heroPillsY }}
                className="mb-7 flex flex-wrap gap-3"
              >
                <span className="font-label rounded-full bg-white/10 px-4 py-2 text-[0.66rem] font-medium uppercase tracking-[0.28em] text-white/74 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                  Frontend & UX Engineer
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
            ref={principlesRef}
            className="relative mx-auto -mt-8 h-[240vh] w-full max-w-7xl sm:-mt-12 sm:h-[300vh]"
          >
          <div className="sticky top-16 flex h-[32rem] items-center py-10 sm:top-24 sm:h-[40rem] sm:py-12">
            <motion.div
              data-scroll-anchor="about"
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: principlesOpacity,
                      scale: principlesScale,
                      y: principlesY,
                    }
              }
              className="mx-auto flex h-[32rem] w-full max-w-5xl flex-col overflow-hidden rounded-[2.5rem] bg-[#071726]/92 p-6 text-white shadow-[0_40px_140px_rgba(5,16,32,0.28),inset_0_1px_0_rgba(255,255,255,0.16)] sm:h-[40rem] sm:rounded-[3rem] sm:p-8 lg:h-[40rem] lg:p-12"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <SectionLabel index="01" label="Principles" tone="light" />
                  <motion.div
                    style={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: principlesGlow }
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

        <section className="relative mx-auto w-full max-w-7xl py-20 sm:py-32">
          <motion.div
            {...fadeInUp(0.04)}
            className="mb-6 grid gap-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end"
          >
            <div className="max-w-2xl">
              <SectionLabel index="02" label="Capabilities" />
              <h2 className="mt-6 max-w-[11ch] font-display text-[clamp(1.55rem,2.35vw,2.35rem)] leading-[0.98] tracking-[-0.025em] text-custom-blue">
                The useful overlap between taste and implementation.
              </h2>
            </div>
            <p className="max-w-xl text-[0.9rem] leading-7 text-custom-blue/66 lg:justify-self-end">
              Interfaces, motion, systems, and frontend detail need to line
              up. This is the part of the work I actually care about.
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
          className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-32 lg:px-10"
        >
          <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <SectionLabel index="03" label="Selected Work" />
              <h2 className="mt-8 font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.95] tracking-[-0.03em] text-custom-blue">
                Ambition in production.
              </h2>
              <p className="mt-6 text-[1.05rem] leading-relaxed text-custom-blue/65">
                A focused selection of product interfaces where UX details
                drive the engineering choices.
              </p>
            </div>
            <div className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-custom-blue/40">
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
                onMouseEnter={() => !shouldReduceMotion && setActiveProjectImage(project.image)}
                onMouseLeave={() => setActiveProjectImage(null)}
                className="group relative"
              >
                <Link
                  href={project.link}
                  className="flex flex-col border-b border-custom-blue/5 py-6 transition-colors duration-500 hover:bg-custom-blue/[0.01] sm:py-8"
                >
                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
                    <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
                      <span className="font-label min-w-[2.5rem] text-[0.62rem] font-bold text-custom-blue/20">
                        0{idx + 1}
                      </span>
                      <h3 className="font-display text-[1.8rem] leading-none tracking-[-0.02em] text-custom-blue transition-transform duration-500 group-hover:translate-x-2 sm:text-[2.2rem] lg:text-[2.8rem]">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between gap-6 sm:justify-end">
                      <div className="flex flex-col items-end gap-0.5 text-right">
                        <span className="font-label text-[0.58rem] font-bold uppercase tracking-[0.18em] text-custom-blue/40">
                          {project.category}
                        </span>
                        <span className="font-label text-[0.58rem] font-bold text-custom-blue/20">
                          {project.date}
                        </span>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-custom-blue/10 transition-all duration-500 group-hover:rotate-45 group-hover:bg-custom-blue group-hover:text-white sm:h-12 sm:w-12">
                        <ArrowUpRight className="h-4 w-4 sm:h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 sm:ml-[10.5rem] sm:mt-1">
                    {project.skills.slice(0, 4).map((skill) => (
                      <span key={skill} className="text-[0.58rem] font-bold uppercase tracking-[0.15em] text-custom-blue/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          ref={trajectoryRef}
          className="relative mx-auto mt-20 w-full max-w-7xl sm:mt-32"
          style={trajectorySectionStyle}
        >
          <div className="sticky top-16 flex min-h-[calc(100svh-4rem)] items-center sm:top-24 sm:min-h-[calc(100svh-6rem)]">
            <div className="w-full space-y-5">
              <motion.div
                {...fadeInUp(0.04)}
                className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end"
              >
                <div className="max-w-2xl">
                <SectionLabel index="04" label="Trajectory" />
                <div className="mt-6 space-y-3">
                  <div className="font-label inline-flex rounded-full bg-white/76 px-3.5 py-1.5 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-custom-blue/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                    Engineering Path
                  </div>
                  <p className="max-w-[11ch] font-display text-[clamp(1.55rem,2.35vw,2.45rem)] leading-[0.98] tracking-[-0.025em] text-custom-blue">
                    Built in Denmark. Now shipping from Singapore.
                  </p>
                </div>
                </div>
                <div className="max-w-xl lg:justify-self-end">
                  <p className="text-[0.92rem] leading-7 text-custom-blue/66">
                    Multimedia design first. Product work next. A compact read
                    of the path from design school into product engineering and
                    AI-leaning interface work.
                  </p>
                </div>
              </motion.div>

              <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-5">
                <div className="glass-panel relative overflow-hidden rounded-[1.9rem] bg-white/70 p-4 shadow-[0_12px_45px_rgba(11,17,26,0.06)] sm:rounded-[2.2rem] sm:p-5">
                    <div className="pointer-events-none absolute bottom-6 left-[2.4rem] top-6 w-px -translate-x-1/2 bg-custom-blue/10" />
                    <div className="space-y-2.5">
                    {history.map((item, index) => {
                      const isActive = index === activeTrajectoryIndex;
                      const isPast = index < activeTrajectoryIndex;

                      return (
                        <button
                          key={`${item.company}-${item.time.start}`}
                          type="button"
                          onClick={() => setActiveTrajectoryIndex(index)}
                          className={`relative grid w-full grid-cols-[2.1rem_1fr] items-center gap-2.5 rounded-[1.15rem] px-1.5 py-2.5 text-left transition duration-300 ${
                            isActive
                              ? "bg-white shadow-[0_10px_30px_rgba(11,17,26,0.07)]"
                              : "hover:bg-white/45"
                          }`}
                          aria-pressed={isActive}
                        >
                          <span className="relative flex h-6 items-center justify-center">
                            {isActive ? (
                              <motion.span
                                layoutId="trajectory-dot-v2"
                                className="relative z-10 h-2.5 w-2.5 rounded-full border-2 border-[#67d9ff] bg-[#67d9ff] shadow-[0_0_0_6px_rgba(103,217,255,0.14)]"
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
                          <span className="min-w-0 pr-1">
                            <span className="block text-[0.62rem] font-bold uppercase tracking-[0.2em] text-custom-blue/45">
                              {item.time.start}{" "}
                              {item.time.end
                                ? `- ${item.time.end}`
                                : "- Present"}
                            </span>
                            <span className="mt-1 block truncate text-[0.94rem] font-bold text-custom-blue">
                              {item.company}
                            </span>
                            <span className="mt-0.5 block text-[0.68rem] leading-5 text-custom-blue/58">
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
                    className="glass-panel relative overflow-hidden rounded-[1.9rem] bg-white/72 p-5 shadow-[0_12px_45px_rgba(11,17,26,0.06)] sm:rounded-[2.2rem] sm:p-6"
                  >
                    <div className="flex flex-col">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-label rounded-full bg-custom-blue/7 px-3.5 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.15em] text-custom-blue/62 shadow-[inset_0_1px_0_rgba(255,255,255,0.58)]">
                        {activeTrajectoryItem.time.start}{" "}
                        {activeTrajectoryItem.time.end
                          ? `- ${activeTrajectoryItem.time.end}`
                          : "- Present"}
                      </span>
                      <span className="font-label rounded-full bg-white px-3 py-1.5 text-[0.58rem] font-medium uppercase tracking-[0.16em] text-custom-blue/52 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                        Step {activeTrajectoryIndex + 1} of {history.length}
                      </span>
                    </div>
                    <div className="mt-5 flex flex-col gap-1.5 border-b border-custom-blue/8 pb-4 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="font-display text-[clamp(1.5rem,2.2vw,2rem)] leading-[1] tracking-[-0.025em] text-custom-blue">
                      {activeTrajectoryItem.jobTitle}
                        </p>
                        <p className="mt-1 text-[0.78rem] uppercase tracking-[0.16em] text-custom-blue/42">
                          {activeTrajectoryItem.company}
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 grid gap-3">
                      {activeTrajectoryItem.description.map((paragraph, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-[0.8rem_1fr] gap-3 rounded-[1.1rem] bg-white/58 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.68)]"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#67d9ff]" />
                          <p className="max-w-[34rem] text-[0.88rem] leading-6 text-custom-blue/72">
                            {paragraph}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {activeTrajectoryItem.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-label rounded-full bg-white px-3 py-1.5 text-[0.58rem] font-medium uppercase tracking-[0.14em] text-custom-blue/58 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_8px_20px_rgba(17,27,40,0.03)]"
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
        </section>

          <section
            id="contact"
            className="mx-auto w-full max-w-7xl py-20 sm:py-32"
            onMouseEnter={() => setFooterHover(true)}
            onMouseLeave={() => setFooterHover(false)}
          >
          <motion.div
            data-scroll-anchor="contact"
            {...fadeInUp(0.06)}
            className="relative flex h-[32rem] items-center overflow-hidden rounded-[3rem] bg-[#071726] p-8 text-white shadow-[0_40px_140px_rgba(7,20,38,0.26),inset_0_1px_0_rgba(255,255,255,0.16)] sm:h-[40rem] sm:p-12"
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

      <AnimatePresence>
        {activeProjectImage && (
          <motion.div
            className="pointer-events-none fixed z-[100] h-[11rem] w-[16rem] overflow-hidden rounded-[1.35rem] border-[1px] border-white/20 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-2xl md:h-[14rem] md:w-[22rem]"
            style={{
              left: mouseXSpring,
              top: mouseYSpring,
              x: isMobileView ? -148 : 18,
              y: isMobileView ? -220 : 18,
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
                <span className="font-label rounded-full bg-white/20 px-2 py-0.75 text-[0.5rem] font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-md">
                  View Case Study
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
