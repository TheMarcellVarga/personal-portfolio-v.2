"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface Dot {
  gridX: number;
  gridY: number;
  offsetX: number;
  offsetY: number;
  spacing: number;
  
  // Base color RGBA components
  r1: number;
  g1: number;
  b1: number;
  a1: number;
  
  // Glow color RGBA components
  r2: number;
  g2: number;
  b2: number;
  a2: number;
  
  baseRadius: number;
  layer: 1 | 2;
  
  // Current dynamic positions and state
  x: number;
  y: number;
  glow: number;
}

export function HeroCanvasBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ clientX: -1000, clientY: -1000, active: false });
  const [isVisible, setIsVisible] = useState(true);
  
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = Boolean(prefersReducedMotion);

  // Monitor visibility of the hero background to freeze loop when scrolled away
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  // Track global mouse position
  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        clientX: e.clientX,
        clientY: e.clientY,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = {
          clientX: e.touches[0].clientX,
          clientY: e.touches[0].clientY,
          active: true,
        };
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [shouldReduceMotion]);

  // Handle canvas sizing and dot generation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      // Set display size matching container
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      // Set physical buffer size scaled by device pixel ratio for crisp text/shapes
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
      }

      // Generate the layered dots based on new dimensions
      initializeDots(rect.width, rect.height);
    };

    const initializeDots = (w: number, h: number) => {
      const newDots: Dot[] = [];
      const spacing = 24;

      // Build excess rows & columns on all sides to cover drift/wrap seamlessly
      const cols = Math.ceil(w / spacing) + 4;
      const rows = Math.ceil(h / spacing) + 4;

      for (let c = -2; c < cols; c++) {
        for (let r = -2; r < rows; r++) {
          const ix = c * spacing;
          const iy = r * spacing;

          newDots.push({
            gridX: c,
            gridY: r,
            offsetX: 0,
            offsetY: 0,
            spacing,
            r1: 150,
            g1: 204,
            b1: 226,
            a1: 0.18,
            r2: 255,
            g2: 255,
            b2: 255,
            a2: 0.55,
            baseRadius: 0.95,
            layer: 1,
            x: ix,
            y: iy,
            glow: 0,
          });
        }
      }

      dotsRef.current = newDots;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Main high-performance render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      // Clear screen
      ctx.clearRect(0, 0, w, h);

      // Respect reduced motion: draw static dots and skip animation/interaction calculations
      if (shouldReduceMotion) {
        dotsRef.current.forEach((dot) => {
          let baseX = dot.gridX * dot.spacing + dot.offsetX;
          let baseY = dot.gridY * dot.spacing + dot.offsetY;

          // Simple static wrap to fit screen
          const totalW = w + dot.spacing * 4;
          const totalH = h + dot.spacing * 4;
          const minX = -dot.spacing * 2;
          const minY = -dot.spacing * 2;

          baseX = ((baseX - minX) % totalW + totalW) % totalW + minX;
          baseY = ((baseY - minY) % totalH + totalH) % totalH + minY;

          ctx.beginPath();
          ctx.arc(baseX, baseY, dot.baseRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${dot.r1}, ${dot.g1}, ${dot.b1}, ${dot.a1})`;
          ctx.fill();
        });

        // Loop is inactive if motion is reduced, we just draw once, or keep looping if size changes.
        // But since this is standard react state/resize, we can just idle or frame lock:
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Calculate time-based drift offsets
      const time = performance.now() / 1000;

      // Single Unified Drift: Replicates linear infinite alternate CSS keyframe drift (12s alternate)
      const phase = (Math.sin((time * Math.PI * 2) / 24) + 1) / 2; // Smooth 0 -> 1 -> 0
      const driftX = phase * 34;
      const driftY = phase * -22;

      // Fetch canvas-space mouse position
      let mouseX = -1000;
      let mouseY = -1000;
      const mouseActive = mouseRef.current.active;

      if (mouseActive) {
        mouseX = mouseRef.current.clientX - rect.left;
        mouseY = mouseRef.current.clientY - rect.top;

        // Check if mouse is outside boundaries (with slight buffer)
        if (
          mouseX < -150 ||
          mouseY < -150 ||
          mouseX > w + 150 ||
          mouseY > h + 150
        ) {
          mouseX = -1000;
          mouseY = -1000;
        }
      }

      const maxDist = 135; // Interactive radius (px)

      dotsRef.current.forEach((dot) => {
        // 1. Calculate base drifting position using unified grid drift
        let baseX = dot.gridX * dot.spacing + driftX;
        let baseY = dot.gridY * dot.spacing + driftY;

        // Seamless wrap boundaries
        const totalW = w + dot.spacing * 4;
        const totalH = h + dot.spacing * 4;
        const minX = -dot.spacing * 2;
        const minY = -dot.spacing * 2;

        baseX = ((baseX - minX) % totalW + totalW) % totalW + minX;
        baseY = ((baseY - minY) % totalH + totalH) % totalH + minY;

        // 2. Proximity glow calculations (no physical repulsion/bubble displacement)
        let targetGlow = 0;

        if (mouseX !== -1000 && mouseY !== -1000) {
          const dx = baseX - mouseX;
          const dy = baseY - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            // Proximity force shaped by sine curve for a smooth organic falloff
            const force = Math.sin(((maxDist - dist) / maxDist) * (Math.PI / 2));
            targetGlow = force;
          }
        }

        // 3. Keep positions locked to drift coordinates
        dot.x = baseX;
        dot.y = baseY;

        // 4. Easing update for the color glow / scaling effect
        dot.glow += (targetGlow - dot.glow) * 0.08;

        // 5. Colors blending only (no dot scaling/enlargement)
        const currentRadius = dot.baseRadius;
        
        // Linear interpolation of RGBA channels
        const r = Math.round(dot.r1 + (dot.r2 - dot.r1) * dot.glow);
        const g = Math.round(dot.g1 + (dot.g2 - dot.g1) * dot.glow);
        const b = Math.round(dot.b1 + (dot.b2 - dot.b1) * dot.glow);
        const a = dot.a1 + (dot.a2 - dot.a1) * dot.glow;

        // 6. Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      style={{
        mixBlendMode: "screen",
        willChange: "transform",
      }}
    />
  );
}
