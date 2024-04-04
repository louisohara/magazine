import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";
import { SetStateAction } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import AnimatedLetters from "./animatedLetters";

interface HeadlineProps {
  setIsIntersecting: React.Dispatch<SetStateAction<boolean>>;
  isIntersecting: boolean;
}

const textProp = "This is the magazine headline sentence.";

export default function Headline({
  setIsIntersecting,
  isIntersecting,
}: HeadlineProps) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIsIntersecting(true);
    } else {
      setIsIntersecting(false);
    }
  }, [inView]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      animation: gsap.to("#svg", {
        duration: 2,
        left: "-60px",
        rotation: -720,
        ease: "power4.inOut",
      }),
      scrub: 1,
      trigger: "#headline",
      start: "bottom bottom",
      end: "bottom top",
    });
  }, []);

  return (
    <div className={clsx("snap-always snap-center")} ref={ref}>
      <div
        id="headline"
        className="text-white w-[85%] ml-auto text-end font-semi-bold p-4 text-[8vw] md:text-[5.5vw] h-[calc(40vh-58.5px)] md:h-full"
      >
        <AnimatedLetters words={textProp} yParam="-100" xParam="100" />
      </div>
      <div className="w-full flex items-center justify-start overflow-hidden">
        <svg
          className="absolute w-[150px] h-[150px] overflow-visible origin-center left-[200%]"
          viewBox="0 0 500 500"
          data-duration="5"
          id="svg"
        >
          <path
            id="textcircle"
            fill="none"
            stroke="#f97316"
            strokeWidth="5"
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
    </div>
  );
}
