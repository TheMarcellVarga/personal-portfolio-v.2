"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Linkedin,
  MapPin,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import Header from "../header";
import Footer from "../footer";
import { PageBackground } from "../components/PageBackground";
import { resume } from "../data/resume";
import { useClientReducedMotion } from "../hooks/useClientReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease },
});

const contributionAreas = [
  {
    title: "Frame the problem",
    body: "I turn ambiguous product requirements into journeys, interaction models, and prototypes that give teams something concrete to discuss.",
    icon: PanelsTopLeft,
  },
  {
    title: "Make it real",
    body: "I carry the thinking into React, TypeScript, component systems, and the implementation details that make an interface hold up in production.",
    icon: Sparkles,
  },
  {
    title: "Keep it trustworthy",
    body: "I care about accessible states, honest feedback, useful failure paths, and AI workflows that keep people informed and in control.",
    icon: ShieldCheck,
  },
] as const;

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useClientReducedMotion();
  const motionReveal = (delay = 0) =>
    reduceMotion
      ? {
          initial: false,
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0 },
        }
      : reveal(delay);

  return (
    <div className="relative overflow-hidden">
      <PageBackground />

      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeSection="About"
      />

      <main className="relative z-10 px-5 pb-24 pt-28 sm:px-6 lg:px-10 lg:pt-36">
        <div className="mx-auto max-w-6xl">
          <section className="grid items-end gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <motion.div {...motionReveal(0)}>
              <p className="mb-7 font-label text-[0.68rem] font-medium uppercase tracking-[0.28em] text-custom-blue/60">
                About Marcell Varga
              </p>
              <h1 className="max-w-3xl font-display text-[clamp(3.2rem,7.6vw,7.2rem)] font-medium leading-[0.9] tracking-[-0.055em] text-custom-blue">
                I build the bridge between product intent and production code.
              </h1>
              <p className="mt-9 max-w-xl text-base leading-7 text-custom-blue/72 sm:text-lg sm:leading-8">
                {resume.title}. I help teams make complex products feel clear,
                useful, and ready to ship.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-2 rounded-full bg-custom-blue px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(17,27,40,0.14)] transition-transform hover:-translate-y-0.5"
                >
                  View selected work
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 rounded-full border border-custom-blue/12 bg-white/48 px-5 py-3 text-sm font-semibold text-custom-blue transition-colors hover:bg-white/80"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </Link>
              </div>
            </motion.div>

            <motion.div
              {...motionReveal(0.12)}
              className="relative mx-auto w-full max-w-[29rem] lg:mr-0"
            >
              <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-white/70 bg-white/42 px-8 pt-8 shadow-[0_24px_70px_rgba(17,27,40,0.08)] backdrop-blur-sm sm:min-h-[34rem] sm:rounded-[2.6rem]">
                <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-custom-teal/25 blur-3xl" />
                <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-custom-blue/55">
                    <span>UX + Frontend</span>
                    <span>01 / 03</span>
                  </div>
                  <Image
                    src={resume.photo}
                    alt="Portrait of Marcell Varga"
                    width={1210}
                    height={1777}
                    priority
                    className="mx-auto mt-4 h-[25rem] w-auto object-contain object-bottom sm:h-[31rem]"
                  />
                  <div className="relative z-20 -mx-2 -mb-2 rounded-2xl border border-white/80 bg-[#fffaf4]/82 p-4 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-xs font-semibold text-custom-blue">
                      <MapPin className="h-3.5 w-3.5 text-custom-teal" />
                      Singapore, working globally
                    </div>
                    <p className="mt-2 text-sm leading-6 text-custom-blue/66">
                      A Nordic design foundation with an engineer&apos;s instinct
                      for systems, constraints, and the last 10 percent.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="mt-32 grid gap-10 border-t border-custom-blue/10 pt-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <motion.h2
              {...motionReveal(0)}
              className="max-w-xs font-display text-3xl font-medium leading-[0.98] tracking-[-0.04em] text-custom-blue sm:text-4xl"
            >
              The throughline is clarity.
            </motion.h2>
            <motion.div {...motionReveal(0.08)} className="max-w-3xl space-y-5 text-base leading-8 text-custom-blue/72 sm:text-lg">
              <p>
                I started in multimedia design, where I learned to look closely
                at people, context, and the details that make an experience feel
                natural. Since then, I have moved steadily toward the code that
                makes those decisions durable.
              </p>
              <p>
                Today I work across UX, frontend engineering, and design systems
                at AXON Networks. My best work happens in the handoff space:
                turning a promising direction into a coherent product surface,
                then staying close enough to implementation to make the result
                better.
              </p>
            </motion.div>
          </section>

          <section className="mt-32">
            <motion.div {...motionReveal(0)} className="max-w-2xl">
              <h2 className="font-display text-4xl font-medium leading-[0.96] tracking-[-0.045em] text-custom-blue sm:text-5xl">
                Where I add the most value
              </h2>
              <p className="mt-5 text-base leading-7 text-custom-blue/68 sm:text-lg">
                I am most useful when the problem is complex, the interface
                matters, and the team wants design and engineering to reinforce
                each other.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
              <motion.div
                {...motionReveal(0.08)}
                className="glass-panel rounded-[2rem] bg-white/62 p-7 sm:p-9"
              >
                <p className="font-label text-[0.68rem] font-medium uppercase tracking-[0.24em] text-custom-blue/50">
                  My working shape
                </p>
                <p className="mt-8 max-w-xl font-display text-3xl font-medium leading-[1.02] tracking-[-0.04em] text-custom-blue sm:text-5xl">
                  Start with the user&apos;s reality. Finish with a system the
                  team can keep building on.
                </p>
                <div className="mt-10 flex flex-wrap gap-2">
                  {resume.coreStrengths.slice(0, 6).map((strength) => (
                    <span
                      key={strength}
                      className="rounded-full border border-custom-blue/10 bg-white/65 px-3.5 py-2 text-xs font-semibold text-custom-blue/72"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </motion.div>

              <div className="grid gap-5">
                {contributionAreas.slice(0, 2).map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <motion.div
                      key={area.title}
                      {...motionReveal(0.14 + index * 0.06)}
                      className="rounded-[2rem] border border-custom-blue/10 bg-custom-blue/[0.045] p-6 sm:p-7"
                    >
                      <Icon className="h-5 w-5 text-custom-teal" />
                      <h3 className="mt-8 font-display text-2xl font-medium tracking-[-0.03em] text-custom-blue">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-custom-blue/68">
                        {area.body}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              {...motionReveal(0.2)}
              className="mt-5 rounded-[2rem] border border-custom-blue/10 bg-white/42 p-6 sm:p-7"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-custom-teal" />
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-[-0.03em] text-custom-blue">
                      {contributionAreas[2].title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-custom-blue/68">
                      {contributionAreas[2].body}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-custom-blue/45">
                  WCAG / AI-aware
                </span>
              </div>
            </motion.div>
          </section>

          <section className="mt-32 grid gap-12 border-t border-custom-blue/10 pt-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <motion.div {...motionReveal(0)}>
              <h2 className="font-display text-4xl font-medium leading-[0.96] tracking-[-0.045em] text-custom-blue sm:text-5xl">
                Experience that compounds
              </h2>
              <p className="mt-5 max-w-sm text-base leading-7 text-custom-blue/68">
                Each role has widened the same practice: understand the system,
                improve the experience, and make the next iteration easier.
              </p>
            </motion.div>

            <div className="divide-y divide-custom-blue/10 border-y border-custom-blue/10">
              {resume.experience.map((item, index) => (
                <motion.article
                  key={`${item.company}-${item.role}`}
                  {...motionReveal(0.08 + index * 0.08)}
                  className="grid gap-4 py-7 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:py-9"
                >
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-custom-blue/48">
                      {item.period}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-custom-blue/66">
                      {item.company}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-[-0.03em] text-custom-blue">
                      {item.role}
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-custom-blue/68">
                      {item.bullets.slice(0, 2).map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-custom-teal" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="mt-32 grid gap-8 border-t border-custom-blue/10 pt-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <motion.div {...motionReveal(0)}>
              <h2 className="font-display text-4xl font-medium leading-[0.96] tracking-[-0.045em] text-custom-blue sm:text-5xl">
                Looking for the next meaningful problem.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-custom-blue/72 sm:text-lg">
                I want to keep working on products where the domain is real, the
                constraints are worth understanding, and thoughtful interface
                work can improve the outcome for both users and the team.
              </p>
            </motion.div>

            <motion.div
              {...motionReveal(0.1)}
              className="rounded-[2rem] border border-custom-blue/10 bg-white/55 p-7 sm:p-9"
            >
              <p className="font-label text-[0.68rem] font-medium uppercase tracking-[0.24em] text-custom-blue/50">
                A little context
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex items-start justify-between gap-5 border-b border-custom-blue/10 pb-5">
                  <span className="text-sm text-custom-blue/55">Based in</span>
                  <span className="text-right text-sm font-semibold text-custom-blue">Singapore</span>
                </div>
                <div className="flex items-start justify-between gap-5 border-b border-custom-blue/10 pb-5">
                  <span className="text-sm text-custom-blue/55">Design foundation</span>
                  <span className="text-right text-sm font-semibold text-custom-blue">Nordic multimedia design</span>
                </div>
                <div className="flex items-start justify-between gap-5">
                  <span className="text-sm text-custom-blue/55">Languages</span>
                  <span className="max-w-[12rem] text-right text-sm font-semibold leading-6 text-custom-blue">
                    {resume.languages.slice(0, 3).map((language) => language.name).join(" / ")}
                  </span>
                </div>
              </div>
            </motion.div>
          </section>

          <motion.section
            {...motionReveal(0)}
            className="mt-32 rounded-[2.4rem] border border-custom-blue/10 bg-[#fffaf4]/72 px-7 py-10 shadow-[0_24px_70px_rgba(17,27,40,0.06)] sm:px-12 sm:py-14"
          >
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-label text-[0.68rem] font-medium uppercase tracking-[0.24em] text-custom-blue/50">
                  Let&apos;s talk
                </p>
                <h2 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-[0.95] tracking-[-0.045em] text-custom-blue sm:text-6xl">
                  If the problem is complex and the interface matters, let&apos;s talk.
                </h2>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-custom-blue px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={`https://${resume.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with Marcell Varga on LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-custom-blue/12 bg-white/65 text-custom-blue transition-colors hover:bg-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
