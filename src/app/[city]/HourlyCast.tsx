import React, { useRef } from "react";
import { getWeatheData } from "@/lib/foreCastData";
import Image from "next/image";
import { IoWaterOutline } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default async function HourlyCast({ city }: { city: string }) {
  const forecastData = await getWeatheData(city);

  const data = forecastData.forecast.forecastday[0].hour;

  // const scrollHorizontal = (direction: string) => {
  //   const slider = document.getElementById("slider");
  //   if (!slider) return;
  //   if (direction === "left") {
  //     slider.scrollLeft = slider.scrollLeft - 500;
  //   } else {
  //     slider.scrollLeft = slider.scrollLeft + 500;
  //   }
  // };
  return (
    <section className="w-full">
      <div className="w-full md:w-[80%] lg:w-[50%] mx-auto">
        <div className="w-full px-3 bg-whte">
          <p className="py-3  border-b-[1px] border-slate-300">
            HOURLY WEATHER
          </p>
          <div className="flex w-full gap-3 overflow-scroll" id={"slider"}>
            {/* <FaChevronLeft
            size={25}
            className="cursor-pointer"
            onClick={() => scrollHorizontal("left")}
          /> */}
            {data.map((hourlyData: any, i: number) => (
              <div key={i} className="items-center">
                <p className="font-semibold text-lg">
                  {new Date(hourlyData.time).getHours() <= 12
                    ? `${new Date(hourlyData.time).getHours()} AM`
                    : `${new Date(hourlyData.time).getHours() - 12} PM`}
                </p>
                <div className="h-[80px] flex items-center">
                  <Image
                    src={"https:" + hourlyData.condition.icon}
                    alt={"weatherIcon"}
                    width={60}
                    height={60}
                  />
                </div>

                <p>
                  <span className="text-4xl font-semibold">
                    {hourlyData.temp_c}&deg;
                  </span>
                </p>

                <div className="flex items-center mt-2">
                  <IoWaterOutline />
                  {hourlyData.chance_of_rain}%
                </div>
              </div>
            ))}
            {/* <FaChevronRight
            className="cursor-pointer"
            onClick={() => scrollHorizontal("right")}
          /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
