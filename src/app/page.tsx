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
    <section className="snap-y overflow-x-clip" id="page">
      <Hero isIntersecting={isIntersecting} />
      <Header />
      <main className="relative z-10 overflow-x-clip">
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
