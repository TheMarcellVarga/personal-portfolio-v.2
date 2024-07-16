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
      picture: "/images/legacy/CatchScan-CaseIndex-New.png",
      text: "",
    },
    description: [
      {
        title: "Overview",
        text: [
          "CatchScan is an IT company, whose mission is to help content creators to protect their brand and place them in control of their content. Their product is a software driven platform where content creators can establish an automated protection regarding to their copyright. They offer a web app, where influencers or other artists can insert their intellectual work (for now only images) and make sure that no one else is using it without their permission. As the creator upload their work, the algorithm can search for any misconduct.",
          "Our client gave us the task to come up with a user-friendly interface and reestablish the architecture of their app while utilizing their already existing in-house algorithm.",
        ],
        picture: [],
      },
      {
        title: "Problem",
        text: [
          "Our client had created a beta version of their product, where their main focus was on the functionality itself, rather than the user experience. This led to broken user flows of the existing dashboard, resulting in an unpleasing, confusing experience, which doesn’t represent the company’s values.",
        ],
        picture: [],
      },
      {
        title: "Objective",
        text: [
          "The goal of this project is to create a web app for CatchScan, which will be utilizing their copyright matching algorithm. We need to create a visual interface with a well-developed and optimized structure, which will focus on information architecture and user navigation. The dashboard interface will be created from scratch and will help the user to find the functions with ease and fulfill their needs.",
        ],
        picture: [],
      },
      {
        title: "Design Thinking",
        text: [
          "At the beginning of the whole process, we need to establish what kind of development method we are going to use. In this project we will be using Design Thinking development. Since it is a human-centered methodology, we bring the users to the spotlight and try to understand their problems, wants, needs, values, feelings. As we will know more about our users, we might re-frame our problem in order to achieve the best solution for them.",
          "Design thinking consist of 5 parts - empathize, define, ideate, prototype and test. It is non-linear process. That means, while we are moving forward in the overall process, we will be going back to the former steps",
        ],
        picture: [],
      },
      {
        title: "Empathize",
        text: [
          "In this phase of the project, the main goal was to connect with our users - know who they are, what are their needs and expectations.",
        ],
        subTitle: [
          "Benchmarking",
          "User Research",
          "Empathy Map",
          "Personas",
          "User Journey",

        ],
        subText: [
          "In this phase of the project, the main goal was to connect with our users - know who they are, what are their needs and expectations.",
        ],
        subPicture: [
          "/images/legacy/CS-Images/FivePlane5.png",
          "/images/legacy/CS-Images/FivePlane4.png",
          "/images/legacy/CS-Images/FivePlane3.png",
          "/images/legacy/CS-Images/FivePlane2.png",
          "/images/legacy/CS-Images/FivePlane1.png",
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
        ],
        picture: ["/images/legacy/ESS-Images/Picture 5.png"],
      },
      {
        title: "",
        text: [
          "Besides, at the very beginning of the website, we had a similar vision of displaying a full-width picture or slide show gallery.",
        ],
        picture: [
          [
            "/images/legacy/ESS-Images/Picture 6.1.png",
            "/images/legacy/ESS-Images/Picture 6.2.png",
            "/images/legacy/ESS-Images/Picture 6.3.png",
          ],
        ],
      },
      {
        title: "",
        text: [
          "Since the landing page is what will catch the user's interest from the very second, therefore we made multiple different prototype, where we clarified what ESS is about and what service they provide, including the key points of their service.",
        ],
        picture: [
          [
            "/images/legacy/ESS-Images/Picture 7.1.png",
            "/images/legacy/ESS-Images/Picture 7.2.png",
            "/images/legacy/ESS-Images/Picture 7.3.png",
            "/images/legacy/ESS-Images/Picture 7.4.png",
          ],
        ],
      },
      {
        title: "",
        text: [
          "We considered implementing a section where the reviews of the company would be shown. Our idea was to display these as a card element in accordance with the Gestalt Principles.",
        ],
        picture: [
          [
            "/images/legacy/ESS-Images/Picture 8.1.png",
            "/images/legacy/ESS-Images/Picture 8.2.png",
          ],
        ],
      },
      {
        title: "",
        text: [
          "According to the footer design, we have tried to display the most important links from the website they should look for, if they missed it on the page, also the agency’s contact information.",
        ],
        picture: [["/images/legacy/ESS-Images/Picture 9.png"]],
      },
      {
        title: "",
        text: [
          "Moving to the service page, the most convenient solution we came up with is a vertical sidebar on the left with variety of tabs. On the right side, we placed a container with information, which can be changed by using the tabs",
        ],
        picture: [["/images/legacy/ESS-Images/Picture 10.png"]],
      },
      {
        title: "",
        text: [
          "We placed a page for the universities, where content and visuals play an important role, therefore it was our task to make it informative, while being easily readable. Since we have different universities' information, we tried to make the layout template that should suit all of them.",
        ],
        picture: [["/images/legacy/ESS-Images/Picture 11.2.png"]],
      },
      {
        title: "Lo-Fi",
        text: [
          "Following additional client meetings, we showcased the partner universities on the landing page based on feedback. This inspired us to display them on the university page as well, whereby clicking on the icon of the institution, the content will change accordingly.",
        ],
        picture: [["/images/legacy/ESS-Images/Picture 12.1.png"]],
      },
      {
        title: "",
        text: [
          "As a follow-up, we also placed a price scale, to highlight the advantage of using the service of our client by studying in European universities over Americans.",
        ],
        picture: [["/images/legacy/ESS-Images/Picture 12.2.png"]],
      },
      {
        title: "",
        text: [
          "Moreover, we placed an implementation of service package prices and what included in them to help consumers find a deal suited for their needs.",
        ],
        picture: [],
      },
      {
        title: "Surface Plane",
        text: [],
        picture: [["/images/legacy/ESS-Images/FivePlane1.png"]],
      },
      {
        title: "",
        text: [
          "After making the structure of wireframes and elements that should be on the page, we reached the Surface Plane. Here we placed our attention to the sensory design to produce a finished design, where content, functionality and aesthetics came together.",
        ],
        picture: [[]],
      },
      {
        title: "Mockup",
        text: [],
        picture: [["/images/legacy/ESS-Images/Picture 13.1.png"]],
      },
      {
        title: "",
        text: [
          "We have made the last iteration of combining our ideas, client wishes, and research to make the final product, with most of the necessary design assets and components.",
          "In the review section, we displayed place for 3 upcoming customer review, which in the future can be expanded with the use of a slide function.",
        ],
        picture: [["/images/legacy/ESS-Images/Picture 13.2.png"]],
      },
      {
        title: "",
        text: [
          "Reading plenty of text can result in fatigue. Placing pictures of the schools can uplift their mood and leave a cheerful impression on the users. Afterall, they sometimes speak more than words",
        ],
        picture: [["/images/legacy/ESS-Images/Picture 13.3.png"]],
      },
      {
        title: "",
        text: [
          "Lastly, but not least, the contact us page, provides is satisfying confirmation to eliminate any uncertainty if their application was submitted.",
        ],
        picture: [["/images/legacy/ESS-Images/Picture 13.4.png"]],
      },
      {
        title: "Responsive Design",
        text: [
          "Due to our target audience, making the website responsive was one of our highest priority. Consequently, we made prototypes for both tablet and mobile devices. This came with a responsive navigation via a hamburger menu.",
        ],
        picture: [
          "/images/legacy/ESS-Images/Picture 14.1.png",
          "/images/legacy/ESS-Images/Picture 14.2.png",
          "/images/legacy/ESS-Images/Picture 14.2.png",
        ],
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
        picture: ["/images/legacy/ESS-Images/Picture 15.png"],
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

const Catchscan = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    // Function to set isDarkMode based on user preference
    const setDarkModeBasedOnPreference = () => {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDarkMode);
    };

    // Call the function to set isDarkMode
    setDarkModeBasedOnPreference();

    // Optionally, you can also lis3ten for changes to the user's preference
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setIsDarkMode(e.matches);
    };

    mediaQueryList.addListener(listener);

    // Cleanup function to remove the listener
    return () => {
      mediaQueryList.removeListener(listener);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);

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
                CatchScan
              </h2>
              <h2 className="text-custom-blue text-md font-bold mb-4 tracking-wider uppercase">
                Copyright Protection SaaS
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
                              {Array.isArray(desc.text) ? (
                                desc.text.map((text, index) => (
                                  <React.Fragment key={index}>
                                    <p>{text}</p>
                                    {index !== desc.text.length - 1 && (
                                      <span
                                        style={{
                                          marginLeft: "-1em",
                                          display: "inline-block",
                                        }}
                                      />
                                    )}
                                  </React.Fragment>
                                ))
                              ) : (
                                <p>{desc.text || ""}</p>
                              )}
                            </div>
                            <div className="mt-2 flex flex-wrap justify-center items-start w-full">
                              {Array.isArray(desc.picture)
                                ? desc.picture.flatMap((group, groupIndex) =>
                                    Array.isArray(group) ? (
                                      <div
                                        key={groupIndex}
                                        className="flex space-x-4"
                                      >
                                        {group.map(
                                          (pictureUrl, pictureIndex) => (
                                            <Image
                                              key={`${groupIndex}-${pictureIndex}`}
                                              src={pictureUrl}
                                              alt={`Group Picture ${
                                                pictureIndex + 1
                                              }`}
                                              layout="fixed"
                                              width={150} // Fixed width for all images
                                              height={100} // Fixed height for all images
                                              objectFit="cover"
                                              className="mx-2" // Margin around each image for spacing
                                            />
                                          )
                                        )}
                                      </div>
                                    ) : (
                                      <Image
                                        key={groupIndex}
                                        src={group}
                                        alt="Single Picture"
                                        layout="fixed"
                                        width={150} // Fixed width for single images
                                        height={100} // Fixed height for single images
                                        objectFit="cover"
                                        className="mx-4" // Margin around the single image for spacing
                                      />
                                    )
                                  )
                                : null}
                            </div>{" "}
                            {/* Render subTitle and subText alternatively with spacing */}
                            <div className="text-sm text-gray-600 dark:text-gray-300">
                              {Array.isArray(desc.subTitle) &&
                                Array.isArray(desc.subText) &&
                                Array.isArray(desc.subPicture) &&
                                desc.subTitle.map((title, index) => (
                                  <div key={index} className="mb-2">
                                    {/* Add margin-bottom for spacing */}
                                    <React.Fragment>
                                      {/* Render subPicture using Next.js Image component */}
                                      {desc.subPicture?.[index] && (
                                        <div className="my-4 px-16">
                                          <Image
                                            src={desc.subPicture[index] ?? ""} // Provide a fallback image source
                                            alt={`Sub-picture ${index}`}
                                            layout="responsive"
                                            width={150} // Adjust the width as needed
                                            height={100} // Adjust the height as needed
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
                            </div>{" "}
                            {/* Render subPicture if it exists
                            {(desc.subPicture || []).length > 0 && (
                              <div className="mt-2 flex flex-row space-x-4">
                                {(desc.subPicture || []).map(
                                  (
                                    pictureUrl: string,
                                    pictureIndex: number
                                  ) => (
                                    <div
                                      key={pictureIndex}
                                      className="w-full max-w-xs"
                                    >
                                      <Image
                                        src={pictureUrl}
                                        alt={`Sub-picture ${pictureIndex}`}
                                        layout="responsive"
                                        width={150}
                                        height={100}
                                        objectFit="cover"
                                      />
                                    </div>
                                  )
                                )}
                              </div>
                            )} */}
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

export default Catchscan;
