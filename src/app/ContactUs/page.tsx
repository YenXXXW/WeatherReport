import React from "react";

export default function page() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 md:w-[500px]">
      <h1 className="text-5xl text-center mb-10">Contact Us</h1>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="form-input w-full mt-2 rounded-md shadow-sm"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="form-input w-full mt-2 rounded-md shadow-sm"
              id="email"
              placeholder="Enter your email"
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
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md w-full mt-5"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
