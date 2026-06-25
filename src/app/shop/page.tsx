"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { CATEGORIES, PRODUCTS } from "@/lib/site";

function ShopInner() {
  const params = useSearchParams();
  const initial = params.get("cat") ?? "all";
  const [cat, setCat] = useState(initial);

  const filtered = cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);
  const tabs = [{ id: "all", name: "All" }, ...CATEGORIES.map((c) => ({ id: c.id, name: c.name }))];

  return (
    <>
      <PageHero eyebrow="the shop" title="Stitched & unstitched" sub="Browse ready-to-wear and fabric. Choose stitched, unstitched, your size and quantity — then order on WhatsApp." />
      <section className="section-y bg-paper">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setCat(t.id)}
                className={`rounded-full border px-5 py-2 text-sm transition ${
                  cat === t.id ? "border-rust bg-rust text-white" : "border-[var(--line)] text-ink hover:border-rust"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-muted">No pieces in this category yet.</p>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-3">
              {filtered.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="py-40 text-center text-muted">Loading shop…</div>}>
      <ShopInner />
    </Suspense>
  );
}
