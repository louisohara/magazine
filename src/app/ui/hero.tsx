"use client";

import React, { useRef, useEffect, useState } from "react";

interface HeroProps {
  isIntersecting: boolean;
}

const Hero = ({ isIntersecting }: HeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (isIntersecting && video && video.paused) {
      video.play();
    } else if (!isIntersecting && video && !video.paused) {
      video.pause();
    }
  }, [isIntersecting]);

  return (
    <figure id="hero" className="relative md:fixed top-0 z-0 ">
      <video
        id="video"
        ref={videoRef}
        data-src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/GTYSdDW/film-reel-footer_bjzom4wwb__58c7cb3a3d221b36f4d114089e2a5cb5__P360.mp4"
        loop
        autoPlay
        playsInline
        muted
        controls={false}
        src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/GTYSdDW/film-reel-footer_bjzom4wwb__58c7cb3a3d221b36f4d114089e2a5cb5__P360.mp4"
        className="w-[100vw] h-[60vh] md:h-[90vh] overscroll-none object-cover relative z-0 fade-in-top"
      ></video>
    </figure>
  );
};

export default Hero;
