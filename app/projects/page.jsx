"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    name: "TalkMate",
    description: "AI Language Learning Assistant",
    category: "react js",
    image: "/work/talkmate.png",
    link: "https://talkmate-react.vercel.app/",
    github: "https://github.com/AngelJCT/_talkmate_react",
    previewUrl: "/preview_talkmate"
  },
  {
    name: "SyntaxBridge",
    description: "Compare programming languages syntax",
    category: "next js",
    image: "/work/syntaxbridge.png",
    link: "https://www.syntaxbridge.app/",
    github: "https://github.com/AngelJCT/SyntaxBridge",
    previewUrl: ""
  },
];

// remove category duplicate
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((project) => project.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState();

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    if (category === "all projects") {
      return project;
    } else {
      return project.category === category;
    }
  });

  return (
    <section className="min-h-screen pt-12 bg-gradient-to-b from-[#f9f9f9] via-[#c1c3c9] to-[#f9f9f9] dark:bg-gradient-to-b dark:from-[#0f0f12] dark:via-[#1d1f25] dark:to-[#0f0f12]">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="grid h-full md:grid-cols-2 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none xl:dark:bg-[#1a1b21]">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
