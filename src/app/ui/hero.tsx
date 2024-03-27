import styles from "../page.module.css";

export default function Hero() {
  return (
    <figure id="hero" className="relative md:fixed top-0 z-0">
      <video
        data-src="https://assets.yesstud.io/cartelandco2022/video/cartelandco2022_41529_loop.mp4"
        loop
        autoPlay
        playsInline
        src="https://assets.yesstud.io/cartelandco2022/video/cartelandco2022_41529_loop.mp4"
        muted
        className="w-[100vw] h-[50vh] md:h-[90vh] overscroll-none object-cover z-0"
      ></video>
    </figure>
  );
}
