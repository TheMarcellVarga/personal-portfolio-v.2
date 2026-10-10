"use client";

import { ArrowRight, RotateCcw } from "lucide-react";
import Link from "next/link";
import { PortfolioShell } from "./PortfolioShell";
import { PageIntro } from "./PageIntro";

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
  return (
    <PortfolioShell backLink={{ href: "/", label: "Back to portfolio" }}>
      <main id="main-content" className="portfolio-main page-gutter">
        <div className="portfolio-container">
          <section className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <PageIntro eyebrow={eyebrow} title={title} description={description} />
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="portfolio-button"
                >
                  Return to portfolio <ArrowRight className="h-4 w-4" />
                </Link>
                {actionLabel && onAction ? (
                  <button
                    type="button"
                    onClick={onAction}
                    className="portfolio-button portfolio-button-secondary"
                  >
                    <RotateCcw className="h-4 w-4" />
                    {actionLabel}
                  </button>
                ) : null}
              </div>
            </div>

            <div className="dark-panel p-7 sm:p-10 lg:p-12">
              <div className="relative">
                <div className="relative">
                    <p className="font-label text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/90">
                    A useful next move
                  </p>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                    Browse the shipped work, read the product notes, or start a conversation about a new build.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-white/90">
                    <Link className="portfolio-button portfolio-button-light" href="/#work">View work</Link>
                    <Link className="portfolio-button portfolio-button-light" href="/resume">Open resume</Link>
                    <Link className="portfolio-button portfolio-button-light" href="/#contact">Contact me</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

    </PortfolioShell>
  );
}
