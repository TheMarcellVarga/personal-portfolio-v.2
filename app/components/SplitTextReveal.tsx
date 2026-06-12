"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ElementType,
} from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

type SplitTextRevealProps = {
  as?: "h1" | "h2" | "h3" | "p" | "span";
  text: string;
  className?: string;
  animate?: boolean;
  visible?: boolean;
  triggerOnView?: boolean;
  delay?: number;
  duration?: number;
  stagger?: number;
};

export function SplitTextReveal({
  as = "span",
  text,
  className,
  animate = true,
  visible = true,
  triggerOnView = false,
  delay = 0,
  duration = 0.9,
  stagger = 0.018,
}: SplitTextRevealProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const [isReady, setIsReady] = useState(!triggerOnView);
  const shouldPrepareAnimation = animate && visible;
  const Component = as as ElementType;

  useEffect(() => {
    if (!triggerOnView || !rootRef.current || !shouldPrepareAnimation) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsReady(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -14% 0px", threshold: 0.28 },
    );

    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, [shouldPrepareAnimation, triggerOnView]);

  useLayoutEffect(() => {
    const element = rootRef.current;
    if (!element) return;
    if (!visible) {
      gsap.set(element, { visibility: "hidden" });
      return;
    }
    if (!shouldPrepareAnimation) {
      gsap.set(element, { visibility: "visible" });
      return;
    }
    if (!isReady || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;

    const split = SplitText.create(element, {
      type: "words,chars",
      wordsClass: "split-text-reveal-word",
      charsClass: "split-text-reveal-char",
      aria: "auto",
    });

    gsap.set(split.chars, {
      opacity: 0,
      yPercent: 110,
      rotateX: -22,
      transformOrigin: "50% 100%",
    });

    gsap.set(element, { visibility: "visible" });

    const tween = gsap.to(split.chars, {
      opacity: 1,
      yPercent: 0,
      rotateX: 0,
      duration,
      delay,
      stagger,
      ease: "power4.out",
      clearProps: "opacity,transform",
    });

    return () => {
      tween.kill();
      split.revert();
    };
  }, [delay, duration, isReady, shouldPrepareAnimation, stagger, visible]);

  return (
    <Component
      ref={rootRef}
      className={className}
      style={{ visibility: visible && !animate ? "visible" : "hidden" }}
    >
      {text}
    </Component>
  );
}
