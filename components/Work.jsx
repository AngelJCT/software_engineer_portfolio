"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "./ProjectCard";

const projectData = [
  {
    name: "TalkMate",
    description: "AI Language Learning Assistant",
    category: "react js",
    image: "/work/screenshot.png",
    link: "https://talkmate-react.vercel.app/",
    github: "https://github.com/AngelJCT/_talkmate_react",
  },
  {
    name: "Summize",
    description: "Summarize articles with AI",
    category: "react js",
    image: "/work/screenshot2.png",
    link: "/projects",
    github: "https://github.com/AngelJCT/ai_summarizer",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Preview of the latest projects completed.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
            }}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
          >
            {/* show only the first 4 projects for the sliders */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
