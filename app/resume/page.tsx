"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Globe, Github, Linkedin, MapPin, Phone, ArrowLeft, Download } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../header";
import Footer from "../footer";
import { PageBackground } from "../components/PageBackground";
import { SectionLabel } from "../components/SectionLabel";
import { resume } from "../data/resume";

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  },
});

function InfoRow({
  icon: Icon,
  href,
  label,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  label: string;
  external?: boolean;
}) {
  const content = (
    <span className="flex items-start gap-2.5">
      <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#67d9ff]" />
      <span>{label}</span>
    </span>
  );

  if (!href) {
    return <div className="flex items-start gap-2.5 text-white/78">{content}</div>;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex items-start gap-2.5 text-white/78 transition-colors duration-300 hover:text-white"
    >
      {content}
    </a>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-3 text-custom-blue/55">
      <span className="h-px w-8 bg-custom-blue/20" />
      <h2 className="text-[10px] font-semibold uppercase tracking-[0.34em]">{children}</h2>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-custom-blue/10 bg-custom-blue/[0.04] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-custom-blue/70">
      {children}
    </span>
  );
}

function SurfaceCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[1.2rem] border border-custom-blue/10 bg-custom-blue/[0.03] p-4 shadow-[0_12px_30px_rgba(7,20,38,0.04)]">
      {children}
    </div>
  );
}

export default function ResumePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative overflow-x-clip print:bg-white">
      <div className="print:hidden">
        <PageBackground />
        <Header 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
        />
      </div>

      <main className="relative z-10 px-4 pb-24 pt-32 sm:px-6 lg:px-10 print:p-0 print:pt-0">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex items-center justify-between print:hidden">
            <motion.div {...fadeInUp(0)}>
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-custom-blue/60 transition-colors hover:text-custom-blue"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to home
              </Link>
            </motion.div>

            <motion.button
              {...fadeInUp(0.1)}
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full bg-[#0a2135] px-6 py-3 text-sm font-semibold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#0d2940]"
            >
              <Download className="h-4 w-4" />
              Save as PDF
            </motion.button>
          </div>

          <motion.article 
            {...fadeInUp(0.2)}
            className="resume-sheet mx-auto w-full max-w-[210mm] overflow-hidden rounded-[2.5rem] border border-white/80 bg-white shadow-[0_50px_150px_rgba(7,20,38,0.12)] print:m-0 print:max-w-none print:rounded-none print:border-0 print:shadow-none"
          >
            <div className="grid min-h-[297mm] grid-cols-1 lg:grid-cols-[65mm_1fr] print:grid-cols-[65mm_1fr]">
              <aside className="relative flex h-full flex-col overflow-hidden bg-[#0a1622] px-6 py-8 text-white before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,_rgba(103,217,255,0.12),_transparent_40%)] print:py-6">
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
                    Portfolio CV
                  </p>
                </div>

                <div className="relative z-10 mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-1">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[1.8rem]">
                    <Image
                      src={resume.photo}
                      alt={resume.name}
                      fill
                      priority
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="relative z-10 mt-8 space-y-4 text-[11px] leading-5">
                  <InfoRow icon={Globe} href={`https://${resume.website}`} label={resume.website} external />
                  <InfoRow icon={Phone} label={resume.phone} />
                  <InfoRow icon={Mail} href={`mailto:${resume.email}`} label={resume.email} />
                  <InfoRow icon={Linkedin} href={`https://${resume.linkedin}`} label="Marcell Varga" external />
                  <InfoRow icon={Github} href={`https://${resume.github}`} label={resume.githubHandle} external />
                  <InfoRow icon={MapPin} label={resume.location} />
                </div>

                <section className="relative z-10 mt-8">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Skills & Tech</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {resume.stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-white/60">
                        {item}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="relative z-10 mt-8">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Languages</h2>
                  <div className="mt-4 space-y-3">
                    {resume.languages.map((item) => (
                      <div key={item.name} className="flex justify-between items-center text-white/80">
                        <span className="text-[11px] font-bold uppercase tracking-[0.1em]">{item.name}</span>
                        <span className="text-[10px] text-white/40">{item.level}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </aside>

              <div className="px-8 py-10 sm:px-10 print:py-8">
                <header>
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-custom-blue/30">Curriculum Vitae</p>
                  <h1 className="mt-3 font-display text-5xl font-medium tracking-tight text-custom-blue">
                    {resume.name}
                  </h1>
                  <p className="mt-2 text-lg font-medium text-custom-blue/60">{resume.title}</p>
                </header>

                <div className="mt-8 space-y-4 text-[13px] leading-relaxed text-custom-blue/70">
                  {resume.summary.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  <SurfaceCard>
                    <SectionHeading>Expertise</SectionHeading>
                    <div className="flex flex-wrap gap-2">
                      {resume.keywords.map((item) => <Pill key={item}>{item}</Pill>)}
                    </div>
                  </SurfaceCard>
                  <SurfaceCard>
                    <SectionHeading>Toolbox</SectionHeading>
                    <div className="flex flex-wrap gap-2">
                      {resume.tooling.map((item) => <Pill key={item}>{item}</Pill>)}
                    </div>
                  </SurfaceCard>
                </div>

                <section className="mt-10">
                  <SectionHeading>Experience</SectionHeading>
                  <div className="space-y-6">
                    {resume.experience.map((job) => (
                      <div key={job.company} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-custom-teal">
                        <div className="flex justify-between items-baseline">
                          <h3 className="text-xl font-bold text-custom-blue">{job.role}</h3>
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-custom-blue/40">{job.period}</span>
                        </div>
                        <p className="font-semibold text-custom-blue/50 uppercase tracking-widest text-[10px] mt-1">{job.company}</p>
                        <ul className="mt-4 space-y-2">
                          {job.bullets.map((bullet, i) => (
                            <li key={i} className="text-[12px] leading-relaxed text-custom-blue/60">• {bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mt-10">
                  <SectionHeading>Education</SectionHeading>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {resume.education.map((edu) => (
                      <div key={edu.degree} className="rounded-2xl border border-custom-blue/5 bg-custom-blue/[0.02] p-6">
                        <h3 className="font-bold text-custom-blue">{edu.degree}</h3>
                        <p className="text-xs font-semibold text-custom-blue/50 mt-1">{edu.school}</p>
                        <p className="text-[10px] font-bold text-custom-blue/30 mt-2 uppercase tracking-widest">{edu.period}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </motion.article>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
