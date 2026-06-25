"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setDone(true), reduce ? 250 : 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] grid place-items-center bg-paper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="flex flex-col items-center">
            <motion.div initial={{ opacity: 0, y: 8, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Zahra Stitching Studio" className="h-24 w-auto" />
            </motion.div>

            {/* stitch line drawing */}
            <svg width="220" height="24" viewBox="0 0 220 24" className="mt-4" aria-hidden>
              <motion.line
                x1="6" y1="12" x2="214" y2="12"
                stroke="var(--rust)" strokeWidth="2" strokeDasharray="8 7" strokeLinecap="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              {/* travelling needle dot */}
              <motion.circle
                cy="12" r="4" fill="var(--gold)" stroke="var(--rust)" strokeWidth="1.5"
                initial={{ cx: 6 }} animate={{ cx: 214 }} transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </svg>

            <motion.span
              className="mt-3 text-[0.62rem] uppercase tracking-[0.4em] text-muted"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            >
              stitched with care
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
