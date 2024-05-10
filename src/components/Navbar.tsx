"use client";

import React from "react";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-black overflow-auto py-1">
      <ul className="w-full flex md:w-[800px] justify-between items-center mx-auto">
        <Link href={"/"}>
          <li className="flex gap-3 items-center">
            <Image
              src="/logosymbol.png"
              alt={"logoSymbol"}
              width={50}
              height={50}
            />
            <Image
              src="/logotext.png"
              alt={"logotext"}
              width={120}
              height={50}
              className="hidden md:block"
            />
          </li>
        </Link>
        <li>
          <div className="hidden md:flex text-white gap-10">
            <Link href={"/About"}>About</Link>
            <Link href={"/ContactUs"}>Contact</Link>
            <Link href={"/Services"}>Services</Link>
          </div>
          <HiOutlineMenuAlt3 size={24} className="text-white md:hidden" />
        </li>
      </ul>
    </nav>
  );
}
