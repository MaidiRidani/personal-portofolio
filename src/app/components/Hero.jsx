"use client";
import Image from "next/image";
import { heroIcons } from "@/app/assets";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [windowOffset, setwindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [buttonHover, setbuttonHover] = useState(false);
  const [mouseMove, setmouseMove] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);

    // console.log(clientX,clientY,x,y)
  };

  const handleMouseEnter = () => {
    setwindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setmouseMove(true);

    console.log(innerWidth, innerHeight);
  };

  const xspring = useSpring(x, { stiffness: 500, damping: 100 });
  const yspring = useSpring(y, { stiffness: 100, damping: 10 });
  const { innerWidth, innerHeight } = windowOffset;
  const rotatY = useTransform(xspring, [0, innerWidth], [-30, 30]);
  const rotatX = useTransform(yspring, [0, innerHeight], [10, -50]);

  return (
    <div
      id="home"
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-y-3 font-light capitalize"
        >
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotatX : 0,
              rotateY: mouseMove ? rotatY : 0,
              transition: "0.1s",
            }}
          >
            <Image
              src={"/hai.png"}
              alt="Person Image"
              width={400}
              height={400}
              priority={true}
              className="h-auto w-37.5 max-md:w-20 "
            />
            <motion.span
              className="absolute -left-20 top-10 max-md:text-2xl -translate-y-1/2 text-3xl font-semibold text-zinc-800 dark:text-zinc-100"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              transition={{ opacity: { delay: 0.4 } }}
            >
              Hiii!!
            </motion.span>
          </motion.div>
          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 max-sm:text-2xl dark:text-white transition-colors">
            My Name is Maidi Ridani
          </h1>
          <p className="text-lg tracking-wider text-gray-700 dark:text-gray-200 transition-colors">
            Robotics & IoT Engineer
          </p>
          <p className="text-sm font-bold text-gray-700 whitespace-pre-line max-w-2xl mx-auto leading-relaxed text-center dark:text-white transition-colors">
            I build systems - not just code.
          </p>
          <p className="text-sm text-gray-700 whitespace-pre-line max-w-2xl mx-auto leading-relaxed text-center dark:text-white transition-colors">
            {`Focused on automation, embedded systems, and smart technology that solves real problems.
          Currently developing projects in robotics, control systems, and hardware–software integration.`}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl"
        >
          {heroIcons.map((icon, i) => (
            <motion.a
             initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href={icon.link}
              key={icon.id}
              className="hover:bg-red-500 hover:text-white transition-colors rounded-lg"
            >
              {icon.icon}
            </motion.a>
          ))}
        </motion.div>
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          href="https://wa.me/6282333007077?text=Halo%20Maidi,%20saya%20tertarik%20dengan%20portfolio%20Anda"
          className="mx-auto mt-15 block w-max rounded-lg bg-green-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
          onMouseEnter={() => setbuttonHover(true)}
          onMouseLeave={() => setbuttonHover(false)}
        >
          Chat on WhatsApp
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
