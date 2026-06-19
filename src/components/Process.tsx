"use client";

import { motion } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { AnimatedTitle } from "./ui/AnimatedTitle";
import { STEPS } from "@/lib/site";

export function Process() {
  return (
    <section id="process" className="section-y bg-paper">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-[720px] text-center">
          <Reveal as="span" className="script">how it works</Reveal>
          <AnimatedTitle text="From design to doorstep, in four simple steps" className="section-title mt-2" accent="four" />
        </div>

        <div className="relative grid gap-[1.4rem] md:grid-cols-4">
          {/* animated dotted connector (desktop) */}
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[12%] right-[12%] top-[28px] hidden h-px origin-left md:block"
            style={{ backgroundImage: "linear-gradient(90deg, var(--muted-light) 0 8px, transparent 8px 16px)", backgroundSize: "16px 1px" }}
            aria-hidden
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i}>
              <div className="relative rounded-[8px] border border-[var(--line)] bg-paper p-[1.8rem_1.4rem]">
                <span className="relative z-[1] mb-4 grid h-14 w-14 place-items-center rounded-full bg-rust font-display text-[1.4rem] text-white">{s.num}</span>
                <h3 className="font-display text-[1.25rem] text-ink">{s.title}</h3>
                <p className="mt-2 text-[0.92rem] text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
