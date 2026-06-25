"use client";

import Link from "next/link";
import { Reveal } from "./ui/Reveal";
import { ParallaxImage } from "./ui/Parallax";
import { CATEGORIES } from "@/lib/site";

export function Categories() {
  return (
    <section className="section-y bg-paper">
      <div className="container-x">
        <div className="mb-10 text-center">
          <Reveal as="span" className="script">explore</Reveal>
          <Reveal><h2 className="section-title mt-2">Explore Our Collections</h2></Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.id} delay={i}>
              <Link href={`/shop?cat=${c.id}`} className="group block">
                <ParallaxImage src={c.image} alt={c.name} speed={0.08} className="aspect-[4/5]" />
                <div className="mt-3">
                  <h3 className="font-display text-[1.25rem] text-ink transition-colors group-hover:text-rust">{c.name}</h3>
                  <p className="text-[0.82rem] text-muted">{c.blurb}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
