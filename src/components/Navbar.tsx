"use client";

import React from "react";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav className="w-full absolute top-0 left-0">
      <ul className="w-full flex px-[10%] justify-between items-center">
        <li>
          <Image src="/logo.png" alt={"logo"} width={200} height={100} />
        </li>
        <li>
          <HiOutlineMenuAlt3 size={24} />
        </li>
      </ul>
    </nav>
  );
}
