import React from "react";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-[#f9f9f9] via-[#c1c3c9] to-[#f9f9f9] dark:bg-gradient-to-b dark:from-[#0f0f12] dark:via-[#1d1f25] dark:to-[#0f0f12]">
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-darkBlue dark:text-[#7c95ba] text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-darkBlue dark:bg-[#7c95ba]"></span>
              Say Hello
            </div>
            <h1 className="h1 max-w-md mb-8 py-1 bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-primary dark:to-muted-foreground dark:bg-clip-text dark:text-transparent">
              Let's Work Together.
            </h1>
            <p className="subtitle max-w-[400px]">
              I'm eager to contribute my skills in HTML, CSS, JavaScript, React,
              Python, Flask, MySQL, and collaborate on exciting projects. Reach
              out to discuss how I can contribute on achieving great results!
            </p>
          </div>
          {/* illustration */}
          <div></div>
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon
                size={18}
                className="text-darkBlue dark:text-[#7c95ba]"
              />
              <div>acarrion5991@gmail.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon
                size={18}
                className="text-darkBlue dark:text-[#7c95ba]"
              />
              <div>Puerto Rico</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall
                size={18}
                className="text-darkBlue dark:text-[#7c95ba]"
              />
              <div>+1 939 245 2012</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
