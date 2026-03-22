'use client'
import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Reviews from "./components/Reviews";
import Projects from "./components/Projects";
import PricingPlans from "./components/PricingPlans";
import Contact from "./components/Contact";
import Questions from "./components/Questions";
import Navbar from "./components/Navbar";
import Toogle from "./components/sub/Toogle";
import Load from "./components/sub/Load";
import { useEffect, useRef, useState } from "react";

export default function Home() {
      const [Id, setId] = useState(0)
      const compsRef = useRef(null)
 
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const intersecting = entry.isIntersecting
              if(intersecting){
                setId(entry.target.id)
              }
            })
          }, {
            threshold:0.3
          },
        )
        const compsArr = Array.from(compsRef.current.children)
        compsArr.forEach((comp) =>{
          observer.observe(comp)
        })
      },[])
      
  return (
    <>
    <Load></Load>
    <Toogle>
    <Navbar id={Id}></Navbar>
    <div className="W-min" ref={compsRef}>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Skills></Skills>
      <Reviews></Reviews>
      <Projects></Projects>
      <PricingPlans></PricingPlans>
      <Contact></Contact>
      <Questions></Questions>
    </div>
    </Toogle>
    </>
  );
}
