"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  BookOpenCheck,
  Calendar,
  CircleGauge,
  FileText,
  Goal,
  Radar,
  Settings,
  ShieldCheck,
  Tag,
  WalletCards,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Footer from "../../footer";
import Header from "../../header";
import { OtherWorks } from "../../components/OtherWorks";
import { PageBackground } from "../../components/PageBackground";
import { SectionLabel } from "../../components/SectionLabel";
import { projects } from "../../data/projects";

const workspaceSurfaces = [
  {
    title: "Portfolio intelligence",
    text: "A portfolio workspace for holdings, allocation, concentration, intraday movement, provider freshness, and visible unavailable states.",
    icon: WalletCards,
  },
  {
    title: "Market movement review",
    text: "A watchlist surface for provider-backed equities and ETFs, daily movement, research notes, and an add-ticker flow.",
    icon: Radar,
  },
  {
    title: "Research room",
    text: "A deterministic local-demo filing summary with cited source chunks, filing highlights, material risks, and saved research controls.",
    icon: BookOpenCheck,
  },
  {
    title: "Goal intelligence",
    text: "A deterministic local-demo scenario planner with milestones, contribution scenarios, and research-discipline prompts.",
    icon: Goal,
  },
  {
    title: "Risk explainer",
    text: "A deterministic local-demo risk review for concentration signals, allocation context, limitations, and review actions.",
    icon: CircleGauge,
  },
  {
    title: "Settings and billing",
    text: "Workspace controls for privacy, providers, plan entitlements, saved research limits, and billing-period usage.",
    icon: Settings,
  },
];

const visibleGuardrails = [
  "Research and portfolio decision support only.",
  "No brokerage or trade execution.",
  "No personalized investment advice.",
  "No promised returns or suitability claims.",
  "Visible provider timestamps and freshness labels.",
  "No estimated values when market data is unavailable.",
];

const productRhythm = [
  {
    title: "Load the portfolio",
    text: "Start from holdings, allocation, and freshness metadata.",
    icon: BarChart3,
  },
  {
    title: "Inspect the evidence",
    text: "Review source chunks, assumptions, and risk context.",
    icon: FileText,
  },
  {
    title: "Keep the boundary visible",
    text: "Use scenario review and research prompts without trade instructions.",
    icon: ShieldCheck,
  },
];

function fadeInUp(delay = 0) {
  return {
    initial: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0 },
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };
}

export default function AiFinancePage() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const projectData = projects.find(
    (project) => project.title === "Aperture Financial Intelligence",
  )!;

  const handleBack = useCallback(() => {
    router.push("/#work");
  }, [router]);

  return (
    <div className="relative">
      <PageBackground />

      <Header isOpen={isOpen} setIsOpen={setIsOpen} activeSection="Work" />

      <main className="relative z-10 px-4 pb-20 pt-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <header className="mb-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <motion.div {...fadeInUp(0)} className="space-y-6">
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={handleBack}
                className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-custom-blue/60 transition-colors hover:text-custom-blue"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to work
              </motion.button>
              <SectionLabel index="Project" label="Case Study" />
              <h1 className="font-display text-[clamp(3rem,9vw,7rem)] font-medium leading-[0.9] tracking-[-0.05em] text-custom-blue">
                Aperture Financial Intelligence
              </h1>
              <p className="max-w-3xl text-base leading-relaxed text-custom-blue/72 sm:text-lg">
                A financial research and portfolio decision-support workspace
                for reviewing holdings, evidence, scenarios, and risk context
                without trade execution or personalized advice.
              </p>
            </motion.div>

            <motion.div {...fadeInUp(0.1)} className="flex flex-col gap-7 lg:pb-2">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8">
                <div className="space-y-1">
                  <p className="flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-custom-blue/45">
                    <Calendar className="h-3 w-3" /> Date
                  </p>
                  <p className="text-sm font-semibold text-custom-blue">
                    {projectData.date}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-custom-blue/45">
                    <Tag className="h-3 w-3" /> Category
                  </p>
                  <p className="text-sm font-semibold text-custom-blue">
                    {projectData.category}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-custom-blue/45">
                  Key Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {projectData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-label rounded-full bg-white/62 px-2.5 py-1.5 text-[0.54rem] font-medium uppercase tracking-[0.15em] text-custom-blue/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.66)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="https://github.com/TheMarcellVarga/ai-finance"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-custom-blue px-5 py-3 text-xs font-medium uppercase tracking-[0.13em] text-white shadow-[0_18px_38px_rgba(17,27,40,0.16)] transition hover:-translate-y-0.5 hover:bg-[#22344a]"
              >
                View source
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </header>

          <motion.div
            {...fadeInUp(0.15)}
            className="glass-panel relative mb-32 overflow-hidden rounded-[1.9rem] bg-[#071112] shadow-[0_24px_70px_rgba(11,17,26,0.14)] sm:rounded-[2.1rem]"
          >
            <Image
              src="/images/ai-finance/aperture-home.jpg"
              alt="Aperture Financial Intelligence homepage"
              width={1440}
              height={1024}
              priority
              className="h-auto w-full"
            />
          </motion.div>

          <div className="space-y-32">
            <motion.section
              {...fadeInUp()}
              className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]"
            >
              <div className="lg:sticky lg:top-32 lg:h-fit">
                <SectionLabel index="01" label="Product" />
                <h2 className="font-display text-[clamp(2.6rem,5vw,4.4rem)] font-medium leading-[0.92] tracking-[-0.045em] text-custom-blue">
                  Complexity, made quiet.
                </h2>
              </div>
              <div className="space-y-5">
                <div className="glass-panel space-y-6 rounded-[1.9rem] bg-white/65 p-6 shadow-[0_12px_40px_rgba(11,17,26,0.04)] sm:rounded-[2.1rem] sm:p-8">
                  <p className="text-lg leading-relaxed text-custom-blue/72">
                    Aperture is designed around a small research loop: load a
                    portfolio, inspect the evidence, review scenarios, and keep
                    the final judgment with the person using the workspace.
                  </p>
                  <p className="text-lg leading-relaxed text-custom-blue/72">
                    The current product includes a cinematic public site and an
                    authenticated workspace with portfolio, watchlist,
                    research, goals, risk, settings, and billing routes.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {productRhythm.map(({ title, text, icon: Icon }) => (
                    <div
                      key={title}
                      className="glass-panel rounded-[1.4rem] bg-white/62 p-5 shadow-[0_12px_40px_rgba(11,17,26,0.04)]"
                    >
                      <Icon className="h-5 w-5 text-custom-blue/52" />
                      <h3 className="mt-5 text-base font-bold text-custom-blue">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-custom-blue/62">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            <motion.section {...fadeInUp()} className="space-y-8">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                <div>
                  <SectionLabel index="02" label="Product page" />
                  <h2 className="mt-8 font-display text-[clamp(2.6rem,5vw,4.4rem)] font-medium leading-[0.92] tracking-[-0.045em] text-custom-blue">
                    The live product language stays explicit.
                  </h2>
                </div>
                <p className="max-w-2xl text-lg leading-relaxed text-custom-blue/68">
                  The public product page presents the core workspace surfaces
                  and keeps the guardrails visible: freshness labels, saved
                  citations, SEC-style source context, and no return promises.
                </p>
              </div>
              <div className="glass-panel overflow-hidden rounded-[1.9rem] bg-[#08100f] shadow-[0_18px_52px_rgba(11,17,26,0.12)] sm:rounded-[2.1rem]">
                <Image
                  src="/images/ai-finance/aperture-product.jpg"
                  alt="Aperture Financial Intelligence product page"
                  width={1440}
                  height={1024}
                  className="h-auto w-full"
                />
              </div>
            </motion.section>

            <motion.section {...fadeInUp()}>
              <SectionLabel index="03" label="Workspace surfaces" />
              <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                <h2 className="font-display max-w-3xl text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-[0.92] tracking-[-0.045em] text-custom-blue">
                  What is implemented in the workspace.
                </h2>
                <p className="max-w-2xl text-lg leading-relaxed text-custom-blue/68">
                  These are the routes and interactions currently present in
                  the product. The research, goal, and risk views are explicitly
                  local-demo experiences with deterministic content.
                </p>
              </div>

              <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {workspaceSurfaces.map(({ title, text, icon: Icon }) => (
                  <article
                    key={title}
                    className="glass-panel rounded-[1.6rem] bg-white/62 p-6 shadow-[0_12px_40px_rgba(11,17,26,0.04)]"
                  >
                    <Icon className="h-5 w-5 text-custom-blue/55" />
                    <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-custom-blue">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-custom-blue/65">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </motion.section>

            <motion.section
              {...fadeInUp()}
              className="overflow-hidden rounded-[1.9rem] bg-[#10191d] p-6 text-white shadow-[0_24px_70px_rgba(11,17,26,0.16)] sm:rounded-[2.1rem] sm:p-9 lg:p-12"
            >
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/8">
                      <ShieldCheck className="h-5 w-5 text-[#67d9ff]" />
                    </div>
                    <span className="font-label text-[0.62rem] font-medium uppercase tracking-[0.2em] text-white/48">
                      Visible guardrails
                    </span>
                  </div>
                  <h2 className="font-display mt-8 max-w-xl text-[clamp(2.6rem,5vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.045em] text-white">
                    The boundaries appear in the interface.
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-7 text-white/62">
                    The product does not hide its constraints in fine print.
                    Research-only framing, freshness labels, and unavailable
                    states are part of the visible experience.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {visibleGuardrails.map((rule) => (
                    <div
                      key={rule}
                      className="flex items-start gap-3 rounded-[1.2rem] bg-white/[0.055] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    >
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#67d9ff]/80" />
                      <p className="text-sm leading-6 text-white/72">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            <motion.section
              {...fadeInUp()}
              className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]"
            >
              <div className="lg:sticky lg:top-32 lg:h-fit">
                <SectionLabel index="04" label="Current state" />
                <h2 className="font-display text-[clamp(2.6rem,5vw,4.4rem)] font-medium leading-[0.92] tracking-[-0.045em] text-custom-blue">
                  Honest about the local-demo boundary.
                </h2>
              </div>
              <div className="glass-panel space-y-6 rounded-[1.9rem] bg-white/65 p-6 shadow-[0_12px_40px_rgba(11,17,26,0.04)] sm:rounded-[2.1rem] sm:p-8">
                <p className="text-lg leading-relaxed text-custom-blue/72">
                  The public marketing routes and authenticated workspace routes
                  are built. Portfolio and watchlist views expose provider
                  freshness and failure states. Research, goal, and risk
                  surfaces use deterministic local-demo content so the product
                  can be reviewed without external model spend.
                </p>
                <p className="text-lg leading-relaxed text-custom-blue/72">
                  That distinction matters for the case study: the visible
                  product is the evidence. Planned production hardening is not
                  presented here as a shipped feature.
                </p>
              </div>
            </motion.section>
          </div>

          <OtherWorks currentProjectTitle="Aperture Financial Intelligence" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
