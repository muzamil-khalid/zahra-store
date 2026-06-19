"use client";

import { Reveal } from "./ui/Reveal";
import { waLink } from "@/lib/whatsapp";
import { PIECES } from "@/lib/site";

export function Collection() {
  const half = Math.ceil(PIECES.length / 2);
  const cols = [PIECES.slice(0, half), PIECES.slice(half)];

  return (
    <section id="collection" className="section-y bg-ivory">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-[720px] text-center">
          <Reveal as="span" className="script">signature pieces</Reveal>
          <Reveal><h2 className="section-title mt-2">Loved by our clients</h2></Reveal>
          <Reveal><p className="mt-3 text-[0.92rem] text-muted">Indicative starting prices — tap any piece to enquire and confirm details on WhatsApp.</p></Reveal>
        </div>

        <div className="grid gap-[clamp(1.5rem,4vw,4rem)] md:grid-cols-2">
          {cols.map((col, ci) => (
            <div key={ci} className="grid gap-[0.2rem]">
              {col.map((p, i) => (
                <Reveal key={p.name} delay={i}>
                  <button
                    onClick={() => window.open(waLink(`Hi! I'm interested in the '${p.name}'.`), "_blank", "noopener")}
                    className="group flex w-full items-center gap-4 border-b border-[var(--line)] px-[0.4rem] py-[1.1rem] text-left transition-all duration-300 hover:px-[0.9rem]"
                  >
                    <span className="swatch" style={{ background: `linear-gradient(135deg, ${p.c1}, ${p.c2})` }} />
                    <span className="flex flex-col">
                      <span className="font-display text-[1.12rem] text-ink transition-colors group-hover:text-rust">{p.name}</span>
                      <span className="text-[0.78rem] text-muted">{p.desc}</span>
                    </span>
                    <span className="leader" />
                    <span className="whitespace-nowrap font-display text-[1rem] text-cocoa">{p.price}</span>
                  </button>
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
