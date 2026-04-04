"use client";
import Heading from "./sub/Heading";
import Project from "./sub/Project";
import { projectsData, projectsButton } from "../assets";
import { useState, useRef, useEffect } from "react";
import { animate, motion, scale } from "framer-motion";

export const Projects = () => {
  const [Tech, setTech] = useState("All");
  const [Index, setIndex] = useState(0);
  const prevIndex = useRef(0);
  const buttonsRef = useRef([]);
  const handleClick = () => {
    animate(buttonsRef.current[prevIndex.current], { opacity: 0.5, scale: 1 });
    animate(buttonsRef.current[Index], { opacity: 1, scale: 1.2 });
  };

  useEffect(() => {
    handleClick();
    prevIndex.current = Index;
  }, [Index]);

  return (
    <div id="projects" className="my-20 sm:py-20 ">
      <Heading text={"Projects"}></Heading>
      <div className="flex flex-wrap items-center justify-center gap-2 py-0 pb-10 sm:justify-between sm:gap-4 sm:py-10">
        {projectsButton.map((text, i) => (
          <motion.button
            initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 : 1 }}
            key={i}
            ref={(el) => buttonsRef.current.push(el)}
            className="border border-yellow-400 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-black dark:border-red-200 dark:text-zinc-50"
            onClick={() => {
                setTech(text)
              setIndex(i);
            }}
          >
            {text}
          </motion.button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5 ">
        {projectsData
          .filter((project) => {
            return project.tech.some((item) =>
            (Tech === "All" ? true : item === Tech))})
          .map((data, i) => (
            <motion.div key={`id-${i}`} layout>
              <Project data={data} index={i}></Project>
            </motion.div>
          ))}
      </div>
    </div>
  );
};
export default Projects;
