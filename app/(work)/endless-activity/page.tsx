"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accessibility,
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Database,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import Header from "../../header";
import Footer from "../../footer";
import { PageBackground } from "../../components/PageBackground";
import { OtherWorks } from "../../components/OtherWorks";
import { CaseStudyEvidence } from "../../components/CaseStudyEvidence";
import { useClientReducedMotion } from "../../hooks/useClientReducedMotion";
import { projects } from "../../data/projects";
import { caseStudies } from "../../data/case-studies";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const projectData = projects.find((project) => project.title === "Endless Activity")!;

const proofStrip = [
  "SwiftUI",
  "50 curated activities",
  "Local persistence",
  "Deterministic ranking",
  "VoiceOver actions",
  "Reduce Motion",
] as const;

const productDecisions = [
  {
    icon: Layers3,
    title: "The deck owns presentation, not truth.",
    text: "Save and skip remove cards from the active deck while the bundled catalog remains immutable. Ranking can rebuild the experience without repairing mutated source data.",
    detail: "Catalog loader + pure ranker + presentation state",
  },
  {
    icon: Database,
    title: "Local state is enough for version one.",
    text: "Saved IDs, skipped IDs, completed IDs, and practical preferences live in one Codable UserDefaults payload that survives relaunch without an account or sync layer.",
    detail: "Fast, private, offline after install",
  },
  {
    icon: Accessibility,
    title: "A gesture never becomes a gate.",
    text: "Right-save and left-skip gestures have visible buttons and named VoiceOver actions. Accessibility-size layouts scroll, while Reduce Motion removes the swipe-off animation.",
    detail: "Equivalent controls + adaptive native behavior",
  },
] as const;

const verificationSlides = [
  {
    value: "50",
    title: "A catalog that can be audited",
    text: "Fifty unique activities follow the locked schema, balanced category targets, concrete step rules, and explicit safety guidance where needed.",
  },
  {
    value: "12 + 7",
    title: "Core logic and golden paths",
    text: "Twelve unit tests and seven UI tests cover decoding, filtering, ranking, persistence, swipe directions, details, Saved, Preferences, and relaunch state.",
  },
  {
    value: "2 sizes",
    title: "Small and large iPhone evidence",
    text: "The final recorded run passed on iPhone 17e and built on iPhone 17 Pro Max, with large-text and VoiceOver behavior checked around the core flow.",
  },
] as const;

const gallery = [
  {
    src: "/images/endless-activity/discover.png",
    alt: "Endless Activity Discover screen showing a five-sense reset card with Save and Skip controls",
    caption: "Discover starts with a usable suggestion, not onboarding.",
  },
  {
    src: "/images/endless-activity/detail.png",
    alt: "Endless Activity detail sheet showing activity metadata and a concrete three-step plan",
    caption: "Details add the practical steps without making the card dense.",
  },
  {
    src: "/images/endless-activity/saved.png",
    alt: "Endless Activity Saved screen containing a persisted five-sense reset activity",
    caption: "Saving turns browsing into a short, durable list.",
  },
  {
    src: "/images/endless-activity/preferences.png",
    alt: "Endless Activity Preferences screen with duration, cost, energy, and setting controls",
    caption: "Filters stay practical: time, cost, energy, setting, company, category.",
  },
] as const;

const thesis =
  "The strongest product decision was not adding more intelligence. It was making one small interaction trustworthy, reversible, accessible, and complete.";

export default function EndlessActivityPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeEvidence, setActiveEvidence] = useState(0);
  const pageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useClientReducedMotion();

  useGSAP(
    () => {
      if (reduceMotion) return;

      const words = gsap.utils.toArray<HTMLElement>("[data-scrub-word]");
      gsap.fromTo(
        words,
        { opacity: 0.72 },
        {
          opacity: 1,
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-thesis]",
            start: "top 78%",
            end: "bottom 42%",
            scrub: 0.7,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>("[data-stack-card]").forEach((card) => {
        gsap.fromTo(
          card,
          { y: 72, scale: 0.94 },
          {
            y: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "top 28%",
              scrub: 0.65,
            },
          },
        );
      });
    },
    { scope: pageRef, dependencies: [reduceMotion], revertOnUpdate: true },
  );

  const selectEvidence = (direction: -1 | 1) => {
    setActiveEvidence((current) =>
      (current + direction + verificationSlides.length) % verificationSlides.length,
    );
  };

  return (
    <div ref={pageRef} className="case-study-page font-case-study relative overflow-x-hidden">
      <PageBackground />

      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeSection="Work"
        backLink={{ href: "/#work", label: "Back to work" }}
      />

      <main className="relative z-10 w-full max-w-full overflow-x-hidden px-5 pb-20 pt-32 sm:px-6 lg:px-10 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <header className="relative pb-20 sm:pb-28 lg:grid lg:min-h-[44rem] lg:grid-cols-[minmax(0,1fr)_minmax(19rem,25rem)] lg:items-center lg:gap-12 lg:pb-24">
            <div className="relative z-10 max-w-3xl pt-5 lg:pt-0">
              <p className="text-sm font-medium text-custom-blue/72">
                Supporting native iOS product case study
              </p>
              <h1 className="mt-6 max-w-6xl text-[clamp(4rem,13vw,10rem)] font-medium leading-[0.8] tracking-[-0.065em] text-custom-blue lg:max-w-[9ch]">
                Endless Activity
              </h1>
              <p className="mt-8 max-w-2xl text-[1.06rem] leading-7 text-custom-blue/72 sm:text-[1.16rem] sm:leading-8">
                A tactile activity deck for the moment when someone wants to do
                something but does not know what to search for. Native, local,
                deterministic, and deliberately smaller than the obvious roadmap.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <p className="inline-flex items-center justify-center rounded-full bg-custom-blue/10 px-6 py-3.5 text-sm font-semibold text-custom-blue">
                  Source available privately on request
                </p>
                <a
                  href="#walkthrough"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/74 px-6 py-3.5 text-sm font-semibold text-custom-blue shadow-[inset_0_0_0_1px_rgba(17,27,40,0.1),0_14px_38px_rgba(17,27,40,0.08)] transition duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-blue focus-visible:ring-offset-3"
                >
                  Watch 24-second walkthrough
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative z-10 mx-auto mt-12 w-[min(78vw,19rem)] rotate-[5deg] sm:w-[min(64vw,25rem)] lg:mt-0 lg:w-full lg:max-w-[23rem] lg:justify-self-end xl:max-w-[25rem]">
              <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-custom-teal/20 blur-3xl" />
              <Image
                src="/images/endless-activity/discover.png"
                alt="Endless Activity Discover deck on iPhone"
                width={1170}
                height={2532}
                priority
                loading="eager"
                className="relative h-auto w-full rounded-[2.6rem] shadow-[0_45px_110px_rgba(17,27,40,0.28)]"
              />
            </div>

          </header>

          <figure
            id="walkthrough"
            className="scroll-mt-28 overflow-hidden rounded-[2.2rem] bg-custom-blue p-5 text-white shadow-[0_28px_80px_rgba(17,27,40,0.16)] sm:p-7 lg:grid lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:items-center lg:gap-10 lg:p-10"
          >
            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/endless-activity/discover.png"
              aria-label="Twenty-four second Endless Activity visual walkthrough"
              aria-describedby="endless-activity-transcript"
              className="mx-auto w-full max-w-[19rem] rounded-[1.6rem] bg-white"
            >
              <source src="/images/endless-activity/endless-activity-demo.mp4" type="video/mp4" />
              <track
                kind="descriptions"
                src="/images/endless-activity/endless-activity-demo.vtt"
                srcLang="en"
                label="Visual descriptions"
                default
              />
              Your browser does not support the Endless Activity walkthrough.
            </video>
            <div className="mt-6 lg:mt-0">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-custom-teal">
                Accessible walkthrough
              </p>
              <h2 className="mt-4 max-w-[11ch] text-[clamp(2.4rem,5vw,4.8rem)] font-medium leading-[0.9] tracking-[-0.05em]">
                One flow, described clearly.
              </h2>
              <p className="mt-5 max-w-xl text-[1rem] leading-7 text-white/72">
                The visual demo shows the same concrete path as the case study:
                discover one activity, inspect its steps, save it, and adjust preferences.
              </p>
              <details id="endless-activity-transcript" className="mt-7 rounded-[1.2rem] border border-white/10 bg-white/[0.06] p-5">
                <summary className="cursor-pointer text-sm font-semibold text-white">
                  Read the walkthrough transcript
                </summary>
                <ol className="mt-4 space-y-3 text-sm leading-6 text-white/72">
                  <li><span className="mr-2 font-mono text-xs text-custom-teal">00:00</span>Discover presents one five-sense reset with duration, cost, energy, Save, and Skip controls.</li>
                  <li><span className="mr-2 font-mono text-xs text-custom-teal">00:06</span>The activity detail view expands into three practical steps and a Save for later action.</li>
                  <li><span className="mr-2 font-mono text-xs text-custom-teal">00:12</span>The Saved screen keeps the activity available for another moment.</li>
                  <li><span className="mr-2 font-mono text-xs text-custom-teal">00:18</span>Preferences expose duration, cost, energy, and setting filters without requiring an account.</li>
                </ol>
              </details>
            </div>
          </figure>

          <div className="overflow-hidden border-y border-custom-blue/10 py-4" aria-label="Project proof points">
            <div className="case-study-marquee-track flex w-max items-center">
              {[...proofStrip, ...proofStrip].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="flex items-center gap-6 pr-6 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-custom-blue/72"
                  aria-hidden={index >= proofStrip.length}
                >
                  {item}
                  <span className="h-1.5 w-1.5 rounded-full bg-custom-teal" />
                </span>
              ))}
            </div>
          </div>

          <section className="py-32 md:py-48">
            <div className="max-w-5xl">
              <p className="text-sm font-medium text-custom-blue/72">The product opportunity</p>
              <h2 className="mt-6 max-w-5xl text-[clamp(2.8rem,7vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.055em] text-custom-blue">
                Built for the moment
                <span className="mx-3 inline-block h-[0.72em] w-[1.25em] overflow-hidden rounded-full align-baseline shadow-[0_10px_25px_rgba(17,27,40,0.15)] sm:mx-5">
                  <Image
                    src="/images/endless-activity/saved.png"
                    alt=""
                    aria-hidden="true"
                    width={1170}
                    height={2532}
                    className="h-full w-full object-cover object-top"
                  />
                </span>
                before search.
              </h2>
            </div>

            <div className="mt-16 grid grid-flow-dense gap-4 lg:grid-cols-12 lg:grid-rows-2">
              <article className="group relative min-h-[35rem] overflow-hidden rounded-[2.2rem] bg-custom-blue text-white shadow-[0_28px_80px_rgba(17,27,40,0.16)] lg:col-span-7 lg:row-span-2">
                <div className="grid h-full lg:grid-rows-[auto_1fr]">
                  <div className="p-7 sm:p-10 lg:p-12">
                    <Image
                      src="/images/endless-activity/app-icon.png"
                      alt="Endless Activity app icon"
                      width={1024}
                      height={1024}
                      className="h-12 w-12 rounded-[0.95rem] shadow-[0_12px_30px_rgba(0,0,0,0.24)]"
                    />
                    <h3 className="mt-8 max-w-[11ch] text-[clamp(2.6rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.05em]">
                      Immediate utility beats onboarding.
                    </h3>
                    <p className="mt-6 max-w-xl text-[1rem] leading-7 text-white/82">
                      The first launch opens on one concrete activity. A user can
                      act, save, skip, or inspect details before learning anything
                      about the system behind it.
                    </p>
                  </div>
                  <div className="relative min-h-[18rem] overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(76,207,255,0.24),transparent_54%)] px-8 pt-8">
                    <Image
                      src="/images/endless-activity/detail.png"
                      alt="Endless Activity detail view with metadata and action steps"
                      width={1170}
                      height={2532}
                      className="mx-auto w-[15rem] translate-y-8 rounded-[2rem] shadow-[0_30px_70px_rgba(0,0,0,0.34)] transition-transform duration-700 ease-out group-hover:translate-y-4 group-hover:scale-105"
                    />
                  </div>
                </div>
              </article>

              <article className="rounded-[2.2rem] bg-custom-teal/15 p-7 text-custom-blue shadow-[0_18px_55px_rgba(17,27,40,0.08)] sm:p-9 lg:col-span-5 lg:row-span-1">
                <Bookmark className="h-6 w-6 text-custom-teal" aria-hidden="true" />
                <h3 className="mt-8 max-w-[12ch] text-[2.15rem] font-medium leading-[0.94] tracking-[-0.045em] sm:text-[2.6rem]">
                  A complete loop in five moves.
                </h3>
                <p className="mt-5 text-sm leading-6 text-custom-blue/72">
                  Open, react, filter, revisit, relaunch. Each move is represented
                  in persistence and covered by a golden-path test.
                </p>
              </article>

              <article className="rounded-[2.2rem] bg-custom-blue/10 p-7 text-custom-blue shadow-[0_18px_55px_rgba(17,27,40,0.08)] sm:p-9 lg:col-span-5 lg:row-span-1">
                <ShieldCheck className="h-6 w-6 text-custom-teal" aria-hidden="true" />
                <h3 className="mt-8 max-w-[13ch] text-[2.15rem] font-medium leading-[0.94] tracking-[-0.045em] sm:text-[2.6rem]">
                  Restraint is part of the architecture.
                </h3>
                <p className="mt-5 text-sm leading-6 text-custom-blue/72">
                  No account, location requirement, backend, marketplace, live
                  event feed, or generated activity is needed to prove the idea.
                </p>
              </article>
            </div>
          </section>

          <section data-thesis className="py-32 md:py-48">
            <p className="max-w-2xl text-sm leading-6 text-custom-blue/72">
              The scope decision that shaped every layer
            </p>
            <h2
              aria-label={thesis}
              className="mt-8 max-w-6xl text-[clamp(2.6rem,6.5vw,6.2rem)] font-medium leading-[0.94] tracking-[-0.05em] text-custom-blue"
            >
              {thesis.split(" ").map((word, index) => (
                <span key={`${word}-${index}`} data-scrub-word aria-hidden="true" className="mr-[0.22em] inline-block">
                  {word}
                </span>
              ))}
            </h2>
          </section>

          <section className="pb-32 md:pb-48">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div className="lg:sticky lg:top-32 lg:h-fit">
                <p className="text-sm font-medium text-custom-blue/72">Engineering decisions</p>
                <h2 className="mt-6 max-w-[10ch] text-[clamp(2.8rem,6vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.05em] text-custom-blue">
                  Small surface. Clear boundaries.
                </h2>
                <p className="mt-6 max-w-md text-[1rem] leading-7 text-custom-blue/72">
                  Each decision keeps presentation playful while the underlying
                  state remains explicit, testable, and recoverable.
                </p>
              </div>

              <div className="space-y-8 pb-24">
                {productDecisions.map((decision, index) => {
                  const Icon = decision.icon;
                  return (
                    <article
                      key={decision.title}
                      data-stack-card
                      className="sticky top-28 min-h-[28rem] overflow-hidden rounded-[2.3rem] bg-custom-blue p-7 text-white shadow-[0_34px_90px_rgba(17,27,40,0.22)] sm:p-10 lg:min-h-[31rem] lg:p-12"
                      style={{ zIndex: index + 1 }}
                    >
                      <div className="flex h-full min-h-[23rem] flex-col">
                        <div className="flex items-start justify-between gap-6">
                          <span className="inline-flex h-12 w-12 items-center justify-center rounded-[1.1rem] bg-white/12 text-white">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <span className="text-sm font-medium text-white/72">0{index + 1}</span>
                        </div>
                        <h3 className="mt-14 max-w-[11ch] text-[clamp(2.35rem,5vw,4.8rem)] font-medium leading-[0.9] tracking-[-0.05em]">
                          {decision.title}
                        </h3>
                        <p className="mt-6 max-w-2xl text-[1rem] leading-7 text-white/82">
                          {decision.text}
                        </p>
                        <p className="mt-auto border-t border-white/12 pt-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/72">
                          {decision.detail}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-[2.4rem] bg-white/64 shadow-[0_28px_80px_rgba(17,27,40,0.1)] backdrop-blur-2xl">
            <div className="grid lg:grid-cols-[0.84fr_1.16fr]">
              <div className="border-b border-custom-blue/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <p className="text-sm font-medium text-custom-blue/72">Verification rail</p>
                <p className="mt-10 text-[clamp(4.8rem,12vw,9rem)] font-medium leading-none tracking-[-0.075em] text-[#176b87]">
                  {verificationSlides[activeEvidence].value}
                </p>
                <h2 className="mt-7 max-w-[11ch] text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.05em] text-custom-blue">
                  {verificationSlides[activeEvidence].title}
                </h2>
                <p className="mt-5 max-w-xl text-[1rem] leading-7 text-custom-blue/72">
                  {verificationSlides[activeEvidence].text}
                </p>
              </div>

              <div className="flex min-h-[28rem] flex-col justify-between bg-custom-blue p-7 text-white sm:p-10 lg:p-12">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/72">
                    Recorded evidence
                  </span>
                  <span className="text-sm text-white/72">
                    {activeEvidence + 1} / {verificationSlides.length}
                  </span>
                </div>
                <div className="my-12 space-y-4">
                  {verificationSlides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => setActiveEvidence(index)}
                      className={`w-full border-b py-4 text-left text-[1.25rem] font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                        activeEvidence === index
                          ? "border-custom-teal text-white"
                          : "border-white/10 text-white/72 hover:text-white"
                      }`}
                    >
                      {slide.title}
                    </button>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => selectEvidence(-1)}
                    aria-label="Previous verification item"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-custom-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => selectEvidence(1)}
                    aria-label="Next verification item"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-custom-blue transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-custom-blue"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-32 md:py-48">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium text-custom-blue/72">Current product captures</p>
                <h2 className="mt-5 max-w-[10ch] text-[clamp(2.8rem,6vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.05em] text-custom-blue">
                  One flow, shown honestly.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-custom-blue/72">
                Real iPhone 17e simulator captures. No synthetic dashboard,
                backend state, or unimplemented social behavior is implied.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((item) => (
                <figure key={item.src} className="group overflow-hidden rounded-[2rem] bg-custom-blue p-3 shadow-[0_22px_64px_rgba(17,27,40,0.13)]">
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1170}
                      height={2532}
                      className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="px-3 pb-3 pt-5 text-sm leading-6 text-white/78">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <CaseStudyEvidence caseStudy={caseStudies["endless-activity"]} />
          <OtherWorks currentProjectTitle="Endless Activity" />

          <section className="my-32 overflow-hidden rounded-[2.4rem] bg-custom-teal px-7 py-16 text-custom-blue shadow-[0_30px_90px_rgba(17,27,40,0.14)] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold text-custom-blue">Supporting work, specific proof</p>
                <h2 className="mt-5 max-w-[10ch] text-[clamp(3rem,7vw,6.6rem)] font-medium leading-[0.86] tracking-[-0.06em]">
                  Product judgment that reaches the code.
                </h2>
              </div>
              <div className="space-y-6">
                <p className="max-w-xl text-[1.05rem] leading-7 text-custom-blue">
                  Endless Activity complements the flagship work with a compact
                  example of native interaction, local architecture, accessibility,
                  and knowing where a version one should stop.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <p className="inline-flex items-center justify-center rounded-full bg-custom-blue/10 px-6 py-3.5 text-sm font-semibold text-custom-blue">
                    Source available privately on request
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white/64 px-6 py-3.5 text-sm font-semibold text-custom-blue transition duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-blue focus-visible:ring-offset-3 focus-visible:ring-offset-custom-teal"
                  >
                    Discuss the work <ArrowRight className="h-4 w-4" />
                  </Link>
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
