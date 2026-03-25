"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { projects } from "../data/projects";
import useWindowSize from "../useWindowSize";
import { motion } from "framer-motion";

export default function Projects() {
  const size = useWindowSize();

  return (
    <article
      id="projects-content"
      className="w-full flex flex-col p-4 md:p-8 lg:p-12 z-20"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex flex-col items-center justify-center text-center max-w-2xl mx-auto"
      >
        <h2 className="text-gray-400 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Selected Work
        </h2>
        <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
          Featured Projects
        </div>
      </motion.div>
      
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-6xl flex flex-col gap-8 sm:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="w-full transform-gpu transition-all duration-500 hover:scale-[1.01]"
            >
              <Link
                href={project.link}
                className={`
                  w-full 
                  flex flex-col sm:flex-row
                  gap-6 sm:gap-8 lg:gap-12
                  p-4 sm:p-6 lg:p-8
                  rounded-3xl
                  transition-all duration-500 ease-out 
                  bg-[#0a0a0a]
                  hover:bg-[#111]
                  border border-white/5 hover:border-white/10
                  group relative overflow-hidden
                `}
                aria-label={`View ${project.title} project`}
              >
                {/* Subtle Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/0 via-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="w-full sm:w-1/3 md:w-2/5 lg:w-[400px] relative flex items-center justify-center overflow-hidden rounded-2xl">
                  {project.inProgress ? (
                    <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden bg-black flex flex-col items-center justify-center border border-white/5 transition-colors duration-500">
                      <div className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-2">Coming Soon</div>
                      <div className="text-4xl sm:text-5xl grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500">✨</div>
                    </div>
                  ) : (
                    <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden bg-black border border-white/5">
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.subTitle}`}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1] opacity-90 group-hover:opacity-100"
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-4 w-full sm:w-2/3 md:w-3/5 h-full justify-center relative z-10 py-2">
                  <div className="flex flex-row items-center justify-between w-full">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white transition-all duration-300 tracking-tight">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {project.date}
                    </span>
                  </div>
                  
                  <div className="text-sm md:text-base text-gray-400 font-medium">
                    {project.subTitle}
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.skills.map((skill) => (
                      <div
                        key={skill}
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#141414] text-gray-400 border border-white/5 group-hover:border-white/10 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {!project.inProgress && (
                  <div className="hidden lg:flex w-12 h-full items-center justify-center relative opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 ease-out">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="w-4 h-4 text-white"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  );
}