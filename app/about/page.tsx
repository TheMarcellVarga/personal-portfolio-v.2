import Link from "next/link";
import LinkedInIcon from "../../public/icons/linkedin";
import OpenResumeIcon from "../../public/icons/openResume";

export default function About() {
  return (
    <main className="min-h-screen bg-[#fafafc] relative text-custom-blue overflow-x-hidden">
      <div
        className="
          absolute inset-0 -z-10
          bg-[linear-gradient(rgba(11,17,26,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(11,17,26,0.015)_1px,transparent_1px)] bg-[size:100px_100px]
          [mask-image:radial-gradient(circle_at_top,black_60%,transparent_95%)]
          pointer-events-none
        "
        aria-hidden="true"
      />
      <div className="max-w-4xl mx-auto flex flex-col gap-10 px-6 sm:px-10 py-20 sm:py-32 relative z-10">
        <div className="flex flex-col gap-5">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.32em] text-custom-blue/45">
            01 / Identity
          </p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.06em] text-custom-blue">
            Crafting products with clarity and velocity.
          </h1>
          <p className="max-w-2xl text-[clamp(1.1rem,2vw,1.25rem)] text-custom-blue/72 leading-relaxed mt-4">
            Danish precision. Singaporean ambition. I architect high-performance interfaces that don’t just look premium—they execute flawlessly. My focus is building systems that scale while keeping the human experience central.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="glass-panel rounded-[2.5rem] border-white/80 bg-white/65 p-8 sm:p-10 shadow-[0_16px_48px_rgba(11,17,26,0.04)] group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(11,17,26,0.06)]">
            <h2 className="font-display text-[1.8rem] font-medium tracking-tight mb-4 text-custom-blue/90">Technical Philosophy</h2>
            <p className="text-[1.05rem] text-custom-blue/72 leading-relaxed">
              Product discovery, interaction physics, and frontend engineering with an emphasis on measurable performance and absolute smoothness. I obsess over the mechanics so the user doesn't have to.
            </p>
          </div>
          <div className="glass-panel rounded-[2.5rem] border-white/80 bg-white/65 p-8 sm:p-10 shadow-[0_16px_48px_rgba(11,17,26,0.04)] group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(11,17,26,0.06)]">
            <h2 className="font-display text-[1.8rem] font-medium tracking-tight mb-4 text-custom-blue/90">Execution Layer</h2>
            <p className="text-[1.05rem] text-custom-blue/72 leading-relaxed">
              I collaborate deeply with product and engineering to move from high-fidelity prototypes to shipped experiences. I value crisp system documentation, tactical user insight, and architectures that allow teams to move fast.
            </p>
          </div>
          <div className="glass-panel rounded-[2.5rem] border-white/80 bg-white/65 p-8 sm:p-10 shadow-[0_16px_48px_rgba(11,17,26,0.04)] group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(11,17,26,0.06)]">
            <h2 className="font-display text-[1.8rem] font-medium tracking-tight mb-4 text-custom-blue/90">The Chapter</h2>
            <p className="text-[1.05rem] text-custom-blue/72 leading-relaxed">
              Currently architecting modern product storytelling in Singapore, exploring high-fps interaction patterns and the intersection of technical strategy and design execution.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start sm:items-center">
          <Link
            href="/"
            className="text-sm sm:text-base text-custom-blue font-semibold hover:text-custom-blue/80 transition-colors duration-300"
          >
            ← Back to home
          </Link>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/marcellvarga/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-custom-blue/70 hover:text-custom-blue transition-colors duration-300"
            >
              <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">Connect on LinkedIn</span>
            </a>
            <a
              href="/MarcellVargaCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-custom-blue/70 hover:text-custom-blue transition-colors duration-300"
            >
              <OpenResumeIcon className="w-4 h-4 sm:w-5 sm:h-5" isHover={false} />
              <span className="text-xs sm:text-sm">View resume</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
