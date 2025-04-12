import { ArrowRightIcon } from "@heroicons/react/24/solid";
import LinkedInIcon from "../../public/icons/linkedin";
import OpenResumeIcon from "../../public/icons/openResume";

export default function Contact() {
  return (
    <section
      data-scroll-section
      data-scroll-section-id="contact"
      className="flex justify-center items-center mt-12 mb-24 transform hover:scale-[1.01] transition-all duration-500"
    >
      <div className="relative w-4/5 max-w-4xl">
        <div className="relative bg-gray-100/90 rounded-xl p-8 md:p-12 border border-custom-blue/10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500">
              <h2 className="text-xl md:text-4xl font-bold text-custom-blue text-left mb-6 tracking-tight">
                Building Beyond&nbsp;
                <span className="text-custom-blue/80">Boundaries</span> 🚀
              </h2>
              <p className="text-custom-blue text-left font-bold text-base md:text-xl max-w-3xl">
                Full-stack excellence meets design innovation. Let&apos;s
                architect solutions that make an impact.
              </p>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
              <a
                href="mailto:themarcellvarga@gmail.com"
                className="relative px-5 py-2 text-custom-blue rounded-full group overflow-hidden min-w-36 flex items-center justify-center"
                aria-label="Send email to Marcell Varga"
              >
                <div className="relative z-10 flex items-center justify-center transition-transform duration-300 ease-out transform group-hover:translate-x-0">
                  <span className="transition-colors duration-300 ease-out group-hover:text-gray-50 mr-2">
                    Get&nbsp;in&nbsp;Touch
                  </span>
                  <ArrowRightIcon className="w-5 h-5 transition-all duration-300 ease-out group-hover:text-gray-50 transform group-hover:translate-x-1" />
                </div>
                <div className="absolute inset-0 border-2 border-custom-blue rounded-full"></div>
                <div className="absolute inset-0 bg-custom-blue rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-custom-blue/10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/marcellvarga/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-custom-blue/60 hover:text-custom-blue transition-all duration-300"
                aria-label="Connect on LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
                <span className="text-sm">Let&apos;s connect</span>
              </a>
              <a
                href="/Marcell-Varga-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-custom-blue/60 hover:text-custom-blue transition-all duration-300"
                aria-label="View Resume"
              >
                <OpenResumeIcon className="w-5 h-5" isHover={false} />
                <span className="text-sm">Check out my Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 