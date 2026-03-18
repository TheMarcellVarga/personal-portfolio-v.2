"use client";

import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  scrollToWork: () => void;
  scrollToContact?: () => void;
}

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 17) return "Good afternoon";
  if (hour >= 17 && hour < 22) return "Good evening";
  return "Hey there";
};

export default function Hero({ scrollToWork, scrollToContact }: HeroProps) {
  const [greeting, setGreeting] = useState(getGreeting());
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  useEffect(() => {
    const interval = window.setInterval(() => setGreeting(getGreeting()), 60000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[112vh] overflow-hidden px-4 pt-28 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-4%] top-[4%] h-[34vw] w-[34vw] rounded-full bg-custom-teal/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[-8%] h-[34vw] w-[34vw] rounded-full bg-custom-blue/16 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-[1200px] items-end gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-custom-blue/18 bg-white/74 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-custom-blue/70 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-custom-teal" />
            {greeting}
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-[0.94] text-custom-blue sm:text-6xl lg:text-7xl">
            Marcell Varga
          </h1>

          <p className="mt-3 text-xl font-medium text-custom-blue/78 sm:text-2xl">
            UX & Frontend Engineer
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-custom-blue/74 sm:text-xl">
            Designing human-centered products that scale, built with craft and
            clarity.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={scrollToWork}
              className="inline-flex items-center gap-2 rounded-full bg-custom-blue px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-custom-blue/90"
            >
              View selected work
              <ArrowRightIcon className="h-4 w-4" />
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 rounded-full border border-custom-blue/18 bg-white/82 px-5 py-3 text-sm font-semibold text-custom-blue transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Let&apos;s connect
            </button>
          </div>
        </motion.div>

        <motion.div style={{ y: imageY }} className="relative">
          <div className="flow-panel relative h-[560px] w-full overflow-hidden sm:h-[620px]">
            <svg
              className="absolute inset-0 h-full w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
              aria-hidden="true"
            >
              <path d="M1000 -120L320 980H1000V-120Z" fill="url(#heroGradient)" />
              <defs>
                <linearGradient
                  id="heroGradient"
                  x1="930"
                  y1="-40"
                  x2="270"
                  y2="920"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#02425C" />
                  <stop offset="0.5" stopColor="#0F172A" />
                  <stop offset="1" stopColor="#001822" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-x-5 bottom-0 top-10 overflow-hidden rounded-[1.4rem]">
              <Image
                src="/images/personalpageprofilealt.png"
                alt="Marcell Varga portrait"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain"
              />
            </div>

            <div className="flow-card absolute bottom-6 left-6 right-6 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-custom-blue/60">
                2026 Focus
              </p>
              <p className="mt-1 text-sm font-semibold text-custom-blue/85 sm:text-base">
                Product UX at speed. Copenhagen roots, Singapore momentum.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-[1200px] justify-center pb-8 sm:pb-12">
        <button
          onClick={scrollToWork}
          className="group inline-flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-custom-blue/58"
          aria-label="Scroll to explore"
        >
          Scroll to explore
          <ArrowDownIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
        </button>
      </div>
    </section>
  );
}
