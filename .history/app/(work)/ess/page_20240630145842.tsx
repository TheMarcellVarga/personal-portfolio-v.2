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
      // {
      //   title: "Project Management",
      //   text: [
      //     "To ensure a flawless workflow, we've decided to create our project plan by using a Work Breakdown Structure both for the project and the report to improve our efficiency in terms of dividing tasks and their possible dependencies.",
      //     "By utilizing the Gantt chart, we will have the opportunity to visualize different tasks better, therefore we will have more seamless communication about our progress and challenges with the client.",
      //     "As the organization does not have any background or website yet, it can be difficult to reach an ideal solution for the problem in a short period. We believe it will require many design iterations and user tests, and because it's very focused on user-centered design, where the user and the client are very much included in the process, will require us to do as many changes as the client wants.",
      //     "With the five planes of UX, which is not purely plan-driven and has agile features, we feel more comfortable using, since we would have a fixed framework, which will help us to keep the focus better on the problem and do as many iterations as we can. That would be the main reason why we chose to work with five planes of UX.",
      //   ],
      // },
      {
        title: "User Research",
        text: [
          "To get a better understanding of our users we had to conduct detailed research understand the environment they live in and observe their behaviors and habits",
          "We proceeded with gathering data using qualitative user research where we conducted interviews using a closed question survey. For this we have created an interview guide with a categorization list, to set our target audience which in our case consisted of American students from 18-20 year-old or older, willing to study abroad and open to new cultures and experiences",
        ],
      },
      {
        title: "Personas",
        text: [
          "For further insight we created personas to understand our users needs and assume their experiences within a product, behavior and goals.",
        ],
      },
      {
        title: "Five Planes Method",
        text: [
          "We carried out this product by utilizing the Five Planes Method.",
        ],
        subTitle: [
          "Strategy plane",
          "Scope plane",
          "Structure plane",
          "Skeleton plane",
        ],
        subText: [
          // "We started with setting two key issues: what value should the website bring for the organization and what value it can bring for the user. Since the agency doesn't have any website yet, it would be a core platform for them to attract potential customers, and for the users, it would be the main moderator between the agency and partner universities.",
          // "By answering these questions, it helped us to see that the website we will produce, will be more intended to use as an information website, with less functional specifications and more content requirements, so we will spend more time on Information Architecture, to increase the content readability.",
          // "At this phase, we define what content elements may be required to meet users' needs. We didn't seem to know a lot about the user, just from the categorization, we assumed user gender, age, and behavior features, so it can be difficult to set the main goal of the product and what user problems we should help to solve. That is why we have made qualitative research- interviews on our target group to make a valuable product, which would meet their needs.",
          // "From the functional side, features like a navigation bar, which should display the clear website structure, and contact form would matter the most, since the agency at first receives applications and then have meetings with applicants.",
          // "From the content requirements side, it should have a clear information structure for the user, using information hierarchy and prioritizing the most important information, also visuals-like pictures and video reviews section and description of what is included in different price packages, reviews, FAQ",
          // "After the requirements have been set, we have a clear picture of what will be included on the website. After a few more meetings with a client, we have added new elements like FAQ and a scale of American and European Study tuition price, which she thinks will help to visualize the difference even more.",
          // "In content development, structuring the user experience is a question of information architecture, creating categories and navigational schemes that allow users to move through the site content effectively. So, this phase is all about understanding the user, even more, the way they behave and think.",
          // "By building this understanding into the structure of our website, will help us to ensure a successful experience for those who will use it.",
          // "in this phase, we have already experimented with the very first wireframe, identifying specific aspects of the interface like navigation, placing the buttons, blocks of text, etc. On the structure plane, we looked at the larger-scale issues of architecture and interactions. In this phase, our concerns exist at a smaller scale of individual components and their relationship.",
          "We started with setting two key issues: what value should the website bring for the organization and what value it can bring for the user. Since the agency didn't have any website yet, it would be a core platform for them to attract potential customers, and for the users, it would be the main moderator between the agency and partner universities.",
          "By answering these questions, it helped us to see that the website we will produce, will be more intended to use as an information website, with less functional specifications and more content requirements, hence spending more time on Information Architecture, to increase the content readability",
          "We defined what are the required content elements to meet the users' needs, both from the functional and content requirement side.",
          "After the requirements have been set, we got a clear picture of what will be included on the website. Besides adding new elements after meeting with our client, we revised the information architecture and created categories and navigational schemes that would allow users to move through the site content efficiently.",
          "In this phase, we have already experimented with the very first wireframe, identifying specific aspects of the interface like navigation, placing the buttons, blocks of text, etc. On the structure plane, we looked at the larger-scale issues of architecture and interactions. In this phase, our concerns exist at a smaller scale of individual components and their relationship.",
        ],
      },
      {
        title: "Information Architecture",
        text: [
          "The main purpose of our website was to interpret information for the users, by performing tasks with the least amount of effort possible contributing to an easy and natural experience. To truly accomplish this task, we of course also had to define the most relevant contents for the user.",
        ],
      },
      {
        title: "Wireframing",
        text: [
          // "At the skeleton phase, we have created the first design iterations- wireframes. It helped us to see a clear overview of the page structure, layout, information architecture, and intended user behaviors. As a wireframe usually represents the initial product concept, styling, color, and graphics we kept it to a minimum. We have used a digital way of displaying it, using Adobe XD, since we believe it's easier to visualize than using a paper version.  According to the landing page, we had a few iterations of displaying elements. In the navigation bar, we displayed different page labels- Available Programs, Service, Contact, and Apply page, to show the website structure, and would make it to be sticky and follow when scrolling down, to let the user navigate more easily to other pages. After some discussions, we decided to marge contact and apply pages because they would contain very similar information, which would create some confusion for the user on which one to use.",
          // "Besides, at the very beginning of the website, we had a similar vision of displaying a full-width picture or slide show gallery.",
          // "Since the landing page is the most important one, which should create the user's interest from the very first second, using the hierarchy of information, allows to point out to the viewer what he wants to see first. This is highly important as users tend not to spend too much time on the website these days. According to our prototypes, we wanted to mention what ESS is about and what service they can provide, also the key points, and the application process step-by-step. We came up with different iterations for that.",
          // "We considered implementing a section where the reviews of the company would be shown. Our idea was to display these as a card element in accordance with the Gestalt Principles.",
          // "According to the footer design, we have tried to display the most important links from the website they should look for, if they missed it on the page, also the agency’s contact information. We tried to group them, by using The Principle of Objects according to the 8 Principles of Information Architecture, where we grouped similar content as well as determining each group’s attributes. Pressing one of the links will lead the user to the place, where the precise content is displayed.",
          // "Moving to the service page, we were thinking about how to display the layout of different services and the description of each on the page. Should it be as a sidebar or navigation bar on the top of the page? The most convenient solution we came up, was to have a vertical sidebar on the side, with different tabs, and on the right, a block of the container with the information, which will change according to the tab.",
          "As part of the skeleton phase, we have created the first design iterations - Wireframes. It gave us clear overview of the page structure and while represented the initial product concept, we kept styling, color, and graphics to the minimum.",
          "We established the navigation bar where we included different page labels to emphasize the structure.",
          "Besides, at the very beginning of the website, we had a similar vision of displaying a full-width picture or slide show gallery.",
          "Since the landing page is what will catch the user's interest from the very second, therefore we made multiple different prototype, where we clarified what ESS is about and what service they provide, including the key points of their service.",
          "We considered implementing a section where the reviews of the company would be shown. Our idea was to display these as a card element in accordance with the Gestalt Principles.",
          "According to the footer design, we have tried to display the most important links from the website they should look for, if they missed it on the page, also the agency’s contact information.",
          "Moving to the service page, the most convenient solution we came up with is a vertical sidebar on the left with variety of tabs. On the right side, we placed a container with information, which can be changed by using the tabs",
          "We placed a page for the universities, where content and visuals play an important role, therefore it was our task to make it informative, while being easily readable. Since we have different universities' information, we tried to make the layout template that should suit all of them.",
        ],
      },
      {
        title: "Lo-Fi",
        text: [
          "Following additional client meetings, we showcased the partner universities on the landing page based on feedback. This inspired us to display them on the university page as well, whereby clicking on the icon of the institution, the content will change accordingly.",
          "As a follow-up, we also placed a price scale, to highlight the advantage of using the service of our client by studying in European universities over Americans.",
          "Moreover, we placed an implementation of service package prices and what included in them to help consumers find a deal suited for their needs.",
        ],
      },
      {
        title: "Surface Plane",
        text: [
          "After making the structure of wireframes and elements that should be on the page, we reached the Surface Plane. Here we placed our attention to the sensory design to produce a finished design, where content, functionality and aesthetics came together.",
        ],
      },
      {
        title: "Mockup",
        text: [
          "We have made the last iteration of combining our ideas, client wishes, and research to make the final product, with most of the necessary design assets and components.",
          "In the review section, we displayed place for 3 upcoming customer review, which in the future can be expanded with the use of a slide function.",
          "Reading plenty of text can result in fatigue. Placing pictures of the schools can uplift their mood and leave a cheerful impression on the users. Afterall, they sometimes speak more than words",
          "Lastly, but not least, the contact us page, provides is satisfying confirmation to eliminate any uncertainty if their application was submitted.",
          
        ],
      },
      {
        title: "",
        text: [
          "",
          "",
          "",
        ],
      },
      {
        title: "",
        text: [
          "",
          "",
          "",
        ],
      },
      {
        title: "",
        text: [
          "",
          "",
          "",
        ],
      },
      {
        title: "",
        text: [
          "",
          "",
          "",
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
