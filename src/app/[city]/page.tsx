import React from "react";
import { CurentForecastUrl, ForecastUrl } from "@/lib/api";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Searchbox from "../HomePage/Searchbox";

import { getWeatheData } from "@/lib/foreCastData";
import TenDayForeCast from "./TenDayForeCast";
import HourlyCast from "./HourlyCast";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
  params: {
    city: string;
  };
}

export function generateMetadata({ params: { city } }: PageProps): Metadata {
  return {
    title: city.replace("%20", " ") + " - WeatherWiz",
  };
}

export const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default async function page({ params: { city } }: PageProps) {
  try {
    const forecastData = await getWeatheData(city);

    const data = forecastData.current;

    const replacedString = city.replace("%20", " ");

    return (
      <section className="w-full  ">
        <ul className="w-full py-1 text-black border0al">
          <div className="flex gap-20 w-full md:w-[80%] lg:w-[50%]  mx-auto justify-between items-center">
            <div className="flex gap-3 items-center">
              <span className="font-semibold">{replacedString}</span>
              <span>
                {data.temp_c}
                &deg; C
              </span>
              <Image
                src={"https:" + data.condition.icon}
                alt={"icon"}
                width={50}
                height={50}
              />
            </div>

            <div className="flex items-center gap-3">
              <Searchbox />
            </div>
          </div>
        </ul>
        <div className="w-full flex gap-20 md:w-[80%] lg:w-[50%] px-3 mx-auto py-3">
          <Link href={`/${city}/`}>Today</Link>
          <Link href={`/${city}/dailyCast`}>Daily</Link>
        </div>
        <div className="flex flex-col gap-14">
          <div className="w-full md:w-[80%] lg:w-[50%] bg-white px-3 py-3 mx-auto">
            <h4 className="my-2 border-b-[1px] border-white/30">
              CURRENT WEATHER
            </h4>
            <div>
              <div className="flex justify-between gap-5 sm:gap-10 md:gap-14 lg:gap-16 items-center">
                <div className="flex gap-2 items-center">
                  <Image
                    src={"https:" + data.condition.icon}
                    alt={"icon"}
                    width={50}
                    height={50}
                    className="w-[100px] h-[100px]"
                  />
                  <div>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl">
                      {data.temp_c}
                      &deg;
                    </h2>
                    <h4>
                      RealFeel{data.feelslike_c}
                      &deg;
                    </h4>
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="flex w-full justify-between py-3 border-slate-300 border-b-[1px]">
                    <span>Wind</span>
                    <span>
                      {data.wind_dir} {data.wind_kph} km/h
                    </span>
                  </p>
                  <p className="flex w-full justify-between py-3">
                    <span>Air Quality</span>
                    <span>Excellent</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <TenDayForeCast city={city} />

          <HourlyCast city={city} />
        </div>
      </section>
    );
  } catch (err) {
    return (
      <div className="w-full text-2xl mt-[10%] items-center text-center">
        <p>Cannot find data for the Entered city </p>
        <Link href={"/"} className="underline">
          Home
        </Link>
      </div>
    );
  }
}
