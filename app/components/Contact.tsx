"use client";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import LinkedInIcon from "../../public/icons/linkedin";
import OpenResumeIcon from "../../public/icons/openResume";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex justify-center items-center mt-20 mb-32 w-full z-20 px-4 md:px-8 lg:px-12"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-5xl"
      >
        {/* Subtle, premium glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent/5 via-white/5 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
        
        <div className="relative bg-[#050505] rounded-3xl p-8 sm:p-12 md:p-16 border border-white/5 overflow-hidden">
          
          {/* Decorative geometric elements */}
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start md:items-center relative z-10">
            <div className="w-full md:flex-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-left mb-6 tracking-tight">
                Ready to build <br/>
                <span className="text-gray-400">
                  something exceptional?
                </span>
              </h2>
              <p className="text-gray-500 text-left text-sm sm:text-base max-w-lg leading-relaxed font-medium">
                Let's architect solutions that make a lasting impact. Whether it's a new product or elevating an existing experience, I'm ready to help.
              </p>
            </div>

            <div className="flex-shrink-0 flex justify-start md:justify-end mt-2 sm:mt-0">
              <a
                href="mailto:themarcellvarga@gmail.com"
                className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_4px_14px_0_rgba(255,255,255,0.1)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.15)]"
                aria-label="Send email to Marcell Varga"
              >
                <span className="relative z-10 text-sm">
                  Start a Conversation
                </span>
                <ArrowRightIcon className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/5 relative z-10">
            <div className="flex flex-row flex-wrap gap-8 justify-start">
              <a
                href="https://www.linkedin.com/in/marcellvarga/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-start gap-1.5 text-gray-500 hover:text-white transition-colors duration-300"
                aria-label="Connect on LinkedIn"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedInIcon className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white">LinkedIn</span>
                </div>
                <span className="text-xs ml-7.5 opacity-60">Professional Network</span>
              </a>
              
              <a
                href="/MarcellVargaCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-start gap-1.5 text-gray-500 hover:text-white transition-colors duration-300 ml-4 sm:ml-8"
                aria-label="View Resume"
              >
                <div className="flex items-center gap-2.5">
                  <OpenResumeIcon className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" isHover={false} />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white">Resume</span>
                </div>
                <span className="text-xs ml-7.5 opacity-60">Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}