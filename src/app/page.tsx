import Image from "next/image";
import HomePage from "./HomePage/page";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section className=" bg-[url()] bg-contain w-screen h-screen">
      <div className="mt-[20%]">
        <HomePage />
      </div>
    </section>
  );
}
