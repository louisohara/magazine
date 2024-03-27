"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

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
      className="md:mt-[90vh] flex justify-between border-white sticky top-0 left-[1%] z-10 border-b-2 w-[98%] mix-blend-difference"
    >
      <ul className="flex justify-between md:justify-around w-2/4 md:w-1/3 ml-auto list-none ">
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
      </ul>
      <p
        id="logo"
        className="absolute bottom-1 md:-bottom-5 font-semi-bold left-0 text-[24vw] md:text-[20vw] z-20 py-0 my-0 text-white hover:text-orange-500 cursor-pointer"
      >
        <Link href="/">ARCCA</Link>
      </p>
      <p
        id="logo"
        className="absolute bottom-1 md:-bottom-5 font-semi-bold left-2 md:left-4 text-[24vw] md:text-[20vw] z-10 mix-blend-color-dodge py-0 my-0"
      >
        ARCCA
      </p>
    </nav>
  );
}
