"use client";

import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export default function ResumeActions() {
  return (
    <div className="flex flex-wrap gap-3 print:hidden">
      <Link
        href="/"
        data-cursor-label="Back to work"
        className="portfolio-button portfolio-button-secondary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to portfolio
      </Link>
      <Link
        href="/resume/ats"
        data-cursor-label="Open ATS version"
        className="portfolio-button portfolio-button-secondary"
      >
        ATS version
      </Link>
      <a
        href="/MarcellVargaResume2026.pdf"
        download="Marcell Varga | UX & Frontend Engineer.pdf"
        data-cursor-label="Download PDF"
        className="portfolio-button"
      >
        <Download className="h-4 w-4" />
        Designed PDF
      </a>
      <a
        href="/MarcellVargaResume2026-ATS.pdf"
        download="Marcell Varga | UX & Frontend Engineer | ATS.pdf"
        data-cursor-label="Download ATS PDF"
        className="portfolio-button"
      >
        <Download className="h-4 w-4" />
        ATS PDF
      </a>
    </div>
  );
}
