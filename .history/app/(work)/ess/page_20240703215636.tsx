"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
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
    title: "",
    subTitle: "",
    content: {
      picture: "/images/legacy/ESS-CaseIndex-New.png",
      text: "",
    },
    description: [
      {
        title: "Overview",
        text: [
          "European Study Solution is a new start-up organization registered in Ukraine, whose purpose is to help American students with the application process and preparation for life abroad. ESS would like to provide a payable service for Americans to help with application submission to European educational programs. The company’s main service feature is a unique approach to their client, where the main focus would lay on helping to find professional orientation, assistance with all the documentary work, preparation for life abroad, etc.",
        ],
        picture: [],
      },
      {
        title: "Problem",
        text: [
          "The main issue ESS is facing is that the company is missing an informative website with the necessary information, which would help students to choose them as a study agency. The website should contain all necessary information about available university programs, the application process, coming deadlines, service fees, and information about living abroad to make the website more attractive and useful to convince people to use the agency's service.",
        ],
        picture: [],
      },
      {
        title: "Objective",
        text: [
          "This must be achieved by creating the website from scratch, which would be the main information platform for the company, where they could have an overview of different services, prices, and information about universities available in France.",
        ],
        picture: [],
      },
      {
        title: "User Research",
        text: [
          "To get a better understanding of our users we had to conduct detailed research understand the environment they live in and observe their behaviors and habits",
          "We proceeded with gathering data using qualitative user research where we conducted interviews using a closed question survey. For this we have created an interview guide with a categorization list, to set our target audience which in our case consisted of American students from 18-20 year-old or older, willing to study abroad and open to new cultures and experiences",
        ],
        picture: [],
      },
      {
        title: "Personas",
        text: [
          "For further insight we created personas to understand our users needs and assume their experiences within a product, behavior and goals.",
        ],
        picture: [
          "/images/legacy/ESS-Images/Picture 3.png",
          "/images/legacy/ESS-Images/Picture 4.png",
        ],
      },
      {
        title: "Five Planes Method",
        text: [
          "We carried out this product by utilizing the Five Planes Method.",
        ],
        picture: [],
        subTitle: [
          "Strategy plane",
          "Scope plane",
          "Structure plane",
          "Skeleton plane",
        ],
        subText: [
          "We started with setting two key issues: what value should the website bring for the organization and what value it can bring for the user. Since the agency didn't have any website yet, it would be a core platform for them to attract potential customers, and for the users, it would be the main moderator between the agency and partner universities.",
          "By answering these questions, it helped us to see that the website we will produce, will be more intended to use as an information website, with less functional specifications and more content requirements, hence spending more time on Information Architecture, to increase the content readability",
          "We defined what are the required content elements to meet the users' needs, both from the functional and content requirement side.",
          "After the requirements have been set, we got a clear picture of what will be included on the website. Besides adding new elements after meeting with our client, we revised the information architecture and created categories and navigational schemes that would allow users to move through the site content efficiently.",
          "In this phase, we have already experimented with the very first wireframe, identifying specific aspects of the interface like navigation, placing the buttons, blocks of text, etc. On the structure plane, we looked at the larger-scale issues of architecture and interactions. In this phase, our concerns exist at a smaller scale of individual components and their relationship.",
        ],
        subPicture: [
          "/images/legacy/ESS-Images/FivePlane5.png",
          "/images/legacy/ESS-Images/FivePlane4.png",
          "/images/legacy/ESS-Images/FivePlane3.png",
          "/images/legacy/ESS-Images/FivePlane2.png",
          "/images/legacy/ESS-Images/FivePlane1.png",
        ],
      },
      {
        title: "Information Architecture",
        text: [
          "The main purpose of our website was to interpret information for the users, by performing tasks with the least amount of effort possible contributing to an easy and natural experience. To truly accomplish this task, we of course also had to define the most relevant contents for the user.",
        ],
        picture: [],
      },
      {
        title: "Wireframing",
        text: [
          "As part of the skeleton phase, we have created the first design iterations - Wireframes. It gave us clear overview of the page structure and while represented the initial product concept, we kept styling, color, and graphics to the minimum.",
          "We established the navigation bar where we included different page labels to emphasize the structure.",
          "Besides, at the very beginning of the website, we had a similar vision of displaying a full-width picture or slide show gallery.",
          "Since the landing page is what will catch the user's interest from the very second, therefore we made multiple different prototype, where we clarified what ESS is about and what service they provide, including the key points of their service.",
          "We considered implementing a section where the reviews of the company would be shown. Our idea was to display these as a card element in accordance with the Gestalt Principles.",
          "According to the footer design, we have tried to display the most important links from the website they should look for, if they missed it on the page, also the agency’s contact information.",
          "Moving to the service page, the most convenient solution we came up with is a vertical sidebar on the left with variety of tabs. On the right side, we placed a container with information, which can be changed by using the tabs",
          "We placed a page for the universities, where content and visuals play an important role, therefore it was our task to make it informative, while being easily readable. Since we have different universities' information, we tried to make the layout template that should suit all of them.",
        ],
        picture: [
          "",
          "/images/legacy/ESS-Images/Picture 5.png",
          [
            "/images/legacy/ESS-Images/Picture 6.1.png",
            "/images/legacy/ESS-Images/Picture 6.2.png",
            "/images/legacy/ESS-Images/Picture 6.3.png",
          ],
          [],
          [],
          [],
          [],
          [],
          [],
        ],
      },
      {
        title: "Lo-Fi",
        text: [
          "Following additional client meetings, we showcased the partner universities on the landing page based on feedback. This inspired us to display them on the university page as well, whereby clicking on the icon of the institution, the content will change accordingly.",
          "As a follow-up, we also placed a price scale, to highlight the advantage of using the service of our client by studying in European universities over Americans.",
          "Moreover, we placed an implementation of service package prices and what included in them to help consumers find a deal suited for their needs.",
        ],
        picture: [],
      },
      {
        title: "Surface Plane",
        text: [
          "After making the structure of wireframes and elements that should be on the page, we reached the Surface Plane. Here we placed our attention to the sensory design to produce a finished design, where content, functionality and aesthetics came together.",
        ],
        picture: [],
      },
      {
        title: "Mockup",
        text: [
          "We have made the last iteration of combining our ideas, client wishes, and research to make the final product, with most of the necessary design assets and components.",
          "In the review section, we displayed place for 3 upcoming customer review, which in the future can be expanded with the use of a slide function.",
          "Reading plenty of text can result in fatigue. Placing pictures of the schools can uplift their mood and leave a cheerful impression on the users. Afterall, they sometimes speak more than words",
          "Lastly, but not least, the contact us page, provides is satisfying confirmation to eliminate any uncertainty if their application was submitted.",
        ],
        picture: [],
      },
      {
        title: "Responsive Design",
        text: [
          "Due to our target audience, making the website responsive was one of our highest priority. Consequently, we made prototypes for both tablet and mobile devices. This came with a responsive navigation via a hamburger menu.",
        ],
        picture: [],
      },
      {
        title: "Realization",
        text: [
          "After finishing our final design, or for our high-fidelity mockup, we started to code by using HTML, CSS and JavaScript.",
        ],
        picture: [],
      },
      {
        title: "Usability",
        text: [
          "To validate our design, we conducted a five-second test to view and observe the first impressions of our users and a Think Aloud test to make sure our product serves its purpose as intended.",
          "The test was successful and concluded that the concept is well founded.",
        ],
        picture: [],
      },
      {
        title: "SEO",
        text: [
          "Lastly, we improved the website using metadata and further optimization to generate online traffic, driven by search engines so it can be properly indexed and displayed within the search results.",
        ],
        picture: [],
      },
      {
        title: "Summary",
        text: [
          "To conclude our process, we have created a website for the start-up organization - European Study Solution, which will be the main platform for them to develop their business and keep in contact with students in the future. From the user perspective, ewe create the possibility to know more about the agency and engage them to use the agency's services.",
          "Overall, we feel we have created a content-rich and functional product that the user can utilize and receive the information and assistance they require regarding their journey abroad",
        ],
        picture: [],
      },
    ],
  },
];

const ESS = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
                        <Image
                          src={item.content.picture}
                          alt={item.content.text}
                          layout="responsive"
                          width={300}
                          height={200}
                          objectFit="cover"
                        />
                        {item.content.text}
                      </h4>
                      <div className="text-sm text-black dark:text-white ">
                        {item.description.map((desc, descIndex) => (
                          <div key={descIndex}>
                            <p className="pt-2 text-lg">{desc.title}</p>
                            <div className="py-2">
                              {Array.isArray(desc.text) &&
                                desc.text.map((text, index) => (
                                  <React.Fragment key={index}>
                                    <p>{text}</p>
                                    {/* Check if there's an image at the current index */}
                                    {desc.picture[index] && (
                                      <Image
                                        src={desc.picture[index] ?? ""}
                                        alt={`Description Picture ${index}`}
                                        layout="responsive"
                                        width={300}
                                        height={200}
                                        objectFit="cover"
                                        className="mx-2 my-2"
                                      />
                                    )}
                                  </React.Fragment>
                                ))}
                            </div>
                            <div className="mt-2 flex flex-wrap justify-center items-start w-full">
                              {/* Render pictures separately if they exist outside of the alternating logic */}
                              {Array.isArray(desc.picture) &&
                                desc.picture.flatMap((group, groupIndex) =>
                                  Array.isArray(group) ? (
                                    <div
                                      key={groupIndex}
                                      className="flex space-x-4"
                                    >
                                      {group.map((pictureUrl, pictureIndex) => (
                                        <Image
                                          key={`${groupIndex}-${pictureIndex}`}
                                          src={pictureUrl}
                                          alt={`Group Picture ${
                                            pictureIndex + 1
                                          }`}
                                          layout="fixed"
                                          width={150}
                                          height={100}
                                          objectFit="cover"
                                          className="mx-2"
                                        />
                                      ))}
                                    </div>
                                  ) : (
                                    <Image
                                      key={groupIndex}
                                      src={group}
                                      alt="Single Picture"
                                      layout="fixed"
                                      width={150}
                                      height={100}
                                      objectFit="cover"
                                      className="mx-4"
                                    />
                                  )
                                )}
                            </div>
                            {/* Assuming subTitle, subText, and subPicture follow a similar pattern */}
                            <div className="text-sm text-gray-600 dark:text-gray-300">
                              {Array.isArray(desc.subTitle) &&
                                Array.isArray(desc.subText) &&
                                Array.isArray(desc.subPicture) &&
                                desc.subTitle.map((title, index) => (
                                  <div key={index} className="mb-2">
                                    <React.Fragment>
                                      {desc.subPicture?.[index] && (
                                        <div className="my-4 px-16">
                                          <Image
                                            src={desc.subPicture[index] ?? ""}
                                            alt={`Sub-picture ${index}`}
                                            layout="responsive"
                                            width={150}
                                            height={100}
                                            objectFit="cover"
                                          />
                                        </div>
                                      )}
                                      <h4 className="text-base mb-1 text-gray-900 dark:text-gray-100">
                                        {title}
                                      </h4>
                                      <p>{desc.subText?.[index] || ""}</p>
                                    </React.Fragment>
                                  </div>
                                ))}
                            </div>
                          </div>
                        ))}
                      </div>{" "}
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
