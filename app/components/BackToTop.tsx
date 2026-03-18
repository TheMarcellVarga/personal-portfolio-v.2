"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

interface BackToTopProps {
  showAfter?: number;
}

export default function BackToTop({ showAfter = 300 }: BackToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfter);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 left-4 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full border border-custom-blue/16 bg-white/78 text-custom-blue shadow-[0_12px_30px_rgba(8,35,53,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:text-custom-blue sm:left-6 sm:bottom-8 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-label="Back to top"
    >
      <ArrowUpIcon className="h-4 w-4" />
    </button>
  );
}
