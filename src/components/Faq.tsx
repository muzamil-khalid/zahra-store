"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function Faq({ limit, heading = true }: { limit?: number; heading?: boolean }) {
  const items = limit ? FAQS.slice(0, limit) : FAQS;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-paper">
      <div className="container-x grid gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-[0.8fr_1.2fr]">
        {heading && (
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="script text-[1.7rem] text-rust">questions?</span>
            <h2 className="mt-1 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] text-ink">Frequently asked</h2>
            <p className="mt-4 max-w-[34ch] text-[0.96rem] leading-relaxed text-muted">
              Everything you need to know about ordering, stitching, sizing and delivery. Still unsure? Message us on WhatsApp — we reply within a few hours.
            </p>
          </div>
        )}

        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-display text-[1.08rem] transition-colors ${isOpen ? "text-rust" : "text-ink"}`}>{f.q}</span>
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--line)] transition-all duration-300 ${isOpen ? "rotate-45 border-rust bg-rust text-white" : "text-rust"}`}>
                      <Plus size={16} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[60ch] pb-6 text-[0.95rem] leading-relaxed text-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
