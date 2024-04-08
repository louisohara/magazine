import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface LettersProps {
  words: string;
  xParam?: string;
  yParam?: string;
  inView?: boolean;
}
export default function AnimatedLetters({
  words,
  yParam,
  xParam,
}: LettersProps) {
  const { ref, inView } = useInView();
  const [show, setShow] = useState<boolean>(false);
  let count = 0;
  const initialStyles = {
    opacity: 0,
    transform: `translate(${xParam}px, ${yParam}px)`,
  };
  useEffect(() => {
    if (inView && count === 0) {
      setShow(true);
      count++;
    }
  }, [inView]);

  return (
    <span className="w-full leading-[0] border-3 border-red-500" ref={ref}>
      {show &&
        words.split("").map((letter: string, i: number) => (
          <motion.span
            key={i}
            initial={initialStyles}
            animate={{ opacity: 1, transform: "translate(0,0)" }}
            transition={{
              ease: "easeInOut",
              duration: 0.75,
              delay: 0.035 * i,
            }}
          >
            {letter}
          </motion.span>
        ))}
    </span>
  );
}
