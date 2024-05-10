import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 ">
      <header className="flex justify-center mb-4">
        <Link
          href="/"
          className="text-lg font-bold text-gray-800 hover:text-gray-900"
        >
          WeatherWiz
        </Link>
      </header>
      <main className="w-full md:w-[800px] mx-auto">
        <h1 className="text-3xl font-bold mb-4">About WeatherWiz</h1>
        <p className="text-lg mb-6">
          WeatherWiz is a weather app that provides current and forecasted
          weather conditions for locations all around the world. Our mission is
          to provide accurate and reliable weather information to help people
          plan their daily activities.
        </p>
        <div className="flex flex-wrap justify-center mb-6">
          <div className=" flex gap-3  bg-black items-center rounded-lg">
            <Image
              alt={"logo"}
              width={100}
              height={100}
              src="/logoSymbol.png"
              className="w-32 h-24 mr-4 mb-4"
            />
            <Image alt={"logo"} width={140} height={50} src="/logotext.png" />
          </div>

          <p className="text-lg">
            Our team consists of experienced developers and meteorologists who
            are passionate about creating innovative weather solutions.
          </p>
        </div>
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc pl-4 mb-6">
          <li>
            Accuracy: We strive to provide the most accurate weather information
            possible.
          </li>
          <li>
            Reliability: Our app is designed to be reliable and always
            available.
          </li>
          <li>
            Innovation: We continuously innovate and improve our weather
            solutions.
          </li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
        <div className="flex flex-wrap justify-center mb-6">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h3 className="text-lg font-bold mb-2">Wai Yan</h3>
            <p className="text-lg">Founder & CEO</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h3 className="text-lg font-bold mb-2">Wai Yan</h3>
            <p className="text-lg">Lead Developer</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h3 className="text-lg font-bold mb-2">Wai Yan</h3>
            <p className="text-lg">Meteorologist</p>
          </div>
        </div>
      </main>
      <footer className="text-center text-lg text-gray-600 mb-4">
        <p>&copy; 2023 WeatherWiz. All rights reserved.</p>
      </footer>
    </div>
  );
}
