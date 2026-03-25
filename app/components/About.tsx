"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";

const textToType =
  "An adventurous UX & Frontend engineer dedicated to crafting delightful, business-focused, and user-centred digital experiences. I excel at solving complex problems through efficient design, turning challenges into opportunities. Overcoming challenges through efficient design is what fuelling my everyday drive.";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const [typedText, setTypedText] = useState("");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 0.1 to 0.7 is typing, 0.7 to 1.0 is fading out/done
    const start = 0.1;
    const end = 0.7;
    let progress = 0;
    if (latest >= start && latest <= end) {
      progress = (latest - start) / (end - start);
    } else if (latest > end) {
      progress = 1;
    }
    const length = Math.floor(progress * textToType.length);
    setTypedText(textToType.slice(0, length));
  });

  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

  return (
    <section ref={containerRef} id="about" className="h-[300vh] relative w-full bg-black">
      <motion.div 
        style={{ opacity }}
        className="sticky top-0 flex flex-col items-center justify-center h-screen w-full px-4 sm:px-8"
      >
        <div className="flex w-full sm:w-5/6 md:w-3/4 items-center justify-start">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-left leading-tight text-white tracking-tight mix-blend-difference">
            {typedText}
          </h2>
        </div>
      </motion.div>
    </section>
  );
}