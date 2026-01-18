"use client";

import { useEffect, useState, useCallback, useRef } from "react";

import Header from "./header";
import Footer from "./footer";
import useLocomotive from "./useLocomotive";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import History from "./components/History";
import Contact from "./components/Contact";
import LegacyNotice from "./components/LegacyNotice";
import MotionPreference from "./components/MotionPreference";
import BackToTop from "./components/BackToTop";
import MouseTrailer from "./components/MouseTrailer";

export default function Page() {
  const { scrollPositionLocomotive, updateScroll } = useLocomotive();

  const stickySectionRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

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
            <Highlights />
            <Services />
            <Skills />
            <Projects />
            <History />
          </div>
        </section>
        
        <Contact />
        
        <Footer />
      </div>
    </div>
  );
}
