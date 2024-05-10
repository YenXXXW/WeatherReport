"use client";

import React from "react";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmit(true);
  };
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 md:w-[500px]">
      <h1 className="text-5xl text-center mb-10">Contact Us</h1>
      <div className="contact-form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="form-input w-full mt-2 rounded-md shadow-sm"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="form-input w-full mt-2 rounded-md shadow-sm"
              required
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              className="form-textarea w-full mt-2 rounded-md shadow-sm"
              id="message"
              rows={5}
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black  text-white font-bold py-2 px-4 rounded-md w-full mt-5"
          >
            Send Message
          </button>
        </form>
        {isSubmit && (
          <div className="flex flex-col items-center">
            <p>Thank you for contact us</p>
            <button
              className="bg-black px-2 py-1 rounded-md text-white"
              onClick={() => setIsSubmit(false)}
            >
              Okay
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
