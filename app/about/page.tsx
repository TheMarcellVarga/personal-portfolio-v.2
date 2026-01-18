import Link from "next/link";
import LinkedInIcon from "../../public/icons/linkedin";
import OpenResumeIcon from "../../public/icons/openResume";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-200 text-custom-blue px-4 sm:px-6 md:px-10 py-10 sm:py-12">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-custom-blue/60">
            About
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
            Crafting products with clarity, momentum, and purpose.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-custom-blue/80 leading-relaxed">
            I partner with teams to uncover the right problems, translate them into
            strong UX strategy, and deliver frontend experiences that feel effortless
            for users. My focus is building systems that scale while keeping the human
            experience central.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8">
          <div className="rounded-xl border border-custom-blue/10 bg-gray-100/80 p-5 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">What I do</h2>
            <p className="text-sm sm:text-base text-custom-blue/80 leading-relaxed">
              Product discovery, interaction design, prototyping, and frontend
              engineering with an emphasis on measurable outcomes and smooth delivery.
            </p>
          </div>
          <div className="rounded-xl border border-custom-blue/10 bg-gray-100/80 p-5 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">How I work</h2>
            <p className="text-sm sm:text-base text-custom-blue/80 leading-relaxed">
              I collaborate closely with product, design, and engineering to move from
              ideas to shipped experiences. I value crisp documentation, rapid
              iteration, and design systems that make teams faster.
            </p>
          </div>
          <div className="rounded-xl border border-custom-blue/10 bg-gray-100/80 p-5 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Currently</h2>
            <p className="text-sm sm:text-base text-custom-blue/80 leading-relaxed">
              Exploring AI-augmented UX patterns and modern product storytelling while
              continuing to help teams build reliable, elegant interfaces.
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
