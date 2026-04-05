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
    ease: [0.22, 1, 0.36, 1],
  },
});

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative overflow-x-clip">
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
              <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.1] tracking-[-0.05em] text-custom-blue">
                Let's talk about your next product.
              </h1>
            </motion.div>
            
            <motion.div {...fadeInUp(0.2)} className="mt-12 max-w-2xl">
              <p className="text-xl leading-relaxed text-custom-blue/72">
                Whether you need UX strategy, frontend execution, or a complete product
                refresh, I'd love to hear about your goals.
              </p>
            </motion.div>
          </header>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 mb-24">
            <motion.div 
              {...fadeInUp(0.3)}
              className="glass-panel group rounded-[2.5rem] p-10 transition-all hover:bg-white/60"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-custom-blue/5 text-custom-blue transition-colors group-hover:bg-custom-blue group-hover:text-white">
                <Mail className="h-7 w-7" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-custom-blue/30 mb-2">Direct Email</p>
              <a
                href="mailto:themarcellvarga@gmail.com"
                className="text-2xl font-medium text-custom-blue hover:text-custom-blue/70 transition-colors"
              >
                themarcellvarga@gmail.com
              </a>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-custom-blue/40 uppercase tracking-widest">
                <Send className="h-3 w-3" />
                Response within 24h
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
                className="glass-panel group flex items-center justify-between rounded-full px-8 py-6 transition-all hover:bg-white/60"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-custom-blue/5 text-custom-blue">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-custom-blue">LinkedIn</span>
                </div>
                <ArrowLeft className="h-5 w-5 rotate-180 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </a>

              <a
                href="https://github.com/TheMarcellVarga"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel group flex items-center justify-between rounded-full px-8 py-6 transition-all hover:bg-white/60"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-custom-blue/5 text-custom-blue">
                    <Github className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-custom-blue">GitHub</span>
                </div>
                <ArrowLeft className="h-5 w-5 rotate-180 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </a>

              <a
                href="/MarcellVargaCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel group flex items-center justify-between rounded-full px-8 py-6 transition-all hover:bg-white/60"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-custom-blue/5 text-custom-blue">
                    <FileText className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-custom-blue">Resume</span>
                </div>
                <ArrowLeft className="h-5 w-5 rotate-180 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
