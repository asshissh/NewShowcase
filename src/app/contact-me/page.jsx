"use client";
import React, { useState } from "react";
import CrossIcon from "@/components/ui/CrossIcon";
import DownIcon from "@/components/ui/DownIcon";
import MailIcon from "@/components/ui/MailIcon";
import PhoneIcon from "@/components/ui/PhoneIcon";
import Right from "@/components/ui/Right";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setStatus(data?.message || "Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(data?.error || "Failed to send the message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-[calc(100%-100px)] text-gray-custom font-fira-code flex">
      {/* LEFT */}
      <div className="border-r border-white lg:w-[391px]">
        <div className="flex items-center h-[35px] border-b border-white px-2 text-white-custom">
          <DownIcon />
          <span className="pl-2">contacts</span>
        </div>

        <div className="flex flex-col px-6 py-3 h-[100px] justify-evenly border-b border-white">
          <div className="flex items-center gap-2 hover:text-white-custom cursor-pointer">
            <Right />
            <MailIcon />
            <span>Mail</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white-custom cursor-pointer">
            <Right />
            <PhoneIcon />
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="h-full w-full">
        <div className="flex items-center h-[35px] border-b border-white px-4 text-white-custom">
          <span>page.tsx</span>
          <div className="ml-4 border-r border-white h-full flex items-center px-2">
            <CrossIcon />
          </div>
        </div>

        <div className="pl-48 pt-8  ">
          <form onSubmit={handleSubmit}>
            {/* NAME */}
            <div className="pb-5">
              <div className="pb-2">_name:</div>
              <input
                className="bg-black-600 border border-gray-custom3 rounded-md w-80 h-9 px-2 focus:ring-2 focus:ring-gray-custom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* EMAIL */}
            <div className="pb-5">
              <div className="pb-2">_email:</div>
              <input
                className="bg-black-600 border border-gray-custom3 rounded-md w-80 h-9 px-2 focus:ring-2 focus:ring-gray-custom"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* MESSAGE + BUTTON */}
            <div className="pb-5">
              <div className="pb-2">_message:</div>

              <div className="flex flex-col sm:flex-row sm:items-end sm:gap-3">
                <textarea
                  className="
                    bg-black-600 border border-gray-custom3 rounded-md
                    w-80
                    h-20 
                    max-h-[40vh]
                    px-2 pt-1 resize-none
                    focus:ring-2 focus:ring-gray-custom
                  "
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />

                <button
                  type="submit"
                  disabled={!name || !email || !message || isSubmitting}
                  className="
                    h-9 w-40
                    mt-3 sm:mt-0
                    bg-white-custom2
                    text-white-custom text-[14px]
                    rounded-lg flex
                    items-center justify-center gap-2
                    transition-all
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                >
                  <MailIcon />
                  <span className="whitespace-nowrap">
                    {isSubmitting ? "Sending..." : "Send Email"}
                  </span>
                </button>
              </div>
            </div>
          </form>

          {status && <p className="mt-4 text-white-custom">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Page;
