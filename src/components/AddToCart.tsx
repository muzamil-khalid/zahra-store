"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPKR, type Product } from "@/lib/site";

export function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const [stitched, setStitched] = useState(true);
  const [size, setSize] = useState(product.sizes[2] ?? product.sizes[0]);
  const [qty, setQty] = useState(1);

  const price = product.price + (stitched ? product.stitchingCost : 0);

  function addToCart() {
    add(
      {
        slug: product.slug,
        name: product.name,
        image: product.images[0],
        basePrice: product.price,
        stitchingCost: product.stitchingCost,
        stitched,
        size: stitched ? size : "—",
      },
      qty
    );
  }

  return (
    <div>
      <p className="font-display text-[2rem] text-rust">{formatPKR(price)}</p>

      {/* Stitched / Unstitched */}
      <div className="mt-6">
        <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.1em] text-muted">Type</span>
        <div className="flex gap-2">
          {[{ v: true, l: `Stitched (+${formatPKR(product.stitchingCost)})` }, { v: false, l: "Unstitched" }].map((o) => (
            <button
              key={String(o.v)}
              onClick={() => setStitched(o.v)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                stitched === o.v ? "border-rust bg-rust text-ink" : "border-[var(--line)] text-ink hover:border-rust"
              }`}
            >
              {o.l}
            </button>
          ))}
        </div>
      </div>

      {/* Size (only when stitched) */}
      {stitched && (
        <div className="mt-5">
          <span className="mb-2 block text-[0.72rem] uppercase tracking-[0.1em] text-muted">Size</span>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`h-10 min-w-10 rounded-full border px-3 text-sm transition ${
                  size === s ? "border-ink bg-ink text-paper" : "border-[var(--line)] text-ink hover:border-ink"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity + add */}
      <div className="mt-7 flex items-center gap-4">
        <div className="flex items-center rounded-full border border-[var(--line)]">
          <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-4 py-2.5 text-muted hover:text-ink">−</button>
          <span className="min-w-8 text-center">{qty}</span>
          <button onClick={() => setQty((q) => q + 1)} className="px-4 py-2.5 text-muted hover:text-ink">+</button>
        </div>
        <button onClick={addToCart} className="btn btn-rust flex-1">Add to cart <span className="arr">→</span></button>
      </div>
      <p className="mt-3 text-[0.8rem] text-muted">Stitched, made-to-measure, or unstitched fabric — your choice. Final details confirmed on WhatsApp.</p>
    </div>
  );
}
