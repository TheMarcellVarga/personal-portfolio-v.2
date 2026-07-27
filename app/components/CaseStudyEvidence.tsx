import type { CaseStudyRecord } from "../data/case-studies";
import { SectionLabel } from "./SectionLabel";

export function CaseStudyEvidence({ caseStudy }: { caseStudy: CaseStudyRecord }) {
  return (
    <section
      data-case-study-evidence={caseStudy.id}
      className="mt-20 border-t border-custom-blue/10 pt-16 sm:mt-28 sm:pt-20"
    >
      <SectionLabel index="Evidence" label="Case-study record" />
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="font-label text-[0.68rem] font-medium uppercase tracking-[0.18em] text-custom-blue/70">
            {caseStudy.status}
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,5vw,3.7rem)] font-medium leading-[0.94] tracking-[-0.04em] text-custom-blue">
            What the work proves.
          </h2>
          <p className="mt-5 text-[1rem] leading-7 text-custom-blue/72">{caseStudy.problem}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <EvidenceBlock title="Role" items={[caseStudy.role]} />
          <EvidenceBlock title="User" items={[caseStudy.user]} />
          <EvidenceBlock title="Key decisions" items={caseStudy.decisions} />
          <EvidenceBlock title="Verification" items={caseStudy.verification} />
          <EvidenceBlock title="Limitations" items={caseStudy.limitations} />
        </div>
      </div>
    </section>
  );
}

function EvidenceBlock({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <article className="glass-panel rounded-[1.5rem] bg-white/65 p-5 shadow-[0_12px_40px_rgba(11,17,26,0.04)]">
      <h3 className="font-label text-[0.64rem] font-medium uppercase tracking-[0.18em] text-custom-blue/70">
        {title}
      </h3>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-custom-blue/72">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
