import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative rounded-xl dark:border-none">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-[#f4f4f4] dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            src={project.image}
            width={247}
            height={250}
            alt=""
            priority
            className="absolute bottom-0 shadow-2xl rounded-[5px]"
          />
          {/* button links */}
          <div className="flex gap-x-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary dark:bg-background w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-208"
            >
              <Link2Icon className="text-white" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary dark:bg-background w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-208"
            >
              <Github className="text-white" />
            </a>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5 shadow-xl">
          {project.category}
        </Badge>
        <Link href="/preview_talkmate" passHref>
          <h4 className="h4 mb-1 underline underline-offset-4">
            {project.name}
          </h4>
        </Link>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
