"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Searchbox() {
  const router = useRouter();
  const hadleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/${city}`);
  };

  const [city, setCity] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => hadleSearch(e)}
        className="bg-white flex items-center px-2 py-1"
      >
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="text-black w-[120px] md:w-[200px] focus:outline-none"
        />
        <button className="text-black">
          <CiSearch size={23} />
        </button>
      </form>
    </div>
  );
}
