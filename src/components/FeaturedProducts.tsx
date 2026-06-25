"use client";

import Link from "next/link";
import { Reveal } from "./ui/Reveal";
import { ProductCard } from "./ProductCard";
import { PRODUCTS } from "@/lib/site";

export function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 4);
  return (
    <section className="section-y bg-ivory">
      <div className="container-x">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal as="span" className="script">new in</Reveal>
            <Reveal><h2 className="section-title mt-2">Pieces we love right now</h2></Reveal>
          </div>
          <Reveal><Link href="/shop" className="btn btn-dark">View all <span className="arr">→</span></Link></Reveal>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
          {featured.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
