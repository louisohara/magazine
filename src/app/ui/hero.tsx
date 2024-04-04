import React, { useRef, useEffect, useState } from "react";

interface HeroProps {
  isIntersecting: boolean;
}

const Hero = ({ isIntersecting }: HeroProps) => {
  const videoRef: HTMLVideoElement | null = document.querySelector("#video");

  useEffect(() => {
    const video = videoRef;
    if (isIntersecting && video && video.paused) {
      video.play();
    } else if (!isIntersecting && video && !video.paused) {
      video.pause();
    }
  }, [isIntersecting]);

  return (
    <figure id="hero" className="relative md:fixed top-0 z-0">
      <video
        id="video"
        data-src="https://assets.yesstud.io/cartelandco2022/video/cartelandco2022_41529_loop.mp4"
        loop
        autoPlay
        playsInline
        src="https://assets.yesstud.io/cartelandco2022/video/cartelandco2022_41529_loop.mp4"
        muted
        className="w-[100vw] h-[60vh] md:h-[90vh] overscroll-none object-cover z-0"
      ></video>
    </figure>
  );
};

export default Hero;
