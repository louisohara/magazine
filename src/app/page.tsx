"use client";

import Hero from "./ui/hero";
import Latest from "./ui/latest";
import Header from "./ui/header";
import { useEffect, useState } from "react";
import Headline from "./ui/headline";
import Gallery from "./ui/gallery";

export default function Home() {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    // <section className="h-[100vh] w-full snap-mandatory snap-y overflow-y-scroll overflow-x-clip">
    //   <Header />
    //   <div className="snap-center relative snap-normal w-[100vw] h-[90vh] bg-black border-2 border-green overflow-x-clip">
    //     <Hero />

    //     {/* </div> */}
    //     <div className="bg-black relative z-20 ">
    //       {/* <div className="h-[100vh] w-full snap-mandatory snap-y overflow-x-clip overflow-y-scroll"> */}

    //       {/* <Header /> */}

    //       {/* <div className="bg-black relative z-10 snap-center snap-normal h-[40vh]"> */}
    //       {/* <Header /> */}
    //       <Headline />
    //     </div>
    //   </div>
    //   <div className="bg-black snap-end snap-normal h-[90vh] relative z-10 border-red-500 border-2">
    //     <Latest />
    //   </div>
    //   {/* </div> */}
    //   <div className="snap-center snap-always ">
    //     <Gallery />
    //   </div>
    //   {/* </main> */}
    // </section>
    <section className="snap-y">
      <Hero isIntersecting={isIntersecting} />
      <main className="bg-black relative z-10 overflow-x-clip">
        <Header />
        <Headline
          setIsIntersecting={setIsIntersecting}
          isIntersecting={isIntersecting}
        />
        <Latest />
        <Gallery />
      </main>
    </section>
  );
}
