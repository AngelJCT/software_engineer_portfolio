"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Socials from "./Socials";
import Badge from "./Badge";
import Image from "next/image";

const Hero = () => {
  // Code to animate the h1 titles. Add ref={textRef} in h1 to animate

  /* const textRef = useRef();
  const typingTimeouts = useRef([]);

  useEffect(() => {
    const titles = ["Hi, I'm Angel Carrion", "Web Developer", "Photographer"];
    let titleIndex = 0;
    let letterIndex = 0;
    let isAdding = true;

    const typeTitle = () => {
      if (textRef.current) {
        if (isAdding) {
          if (letterIndex <= titles[titleIndex].length) {
            textRef.current.textContent = titles[titleIndex].slice(
              0,
              letterIndex++
            );
            typingTimeouts.current.push(setTimeout(typeTitle, 100)); // speed of typing
          } else {
            isAdding = false;
            typingTimeouts.current.push(setTimeout(typeTitle, 1000)); // pause at end
          }
        } else {
          if (letterIndex > 0) {
            textRef.current.textContent = titles[titleIndex].slice(
              0,
              letterIndex--
            );
            typingTimeouts.current.push(setTimeout(typeTitle, 100)); // speed of deleting
          } else {
            isAdding = true;
            titleIndex = (titleIndex + 1) % titles.length;
            typingTimeouts.current.push(setTimeout(typeTitle, 100)); // delay before new title
          }
        }
      }
    };

    typingTimeouts.current.push(setTimeout(typeTitle, 100)); // initial delay

    return () => {
      // Clear all timeouts on component unmount
      typingTimeouts.current.forEach(clearTimeout);
    };
  }, []); */

  return (
    <section className="py-12 xl:py-24 sm:h-[84vh] xs:h-[100vh] xl:pt-28 bg-gradient-to-b from-[#f9f9f9] to-[#c1c3c9] bg-no-repeat bg-bottom bg-cover dark:bg-gradient-to-b dark:from-[#111114] dark:to-[#1d1f25]">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Software Engineer
            </div>
            <h1 className="hero-title h1 mb-4">Hi, I'm Angel Carrion</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              "Software Engineer with a focus on creating intuitive React
              websites, honed through a hands-on 9-month project-based program.
              Skilled in Python, Flask, MySQL, Firebase, MongoDB, and merging
              photography with AI. Committed to innovation and continuous
              learning."
            </p>

            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <a
                href="/Angel_J_Carrion_CV.pdf"
                download="Angel_J_Carrion_CV.pdf"
              >
                <Button
                  variant="secondary"
                  className="gap-x-2 border-[1px] border-muted-foreground"
                >
                  Download CV <Download size={18} />
                </Button>
              </a>
            </div>

            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            {/* Badges to add on the photo */}

            {/* <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={1}
              badgeText="Year Of Experience"
            />

            <Badge
              containerStyles="absolute top-[70%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={3}
              badgeText="Finished Projects"
            />

            <Badge
              containerStyles='absolute top-[55%] -right-8'
              icon={<RiTeamFill/>}
              endCountNum={3}
              badgeText='Happy Clients'
            /> */}
            <div className="circular-container bg-no-repeat relative bg-bottom bg-opacity-10 object-contain overflow-hidden">
              <Image
                src="/hero/self_portrait_2.jpg"
                alt="Profile Picture"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                priority
                sizes=""
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-4xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
