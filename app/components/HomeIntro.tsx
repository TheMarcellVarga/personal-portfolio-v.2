"use client";

import IndexSigAnimatedIcon from "@/public/icons/indexSigAnimated";
import { motion } from "framer-motion";
import { type RefObject, useCallback, useEffect, useRef, useState } from "react";

interface HomeIntroProps {
  targetRef: RefObject<HTMLElement | null>;
  onComplete: () => void;
}

interface TargetTransform {
  x: number;
  y: number;
  scale: number;
}

const travelEase = [0.22, 1, 0.36, 1] as const;
const introCookie = "mv-home-intro-seen=1; Path=/; Max-Age=31536000; SameSite=Lax";

export function HomeIntro({ targetRef, onComplete }: HomeIntroProps) {
  const introLogoRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"draw" | "travel">("draw");
  const [target, setTarget] = useState<TargetTransform>({
    x: 0,
    y: 0,
    scale: 0.24,
  });

  const updateTarget = useCallback(() => {
    if (typeof window === "undefined") return;

    const introLogo = introLogoRef.current;
    const targetNode = targetRef.current;
    if (!introLogo || !targetNode) return;

    const introRect = introLogo.getBoundingClientRect();
    const targetRect = targetNode.getBoundingClientRect();
    const nextTarget = {
      x: targetRect.left + targetRect.width / 2 - window.innerWidth / 2,
      y: targetRect.top + targetRect.height / 2 - window.innerHeight / 2,
      scale: targetRect.width / Math.max(introRect.width, 1),
    };

    setTarget((current) => {
      const isSame =
        Math.abs(current.x - nextTarget.x) < 0.5 &&
        Math.abs(current.y - nextTarget.y) < 0.5 &&
        Math.abs(current.scale - nextTarget.scale) < 0.005;

      return isSame ? current : nextTarget;
    });
  }, [targetRef]);

  useEffect(() => {
    const rafId = window.requestAnimationFrame(updateTarget);
    window.addEventListener("resize", updateTarget);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updateTarget);
    };
  }, [updateTarget]);

  const completeIntro = useCallback(() => {
    document.cookie = introCookie;
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const startTravel = window.setTimeout(() => {
      updateTarget();
      setPhase("travel");
    }, 1480);
    const finish = window.setTimeout(completeIntro, 2440);

    return () => {
      window.clearTimeout(startTravel);
      window.clearTimeout(finish);
    };
  }, [completeIntro, updateTarget]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "travel" ? 0 : 1 }}
      transition={{ duration: 0.45, delay: phase === "travel" ? 0.64 : 0 }}
      className="home-intro-shell pointer-events-none fixed inset-0 z-[90] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#06111c]" />
      <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(5,10,18,0.98)_0%,rgba(8,18,29,0.94)_28%,rgba(16,39,56,0.84)_56%,rgba(88,121,134,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_72%_24%,rgba(76,207,255,0.24),transparent_18%),radial-gradient(circle_at_84%_66%,rgba(255,224,182,0.16),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,14,0.14)_0%,rgba(4,8,14,0.02)_40%,rgba(4,8,14,0.36)_100%)]" />

      <motion.div
        animate={{
          opacity: phase === "travel" ? 0.16 : 0.4,
          scale: phase === "travel" ? 1.08 : 1,
        }}
        transition={{ duration: 0.9, ease: travelEase }}
        className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(103,217,255,0.24)_0%,_rgba(103,217,255,0.08)_38%,_transparent_74%)] blur-3xl"
      />

      <motion.div
        ref={introLogoRef}
        initial={false}
        animate={
          phase === "travel"
            ? {
                x: target.x,
                y: target.y,
                scale: target.scale,
                opacity: 0.18,
              }
            : {
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
              }
        }
        transition={{ duration: 0.96, ease: travelEase }}
        className="absolute left-1/2 top-1/2 w-[min(68vw,23rem)] -translate-x-1/2 -translate-y-1/2 sm:w-[min(52vw,24rem)]"
      >
        <IndexSigAnimatedIcon
          isOpen={false}
          tone="light"
          animateStroke
          className="h-auto w-full drop-shadow-[0_14px_38px_rgba(0,0,0,0.34)]"
        />
      </motion.div>

      <motion.div
        animate={{
          opacity: phase === "travel" ? 0 : 1,
          y: phase === "travel" ? 18 : 0,
        }}
        transition={{ duration: 0.55, ease: travelEase }}
        className="absolute inset-x-0 top-[calc(50%+7rem)] px-6 text-center sm:top-[calc(50%+8rem)]"
      >
        <p className="font-label text-[0.68rem] font-medium uppercase tracking-[0.34em] text-white/54">
          Designed and built by Marcell Varga
        </p>
      </motion.div>

      <button
        type="button"
        onClick={completeIntro}
        className="pointer-events-auto absolute right-5 top-5 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/72 backdrop-blur-xl transition hover:bg-white/12 hover:text-white sm:right-8 sm:top-8"
      >
        Skip intro
      </button>
    </motion.div>
  );
}
