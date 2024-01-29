import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <h1 className="text-primary font-bold hover:underline tracking-[3px]">
        {theme === "light" ? (
          <Image
            src="/SVG/logo_light_7.svg"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer"
            priority
          />
        ) : (
          <Image
            src="/SVG/logo_dark_8.svg"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer"
            priority
          />
        )}
        {/* <span>ANGEL</span> */}
      </h1>
    </Link>
  );
};

export default Logo;
