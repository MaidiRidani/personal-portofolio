"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import { reviewsData, starIcons, arrowIcons } from "../assets";
import { useState, useRef, useEffect } from "react";
import { animate, motion, scale } from "framer-motion";

export const Reviews = () => {
  const [Index, setIndex] = useState(0);
  const [Direction, setDirection] = useState(false);
  const prevIndex = useRef(0);
  const slides = useRef([]);

  const rightClickHadle = () => {
    animate(slides.current[Index], { x: 0 }, { delay: 0.3 });
    animate(slides.current[prevIndex.current], {
      scale: Index === 0 ? 1 : 0.4,
      rotate: Index === 0 ? 0 : Index % 2 === 0 ? 10 : -10,
    });
  };

  const leftClickHandle = () => {
    animate(slides.current[Index], { scale: 1, rotate: 0 }, { delay: 0.2 });
    animate(slides.current[prevIndex.current], { x: "100%" });
  };

  useEffect(() =>{
    Direction ? leftClickHandle() : rightClickHadle()
    prevIndex.current = Index
  } ,[Index])

  return (
    <div id="reviews" className=" my-20">
      <div>
        <Heading text={"Reviews"}></Heading>
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative w-200 max-lg:w-150 max-md:w-[95%] max-sm:w-70 h-125 max-lg:h-1125 max-md:h-100 max-sm:h-150 flex items-center justify-center overflow-hidden"
          >
            {reviewsData.map((review, i) => (
              <motion.div
                initial={{ x: "100%" }}
                key={review.id}
                className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 max-lg:gap-y-4 border border-yellow-500 bg-zinc-50 p-14 max-lg:p-6 rounded-xl dark:bg-zinc-900 dark:border-red-200 transition-colors"
                ref={(el) => (slides.current[i] = el)}
              >
                <Image
                  src={review.image}
                  alt="Review Image"
                  width={130}
                  height={130}
                  className="w-[130] aspect-square"
                ></Image>
                <h1 className="text-2xl md:text-xl text-center tracking-wider text-yellow-500 dark:text-zinc-50 transition-colors">
                  {review.name}
                </h1>
                <p className="text-lg max-md:text-sm text-justify font-extralight text-gay-80 dark:text-zinc-100 transition-colors">
                  {review.comment}
                </p>
                <div className="flex flex-col items-center justify-center gap-y-2">
                  <span className="text-lg font-light text-yellow-500 mr-3">
                    {review.stars
                      .reduce((sum, item) => {
                        return (sum += item);
                      }, 0)
                      .toFixed(1)}
                  </span>
                  <div className="flex items-center gap-x-2 text-2xl text-yellow-500 ">
                    {review.stars.map((star, i) => (
                      <span key={i}>
                        {star === 1 ? starIcons[0] : starIcons[1]}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5 dark:text-zinc-100 transition-colors">
            <button className={`${Index === 0 ? 'opacity-30 pointer-events-none': 'opacity-100 pointer-events-auto'}`} onClick={() => {
              setDirection(true)
              setIndex(Index - 1 )
            }}>{arrowIcons[0]}</button>
            <button className={`${Index === reviewsData.length - 1 ? 'opacity-30 pointer-events-none': 'opacity-100 pointer-events-auto'}`} onClick={() => {
              setDirection(false)
              setIndex(Index + 1 )
            }} 
            >{arrowIcons[1]}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
