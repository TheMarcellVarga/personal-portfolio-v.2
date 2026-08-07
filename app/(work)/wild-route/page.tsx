"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowUpRight,
  Braces,
  Calendar,
  CreditCard,
  Route,
  ShieldCheck,
  Sparkles,
  Tag,
  TestTube2,
} from "lucide-react";
import Header from "../../header";
import Footer from "../../footer";
import { PageBackground } from "../../components/PageBackground";
import { SectionLabel } from "../../components/SectionLabel";
import { OtherWorks } from "../../components/OtherWorks";
import { CaseStudyEvidence } from "../../components/CaseStudyEvidence";
import { projects } from "../../data/projects";
import { caseStudies } from "../../data/case-studies";

const projectData = projects.find((project) => project.title === "Wild Route")!;

const productSignals = [
  {
    value: "74",
    label: "deterministic tests",
    detail: "Route logic, entitlements, validation, security, sharing, and handoffs are regression tested.",
  },
  {
    value: "15",
    label: "browser checks",
    detail: "Chromium covers the hosted journey, keyboard use, accessibility, motion, and media fallbacks.",
  },
  {
    value: "05",
    label: "verified migrations",
    detail: "Ownership, public sharing, entitlements, profiles, and route records are modeled with RLS.",
  },
];

const compositionSteps = [
  {
    title: "Interpret the brief",
    text: "The planner extracts the origin, travel window, stop count, budget mode, and active wishes from the prompt and form controls.",
  },
  {
    title: "Score destinations",
    text: "Destinations are ranked against the selected wishes, activity profile, cost posture, and route constraints.",
  },
  {
    title: "Compare route shapes",
    text: "The interface keeps four recommendations in view, then opens the selected path with ranking reasons, estimate boundaries, and handoff actions.",
  },
];

const platformLayers = [
  {
    icon: Route,
    title: "Decision surface",
    text: "Prompt-first composition, globe or 2D fallback, ranked alternatives, visible assumptions, and explicit provider handoffs.",
  },
  {
    icon: ShieldCheck,
    title: "Trust boundary",
    text: "Browser requests stop at same-origin handlers. Secrets stay server-side, inputs are schema validated, and public snapshots use an explicit allowlist.",
  },
  {
    icon: CreditCard,
    title: "Ownership and billing",
    text: "Supabase RLS and server ownership checks protect user data; Stripe webhooks require signatures and use an idempotency ledger.",
  },
  {
    icon: TestTube2,
    title: "Release confidence",
    text: "Deterministic tests, hosted golden-path checks, privacy-safe operational events, bounded rate limits, and failure-state coverage make the build inspectable.",
  },
];

const tradeoffs = [
  {
    title: "Deterministic before generative",
    text: "The route engine is inspectable and testable today. A live model can later enrich intent interpretation without becoming the authority for price, availability, or safety.",
  },
  {
    title: "Immersion with a fallback",
    text: "The globe creates spatial context, while a fully usable 2D route view protects the core comparison task when motion, media, or WebGL is unavailable.",
  },
  {
    title: "Honest demo over fake production",
    text: "The interface labels fixture-backed data and planning estimates. Unconfigured providers degrade visibly instead of silently pretending to be live.",
  },
];

function fadeInUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };
}

export default function WildRoutePage() {
  const [isOpen, setIsOpen] = useState(false);

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
          <header className="mb-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <motion.div {...fadeInUp()} className="space-y-6">
              <SectionLabel index="Project" label="Case Study" />
              <h1 className="max-w-[8ch] font-display text-[clamp(3.6rem,12vw,8.5rem)] font-medium leading-[0.86] tracking-[-0.06em] text-custom-blue">
                Wild Route
              </h1>
              <p className="max-w-2xl text-[1.05rem] leading-7 text-custom-blue/65">
                {projectData.description}
              </p>
            </motion.div>

            <motion.div {...fadeInUp(0.1)} className="space-y-6 lg:pb-2">
              <div className="grid grid-cols-3 gap-3 sm:gap-8">
                <div className="space-y-1">
                  <p className="flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-custom-blue/70">
                    <Calendar className="h-3 w-3" /> Date
                  </p>
                  <p className="text-sm font-semibold text-custom-blue">
                    {projectData.date}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-custom-blue/70">
                    <Tag className="h-3 w-3" /> Implementation status
                  </p>
                  <p className="text-sm font-semibold text-custom-blue">
                    {projectData.status}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-custom-blue/70">
                    <Tag className="h-3 w-3" /> Category
                  </p>
                  <p className="text-sm font-semibold text-custom-blue">
                    {projectData.category}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-custom-blue/70">
                  Key skills
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
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="https://ai-travel-planner-psi-five.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-custom-blue px-5 py-3 text-xs font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-blue focus-visible:ring-offset-2"
                >
                  Open live demo <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <span className="inline-flex items-center rounded-full border border-custom-blue/15 bg-white/55 px-5 py-3 text-xs font-semibold text-custom-blue/72">
                  Source available privately on request
                </span>
              </div>
            </motion.div>
          </header>

          <motion.div
            {...fadeInUp(0.16)}
            className="glass-panel relative aspect-[16/9] overflow-hidden rounded-[1.9rem] bg-[#171d16] shadow-[0_24px_70px_rgba(17,27,40,0.12)] sm:rounded-[2.1rem]"
          >
            <Image
              src="/images/wild-route/home.png"
              alt="Wild Route editorial landing page"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          <section className="py-24 sm:py-32">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <motion.div {...fadeInUp()} className="lg:sticky lg:top-28">
                <SectionLabel index="01" label="Product direction" />
                <h2 className="mt-5 max-w-[9ch] font-display text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.9] tracking-[-0.05em] text-custom-blue">
                  Travel planning with a point of view.
                </h2>
              </motion.div>

              <motion.div {...fadeInUp(0.08)} className="space-y-4">
                <div className="glass-panel space-y-5 rounded-[1.9rem] bg-white/65 p-6 shadow-[0_12px_40px_rgba(11,17,26,0.04)] sm:rounded-[2.1rem] sm:p-8">
                  <p className="text-[1.05rem] leading-7 text-custom-blue/65">
                    Most itinerary tools start with a form or a list of destinations.
                    Wild Route starts with intent: the pace, climate, detours, budget,
                    and activities that make a trip worth taking.
                  </p>
                  <p className="text-[1.05rem] leading-7 text-custom-blue/65">
                    I designed the product around fewer, better-considered choices.
                    The visual language is editorial and cinematic, while the planner
                    stays explicit about route logic, confidence, freshness, estimates,
                    persistence, and external booking handoffs.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {productSignals.map((signal) => (
                    <article
                      key={signal.label}
                      className="glass-panel rounded-[1.5rem] bg-white/65 p-5 shadow-[0_12px_40px_rgba(11,17,26,0.04)]"
                    >
                      <strong className="font-display text-4xl tracking-[-0.05em] text-custom-blue">
                        {signal.value}
                      </strong>
                      <span className="mt-3 block text-[0.64rem] font-medium uppercase tracking-[0.16em] text-custom-blue/70">
                        {signal.label}
                      </span>
                      <p className="mt-3 text-[0.75rem] leading-[1.55] text-custom-blue/70">
                        {signal.detail}
                      </p>
                    </article>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="space-y-10 py-6 sm:py-10">
            <motion.div {...fadeInUp()} className="max-w-3xl">
              <SectionLabel index="02" label="Route Composition" />
              <h2 className="mt-5 font-display text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.9] tracking-[-0.05em] text-custom-blue">
                A calm interface for a dense decision.
              </h2>
              <p className="mt-6 max-w-2xl text-[1.05rem] leading-7 text-custom-blue/65">
                The current build uses a transparent scoring engine behind the
                prompt-first experience. That keeps the interaction explainable and
                gives the product a reliable spine before live provider or model-backed
                enrichment.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp(0.08)}
              className="glass-panel relative aspect-[16/9] overflow-hidden rounded-[1.9rem] bg-[#171d16] shadow-[0_24px_70px_rgba(17,27,40,0.12)] sm:rounded-[2.1rem]"
            >
              <Image
                src="/images/wild-route/planner.png"
                alt="Wild Route selected-route planner with ranking reasons and estimate boundary"
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="grid gap-3 lg:grid-cols-3">
              {compositionSteps.map((step, index) => (
                <motion.article
                  key={step.title}
                  {...fadeInUp(index * 0.08)}
                  className="glass-panel rounded-[1.9rem] bg-white/65 p-6 shadow-[0_12px_40px_rgba(11,17,26,0.04)] sm:rounded-[2.1rem]"
                >
                  <span className="text-[0.64rem] font-medium uppercase tracking-[0.2em] text-custom-blue/70">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 font-display text-[1.08rem] font-medium leading-[1.04] tracking-[-0.02em] text-custom-blue sm:text-[1.24rem]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.75rem] leading-[1.55] text-custom-blue/70">
                    {step.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="py-24 sm:py-32">
            <motion.div {...fadeInUp()} className="max-w-3xl">
              <SectionLabel index="03" label="Production Stack" />
              <h2 className="mt-5 font-display text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.9] tracking-[-0.05em] text-custom-blue">
                Designed past the mockup.
              </h2>
              <p className="mt-6 max-w-2xl text-[1.05rem] leading-7 text-custom-blue/65">
                The interface is only the visible edge. Behind it, Next.js owns the
                browser-facing boundary, Supabase models identity and ownership, and
                Stripe-compatible flows model entitlement changes. Paid integrations
                remain disabled in the demo, but their contracts and failure states are
                part of the system.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {platformLayers.map((layer, index) => {
                const Icon = layer.icon;

                return (
                  <motion.article
                    key={layer.title}
                    {...fadeInUp(index * 0.08)}
                    className="glass-panel group rounded-[1.9rem] bg-white/65 p-6 shadow-[0_12px_40px_rgba(11,17,26,0.04)] sm:rounded-[2.1rem] sm:p-7"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem] bg-custom-blue text-[#d7ff40] shadow-[0_12px_24px_rgba(17,27,40,0.12)] transition-transform duration-500 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-7 font-display text-[1.08rem] font-medium leading-[1.04] tracking-[-0.02em] text-custom-blue sm:text-[1.24rem]">
                      {layer.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[0.75rem] leading-[1.55] text-custom-blue/70">
                      {layer.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </section>

          <section className="pb-24 sm:pb-32">
            <motion.div
              {...fadeInUp()}
              className="overflow-hidden rounded-[2rem] bg-[#171d16] text-white shadow-[0_24px_70px_rgba(17,27,40,0.14)] sm:rounded-[2.5rem]"
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="border-b border-white/10 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-[1.1rem] bg-[#d7ff40] text-[#171d16]">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <p className="mt-8 text-[0.64rem] font-medium uppercase tracking-[0.2em] text-white/55">
                    Production learning
                  </p>
                  <h2 className="mt-4 max-w-[10ch] font-display text-[clamp(2.5rem,6vw,4.8rem)] font-medium leading-[0.9] tracking-[-0.05em]">
                    What broke in production.
                  </h2>
                </div>

                <div className="space-y-8 p-6 sm:p-10 lg:p-12">
                  <div>
                    <span className="text-[0.64rem] font-medium uppercase tracking-[0.18em] text-[#d7ff40]">
                      The failure
                    </span>
                    <p className="mt-3 text-[1.05rem] leading-7 text-white/70">
                      The first Vercel deployment generated routes correctly, but Save
                      returned “Route not found.” The implementation had assumed that
                      process memory would be shared across serverless function instances.
                    </p>
                  </div>
                  <div>
                    <span className="text-[0.64rem] font-medium uppercase tracking-[0.18em] text-[#d7ff40]">
                      The repair
                    </span>
                    <p className="mt-3 text-[1.05rem] leading-7 text-white/70">
                      I moved demo saves into a browser-local route vault and rebuilt
                      previews from schema-validated stateless recipes. Those recipes omit
                      the original prompt, while booking links are reconstructed server-side.
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.055] p-5">
                    <p className="text-sm leading-6 text-white/62">
                      The result is honest about demo persistence and survives serverless
                      execution. A managed Supabase deployment remains the explicit path to
                      cross-device, account-owned saves.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="space-y-10 pb-24 sm:pb-32">
            <motion.div {...fadeInUp()} className="max-w-3xl">
              <SectionLabel index="04" label="Responsive product" />
              <h2 className="mt-5 max-w-[11ch] font-display text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.9] tracking-[-0.05em] text-custom-blue">
                The route stays legible in your hand.
              </h2>
              <p className="mt-6 max-w-2xl text-[1.05rem] leading-7 text-custom-blue/65">
                Mobile is not a compressed desktop canvas. The planner preserves prompt
                context, decision reasons, route order, estimate boundaries, and sharing
                actions in a deliberate reading sequence.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              <motion.figure
                {...fadeInUp(0.06)}
                className="glass-panel overflow-hidden rounded-[1.9rem] bg-[#171d16] p-3 shadow-[0_24px_70px_rgba(17,27,40,0.12)] sm:rounded-[2.1rem] sm:p-4"
              >
                <Image
                  src="/images/wild-route/planner-mobile.png"
                  alt="Wild Route mobile planner showing a ranked multi-stop route"
                  width={390}
                  height={844}
                  className="mx-auto h-auto w-full max-w-[390px] rounded-[1.35rem]"
                />
              </motion.figure>
              <motion.figure
                {...fadeInUp(0.12)}
                className="glass-panel overflow-hidden rounded-[1.9rem] bg-[#171d16] p-3 shadow-[0_24px_70px_rgba(17,27,40,0.12)] sm:rounded-[2.1rem] sm:p-4"
              >
                <Image
                  src="/images/wild-route/share-mobile.png"
                  alt="Wild Route mobile public share view with estimate and booking boundaries"
                  width={390}
                  height={844}
                  className="mx-auto h-auto w-full max-w-[390px] rounded-[1.35rem]"
                />
              </motion.figure>
            </div>
          </section>

          <section className="pb-24 sm:pb-32">
            <motion.div {...fadeInUp()} className="max-w-3xl">
              <SectionLabel index="05" label="Product tradeoffs" />
              <h2 className="mt-5 font-display text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.9] tracking-[-0.05em] text-custom-blue">
                Trust is part of the interface.
              </h2>
            </motion.div>
            <div className="mt-10 grid gap-3 lg:grid-cols-3">
              {tradeoffs.map((tradeoff, index) => (
                <motion.article
                  key={tradeoff.title}
                  {...fadeInUp(index * 0.08)}
                  className="glass-panel rounded-[1.9rem] bg-white/65 p-6 shadow-[0_12px_40px_rgba(11,17,26,0.04)] sm:rounded-[2.1rem]"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-[0.9rem] bg-custom-blue text-[#d7ff40]">
                    {index === 0 ? <Braces className="h-4 w-4" /> : index === 1 ? <Route className="h-4 w-4" /> : <ShieldCheck className="h-4 w-4" />}
                  </div>
                  <h3 className="mt-6 font-display text-[1.08rem] font-medium leading-[1.04] tracking-[-0.02em] text-custom-blue sm:text-[1.24rem]">
                    {tradeoff.title}
                  </h3>
                  <p className="mt-3 text-[0.75rem] leading-[1.55] text-custom-blue/70">
                    {tradeoff.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </section>

          <motion.section
            {...fadeInUp()}
            className="relative overflow-hidden rounded-[2rem] bg-[#171d16] p-6 text-white shadow-[0_24px_70px_rgba(17,27,40,0.14)] sm:rounded-[2.5rem] sm:p-10 lg:p-14"
          >
            <Image
              src="/images/wild-route/ribbon.png"
              alt=""
              fill
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,24,17,0.98),rgba(18,24,17,0.88)_55%,rgba(18,24,17,0.42))]" />
            <div className="relative max-w-3xl">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-[1.1rem] bg-[#d7ff40] text-[#171d16]">
                <Sparkles className="h-5 w-5" />
              </div>
              <h2 className="mt-8 max-w-[12ch] font-display text-[clamp(2.6rem,6vw,5.25rem)] font-medium leading-[0.9] tracking-[-0.05em]">
                Product thinking, shipped end to end.
              </h2>
              <p className="mt-6 max-w-2xl text-[1.05rem] leading-7 text-white/68">
                Wild Route reflects the work I want to keep doing: turning an ambiguous
                product opportunity into a distinct interaction, then carrying it through
                frontend architecture, APIs, security boundaries, testing, deployment,
                and the unglamorous failures that make the next release better.
              </p>
            </div>
          </motion.section>

          <CaseStudyEvidence caseStudy={caseStudies["wild-route"]} />
          <OtherWorks currentProjectTitle="Wild Route" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
