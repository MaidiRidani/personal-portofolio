import React, { useState } from "react";
import Image from "next/image";
import { motion, spring } from "framer-motion";

const Project = ({ data, Index }) => {
  const [Show, setShow] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: Index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      onClick={() => setShow((Show) => !Show)}
      className="relative w-87.5 max-sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer dark:border-red-200"
    >
      <Image
        src={data.url}
        alt="Project Image"
        width={400}
        height={400}
        className="rounded-lg opacity-70"
      ></Image>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: Show ? 1 : 0 }}
        className="absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-2 bg-white/95 p-6 rounded-lg dark:bg-zinc-900/95 transition-colors "
      >
        <h2 className=" text-lg font-bold tracking-wide text-gray-500 dark:text-white transition-colors">
          {data.name}
        </h2>
        <p className="text-justify text-gray-500 first-letter:pl-2 dark:text-white transition-colors">
          {data.desc}
        </p>
      </motion.div>
    </motion.div>
  );
};
export default Project;
