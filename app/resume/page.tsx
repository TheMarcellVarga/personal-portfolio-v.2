"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "../header";
import Footer from "../footer";
import { PageBackground } from "../components/PageBackground";
import ResumeActions from "./ResumeActions";
import { resume } from "../data/resume";

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  },
});

function SidebarTitle({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <span className="mb-2 block h-px w-10 bg-[#67d9ff]" />
      <h2 className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/48">
        {children}
      </h2>
    </div>
  );
}

function MainSection({
  title,
  index,
  children,
}: {
  title: string;
  index: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[8px] font-bold tracking-[0.12em] text-[#67d9ff]">
          {index}
        </span>
        <h2 className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/64">
          {title}
        </h2>
        <span className="h-px flex-1 bg-white/12" />
      </div>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href?: string;
}) {
  const content = (
    <>
      <Icon className="mt-[2px] h-3 w-3 shrink-0 text-[#67d9ff]" />
      <span className="break-words">{label}</span>
    </>
  );

  if (!href) {
    return <div className="flex items-start gap-2 text-[9px] leading-4 text-white/66">{content}</div>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-start gap-2 text-[9px] leading-4 text-white/66 transition-colors hover:text-white"
    >
      {content}
    </a>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-[10px] leading-[1.45] text-white/68">
          <span className="mt-[0.34rem] h-1 w-1 shrink-0 rounded-full bg-[#67d9ff]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CompactList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item} className="text-[9px] leading-[1.4] text-white/66">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ResumePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="resume-route relative min-h-screen print:bg-[#081522]">
      <div className="print:hidden">
        <PageBackground />
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <main className="relative z-10 px-4 pb-24 pt-32 sm:px-6 lg:px-8 print:p-0">
        <div className="mx-auto max-w-6xl">
          <motion.div
            {...fadeInUp(0)}
            className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end print:hidden"
          >
            <div className="max-w-3xl">
              <p className="font-label text-[0.68rem] font-medium uppercase tracking-[0.28em] text-custom-blue/45">
                Resume / 2026
              </p>
              <h1 className="mt-3 font-display text-[clamp(2.3rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-custom-blue">
                Design-engineering work, formatted for the current chapter.
              </h1>
              <p className="mt-5 max-w-2xl text-[1rem] leading-7 text-custom-blue/68">
                A print-ready A4 resume built around UX/UI engineering,
                frontend delivery, design systems, and AI-aware product work.
              </p>
            </div>
            <ResumeActions />
          </motion.div>

          <motion.article
            {...fadeInUp(0.08)}
            className="resume-sheet relative mx-auto overflow-hidden rounded-[1.5rem] border border-white/12 bg-[#081522] shadow-[0_30px_110px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.08)] sm:rounded-[1.9rem] print:rounded-none print:border-0 print:shadow-none"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_4%,rgba(76,207,255,0.16),transparent_24%),linear-gradient(145deg,rgba(255,255,255,0.025),transparent_44%)]" />
            <div className="relative grid min-h-[297mm] grid-cols-1 md:grid-cols-[58mm_1fr] print:grid-cols-[58mm_1fr]">
              <aside className="relative border-b border-white/10 bg-[#0b1b29]/84 px-5 py-6 md:border-b-0 md:border-r print:border-b-0 print:border-r">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(76,207,255,0.1),transparent_19%)]" />
                <div className="relative mx-auto max-w-[250px] md:max-w-none">
                  <div className="w-full">
                    <div className="mx-auto flex w-full max-w-[9.5rem] items-end justify-center overflow-hidden rounded-[1rem] border border-white/12 bg-white/8 px-2 pt-2 shadow-[0_12px_32px_rgba(0,0,0,0.22)] md:max-w-[10.5rem]">
                      <Image
                        src={resume.photo}
                        alt={resume.name}
                        width={1210}
                        height={1777}
                        priority
                        className="block h-auto w-full self-end object-contain object-center"
                      />
                    </div>
                  </div>

                  <div className="mt-5 space-y-2">
                    <ContactItem icon={Mail} label={resume.email} href={`mailto:${resume.email}`} />
                    <ContactItem icon={Phone} label={resume.phone} />
                    <ContactItem icon={Globe} label={resume.website} href={`https://${resume.website}`} />
                    <ContactItem icon={Linkedin} label={resume.linkedin} href={`https://${resume.linkedin}`} />
                    <ContactItem icon={Github} label={resume.githubHandle} href={`https://${resume.github}`} />
                    <ContactItem icon={MapPin} label={resume.location} />
                  </div>

                  <div className="mt-6 space-y-5">
                    <section>
                      <SidebarTitle>Core Strengths</SidebarTitle>
                      <div className="mt-2.5">
                        <CompactList items={resume.coreStrengths} />
                      </div>
                    </section>

                    <section>
                      <SidebarTitle>Technical Toolkit</SidebarTitle>
                      <div className="mt-2.5">
                        <CompactList items={resume.technicalSkills} />
                      </div>
                    </section>

                    <section>
                      <SidebarTitle>Languages</SidebarTitle>
                      <div className="mt-2.5 space-y-1.5">
                        {resume.languages.map((language) => (
                          <div key={language.name}>
                            <p className="text-[9px] font-semibold leading-4 text-white/76">
                              {language.name}
                            </p>
                            <p className="text-[8px] leading-3 text-white/42">
                              {language.level}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              </aside>

              <div className="relative px-6 py-7 sm:px-8 print:px-7 print:py-6">
                <header className="border-b border-white/12 pb-5">
                  <div className="flex items-center gap-3">
                    <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-[#67d9ff]">
                      UX/UI Engineer
                    </p>
                    <span className="h-px flex-1 bg-[#67d9ff]/24" />
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/32">
                      Singapore / 2026
                    </p>
                  </div>
                  <h1 className="mt-5 font-display text-[2.8rem] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
                    {resume.name}
                  </h1>
                  <p className="mt-3 max-w-xl text-[1rem] font-medium leading-6 text-white/66">
                    {resume.title}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {["Product UX", "Frontend", "Design Systems", "AI Interfaces"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#67d9ff]/8 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.16em] text-[#a4e9ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </header>

                <div className="space-y-5 pt-5">
                  <MainSection title="Profile" index="01">
                    <div className="space-y-2">
                      {resume.profile.map((paragraph) => (
                        <p key={paragraph} className="text-[10.5px] leading-[1.55] text-white/68">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </MainSection>

                  <MainSection title="Experience" index="02">
                    <div className="space-y-5">
                      {resume.experience.map((job) => (
                        <article key={`${job.company}-${job.role}`}>
                          <div className="mb-2.5 flex items-start justify-between gap-4 border-b border-white/8 pb-2">
                            <div>
                              <h3 className="text-[13px] font-semibold text-white">
                                {job.role}
                              </h3>
                              <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-[#67d9ff]/78">
                                {job.company}
                              </p>
                            </div>
                            <p className="shrink-0 font-mono text-[8px] uppercase tracking-[0.12em] text-white/42">
                              {job.period}
                            </p>
                          </div>
                          <BulletList items={job.bullets} />
                        </article>
                      ))}
                    </div>
                  </MainSection>

                  <MainSection title="Education" index="03">
                    {resume.education.map((education) => (
                      <article key={`${education.school}-${education.degree}`}>
                        <div className="mb-2.5 flex items-start justify-between gap-4 border-b border-white/8 pb-2">
                          <div>
                            <h3 className="text-[13px] font-semibold text-white">
                              {education.degree}
                            </h3>
                            <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.18em] text-[#67d9ff]/78">
                              {education.school}
                            </p>
                          </div>
                          <p className="shrink-0 font-mono text-[8px] uppercase tracking-[0.12em] text-white/42">
                            {education.period}
                          </p>
                        </div>
                        <BulletList items={education.details} />
                      </article>
                    ))}
                  </MainSection>
                </div>
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
