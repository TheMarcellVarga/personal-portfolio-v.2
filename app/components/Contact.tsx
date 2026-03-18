"use client";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import LinkedInIcon from "../../public/icons/linkedin";
import OpenResumeIcon from "../../public/icons/openResume";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto mt-10 w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
      <div className="flow-panel relative overflow-hidden px-6 py-7 sm:px-8 sm:py-9">
        <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-custom-teal/20 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-custom-blue/55">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-custom-blue sm:text-4xl">
              Let&apos;s build your next high-quality product experience.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-custom-blue/72 sm:text-base">
              Available for selected 2026 collaborations across UX strategy,
              design systems, and frontend implementation.
            </p>
          </div>

          <a
            href="mailto:themarcellvarga@gmail.com"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-custom-blue px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-300 hover:-translate-y-0.5 hover:bg-custom-blue/90"
            style={{ color: "#ffffff" }}
          >
            Get in touch
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="relative z-10 mt-7 flex flex-wrap items-center gap-5 border-t border-custom-blue/12 pt-5">
          <a
            href="https://www.linkedin.com/in/marcellvarga/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-custom-blue/70 transition-colors hover:text-custom-blue"
          >
            <LinkedInIcon className="h-4 w-4" />
            Let&apos;s connect
          </a>
          <a
            href="/MarcellVargaCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-custom-blue/70 transition-colors hover:text-custom-blue"
          >
            <OpenResumeIcon className="h-3 w-3" isHover={false} />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
