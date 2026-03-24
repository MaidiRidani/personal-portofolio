"use client";
import Heading from "./sub/Heading";
import { pricingPlans, checkIcon } from "../assets";
import {motion} from 'framer-motion'

export const PricingPlans = () => {
  return (
    <div id="pricing" className="py-10">
      <Heading text={"Pricing Plans"}></Heading>
      <div className="h-full flex max-lg:flex-col items-center justify-between gap-8">
        {pricingPlans.map((plan, i) => (
          <motion.div
            key={plan.id} 
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            viewport={{once:true}}
            whileHover={{scale:1.1}}
            transition={{duration: 0.5, delay: i*0.2, scale: {duration: 0.15}}}
            className={`max-sm:w-67.5 flex flex-col gap-y-6 p-6 border border-red-400 rounded-xl text-gray-600 dark:bg-zinc-900 dark:text-white transition-colors ${
                i===1 ? "w-87.5 max-xl:w-75 bg-white" : "w-87.5 max-xl:w-75 bg-zinc-50"
            }`}
          >
            <h1 className="text-3xl max-lg:text-lg tracking-wide text-center font-bold dark:text-white transition-colors">
              {plan.title}
            </h1>
            <span className="text-2xl max-lg:text-xl text-center dark:text-white">
              {plan.pricing}
            </span>
            <ul className="flex flex-col gap-y-2">
              {plan.features.map((feture, j) => (
                <div key={j} className="flex text-center gap-x-3">
                  <span className={`text-2xl ${
                    i===1 ? " text-red-300" : "text-yellow-500"
                  }`}>{checkIcon}</span>
                  <li className="text-[15px] font-light tracking-wide dark:text-white transition-colors">
                    {feture}
                  </li>
                </div>
              ))}
            </ul>
            <p className="text-sm font-light text-center dark:text-gray-300 transition-colors " >
              <span className="font-semibold">Ideal for </span>
              {plan.recommended}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default PricingPlans;
