"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  AudioLines,
  CheckCircle2,
  Database,
  Gauge,
  ShieldCheck,
  TriangleAlert,
  Workflow,
} from "lucide-react";
import Header from "../../header";
import Footer from "../../footer";
import { PageBackground } from "../../components/PageBackground";
import { SectionLabel } from "../../components/SectionLabel";
import { OtherWorks } from "../../components/OtherWorks";
import { CaseStudyEvidence } from "../../components/CaseStudyEvidence";
import { useClientReducedMotion } from "../../hooks/useClientReducedMotion";
import { projects } from "../../data/projects";
import { caseStudies } from "../../data/case-studies";

const projectData = projects.find(
  (project) => project.title === "ThreadScribe Studio",
)!;

const architecture = [
  {
    icon: AudioLines,
    title: "Browser workspace",
    text: "Capture, upload, compare, edit, search, and export remain user-controlled interactions.",
  },
  {
    icon: Workflow,
    title: "Next.js routes",
    text: "Server boundaries validate files, orchestrate jobs, route providers, persist sessions, and generate exports.",
  },
  {
    icon: Gauge,
    title: "Transcription worker",
    text: "Deterministic fixtures or explicit local Whisper return timestamped segments through one observable job contract.",
  },
  {
    icon: ShieldCheck,
    title: "AI transform runtime",
    text: "Clean, Notes, and Actions outputs are schema validated and labeled before the interface renders them.",
  },
  {
    icon: Database,
    title: "Local SQLite library",
    text: "Sessions, segments, edits, outputs, tags, and safe export records stay searchable on the local machine.",
  },
] as const;

function revealMotion(delay: number, reduceMotion: boolean) {
  if (reduceMotion) {
    return {
      initial: false as const,
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0 },
    };
  }

  return {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.14 },
    transition: {
      duration: 0.68,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };
}

export default function ThreadScribePage() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useClientReducedMotion();
  const reveal = (delay = 0) => revealMotion(delay, reduceMotion);

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
          <header className="mb-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <motion.div {...reveal()} className="space-y-6">
              <p className="max-w-fit border-b border-custom-blue/15 pb-2 text-sm font-medium text-custom-blue/64">
                Supporting applied AI case study
              </p>
              <h1 className="max-w-[9ch] font-display text-[clamp(3.2rem,11vw,8rem)] font-medium leading-[0.88] tracking-[-0.055em] text-custom-blue">
                ThreadScribe Studio
              </h1>
              <p className="max-w-2xl text-[1.05rem] leading-7 text-custom-blue/68">
                A transcript workspace designed to make AI behavior inspectable,
                local-first, and recoverable from capture through export.
              </p>
            </motion.div>

            <motion.div {...reveal(0.08)} className="space-y-7 lg:pb-2">
              <div className="grid gap-5 sm:grid-cols-2">
                <Meta label="Implementation" value={projectData.status} />
                <Meta label="Focus" value="Trustworthy AI interaction" />
                <Meta label="Stack" value="Next.js, TypeScript, SQLite" />
                <Meta label="Year" value={projectData.date} />
              </div>
              <a
                href="https://github.com/TheMarcellVarga/ai-transcriber"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-custom-blue px-5 py-3 text-xs font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-blue focus-visible:ring-offset-2"
              >
                Inspect source <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          </header>

          <motion.figure
            {...reveal(0.12)}
            className="glass-panel overflow-hidden rounded-[1.9rem] bg-[#071312] p-2 shadow-[0_24px_70px_rgba(17,27,40,0.12)] sm:rounded-[2.1rem] sm:p-3"
          >
            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/threadscribe/transformed-output.png"
              aria-label="Fifty-four second ThreadScribe Studio workflow demonstration"
              className="aspect-video w-full rounded-[1.45rem] bg-[#071312] object-contain sm:rounded-[1.65rem]"
            >
              <source
                src="/images/threadscribe/threadscribe-demo.mp4"
                type="video/mp4"
              />
              Your browser does not support the demo video.
            </video>
            <figcaption className="px-3 pb-2 pt-3 text-sm leading-6 text-white/68 sm:px-4">
              A 54-second current-build walkthrough of raw transcription,
              structured cleanup, local persistence, safe export, and
              recoverable worker failure.
            </figcaption>
          </motion.figure>

          <section className="py-24 sm:py-32">
            <motion.div {...reveal()} className="max-w-3xl">
              <h2 className="mt-5 max-w-[12ch] font-display text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.92] tracking-[-0.05em] text-custom-blue">
                The AI draft never outranks the source.
              </h2>
              <p className="mt-6 max-w-2xl text-[1.05rem] leading-7 text-custom-blue/68">
                Most transcript demos end at generated text. ThreadScribe keeps
                the source, transformation, provider state, and retention
                behavior in one reviewable workspace.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
              <motion.figure
                {...reveal(0.05)}
                className="glass-panel overflow-hidden rounded-[1.9rem] bg-white/62 p-3 shadow-[0_18px_55px_rgba(11,17,26,0.06)] sm:rounded-[2.1rem]"
              >
                <Image
                  src="/images/threadscribe/raw-transcript.png"
                  alt="ThreadScribe timestamped raw transcript with fixture disclosure and deleted temporary audio"
                  width={983}
                  height={1000}
                  className="h-auto w-full rounded-[1.45rem]"
                  priority
                />
                <figcaption className="px-2 pb-2 pt-4 text-sm leading-6 text-custom-blue/64">
                  Raw timestamped segments preserve the speech record and
                  processing context.
                </figcaption>
              </motion.figure>

              <motion.figure
                {...reveal(0.1)}
                className="glass-panel overflow-hidden rounded-[1.9rem] bg-white/62 p-3 shadow-[0_18px_55px_rgba(11,17,26,0.06)] sm:rounded-[2.1rem]"
              >
                <Image
                  src="/images/threadscribe/transformed-output.png"
                  alt="ThreadScribe cleaned transcript with provider mode, confidence, safety, and off-device metadata"
                  width={983}
                  height={1000}
                  className="h-auto w-full rounded-[1.45rem]"
                />
                <figcaption className="px-2 pb-2 pt-4 text-sm leading-6 text-custom-blue/64">
                  Cleaned output remains a labeled draft with model and safety
                  metadata.
                </figcaption>
              </motion.figure>
            </div>
          </section>

          <section className="overflow-hidden rounded-[2rem] bg-[#071312] text-white shadow-[0_24px_70px_rgba(17,27,40,0.14)] sm:rounded-[2.5rem]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                {...reveal()}
                className="border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12"
              >
                <p className="font-display text-[clamp(4.8rem,12vw,8.6rem)] font-medium leading-none tracking-[-0.07em] text-[#83cfc6]">
                  45/45
                </p>
                <h2 className="mt-7 max-w-[11ch] font-display text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.05em]">
                  Evaluation before provider theatre.
                </h2>
                <p className="mt-5 max-w-xl text-[1rem] leading-7 text-white/66">
                  Five labeled synthetic transcripts test cleanup, notes,
                  actions, empty input, and instruction-like transcript text.
                  The score is a fixture contract result, not a model-quality
                  benchmark.
                </p>
              </motion.div>

              <motion.div
                {...reveal(0.08)}
                className="grid gap-8 p-7 sm:p-10 lg:p-12"
              >
                <Proof
                  value="37"
                  label="application tests"
                  text="Transcription jobs, AI schemas, persistence, exports, privacy, and deletion behavior pass the current suite."
                />
                <Proof
                  value="2.068s"
                  label="recorded warm local run"
                  text="One permitted 8.63-second English clip completed with cached faster-whisper tiny on an Apple M3 Pro."
                />
                <Proof
                  value="0"
                  label="critical or serious axe findings"
                  text="The automated keyboard and accessibility workflow covers completed, dialog, confirmation, export, and narrow states."
                />
              </motion.div>
            </div>
          </section>

          <section className="py-24 sm:py-32">
            <motion.div {...reveal()} className="max-w-3xl">
              <SectionLabel index="System" label="Local-first architecture" />
              <h2 className="mt-5 max-w-[12ch] font-display text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.92] tracking-[-0.05em] text-custom-blue">
                Clear ownership at every boundary.
              </h2>
              <p className="mt-6 max-w-2xl text-[1.05rem] leading-7 text-custom-blue/68">
                The browser owns interaction. Server routes own sensitive work.
                Workers own audio processing. SQLite owns the durable local
                record.
              </p>
            </motion.div>

            <ol
              aria-label="ThreadScribe system architecture"
              className="mt-12 grid gap-3 lg:grid-cols-5"
            >
              {architecture.map((layer, index) => {
                const Icon = layer.icon;

                return (
                  <motion.li
                    key={layer.title}
                    {...reveal(index * 0.05)}
                    className="relative"
                  >
                    <article className="glass-panel h-full rounded-[1.5rem] bg-white/64 p-5 shadow-[0_12px_40px_rgba(11,17,26,0.04)]">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-[0.95rem] bg-custom-blue text-[#83cfc6]">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <h3 className="mt-6 font-display text-[1.08rem] font-medium leading-[1.04] tracking-[-0.02em] text-custom-blue">
                        {layer.title}
                      </h3>
                      <p className="mt-3 text-[0.75rem] leading-[1.55] text-custom-blue/68">
                        {layer.text}
                      </p>
                    </article>
                    {index < architecture.length - 1 ? (
                      <ArrowDown
                        aria-hidden="true"
                        className="mx-auto my-2 h-4 w-4 text-custom-blue/35 lg:absolute lg:-right-2.5 lg:top-1/2 lg:m-0 lg:-translate-y-1/2 lg:-rotate-90"
                      />
                    ) : null}
                  </motion.li>
                );
              })}
            </ol>
          </section>

          <section className="pb-24 sm:pb-32">
            <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
              <motion.figure
                {...reveal()}
                className="glass-panel overflow-hidden rounded-[1.9rem] bg-white/62 p-3 shadow-[0_18px_55px_rgba(11,17,26,0.06)] sm:rounded-[2.1rem]"
              >
                <Image
                  src="/images/threadscribe/worker-failure.png"
                  alt="ThreadScribe local Whisper worker failure with retry and retained audio preview"
                  width={390}
                  height={844}
                  className="h-full w-full rounded-[1.45rem] object-cover object-top"
                />
              </motion.figure>

              <motion.div
                {...reveal(0.08)}
                className="rounded-[2rem] bg-[#071312] p-7 text-white shadow-[0_24px_70px_rgba(17,27,40,0.14)] sm:rounded-[2.5rem] sm:p-10 lg:p-12"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-[1.1rem] bg-[#83cfc6] text-[#071312]">
                  <TriangleAlert className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-7 max-w-[11ch] font-display text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.92] tracking-[-0.05em]">
                  Failure stays truthful and useful.
                </h2>
                <p className="mt-6 max-w-2xl text-[1.05rem] leading-7 text-white/68">
                  When an explicitly enabled local Whisper worker is
                  unavailable, ThreadScribe reports the failure, retains the
                  audio preview, offers Retry, deletes temporary audio, and
                  renders no invented transcript.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <FailureFact text="The previous workspace state remains intact." />
                  <FailureFact text="Internal paths and raw worker payloads stay hidden." />
                  <FailureFact text="Provider failures never become fabricated success." />
                  <FailureFact text="Cancellation follows the same cleanup contract." />
                </div>
              </motion.div>
            </div>
          </section>

          <CaseStudyEvidence caseStudy={caseStudies.threadscribe} />
          <OtherWorks currentProjectTitle="ThreadScribe Studio" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-label text-[0.62rem] font-medium uppercase tracking-[0.18em] text-custom-blue/70">
        {label}
      </p>
      <p className="mt-1.5 text-sm font-semibold text-custom-blue">{value}</p>
    </div>
  );
}

function Proof({
  value,
  label,
  text,
}: {
  value: string;
  label: string;
  text: string;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
      <strong className="min-w-[6.5rem] font-display text-4xl tracking-[-0.05em] text-[#83cfc6]">
        {value}
      </strong>
      <div>
        <p className="font-label text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/72">
          {label}
        </p>
        <p className="mt-2 text-sm leading-6 text-white/62">{text}</p>
      </div>
    </div>
  );
}

function FailureFact({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-[1.3rem] border border-white/10 bg-white/[0.055] p-4">
      <CheckCircle2
        className="mt-0.5 h-4 w-4 shrink-0 text-[#83cfc6]"
        aria-hidden="true"
      />
      <p className="text-sm leading-6 text-white/64">{text}</p>
    </div>
  );
}
