import React from "react";
import { getWeatheData } from "@/lib/foreCastData";
import { Days } from "./page";
import Image from "next/image";
import { IoWaterOutline } from "react-icons/io5";

export default async function TenDayForeCast({ city }: { city: string }) {
  const forecastData = await getWeatheData(city);

  const data = forecastData.forecast.forecastday;
  return (
    <section className="w-full">
      <div className="w-full md:w-[80%] lg:w-1/2 px-3  bg-white mx-auto">
        <h6 className="text-lg py-3">10-DAY WEATHER FORECAST</h6>
        <div>
          {forecastData.forecast.forecastday.map((castday: any, i: number) => (
            <div
              key={i}
              className="flex justify-between border-t-[1px]  border-slate-300"
            >
              <div className="w-[60px] lg:w-[100px]">
                <p>
                  {i === 0 ? "Today" : Days[new Date(castday.date).getDay()]}
                </p>
              </div>
              <div className="flex items-center gap-2 w-[200px]">
                <Image
                  src={"https:" + castday.day.condition.icon}
                  alt={"icon"}
                  width={50}
                  height={50}
                />
                <span className="text-4xl font-semibold">
                  {castday.day.maxtemp_c}&deg;
                </span>
                /<span className="font-thin">{castday.day.mintemp_c}&deg;</span>
              </div>
              <div className="hidden md:block text-lg w-[150px]">
                {castday.day.condition.text}
              </div>
              <div className="flex items-center w-[50px]">
                <IoWaterOutline />
                {castday.day.daily_chance_of_rain}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
