"use client";

import { useEffect, useRef, useState } from "react";
import { useClientReducedMotion } from "../hooks/useClientReducedMotion";

interface Dot {
  gridX: number;
  gridY: number;
  spacing: number;
  r1: number;
  g1: number;
  b1: number;
  a1: number;
  r2: number;
  g2: number;
  b2: number;
  a2: number;
  baseRadius: number;
  x: number;
  y: number;
  glow: number;
}

export function HeroCanvasBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({ clientX: -1000, clientY: -1000, active: false });
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useClientReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );

    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (event: MouseEvent) => {
      pointerRef.current = {
        clientX: event.clientX,
        clientY: event.clientY,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      pointerRef.current.active = false;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;

      pointerRef.current = {
        clientX: touch.clientX,
        clientY: touch.clientY,
        active: true,
      };
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const initializeDots = (width: number, height: number) => {
      const spacing = 24;
      const dots: Dot[] = [];
      const columns = Math.ceil(width / spacing) + 4;
      const rows = Math.ceil(height / spacing) + 4;

      for (let gridX = -2; gridX < columns; gridX += 1) {
        for (let gridY = -2; gridY < rows; gridY += 1) {
          dots.push({
            gridX,
            gridY,
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
            x: gridX * spacing,
            y: gridY * spacing,
            glow: 0,
          });
        }
      }

      dotsRef.current = dots;
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const { width, height } = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      const context = canvas.getContext("2d");
      if (!context) return;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      initializeDots(width, height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrameId = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      context.clearRect(0, 0, width, height);

      if (shouldReduceMotion) {
        dotsRef.current.forEach((dot) => {
          context.beginPath();
          context.arc(
            dot.gridX * dot.spacing,
            dot.gridY * dot.spacing,
            dot.baseRadius,
            0,
            Math.PI * 2,
          );
          context.fillStyle = `rgba(${dot.r1}, ${dot.g1}, ${dot.b1}, ${dot.a1})`;
          context.fill();
        });
        return;
      }

      const time = performance.now() / 1000;
      const phase = (Math.sin((time * Math.PI * 2) / 24) + 1) / 2;
      const driftX = phase * 34;
      const driftY = phase * -22;
      const pointer = pointerRef.current;
      const pointerX = pointer.active ? pointer.clientX - rect.left : -1000;
      const pointerY = pointer.active ? pointer.clientY - rect.top : -1000;
      const maxDistance = 135;
      const totalWidth = width + 96;
      const totalHeight = height + 96;

      dotsRef.current.forEach((dot) => {
        const baseX =
          ((dot.gridX * dot.spacing + driftX + 48) % totalWidth + totalWidth) %
            totalWidth -
          48;
        const baseY =
          ((dot.gridY * dot.spacing + driftY + 48) % totalHeight + totalHeight) %
            totalHeight -
          48;
        const distance = Math.hypot(baseX - pointerX, baseY - pointerY);
        const targetGlow =
          distance < maxDistance
            ? Math.sin(
                ((maxDistance - distance) / maxDistance) * (Math.PI / 2),
              )
            : 0;

        dot.x = baseX;
        dot.y = baseY;
        dot.glow += (targetGlow - dot.glow) * 0.08;

        const red = Math.round(dot.r1 + (dot.r2 - dot.r1) * dot.glow);
        const green = Math.round(dot.g1 + (dot.g2 - dot.g1) * dot.glow);
        const blue = Math.round(dot.b1 + (dot.b2 - dot.b1) * dot.glow);
        const alpha = dot.a1 + (dot.a2 - dot.a1) * dot.glow;

        context.beginPath();
        context.arc(dot.x, dot.y, dot.baseRadius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        context.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      style={{ mixBlendMode: "screen", willChange: "transform" }}
    />
  );
}
