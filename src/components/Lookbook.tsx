"use client";

import { Reveal } from "./ui/Reveal";
import { Img } from "./ui/Img";
import { GALLERY } from "@/lib/site";

export function Lookbook() {
  return (
    <section className="section bg-paper">
      <div className="container-x text-center">
        <Reveal as="span" className="script">our craft</Reveal>
        <Reveal><h2 className="section-title mt-2">Our Craft / Gallery</h2></Reveal>
        <Reveal>
          <p className="mx-auto mt-3 max-w-[54ch] text-[0.98rem] leading-relaxed text-muted">
            A glimpse of our craft — the real stitching process and finished outfits, from everyday embroidery to bridal couture.
          </p>
        </Reveal>
      </div>

      <div className="container-x mt-[clamp(2.5rem,5vw,4rem)]">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {GALLERY.map((g, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-[10px] border border-[var(--line)]">
                <Img
                  src={g.image}
                  alt={g.caption}
                  seed={`look${i}`}
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(47,18,22,.86)] via-[rgba(47,18,22,.22)] to-transparent p-4 pt-10 font-display text-base italic text-paper">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
