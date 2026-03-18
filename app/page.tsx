"use client";

import { useCallback, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Header from "./header";
import Footer from "./footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import History from "./components/History";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import MotionPreference from "./components/MotionPreference";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.25,
  });

  const scrollToSection = useCallback((id: string, offset = -80) => {
    const section = document.getElementById(id);
    if (!section) return;

    const top = section.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const scrollToHome = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToAbout = useCallback(() => scrollToSection("about"), [scrollToSection]);
  const scrollToWork = useCallback(() => scrollToSection("work"), [scrollToSection]);
  const scrollToContact = useCallback(
    () => scrollToSection("contact"),
    [scrollToSection]
  );

  return (
    <div className="relative overflow-x-clip pb-6">
      <MotionPreference />
      <BackToTop showAfter={620} />

      <motion.div
        style={{ scaleX: progressScale }}
        className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-linear-to-r from-custom-blue via-custom-teal to-custom-blue"
      />

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(23,107,135,0.06)_1.2px,transparent_1.2px)] [background-size:15px_15px] opacity-60" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/22" />
      </div>

      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToHome={scrollToHome}
        scrollToAbout={scrollToAbout}
        scrollToWork={scrollToWork}
        scrollToContact={scrollToContact}
      />

      <main>
        <Hero scrollToWork={scrollToWork} scrollToContact={scrollToContact} />

        <section className="px-4 py-14 sm:px-6 lg:px-8" aria-hidden="true">
          <div className="mx-auto h-px w-full max-w-[1200px] bg-linear-to-r from-transparent via-custom-blue/18 to-transparent" />
        </section>

        <About />

        <section className="px-4 py-14 sm:px-6 lg:px-8" aria-hidden="true">
          <div className="mx-auto h-px w-full max-w-[1200px] bg-linear-to-r from-transparent via-custom-blue/18 to-transparent" />
        </section>

        <section id="work" className="px-4 pb-2 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="flow-shell px-5 py-8 sm:px-8 sm:py-10">
              <div className="flow-stack">
                <Highlights />
                <Services />
                <Skills />
                <Projects />
                <History />
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
