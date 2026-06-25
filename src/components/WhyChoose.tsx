"use client";

import { Scissors, Ruler, Sparkles, Truck } from "lucide-react";
import { WHY } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

const ICONS = { scissors: Scissors, ruler: Ruler, sparkles: Sparkles, truck: Truck } as const;

export function WhyChoose() {
  return (
    <section className="section bg-cocoa text-paper">
      <div className="container-x">
        <Reveal>
          <div className="text-center">
            <span className="script text-[1.9rem] text-gold">why us</span>
            <h2 className="mt-1 font-display text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.05]">
              Why Choose Zahra Stitching Studio
            </h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-[0.98rem] leading-relaxed text-paper/75">
              Craftsmanship you can feel — from the first measurement to the final stitch.
            </p>
          </div>
        </Reveal>

        <div className="mt-[clamp(2.5rem,5vw,4rem)] grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => {
            const Icon = ICONS[w.icon as keyof typeof ICONS] ?? Sparkles;
            return (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.07]">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-display text-[1.25rem] font-semibold text-paper">{w.title}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-paper/70">{w.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
