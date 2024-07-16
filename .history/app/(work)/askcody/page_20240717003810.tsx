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
      picture: "/images/legacy/AskCody-CaseIndex-New.png",
      text: "",
    },
    description: [
      {
        title: "Overview",
        text: [
          "AskCody is a company specializing in efficient meeting management through digital solutions. Their philosophy is based on improving the workplace experience, thus increasing employee productivity and satisfaction. Their main product is a cloud-based, flexible and secure solution for creating and managing meetings for office spaces, therefore creating a controlled distribution of the employees. Their platform also makes it possible to edit, track and analyze the meetings. However, our client is addressing major challenge due to the change in corporate office culture.",
        ],
        picture: [],
      },
      {
        title: "Problem",
        text: [
          "After the COVID-19 pandemic, the concept of workplaces has changed. More and more companies are in the process of transition from static to hybrid office environments. With this transition a new problem arises. Office resource management tools are simply not suitable for the new era of hybrid transformation.",
        ],
        picture: [],
      },
      {
        title: "Objective",
        text: [
          "To help companies address this issue, we will investigate developing a software solution which will capitalize on utilizing all the company's resources while providing flexible work arrangements for its employees.",
        ],
        picture: [],
      },
      {
        title: "Design Thinking",
        text: [
          "Our choice of development method for the project was Design Thinking as it can help us systematically extract, teach, learn and apply human centric techniques to solve problems in a creative and innovative way. By using Design Thinking we will ensure that the focus is kept on the users' needs and values, and that it is a human-centered procedure.",
        ],
        picture: [],
      },
      {
        title: "Empathize",
        text: [
        ],
        picture: [],
        subTitle: [
          "Interviews",
          "",
          "Personas",
          "",
          "",
        ],
        subText: [
        "We prepared a thorough interview guide and carefully selected the possible participants, as it would greatly influence the result. We believed that the best source to extract information from would be from personnel of the corporate offices.",
        "Based on the interviews, we gained insight to many unique needs, which we sorted and evaluated. From this we concluded that companies are looking to optimize their capacity of space resources and to increase the productivity of their employees by automating everyday ad-hoc tasks. In addition, complying with the hybrid model was a key factor.",
        "Together our findings we settled on having personas for the best representation of our target audience. By doing this we'll be able to know the specific needs of workers in similar positions and use their possible motivation or pain points for our own good. We chose to bring our perception for making it role based.",
        "",
        ],
        subPicture: [
          "",
          "",
          "",
          "/images/legacy/AC-Images/Figure1.png",
          "/images/legacy/AC-Images/Figure2.png",
        ],
      },
      {
        title: "Define",
        text: [
          "After finding the core issues to be solved, we analyze our observations from our users and funnel our thoughts down to make it more tangible. To do this we are synthesizing our findings so we can define the problem.",
        ],
        picture: [],
        subTitle: [
          "Point of View",
          "",
          "",
          "",
          "",
        ],
        subText: [
          "Since our project was revolving around exploring what are the crucial issues and how they could act as an obstacle for digital-first work environment, we had to define what the exact problems are, using an actionable problem statements.",
          "",
          "",
          "",
          "",
        ],
        subPicture: [
          "",
          "/images/legacy/AC-Images/Figure3.1.png",
          "/images/legacy/AC-Images/Figure3.2.png",
          "/images/legacy/AC-Images/Figure3.3.png",
          "/images/legacy/AC-Images/Figure3.4.png",
        ],
      },
      {
        title: "Ideate",
        text: [
        ],
        picture: [],
        subTitle: [
          "Crazy 8s",
          "",
          "",
          "",
          "",
        ],
        subText: [
          "Having sufficient data made it easy for us to start ideating on the show structure for the product and with it the functionalities which will provide a solution for different user types.´",
          "First, we are stating our goal, which in our case was to discover the potential functionality of the product. To fulfill this, we developed ideas under a short, predetermined amount of time and later validated them among us.´",
          "",
          "",
        ],
        subPicture: [
          ""
          "/images/legacy/AC-Images/Figure4.png",
          "/images/legacy/AC-Images/Figure5.png",
          "/images/legacy/AC-Images/Figure6.png",
          "/images/legacy/AC-Images/Figure7.png",
        ],
      },
      {
        title: "Prototype",
        text: [
          "",
        ],
        picture: [],
        subTitle: [
          "Sketches",
          "Low-Fidelity Wireframes",
          "",
          "High-Fidelity Mockups",
          "",
          "Atomic Design",
          "",
          "",
          "",
          "",
          "",
          "Colors",
          "",
          "",
          "Iterations",
          "",
          "",
          "",
          "",
          "",
        ],
        subText: [
          "After concluding our ideations phase, we had started make initial sketches that represents the primary idea of our design solution.",
          "To become more precise and see the actual details, although not fully acquired yet, we have created low-fidelity wireframes, where we were focusing on the layout and identifying elements.",
          "Considering the results of the user research we chose to apply a desktop first approach. This is because based on the user's preferences this is a more corporate pensive way of presenting the users with features. Nevertheless, it is an approach more welcome in the professional space and there is more opportunity to increase the number of features.",
          "Having done with wireframes, guided us towards creating high-fidelity mockups.",
          "Before we started the actual process of designing, we had decided on using Atomic Design as our choice of team collaboration methodology",
          "As the atomic design consists of components, our design process started with the smallest ones - Atoms",
          "By combining atoms together, we formed molecules. In our case as a molecules, we can consider buttons in navigation formed with an icon and text and cards with the buttons, texts, and images",
          "Organisms are next phase of connection smaller elements. Putting together cards we create “libraries”, menu buttons - navigation",
          "Templates are already complex solutions. It is a combination of organisms, and it represents how the pages will look like",
          "Finally, the complete design with included content - pages",
          "",
          "The first that draws the attention of the user are colors. They make the first impression, they affect how the users perceive the interface, see the functionality, they might evoke emotions, they increase the brand recognition as well, and invite the users to take an action. We are preparing solution for CatchScan, start-up company, with an already existing branding, thus we have decided to keep with their image and use their brand colors - blue and orange",
          "Even though, this was not the requirement, we believe to keep the consistency with their promoting website is a good brand move",
          "",
          "Throughout the design process, we went through several iteration before we found the best solution. It was not easy to find solution that captures our style the most in harmony",
          "",
          "",
          "",
          "Our final solution resulted in having a simple one-color background, as we believed this was can the user focus the most on the content, which will facilitate the process of fulfilling any task."
        ],
        subPicture: [
          "",
          "/images/legacy/CS-Images/Figure12.jpg",
          "/images/legacy/CS-Images/Figure13.png",
          "",
          "",
          "",
          "/images/legacy/CS-Images/Figure14.png",
          "/images/legacy/CS-Images/Figure15.png",
          "/images/legacy/CS-Images/Figure16.png",
          "/images/legacy/CS-Images/Figure17.png",
          "/images/legacy/CS-Images/Figure18.png",
          "",
          "/images/legacy/CS-Images/Figure19.png",
          "",
          "",
          "/images/legacy/CS-Images/Figure20.png",
          "/images/legacy/CS-Images/Figure21.png",
          "/images/legacy/CS-Images/Figure22.png",
          "",
          "/images/legacy/CS-Images/Figure23.png",
        ],
      },
      {
        title: "Test",
        text: [
          "To validate our findings, we had proceeded with conducting hybrid testing, using Five Second and Think Aloud tests. They helped us to verify that call-to-actions and the other important information are highlighted enough to catch the users attention and to make sure the user can interact with the product effortlessly.",
        ],
        picture: [],
      },
      {
        title: "Realization",
        text: [
          "Our project was coded using HTML, CSS and JavaScript. Additionally, we utilized Tailwind as our choice of CSS Framework, which resulted in a swift and efficient workflow.",
          "As we were creating a web app for service, having the feature of being able to sign up and log in is an essential part. We established this feature therefore the users can access the platform in the easiest way possible",
        ],
        picture: [
          "/images/legacy/CS-Images/Figure24.png",
        ],
      },
      {
        title: "",
        text: [
          "We started off the sign-up sequence by designing with the objective the ask for the most essential data from the user which is inevitable. For the subsequent steps we had to utilize our research and evaluate which lead us to include multiple user input.",
        ],
        picture: [
          "/images/legacy/CS-Images/Figure25.png",
        ],
      },
      {
        title: "Summary",
        text: [
          "To wrap up our process, we have created a dashboard for the SaaS company - CatchScan. We have created a way for their customers to protect their intellectual properties by giving them the possibility to upload their content for the algorithm to process. Furthermore, we provide them with the opportunity to initiate legal action against the found misusers, while supplying them with useful analytics",
          "The product was accomplished in a human-centered way though conducting broad research, resulting in an easy-to-use, intuitive interface.",
        ],
        picture: [],
      },
    ],
  },
];

const AskCody = () => {
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
                AskCody
              </h2>
              <h2 className="text-custom-blue text-md font-bold mb-4 tracking-wider uppercase">
                Hybrid Office Manager
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

export default AskCody;
