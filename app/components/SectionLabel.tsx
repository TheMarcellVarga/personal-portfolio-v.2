"use client";

import React from "react";

interface SectionLabelProps {
  index: string;
  label: string;
  tone?: "dark" | "light";
}

export function SectionLabel({
  index,
  label,
  tone = "dark",
}: SectionLabelProps) {
  const isLight = tone === "light";
  return (
    <div
      className={`font-label mb-6 flex items-center gap-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] ${
        isLight ? "text-white/90" : "text-custom-blue/90"
      }`}
    >
      <span>{index}</span>
      <span className={`h-px w-12 ${isLight ? "bg-white/30" : "bg-custom-blue/30"}`} />
      <span>{label}</span>
    </div>
  );
}
