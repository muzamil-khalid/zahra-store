"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { Img } from "./ui/Img";
import { GALLERY } from "@/lib/site";

export function Lookbook() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // translate the track left as the user scrolls through the pinned section
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-72%"]);

  return (
    <section className="bg-paper">
      <div className="container-x pt-[clamp(4.5rem,9vw,9rem)] text-center">
        <Reveal as="span" className="script">the lookbook</Reveal>
        <Reveal><h2 className="section-title mt-2">A glimpse of our craft</h2></Reveal>
        <Reveal><p className="mx-auto mt-3 max-w-[46ch] text-muted">Scroll through a selection of recent pieces — embroidery, festive sets, and bridal couture.</p></Reveal>
      </div>

      {/* Desktop: pinned horizontal scroll */}
      <div ref={ref} className="relative mt-12 hidden h-[280vh] lg:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 pl-[clamp(1.25rem,4vw,3rem)]">
            {GALLERY.map((g, i) => (
              <figure key={i} className="group relative h-[68vh] w-[44vw] shrink-0 overflow-hidden rounded-[10px] xl:w-[34vw]">
                <Img src={g.image} alt={g.caption} seed={`look${i}`} width={900} height={1200} className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(12,16,23,.78)] to-transparent p-7 font-display text-xl italic text-white">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile: horizontal snap row */}
      <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[clamp(1.25rem,4vw,3rem)] pb-4 lg:hidden">
        {GALLERY.map((g, i) => (
          <figure key={i} className="relative aspect-[3/4] w-[78%] shrink-0 snap-center overflow-hidden rounded-[10px]">
            <Img src={g.image} alt={g.caption} seed={`look${i}`} width={700} height={950} className="h-full w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(12,16,23,.78)] to-transparent p-5 font-display text-lg italic text-white">
              {g.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
