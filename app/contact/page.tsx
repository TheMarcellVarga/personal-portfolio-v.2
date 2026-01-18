import Link from "next/link";
import LinkedInIcon from "../../public/icons/linkedin";
import OpenResumeIcon from "../../public/icons/openResume";
import GitHubIcon from "../../public/icons/github";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-200 text-custom-blue px-4 sm:px-6 md:px-10 py-10 sm:py-12">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-custom-blue/60">
            Contact
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
            Let&apos;s talk about your next product.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-custom-blue/80 leading-relaxed">
            Whether you need UX strategy, frontend execution, or a complete product
            refresh, I&apos;d love to hear about your goals.
          </p>
        </div>

        <div className="rounded-xl border border-custom-blue/10 bg-gray-100/80 p-5 sm:p-6 flex flex-col gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-custom-blue/60">
              Email
            </p>
            <a
              href="mailto:themarcellvarga@gmail.com"
              className="text-sm sm:text-base font-semibold text-custom-blue hover:text-custom-blue/80 transition-colors duration-300"
            >
              themarcellvarga@gmail.com
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/marcellvarga/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-custom-blue/70 hover:text-custom-blue transition-colors duration-300"
            >
              <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">LinkedIn</span>
            </a>
            <a
              href="https://github.com/TheMarcellVarga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-custom-blue/70 hover:text-custom-blue transition-colors duration-300"
            >
              <GitHubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">GitHub</span>
            </a>
            <a
              href="/MarcellVargaCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-custom-blue/70 hover:text-custom-blue transition-colors duration-300"
            >
              <OpenResumeIcon className="w-4 h-4 sm:w-5 sm:h-5" isHover={false} />
              <span className="text-xs sm:text-sm">Resume</span>
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
