"use server";

import { ForecastUrl } from "./api";

const date = new Date();

const year = date.getFullYear();
const month = String(date.getMonth() + 2).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");

const today = date.getDay();

export const getWeatheData = async (city: string) => {
  const response = await fetch(
    `${ForecastUrl}?key=` +
      process.env.NEXT_PUBLIC_WEATHER_API_KEY +
      `&q=${city}&days=10&aqi=yes&alerts=yes`
  );
  const forecastData = await response.json();

  return forecastData;
};
