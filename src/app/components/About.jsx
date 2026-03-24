"use client";
import Heading from "./sub/Heading";
import Achievements from "./sub/Achievements";
import Image from "next/image";
import {
  aboutData,
  aboutText,
  downloadIcon,
  arrowIcons,
  arrowLeftIcon,
} from "../assets/index";

const About = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col items-center justify-center">
      <Heading text={"About Me"}></Heading>
      <div className="w-full flex items-center justify-between max-md:justify-center">
        <Image
          className="w-75 max-lg:w-50 max-md:hidden "
          src={"/aboutmev2.png"}
          alt="About Image"
          width={400}
          height={400}
        ></Image>
        <div className="relative max-w-200 rounded-xl bg-zinc-100 p-5 text-justify dark:bg-zinc-800 transition-colors">
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-200 max-md:hidden dark:text-zinc-800 transition-colors ">
            {arrowLeftIcon}
          </span>
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 max-lg:text-[16px] max-sm:text-[14px] dark:text-white">
            {aboutText}
          </p>
          <a
            href="/CV-2025-november.pdf"
            download={""}
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
          >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span>
          </a>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        {aboutData.map((aboutdata) => (
          <Achievements key={aboutdata.id} title={aboutdata.title} amount={aboutdata.amount}>
            {aboutdata.icon}
          </Achievements>
        ))}
      </div>
    </div>
  );
};

export default About;
