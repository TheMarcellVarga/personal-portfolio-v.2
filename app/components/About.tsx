"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useMemo, useRef, useState } from "react";

const textToType =
  "I design and build thoughtful digital products where clarity, usability, and business goals align. From discovery to delivery, I translate complex problems into elegant, measurable experiences that teams can ship with confidence.";

const cards = [
  {
    title: "UX Strategy",
    body: "Turning complexity into clear decisions through information architecture and interaction modeling.",
  },
  {
    title: "Frontend Craft",
    body: "Production-grade implementation with performance, maintainability, and accessibility baked in.",
  },
  {
    title: "System Thinking",
    body: "Design systems that align product, design, and engineering into one operating language.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [typedLength, setTypedLength] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 28,
    mass: 0.35,
  });

  const copyOpacity = useTransform(smoothProgress, [0, 0.12, 0.86, 1], [0.15, 1, 1, 0.22]);
  const copyY = useTransform(smoothProgress, [0, 1], [26, -18]);

  useMotionValueEvent(smoothProgress, "change", (value) => {
    // Keep an intentional pause at the start and end of the sticky sequence.
    const typingProgress = Math.max(0, Math.min(1, (value - 0.08) / 0.8));
    setTypedLength(Math.floor(typingProgress * textToType.length));
  });

  const typedText = useMemo(() => textToType.slice(0, typedLength), [typedLength]);
  const cardReveal = useMemo(() => {
    const p = typedLength / textToType.length;
    return [p > 0.28, p > 0.54, p > 0.78];
  }, [typedLength]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-[310vh] px-4 sm:px-6 lg:px-8"
    >
      <div className="sticky top-20 mx-auto grid w-full max-w-[1200px] gap-6 py-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.article
          style={{ opacity: copyOpacity, y: copyY }}
          className="flow-panel relative overflow-hidden px-6 py-7 sm:px-8 sm:py-9"
        >
          <h2 className="text-xs uppercase tracking-[0.2em] text-custom-blue/56">
            About
          </h2>

          <p className="mt-6 min-h-[11rem] text-lg leading-relaxed text-custom-blue/84 sm:text-[1.45rem] sm:leading-relaxed">
            {typedText}
            <span className="ml-0.5 inline-block h-[1.1em] w-0.5 animate-pulse bg-custom-blue/70 align-middle" />
          </p>

          <div className="mt-10 grid grid-cols-3 gap-3">
            <div className="flow-card p-3 sm:p-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-custom-blue/55">Role</p>
              <p className="mt-1 text-sm font-semibold text-custom-blue/85 sm:text-base">UX + Frontend</p>
            </div>
            <div className="flow-card p-3 sm:p-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-custom-blue/55">Base</p>
              <p className="mt-1 text-sm font-semibold text-custom-blue/85 sm:text-base">CPH {"->"} SG</p>
            </div>
            <div className="flow-card p-3 sm:p-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-custom-blue/55">Focus</p>
              <p className="mt-1 text-sm font-semibold text-custom-blue/85 sm:text-base">Product Impact</p>
            </div>
          </div>
        </motion.article>

        <div className="space-y-4">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={cardReveal[index] ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flow-card rounded-[1.35rem] p-6"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-custom-blue/52">0{index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold text-custom-blue">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-custom-blue/72 sm:text-base">{card.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
