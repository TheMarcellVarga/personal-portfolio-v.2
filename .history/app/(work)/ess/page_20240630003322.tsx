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
        text: "The main issue ESS is facing is that the company is missing an informative website with the necessary information, which would help students to choose them as a study agency. The website should contain all necessary information about available university programs, the application process, coming deadlines, service fees, and information about living abroad to make the website more attractive and useful to convince people to use the agency's service.",
      },
      {
        title: "Objective",
        text: "This must be achieved by creating the website from scratch, which would be the main information platform for the company, where they could have an overview of different services, prices, and information about universities available in France.",
      },
      {
        title: "Project Management",
        text: [
          "To ensure a flawless workflow, we've decided to create our project plan by using a Work Breakdown Structure both for the project and the report to improve our efficiency in terms of dividing tasks and their possible dependencies.",
          "By utilizing the Gantt chart, we will have the opportunity to visualize different tasks better, therefore we will have more seamless communication about our progress and challenges with the client.",
          "As the organization does not have any background or website yet, it can be difficult to reach an ideal solution for the problem in a short period. We believe it will require many design iterations and user tests, and because it's very focused on user-centered design, where the user and the client are very much included in the process, will require us to do as many changes as the client wants.",
          "With the five planes of UX, which is not purely plan-driven and has agile features, we feel more comfortable using, since we would have a fixed framework, which will help us to keep the focus better on the problem and do as many iterations as we can. That would be the main reason why we chose to work with five planes of UX.",
        ],
      },
      {
        title: "Research",
        text: [
          "To observe our target group approach and create a website, which the user will use, can be a tough task because people's approaches and needs are different. To know our users better, we would research them, which involves understanding the environment they live in and observing their behavior and habits they might have to form the direction of a website.",
          "Our data gathering started with qualitative user research. We have used this method because it gives a unique depth of understanding which is difficult to gain from a closed question survey. Respondents can freely disclose their experiences, thoughts, and feelings without constraint, which generates valuable conversation around the subject.",
          "Before meeting an interviewer, we created an interview guide with a categorization list, to set our target audience. We assume that our potential customers are American students from 18-25 years or older, who are willing to study abroad and are open to new cultures and experiences.",
        ],
      },
      {
        title: "Personas",
        text: [
          "To gain even more insight into conducted research, we have decided to create Personas. It helped us to understand users’ needs, to assume their experiences within a product, behavior, and goals.",
          "The first Persona is Sophie, a twenty-year-old American student from Colorado, who just finished high school and is looking for some universities out of America to study Digital Marketing. Since education is too expensive for her in the USA, to live and study abroad it's not so cheap for her as well. She had a side job, where she was saving some money.",
          "The second Persona is Thomas Grey, who just finished middle school and is considering choosing a study program outside America. Since he can find fashion and design programs just in a few cities in the USA in which he is not much interested, he was looking more into the depth of the programs abroad and found many of them in Europe. Since one of his frustrations is to fail by filling the application and visa documentation, he might use the agency's help as well. Also, because he is open-minded, he already has some friends who live there, so they could be a big motivation for him to go abroad.",
        ],
      },
      {
        title: "Five Planes Method",
        // text: [
        //   "To gain even more insight into conducted research, we have decided to create Personas. It helped us to understand users’ needs, to assume their experiences within a product, behavior, and goals.",
        //   "The first Persona is Sophie, a twenty-year-old American student from Colorado, who just finished high school and is looking for some universities out of America to study Digital Marketing. Since education is too expensive for her in the USA, to live and study abroad it's not so cheap for her as well. She had a side job, where she was saving some money.",
        //   "The second Persona is Thomas Grey, who just finished middle school and is considering choosing a study program outside America. Since he can find fashion and design programs just in a few cities in the USA in which he is not much interested, he was looking more into the depth of the programs abroad and found many of them in Europe. Since one of his frustrations is to fail by filling the application and visa documentation, he might use the agency's help as well. Also, because he is open-minded, he already has some friends who live there, so they could be a big motivation for him to go abroad.",
        // ],
        subTitle: [
          "Strategy plane",
          "Scope plane",
          "Structure plane",
          "Skeleton plane",
        ],
        subText: [
          "We started with setting two key issues: what value should the website bring for the organization and what value it can bring for the user. Since the agency doesn't have any website yet, it would be a core platform for them to attract potential customers, and for the users, it would be the main moderator between the agency and partner universities.",
          "By answering these questions, it helped us to see that the website we will produce, will be more intended to use as an information website, with less functional specifications and more content requirements, so we will spend more time on Information Architecture, to increase the content readability.",
          "At this phase, we define what content elements may be required to meet users' needs. We didn't seem to know a lot about the user, just from the categorization, we assumed user gender, age, and behavior features, so it can be difficult to set the main goal of the product and what user problems we should help to solve. That is why we have made qualitative research- interviews on our target group to make a valuable product, which would meet their needs.",
          "From the functional side, features like a navigation bar, which should display the clear website structure, and contact form would matter the most, since the agency at first receives applications and then have meetings with applicants.",
          "From the content requirements side, it should have a clear information structure for the user, using information hierarchy and prioritizing the most important information, also visuals-like pictures and video reviews section and description of what is included in different price packages, reviews, FAQ",
          "After the requirements have been set, we have a clear picture of what will be included on the website. After a few more meetings with a client, we have added new elements like FAQ and a scale of American and European Study tuition price, which she thinks will help to visualize the difference even more.",
          "In content development, structuring the user experience is a question of information architecture, creating categories and navigational schemes that allow users to move through the site content effectively. So, this phase is all about understanding the user, even more, the way they behave and think.",
          "By building this understanding into the structure of our website, will help us to ensure a successful experience for those who will use it.",
          "in this phase, we have already experimented with the very first wireframe, identifying specific aspects of the interface like navigation, placing the buttons, blocks of text, etc. On the structure plane, we looked at the larger-scale issues of architecture and interactions. In this phase, our concerns exist at a smaller scale of individual components and their relationship.",
        ],
      },
      {
        title: "Information Architecture",
        text: [
          "The structure of the website is defined by Information Architecture, which gives a website a competitive advantage. Users mostly want to perform their tasks with the least amount of effort possible and will choose to use the product that creates the easiest, and most pleasant experience for them. It gives the user an experience with a product that feels natural, so they can focus on the task they’re trying to accomplish instead of figuring out how to use the product.",
          "One of the most important purposes of websites is to interpret information for the users. To truly accomplish this task, we need to define the most relevant content for the user.",
        ],
      },
      {
        title: "Information Architecture",
        text: [
          "The structure of the website is defined by Information Architecture, which gives a website a competitive advantage. Users mostly want to perform their tasks with the least amount of effort possible and will choose to use the product that creates the easiest, and most pleasant experience for them. It gives the user an experience with a product that feels natural, so they can focus on the task they’re trying to accomplish instead of figuring out how to use the product.",
          "One of the most important purposes of websites is to interpret information for the users. To truly accomplish this task, we need to define the most relevant content for the user.",
        ],
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
