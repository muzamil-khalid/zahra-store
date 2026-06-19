"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { TESTIMONIALS } from "@/lib/site";

export function Testimonials() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const n = TESTIMONIALS.length;

  const go = useCallback((d: number) => { setDir(d); setI((p) => (p + d + n) % n); }, [n]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  const t = TESTIMONIALS[i];

  return (
    <section className="section-y bg-ivory text-center">
      <div className="container-x">
        <Reveal as="span" className="script">kind words</Reveal>
        <Reveal>
          <div className="relative mx-auto mt-2 max-w-[880px]">
            <span className="block h-10 font-display text-[6rem] leading-[0.5] text-rust">”</span>
            <div className="relative min-h-[210px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.blockquote
                  key={i}
                  custom={dir}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <p className="font-display text-[clamp(1.2rem,2.4vw,1.8rem)] italic leading-[1.5] text-ink">{t.quote}</p>
                  <footer className="mt-6 text-[0.85rem] tracking-[0.05em] text-muted">
                    <strong className="font-medium text-rust">{t.name}</strong> — {t.place}
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
            <div className="mt-8 flex justify-center gap-3">
              <button onClick={() => go(-1)} aria-label="Previous" className="grid h-12 w-12 place-items-center rounded-full border border-[var(--line)] text-ink transition-colors hover:bg-ink hover:text-paper">←</button>
              <button onClick={() => go(1)} aria-label="Next" className="grid h-12 w-12 place-items-center rounded-full border border-[var(--line)] text-ink transition-colors hover:bg-ink hover:text-paper">→</button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
