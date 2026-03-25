"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "../isMobile";

interface HeroProps {
  scrollToWork: () => void;
}

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 17) return "Good afternoon";
  if (hour >= 17 && hour < 22) return "Good evening";
  return "Hello";
};

export default function Hero({ scrollToWork }: HeroProps) {
  // Initialize with empty to prevent React hydration mismatch, then set in useEffect
  const [greeting, setGreeting] = useState("");
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setGreeting(getGreeting());
    const timer = setInterval(() => setGreeting(getGreeting()), 60000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <main
      ref={containerRef}
      id="hero"
      className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0 bg-grid-subtle pointer-events-none" />

      {/* Elegant minimalist glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        style={{ y: textY, opacity }}
        className="z-20 flex flex-col items-center justify-center w-full max-w-5xl px-6 md:px-12 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-gray-400 text-sm font-medium mb-6 tracking-wide"
        >
          {greeting ? `${greeting}, I am` : " "}
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-semibold text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 mb-6 leading-[1.1]"
        >
          Marcell<br/>Varga
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-gray-300 font-medium text-xl sm:text-2xl md:text-3xl tracking-tight mb-8"
        >
          Crafting exceptional digital experiences at the intersection of <span className="text-white">UX design</span> and <span className="text-white">frontend engineering.</span>
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToWork}
          className="group relative flex items-center justify-center gap-3 px-8 py-3.5 bg-white text-black font-medium rounded-full overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_4px_14px_0_rgba(255,255,255,0.1)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.15)]"
        >
          <span className="relative z-10 transition-colors duration-300 text-sm">Explore Work</span>
          <ArrowRightIcon className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-500 cursor-pointer hover:text-white transition-colors duration-300"
        onClick={scrollToWork}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll down</span>
        <div className="w-[1px] h-12 relative overflow-hidden bg-white/10">
          <motion.div 
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </main>
  );
}