"use client";

import Hero from "./ui/hero";
import Latest from "./ui/latest";
import Header from "./ui/header";
import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      animation: gsap.to("#svg", {
        duration: 2,
        left: "-60px",
        rotation: 360,
        ease: "power4.inOut",
      }),
      scrub: 1,
      trigger: "#headline",
      start: "bottom bottom",
      end: "bottom top",
    });
  }, []);
  return (
    <section>
      <Hero />

      <main className="bg-black relative z-10 overflow-x-clip  snap-y snap-mandatory ">
        <Header />

        <div
          id="headline"
          className="text-white w-[85%] ml-auto text-end font-semi-bold p-4 text-[8vw] md:text-[5.5vw] h-[45vw] md:h-full"
        >
          This is the magazine headline sentence.
        </div>
        <div className="w-full flex items-center justify-start overflow-hidden">
          <svg
            className="absolute w-[150px] h-[150px] overflow-visible origin-center left-[110%]"
            viewBox="0 0 500 500"
            data-duration="5"
            id="svg"
          >
            <path
              id="textcircle"
              fill="none"
              stroke="#f97316"
              stroke-width="5"
              data-duration="5"
              d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
            ></path>

            <text className="font-bold text-[80px] fill-orange-500" dy="-25">
              <textPath xlinkHref="#textcircle">
                <tspan className="text-[60px]">·</tspan> LATEST{" "}
                <tspan className="text-[60px]">·</tspan> ISSUE{" "}
                <tspan className="text-[60px]">·</tspan> LATEST{" "}
                <tspan className="text-[60px]">·</tspan> ISSUE{" "}
              </textPath>
            </text>
          </svg>
        </div>
        <Latest />
      </main>
    </section>
  );
}
