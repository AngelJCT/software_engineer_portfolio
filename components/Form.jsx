"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  Send,
} from "lucide-react";
import useContactForm from "@/hooks/useContactForm";
import sendEmail from "@/utils/sendEmail";

const Form = () => {
  const { values, handleChange } = useContactForm();
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: "",
  });
  // handleSubmit function using FormData
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = await sendEmail(values.email, values.subject, values.message);
      if (req.status === 250) {
        setResponseMessage({
          isSuccessful: true,
          message: "Thank you for your message.",
        });
      }
    } catch (e) {
      console.log(e);
      setResponseMessage({
        isSuccessful: false,
        message: "Oops something went wrong. Please try again.",
      });
    }
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      {/* input */}
      <div className="relative flex items-center border border-gray-400 rounded-lg shadow-sm dark:shadow-none">
        <Input
          type="name"
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
        />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center border border-gray-400 rounded-lg shadow-sm dark:shadow-none">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          required
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center border border-gray-400 rounded-lg shadow-sm dark:shadow-none">
        <Textarea
          placeholder="Your Message Here."
          id="message"
          value={values.message}
          onChange={handleChange}
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      {/* button */}
      <Button
        className="flex items-center max-w-[166px] gap-x-2"
        type="submit"
        value="submit"
      >
        Let's Talk
        <Send size={20} />
      </Button>
    </form>
  );
};

export default Form;
