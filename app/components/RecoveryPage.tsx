"use client";

import { ArrowRight, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Header from "../header";
import Footer from "../footer";
import { PageBackground } from "./PageBackground";

type RecoveryPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
};

export default function RecoveryPage({
  eyebrow,
  title,
  description,
  actionLabel,
  onAction,
}: RecoveryPageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <PageBackground />
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        backLink={{ href: "/", label: "Back to portfolio" }}
        activeSection="Work"
      />

      <main id="main-content" className="relative z-10 px-5 pb-20 pt-36 sm:px-6 lg:px-10 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <section className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <p className="font-label text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-custom-blue/82">
                {eyebrow}
              </p>
              <h1 className="mt-6 max-w-[10ch] font-display text-[clamp(4rem,12vw,9rem)] font-medium leading-[0.84] tracking-[-0.07em] text-custom-blue">
                {title}
              </h1>
              <p className="mt-8 max-w-[58ch] text-[1.08rem] leading-8 text-custom-blue/72">
                {description}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-custom-blue px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1c2b3c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-blue focus-visible:ring-offset-3"
                >
                  Return to portfolio <ArrowRight className="h-4 w-4" />
                </Link>
                {actionLabel && onAction ? (
                  <button
                    type="button"
                    onClick={onAction}
                    className="inline-flex items-center gap-2 rounded-full border border-custom-blue/15 bg-white/58 px-5 py-3.5 text-sm font-semibold text-custom-blue transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-blue focus-visible:ring-offset-3"
                  >
                    <RotateCcw className="h-4 w-4" />
                    {actionLabel}
                  </button>
                ) : null}
              </div>
            </div>

            <div className="glass-panel relative overflow-hidden rounded-[2rem] bg-white/54 p-6 shadow-[0_28px_90px_rgba(17,27,40,0.1)] sm:p-8 lg:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#4ccfff]/18 blur-3xl" />
              <div className="relative">
                <p className="font-display text-[clamp(5rem,14vw,10rem)] font-medium leading-none tracking-[-0.08em] text-custom-blue/12">
                  404
                </p>
                <div className="mt-4 border-t border-custom-blue/10 pt-5">
                    <p className="font-label text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-custom-blue/78">
                    A useful next move
                  </p>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-custom-blue/68">
                    Browse the shipped work, read the product notes, or start a conversation about a new build.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-custom-blue/72">
                    <Link className="rounded-full bg-custom-blue/8 px-3.5 py-2 transition hover:bg-custom-blue/14" href="/#work">View work</Link>
                    <Link className="rounded-full bg-custom-blue/8 px-3.5 py-2 transition hover:bg-custom-blue/14" href="/resume">Open resume</Link>
                    <Link className="rounded-full bg-custom-blue/8 px-3.5 py-2 transition hover:bg-custom-blue/14" href="/#contact">Contact me</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
