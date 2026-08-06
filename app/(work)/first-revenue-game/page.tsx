"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BadgeCheck,
  Calendar,
  Database,
  FileLock2,
  GitBranch,
  RefreshCcw,
  ServerCog,
  ShieldCheck,
  Tag,
  Users,
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
  { value: "41", label: "Vitest checks" },
  { value: "35", label: "Playwright passes" },
  { value: "34", label: "JUnit + Testcontainers" },
  { value: "1", label: "Configured golden path" },
] as const;

const productLoop = [
  {
    number: "01",
    title: "Receive one mission",
    text: "A commercially specific action stays central instead of becoming one item in a generic backlog.",
  },
  {
    number: "02",
    title: "Submit external proof",
    text: "A link, outcome signal, and proof standard connect activity to observable market contact.",
  },
  {
    number: "03",
    title: "Review exact evidence",
    text: "Submission locks the evidence while an operator accepts it or gives an actionable rejection note.",
  },
  {
    number: "04",
    title: "Recover or progress",
    text: "Rejection reopens revision; approval unlocks only the XP and milestones the evidence supports.",
  },
] as const;

const architecture = [
  {
    label: "Product shell",
    title: "Next.js",
    text: "Pages, interaction, session resolution, and the migration BFF preserve one product-facing contract.",
    icon: GitBranch,
  },
  {
    label: "Workflow authority",
    title: "Spring Boot",
    text: "Application, member, proof, pod, operator, billing-read, and artifact APIs own configured-mode rules.",
    icon: ServerCog,
  },
  {
    label: "Durable state",
    title: "PostgreSQL + Flyway",
    text: "Domain changes and their outbox intent commit together under versioned schema ownership.",
    icon: Database,
  },
  {
    label: "Reliable facts",
    title: "Redpanda + projections",
    text: "Recovered delivery and event-ID idempotency keep replay from awarding progression twice.",
    icon: RefreshCcw,
  },
] as const;

const trustDecisions = [
  {
    title: "Identity crosses the BFF as a signed assertion.",
    text: "Next.js sends a short-lived viewer claim with an internal token. Spring verifies it, applies route roles, and scopes resource queries to the authenticated owner.",
    icon: ShieldCheck,
  },
  {
    title: "Events cannot outrun the state they describe.",
    text: "A transactional outbox closes the database/Kafka dual-write gap, reclaims interrupted work, retries with bounds, and exposes a dead-letter state.",
    icon: RefreshCcw,
  },
  {
    title: "Proof ownership comes before file access.",
    text: "Spring resolves member or operator permission before issuing a five-minute MinIO URL, while cross-user requests retain a not-found boundary.",
    icon: FileLock2,
  },
] as const;

const operationalEvidence = [
  "Runs a real application-to-approval workflow against the configured services.",
  "Waits for the transactional outbox to drain and confirms the BFF reads Spring-owned state.",
  "Checks request, error, backlog, and projection metrics plus the provisioned Grafana dashboard.",
  "Fails if secrets, signed assertions, generated applicant email, or private payload data appear in logs.",
] as const;

const explicitLimits = [
  "No hosted production environment or production identity deployment is claimed.",
  "The recorded golden path uses link proof; file proof is verified separately through storage and permission tests.",
  "Redis is readiness-checked but intentionally absent from the active diagram because no current workload depends on it.",
  "Alert routing, SLO ownership, trace retention, scaling policy, and incident ownership remain production work.",
] as const;

function fadeInUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };
}

export default function FirstRevenueGamePage() {
  const [isOpen, setIsOpen] = useState(false);
  const projectData = projects.find((project) => project.title === "First Revenue Game")!;

  return (
    <div className="relative font-case-study">
      <PageBackground />

      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeSection="Work"
        backLink={{ href: "/#work", label: "Back to work" }}
      />

      <main className="relative z-10 px-5 pb-20 pt-32 sm:px-6 lg:px-10 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <header className="mb-14 grid gap-12 lg:grid-cols-[1.22fr_0.78fr] lg:items-end">
            <motion.div {...fadeInUp()} className="space-y-6">
              <SectionLabel index="Flagship" label="Product systems case study" />
              <h1 className="text-balance font-display text-[clamp(3.5rem,10vw,8rem)] font-medium leading-[0.82] tracking-[-0.06em] text-custom-blue">
                First Revenue Game
              </h1>
              <p className="max-w-[60ch] text-[1.05rem] leading-7 text-custom-blue/70">
                A social execution product where commercial evidence—not activity
                inside the app—controls progression, backed by an authoritative
                Java/Spring workflow and recoverable event delivery.
              </p>
            </motion.div>

            <motion.div {...fadeInUp(0.08)} className="flex flex-col gap-6 lg:pb-2">
              <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                <ProjectFact icon={Calendar} label="Date" value={projectData.date} />
                <ProjectFact icon={Tag} label="Status" value={projectData.status} />
                <ProjectFact icon={Users} label="Audience" value="Builders + operators" />
                <ProjectFact icon={BadgeCheck} label="Scope" value="Independent build" />
              </div>
              <div className="flex flex-wrap gap-2">
                {projectData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/62 px-2.5 py-1.5 text-[0.54rem] font-medium uppercase tracking-[0.15em] text-custom-blue/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.66)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </header>

          <motion.dl
            {...fadeInUp(0.12)}
            aria-label="First Revenue Game verification summary"
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
            className="relative mb-28 overflow-hidden rounded-[1.9rem] bg-[#0d1a1f] shadow-[0_24px_70px_rgba(11,17,26,0.16)] sm:rounded-[2.1rem]"
          >
            <Image
              src="/images/first-revenue-game/landing.jpg"
              alt="First Revenue Game landing page explaining its mission-first revenue workflow"
              width={1365}
              height={1000}
              priority
              className="h-auto w-full"
            />
            <figcaption className="border-t border-white/10 bg-[#0d1a1f] px-5 py-4 text-xs leading-5 text-white/64">
              The promise stays narrow: move one monetizable skill toward a paid
              outcome, and count only evidence that leaves the product.
            </figcaption>
          </motion.figure>

          <div className="space-y-28 sm:space-y-36">
            <motion.section {...fadeInUp()} className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
              <div className="lg:sticky lg:top-32 lg:h-fit">
                <SectionLabel index="01" label="Product constraint" />
                <h2 className="mt-5 text-balance font-display text-[clamp(2.7rem,5vw,4.7rem)] font-medium leading-[0.9] tracking-[-0.05em] text-custom-blue">
                  Progress had to mean market evidence.
                </h2>
              </div>
              <div className="space-y-4">
                <div className="glass-panel rounded-[1.9rem] bg-white/65 p-6 sm:p-8">
                  <p className="text-[1.05rem] leading-7 text-custom-blue/72">
                    Solo builders can mistake planning, content, and community
                    activity for commercial movement. I constrained the product to
                    one active mission, one of three revenue paths, external proof,
                    a small accountability pod, and an operator decision before XP
                    or milestones change.
                  </p>
                  <p className="mt-5 text-[1.05rem] leading-7 text-custom-blue/72">
                    I owned the product direction, interaction model, Next.js shell,
                    Spring workflow boundary, authorization, event reliability,
                    observability, tests, and release evidence as one system.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <BriefCard label="Primary member" text="A solo builder turning an existing skill into a first paid audit, service, or concierge MVP." />
                  <BriefCard label="Operator duty" text="Judge the submitted artifact, explain rejection, and unlock only milestones that the evidence supports." />
                </div>
              </div>
            </motion.section>

            <motion.section {...fadeInUp()}>
              <SectionLabel index="02" label="Member + operator loop" />
              <div className="mt-7 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="overflow-hidden rounded-[1.9rem] bg-[#102129] p-6 text-white sm:p-8">
                  <p className="max-w-md text-xs font-medium uppercase tracking-[0.19em] text-[#efb95e]">
                    Recovery is a product feature
                  </p>
                  <h2 className="mt-4 max-w-[11ch] font-display text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.9] tracking-[-0.05em]">
                    Reject, revise, approve—without stale state.
                  </h2>
                  <p className="mt-6 max-w-lg text-sm leading-6 text-white/68">
                    The operator reviews the same evidence the member submitted.
                    Rejection reopens a clear path; resubmission clears the stale
                    decision; approval derives progression from authoritative state.
                  </p>
                </div>
                <ol aria-label="First Revenue Game product workflow" className="grid gap-3 sm:grid-cols-2">
                  {productLoop.map((step) => (
                    <li key={step.number} className="glass-panel rounded-[1.6rem] bg-white/65 p-5">
                      <span className="text-xs font-medium tracking-[0.18em] text-custom-blue/45">{step.number}</span>
                      <h3 className="mt-5 text-xl font-medium tracking-[-0.025em] text-custom-blue">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-custom-blue/68">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <ScreenshotFrame src="/images/first-revenue-game/proof-pending.jpg" width={983} height={1000} alt="Member proof locked in pending review state" caption="Server-confirmed pending proof locks the exact evidence under review." />
                <ScreenshotFrame src="/images/first-revenue-game/operator-review.jpg" width={983} height={1000} alt="Operator proof review queue" caption="The operator sees the artifact, outcome signal, note, and supported unlocks together." />
              </div>
            </motion.section>

            <motion.section {...fadeInUp()}>
              <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
                <div>
                  <SectionLabel index="03" label="Migration architecture" />
                  <h2 className="mt-5 text-balance font-display text-[clamp(2.7rem,5vw,4.6rem)] font-medium leading-[0.9] tracking-[-0.05em] text-custom-blue">
                    One vertical slice, not a rewrite.
                  </h2>
                  <p className="mt-5 text-sm leading-6 text-custom-blue/68">
                    Configuring the backend changes the repository implementation,
                    not the product-facing UI contract. Demo mode remains useful;
                    configured mode proves authoritative backend ownership.
                  </p>
                </div>
                <figure className="glass-panel overflow-hidden rounded-[1.6rem] bg-white/72 p-4 sm:p-6">
                  <Image
                    src="/images/first-revenue-game/architecture.svg"
                    alt="Current configured architecture from Next.js through Spring Boot, PostgreSQL, Redpanda, MinIO, and observability services"
                    width={1600}
                    height={900}
                    className="h-auto w-full"
                  />
                  <figcaption className="mt-4 text-xs leading-5 text-custom-blue/58">
                    Demonstrated components only. Redis is not drawn until it owns an active workload.
                  </figcaption>
                </figure>
              </div>
              <ul aria-label="First Revenue Game system architecture" className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {architecture.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title} className="glass-panel rounded-[1.6rem] bg-white/65 p-5">
                      <Icon className="h-5 w-5 text-[#b1762f]" aria-hidden="true" />
                      <p className="mt-7 text-[0.61rem] font-medium uppercase tracking-[0.17em] text-custom-blue/48">{item.label}</p>
                      <h3 className="mt-2 text-xl font-medium tracking-[-0.025em] text-custom-blue">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-custom-blue/68">{item.text}</p>
                    </li>
                  );
                })}
              </ul>
            </motion.section>

            <motion.section {...fadeInUp()} className="overflow-hidden rounded-[2rem] bg-[#0d1b22] px-6 py-9 text-white sm:px-9 sm:py-12 lg:px-12">
              <SectionLabel index="04" label="Trust + reliability" tone="light" />
              <div className="mt-8 grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
                <div>
                  <h2 className="text-balance font-display text-[clamp(2.7rem,5vw,4.6rem)] leading-[0.9] tracking-[-0.05em]">
                    The backend earns its complexity.
                  </h2>
                  <p className="mt-6 max-w-lg text-sm leading-6 text-white/64">
                    Each infrastructure choice protects a visible product promise:
                    the right person reviews the right proof, a successful command
                    does not lose its event, and replay cannot double-award progress.
                  </p>
                </div>
                <div className="divide-y divide-white/10 border-y border-white/10">
                  {trustDecisions.map((decision) => {
                    const Icon = decision.icon;
                    return (
                      <article key={decision.title} className="grid gap-4 py-6 sm:grid-cols-[auto_1fr]">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#efb95e]/12 text-[#efb95e]">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium tracking-[-0.025em]">{decision.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-white/64">{decision.text}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </motion.section>

            <motion.section {...fadeInUp()} className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <ScreenshotFrame src="/images/first-revenue-game/operations.jpg" width={983} height={1000} alt="Grafana First Revenue Operations dashboard" caption="The configured path closes on measured latency, errors, outbox state, and projected workflow events." />
              <div className="lg:py-5">
                <SectionLabel index="05" label="Operational evidence" />
                <h2 className="mt-5 text-balance font-display text-[clamp(2.7rem,5vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.05em] text-custom-blue">
                  Observability is part of the feature.
                </h2>
                <ul className="mt-7 space-y-4">
                  {operationalEvidence.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-custom-blue/70">
                      <Activity className="mt-1 h-4 w-4 shrink-0 text-[#a86d28]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>

            <motion.section {...fadeInUp()}>
              <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <SectionLabel index="06" label="Narrated walkthrough" />
                  <h2 className="mt-5 max-w-[13ch] font-display text-[clamp(2.7rem,5vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.05em] text-custom-blue">
                    Product loop to runtime proof in 87 seconds.
                  </h2>
                </div>
                <a
                  href="https://github.com/TheMarcellVarga/gamified-business-development"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-custom-blue px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                >
                  Inspect source
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <div className="overflow-hidden rounded-[1.9rem] bg-[#09151b] shadow-[0_24px_70px_rgba(11,17,26,0.15)]">
                <video
                  controls
                  preload="metadata"
                  poster="/images/first-revenue-game/member-dashboard.jpg"
                  className="aspect-video w-full bg-[#09151b] object-contain"
                >
                  <source src="/images/first-revenue-game/walkthrough.mp4" type="video/mp4" />
                  <track kind="captions" src="/images/first-revenue-game/walkthrough.vtt" srcLang="en" label="English" default />
                </video>
              </div>
            </motion.section>

            <motion.section {...fadeInUp()} className="grid gap-10 border-t border-custom-blue/10 pt-16 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <SectionLabel index="07" label="Honest boundary" />
                <h2 className="mt-5 text-balance font-display text-[clamp(2.7rem,5vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.05em] text-custom-blue">
                  What this does not claim.
                </h2>
              </div>
              <ol className="divide-y divide-custom-blue/10 border-y border-custom-blue/10">
                {explicitLimits.map((item, index) => (
                  <li key={item} className="grid grid-cols-[2rem_1fr] gap-4 py-5 text-sm leading-6 text-custom-blue/70">
                    <span className="font-mono text-xs text-custom-blue/38">0{index + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </motion.section>
          </div>

          <CaseStudyEvidence caseStudy={caseStudies["first-revenue-game"]} />
          <OtherWorks currentProjectTitle="First Revenue Game" />
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
    <div>
      <div className="flex items-center gap-2 text-custom-blue/70">
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="text-[0.58rem] font-medium uppercase tracking-[0.17em]">{label}</span>
      </div>
      <p className="mt-2 text-sm leading-5 text-custom-blue/74">{value}</p>
    </div>
  );
}

function BriefCard({ label, text }: { label: string; text: string }) {
  return (
    <article className="glass-panel rounded-[1.5rem] bg-white/58 p-5">
      <p className="text-[0.61rem] font-medium uppercase tracking-[0.17em] text-custom-blue/48">{label}</p>
      <p className="mt-3 text-sm leading-6 text-custom-blue/70">{text}</p>
    </article>
  );
}

function ScreenshotFrame({
  src,
  width,
  height,
  alt,
  caption,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="overflow-hidden rounded-[1.7rem] bg-[#0c1920] shadow-[0_18px_55px_rgba(11,17,26,0.12)]">
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full" />
      <figcaption className="border-t border-white/10 px-5 py-4 text-xs leading-5 text-white/64">{caption}</figcaption>
    </figure>
  );
}
