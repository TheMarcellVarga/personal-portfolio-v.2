"use client";

import { useState, type ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";
import { PageBackground } from "./PageBackground";

/** Shared portfolio chrome. Pages keep their own content and print layouts. */
export function PortfolioShell({
  children,
  activeSection,
  backLink,
  className = "",
}: {
  children: ReactNode;
  activeSection?: string;
  backLink?: { href: string; label: string };
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`portfolio-shell relative min-h-[100dvh] overflow-x-clip ${className}`}>
      <div className="print:hidden">
        <PageBackground />
        <Header isOpen={isOpen} setIsOpen={setIsOpen} activeSection={activeSection} backLink={backLink} />
      </div>
      {children}
      <div className="print:hidden"><Footer /></div>
    </div>
  );
}
