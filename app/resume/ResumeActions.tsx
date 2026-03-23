"use client";

import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export default function ResumeActions() {
  return (
    <div className="flex flex-wrap gap-3 print:hidden">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-custom-blue/10 bg-white/90 px-4 py-2 text-sm font-semibold text-custom-blue shadow-[0_12px_30px_rgba(7,20,38,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to portfolio
      </Link>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 rounded-full bg-[#0a2135] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(7,20,38,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0d2940]"
      >
        <Download className="h-4 w-4" />
        Save as PDF
      </button>
    </div>
  );
}
