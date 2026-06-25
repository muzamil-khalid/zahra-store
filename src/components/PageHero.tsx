"use client";

import { motion } from "framer-motion";

// Sub-page hero with a parallax-friendly entrance.
export function PageHero({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <section className="border-b border-[var(--line)] bg-ivory pt-[clamp(7rem,12vw,9rem)] pb-[clamp(2.5rem,5vw,4rem)]">
      <div className="container-x text-center">
        {eyebrow && (
          <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="script">
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
          className="h-display mt-2 text-[clamp(2.2rem,5.5vw,4rem)]"
        >
          {title}
        </motion.h1>
        {sub && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="mx-auto mt-4 max-w-[52ch] text-muted">
            {sub}
          </motion.p>
        )}
      </div>
    </section>
  );
}
