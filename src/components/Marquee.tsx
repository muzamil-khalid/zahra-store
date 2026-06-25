"use client";

import { motion } from "framer-motion";
import { Asterisk } from "lucide-react";

const WORDS = ["Stitched", "Unstitched", "Custom Tailoring", "Brand Replica", "Bridal Couture", "Worldwide Shipping"];

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden border-y border-[var(--line-light)] bg-ink py-[1.1rem] text-paper" aria-hidden>
      <motion.div
        className="marq-track flex w-max items-center gap-9 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-9">
            {w} <Asterisk size={15} className="text-rust" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
