"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { ThemeToggler } from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollYPos);
    };
  });

  return (
    <header
      className={`${
        header
          ? "py-4 bg-[#f9f9f9] shadow-xl dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center tracking-[1px] text-primary"
              linkStyles="relative hover:text-grey-200 transition-all"
              underlineStyles="absolute w-full h-[2px] bg-primary top-full left-0"
            />
            <ThemeToggler />

            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
