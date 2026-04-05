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
    ease: [0.22, 1, 0.36, 1],
  },
});

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative overflow-x-clip">
      <PageBackground />
      
      <Header 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        activeSection="Manifesto"
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
              <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.1] tracking-[-0.05em] text-custom-blue">
                Crafting products with clarity, momentum, and purpose.
              </h1>
            </motion.div>
            
            <motion.div {...fadeInUp(0.2)} className="mt-12 max-w-2xl">
              <p className="text-xl leading-relaxed text-custom-blue/72">
                I partner with teams to uncover the right problems, translate them into
                strong UX strategy, and deliver frontend experiences that feel effortless
                for users. My focus is building systems that scale while keeping the human
                experience central.
              </p>
            </motion.div>
          </header>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 mb-24">
            <motion.div 
              {...fadeInUp(0.3)}
              className="glass-panel group rounded-[2rem] p-8 transition-all hover:bg-white/60"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-custom-blue/5 text-custom-blue transition-colors group-hover:bg-custom-blue group-hover:text-white">
                <Globe className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-bold text-custom-blue">What I do</h2>
              <p className="mt-4 text-sm leading-relaxed text-custom-blue/60">
                Product discovery, interaction design, prototyping, and frontend
                engineering with an emphasis on measurable outcomes and smooth delivery.
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUp(0.4)}
              className="glass-panel group rounded-[2rem] p-8 transition-all hover:bg-white/60"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-custom-blue/5 text-custom-blue transition-colors group-hover:bg-custom-blue group-hover:text-white">
                <Zap className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-bold text-custom-blue">How I work</h2>
              <p className="mt-4 text-sm leading-relaxed text-custom-blue/60">
                I collaborate closely with product, design, and engineering to move from
                ideas to shipped experiences. I value crisp documentation and rapid iteration.
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUp(0.5)}
              className="glass-panel group rounded-[2rem] p-8 transition-all hover:bg-white/60"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-custom-blue/5 text-custom-blue transition-colors group-hover:bg-custom-blue group-hover:text-white">
                <Cpu className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-bold text-custom-blue">Currently</h2>
              <p className="mt-4 text-sm leading-relaxed text-custom-blue/60">
                Exploring AI-augmented UX patterns and modern product storytelling while
                building reliable, elegant interfaces for global teams.
              </p>
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
              className="inline-flex items-center gap-3 rounded-full border border-custom-blue/10 bg-white/50 px-6 py-3 text-sm font-semibold text-custom-blue backdrop-blur-sm transition-all hover:border-custom-blue/30 hover:bg-white"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
            <Link
              href="/resume"
              className="inline-flex items-center gap-3 rounded-full border border-custom-blue/10 bg-custom-blue/5 px-6 py-3 text-sm font-semibold text-custom-blue backdrop-blur-sm transition-all hover:bg-custom-blue hover:text-white"
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
