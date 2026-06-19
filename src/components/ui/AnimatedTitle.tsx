"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const word: Variants = {
  hidden: { opacity: 0, y: "0.5em" },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// Word-by-word reveal. Use {em} markers in text to italicise+accent a word.
export function AnimatedTitle({
  text,
  className = "",
  accent,
}: {
  text: string;
  className?: string;
  accent?: string; // a word to render in italic rust
}) {
  const words = text.split(" ");
  return (
    <motion.h2
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      aria-label={text}
    >
      {words.map((w, i) => {
        const isAccent = accent && w.replace(/[^a-zA-Z]/g, "") === accent;
        return (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <motion.span
              variants={word}
              className={"inline-block " + (isAccent ? "italic text-rust" : "")}
            >
              {w}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        );
      })}
    </motion.h2>
  );
}

export function Frag({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
