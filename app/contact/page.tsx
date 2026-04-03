import Link from "next/link";
import LinkedInIcon from "../../public/icons/linkedin";
import OpenResumeIcon from "../../public/icons/openResume";
import GitHubIcon from "../../public/icons/github";

export default function Contact() {
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
            02 / Connection
          </p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.06em] text-custom-blue">
            Ready for the next bold build.
          </h1>
          <p className="max-w-2xl text-[clamp(1.1rem,2vw,1.25rem)] text-custom-blue/72 leading-relaxed mt-4">
            If you need a UX-minded engineer who can think visually, move fast in code, and perfect the end product, let’s talk. Based in Singapore, shipping globally.
          </p>
        </div>

        <div className="glass-panel group relative flex flex-col overflow-hidden rounded-[2.5rem] border-white/80 bg-white/65 p-8 sm:p-12 shadow-[0_16px_48px_rgba(11,17,26,0.04)] transition-all duration-300">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="mailto:themarcellvarga@gmail.com"
              className="flex flex-col gap-2 group/link"
            >
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-custom-blue/40 px-1">
                Direct
              </p>
              <div className="rounded-2xl border border-custom-blue/5 bg-white/50 p-4 transition-all duration-300 group-hover/link:bg-white group-hover/link:border-custom-blue/15 group-hover/link:shadow-sm">
                <span className="text-[1rem] font-semibold text-custom-blue">themarcellvarga@gmail.com</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/marcellvarga/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-2 group/link"
            >
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-custom-blue/40 px-1">
                Social
              </p>
              <div className="rounded-2xl border border-custom-blue/5 bg-white/50 p-4 transition-all duration-300 group-hover/link:bg-white group-hover/link:border-custom-blue/15 group-hover/link:shadow-sm flex items-center justify-between">
                <span className="text-[1rem] font-semibold text-custom-blue">LinkedIn</span>
                <LinkedInIcon className="w-4 h-4 text-custom-blue/40 group-hover/link:text-custom-blue" />
              </div>
            </a>
            <a
              href="https://github.com/TheMarcellVarga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-2 group/link"
            >
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-custom-blue/40 px-1">
                Source
              </p>
              <div className="rounded-2xl border border-custom-blue/5 bg-white/50 p-4 transition-all duration-300 group-hover/link:bg-white group-hover/link:border-custom-blue/15 group-hover/link:shadow-sm flex items-center justify-between">
                <span className="text-[1rem] font-semibold text-custom-blue">GitHub</span>
                <GitHubIcon className="w-4 h-4 text-custom-blue/40 group-hover/link:text-custom-blue" />
              </div>
            </a>
          </div>
        </div>

        <Link
          href="/"
          className="text-sm sm:text-base text-custom-blue font-semibold hover:text-custom-blue/80 transition-colors duration-300"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
