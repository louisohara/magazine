import { motion } from "framer-motion";

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
  inView,
}: LettersProps) {
  const initialStyles = {
    opacity: 0,
    x: 100,
    y: 100,
  };
  return (
    <span className="w-full">
      {words.split("").map((letter: string, i: number) => (
        <motion.span
          style={{
            color: "white",
            transform: inView ? "none" : "translateX(-200px)",
            opacity: inView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          //   initial={initialStyles}
          //   animate={{ opacity: 1, y: 0, x: 0 }}
          //   transition={{
          //     ease: "easeInOut",
          //     duration: 0.75,
          //     delay: 0.035 * i,
          //   }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}
