"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import DarkModeIcon from "@/public/icons/darkMode";
import GitHubIcon from "@/public/icons/github";
import IndexSigAnimatedIcon from "@/public/icons/indexSigAnimated";
import LinkedInIcon from "@/public/icons/linkedin";
import MouseScrollIcon from "@/public/icons/mouseScroll";
import Header from "../../header";
import Footer from "../../footer";

const history = [
  {
    title: "AXON Networks",
    subTitle: "UX & Frontend Engineer",
    content: {
      picture: "Oct 2022",
      text: "",
    },
    description: [
      {
        title: "Overview",
        text: "European Study Solution is a new start-up organization registered in Ukraine, whose purpose is to help American students with the application process and preparation for life abroad. ESS would like to provide a payable service for Americans to help with application submission to European educational programs. The company’s main service feature is a unique approach to their client, where the main focus would lay on helping to find professional orientation, assistance with all the documentary work, preparation for life abroad, etc.",
      },
      {
        title: "Problem",
        text: "European Study Solution is a new start-up organization registered in Ukraine, whose purpose is to help American students with the application process and preparation for life abroad. ESS would like to provide a payable service for Americans to help with application submission to European educational programs. The company’s main service feature is a unique approach to their client, where the main focus would lay on helping to find professional orientation, assistance with all the documentary work, preparation for life abroad, etc.",
      },
    ],
    // description: [
    //   "Contributed aato AXON Orchestrator development, focusing on UX/UI design and frontend development within cross-functional teams.",
    //   "Created interactive prototypes and established design system for in-house development.",
    //   "Collaborated with Analytics team to integrate AI/ML solutions into products, enhancing product functionality.",
    //   "Participated in the full product development cycle from UX/UI design, through Frontend Development to successful deployments.",
    // ],
  },
  // {
  //   title: "AXON Networks",
  //   subTitle: "UX & Frontend Engineer",
  //   content: {
  //     picture: "Oct 2022",
  //     text: "",
  //   },
  //   description: [
  //     "Contributed to AXON Orchestrator development, focusing on UX/UI design and frontend development within cross-functional teams.",
  //     "Created interactive prototypes and established design system for in-house development.",
  //     "Collaborated with Analytics team to integrate AI/ML solutions into products, enhancing product functionality.",
  //     "Participated in the full product development cycle from UX/UI design, through Frontend Development to successful deployments.",
  //   ],
  // },
  // {
  //   title: "AXON Networks",
  //   subTitle: "UX & Frontend Engineer",
  //   content: {
  //     picture: "Oct 2022",
  //     text: "",
  //   },
  //   description: [
  //     "Contributed to AXON Orchestrator development, focusing on UX/UI design and frontend development within cross-functional teams.",
  //     "Created interactive prototypes and established design system for in-house development.",
  //     "Collaborated with Analytics team to integrate AI/ML solutions into products, enhancing product functionality.",
  //     "Participated in the full product development cycle from UX/UI design, through Frontend Development to successful deployments.",
  //   ],
  // },
  // Add more projects here
];

const ESS = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode
  const [isOpen, setIsOpen] = useState(false); // State for other purposes (e.g., menu open)
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="px-4 pb-4 bg-custom-light dark:bg-custom-dark transition-colors duration-200 ease-in-out">
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isOpen={isOpen}
        setIsOpen={setIsDarkMode}
      />
      <main className="flex flex-col items-center justify-between m-4 gap-1 w-full">
        <div className="flex-grow pb-12 w-full flex flex-row items-center justify-center gap-2">
          <section className="flex flex-col items-center justify-between my-4 gap-24 w-4/5">
            {/* New Experience Section */}
            <article className="mt-8 w-full p-4">
              <h2 className="text-slate-900 dark:text-slate-50 text-3xl font-bold">
                European Study Solution
              </h2>
              <h2 className="text-custom-blue text-md font-bold mb-4 tracking-wider uppercase">
                Student Agency
              </h2>
              <div className="flex flex-col gap-12">
                {history.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl text-black dark:text-white">
                        {item.title}
                      </h3>
                      <h3 className="text-lg text-black dark:text-white">
                        {item.subTitle}
                      </h3>
                      <h4 className="text-base font-light text-black dark:text-white">
                        {item.content.picture}
                        {item.content.text}
                      </h4>
                      <div className="text-sm text-black dark:text-white ">
                        {item.description.map((desc, descIndex) => (
                          <div key={descIndex}>
                            <p className="pt-2 text-lg">{desc.title}</p>
                            <p className="py-2">{desc.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </div>
        <div className="pb-32 flex flex-col items-center justify-start"></div>
      </main>
      <Footer
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default ESS;
