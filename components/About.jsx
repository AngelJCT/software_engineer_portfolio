import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  GraduationCap,
  Calendar,
  Briefcase,
  PhoneCall,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Angel Carrion",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+1 939 245 2012",
  },
  {
    icon: <MailIcon size={20} />,
    text: "acarrion5991@gmail.com",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Puerto Rico",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Software Engineer",
  },
  /* {
        icon: <Calendar size={20} />,
        text: 'Born on 20 Nov, 1995'
    }, */
  /* {
        icon: <Briefcase size={20} />,
        text: 'Software Engineer'
    }, */
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        college: "Holberton School of Programming",
        qualification: "Full Stack Software Engineer Program",
        years: "2022 - 2023",
      },
      {
        college: "University of Turabo",
        qualification: "Bachelor in Graphic Design",
        years: "2013 - 2018",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Freelance",
        role: "Full Stack Software Engineer",
        years: "2023 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        title: "Front-End Development",
      },
      {
        name: "HTML, CSS",
      },

      {
        name: "JavaScript, React",
      },
      {
        title: "Back-End Development",
      },
      {
        name: "Python, C, Node.js, Flask",
      },
      {
        title: "Databases",
      },
      {
        name: "MySQL, MongoDB, Firebase",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/Git-icon-1788C.svg",
      },
      {
        imgPath: "/about/linux-icon.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((data) => data.title === title);
  };

  return (
    <section className="xl:h-[860px] xl:py-24 py-12 mb-12 xl:mb-36 bg-gradient-to-b from-[#c1c3c9] to-[#f9f9f9] dark:bg-gradient-to-b  dark:from-[#1d1f25] dark:to-[#111114]">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <div className="circular-container-2 bg-no-repeat relative bg-opacity-20 object-contain overflow-hidden">
              <Image
                src="/hero/self_portrait.jpg"
                alt="Profile Picture"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>

          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none h-full xl:dark:bg-[#111114af] rounded-xl">
                <TabsTrigger
                  className="w-[162px] xl:w-auto rounded-xl"
                  value="personal"
                >
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto rounded-xl"
                  value="qualifications"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto rounded-xl"
                  value="skills"
                >
                  Skills
                </TabsTrigger>
              </TabsList>

              {/* tabs content */}
              <div className="text-lg mt-[100px] xl:mt-8">
                {/* personal info */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Graduated from a 9-month program in Full Stack Software
                      Engineering from Holberton School of Programming.
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      Over a comprehensive 9-month course, I gained hands-on
                      experience in backend development with C, Python, Flask,
                      and MySQL, as well as frontend proficiency using HTML,
                      CSS, and JavaScript, all through project-based learning.
                    </p>

                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          >
                            <div className="text-darkBlue dark:text-[#7c95ba]">
                              {item.icon}
                            </div>
                            <p className="">{item.text}</p>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-darkBlue dark:text-[#7c95ba]">
                        Language Skill
                      </div>
                      <div className="border-b border-muted-foreground"></div>
                      <div>English, Spanish</div>
                    </div>
                  </div>
                </TabsContent>

                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-darkBlue dark:text-[#6e7ea6]">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-darkBlue dark:bg-[#6e7ea6] absolute -left-[5px] group-hover:translate-y-[84px] translate-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-darkBlue dark:text-[#6e7ea6]">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { college, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-darkBlue dark:bg-[#6e7ea6] absolute -left-[5px] group-hover:translate-y-[84px] translate-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {college}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-muted-foreground mb-4"></div>
                      {/* skills list */}
                      <div className="">
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            return (
                              <div
                                key={index}
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              >
                                <div className="font-semibold text-darkBlue dark:text-[#6e7ea6]">
                                  {item.title}
                                </div>
                                <div className="font-medium">{item.name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-muted-foreground mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          return (
                            <div key={index}>
                              <Image
                                src={item.imgPath}
                                alt="Tools"
                                width={48}
                                height={48}
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
