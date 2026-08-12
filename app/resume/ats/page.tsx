import Link from "next/link";
import { resume } from "../../data/resume";
import { privateContact } from "../../data/private-contact.server";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b border-black/15 pb-2 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-black/70">
      {children}
    </h2>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm leading-6 text-black/80">
          <span className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-black/40" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ExperienceItem({
  role,
  company,
  period,
  bullets,
}: {
  role: string;
  company: string;
  period: string;
  bullets: readonly string[];
}) {
  return (
    <article className="space-y-3">
      <div className="flex flex-col gap-1 border-b border-black/10 pb-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-[1.05rem] font-semibold leading-6 text-black">
            {role}
          </h3>
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-black/55">
            {company}
          </p>
        </div>
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-black/45">
          {period}
        </p>
      </div>
      <BulletList items={bullets} />
    </article>
  );
}

export default function AtsResumePage() {
  return (
    <main className="ats-resume-route min-h-screen bg-white text-[#111b28]">
      <div className="mx-auto max-w-4xl px-6 py-8 sm:px-8 sm:py-10 print:px-[16mm] print:py-[14mm]">
        <div className="mb-8 flex items-center justify-between gap-4 print:hidden">
          <Link
            href="/resume"
            className="text-sm font-semibold text-black/60 transition-colors hover:text-black"
          >
            Back to styled resume
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-black/60 transition-colors hover:text-black"
          >
            Portfolio
          </Link>
        </div>

        <header className="border-b border-black/15 pb-6">
          <p className="text-[0.78rem] font-bold uppercase tracking-[0.28em] text-black/48">
            ATS Resume
          </p>
          <h1 className="mt-3 text-[clamp(2.35rem,5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-black">
            {resume.name}
          </h1>
          <p className="mt-3 max-w-3xl text-[1.05rem] leading-7 text-black/78">
            {resume.title} - {resume.descriptor}
          </p>

          <address className="mt-5 space-y-1.5 not-italic text-sm leading-6 text-black/72">
            <p>Location: {resume.location}</p>
            <p>
              Email:{" "}
              <a
                href={`mailto:${resume.email}`}
                className="font-medium text-black underline decoration-black/20 underline-offset-2"
              >
                {resume.email}
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href={`tel:${privateContact.phone}`}
                className="font-medium text-black underline decoration-black/20 underline-offset-2"
              >
                {privateContact.phone}
              </a>
            </p>
            <p>
              Website:{" "}
              <a
                href={`https://${resume.website}`}
                className="font-medium text-black underline decoration-black/20 underline-offset-2"
              >
                {resume.website}
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href={`https://${resume.linkedin}`}
                className="font-medium text-black underline decoration-black/20 underline-offset-2"
              >
                {resume.linkedin}
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href={`https://${resume.github}`}
                className="font-medium text-black underline decoration-black/20 underline-offset-2"
              >
                {resume.github}
              </a>
            </p>
          </address>
        </header>

        <div className="ats-content mt-7 space-y-7">
          <section>
            <SectionHeading>Summary</SectionHeading>
            <p className="mt-4 text-sm leading-7 text-black/80">{resume.profile}</p>
          </section>

          <section>
            <SectionHeading>Experience</SectionHeading>
            <div className="mt-4 space-y-6">
              {resume.experience.map((job) => (
                <ExperienceItem
                  key={`${job.company}-${job.role}`}
                  role={job.role}
                  company={job.company}
                  period={job.period}
                  bullets={job.bullets}
                />
              ))}
            </div>
          </section>

          <section>
            <SectionHeading>Technical Skills</SectionHeading>
            <div className="mt-4 space-y-2 text-sm leading-6 text-black/80">
              {resume.skillGroups.map((group) => (
                <p key={group.label}>
                  <span className="font-semibold text-black">{group.label}:</span>{" "}
                  {group.items.join(", ")}
                </p>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading>Education</SectionHeading>
            <div className="mt-4 space-y-4">
              {resume.education.map((education) => (
                <article
                  key={`${education.school}-${education.degree}`}
                  className="space-y-2"
                >
                  <div className="flex flex-col gap-1 border-b border-black/10 pb-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h3 className="text-[1.05rem] font-semibold leading-6 text-black">
                        {education.degree}
                      </h3>
                      <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-black/55">
                        {education.school}
                      </p>
                    </div>
                    <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-black/45">
                      {education.period}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading>Languages</SectionHeading>
            <p className="mt-4 text-sm leading-6 text-black/80">
              {resume.languages
                .map((language) => `${language.name} (${language.level})`)
                .join(" | ")}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
