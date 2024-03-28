"use client";

import Hero from "./ui/hero";
import Latest from "./ui/latest";
import Header from "./ui/header";
import { useEffect } from "react";

import Headline from "./ui/headline";
import Gallery from "./ui/gallery";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <section>
      <Hero />
      <main className="bg-black relative z-10 overflow-x-clip  snap-y snap-mandatory ">
        <Header />
        <Headline />
        <Latest />
        <Gallery />
      </main>
    </section>
  );
}
