"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
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
    <div className="space-y-2">
      <span className="block h-[2px] w-16 rounded-full bg-[linear-gradient(90deg,rgba(76,207,255,0.7),rgba(76,207,255,0.22),transparent)]" />
      <h2 className="text-[10px] font-semibold uppercase tracking-[0.32em] text-custom-blue/45">
        {children}
      </h2>
    </div>
  );
}

function MainSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-3">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-custom-blue/55">
          {title}
        </h2>
        <span className="h-px flex-1 bg-custom-blue/10" />
      </div>
      <div className="mt-4">{children}</div>
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
      <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-custom-blue/45" />
      <span className="break-words">{label}</span>
    </>
  );

  if (!href) {
    return <div className="flex items-start gap-2.5 text-[12px] leading-5 text-custom-blue/72">{content}</div>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-start gap-2.5 text-[12px] leading-5 text-custom-blue/72 transition-colors hover:text-custom-blue"
    >
      {content}
    </a>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-[12.5px] leading-[1.55] text-custom-blue/78">
          <span className="mt-[0.48rem] h-1.5 w-1.5 shrink-0 rounded-full bg-custom-blue/30" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CompactList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="text-[12px] leading-5 text-custom-blue/78">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ResumePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative overflow-x-clip print:bg-white">
      <div className="print:hidden">
        <PageBackground />
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <main className="relative z-10 px-4 pb-24 pt-32 sm:px-6 lg:px-8 print:p-0 print:pt-0">
        <div className="mx-auto max-w-6xl">
          <motion.div
            {...fadeInUp(0)}
            className="mb-10 flex items-center justify-end print:hidden"
          >
            <ResumeActions />
          </motion.div>

          <motion.article
            {...fadeInUp(0.08)}
            className="resume-sheet relative mx-auto overflow-hidden rounded-[1.75rem] border border-black/8 bg-white shadow-[0_45px_120px_rgba(17,27,40,0.12)] print:rounded-none print:border-0 print:shadow-none"
          >
            <div className="pointer-events-none absolute right-8 top-12 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(76,207,255,0.16),rgba(76,207,255,0.05)_42%,transparent_72%)] blur-2xl" />
            <div className="grid min-h-[297mm] grid-cols-1 lg:grid-cols-[68mm_1fr] print:grid-cols-[68mm_1fr]">
              <aside className="relative border-b border-black/8 bg-[#f3f5f7] px-6 py-8 lg:border-b-0 lg:border-r print:border-b-0 print:border-r print:py-7">
                <div className="pointer-events-none absolute left-0 top-0 h-28 w-full bg-[linear-gradient(180deg,rgba(76,207,255,0.11),transparent)]" />
                <div className="mx-auto max-w-[220px] lg:max-w-none">
                  <div className="relative mx-auto h-36 w-28 overflow-hidden rounded-[1.35rem] border border-black/8 bg-white shadow-[0_16px_36px_rgba(17,27,40,0.08)]">
                    <Image
                      src={resume.photo}
                      alt={resume.name}
                      fill
                      priority
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="mt-6 space-y-3">
                    <ContactItem
                      icon={Mail}
                      label={resume.email}
                      href={`mailto:${resume.email}`}
                    />
                    <ContactItem
                      icon={Phone}
                      label={resume.phone}
                    />
                    <ContactItem
                      icon={Globe}
                      label={resume.website}
                      href={`https://${resume.website}`}
                    />
                    <ContactItem
                      icon={Linkedin}
                      label={resume.linkedin}
                      href={`https://${resume.linkedin}`}
                    />
                    <ContactItem
                      icon={Github}
                      label={resume.githubHandle}
                      href={`https://${resume.github}`}
                    />
                    <ContactItem icon={MapPin} label={resume.location} />
                  </div>

                  <div className="mt-8 space-y-6">
                    <section>
                      <SidebarTitle>Core Strengths</SidebarTitle>
                      <div className="mt-3">
                        <CompactList items={resume.coreStrengths} />
                      </div>
                    </section>

                    <section>
                      <SidebarTitle>Practical Skills</SidebarTitle>
                      <div className="mt-3">
                        <CompactList items={resume.practicalSkills} />
                      </div>
                    </section>

                    <section>
                      <SidebarTitle>Technical Skills</SidebarTitle>
                      <div className="mt-3">
                        <CompactList items={resume.technicalSkills} />
                      </div>
                    </section>

                    <section>
                      <SidebarTitle>Languages</SidebarTitle>
                      <div className="mt-3 space-y-2.5">
                        {resume.languages.map((language) => (
                          <div
                            key={language.name}
                            className="space-y-0.5 border-b border-black/6 pb-2 last:border-0 last:pb-0"
                          >
                            <p className="text-[12px] font-medium text-custom-blue">
                              {language.name}
                            </p>
                            <p className="text-[11px] leading-4 text-custom-blue/55">
                              {language.level}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              </aside>

              <div className="relative px-6 py-8 sm:px-8 lg:px-9 print:px-8 print:py-7">
                <header className="relative border-b border-black/8 pb-6">
                  <div className="pointer-events-none absolute -bottom-px left-0 h-[2px] w-40 bg-[linear-gradient(90deg,rgba(76,207,255,0.78),rgba(76,207,255,0.18),transparent)]" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-custom-blue/45">
                    Resume
                  </p>
                  <h1 className="mt-3 font-display text-[2.55rem] font-semibold tracking-[-0.04em] text-custom-blue">
                    {resume.name}
                  </h1>
                  <p className="mt-2 text-[1.02rem] font-medium text-custom-blue/60">
                    {resume.title}
                  </p>
                </header>

                <div className="space-y-8 pt-6">
                  <MainSection title="Profile">
                    <div className="space-y-3">
                      {resume.profile.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-[13px] leading-[1.65] text-custom-blue/78"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </MainSection>

                  <MainSection title="Experience">
                    <div className="space-y-7">
                      {resume.experience.map((job) => (
                        <article key={`${job.company}-${job.role}`}>
                          <div className="flex flex-col gap-2 border-b border-black/6 pb-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <h3 className="text-[1.06rem] font-semibold text-custom-blue">
                                {job.role}
                              </h3>
                              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-custom-blue/48">
                                {job.company}
                              </p>
                            </div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-custom-blue/42">
                              {job.period}
                            </p>
                          </div>
                          <div className="pt-3">
                            <BulletList items={job.bullets} />
                          </div>
                        </article>
                      ))}
                    </div>
                  </MainSection>

                  <MainSection title="Education">
                    <div className="space-y-4">
                      {resume.education.map((education) => (
                        <article key={`${education.school}-${education.degree}`}>
                          <div className="flex flex-col gap-2 border-b border-black/6 pb-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <h3 className="text-[1.03rem] font-semibold text-custom-blue">
                                {education.degree}
                              </h3>
                              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-custom-blue/48">
                                {education.school}
                              </p>
                            </div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-custom-blue/42">
                              {education.period}
                            </p>
                          </div>
                          <div className="pt-3">
                            <BulletList items={education.details} />
                          </div>
                        </article>
                      ))}
                    </div>
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
