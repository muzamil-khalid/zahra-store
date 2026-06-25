"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { AnimatedTitle } from "./ui/AnimatedTitle";
import { Img } from "./ui/Img";
import Link from "next/link";
import { SERVICES } from "@/lib/site";

export function Services() {
  const [active, setActive] = useState(SERVICES[0].key);
  const current = SERVICES.find((s) => s.key === active) ?? SERVICES[0];

  return (
    <section id="services" className="section-y bg-ink text-paper">
      <div className="container-x">
        <div className="mb-10 max-w-[760px]">
          <Reveal as="span" className="script script-light">what we do</Reveal>
          <AnimatedTitle text="Full-service stitching, tailored to modern living" className="section-title !text-paper mt-2" />
        </div>

        <Reveal>
          <div className="mb-10 flex flex-wrap gap-1 border-b border-[var(--line-light)]">
            {SERVICES.map((s) => (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={`relative px-[1.2rem] py-[0.9rem] text-[0.8rem] uppercase tracking-[0.1em] transition-colors ${
                  active === s.key ? "text-paper" : "text-muted-light hover:text-paper"
                }`}
              >
                {s.tab}
                {active === s.key && (
                  <motion.span layoutId="tab-underline" className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-rust" />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="overflow-hidden rounded-[8px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="min-h-[300px] overflow-hidden lg:min-h-[420px]">
                <motion.div
                  initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full"
                >
                  <Img src={current.image} alt={current.title} seed={current.key} className="h-full w-full object-cover" />
                </motion.div>
              </div>
              <div className="flex flex-col bg-ivory p-[clamp(1.6rem,3vw,2.8rem)] text-[#2B2B2B]">
                <h3 className="h-display text-[clamp(1.4rem,2.4vw,2rem)]">{current.title}</h3>
                <p className="mt-3 text-muted">{current.body}</p>
                <ul className="ticks my-7">
                  {current.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <Link href="/shop" className="btn btn-rust mt-auto self-start">Shop this <span className="arr">→</span></Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
