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
      <div className="sm:hidden xs:block">
        <Image
          src={"/work/Nokia_XR21.png"}
          alt="Preview of TalkMate"
          width={1500}
          height={1500}
          className="w-full"
        />
      </div>
      <div className="container mx-auto">
        <div className="xs:hidden sm:block">
          <Image
            src={"/work/Nokia_XR21.png"}
            alt="Preview of TalkMate"
            width={1200}
            height={1200}
            className="w-full"
          />
        </div>
        <div className="text-center md:text-left mt-5 mb-5">
          <h3 className="h3 mb-5 md:mb-3 text-darkBlue dark:text-[#7c95ba] underline underline-offset-[6px]">
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
