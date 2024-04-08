"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedLetters from "./animatedLetters";

export default function Header() {
  const pathname = usePathname();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: "#headline",
        start: "bottom bottom",
        end: "bottom center",
      },
    });
    timeline
      .to("#page", {
        transition: "1s",
        backgroundColor: "white",
      })
      .to("#nav", {
        transition: "1.25s",
        color: "white",
        opacity: "1",
        right: 0,
      })
      .to("#logo", {
        scale: 0.25,
        transformOrigin: "left bottom",
      })
      .to("#header", {
        backgroundColor: "transparent",

        borderBottom: "white 2px solid",
        transition: "all 0.5s",
      });
  }, []);
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      id="header"
      className="px-2 overflow-x-clip md:mt-[85vh] flex justify-between items-center  sticky top-0 left-[1%] z-20 w-[98%] md:w-full"
    >
      <p className="relative font-semi-bold text-[27vw] sm:text-[24vw]  md:text-[22vw] lg:text-[20vw] xl:text-[17vw] 2xl:text-[14vw] z-20 py-0 my-0 text-orange-500 hover:text-white cursor-pointer text-stroke h-full mix-blend-difference">
        <Link href="/" id="logo" className="absolute flex bottom-0 left-0">
          <AnimatedLetters words="ARCCA" yParam="100" xParam="100" />
        </Link>
      </p>
      <p className="relative font-semi-bold text-[27vw] sm:text-[24vw]  md:text-[22vw] lg:text-[20vw] xl:text-[17vw] 2xl:text-[14vw] py-0 my-0 text-white cursor-pointer text-stroke h-full mix-blend-difference ">
        <span id="logo" className="absolute flex bottom-0 left-1 md:left-1">
          <AnimatedLetters words="ARCCA" yParam="100" xParam="100" />
        </span>
      </p>

      <ul
        id="nav"
        className="flex relative -right-2/3 opacity-0 justify-between md:justify-around w-2/4 md:w-1/3 ml-auto list-none "
      >
        {[
          ["ABOUT", "/about", "1"],
          ["SHOP", "/shop", "2"],
          ["CONTACT", "/contact", "3"],
        ].map(([title, url, key]) => (
          <Link
            key={key}
            href={url}
            className={clsx(
              "py-3 md:py-4 px-0 font-medium md:text-white invert md:filter-none z-30 hover:text-orange-500 cursor-pointer",
              {
                "underline  underline-offset-[10px]": pathname === url,
              }
            )}
          >
            {title}
          </Link>
        ))}
      </ul>
    </motion.nav>
  );
}
