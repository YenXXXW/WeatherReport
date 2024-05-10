import React from "react";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    <section className="w-full">
      <div className="p-8 w-full md:w-[800px] mx-auto">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg mb-8">
          WeatherWiz offers a range of services to help you stay informed and
          prepared for any weather conditions. From accurate forecasts to severe
          weather alerts, we have got you covered.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Accurate Forecasts</h2>
            <p className="text-gray-600">
              WeatherWiz provides accurate and up-to-date weather forecasts to
              help you plan your day.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Severe Weather Alerts</h2>
            <p className="text-gray-600">
              WeatherWiz sends out severe weather alerts to keep you and your
              loved ones safe.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Educational Resources</h2>
            <p className="text-gray-600">
              WeatherWiz offers a range of educational resources for students
              and teachers. From slideshows of storms by category to time of day
              tables and isobars on weather maps, our resources are designed to
              help students learn about weather in a fun and interactive way.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Long-Range Forecasts</h2>
            <p className="text-gray-600">
              Get long-range weather forecasts for cities in the USA and
              internationally. Whether you are planning a trip next month or
              next year, we can help you prepare for the weather ahead.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">
              Advertising Opportunities
            </h2>
            <p className="text-gray-600">
              WeatherWiz offers advertising opportunities for businesses looking
              to reach a wide audience. With over 1.4 million visitors per
              month, our website is a great place to showcase your products or
              services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
