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

    ScrollTrigger.create({
      animation: gsap.to("#logo", {
        scale: 0.25,
        transformOrigin: "left bottom",
      }),
      scrub: 1,
      trigger: "#headline",
      start: "bottom bottom",
      end: "bottom center",
    });
  }, []);
  return (
    <nav
      id="header"
      className="px-2 backdrop-blur-[8px] md:mt-[90vh] flex justify-between border-white sticky top-0 left-[1%] z-20 border-b-2 w-[98%] mix-blend-difference"
    >
      <motion.ul
        initial={{ opacity: 0, x: 180 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 1,
        }}
        className="flex justify-between md:justify-around w-2/4 md:w-1/3 ml-auto list-none "
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
              "py-4 px-0 font-medium text-white z-30 hover:text-orange-500 cursor-pointer",
              {
                "underline underline-offset-[10px]": pathname === url,
              }
            )}
          >
            {title}
          </Link>
        ))}
      </motion.ul>
      <p
        id="logo"
        className="absolute bottom-1 lg:-bottom-4 sm:-bottom-1 md:-bottom-3 xl:-bottom-4 2xl:-bottom-6 font-semi-bold left-2 md:left-3 text-[26vw] sm:text-[24vw]  md:text-[22vw] lg:text-[20vw] xl:text-[17vw] 2xl:text-[14vw] z-20 py-0 my-0 text-orange-500 hover:text-white cursor-pointer"
      >
        <Link href="/">
          <AnimatedLetters words="ARCCA" yParam="100" xParam="100" />
        </Link>
      </p>
      <p
        id="logo"
        className="absolute bottom-1 lg:-bottom-4 sm:-bottom-1  md:-bottom-3 xl:-bottom-4 2xl:-bottom-6 font-semi-bold left-4 md:left-6 text-[26vw] sm:text-[24vw]  md:text-[22vw] lg:text-[20vw] xl:text-[17vw] 2xl:text-[14vw] z-10 mix-blend-color-dodge py-0 my-0"
      >
        <AnimatedLetters words="ARCCA" yParam="100" xParam="100" />
      </p>
    </nav>
  );
}
