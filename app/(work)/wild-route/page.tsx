"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  CreditCard,
  Database,
  Github,
  Route,
  Share2,
  Sparkles,
  Tag,
} from "lucide-react";
import Header from "../../header";
import Footer from "../../footer";
import { PageBackground } from "../../components/PageBackground";
import { SectionLabel } from "../../components/SectionLabel";
import { OtherWorks } from "../../components/OtherWorks";
import { projects } from "../../data/projects";

const projectData = projects.find((project) => project.title === "Wild Route")!;

const productSignals = [
  {
    value: "04",
    label: "ranked route studies",
    detail: "Each brief resolves into a considered set instead of an endless result list.",
  },
  {
    value: "01",
    label: "clear promoted stop",
    detail: "The business model is visible in the product without overwhelming the planning flow.",
  },
  {
    value: "12d",
    label: "travel window",
    detail: "Pace, budget, stops, and route wishes stay attached to the recommendation.",
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
    text: "The interface keeps four recommendations in view, then opens the selected path with its confidence, stop order, and booking actions.",
  },
];

const platformLayers = [
  {
    icon: Route,
    title: "Planning surface",
    text: "Prompt-first route composition, a globe-based comparison view, destination reasoning, and provider handoffs.",
  },
  {
    icon: Database,
    title: "Account data",
    text: "Supabase Auth, Postgres, and row-level security for profiles, generations, saved routes, public shares, and handoff history.",
  },
  {
    icon: CreditCard,
    title: "Managed billing",
    text: "Stripe Checkout, billing portal access, and webhook-driven entitlement syncing for free and pro limits.",
  },
  {
    icon: Share2,
    title: "Durable route lifecycle",
    text: "Private saves, public share links, account export, deletion controls, and notification-ready delivery paths.",
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

      <Header isOpen={isOpen} setIsOpen={setIsOpen} activeSection="Work" />

      <main className="relative z-10 px-4 pb-20 pt-28 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <header className="mb-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <motion.div {...fadeInUp()} className="space-y-6">
              <SectionLabel index="Project" label="Case Study" />
              <h1 className="max-w-[8ch] font-display text-[clamp(3.6rem,12vw,8.5rem)] font-medium leading-[0.86] tracking-[-0.06em] text-custom-blue">
                Wild Route
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-custom-blue/72 sm:text-lg">
                {projectData.description}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="https://github.com/TheMarcellVarga/ai-travel-planner"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-custom-blue px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#263648]"
                >
                  <Github className="h-4 w-4" />
                  View repository
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div {...fadeInUp(0.1)} className="space-y-6 lg:pb-2">
              <div className="grid grid-cols-2 gap-3 sm:gap-8">
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
                  <p className="text-lg leading-relaxed text-custom-blue/72">
                    Most itinerary tools start with a form or a list of destinations.
                    Wild Route starts with intent: the pace, climate, detours, budget,
                    and activities that make a trip worth taking.
                  </p>
                  <p className="text-lg leading-relaxed text-custom-blue/72">
                    I designed the product around fewer, better-considered choices.
                    The visual language is editorial and cinematic, while the planner
                    stays explicit about route logic, tradeoffs, and what happens next.
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
                      <span className="mt-3 block text-[0.64rem] font-medium uppercase tracking-[0.16em] text-custom-blue/54">
                        {signal.label}
                      </span>
                      <p className="mt-3 text-sm leading-6 text-custom-blue/66">
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
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-custom-blue/72">
                The current build uses a transparent scoring engine behind the
                prompt-first experience. That keeps the interaction explainable and
                leaves a clean path for model-backed enrichment later.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp(0.08)}
              className="glass-panel relative aspect-[16/9] overflow-hidden rounded-[1.9rem] bg-[#171d16] shadow-[0_24px_70px_rgba(17,27,40,0.12)] sm:rounded-[2.1rem]"
            >
              <Image
                src="/images/wild-route/planner.png"
                alt="Wild Route planner with a selected route and globe visualization"
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
                  <span className="text-[0.64rem] font-medium uppercase tracking-[0.2em] text-custom-blue/42">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-medium tracking-[-0.03em] text-custom-blue">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-custom-blue/68">
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
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-custom-blue/72">
                The product is wired as a production-style Next.js application:
                identity, private data, public sharing, billing, and operational
                endpoints are part of the system rather than presentation-only
                placeholders.
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
                    <h3 className="mt-7 font-display text-2xl font-medium tracking-[-0.03em] text-custom-blue">
                      {layer.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-custom-blue/68">
                      {layer.text}
                    </p>
                  </motion.article>
                );
              })}
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
                One product, end to end.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                Wild Route is a current portfolio piece because it reflects the work
                I want to keep doing: shaping a distinct product idea, building the
                interface carefully, and carrying the system far enough that the
                underlying product decisions become real.
              </p>
              <Link
                href="https://github.com/TheMarcellVarga/ai-travel-planner"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d7ff40] px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-[#171d16] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Explore the code
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.section>

          <OtherWorks currentProjectTitle="Wild Route" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
