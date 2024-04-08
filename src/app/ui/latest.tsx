import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";

export default function Latest() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#headline",
        scrub: true,

        start: "bottom bottom",
        end: "bottom top",
      },
    });

    timeline

      .to("#text", {
        opacity: `1`,
        left: "0",
        ease: `power4.inOut`,
        duration: "1.25",
      })
      .to("#image", {
        duration: 1.25,
        right: 0,
        opacity: 1,
        ease: "power4.inOut",
      });
  }, []);

  return (
    <div className="flex justify-between w-full h-[90vh] bg-white ">
      <div className="w-1/2 relative h-full flex flex-col justify-center p-4 md:p-8  overflow-clip">
        <h2
          id="text"
          className="my-4 text-[5vw] relative opacity-0 -left-[100%] font-bold"
        >
          ISSUE I:
        </h2>
        <p
          id="text"
          className=" max-h-[60%] relative opacity-0 -left-[100%] overflow-clip"
        >
          {" "}
          Almuth Tebbenhoff, Jokkoo Collective, Penelope Trappes, Harold Offeh,
          Julie Verhoeven, afromerm, Volunteer Centre Hackney, Headway East,
          Resolve Collective, Carly Attridge, Annie Frost Nicholson, Salone
          Flying Stars, Elizabeth Adeleke, Jamie Hale, Ivan Michael Blackstock,
          Girls in Film, Accumulate, Body Movements, Kudwa, Michelle Williams
          Gamaker New Horizon Youth Centre, Ratiba Ayadi, Marcus Lipton
          Community Enterprise, Contour, Anthony Anaxagorou, SICARIA, Poetic
          Unity, Intermission Youth, Twisted Festival, Raze Collective, Chloe
          Carterr, Sabina Plamenova, Sheiva, Terry Paul, Reenie, House of
          (S)PUNK, Lucie Rachel, Anja Ngozi, Jason Manning, Alex Sardà, Haseeb
          Iqbal, Natasha Austin-Green, Camilla Hall, Damien Creagh, Jasminder
          Odusanya, Anira Khokhar and Nadeem Din-Gabisi.
        </p>
        <Link href="/shop">
          <p
            id="text"
            className=" relative opacity-0 -left-[100%] my-6 text-2xl text-orange-500 font-semibold underline underline-offset-8 hover:text-black"
          >
            SHOP NOW
          </p>
        </Link>
      </div>
      <div className="w-1/2 relative h-full -right-[100%] opacity-0" id="image">
        <Image
          src="/latest.png"
          alt="Magazine cover"
          fill={true}
          style={{ objectFit: "cover" }}
        ></Image>
        <p className="absolute flex items-center justify-center h-full top-0 right-0 text-[12.25vw] font-semibold text-end p-4 md:p-8 leading-none mix-blend-color-dodge break-all text-balance text-white ">
          BUILD TOGETHER
        </p>
      </div>
    </div>
  );
}
