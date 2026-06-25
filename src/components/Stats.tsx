"use client";

import { Reveal } from "./ui/Reveal";
import { AnimatedTitle } from "./ui/AnimatedTitle";
import { Counter } from "./ui/Counter";
import { STATS } from "@/lib/site";

export function Stats() {
  return (
    <section className="section-y bg-paper">
      <div className="container-x grid items-center gap-[clamp(2rem,5vw,5rem)] lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <Reveal as="span" className="script">our numbers</Reveal>
          <AnimatedTitle text="Building long-term trust through quality stitching" className="section-title mt-2" accent="trust" />
          <Reveal><p className="my-5 max-w-[46ch] text-muted">We continually refine our craft, invest in skilled tailors, and treat every order — big or small — like it’s our own.</p></Reveal>
          <Reveal><a href="/contact" className="btn btn-dark">Book a consultation <span className="arr">→</span></a></Reveal>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i}>
              <div className="flex flex-col items-center rounded-2xl border border-[var(--line)] bg-ivory/30 px-4 py-7 text-center">
                <span className="font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-none text-rust">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-2 text-[0.78rem] uppercase tracking-[0.1em] text-muted">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
