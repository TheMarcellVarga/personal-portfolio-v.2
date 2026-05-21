"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Linkedin, Github, Mail, FileText, Send } from "lucide-react";
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

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <PageBackground />
      
      <Header 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        activeSection="Contact"
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
              <SectionLabel index="04" label="Contact" />
              <h1 className="font-display text-[clamp(2.35rem,10vw,6.6rem)] font-medium leading-[0.92] tracking-[-0.04em] text-custom-blue">
                Let&apos;s talk about your next product.
              </h1>
            </motion.div>
            
            <motion.div {...fadeInUp(0.2)} className="mt-12 max-w-2xl">
              <p className="text-base leading-relaxed text-custom-blue/72 sm:text-xl">
                Whether you need UX strategy, frontend execution, or a complete product
                refresh, I&apos;d love to hear about your goals.
              </p>
            </motion.div>
          </header>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 mb-24">
            <motion.div 
              {...fadeInUp(0.3)}
              className="glass-panel group relative overflow-hidden rounded-[1.9rem] bg-white/65 p-5 shadow-[0_12px_40px_rgba(11,17,26,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(11,17,26,0.05)] sm:rounded-[2.1rem]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-[0.95rem] bg-white/82 text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_8px_22px_rgba(17,27,40,0.06)] transition-transform duration-500 group-hover:scale-105">
                <Mail className="h-4.5 w-4.5" />
              </div>
              <p className="mb-2 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-custom-blue/35">Direct Email</p>
              <a
                href="mailto:themarcellvarga@gmail.com"
                className="break-words font-display text-[1.18rem] font-medium leading-[1.06] tracking-[-0.02em] text-custom-blue transition-colors hover:text-custom-blue/70 sm:text-[1.38rem]"
              >
                themarcellvarga@gmail.com
              </a>
              <div className="mt-5 flex items-center gap-2 text-[0.56rem] font-medium uppercase tracking-[0.15em] text-custom-blue/60">
                <Send className="h-3 w-3" />
                Response within 24h
              </div>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp(0.4)}
              className="flex flex-col gap-4"
            >
              <a
                href="https://www.linkedin.com/in/marcellvarga/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel group flex items-center justify-between rounded-[1.9rem] bg-white/65 px-5 py-5 shadow-[0_12px_40px_rgba(11,17,26,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(11,17,26,0.05)] sm:rounded-[2.1rem]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[0.95rem] bg-white/82 text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_8px_22px_rgba(17,27,40,0.06)]">
                    <Linkedin className="h-4.5 w-4.5" />
                  </div>
                  <span className="font-display text-[1.18rem] font-medium tracking-[-0.02em] text-custom-blue">LinkedIn</span>
                </div>
                <ArrowLeft className="h-5 w-5 rotate-180 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </a>

              <a
                href="https://github.com/TheMarcellVarga"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel group flex items-center justify-between rounded-[1.9rem] bg-white/65 px-5 py-5 shadow-[0_12px_40px_rgba(11,17,26,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(11,17,26,0.05)] sm:rounded-[2.1rem]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[0.95rem] bg-white/82 text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_8px_22px_rgba(17,27,40,0.06)]">
                    <Github className="h-4.5 w-4.5" />
                  </div>
                  <span className="font-display text-[1.18rem] font-medium tracking-[-0.02em] text-custom-blue">GitHub</span>
                </div>
                <ArrowLeft className="h-5 w-5 rotate-180 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </a>

              <Link
                href="/resume"
                className="glass-panel group flex items-center justify-between rounded-[1.9rem] bg-white/65 px-5 py-5 shadow-[0_12px_40px_rgba(11,17,26,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(11,17,26,0.05)] sm:rounded-[2.1rem]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[0.95rem] bg-white/82 text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_8px_22px_rgba(17,27,40,0.06)]">
                    <FileText className="h-4.5 w-4.5" />
                  </div>
                  <span className="font-display text-[1.18rem] font-medium tracking-[-0.02em] text-custom-blue">Resume</span>
                </div>
                <ArrowLeft className="h-5 w-5 rotate-180 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
