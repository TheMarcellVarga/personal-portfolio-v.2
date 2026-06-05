"use client";

import IndexSigAnimatedIcon from "@/public/icons/indexSigAnimated";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

interface HomeIntroProps {
  onExitStart: () => void;
  onComplete: () => void;
}

const travelEase = [0.22, 1, 0.36, 1] as const;
export const HOME_INTRO_COMPLETE_DELAY_MS = 2350;
const introCookie = "mv-home-intro-seen=1; Path=/; Max-Age=31536000; SameSite=Lax";

export function HomeIntro({ onExitStart, onComplete }: HomeIntroProps) {
  const [phase, setPhase] = useState<"hold" | "exit">("hold");

  const completeIntro = useCallback(() => {
    document.cookie = introCookie;
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const startExit = window.setTimeout(() => {
      setPhase("exit");
      onExitStart();
    }, 1450);
    const finish = window.setTimeout(completeIntro, HOME_INTRO_COMPLETE_DELAY_MS);

    return () => {
      window.clearTimeout(startExit);
      window.clearTimeout(finish);
    };
  }, [completeIntro, onExitStart]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "exit" ? 0 : 1 }}
      transition={{ duration: 0.72, ease: travelEase }}
      className="home-intro-shell pointer-events-none fixed inset-0 z-[90] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#06111c]" />
      <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(5,10,18,0.98)_0%,rgba(8,18,29,0.94)_28%,rgba(16,39,56,0.84)_56%,rgba(72,104,122,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_72%_24%,rgba(76,207,255,0.14),transparent_18%),radial-gradient(circle_at_84%_66%,rgba(255,224,182,0.08),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,14,0.16)_0%,rgba(4,8,14,0.04)_40%,rgba(4,8,14,0.28)_100%)]" />

      <motion.div
        animate={{
          opacity: phase === "exit" ? 0.16 : 0.4,
          scale: phase === "exit" ? 1.08 : 1,
        }}
        transition={{ duration: 0.9, ease: travelEase }}
        className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(103,217,255,0.24)_0%,_rgba(103,217,255,0.08)_38%,_transparent_74%)] blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: phase === "exit" ? 0 : 1, y: phase === "exit" ? -32 : 0 }}
        transition={{ duration: 0.72, ease: travelEase }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-center"
      >
        <IndexSigAnimatedIcon
          isOpen={false}
          tone="light"
          animateStroke
          className="mx-auto h-auto w-[min(68vw,21rem)] drop-shadow-[0_14px_38px_rgba(0,0,0,0.34)] sm:w-[min(52vw,24rem)]"
        />
      </motion.div>

      <motion.div
        animate={{
          opacity: phase === "exit" ? 0 : 1,
          y: phase === "exit" ? -18 : 0,
        }}
        transition={{ duration: 0.55, ease: travelEase }}
        className="absolute inset-x-0 top-[calc(50%+7rem)] px-6 text-center sm:top-[calc(50%+8rem)]"
      >
        <p className="font-label text-[0.68rem] font-medium uppercase tracking-[0.34em] text-white/54">
          UX & Frontend Engineer
        </p>
      </motion.div>

      {/* <button
        type="button"
        onClick={completeIntro}
        className="pointer-events-auto absolute right-5 top-5 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/72 backdrop-blur-xl transition hover:bg-white/12 hover:text-white sm:right-8 sm:top-8"
      >
        Skip intro
      </button> */}
    </motion.div>
  );
}
