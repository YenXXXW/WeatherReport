import React from "react";
import { getWeatheData } from "@/lib/foreCastData";
import { Days } from "../page";
import Image from "next/image";
import { IoWaterOutline } from "react-icons/io5";

interface PageProps {
  params: {
    city: string;
  };
}

export default async function TenDayForeCast({ params: { city } }: PageProps) {
  const forecastData = await getWeatheData(city);

  const data = forecastData.forecast.forecastday;
  return (
    <section className="w-1/2 px-3  bg-white">
      <h6>10-DAY WEATHER FORECAST</h6>
      <div>
        {forecastData.forecast.forecastday.map((castday: any, i: number) => (
          <div
            key={i}
            className="flex justify-between border-t-[1px]  border-slate-300"
          >
            <div className="w-[100px]">
              <p>{i === 0 ? "Today" : Days[new Date(castday.date).getDay()]}</p>
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
            <div className="text-lg w-[150px]">
              {castday.day.condition.text}
            </div>
            <div className="flex items-center w-[50px]">
              <IoWaterOutline />
              {castday.day.daily_chance_of_rain}%
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
