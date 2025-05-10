import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { projects } from "../data/projects";
import useWindowSize from "../useWindowSize";
// Temporarily removed filtering functionality
// import { useState, useEffect, useMemo } from "react";

export default function Projects() {
  const size = useWindowSize();
  // Temporarily removed filtering state and logic
  // const [selectedFilter, setSelectedFilter] = useState<string>("All");
  // const [isFilterOpen, setIsFilterOpen] = useState(false);

  // // Extract all unique skills from projects
  // const allSkills = useMemo(() => {
  //   const skillSet = new Set<string>();
  //   projects.forEach(project => {
  //     project.skills.forEach(skill => {
  //       if (skill !== "Coming Soon") {
  //         skillSet.add(skill);
  //       }
  //     });
  //   });
  //   return ["All", ...Array.from(skillSet).sort()];
  // }, []);

  // // Filter projects based on selected skill
  // const filteredProjects = useMemo(() => {
  //   if (selectedFilter === "All") {
  //     return projects;
  //   }
  //   return projects.filter(project => 
  //     project.skills.includes(selectedFilter)
  //   );
  // }, [selectedFilter]);

  // // Close filter dropdown when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     const target = event.target as HTMLElement;
  //     if (!target.closest('[data-filter-container]')) {
  //       setIsFilterOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  return (
    <article
      data-scroll-section-id="projectsContent"
      className="w-full flex flex-col p-2 sm:p-4"
    >
      {/* Temporarily removed filter UI */}
      <h2
        className="text-custom-blue text-xs sm:text-sm font-bold mb-6 sm:mb-8 tracking-wider uppercase flex items-center
        before:content-[''] before:block before:w-3 sm:before:w-4 before:h-[2px] before:bg-custom-blue before:mr-2"
      >
        Projects
      </h2>
      
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full flex flex-col gap-8 sm:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-scroll
              data-scroll-projects
              data-scroll-speed="0.2"
              data-scroll-delay="0.2"
              data-scroll-repeat="true"
              data-scroll-class="fade-in"
              className="w-full max-w-[400px] sm:max-w-none mx-auto transform-gpu hover:scale-[1.02] transition-all duration-300"
            >
              <Link
                href={project.link}
                className={`
                  w-full 
                  flex flex-col
                  sm:flex-row
                  gap-3 sm:gap-4
                  px-3 py-4
                  sm:px-4 sm:py-3
                  md:px-8 md:py-6
                  rounded-lg sm:rounded-xl
                  transition-all duration-500 ease-out 
                  ${
                    project.inProgress
                      ? "bg-gradient-to-br from-custom-blue/10 via-custom-teal/10 to-custom-blue/10"
                      : "bg-linear-to-br from-gray-100/95 to-gray-100/90"
                  }
                  hover:bg-neutral-100/95
                  group
                  items-center
                  border border-transparent
                  ${
                    project.inProgress
                      ? "border-custom-blue/20"
                      : "hover:border-custom-blue/10"
                  }
                  backdrop-blur-xs
                  relative
                  overflow-hidden
                `}
                aria-label={`View ${project.title} project`}
              >
                {project.inProgress && (
                  <div className="absolute top-0 right-0 bg-custom-blue text-white px-2 py-1 text-[10px] sm:text-xs rounded-bl-lg">
                    Coming Soon
                  </div>
                )}

                <div className="w-full sm:w-1/4 md:w-[300px] mb-3 sm:mb-0 relative flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 px-2 sm:px-0">
                  {project.inProgress ? (
                    <div className="w-full aspect-3/2 sm:w-full sm:h-full md:aspect-3/2 relative rounded-lg overflow-hidden bg-gradient-to-br from-custom-blue/20 via-custom-teal/20 to-custom-blue/20 flex items-center justify-center">
                      <div className="text-4xl sm:text-6xl animate-pulse" aria-hidden="true">🚀</div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_20%,_#ffffff_120%)] opacity-20"></div>
                    </div>
                  ) : (
                    <div className="w-full aspect-3/2 sm:w-full sm:h-full md:aspect-3/2 relative rounded-lg overflow-hidden shadow-[0_8px_30px_rgba(2,66,92,0.12)] group-hover:shadow-[0_15px_60px_rgba(2,66,92,0.2)] transition-all duration-500">
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.subTitle}`}
                        width={size.width && size.width >= 640 && size.width < 768 ? 80 : 300}
                        height={size.width && size.width >= 640 && size.width < 768 ? 80 : 300}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col px-2 sm:px-2 sm:pl-4 md:px-6 md:pl-8 gap-1 sm:gap-2 w-full sm:w-2/3 md:w-full h-full justify-center relative z-10 text-center sm:text-left">
                  <div className="w-full sm:w-full transition-transform duration-300">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="text-base sm:text-lg md:text-2xl text-custom-blue font-bold text-left">
                        {project.title}
                      </div>
                      <div className="flex flex-row items-center justify-end ml-auto">
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-custom-blue/5 text-[10px] sm:text-xs text-custom-blue/60">
                          {project.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 text-xs sm:text-sm md:text-base text-custom-blue/80 text-left group-hover:text-custom-blue transition-colors duration-300">
                      {project.subTitle}
                    </div>
                  </div>

                  <div className="text-base font-light text-justify text-custom-blue/90 hidden md:block group-hover:text-custom-blue transition-colors duration-300">
                    <div className="text-sm md:text-base">
                      {project.description}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 md:mt-2 justify-start">
                    {project.skills.map((skill) => (
                      <div
                        key={skill}
                        className="skill-pill flex items-center text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-md
                          bg-custom-blue/10 text-custom-blue/80
                          transform transition-all duration-300 hover:scale-105 shadow-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {!project.inProgress && (
                  <div className="hidden sm:flex w-8 md:w-16 h-full items-center justify-center relative">
                    <div className="flex justify-center items-center transition-transform duration-500 ease-out origin-left group-hover:translate-x-4">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="w-4 md:w-6 h-4 md:h-6 text-custom-blue/50 group-hover:text-custom-blue transition-all duration-500 ease-out"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                )}
                {project.inProgress && (
                  <div className="hidden sm:block w-8 md:w-16 h-full"></div>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}