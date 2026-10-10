"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, type MotionValue } from "framer-motion";
import type { ExpertiseScene, ExpertiseKind } from "./expertise-scene";

function GraphicFallback({ kind }: { kind: ExpertiseKind }) {
  return (
    <svg viewBox="0 0 400 200" className="h-full w-full" fill="none">
      {kind === "ux" ? (
        <g stroke="currentColor" strokeWidth="1.5">
          <path d="M60 100H340" className="text-[var(--title-accent)]" />
          {([[60, 100], [153, 100], [247, 100], [340, 100]]).map(([x, y], i) => (
            <g key={i} transform={`translate(${x - 24} ${y - 18})`}>
              <rect width="48" height="36" rx="7" fill="var(--page-background)" className="text-custom-blue/60" />
              <path d="M11 13H28M11 22H36" className="text-[var(--title-accent)]" />
            </g>
          ))}
        </g>
      ) : kind === "frontend" ? (
        <g stroke="currentColor" strokeWidth="1.5" className="text-custom-blue/60">
          <rect x="62" y="32" width="276" height="136" rx="12" />
          <path d="M112 32V168M131 143H315" />
          {([26, 40, 53, 68, 90]).map((height, i) => <rect key={i} x={139 + i * 35} y={143 - height} width="20" height={height} rx="3" fill="currentColor" stroke="none" className={i % 2 ? "text-custom-blue" : "text-[var(--title-accent)]"} />)}
        </g>
      ) : (
        <g stroke="currentColor" strokeWidth="1.5" className="text-custom-blue/60">
          <path d="M87 100H166M235 100H313" className="text-[var(--title-accent)]" />
          <rect x="48" y="65" width="48" height="70" rx="7" />
          <path d="M60 82H82M60 95H82M60 108H75" />
          <path d="M200 61L238 100L200 139L162 100Z" fill="var(--title-accent)" className="text-[var(--title-accent)]" />
          <rect x="308" y="75" width="44" height="50" rx="7" />
          <path d="M318 100L327 108L343 91" />
        </g>
      )}
    </svg>
  );
}

export function ExpertiseVisual({ kind, progress }: { kind: ExpertiseKind; progress: MotionValue<number> }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<ExpertiseScene | null>(null);
  const progressRef = useRef(progress.get());
  const reducedMotionRef = useRef(false);
  const [ready, setReady] = useState(false);

  useMotionValueEvent(progress, "change", (value) => {
    progressRef.current = value;
    sceneRef.current?.setProgress(value);
  });

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;
    let disposed = false;
    let loading = false;
    let visible = false;
    const resize = () => sceneRef.current?.resize(host.clientWidth, host.clientHeight);
    const syncVisibility = () => sceneRef.current?.setActive(visible && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncVisibility();
      if (!visible || loading) return;
      loading = true;
      void import("./expertise-scene").then(({ createExpertiseScene }) => {
        if (disposed) return;
        try {
          sceneRef.current = createExpertiseScene(canvas, kind, reducedMotionRef.current, () => {
            if (!disposed) setReady(true);
          });
          sceneRef.current.setProgress(progressRef.current);
          resize();
          syncVisibility();
        } catch {
          // The vector version stays visible when WebGL is unavailable.
        }
      }).catch(() => {});
    }, { threshold: 0.01 });
    observer.observe(host);
    const resizer = new ResizeObserver(resize);
    resizer.observe(host);
    const contextLost = () => setReady(false);
    canvas.addEventListener("webglcontextlost", contextLost);
    document.addEventListener("visibilitychange", syncVisibility);
    return () => {
      disposed = true;
      observer.disconnect();
      resizer.disconnect();
      canvas.removeEventListener("webglcontextlost", contextLost);
      document.removeEventListener("visibilitychange", syncVisibility);
      sceneRef.current?.dispose();
      sceneRef.current = null;
    };
  }, [kind]);

  useEffect(() => {
    const staticPreference = window.matchMedia("(prefers-reduced-motion: reduce), (max-height: 639px)");
    const update = () => {
      const staticGraphic = staticPreference.matches;
      reducedMotionRef.current = staticGraphic;
      sceneRef.current?.setReducedMotion(staticGraphic);
    };
    update();
    staticPreference.addEventListener("change", update);
    return () => staticPreference.removeEventListener("change", update);
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      data-expertise-graphic={kind}
      data-renderer={ready ? "three" : "vector"}
      className="relative w-full overflow-hidden"
    >
      <div className={`absolute inset-0 text-custom-blue transition-opacity duration-300 ${ready ? "opacity-0" : "opacity-100"}`}>
        <GraphicFallback kind={kind} />
      </div>
      <canvas ref={canvasRef} className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`} />
    </div>
  );
}

