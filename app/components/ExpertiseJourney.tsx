"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import { useMotionValueEvent, useScroll, type MotionValue } from "framer-motion";
import { useClientReducedMotion } from "../hooks/useClientReducedMotion";

export function ExpertiseJourney({ sectionRef, uxProgress, frontendProgress, aiProgress }: { sectionRef: RefObject<HTMLElement | null>; uxProgress: MotionValue<number>; frontendProgress: MotionValue<number>; aiProgress: MotionValue<number> }) {
  const ref = useRef<HTMLLIElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dashesRef = useRef<string[]>([]);
  const [headingOffset, setHeadingOffset] = useState(0);
  const reducedMotion = useClientReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: [`${headingOffset}px center`, "end 90%"] });
  const arrivals = useRef([0, 0.5, 1]);
  const syncScenes = useCallback((value: number) => {
    const values = [uxProgress, frontendProgress, aiProgress];
    values.forEach((scene, index) => {
      const start = index === 0 ? 0 : arrivals.current[index - 1];
      const end = arrivals.current[index];
      scene.set(Math.max(0, Math.min(1, (value - start) / Math.max(end - start, 0.001))));
    });
    pathRef.current?.setAttribute("d", dashesRef.current.slice(0, reducedMotion ? undefined : Math.ceil(value * dashesRef.current.length)).join(" "));
  }, [uxProgress, frontendProgress, aiProgress, reducedMotion]);
  useMotionValueEvent(scrollYProgress, "change", syncScenes);

  useEffect(() => {
    const host = ref.current;
    const list = host?.parentElement;
    if (!host || !list) return;
    const graphics = Array.from(list.querySelectorAll<HTMLElement>("[data-expertise-graphic]"));
    const updateRoute = () => {
      const bounds = host.getBoundingClientRect();
      const section = sectionRef.current;
      const heading = section?.querySelector("h2");
      if (section && heading) {
        const headingBounds = heading.getBoundingClientRect();
        setHeadingOffset(headingBounds.top + headingBounds.height / 2 - section.getBoundingClientRect().top);
      }
      const points = graphics.map((graphic) => {
        const rect = graphic.getBoundingClientRect();
        return { x: rect.left + rect.width / 2 - bounds.left, y: rect.top + rect.height / 2 - bounds.top, height: rect.height };
      });
      if (points.length !== 3) return;
      const [start, middle, end] = points;
      let firstJoin: string;
      let secondJoin: string;
      if (window.innerWidth < 1024) {
        const edge = bounds.width - 8;
        const join = (a: typeof start, b: typeof start) => {
          const exit = a.y + a.height / 2;
          const entry = b.y - b.height / 2;
          return `C ${a.x} ${exit}, ${edge} ${exit}, ${edge} ${exit + 24} L ${edge} ${entry - 24} C ${edge} ${entry}, ${b.x} ${entry}, ${b.x} ${b.y}`;
        };
        firstJoin = join(start, middle);
        secondJoin = join(middle, end);
      } else {
        const curve = (a: typeof start, b: typeof start) => {
          const bend = (b.y - a.y) * 0.5;
          return `C ${a.x} ${a.y + bend}, ${b.x} ${b.y - bend}, ${b.x} ${b.y}`;
        };
        firstJoin = curve(start, middle);
        secondJoin = curve(middle, end);
      }
      const lead = `M ${start.x} ${Math.max(0, start.y - start.height / 2)} L ${start.x} ${start.y}`;
      const segments = [lead, `M ${start.x} ${start.y} ${firstJoin}`, `M ${middle.x} ${middle.y} ${secondJoin}`];
      const lengths = segments.map((segment) => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", segment);
        return path.getTotalLength();
      });
      const total = lengths.reduce((sum, length) => sum + length, 0);
      arrivals.current = [lengths[0] / total, (lengths[0] + lengths[1]) / total, 1];
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", `${lead} ${firstJoin} ${secondJoin}`);
      const dashes: string[] = [];
      for (let distance = 0; distance < total; distance += 14) {
        const endDistance = Math.min(distance + 5, total);
        const startPoint = path.getPointAtLength(distance);
        const middlePoint = path.getPointAtLength((distance + endDistance) / 2);
        const endPoint = path.getPointAtLength(endDistance);
        dashes.push(`M ${startPoint.x} ${startPoint.y} Q ${middlePoint.x} ${middlePoint.y} ${endPoint.x} ${endPoint.y}`);
      }
      dashesRef.current = dashes;
      syncScenes(scrollYProgress.get());
    };
    const observer = new ResizeObserver(updateRoute);
    observer.observe(list);
    graphics.forEach((graphic) => observer.observe(graphic));
    window.addEventListener("resize", updateRoute);
    updateRoute();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateRoute);
    };
  }, [scrollYProgress, sectionRef, syncScenes]);

  return (
    <li ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0">
      <svg className="h-full w-full" fill="none">
        <path ref={pathRef} stroke="var(--title-accent)" strokeOpacity="0.65" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </li>
  );
}
