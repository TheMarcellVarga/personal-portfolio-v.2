import Image from "next/image";
import { Mail, Globe, Github, Linkedin, MapPin, Phone } from "lucide-react";
import ResumeActions from "./ResumeActions";
import { resume } from "../data/resume";

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
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(77,141,180,0.14),_transparent_36%),linear-gradient(180deg,_#e7eff5_0%,_#f5f9fc_44%,_#edf4f9_100%)] px-4 py-6 sm:px-6 lg:px-10 print:bg-white print:px-0 print:py-0">
      <div className="mx-auto flex w-full max-w-5xl justify-end">
        <ResumeActions />
      </div>

      <article className="resume-sheet mx-auto mt-6 w-full max-w-[210mm] overflow-hidden rounded-[1.6rem] border border-white/75 bg-white shadow-[0_30px_90px_rgba(7,20,38,0.08)] print:mt-0 print:max-w-none print:rounded-none print:border-0 print:shadow-none">
        <div className="grid min-h-[297mm] grid-cols-1 lg:grid-cols-[62mm_1fr] print:min-h-[297mm] print:grid-cols-[62mm_1fr]">
          <aside className="relative flex h-full flex-col overflow-hidden bg-[#0b1118] px-5 py-6 text-white before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,_rgba(106,211,248,0.16),_transparent_40%)] before:content-[''] print:px-4 print:py-4">
            <div className="relative z-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-white/45">
                2026 Portfolio CV
              </p>
            </div>

            <div className="relative z-10 mt-4 overflow-hidden rounded-[1.35rem] border border-white/12 bg-white/8 p-0">
              <div className="relative h-[78mm] overflow-hidden rounded-[1.1rem] p-0">
                <Image
                  src={resume.photo}
                  alt={`Portrait of ${resume.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 62mm"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <p className="relative z-10 mt-4 text-sm text-white/72">{resume.title}</p>

            <div className="relative z-10 mt-5 space-y-2.5 text-[11px] leading-5 text-white/78">
              <InfoRow icon={Globe} href={`https://${resume.website}`} label={resume.website} external />
              <InfoRow icon={Phone} label={resume.phone} />
              <InfoRow icon={Mail} href={`mailto:${resume.email}`} label={resume.email} />
              <InfoRow icon={Linkedin} href={`https://${resume.linkedin}`} label="Marcell Varga" external />
              <InfoRow icon={Github} href={`https://${resume.github}`} label={resume.githubHandle} external />
              <InfoRow icon={MapPin} label={resume.location} />
            </div>

            <section className="relative z-10 mt-6">
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.34em] text-white/45">
                Core Strengths
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {resume.strengths.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/76"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="relative z-10 mt-6">
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.34em] text-white/45">
                Stack
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {resume.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/76"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="relative z-10 mt-6">
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.34em] text-white/45">
                Languages
              </h2>
              <div className="mt-3 space-y-2">
                {resume.languages.map((item) => (
                  <div key={item.name} className="space-y-0.5 text-white/78">
                    <p className="text-[11px] font-medium text-white">{item.name}</p>
                    <p className="text-[10px] text-white/65">{item.level}</p>
                  </div>
                ))}
              </div>
            </section>

          </aside>

          <div className="px-5 py-6 print:px-5 print:py-5">
            <section>
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-custom-blue/45">
                Curriculum Vitae
              </p>
              <h1 className="mt-2 font-display text-[2.15rem] leading-[0.92] tracking-[-0.08em] text-custom-blue sm:text-[2.35rem]">
                {resume.name}
              </h1>
              <p className="mt-2 text-[1rem] font-medium text-custom-blue/80">{resume.title}</p>

              <div className="mt-4 space-y-2 text-[12px] leading-6 text-custom-blue/74">
                {resume.summary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <div className="mt-5 grid gap-4 xl:grid-cols-2">
              <SurfaceCard>
                <SectionHeading>Keyword Profile</SectionHeading>
                <div className="flex flex-wrap gap-2">
                  {resume.keywords.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </SurfaceCard>

              <SurfaceCard>
                <SectionHeading>Toolbox</SectionHeading>
                <div className="flex flex-wrap gap-2">
                  {resume.tooling.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </SurfaceCard>
            </div>

            <section className="mt-5">
              <SectionHeading>Experience</SectionHeading>
              <div className="space-y-4">
                {resume.experience.map((job) => (
                  <SurfaceCard key={`${job.company}-${job.period}`}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <h3 className="font-display text-[1.4rem] leading-[0.96] tracking-[-0.06em] text-custom-blue">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-[13px] font-medium text-custom-blue/68">{job.company}</p>
                      </div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-custom-blue/45">
                        {job.period}
                      </p>
                    </div>
                    <ul className="mt-3 space-y-1.5 text-[11px] leading-5 text-custom-blue/72">
                      {job.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-[0.58rem] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-custom-teal" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </SurfaceCard>
                ))}
              </div>
            </section>

            <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_0.95fr]">
              <section>
                <SectionHeading>Education</SectionHeading>
                <div className="space-y-4">
                  {resume.education.map((item) => (
                    <SurfaceCard key={item.degree}>
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <div>
                          <h3 className="font-display text-[1.3rem] leading-[0.98] tracking-[-0.05em] text-custom-blue">
                            {item.degree}
                          </h3>
                          <p className="mt-1 text-[13px] font-medium text-custom-blue/68">{item.school}</p>
                        </div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-custom-blue/45">
                          {item.period}
                        </p>
                      </div>

                      <div className="mt-3 space-y-2 text-[11px] leading-5 text-custom-blue/72">
                        {item.details.map((detail) => (
                          <p key={detail}>{detail}</p>
                        ))}
                      </div>
                    </SurfaceCard>
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading>2026 Focus</SectionHeading>
                <SurfaceCard>
                  <div className="space-y-3 text-[11px] leading-5 text-custom-blue/72">
                    {resume.focus.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {resume.strengths.slice(0, 4).map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </SurfaceCard>
              </section>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
