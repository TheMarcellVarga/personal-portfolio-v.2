"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { caseStudyPages, type CaseStudyVisual } from "../data/case-study-pages";
import { caseStudies } from "../data/case-studies";
import { projects, type CaseStudyId } from "../data/projects";
import { useClientReducedMotion } from "../hooks/useClientReducedMotion";
import Footer from "../footer";
import Header from "../header";
import { OtherWorks } from "./OtherWorks";
import { PageBackground } from "./PageBackground";
import { SectionLabel } from "./SectionLabel";

type CaseStudyPageProps = {
  caseStudyId: CaseStudyId;
};

export default function CaseStudyPage({ caseStudyId }: CaseStudyPageProps) {
  const [project, record, content] = [
    projects.find((item) => item.caseStudyId === caseStudyId),
    caseStudies[caseStudyId],
    caseStudyPages[caseStudyId],
  ];
  const shouldReduceMotion = useClientReducedMotion();
  const [isOpen, setIsOpen] = useState(false);

  if (!project || !record || !content) return null;

  return (
    <div className="case-study-page relative font-case-study">
      <PageBackground />

      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeSection="Work"
        backLink={{ href: "/#work", label: "Back to work" }}
      />

      <main className="relative z-10 px-4 pb-8 pt-0 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <section className="pt-32 sm:pt-36">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.8fr)] lg:items-end lg:gap-16">
              <Reveal reduceMotion={shouldReduceMotion}>
                <SectionLabel index="Project" label="Case Study" />
                <h1
                  className={`font-display font-semibold leading-[0.9] tracking-[-0.055em] text-custom-blue ${
                    project.title.length > 24
                      ? "max-w-[14ch] text-[clamp(2.9rem,8vw,5rem)] lg:text-[5.75rem]"
                      : "max-w-[9ch] text-[clamp(3.1rem,9vw,7rem)]"
                  }`}
                >
                  {project.titleAccent ? (
                    <>
                      {project.title.split(project.titleAccent)[0]}
                      <span className="title-accent">{project.titleAccent}</span>
                      {project.title.split(project.titleAccent)[1]}
                    </>
                  ) : (
                    project.title
                  )}
                </h1>
                <p className="mt-7 max-w-2xl text-[1.08rem] leading-7 text-custom-blue/72">
                  {project.subTitle}
                </p>
                <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-custom-blue/62">
                  {project.description}
                </p>
              </Reveal>

              <Reveal
                reduceMotion={shouldReduceMotion}
                delay={0.08}
                className="lg:pb-1"
              >
                <div className="border-y border-custom-blue/10">
                  <IndexMetaRow label="Year" value={project.date} />
                  <IndexMetaRow
                    label="Experience"
                    value={project.status}
                    dataCaseStudyStatus={caseStudyId}
                  />
                  <IndexMetaRow label="Category" value={project.category} />
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-label rounded-full bg-white/62 px-2.5 py-1.5 text-[0.54rem] font-medium uppercase tracking-[0.15em] text-custom-blue/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.66)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {content.demoUrl && (
                  <Link
                    href={content.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-custom-blue px-5 py-3 text-sm font-medium text-white shadow-[0_18px_44px_rgba(17,27,40,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1a2939] active:translate-y-0 active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-blue focus-visible:ring-offset-2"
                  >
                    {content.demoLabel ?? "Open project"}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
              </Reveal>
            </div>
          </section>

          <Reveal reduceMotion={shouldReduceMotion} delay={0.14} className="mt-12 sm:mt-16">
            <figure className="glass-panel relative aspect-[16/9] overflow-hidden rounded-[1.65rem] bg-custom-blue p-2.5 shadow-[0_28px_90px_rgba(17,27,40,0.11)] sm:rounded-[2rem] sm:p-3">
              <div className="relative h-full overflow-hidden rounded-[1.15rem] bg-[#071726] sm:rounded-[1.45rem]">
                <Image
                  src={content.heroImage ?? project.image}
                  alt={content.heroAlt ?? `${project.title} interface preview`}
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 90vw, 1200px"
                  className="object-cover"
                />
              </div>
            </figure>
          </Reveal>

          <section className="py-20 sm:py-28 lg:py-32">
            <div className="mb-8 grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end">
              <div className="max-w-2xl">
                <SectionLabel index="Context" label="The work" />
                <h2 className="font-display text-[clamp(2.3rem,7vw,5.4rem)] leading-[0.92] tracking-[-0.05em] text-custom-blue">
                  {content.contextTitle}
                </h2>
              </div>
              <p className="max-w-xl text-[0.98rem] leading-7 text-custom-blue/65 lg:justify-self-end">
                {content.contextBody}
              </p>
            </div>

            <div className="grid auto-rows-fr gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <IndexCard index="01" title="The problem" body={record.problem} />
              <IndexCard index="02" title="The user" body={record.user} />
              <IndexCard index="03" title="My role" body={record.role} />
            </div>
          </section>

          <section
            data-case-study-evidence={caseStudyId}
            className="pb-20 sm:pb-28 lg:pb-32"
          >
            <div className="mb-8 max-w-3xl">
              <SectionLabel index="Proof" label="Decisions" />
              <h2 className="font-display text-[clamp(2.3rem,7vw,5.4rem)] leading-[0.92] tracking-[-0.05em] text-custom-blue">
                The choices that made the product hold together.
              </h2>
            </div>

            <div className="grid auto-rows-fr gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {record.decisions.slice(0, 4).map((decision, index) => (
                <IndexCard
                  key={decision}
                  index={`0${index + 1}`}
                  title={decision.split(" ").slice(0, 4).join(" ")}
                  body={decision}
                />
              ))}
            </div>
          </section>

          {content.process && (
            <section className="pb-20 sm:pb-28 lg:pb-32">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16">
                <div className="max-w-xl lg:sticky lg:top-28 lg:self-start">
                  <SectionLabel index="Process" label="How it took shape" />
                  <h2 className="font-display text-[clamp(2.3rem,7vw,5.4rem)] leading-[0.92] tracking-[-0.04em] text-custom-blue">
                    {content.processTitle ?? "Small on the surface. Deliberate underneath."}
                  </h2>
                  <p className="mt-6 max-w-[62ch] text-[0.98rem] leading-7 text-custom-blue/65">
                    {content.processBody ??
                      "The process moved from product restraint to runtime truth, then through content safety and hostile-state verification."}
                  </p>
                </div>

                <ol className="border-t border-custom-blue/12">
                  {content.process.map((step, index) => (
                    <ProcessStep
                      key={step.title}
                      index={index + 1}
                      title={step.title}
                      body={step.body}
                    />
                  ))}
                </ol>
              </div>
            </section>
          )}

          <section className="pb-20 sm:pb-28 lg:pb-32">
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <SectionLabel index="Screens" label="Selected work" />
                <h2 className="font-display text-[clamp(2.3rem,7vw,5.4rem)] leading-[0.92] tracking-[-0.05em] text-custom-blue">
                  The interface, in context.
                </h2>
              </div>
              <ArrowRight className="hidden h-6 w-6 text-custom-blue/40 sm:block" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {content.gallery.map((visual, index) => (
                <VisualCard key={visual.src} visual={visual} index={index} />
              ))}
            </div>
          </section>

          <section className="pb-20 sm:pb-28 lg:pb-32">
            <div className="overflow-hidden rounded-[1.65rem] bg-[#071726] p-5 text-white shadow-[0_40px_140px_rgba(5,16,32,0.22)] sm:rounded-[2.5rem] sm:p-8 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
                <div>
                  <SectionLabel index="Release" label="Proof and boundaries" tone="light" />
                  <h2 className="max-w-[10ch] font-display text-[clamp(2.6rem,7vw,5.4rem)] leading-[0.9] tracking-[-0.05em] text-white">
                    What the build makes visible.
                  </h2>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <DarkList title="Verification" items={record.verification} />
                  <DarkList title="Limitations" items={record.limitations} />
                </div>
              </div>
            </div>
          </section>

          <OtherWorks currentProjectTitle={project.title} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
  reduceMotion,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function IndexMetaRow({
  label,
  value,
  dataCaseStudyStatus,
}: {
  label: string;
  value: string;
  dataCaseStudyStatus?: CaseStudyId;
}) {
  return (
    <div className="grid gap-1 border-b border-custom-blue/8 py-3 last:border-b-0 sm:grid-cols-[7rem_1fr] sm:gap-4">
      <span className="font-label text-[0.58rem] font-medium uppercase tracking-[0.18em] text-custom-blue/70">
        {label}
      </span>
      <span
        data-case-study-status={dataCaseStudyStatus}
        className="text-sm leading-6 text-custom-blue/82"
      >
        {value}
      </span>
    </div>
  );
}

function IndexCard({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <article className="glass-panel relative flex min-h-[11rem] flex-col overflow-hidden rounded-[1.65rem] bg-white/65 p-5 shadow-[0_12px_40px_rgba(11,17,26,0.04)] sm:rounded-[2rem]">
      <div className="mb-7 flex items-start justify-between gap-3">
        <span className="font-label rounded-full bg-white/62 px-2.5 py-1.5 text-[0.54rem] font-medium uppercase tracking-[0.15em] text-custom-blue/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.66)]">
          {index}
        </span>
        <ArrowUpRight className="h-4 w-4 text-custom-blue/35" />
      </div>
      <h3 className="max-w-[17ch] font-display text-[1.18rem] font-medium leading-[1.04] tracking-[-0.02em] text-custom-blue sm:text-[1.32rem]">
        {title}
      </h3>
      <p className="mt-3 text-[0.78rem] leading-[1.6] text-custom-blue/70">{body}</p>
    </article>
  );
}

function VisualCard({ visual, index }: { visual: CaseStudyVisual; index: number }) {
  return (
    <figure
      className={`group overflow-hidden rounded-[1.65rem] bg-custom-blue p-2.5 shadow-[0_22px_64px_rgba(17,27,40,0.12)] sm:rounded-[2rem] sm:p-3 ${
        (index === 0 && visual.fit !== "contain") || visual.wide ? "sm:col-span-2" : ""
      }`}
    >
      <div className="overflow-hidden rounded-[1.15rem] bg-[#071726] sm:rounded-[1.45rem]">
        <div className="relative aspect-[16/10]">
          <Image
            src={visual.src}
            alt={visual.alt}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 580px"
            className={`${visual.fit === "contain" ? "object-contain p-4" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.02]`}
          />
        </div>
      </div>
      <figcaption className="px-1 pb-1 pt-4 text-[0.75rem] leading-6 text-white/68">
        {visual.caption}
      </figcaption>
    </figure>
  );
}

function DarkList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <h3 className="font-label text-[0.64rem] font-medium uppercase tracking-[0.2em] text-custom-teal">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-[0.86rem] leading-6 text-white/70">
        {items.map((item) => (
          <li key={item} className="border-t border-white/10 pt-3 first:border-t-0 first:pt-0">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessStep({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  return (
    <li className="grid gap-3 border-b border-custom-blue/12 py-7 sm:grid-cols-[4rem_minmax(0,0.72fr)_minmax(0,1.28fr)] sm:gap-6 sm:py-8">
      <span className="font-label text-[0.62rem] font-medium tracking-[0.18em] text-custom-blue/45">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="max-w-[18ch] font-display text-[1.3rem] font-medium leading-[1.08] tracking-[-0.02em] text-custom-blue">
        {title}
      </h3>
      <p className="max-w-[62ch] text-[0.84rem] leading-6 text-custom-blue/68">{body}</p>
    </li>
  );
}
