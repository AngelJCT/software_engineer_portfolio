import React from "react";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

// Assuming projectData is imported or defined elsewhere in the file
const projectData = [
  {
    name: "TalkMate",
    description: "AI Language Learning Assistant",
    category: ["react js", "openai", "tailwind css", "firebase"],
    image: "/work/talkmate.png",
    link: "/",
    github: "/",
  },
  // Add more projects here if needed
];

const ProjectImages = () => {
  // Flatten the array of categories from all projects and create a unique set
  const uniqueCategories = Array.from(
    new Set(projectData.flatMap((project) => project.category))
  );

  return (
    <section className="min-h-screen pt-12 bg-gradient-to-b from-[#f9f9f9] via-[#c1c3c9] to-[#f9f9f9] dark:bg-gradient-to-b dark:from-[#0f0f12] dark:via-[#1d1f25] dark:to-[#0f0f12]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Image
            src={"/work/starting_page.png"}
            width={647}
            height={650}
            alt="Preview of TalkMate"
            priority
            className="w-full h-auto rounded-sm drop-shadow-xl shadow-xl dark:shadow-none border-[#f9f9f9] border-8 dark:border-[#f9f9f9]"
          />
          <Image
            src={"/work/chat_interface.png"}
            width={647}
            height={650}
            alt="Preview of TalkMate"
            priority
            className="w-full h-auto rounded-sm shadow-xl drop-shadow-xl dark:shadow-none border-8 border-[#f9f9f9] dark:border-[#f9f9f9]"
          />
        </div>
        <div className="text-center md:text-left mt-5 mb-5">
          <h3 className="h3 mb-5 md:mb-3 text-darkBlue underline underline-offset-[6px]">
            TalkMate
          </h3>
          <h4 className="h4 mb-5 md:mb-3">
            Engage in real-time conversations with native speakers, powered by
            intelligent AI that provides:
          </h4>
          <p className="mb-5 text-lg max-w-2xl max-auto xl:mx-0">
            <ul className="list-disc list-inside">
              <li>
                <b>Seamless translation:</b> Break down language barriers and
                communicate confidently with translation support.
              </li>
              <li>
                <b>Masterful pronunciation:</b> Hone your accent with AI-powered
                feedback for your pronunciation.
              </li>
              <li>
                <b>Cultural insights:</b> Go beyond words and delve into the
                nuances of different cultures, gaining valuable context for your
                interactions.
              </li>
            </ul>
          </p>
        </div>
        <div className="gap-4 h-full mb-10">
          {uniqueCategories.map((category, index) => (
            <Badge key={index} className="ml-2">
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectImages;
