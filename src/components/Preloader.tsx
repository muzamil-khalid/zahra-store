"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setDone(true), reduce ? 0 : 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-4 bg-paper"
          initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg viewBox="0 0 120 120" width="64" height="64" style={{ overflow: "visible" }} aria-hidden>
            <path d="M18 96 L94 22" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="94" cy="22" rx="5" ry="2.4" transform="rotate(-45 94 22)" fill="none" stroke="var(--ink)" strokeWidth="3" />
            <path className="pl-thread" d="M20 96 C40 70 60 110 80 80 S104 52 104 52" fill="none" stroke="var(--rust)" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
          <span className="pl-[0.4em] font-display text-[1.1rem] tracking-[0.4em] text-ink">ZAHRA</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
