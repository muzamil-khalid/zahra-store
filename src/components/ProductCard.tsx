"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Img } from "./ui/Img";
import { formatPKR, type Product } from "@/lib/site";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.06 }}
    >
      <Link href={`/shop/${product.slug}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[8px] bg-ivory">
          <Img src={product.images[0]} alt={product.name} seed={product.slug} width={700} height={950}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105" />
          {product.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-rust px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white">
              {product.badge}
            </span>
          )}
          <span className="absolute inset-x-3 bottom-3 translate-y-3 rounded-[6px] bg-paper/95 py-2.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink opacity-0 backdrop-blur transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
            View product
          </span>
        </div>
        <div className="mt-3">
          <h3 className="font-display text-[1.18rem] leading-tight text-ink">{product.name}</h3>
          <p className="text-[0.8rem] text-muted">{product.fabric}</p>
          <p className="mt-1 font-display text-[1rem] text-rust">
            {formatPKR(product.price)}
            <span className="text-[0.78rem] text-muted"> · stitched {formatPKR(product.price + product.stitchingCost)}</span>
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
