import clsx from "clsx";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
  return (
    <div className="bg-neutral-100 relative z-[5]">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const { ref, inView } = useInView();
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral">
      {inView && (
        <motion.div
          initial={{ opacity: 0, transform: "scaleY(50%)" }}
          animate={{ opacity: 1, transform: "translate(0% , 0%)" }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
          }}
          className="absolute top-6 left-[calc(50%)] translate-x-[-50%]   h-fit w-0"
        >
          <h2 className="text-center inline-block  px-4 text-orange-500 absolute top-0 left-[calc(50%)] translate-x-[-50%] font-black uppercase text-[4rem] ">
            Gallery
          </h2>
          <h2 className="text-center inline-block px-4 text-white  absolute top-0 left-[calc(50%-0.25rem)] translate-x-[-50%] font-black uppercase text-[4rem] mix-blend-difference">
            Gallery
          </h2>
        </motion.div>
      )}

      <div
        className="sticky top-6 flex h-[90vh] items-center overflow-hidden"
        ref={ref}
      >
        <motion.div style={{ x }} className="flex items-center gap-4">
          {cards.map((card, i) => {
            return <Card card={card} key={card.id} i={i} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, i }: { card: CardType; i: number }) => {
  return (
    <div
      key={card.id}
      className={clsx(
        "group relative overflow-hidden",
        { "h-[400px] w-[400px] bg-yellow-300": i % 2 === 0 },
        {
          "w-[350px] h-[350px] bg-orange-500 self-end": i % 2 === 1,
        },
        { "w-[475px] h-[475px] bg-white": i % 3 === 0 }
      )}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className={clsx(
          "absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110",
          { "bg-bottom": i === 3 },
          { "bg-right-top": i % 2 === 1 && i !== 3 },
          { "bg-right-bottom": i % 3 === 0 }
        )}
      ></div>
      <div
        className={clsx(
          "absolute inset-0 z-10 grid place-content-left mix-blend-difference",
          { "flex items-center justify-end w-[127.5%]": i === 2 }
        )}
      >
        <p
          className={clsx(
            "bg-gradient-to-br p-8 text-6xl font-black text-white uppercase text-wh backdrop-blur-lg",
            {
              "-rotate-90 whitespace-nowrap tracking-widest":
                i === 0 || i === 5,
            },
            {
              "rotate-90 whitespace-nowrap tracking-widest ": i === 2,
            },
            {
              "mt-auto": i === 1 || i === 4,
            }
          )}
        >
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Gallery;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/gallery_image2.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/gallery_image4.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/gallery_image3.png",
    title: "Title 2",
    id: 2,
  },

  {
    url: "/gallery_image6.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/gallery_image7.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/gallery_image5.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/gallery_image1.png",
    title: "Title 7",
    id: 7,
  },
];
