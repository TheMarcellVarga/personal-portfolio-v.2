"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  Calendar,
  Database,
  Download,
  FileSearch,
  FlaskConical,
  GitBranch,
  LockKeyhole,
  ServerCog,
  ShieldCheck,
  Tag,
  Upload,
  UserCheck,
} from "lucide-react";
import { useState } from "react";

import { CaseStudyEvidence } from "../../components/CaseStudyEvidence";
import { OtherWorks } from "../../components/OtherWorks";
import { PageBackground } from "../../components/PageBackground";
import { SectionLabel } from "../../components/SectionLabel";
import { caseStudies } from "../../data/case-studies";
import { projects } from "../../data/projects";
import Footer from "../../footer";
import Header from "../../header";

const proofMetrics = [
  { value: "40/40", label: "Evidence evals passing" },
  { value: "5", label: "Source documents in baseline" },
  { value: "100%", label: "Citation checks passing" },
  { value: "$0", label: "External AI spend in CI" },
] as const;

const researchJourney = [
  {
    title: "Upload private evidence",
    text: "Page-aware parsing preserves document, page, and source boundaries.",
    icon: Upload,
  },
  {
    title: "Retrieve scoped passages",
    text: "Hybrid search stays inside the active owner and workspace boundary.",
    icon: FileSearch,
  },
  {
    title: "Generate structured analysis",
    text: "Every section validates against a schema and degrades explicitly on failure.",
    icon: BookOpenCheck,
  },
  {
    title: "Inspect material claims",
    text: "Citations reveal the stored excerpt, page, and active retrieval context.",
    icon: BadgeCheck,
  },
  {
    title: "Review before acceptance",
    text: "Human edits and decisions remain separate from immutable raw output.",
    icon: UserCheck,
  },
  {
    title: "Export reviewed work",
    text: "The report preserves approval state, evidence, limitations, and disclaimer.",
    icon: Download,
  },
] as const;

const architectureFlow = [
  {
    eyebrow: "Interface",
    title: "Next.js",
    text: "Authenticated product UI, BFF routes, streamed analysis, and review controls.",
    icon: GitBranch,
  },
  {
    eyebrow: "Authority",
    title: "Go API",
    text: "Ownership enforcement, finance behavior, document jobs, and retrieval contracts.",
    icon: ServerCog,
  },
  {
    eyebrow: "System of record",
    title: "Supabase",
    text: "Postgres, pgvector, private storage, immutable output, and append-only review history.",
    icon: Database,
  },
  {
    eyebrow: "Intelligence",
    title: "Provider boundary",
    text: "Validated AI interfaces with deterministic CI and a disabled-by-default live path.",
    icon: FlaskConical,
  },
] as const;

const engineeringDecisions = [
  {
    title: "Application-owned tools",
    text: "AI workflows call narrow product APIs rather than receiving database credentials or unrestricted portfolio access.",
  },
  {
    title: "Evidence before prose",
    text: "Retrieval creates an allow-list first. Material claims must cite that active evidence or disclose that support is missing.",
  },
  {
    title: "Approval is a human event",
    text: "The model cannot approve itself. A later edit or regeneration invalidates stale acceptance instead of inheriting trust.",
  },
] as const;

const releaseEvidence = [
  "A disposable-database E2E test passes from upload through reviewed Markdown export.",
  "Cross-owner reads return not found, including review history and retrieval targets.",
  "Document prompt injection is screened before generation and fails closed without safe evidence.",
  "Schema repair is attempted once; unrecoverable output becomes visibly partial or failed.",
  "Accessibility contracts cover skip navigation, live regions, reduced motion, tables, and keyboard controls.",
  "Separate non-root API and worker images build with deployment and rollback guidance.",
] as const;

const visibleBoundaries = [
  "Research and decision support, not brokerage or trade execution.",
  "No personalized advice, suitability claims, or promised returns.",
  "External model calls remain disabled until cost and credentials are approved.",
  "The release evidence is local; this page does not claim production scale.",
] as const;

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
  const projectData = projects.find(
    (project) => project.title === "Aperture Financial Intelligence",
  )!;

  return (
    <div className="relative">
      <PageBackground />

      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeSection="Work"
        backLink={{ href: "/#work", label: "Back to work" }}
      />

      <main className="relative z-10 px-5 pb-20 pt-32 sm:px-6 lg:px-10 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <header className="mb-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <motion.div {...fadeInUp()} className="space-y-6">
              <SectionLabel index="Flagship" label="Systems case study" />
              <h1 className="text-balance font-display text-[clamp(3rem,9vw,7rem)] font-medium leading-[0.9] tracking-[-0.05em] text-custom-blue">
                Aperture Financial Intelligence
              </h1>
              <p className="max-w-[62ch] text-[1.05rem] leading-7 text-custom-blue/70">
                A full-stack financial research workspace built to make AI output
                inspectable, reviewable, and accountable before it becomes a
                decision artifact.
              </p>
            </motion.div>

            <motion.div {...fadeInUp(0.1)} className="flex flex-col gap-6 lg:pb-2">
              <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                <ProjectFact icon={Calendar} label="Date" value={projectData.date} />
                <ProjectFact icon={Tag} label="Experience" value={projectData.status} />
                <ProjectFact icon={Tag} label="Field" value={projectData.category} />
              </div>
              <div className="space-y-3">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-custom-blue/70">
                  Core stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {projectData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-label rounded-full bg-white/62 px-2.5 py-1.5 text-[0.54rem] font-medium uppercase tracking-[0.15em] text-custom-blue/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.66)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="https://ai-finance-two-bice.vercel.app/demo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-custom-blue px-5 py-3 text-xs font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-blue focus-visible:ring-offset-2"
                >
                  Open guided demo <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <span className="inline-flex items-center rounded-full border border-custom-blue/15 bg-white/55 px-5 py-3 text-xs font-semibold text-custom-blue/72">
                  Private workspace requires sign-in
                </span>
              </div>
            </motion.div>
          </header>

          <motion.dl
            {...fadeInUp(0.12)}
            aria-label="Aperture release evidence summary"
            className="mb-8 grid overflow-hidden rounded-[1.5rem] border border-custom-blue/10 bg-white/52 sm:grid-cols-2 lg:grid-cols-4"
          >
            {proofMetrics.map((metric) => (
              <div
                key={metric.label}
                className="border-b border-custom-blue/8 px-5 py-5 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <dd className="font-display text-3xl font-medium tracking-[-0.035em] text-custom-blue">
                  {metric.value}
                </dd>
                <dt className="mt-1 text-xs leading-5 text-custom-blue/65">{metric.label}</dt>
              </div>
            ))}
          </motion.dl>

          <motion.figure
            {...fadeInUp(0.15)}
            className="glass-panel relative mb-28 overflow-hidden rounded-[1.9rem] bg-[#071112] shadow-[0_24px_70px_rgba(11,17,26,0.14)] sm:rounded-[2.1rem]"
          >
            <Image
              src="/images/ai-finance/aperture-home.jpg"
              alt="Aperture public homepage introducing the financial intelligence workspace"
              width={1440}
              height={1024}
              priority
              className="h-auto w-full"
            />
            <figcaption className="border-t border-white/10 bg-[#071112] px-5 py-4 text-xs leading-5 text-white/62">
              The public identity sets the tone; the product proof lives in the
              owner-scoped evidence workflow behind it.
            </figcaption>
          </motion.figure>

          <div className="space-y-28 sm:space-y-36">
            <motion.section {...fadeInUp()} className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
              <div className="lg:sticky lg:top-32 lg:h-fit">
                <SectionLabel index="01" label="Problem and role" />
                <h2 className="text-balance font-display text-[clamp(2.6rem,5vw,4.4rem)] font-medium leading-[0.92] tracking-[-0.045em] text-custom-blue">
                  Trust had to become interface behavior.
                </h2>
              </div>
              <div className="space-y-4">
                <div className="glass-panel space-y-5 rounded-[1.9rem] bg-white/65 p-6 sm:rounded-[2.1rem] sm:p-8">
                  <p className="text-[1.05rem] leading-7 text-custom-blue/72">
                    Financial research tools often collapse source material,
                    generated prose, and user judgment into one confident answer.
                    Aperture separates those layers so a person can see what was
                    retrieved, what the system inferred, and what a human actually approved.
                  </p>
                  <p className="text-[1.05rem] leading-7 text-custom-blue/72">
                    I shaped the product direction, interaction model, frontend,
                    API integration, evaluation strategy, and release boundaries as
                    one independent portfolio system, not a collection of disconnected screens.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <BriefCard label="Primary user" text="A research-minded investor or analyst who needs source visibility and explicit uncertainty, not automated trading." />
                  <BriefCard label="Design constraint" text="Keep the workflow calm and legible while exposing enough technical provenance to support scrutiny." />
                </div>
              </div>
            </motion.section>

            <motion.section {...fadeInUp()}>
              <SectionLabel index="02" label="Golden path" />
              <div className="mt-8 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
                <h2 className="text-balance font-display text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-[0.92] tracking-[-0.045em] text-custom-blue">
                  From private document to reviewed evidence.
                </h2>
                <p className="max-w-[62ch] text-[1.05rem] leading-7 text-custom-blue/68">
                  The case study centers on one flow that can be tested end to end,
                  explained in an interview, and evaluated without relying on a polished chat demo.
                </p>
              </div>
              <ol className="mt-10 grid gap-px overflow-hidden rounded-[1.8rem] border border-custom-blue/10 bg-custom-blue/10 md:grid-cols-2 lg:grid-cols-3">
                {researchJourney.map(({ title, text, icon: Icon }, index) => (
                  <li key={title} className="bg-[#eef2f2] p-6 sm:p-7">
                    <div className="flex items-center justify-between">
                      <Icon className="h-5 w-5 text-custom-blue/65" />
                      <span className="font-label text-[0.62rem] font-semibold tracking-[0.18em] text-custom-blue/70">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-medium tracking-[-0.02em] text-custom-blue">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-custom-blue/68">{text}</p>
                  </li>
                ))}
              </ol>
            </motion.section>

            <motion.figure {...fadeInUp()} className="overflow-hidden rounded-[1.9rem] bg-[#08100f] shadow-[0_18px_52px_rgba(11,17,26,0.12)] sm:rounded-[2.1rem]">
              <Image
                src="/images/ai-finance/aperture-product.jpg"
                alt="Aperture product page explaining evidence, ownership, and safe AI boundaries"
                width={1440}
                height={1024}
                className="h-auto w-full"
              />
              <figcaption className="border-t border-white/10 px-5 py-4 text-xs leading-5 text-white/62">
                Product language makes evidence, ownership, freshness, and advice
                boundaries part of the value proposition.
              </figcaption>
            </motion.figure>

            <motion.section {...fadeInUp()}>
              <SectionLabel index="03" label="System design" />
              <div className="mt-8 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
                <h2 className="text-balance font-display text-[clamp(2.6rem,5vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.045em] text-custom-blue">
                  Clear ownership between layers.
                </h2>
                <p className="max-w-[62ch] text-[1.05rem] leading-7 text-custom-blue/68">
                  The browser does not become a shortcut around security. Next.js
                  owns the product experience, Go owns authoritative finance and
                  document behavior, and Supabase holds relational evidence.
                </p>
              </div>
              <ol aria-label="Aperture system architecture" className="mt-10 grid gap-3 lg:grid-cols-4">
                {architectureFlow.map(({ eyebrow, title, text, icon: Icon }, index) => (
                  <li key={title} className="relative">
                    <article className="glass-panel h-full rounded-[1.55rem] bg-white/65 p-6">
                      <Icon className="h-5 w-5 text-custom-blue/60" />
                      <p className="mt-8 font-label text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-custom-blue/50">
                        {eyebrow}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-medium tracking-[-0.03em] text-custom-blue">
                        {title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-custom-blue/68">{text}</p>
                    </article>
                    {index < architectureFlow.length - 1 ? (
                      <ArrowDown className="mx-auto my-2 h-4 w-4 text-custom-blue/35 lg:absolute lg:-right-2.5 lg:top-1/2 lg:z-10 lg:m-0 lg:-rotate-90" aria-hidden="true" />
                    ) : null}
                  </li>
                ))}
              </ol>
              <div className="mt-5 grid gap-3 lg:grid-cols-3">
                {engineeringDecisions.map((decision) => (
                  <article key={decision.title} className="border-l border-custom-blue/15 py-2 pl-5">
                    <h3 className="font-display text-xl font-medium tracking-[-0.02em] text-custom-blue">
                      {decision.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-custom-blue/68">{decision.text}</p>
                  </article>
                ))}
              </div>
            </motion.section>

            <motion.section {...fadeInUp()} className="overflow-hidden rounded-[1.9rem] bg-[#10191d] p-6 text-white shadow-[0_24px_70px_rgba(11,17,26,0.16)] sm:rounded-[2.1rem] sm:p-9 lg:p-12">
              <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/8">
                    <LockKeyhole className="h-5 w-5 text-[#67d9ff]" />
                  </div>
                  <p className="mt-8 font-label text-[0.62rem] font-medium uppercase tracking-[0.2em] text-white/48">
                    Trust model
                  </p>
                  <h2 className="text-balance font-display mt-3 max-w-xl text-[clamp(2.6rem,5vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.045em] text-white">
                    Evidence can be challenged. Approval cannot be inferred.
                  </h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {visibleBoundaries.map((rule) => (
                    <div key={rule} className="flex items-start gap-3 rounded-[1.2rem] bg-white/[0.055] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#67d9ff]/80" />
                      <p className="text-sm leading-6 text-white/72">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            <motion.section {...fadeInUp()} className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
              <div className="lg:sticky lg:top-32 lg:h-fit">
                <SectionLabel index="04" label="Release evidence" />
                <h2 className="text-balance font-display text-[clamp(2.6rem,5vw,4.4rem)] font-medium leading-[0.92] tracking-[-0.045em] text-custom-blue">
                  Proof beyond the happy path.
                </h2>
                <p className="mt-6 max-w-md text-[1rem] leading-7 text-custom-blue/68">
                  The strongest outcome is not a claim about model intelligence. It
                  is a repeatable system for testing what happens when evidence,
                  ownership, generation, or approval goes wrong.
                </p>
              </div>
              <ul className="overflow-hidden rounded-[1.8rem] border border-custom-blue/10 bg-white/54">
                {releaseEvidence.map((item, index) => (
                  <li key={item} className="grid gap-4 border-b border-custom-blue/8 p-5 last:border-b-0 sm:grid-cols-[3rem_1fr] sm:p-6">
                    <span className="font-label text-[0.62rem] font-semibold tracking-[0.18em] text-custom-blue/70">
                      0{index + 1}
                    </span>
                    <span className="text-sm leading-6 text-custom-blue/72">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section {...fadeInUp()} className="grid gap-8 border-y border-custom-blue/10 py-12 sm:py-16 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <SectionLabel index="05" label="Trade-off" />
                <h2 className="mt-6 text-balance font-display text-[clamp(2.4rem,5vw,4rem)] font-medium leading-[0.94] tracking-[-0.04em] text-custom-blue">
                  Public proof before provider expansion.
                </h2>
              </div>
              <div className="space-y-5 text-[1.02rem] leading-7 text-custom-blue/70">
                <p>
                  I kept external AI calls disabled while the product boundaries,
                  retrieval, citations, review history, failure states, and evaluation
                  system were still being built. That made CI deterministic and avoided
                  presenting paid-provider output as proof of product quality.
                </p>
                <p>
                  The public result is a deployed, read-only guided demo using fictional
                  evidence—not a financial service. Authenticated document ingestion,
                  production credentials, hosted migrations, and live-model evaluation stay
                  behind a private evaluation boundary until their operating controls are ready.
                </p>
              </div>
            </motion.section>
          </div>

          <CaseStudyEvidence caseStudy={caseStudies.aperture} />
          <OtherWorks currentProjectTitle="Aperture Financial Intelligence" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ProjectFact({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Calendar;
  label: string;
  value: string;
}) {
  return (
    <div className="space-y-1">
      <p className="flex items-center gap-2 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-custom-blue/70">
        <Icon className="h-3 w-3" aria-hidden="true" /> {label}
      </p>
      <p className="text-sm font-semibold text-custom-blue">{value}</p>
    </div>
  );
}

function BriefCard({ label, text }: { label: string; text: string }) {
  return (
    <article className="glass-panel rounded-[1.45rem] bg-white/60 p-5">
      <h3 className="font-label text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-custom-blue/55">
        {label}
      </h3>
      <p className="mt-3 text-sm leading-6 text-custom-blue/70">{text}</p>
    </article>
  );
}
