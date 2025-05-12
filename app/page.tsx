"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import LinkedInIcon from "../public/icons/linkedin";
import OpenResumeIcon from "../public/icons/openResume";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { projects } from "./data/projects";
import { history } from "./data/history";

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
  SiAngular,
  SiExpress,
  SiPython,
  SiDjango,
  SiMysql,
  SiMongodb,
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
    { name: "Angular", icon: <SiAngular /> },
    { name: "Vue", icon: <FaVuejs /> },
    { name: "Svelte", icon: <SiSvelte /> },
    { name: "SvelteKit", icon: <SiSvelte /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
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
import { useIsMobile } from "./isMobile";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import History from "./components/History";
import Contact from "./components/Contact";
import LegacyNotice from "./components/LegacyNotice";
import MotionPreference from "./components/MotionPreference";
import ThemeToggle from "./components/ThemeToggle";
import BackToTop from "./components/BackToTop";
import MouseTrailer from "./components/MouseTrailer";
import Blog from "./components/Blog";

export default function Page() {
  const globeRef = useRef<any>();

  const { scrollPositionLocomotive, updateScroll } = useLocomotive();

  const stickySectionRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [footerHover, setFooterHover] = useState(false);
  const [showLegacyNotice, setShowLegacyNotice] = useState(true);
  const [isNoticeVisible, setIsNoticeVisible] = useState(true);
  const [isHoveringLegacyNotice, setIsHoveringLegacyNotice] = useState(false);

  const isMobile = useIsMobile();
  const MOBILE_TIMER_DURATION = 5000;
  const DESKTOP_TIMER_DURATION = 7500;

  useEffect(() => {
    if (showLegacyNotice && !isHoveringLegacyNotice) {
      const timerDuration = isMobile
        ? MOBILE_TIMER_DURATION
        : DESKTOP_TIMER_DURATION;

      const timer = setTimeout(() => {
        setIsNoticeVisible(false);
        setTimeout(() => {
          setShowLegacyNotice(false);
        }, 500);
      }, timerDuration);

      return () => clearTimeout(timer);
    }
  }, [showLegacyNotice, isHoveringLegacyNotice, isMobile]);

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.enabled = true;
    }
  }, []);

  const size = useWindowSize();

  const scrollToHome = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
    const projectsContent = document.getElementById('projects-content');
    if (projectsContent) {
      const offset = projectsContent.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  }, []);

  const scrollToContact = useCallback(() => {
    // Scroll to the bottom of the page
      window.scrollTo({
      top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
  }, []);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Optimize scroll update handlers
  useEffect(() => {
    const handleVisibilityOrPageShow = () => {
      if (document.visibilityState === "visible" || !document.hidden) {
        setTimeout(() => {
          updateScroll();
        }, 50);
      }
    };

    const handleResize = () => {
      updateScroll();
    };

    // Add event listeners for all cases that need scroll updates
    window.addEventListener("pageshow", handleVisibilityOrPageShow);
    document.addEventListener("visibilitychange", handleVisibilityOrPageShow);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("pageshow", handleVisibilityOrPageShow);
      document.removeEventListener("visibilitychange", handleVisibilityOrPageShow);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateScroll]);

  return (
    <div
      id="main-container"
      data-scroll-container
      className={`
        px-2 sm:px-4 pb-4 
        transition-colors duration-200 
        ease-in-out 
        bg-gray-200 
        relative
        scroll-smooth
      `}
    >
      <MotionPreference />
      {/* Temporarily removed ThemeToggle */}
      {/* <ThemeToggle /> */}
      <BackToTop showAfter={600} />
      <MouseTrailer />

      <div
        className="
          absolute inset-0 
          bg-[radial-gradient(rgba(2,66,92,0.07)_1.5px,transparent_1.5px)]
          [background-size:16px_16px] 
          pointer-events-none
          before:absolute 
          before:inset-0 
          before:bg-linear-to-b 
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

      <LegacyNotice />

      <div className="relative z-1">
        <Header
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          scrollToHome={scrollToHome}
          scrollToAbout={scrollToAbout}
          scrollToWork={scrollToWork}
          scrollToContact={scrollToContact}
        />
        
        <Hero scrollToWork={scrollToWork} />
        
        <About scrollPositionLocomotive={scrollPositionLocomotive} />
        
        <section
          data-scroll-section
          data-scroll-section-id="projects"
          data-scroll-offset="50"
          className="flex justify-center items-center"
          ref={stickySectionRef}
        >
          <div className="flex flex-col items-center justify-between mt-4 mb-4 gap-16 sm:gap-24 w-full sm:w-4/5">
            <Skills />
            <Projects />
            {/* Temporarily removed Blog */}
            {/* <Blog /> */}
            <History />
          </div>
        </section>
        
        <Contact />
        
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
