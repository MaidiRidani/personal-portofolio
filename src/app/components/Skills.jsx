"use client";
import { skillsData } from "../assets";
import Heading from "./sub/Heading";
import Image from "next/image";
import {delay, motion} from "framer-motion";


const Skills = () => {
  const variants ={
    visible : (i) => ({
      opacity : 1,
      y: 0,
      transition : {
        delay: 0.3 + i * 0.07,
        
      },
    }),
    hidden :{
      opacity: 0,
      y: 30,
    },
  }
  
  return (
    <div id="skills" className=" flex flex-col items-center justify-center  gap-y-0 sm:gap-y-10">
      <Heading text="Skills"></Heading>
      <div className="w-full flex flex-wrap justify-between gap-x-8 gap-y-10 max-sm:justify-center max-sm:gap-x-4 max-sm:gap-y-6 max-sm:px-4">
        {skillsData.map((item, i) => (
          <motion.div
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover={{scale:1.2}}
            viewport={{margin: '50px', once: true}}
            key={item.id}
            className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-4 py-2 w-35 sm:w-auto"
          >
            <Image
              src={item.icon}
              alt="Skills Image"
              width={100}
              height={100}
              className="h-auto w-10"
            ></Image>{" "}
            <p className="text-sm text-gray-600">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
