"use client";
import React, { useState } from "react";
import { Button } from "./Multiple";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="mb-1 block font-medium text-gray-600"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full resize-none border px-3 py-2 outline-none focus:border-[#0f172a]"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-1 block font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full resize-none border px-3 py-2 outline-none focus:border-[#0f172a]"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="mb-1 block font-medium text-gray-600"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full resize-none border px-3 py-2 outline-none focus:border-[#0f172a]"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <Button buttonText={"Submit"} />
      </form>
    </div>
  );
};

export default ContactForm;
