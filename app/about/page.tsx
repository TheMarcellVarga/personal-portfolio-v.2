"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Linkedin, FileText, Globe, Cpu, Zap } from "lucide-react";
import Header from "../header";
import Footer from "../footer";
import { PageBackground } from "../components/PageBackground";
import { SectionLabel } from "../components/SectionLabel";

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  },
});

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <PageBackground />
      
      <Header 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        activeSection="Skills"
      />

      <main className="relative z-10 px-4 pb-24 pt-32 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeInUp(0)}>
            <Link
              href="/"
              className="group mb-12 inline-flex items-center gap-2 text-sm font-semibold text-custom-blue/60 transition-colors hover:text-custom-blue"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to home
            </Link>
          </motion.div>

          <header className="mb-20">
            <motion.div {...fadeInUp(0.1)}>
              <SectionLabel index="01" label="About" />
              <h1 className="font-display text-[clamp(2.35rem,10vw,6.6rem)] font-medium leading-[0.92] tracking-[-0.04em] text-custom-blue">
                Bridging UX decisions and production code.
              </h1>
            </motion.div>
            
            <motion.div {...fadeInUp(0.2)} className="mt-12 max-w-2xl">
              <p className="text-base leading-relaxed text-custom-blue/72 sm:text-xl">
                I turn complex product requirements into clear, scalable interfaces.
                My work moves from research and prototypes into component systems and
                production-ready frontend code.
              </p>
            </motion.div>
          </header>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 mb-24">
            <motion.div 
              {...fadeInUp(0.3)}
              className="glass-panel group relative overflow-hidden rounded-[1.9rem] bg-white/65 p-5 shadow-[0_12px_40px_rgba(11,17,26,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(11,17,26,0.05)] sm:rounded-[2.1rem]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-[0.95rem] bg-white/82 text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_8px_22px_rgba(17,27,40,0.06)] transition-transform duration-500 group-hover:scale-105">
                <Globe className="h-4.5 w-4.5" />
              </div>
              <h2 className="font-display text-[1.18rem] font-medium leading-[1.06] tracking-[-0.02em] text-custom-blue sm:text-[1.38rem]">What I do</h2>
              <p className="mt-2.5 text-[0.78rem] leading-6 text-custom-blue/70">
                Product discovery, interaction design, prototyping, design systems,
                and frontend engineering for complex product workflows.
              </p>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp(0.4)}
              className="glass-panel group relative overflow-hidden rounded-[1.9rem] bg-white/65 p-5 shadow-[0_12px_40px_rgba(11,17,26,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(11,17,26,0.05)] sm:rounded-[2.1rem]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-[0.95rem] bg-white/82 text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_8px_22px_rgba(17,27,40,0.06)] transition-transform duration-500 group-hover:scale-105">
                <Zap className="h-4.5 w-4.5" />
              </div>
              <h2 className="font-display text-[1.18rem] font-medium leading-[1.06] tracking-[-0.02em] text-custom-blue sm:text-[1.38rem]">How I work</h2>
              <p className="mt-2.5 text-[0.78rem] leading-6 text-custom-blue/70">
                I work closely with product, design, engineering, and analytics to keep
                decisions clear and move useful ideas into production.
              </p>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp(0.5)}
              className="glass-panel group relative overflow-hidden rounded-[1.9rem] bg-white/65 p-5 shadow-[0_12px_40px_rgba(11,17,26,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(11,17,26,0.05)] sm:rounded-[2.1rem]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-[0.95rem] bg-white/82 text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_8px_22px_rgba(17,27,40,0.06)] transition-transform duration-500 group-hover:scale-105">
                <Cpu className="h-4.5 w-4.5" />
              </div>
              <h2 className="font-display text-[1.18rem] font-medium leading-[1.06] tracking-[-0.02em] text-custom-blue sm:text-[1.38rem]">Currently</h2>
              <p className="mt-2.5 text-[0.78rem] leading-6 text-custom-blue/70">
                Building reliable product interfaces while exploring practical,
                AI-aware workflows and the UX patterns they require.
              </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            {...fadeInUp(0.6)}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://www.linkedin.com/in/marcellvarga/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white/62 px-6 py-3 text-sm font-semibold text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.66),0_12px_30px_rgba(17,27,40,0.04)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
            <Link
              href="/resume"
              className="inline-flex items-center gap-3 rounded-full bg-white/62 px-6 py-3 text-sm font-semibold text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.66),0_12px_30px_rgba(17,27,40,0.04)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-custom-blue hover:text-white"
            >
              <FileText className="h-4 w-4" />
              View full resume
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
