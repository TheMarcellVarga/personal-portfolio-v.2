"use client";

import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export default function ResumeActions() {
  return (
    <div className="flex flex-wrap gap-3 print:hidden">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-white/62 px-4 py-2 text-sm font-semibold text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.66),0_12px_30px_rgba(17,27,40,0.04)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to portfolio
      </Link>
      <Link
        href="/resume/ats"
        className="inline-flex items-center gap-2 rounded-full bg-white/52 px-4 py-2 text-sm font-semibold text-custom-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.66),0_12px_30px_rgba(17,27,40,0.04)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white"
      >
        ATS version
      </Link>
      <a
        href="/MarcellVargaResume2026.pdf"
        download="Marcell Varga | UX & Frontend Engineer.pdf"
        className="inline-flex items-center gap-2 rounded-full bg-[#0a2135] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(7,20,38,0.14),inset_0_1px_0_rgba(255,255,255,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0d2940]"
      >
        <Download className="h-4 w-4" />
        Save as PDF
      </a>
    </div>
  );
}
