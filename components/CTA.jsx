import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-12 bg-[#f4f4f4] dark:bg-[#1a1b21]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Interested in a Dedicated Developer for Your Team? I'm Ready to Dive
            In and Contribute!
          </h2>
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
