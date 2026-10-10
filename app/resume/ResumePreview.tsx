"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

const PREVIEW_WIDTH = 794;

export default function ResumePreview({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const preview = ref.current;
    if (!preview) return;
    const resize = () => {
      preview.style.setProperty("--resume-preview-scale", String(preview.clientWidth / PREVIEW_WIDTH));
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(preview);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="resume-preview">
      <div className="resume-preview-content">{children}</div>
    </div>
  );
}
