"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

const spring = {
  stiffness: 520,
  damping: 38,
  mass: 0.48,
};

function getPopoverLabel(target: HTMLElement): string | null {
  const expanded = target.getAttribute("aria-expanded") === "true";
  const expandedLabel = target.dataset.cursorLabelExpanded;
  return expanded && expandedLabel
    ? expandedLabel
    : target.dataset.cursorLabel ?? null;
}

export function CursorPopover() {
  const [label, setLabel] = useState<string | null>(null);
  const activeTarget = useRef<HTMLElement | null>(null);
  const activeStateKey = useRef("");
  const pointerX = useMotionValue(-200);
  const pointerY = useMotionValue(-200);
  const x = useSpring(pointerX, spring);
  const y = useSpring(pointerY, spring);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!finePointer.matches || prefersReducedMotion) {
      return;
    }

    const updateFromPointer = (event: PointerEvent) => {
      const placeLeft = event.clientX > window.innerWidth - 150;
      const placeAbove = event.clientY > window.innerHeight - 56;

      pointerX.set(event.clientX + (placeLeft ? -116 : 14));
      pointerY.set(event.clientY + (placeAbove ? -36 : 14));

      const element =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>("[data-cursor-label]")
          : null;
      const nextLabel = element ? getPopoverLabel(element) : null;
      const nextStateKey = nextLabel ?? "";

      if (
        element === activeTarget.current &&
        nextStateKey === activeStateKey.current
      ) {
        return;
      }

      activeTarget.current = element;
      activeStateKey.current = nextStateKey;
      setLabel(nextLabel);
    };

    const hidePopover = () => {
      activeTarget.current = null;
      activeStateKey.current = "";
      setLabel(null);
    };

    window.addEventListener("pointermove", updateFromPointer, { passive: true });
    window.addEventListener("blur", hidePopover);
    document.addEventListener("pointerleave", hidePopover);

    return () => {
      window.removeEventListener("pointermove", updateFromPointer);
      window.removeEventListener("blur", hidePopover);
      document.removeEventListener("pointerleave", hidePopover);
    };
  }, [pointerX, pointerY, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <AnimatePresence>
      {label ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-[120] will-change-transform"
          style={{ x, y }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block whitespace-nowrap rounded-[0.45rem] border border-white/10 bg-[#0a1521]/92 px-2.5 py-1.5 font-label text-[0.65rem] font-medium tracking-[0.01em] text-white/82 shadow-[0_8px_20px_rgba(7,20,38,0.14)] backdrop-blur-sm">
            {label}
          </span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
