"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Accessibility,
  ArrowDown,
  BellOff,
  Check,
  Clock3,
  Database,
  ShieldCheck,
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

const projectData = projects.find((project) => project.title === "Focusin")!;

const productStates = [
  {
    number: "01",
    title: "Ready",
    text: "Start a focus interval or take a reset immediately.",
  },
  {
    number: "02",
    title: "Focusing",
    text: "A wall-clock deadline remains authoritative through sleep and relaunch.",
  },
  {
    number: "03",
    title: "Break due",
    text: "The app recommends one safe activity; a notification is optional.",
  },
  {
    number: "04",
    title: "Breaking",
    text: "Done, Skip, or natural expiry records variety and begins focus again.",
  },
] as const;

const engineeringDecisions = [
  {
    icon: Clock3,
    title: "Dates over countdown ticks",
    text: "Started-at and ends-at dates make the interface a projection of elapsed wall time, not a fragile chain of timer callbacks.",
  },
  {
    icon: ShieldCheck,
    title: "Hard constraints stay hard",
    text: "Office-safe and mindfulness preferences are never relaxed. State, duration, and novelty soften only through an explicit fallback order.",
  },
  {
    icon: Database,
    title: "Curated and local by design",
    text: "A versioned JSON catalog keeps wellness copy inspectable, activity identities stable, and the complete version-one loop offline.",
  },
  {
    icon: Accessibility,
    title: "Accessibility is product behavior",
    text: "Keyboard defaults, stable progress semantics, adaptive native layouts, and named accessibility actions are part of the workflow contract.",
  },
] as const;

function revealMotion(delay: number, reduceMotion: boolean) {
  if (reduceMotion) {
    return {
      "data-motion-reveal": "",
      initial: false as const,
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0 },
    };
  }

  return {
    "data-motion-reveal": "",
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

export default function FocusinPage() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useClientReducedMotion();
  const reveal = (delay = 0) => revealMotion(delay, reduceMotion);

  return (
    <div className="case-study-page font-case-study relative">
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
                Flagship native product case study
              </p>
              <h1 className="max-w-[8ch] font-display text-[clamp(4.2rem,14vw,9rem)] font-medium leading-[0.84] tracking-[-0.06em] text-custom-blue">
                Focusin
              </h1>
              <p className="max-w-2xl text-[1.05rem] leading-7 text-custom-blue/68">
                A local-first macOS utility that turns the moment a focus
                interval ends into one practical reset, without opening a
                dashboard or asking the user to invent the next step.
              </p>
            </motion.div>

            <motion.div {...reveal(0.08)} className="space-y-7 lg:pb-2">
              <div className="grid gap-5 sm:grid-cols-2">
                <Meta label="Experience" value={projectData.status} />
                <Meta label="Role" value="Product, UX, SwiftUI, release" />
                <Meta label="Runtime" value="Native macOS 14+" />
                <Meta label="Year" value={projectData.date} />
              </div>
              <p className="inline-flex w-fit items-center rounded-full bg-custom-blue/10 px-5 py-3 text-xs font-semibold text-custom-blue">
                Source available privately on request
              </p>
            </motion.div>
          </header>

          <motion.section
            {...reveal(0.12)}
            className="overflow-hidden rounded-[2rem] bg-custom-blue text-white shadow-[0_28px_80px_rgba(17,27,40,0.16)] sm:rounded-[2.6rem]"
          >
            <div className="grid lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <div className="p-7 sm:p-10 lg:p-12 xl:p-16">
                <p className="font-label text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-custom-teal">
                  Product premise
                </p>
                <h2 className="mt-5 max-w-[10ch] font-display text-[clamp(2.7rem,6vw,5.2rem)] font-medium leading-[0.9] tracking-[-0.05em]">
                  The useful break is one choice away.
                </h2>
                <p className="mt-6 max-w-xl text-[1rem] leading-7 text-white/66">
                  State and available time narrow a reviewed local catalog to
                  one optional action. Completing or skipping it closes the
                  loop and starts focus again.
                </p>
                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/10 pt-7">
                  <CompactProof value="21" label="reviewed activities" />
                  <CompactProof value="0" label="accounts or network calls" />
                </div>
              </div>

              <figure className="relative min-h-[28rem] overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(76,207,255,0.24),transparent_47%)] p-6 sm:p-10 lg:min-h-[42rem] lg:border-l lg:border-t-0">
                <Image
                  src="/images/focusin/light-focusing.png"
                  alt="Focusin menu bar interface showing a running focus interval and a state-aware micro-break recommendation"
                  width={960}
                  height={898}
                  priority
                  className="mx-auto h-auto max-h-[38rem] w-auto rounded-[2rem] object-contain drop-shadow-[0_26px_45px_rgba(0,0,0,0.28)]"
                />
                <figcaption className="mx-auto mt-5 max-w-xl text-center text-xs leading-5 text-white/52">
                  Current deterministic review capture used as
                  engineering evidence; signed-candidate media remains open.
                </figcaption>
              </figure>
            </div>
          </motion.section>

          <section className="py-24 sm:py-32">
            <motion.div {...reveal()} className="max-w-3xl">
              <SectionLabel index="Flow" label="A small state machine" />
              <h2 className="mt-5 max-w-[12ch] font-display text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.92] tracking-[-0.05em] text-custom-blue">
                Four states carry the whole product.
              </h2>
              <p className="mt-6 max-w-2xl text-[1.05rem] leading-7 text-custom-blue/68">
                The interface stays compact because the lifecycle is explicit.
                One store owns the graph on MainActor; dates remain the source
                of truth when the app wakes, relaunches, or observes time changes.
              </p>
            </motion.div>

            <ol
              aria-label="Focusin product state loop"
              className="mt-12 grid gap-3 lg:grid-cols-4"
            >
              {productStates.map((state, index) => (
                <motion.li
                  key={state.title}
                  {...reveal(index * 0.05)}
                  className="relative"
                >
                  <article className="glass-panel h-full rounded-[1.5rem] bg-white/64 p-5 shadow-[0_12px_40px_rgba(11,17,26,0.04)]">
                    <span className="font-label text-[0.62rem] font-semibold tracking-[0.18em] text-custom-teal">
                      {state.number}
                    </span>
                    <h3 className="mt-8 font-display text-[1.65rem] font-medium leading-none tracking-[-0.035em] text-custom-blue">
                      {state.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-custom-blue/68">
                      {state.text}
                    </p>
                  </article>
                  <ArrowDown
                    aria-hidden="true"
                    className={`mx-auto my-2 h-4 w-4 text-custom-blue/35 lg:absolute lg:-right-2.5 lg:top-1/2 lg:m-0 lg:-translate-y-1/2 lg:-rotate-90 ${index === productStates.length - 1 ? "lg:hidden" : ""}`}
                  />
                </motion.li>
              ))}
            </ol>
            <p className="mt-5 text-sm leading-6 text-custom-blue/68">
              Breaking returns to Focusing, so the fourth state closes the loop
              back to the second.
            </p>
          </section>

          <section className="pb-24 sm:pb-32">
            <div className="grid gap-5 lg:grid-cols-[0.84fr_1.16fr] lg:items-stretch">
              <motion.figure
                {...reveal()}
                className="glass-panel overflow-hidden rounded-[1.9rem] bg-white/62 p-3 shadow-[0_18px_55px_rgba(11,17,26,0.06)] sm:rounded-[2.1rem]"
              >
                <Image
                  src="/images/focusin/light-breaking.png"
                  alt="Focusin active break screen with Window Breath recommendation, progress, Done, and Skip controls"
                  width={960}
                  height={984}
                  className="h-auto w-full rounded-[1.45rem] object-cover object-top"
                />
                <figcaption className="px-2 pb-2 pt-4 text-sm leading-6 text-custom-blue/64">
                  The active break keeps progress, completion, and a respectful
                  escape route visible in one compact surface.
                </figcaption>
              </motion.figure>

              <motion.div
                {...reveal(0.08)}
                className="rounded-[2rem] bg-custom-blue p-7 text-white shadow-[0_24px_70px_rgba(17,27,40,0.14)] sm:rounded-[2.5rem] sm:p-10 lg:p-12"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-[1.1rem] bg-custom-teal text-custom-blue">
                  <BellOff className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-7 max-w-[11ch] font-display text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.92] tracking-[-0.05em]">
                  The local loop does not depend on platform permission.
                </h2>
                <p className="mt-6 max-w-2xl text-[1.05rem] leading-7 text-white/68">
                  Notifications and launch-at-login improve reach, but neither
                  controls the product state. Their adapters report real macOS
                  status while the focus and break lifecycle continues locally.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <ResilienceFact text="Denied notifications never stop a deadline from becoming break due." />
                  <ResilienceFact text="Quiet hours suppress reminders, not local timer progression." />
                  <ResilienceFact text="Activation, wake, clock, timezone, and day changes share one reconciliation path." />
                  <ResilienceFact text="Legacy preference payloads remain backward-compatible and regression-tested." />
                </div>
              </motion.div>
            </div>
          </section>

          <section className="pb-24 sm:pb-32">
            <motion.div {...reveal()} className="max-w-3xl">
              <SectionLabel index="Decisions" label="Engineering judgment" />
              <h2 className="mt-5 max-w-[11ch] font-display text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.92] tracking-[-0.05em] text-custom-blue">
                Small interface. Deliberate boundaries.
              </h2>
            </motion.div>

            <div className="mt-12 border-t border-custom-blue/10">
              {engineeringDecisions.map((decision, index) => {
                const Icon = decision.icon;

                return (
                  <motion.article
                    key={decision.title}
                    {...reveal(index * 0.04)}
                    className="grid gap-5 border-b border-custom-blue/10 py-7 sm:grid-cols-[3.25rem_0.72fr_1.28fr] sm:items-start sm:gap-8 sm:py-9"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem] bg-custom-teal/15 text-custom-teal">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-[1.5rem] font-medium leading-[1.02] tracking-[-0.03em] text-custom-blue">
                      {decision.title}
                    </h3>
                    <p className="max-w-2xl text-sm leading-6 text-custom-blue/68">
                      {decision.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </section>

          <section className="overflow-hidden rounded-[2rem] bg-custom-blue text-white shadow-[0_24px_70px_rgba(17,27,40,0.14)] sm:rounded-[2.5rem]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                {...reveal()}
                className="border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12"
              >
                <p className="font-display text-[clamp(5rem,13vw,9rem)] font-medium leading-none tracking-[-0.075em] text-custom-teal">
                  54
                </p>
                <h2 className="mt-7 max-w-[10ch] font-display text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.05em]">
                  Deterministic checks before distribution claims.
                </h2>
                <p className="mt-5 max-w-xl text-[1rem] leading-7 text-white/66">
                  The suite covers the state graph, persistence, catalog policy,
                  quiet hours, permission reconciliation, and the release packet.
                  It does not substitute for a signed-build lifecycle matrix or beta.
                </p>
              </motion.div>

              <motion.div {...reveal(0.08)} className="grid gap-8 p-7 sm:p-10 lg:p-12">
                <Proof
                  value="21"
                  label="validated local activities"
                  text="Every default-filter state and duration intersection is covered, with named human review for version 0.1.0 (1)."
                />
                <Proof
                  value="41"
                  label="appearance and accessibility captures"
                  text="Light, dark, large text, contrast, transparency, recovery, and Settings presentations are recorded as engineering evidence."
                />
                <Proof
                  value="0"
                  label="runtime network dependencies"
                  text="No account, backend, analytics, advertising, remote content, or network entitlement is part of version one."
                />
              </motion.div>
            </div>
          </section>

          <section className="py-24 sm:py-32">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
              <motion.div {...reveal()}>
                <SectionLabel index="Native" label="System fit" />
                <h2 className="mt-5 max-w-[10ch] font-display text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.92] tracking-[-0.05em] text-custom-blue">
                  Settings explain the tradeoffs.
                </h2>
                <p className="mt-6 max-w-xl text-[1.05rem] leading-7 text-custom-blue/68">
                  Notification denial is shown as a state, not an error trap.
                  Quiet hours, interval controls, activity preferences, and
                  system integration stay native, inspectable, and reversible.
                </p>
                <p className="mt-6 max-w-xl border-l-2 border-custom-teal pl-5 text-sm leading-6 text-custom-blue/62">
                  These are current deterministic review captures. Final public
                  media must still come from the exact signed candidate.
                </p>
              </motion.div>

              <motion.figure
                {...reveal(0.08)}
                className="overflow-hidden rounded-[1.9rem] bg-custom-blue p-3 shadow-[0_24px_70px_rgba(17,27,40,0.14)] sm:rounded-[2.1rem]"
              >
                <Image
                  src="/images/focusin/dark-settings-reminder.png"
                  alt="Focusin dark-mode Reminder settings with notification, focus interval, break duration, and quiet-hours controls"
                  width={1816}
                  height={1432}
                  className="h-auto w-full rounded-[1.45rem]"
                />
                <figcaption className="px-3 pb-2 pt-4 text-sm leading-6 text-white/58">
                  The interface remains useful when reminders are disabled: the
                  explanatory row makes the degraded behavior explicit.
                </figcaption>
              </motion.figure>
            </div>
          </section>

          <CaseStudyEvidence caseStudy={caseStudies.focusin} />
          <OtherWorks currentProjectTitle="Focusin" />
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

function CompactProof({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <strong className="font-display text-3xl tracking-[-0.05em] text-custom-teal">
        {value}
      </strong>
      <p className="mt-1 font-label text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/52">
        {label}
      </p>
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
      <strong className="min-w-[5.5rem] font-display text-4xl tracking-[-0.05em] text-custom-teal">
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

function ResilienceFact({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 border-t border-white/10 pt-4">
      <Check
        className="mt-0.5 h-4 w-4 shrink-0 text-custom-teal"
        aria-hidden="true"
      />
      <p className="text-sm leading-6 text-white/64">{text}</p>
    </div>
  );
}
