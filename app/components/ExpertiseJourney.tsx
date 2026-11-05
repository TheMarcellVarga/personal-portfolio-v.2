"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChartNoAxesColumnIncreasing, PanelsTopLeft, Sparkles } from "lucide-react";
import { useClientReducedMotion } from "../hooks/useClientReducedMotion";

const route = "M 270 160 C 270 350 100 380 115 600 C 130 820 270 830 270 1040";

export function ExpertiseJourney() {
  const ref = useRef<HTMLLIElement>(null);
  const reducedMotion = useClientReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end 65%"] });
  const designReveal = useTransform(scrollYProgress, [0, 0.12, 0.22], [0.35, 0.75, 1]);
  const buildReveal = useTransform(scrollYProgress, [0.2, 0.4, 0.52], [0.35, 0.75, 1]);
  const aiReveal = useTransform(scrollYProgress, [0.5, 0.7, 0.82], [0.35, 0.75, 1]);

  return (
    <li ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[27%] lg:w-[48%]">
      <svg viewBox="0 0 400 1200" preserveAspectRatio="none" className="h-full w-full overflow-visible" fill="none">
        <path d={route} stroke="var(--color-custom-blue)" strokeOpacity="0.13" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <motion.path d={route} stroke="var(--title-accent)" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" style={{ pathLength: reducedMotion ? 1 : scrollYProgress }} />

        <motion.g style={{ opacity: reducedMotion ? 1 : designReveal }} className="hidden lg:block" transform="translate(270 200)" stroke="var(--color-custom-blue)" strokeWidth="3" vectorEffect="non-scaling-stroke">
          <rect x="-66" y="-61" width="112" height="116" rx="12" fill="var(--color-custom-teal)" transform="rotate(-9)" />
          <rect x="-52" y="-52" width="112" height="116" rx="12" fill="var(--page-background)" />
          <circle cx="-29" cy="-25" r="6" fill="var(--title-accent)" stroke="none" />
          <path d="M -12 -25 H 37 M -30 0 H 38 M -30 23 H 20" strokeLinecap="round" />
        </motion.g>

        <motion.g style={{ opacity: reducedMotion ? 1 : buildReveal }} className="hidden lg:block" transform="translate(115 600)" stroke="var(--color-custom-blue)" strokeWidth="3" vectorEffect="non-scaling-stroke">
          <rect x="-70" y="-60" width="140" height="120" rx="12" fill="var(--page-background)" />
          <path d="M -70 -30 H 70 M -48 -44 H -42 M -32 -44 H -26" strokeLinecap="round" />
          <path d="M -43 35 V 13 M -13 35 V -2 M 17 35 V -14 M 47 35 V -23" stroke="var(--title-accent)" strokeWidth="12" strokeLinecap="round" />
        </motion.g>

        <motion.g style={{ opacity: reducedMotion ? 1 : aiReveal }} className="hidden lg:block" transform="translate(270 1000)" stroke="var(--color-custom-blue)" strokeWidth="3" vectorEffect="non-scaling-stroke">
          <circle r="68" fill="var(--page-background)" />
          <path d="M 0 -42 L 42 -13 L 26 36 H -26 L -42 -13 Z" fill="var(--title-accent)" />
          <path d="M -19 0 L -5 14 L 22 -15" stroke="var(--page-background)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>
      </svg>
      {[
        { Icon: PanelsTopLeft, top: "16.67%", left: "67.5%", reveal: designReveal },
        { Icon: ChartNoAxesColumnIncreasing, top: "50%", left: "28.75%", reveal: buildReveal },
        { Icon: Sparkles, top: "83.33%", left: "67.5%", reveal: aiReveal },
      ].map(({ Icon, top, left, reveal }) => (
        <motion.span key={top} style={{ top, left, opacity: reducedMotion ? 1 : reveal }} className="absolute grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-custom-blue/30 bg-[var(--page-background)] text-[var(--title-accent)] lg:hidden">
          <Icon className="h-6 w-6" />
        </motion.span>
      ))}
    </li>
  );
}
