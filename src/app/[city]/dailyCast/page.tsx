import React from "react";
import Link from "next/link";
import { Days } from "../page";
import Image from "next/image";
import { IoWaterOutline } from "react-icons/io5";
import { getWeatheData } from "@/lib/foreCastData";

interface PageProps {
  params: {
    city: string;
  };
}

export default async function Dailyforecast({ params: { city } }: PageProps) {
  const forecastData = await getWeatheData(city);

  const data = forecastData.forecast.forecastday;

  return (
    <section className="w-full">
      <div className="w-full md:w-[80%] lg:w-1/2 shadow-md   mx-auto">
        <div className="flex py-3 gap-20">
          <Link href={`/${city}/`}>Today</Link>
          <Link href={`/${city}/dailyCast`}>Daily</Link>
        </div>

        <h6 className="py-3 text-lg font-semibold px-3 bg-white">Daily Cast</h6>
        <div className="w-full flex flex-col gap-5">
          {data.map((castday: any, i: number) => (
            <div key={i} className="flex flex-col gap-5  px-5 py-3  bg-white">
              <div className="flex justify-between">
                <div className="flex gap-10 items-center">
                  <p>
                    {i === 0 ? "Today" : Days[new Date(castday.date).getDay()]}
                  </p>

                  <div className="flex items-center gap-2">
                    <Image
                      src={"https:" + castday.day.condition.icon}
                      alt={"icon"}
                      width={50}
                      height={50}
                    />
                    <span className="text-4xl font-semibold">
                      {castday.day.maxtemp_c}&deg;
                    </span>
                    /
                    <span className="font-thin">
                      {castday.day.mintemp_c}&deg;
                    </span>
                  </div>
                </div>

                <div className="flex items-center">
                  <IoWaterOutline />
                  {castday.day.daily_chance_of_rain}%
                </div>
              </div>
              <div className="text-lg  border-t-[1px]  border-slate-300 pt-3">
                {castday.day.condition.text}
              </div>
              <div className="flex gap-5 ">
                <p className="flex justify-between border-t-[1px] border-slate-300 w-full pt-3">
                  <span>Max UV Index</span>
                  <span>{castday.day.uv}</span>
                </p>
                <p className="flex justify-between  border-t-[1px]  border-slate-300  w-full pt-3">
                  <span>Wind</span>
                  <span>{castday.day.maxwind_kph} km/p</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
