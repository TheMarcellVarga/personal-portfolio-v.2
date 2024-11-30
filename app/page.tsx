"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import LinkedInIcon from "../public/icons/linkedin";
import OpenResumeIcon from "../public/icons/openResume";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import {
  FaPaintBrush,
  FaUserFriends,
  FaSearch,
  FaVial,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaSketch,
  FaVuejs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiSvelte,
  SiAdobe,
  SiVercel,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

const skillCategories = {
  design: [
    { name: "UI Design", icon: <FaPaintBrush /> },
    { name: "UX Design", icon: <FaUserFriends /> },
    { name: "User Research", icon: <FaSearch /> },
    { name: "Usability Testing", icon: <FaVial /> },
    { name: "Adobe CC Suite", icon: <SiAdobe /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Sketch", icon: <FaSketch /> },
  ],
  frontend: [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Vue", icon: <FaVuejs /> },
    { name: "Svelte", icon: <SiSvelte /> },
    { name: "SvelteKit", icon: <SiSvelte /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Vercel", icon: <SiVercel /> },
  ],
};

import Header from "./header";
import Footer from "./footer";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import useLocomotive from "./useLocomotive";
import useWindowSize from "./useWindowSize";

export const projects = [
  {
    title: "European Study Solution",
    subTitle: "Student Agency",
    description:
      "Informative website developed for a start-up to help American students with application process towards European programs and prepare the for life abroad. The platform is to served to develop their business, get and keep in touch with their students.",
    skills: ["HTML", "CSS", "JavaScript", "SEO"],
    link: "/ess",
    image: "/images/ess-index.png",
  },
  {
    title: "CatchScan",
    subTitle: "Copyright Protection SaaS",
    description:
      "SaaS dashboard for an automated copyright protection platform in order to protect content creators intellectual works. User-friendly interface to utilise their in-house algorithm the fullest.",
    skills: ["Tailwind CSS", "Atomic Design", "Design System"],
    link: "/catchscan",
    image: "/images/catchscan-index.png",
  },
  {
    title: "AskCody",
    subTitle: "Hybrid Office Manager",
    description:
      "Flexible office resource management for hybrid work environments, To optimise space resources and automate ad-hoc tasks to enhance employee productivity developed as a Microsoft Teams Integration.",
    skills: ["TypeScript", "React-Bootstrap", "Fluent UI"],
    link: "/askcody",
    image: "/images/askcody-index.png",
  },
];

const history = [
  {
    company: "AXON Networks",
    jobTitle: "UX & Frontend Engineer",
    time: {
      start: "Oct 2022",
      end: "",
    },
    description: [
      "Contributed to AXON Orchestrator development, focusing on UX/UI design and frontend development within cross-functional teams.",
      "Created interactive prototypes and established design system for in-house development.",
      "Collaborated with Analytics team to integrate AI/ML solutions into products, enhancing product functionality.",
      "Participated in the full product development cycle from UX/UI design, through Frontend Development to successful deployments.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React-Bootstrap",
      "Fluent UI",
    ],
  },
  {
    company: "MapsPeople",
    jobTitle: "UX Designer Intern",
    time: {
      start: "Jan 2022",
      end: "Apr 2022",
    },
    description: [
      "Enhanced Maps Indoors CMS through research and development of interactive, animated prototypes.",
      "Executed tasks via Jira, including project management and documentation.",
      "Leveraged the company Design System, contributing to its evolution",
      "Prioritized delivery efficiency using Auto-Layout.",
      "Designed cross-platform solutions for both desktop and mobile, with a focus on accessibility.",
      "Acquired interdisciplinary skills working within a SaaS company team.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React-Bootstrap",
      "Fluent UI",
    ],
  },
  {
    company: "University College of Northen Denmark",
    jobTitle: "Multimedia Design",
    time: {
      start: "Sept 2020",
      end: "Jun 2022",
    },
    description: [
      "UX/UI Design and Elective Specialization: Focused on enhancing UI/UX design skills through practical projects. This aligns with the importance of a well-crafted website or app for user satisfaction.",
      "Front-End Web Development: Engaged in hands-on experience building applications. Emphasis was placed on the design-to-code process and creating visually appealing, easy-to-use interfaces.",
      "Content Production: Involved in creating content that meets user needs and ensures a positive user experience. This reflects the ongoing process of UX design.",
      "Collaboration and Project Management: Worked collaboratively with real companies within Reflective Practice-based Learning (RPL). Applied user research methodologies and usability testing to improve product functionality.",
      "Reflective Practice-based Learning: Executed projects in collaboration with real companies. Applied UX/UI design principles to real-world challenges, enhancing the design-to-code process.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React-Bootstrap",
      "Fluent UI",
    ],
  },
];

const textToType =
  "An adventurous UX & Frontend engineer dedicated to crafting delightful, business-focused, and user-centred digital experiences. I excel at solving complex problems through efficient design, turning challenges into opportunities. Overcoming challenges through efficient design is what fuelling my everyday drive.";

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 17) return "Good afternoon";
  if (hour >= 17 && hour < 22) return "Good evening";
  return "Hey there";
};

export default function Page() {
  const globeRef = useRef<any>();

  const { scrollPositionLocomotive, updateScroll } = useLocomotive();

  const stickySectionRef = useRef<HTMLDivElement>(null);

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const handlePageShow = () => {
      updateScroll();
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, [updateScroll]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        updateScroll();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [updateScroll]);

  useEffect(() => {
    const handleResize = () => {
      updateScroll();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateScroll]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setTimeout(() => {
          updateScroll();
        }, 50);
      }
    };

    const handlePageShow = () => {
      setTimeout(() => {
        updateScroll();
      }, 50);
    };

    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [updateScroll]);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        if (scrollPositionLocomotive !== undefined) {
          const scrollDistance = scrollPositionLocomotive;

          const typingStart = 550;
          const maxScrollForTyping = 2250;
          const fadeStart = 2800;
          const fadeEnd = fadeStart + 400;
          const zIndexThreshold = 3600;

          const stickySection = document.querySelector(
            "[data-scroll-section].sticky"
          ) as HTMLElement;

          if (stickySection) {
            const newZIndex = scrollDistance > zIndexThreshold ? "-99" : "1";
            if (stickySection.style.zIndex !== newZIndex) {
              stickySection.style.zIndex = newZIndex;
            }

            let opacity = 1;
            if (scrollDistance >= fadeStart && scrollDistance <= fadeEnd) {
              const fadeProgress =
                (scrollDistance - fadeStart) / (fadeEnd - fadeStart);
              opacity = 1 - fadeProgress;
            } else if (scrollDistance > fadeEnd) {
              opacity = 0;
            }

            const opacityString = Math.max(0, Math.min(1, opacity)).toString();
            if (stickySection.style.opacity !== opacityString) {
              stickySection.style.opacity = opacityString;

              const typedTextElement = stickySection.querySelector(
                "h2"
              ) as HTMLElement;
              if (typedTextElement) {
                typedTextElement.style.opacity = opacityString;
              }
            }
          }

          let newTypedText = "";

          if (scrollDistance < typingStart) {
            newTypedText = "";
          } else if (scrollDistance > maxScrollForTyping) {
            newTypedText = textToType;
          } else {
            const progress =
              (scrollDistance - typingStart) /
              (maxScrollForTyping - typingStart);
            const clampedProgress = Math.max(0, Math.min(1, progress));
            const textLength = Math.floor(clampedProgress * textToType.length);
            newTypedText = textToType.slice(0, textLength);
          }

          setTypedText((prevText) => {
            if (prevText !== newTypedText) {
              return newTypedText;
            }
            return prevText;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [scrollPositionLocomotive]); // Remove textToType from dependencies

  const [isOpen, setIsOpen] = useState(false);
  const [footerHover, setFooterHover] = useState(false);
  const [showLegacyNotice, setShowLegacyNotice] = useState(true);
  const [isNoticeVisible, setIsNoticeVisible] = useState(true);
  const [isHoveringLegacyNotice, setIsHoveringLegacyNotice] = useState(false);

  useEffect(() => {
    if (showLegacyNotice && !isHoveringLegacyNotice) {
      const timer = setTimeout(() => {
        setIsNoticeVisible(false);
        setTimeout(() => {
          setShowLegacyNotice(false);
        }, 500);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [showLegacyNotice, isHoveringLegacyNotice]);

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.enabled = true;
    }
  }, []);

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const size = useWindowSize();

  const scrollToHome = useCallback(() => {
    if (stickySectionRef.current) {
      const aboutLocation = 0;

      window.scrollTo({
        top: aboutLocation,
        behavior: "smooth",
      });
    }
  }, []);

  const scrollToAbout = useCallback(() => {
    if (stickySectionRef.current) {
      const aboutLocation = 2800 - 1;

      window.scrollTo({
        top: aboutLocation,
        behavior: "smooth",
      });
    }
  }, []);

  const scrollToWork = useCallback(() => {
    if (stickySectionRef.current) {
      const workLocation = 4350 - 1;

      window.scrollTo({
        top: workLocation,
        behavior: "smooth",
      });
    }
  }, []);

  const scrollToContact = useCallback(() => {
    if (stickySectionRef.current) {
      const contactLocation = 6380 - 1;

      window.scrollTo({
        top: contactLocation,
        behavior: "smooth",
      });
    }
  }, []);

  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    const timer = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="main-container"
      data-scroll-container
      className={`
        px-4 pb-4 
        transition-colors duration-200 
        ease-in-out 
        bg-gray-200 
        relative
        scroll-smooth
      `}
    >
      <div
        className="
          absolute inset-0 
          opacity-[0.05] 
          bg-[radial-gradient(#02425C_1.5px,transparent_1.5px)] 
          [background-size:16px_16px] 
          pointer-events-none
          before:absolute 
          before:inset-0 
          before:bg-gradient-to-b 
          before:from-transparent 
          before:to-gray-200/50 
          before:backdrop-blur-[1px]
          motion-safe:transition-opacity
          motion-safe:duration-700
          scroll-smooth
        "
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />
      {showLegacyNotice && (
        <div
          onMouseEnter={() => setIsHoveringLegacyNotice(true)}
          onMouseLeave={() => setIsHoveringLegacyNotice(false)}
          className={`
      fixed 
      z-50
      transition-all duration-500 ease-out
      ${isNoticeVisible ? "opacity-100" : "opacity-0 translate-y-4"}
      
      /* Mobile First Positioning */
      bottom-4 
      left-4 
      right-4
      sm:left-auto 
      sm:right-4
      
      /* Width Control */
      w-auto
      sm:max-w-sm
      
      /* Container Styling */
      bg-gray-100/90
      text-custom-blue 
      rounded-xl
      shadow-lg 
      backdrop-blur-sm 
      border border-custom-blue/10
      
      /* Padding Adjustments */
      p-3
      sm:p-4
      
      /* Layout */
      flex 
      flex-col 
      sm:flex-row 
      items-center 
      gap-2
      
      /* Background Pattern */
      before:absolute 
      before:inset-0 
      before:opacity-[0.02] 
      before:bg-[radial-gradient(#02425C_1.5px,transparent_1.5px)] 
      before:[background-size:16px_16px] 
      before:pointer-events-none
      before:rounded-xl
    `}
        >
          <div className="flex-1 w-full sm:w-auto">
            <p className="text-base sm:text-lg font-bold text-custom-blue text-center sm:text-left">
              🚧 Website under development
            </p>
            <p className="text-xs sm:text-sm text-custom-blue/80 mt-1 text-center sm:text-left">
              Ready to explore! Want to see the legacy version?{" "}
              <a
                href="YOUR_LEGACY_SITE_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-blue hover:text-custom-teal underline transition-colors duration-300"
              >
                Click here
              </a>
            </p>
          </div>

          <button
            onClick={() => setShowLegacyNotice(false)}
            className="text-custom-blue/60 hover:text-custom-blue transition-colors duration-300
        p-1.5 sm:p-2 
        hover:bg-custom-blue/5 
        rounded-lg
        absolute 
        top-2 
        right-2
        sm:relative
        sm:top-auto
        sm:right-auto"
            aria-label="Close notification"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}{" "}
      <div className="relative z-1">
        <Header
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          scrollToHome={scrollToHome}
          scrollToAbout={scrollToAbout}
          scrollToWork={scrollToWork}
          scrollToContact={scrollToContact}
        />
        <main
          data-scroll-section
          data-scroll-section-id="hero"
          className="relative flex flex-col items-center justify-between h-screen mt-2 m-4 gap-1"
        >
          <div
            data-scroll
            data-scroll-speed="1.2"
            data-scroll-delay="0.1"
            className="flex-grow pb-8 w-full flex flex-row items-center justify-strech gap-2 fade-top-bottom"
          >
            <div
              className={`
      absolute 
      mt-4 
      w-full
      h-screen 
      z-20 
      flex 
      flex-col 
      items-start 
      justify-center 
      overflow-x-hidden
      ${
        isMobile
          ? `
        px-6
        pb-48
        text-center
        items-center
      `
          : `
        ml-4 
        md:pl-12 
        pl-4 
        pb-32 
        md:pb-24 
        md:pt-4
      `
      }
    `}
            >
              <span
                className={`
      text-gray-700 
      font-light 
      whitespace-nowrap
      animate-fade-in-up 
      transition-opacity 
      duration-300
      ${isMobile ? "text-base" : "text-base sm:text-lg md:text-xl lg:text-2xl"}
      pb-2
    `}
                style={{ animationDelay: "0.2s" }}
              >
                {greeting}, I&apos;m&nbsp;
              </span>

              <span
                className={`
      text-custom-blue 
      font-bold 
      whitespace-nowrap
      animate-fade-in-up
      ${
        isMobile
          ? "text-4xl"
          : "text-[44px] leading-[50px] sm:text-5xl md:text-6xl lg:text-7xl"
      }
    `}
                style={{ animationDelay: "0.4s" }}
              >
                Marcell Varga
              </span>

              <div
                className={`
      flex 
      max-w-full 
      font-light 
      items-center 
      whitespace-nowrap
      animate-fade-in-up
      text-custom-blue
      ${
        isMobile
          ? `
        text-lg
        mb-3
        justify-center
      `
          : `
        text-xl sm:text-2xl md:text-3xl lg:text-4xl
        justify-start
        mb-3 md:mb-0 md:my-2
      `
      }
    `}
                style={{ animationDelay: "0.6s" }}
              >
                UX & Frontend engineer
              </div>

              <div
                className="absolute bottom-36 md:bottom-36 left-0 pl-4 md:pl-10
    animate-fade-in-up"
                style={{ animationDelay: "1s" }}
              >
                <button className="relative px-5 py-2 text-custom-blue rounded-full group overflow-hidden min-w-36 flex items-center justify-center">
                  <span className="relative z-10 transition-all duration-300 group-hover:text-gray-50 mr-2">
                    View Projects
                  </span>
                  <ArrowRightIcon
                    className="w-5 h-5 relative z-10 group-hover:text-gray-50
        transform group-hover:translate-x-1 transition-all duration-300 inline-block"
                  />
                  <div className="absolute inset-0 border-2 border-custom-blue rounded-full"></div>
                  <div
                    className="absolute inset-0 bg-custom-blue rounded-full transform scale-x-0 group-hover:scale-x-100 
        transition-transform duration-300 ease-out origin-left"
                  ></div>
                </button>
              </div>
            </div>

            <div className="relative w-full h-full flex justify-end">
              <div
                className="relative w-full h-2/12 md:h-full flex justify-end main-container
        animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <svg
                  className="rounded-[36px] bg-gray-100 transition-transform duration-700 ease-out hover:scale-105 hover:rotate-1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "auto",
                    right: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                    transform: isMobile ? "scale(-1, -1)" : "scale(-1, -1)",
                  }}
                >
                  <path
                    className="hidden 2xl:block"
                    d="M2500 -2800L470 1100H0V-150Z"
                  />
                  <path
                    className="hidden 2xl:block gradient-path"
                    d="M2500 -2800L470 1100H0V-150Z"
                    fill="url(#paint0_linear_364_239)"
                  />
                  <path
                    className="hidden md:block 2xl:hidden"
                    d="M1750 -2009L335 786H0V-109Z"
                  />
                  <path
                    className="hidden md:block 2xl:hidden gradient-path"
                    d="M1750 -2009L335 786H0V-109Z"
                    fill="url(#paint0_linear_364_239)"
                  />
                  <path
                    className="hidden sm:block md:hidden"
                    d="M875 -1004.5L167.5 393H0V-54.5Z"
                  />
                  <path
                    className="hidden sm:block md:hidden gradient-path"
                    d="M875 -1004.5L167.5 693H0V-54.5Z"
                    fill="url(#paint0_linear_364_239)"
                  />
                  <path
                    className="block sm:hidden"
                    d="M437.5 -502.25L83.75 696.5H0V-27.25Z"
                  />
                  <path
                    className="block sm:hidden gradient-path"
                    d="M177.5 0L-13.75 592.5H0V-27.25Z"
                    fill="url(#paint0_linear_364_239)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_364_239"
                      x1="665"
                      y1="-109"
                      x2="-184.317"
                      y2="250.252"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#02425C" />
                      <stop offset="0.475" stopColor="#0F172A" />
                      <stop offset="1" stopColor="#001822" />
                    </linearGradient>
                  </defs>
                </svg>{" "}
              </div>

              <div
                data-scroll
                data-scroll-speed="0.4"
                data-scroll-delay="0.1"
                className={`
    absolute 
    transform 
    z-10
    opacity-0 
    animate-fade-in-up
    ${
      isMobile
        ? `
      w-32
      bottom-12
      right-1/2
      translate-x-1/2
    `
        : `
      w-48 sm:w-48 md:w-80 lg:w-96 
      bottom-0 
      right-3 md:right-16
    `
    }
  `}
              >
                <Image
                  src="/images/personalpageprofilealt.png"
                  alt="Profile Picture"
                  width={300}
                  height={300}
                  style={{
                    animationDelay: "0.8s",
                    animationFillMode: "forwards",
                  }}
                  className="w-full h-full object-cover rounded-lg
      transform transition-all duration-500 ease-out"
                />
              </div>
            </div>
          </div>
          <div
            className={`transition-all duration-700 ease-out ${
              hasScrolled
                ? "opacity-0 transform translate-y-4"
                : "opacity-100 transform translate-y-0"
            }`}
          >
            <div className="flex flex-col items-center gap-2 pb-32 group">
              <span
                className="text-custom-blue/60 text-sm font-medium tracking-wider uppercase
      transform group-hover:translate-y-[-2px] 
      group-hover:text-custom-blue/90
      transition-all duration-300"
              >
                Scroll to Explore
              </span>
              <div className="relative">
                <svg
                  className="w-6 h-6 animate-bounce text-custom-blue/60 
          group-hover:text-custom-blue/90
          transform group-hover:scale-110 
          transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </main>
        <section
          data-scroll-section
          data-scroll-section-id="about"
          data-scroll-offset="50"
          className="sticky h-[400vh] top-0 flex flex-col items-center justify-between gap-1 w-full transition-all duration-300"
        >
          <div className="flex w-4/5 h-screen text-5xl font-medium items-center justify-start">
            <h2 className="text-2xl font-light text-justify m-8 leading-relaxed text-custom-blue transition-opacity duration-300">
              {typedText}
            </h2>
          </div>
        </section>
        <section
          data-scroll-section
          data-scroll-section-id="about"
          data-scroll-offset="50"
          className="flex justify-center items-center "
        >
          <div className="flex flex-col items-center justify-between mt-4 mb-4 gap-24 w-4/5 ">
            <article className="mt-8 w-full p-4">
              <h2
                className="text-custom-blue text-sm font-bold mb-8 tracking-wider uppercase flex items-center
    before:content-[''] before:block before:w-4 before:h-[2px] before:bg-custom-blue before:mr-2"
              >
                Experience
              </h2>

              <div className="space-y-8">
                {Object.entries(skillCategories).map(([category, skills]) => (
                  <div key={category} className="relative">
                    <h3
                      className="text-sm font-semibold text-custom-blue/80 mb-4 capitalize
          flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-300"
                    >
                      <span className="w-8 h-[1px] bg-custom-blue/30"></span>
                      {category}
                    </h3>

                    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
                      {skills.map((skill, index) => (
                        <div
                          key={skill.name}
                          className="group relative flex flex-col items-center justify-center
                bg-custom-blue/5 hover:bg-custom-blue/10
                p-3 rounded-xl
                transform transition-all duration-300 hover:scale-105 hover:-translate-y-1
                cursor-pointer"
                          style={{
                            animationDelay: `${index * 0.1}s`,
                            animationFillMode: "forwards",
                          }}
                        >
                          <span
                            className="text-xl sm:text-2xl text-custom-blue/70 
                group-hover:text-custom-blue transition-colors duration-300 mb-1"
                          >
                            {skill.icon}
                          </span>

                          <span
                            className="text-[10px] sm:text-xs text-custom-blue/60 
                group-hover:text-custom-blue/80 text-center line-clamp-1 md:hidden
                transition-colors duration-300"
                          >
                            {skill.name.split(" ")[0]}
                          </span>

                          <span
                            className="hidden md:inline text-xs text-custom-blue/60 
                group-hover:text-custom-blue/80 text-center
                transition-colors duration-300"
                          >
                            {skill.name}
                          </span>

                          <div
                            className="absolute -top-12 left-1/2 transform -translate-x-1/2
                bg-custom-blue text-white px-2 py-1 rounded text-xs
                opacity-0 group-hover:opacity-100 transition-all duration-200
                pointer-events-none whitespace-nowrap md:hidden
                shadow-lg backdrop-blur-sm"
                          >
                            {skill.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <article className="w-full flex flex-col p-4">
              <h2
                className="text-custom-blue text-sm font-bold mb-8 tracking-wider uppercase flex items-center
    before:content-[''] before:block before:w-4 before:h-[2px] before:bg-custom-blue before:mr-2"
              >
                Projects
              </h2>
              <div className="w-full h-full flex justify-center items-center">
                <div className="w-full flex flex-col gap-12">
                  {projects.map((project, index) => (
                    <div
                      key={project.title}
                      data-scroll
                      data-scroll-projects
                      data-scroll-speed="0.2"
                      data-scroll-delay="0.2"
                      data-scroll-repeat="true"
                      data-scroll-class="fade-in"
                      className="w-full max-w-[400px] sm:max-w-none mx-auto transform-gpu hover:scale-[1.02] transition-all duration-300"
                    >
                      <Link
                        href={project.link}
                        className={`
    w-full 
    flex flex-col
    sm:flex-row
    gap-4
    px-4 py-6
    sm:px-4 sm:py-3
    md:px-8 md:py-6
    rounded-xl
    transition-all duration-500 ease-out 
    bg-gradient-to-br from-gray-100/95 to-gray-100/90
    hover:bg-neutral-100/95
    group
    items-center
    border border-transparent
    hover:border-custom-blue/10
    backdrop-blur-sm
    relative
    overflow-hidden
  `}
                      >
                        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#02425C_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none group-hover:scale-[1.5] transition-transform duration-1000" />
                        <div
                          className="
  w-full
  sm:w-1/4
  md:w-[300px]
  mb-4 sm:mb-0
  relative 
  flex items-center justify-center
  group-hover:scale-[1.02] transition-transform duration-500
  px-4 sm:px-0
"
                        >
                          <div
                            className="
          w-full
          aspect-[3/2]
          sm:w-full sm:h-full
          md:aspect-[3/2]
          relative rounded-lg overflow-hidden
          shadow-[0_8px_30px_rgba(2,66,92,0.12)]
          group-hover:shadow-[0_15px_60px_rgba(2,66,92,0.2)]
          transition-all duration-500
        "
                          >
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={
                                size.width &&
                                size.width >= 640 &&
                                size.width < 768
                                  ? 80
                                  : 300
                              }
                              height={
                                size.width &&
                                size.width >= 640 &&
                                size.width < 768
                                  ? 80
                                  : 300
                              }
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        </div>
                        <div
                          className="
  flex flex-col 
  px-4
  sm:px-2 sm:pl-4
  md:px-6 md:pl-8
  gap-2 
  w-full 
  sm:w-2/3 
  md:w-full
  h-full
  justify-center
  relative z-10
  text-center sm:text-left
"
                        >
                          <div className="w-fit group-hover:translate-x-1 transition-transform duration-300">
                            <div className="text-lg sm:text-lg md:text-2xl text-custom-blue font-bold text-left">
                              {project.title}
                            </div>
                            <div className="text-sm md:text-base text-custom-blue/80 text-left group-hover:text-custom-blue transition-colors duration-300">
                              {project.subTitle}
                            </div>
                          </div>

                          <div className="text-base font-light text-justify text-custom-blue/90 hidden md:block group-hover:text-custom-blue transition-colors duration-300">
                            <div className="text-sm md:text-base">
                              {project.description}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mt-1 md:mt-2 justify-start">
                            {project.skills.map((skill) => (
                              <div
                                key={skill}
                                className="flex items-center text-xs px-3 py-1.5 rounded-md
      bg-custom-blue/10 text-custom-blue/80
      group-hover:bg-custom-blue group-hover:text-custom-teal
      transform transition-all duration-300 hover:scale-105 shadow-sm"
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="hidden sm:flex w-8 md:w-16 h-full items-center justify-center relative">
                          <div className="flex justify-center items-center transition-transform duration-500 ease-out origin-left group-hover:translate-x-4">
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              className="w-4 md:w-6 h-4 md:h-6 text-custom-blue/50 group-hover:text-custom-blue transition-all duration-500 ease-out"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </article>
            <article className="w-full p-4 transform transition-all duration-500">
              <h2
                className="text-custom-blue text-sm font-bold mb-8 tracking-wider uppercase flex items-center
    before:content-[''] before:block before:w-4 before:h-[2px] before:bg-custom-blue before:mr-2"
              >
                History
              </h2>
              <div className="flex flex-col gap-16">
                {history.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row group  
    rounded-xl transition-all duration-300 p-4 -mx-4"
                  >
                    <div className="w-full md:w-1/2 pr-8">
                      <h3
                        className="text-2xl font-bold text-custom-blue transform 
        group-hover:translate-x-1 transition-transform duration-300"
                      >
                        {item.company}
                      </h3>
                    </div>

                    <div className="w-full md:w-1/2">
                      <div
                        className="flex flex-col gap-4 relative
        before:absolute before:left-0 before:top-0 before:w-[2px] 
        before:h-full before:bg-custom-blue/10 before:-ml-4 
        before:transition-all before:duration-300
        group-hover:before:bg-custom-blue"
                      >
                        <div className="transition-colors duration-300 group-hover:text-custom-blue">
                          <h3 className="text-xl font-semibold text-custom-blue">
                            {item.jobTitle}
                          </h3>
                          <h4 className="text-base font-medium italic text-custom-blue/70">
                            {item.time.start} -{" "}
                            {item.time.end ? item.time.end : "Present"}
                          </h4>
                        </div>

                        <div className="text-custom-blue/80">
                          {item.description.map((desc, index) => (
                            <p
                              key={index}
                              className="py-2 leading-relaxed
              transition-colors duration-300"
                            >
                              {desc}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
        <section
          data-scroll-section
          data-scroll-section-id="contact"
          className="flex justify-center items-center mt-12 mb-24 transform hover:scale-[1.01] transition-all duration-500"
        >
          <div className="relative w-4/5 max-w-4xl">
            <div className="relative bg-gray-100/90 rounded-xl p-8 md:p-12 border border-custom-blue/10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500">
                  <h2 className="text-3xl md:text-4xl font-bold text-custom-blue text-left mb-6 tracking-tight">
                    Building Beyond&nbsp;
                    <span className="text-custom-blue/80">Boundaries</span> 🚀
                  </h2>
                  <p className="text-custom-blue text-left font-bold text-lg md:text-xl max-w-3xl">
                    Full-stack excellence meets design innovation. Let&apos;s
                    architect solutions that make an impact.
                  </p>
                </div>

                <div className="flex-1 flex justify-center md:justify-end">
                  <a
                    href="mailto:themarcellvarga@gmail.com"
                    className="relative px-5 py-2 text-custom-blue rounded-full group overflow-hidden min-w-36 flex items-center justify-center"
                  >
                    <span className="relative z-10 transition-all duration-300 group-hover:text-gray-50 mr-2">
                      Get&nbsp;in&nbsp;Touch
                    </span>
                    <ArrowRightIcon
                      className="w-5 h-5 relative z-10 group-hover:text-gray-50
              transform group-hover:translate-x-1 transition-all duration-300"
                    />
                    <div className="absolute inset-0 border-2 border-custom-blue rounded-full"></div>
                    <div
                      className="absolute inset-0 bg-custom-blue rounded-full transform scale-x-0 group-hover:scale-x-100 
              transition-transform duration-300 ease-out origin-left"
                    ></div>
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-custom-blue/10">
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="https://www.linkedin.com/in/marcellvarga/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-custom-blue/60 hover:text-custom-blue transition-all duration-300"
                  >
                    <LinkedInIcon className="w-5 h-5" />
                    <span className="text-sm">Let&apos;s connect</span>
                  </a>
                  <a
                    href="/Marcell-Varga-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-custom-blue/60 hover:text-custom-blue transition-all duration-300"
                  >
                    <OpenResumeIcon className="w-5 h-5" isHover={false} />
                    <span className="text-sm">Check out my Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
        <Footer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isHover={footerHover}
          setIsHover={setFooterHover}
        />
      </div>
    </div>
  );
}
