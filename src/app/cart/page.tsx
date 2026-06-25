"use client";

import Link from "next/link";
import { useCart, unitPrice } from "@/context/CartContext";
import { Img } from "@/components/ui/Img";
import { PageHero } from "@/components/PageHero";
import { formatPKR } from "@/lib/site";
import { waLink, buildOrderMessage } from "@/lib/whatsapp";

export default function CartPage() {
  const { items, setQty, remove, subtotal, clear } = useCart();

  function order() {
    window.open(waLink(buildOrderMessage(items)), "_blank", "noopener");
  }

  if (items.length === 0) {
    return (
      <>
        <PageHero eyebrow="your cart" title="Your cart is empty" />
        <section className="section-y bg-paper">
          <div className="container-x text-center">
            <p className="text-muted">Find something beautiful to add.</p>
            <Link href="/shop" className="btn btn-rust mt-6">Browse the shop</Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero eyebrow="your cart" title="Review your order" />
      <section className="section-y bg-paper">
        <div className="container-x grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            {items.map((i) => (
              <div key={i.key} className="flex gap-5 border-b border-[var(--line)] py-6">
                <div className="h-32 w-24 shrink-0 overflow-hidden rounded-[8px] bg-ivory">
                  <Img src={i.image} alt={i.name} seed={i.slug} width={240} height={320} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-3">
                    <Link href={`/shop/${i.slug}`} className="font-display text-[1.2rem] text-ink hover:text-rust">{i.name}</Link>
                    <button onClick={() => remove(i.key)} className="text-sm text-muted hover:text-rust">Remove</button>
                  </div>
                  <p className="text-[0.78rem] uppercase tracking-[0.08em] text-muted">
                    {i.stitched ? `Stitched${i.size !== "—" ? ` · Size ${i.size}` : ""}` : "Unstitched fabric"}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-[var(--line)]">
                      <button onClick={() => setQty(i.key, i.qty - 1)} className="px-3.5 py-1.5 text-muted hover:text-ink">−</button>
                      <span className="min-w-7 text-center text-sm">{i.qty}</span>
                      <button onClick={() => setQty(i.key, i.qty + 1)} className="px-3.5 py-1.5 text-muted hover:text-ink">+</button>
                    </div>
                    <span className="font-display text-[1.05rem] text-ink">{formatPKR(unitPrice(i) * i.qty)}</span>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={clear} className="mt-5 text-sm text-muted hover:text-rust">Clear cart</button>
          </div>

          <aside className="h-fit rounded-[10px] border border-[var(--line)] bg-ivory p-6 lg:sticky lg:top-24">
            <h2 className="font-display text-xl text-ink">Order summary</h2>
            <div className="mt-4 flex justify-between border-b border-[var(--line)] pb-4 text-[0.95rem]">
              <span className="text-muted">Subtotal</span>
              <span className="font-display text-lg text-ink">{formatPKR(subtotal)}</span>
            </div>
            <p className="mt-3 text-[0.8rem] text-muted">Shipping &amp; final total aapse WhatsApp pe confirm kiye jayenge.</p>
            <button onClick={order} className="btn btn-rust btn-block mt-5">Order on WhatsApp <span className="arr">→</span></button>
            <Link href="/checkout" className="btn btn-ghost btn-block mt-3">Add delivery details</Link>
            <Link href="/shop" className="mt-4 block text-center text-sm text-muted hover:text-rust">Continue shopping</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
