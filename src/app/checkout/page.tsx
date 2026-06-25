"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart, unitPrice } from "@/context/CartContext";
import { PageHero } from "@/components/PageHero";
import { formatPKR } from "@/lib/site";
import { waLink, buildOrderMessage, type OrderCustomer } from "@/lib/whatsapp";

export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  const [c, setC] = useState<OrderCustomer>({ name: "", phone: "", city: "", address: "", notes: "" });
  const set = (k: keyof OrderCustomer) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setC((p) => ({ ...p, [k]: e.target.value }));

  function placeOrder() {
    window.open(waLink(buildOrderMessage(items, c)), "_blank", "noopener");
  }

  if (items.length === 0) {
    return (
      <>
        <PageHero eyebrow="checkout" title="Nothing to check out" />
        <section className="section-y bg-paper">
          <div className="container-x text-center">
            <Link href="/shop" className="btn btn-rust">Browse the shop</Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero eyebrow="checkout" title="Almost there" sub="Add your delivery details (optional) and we’ll include them in your WhatsApp order. No payment here — everything is confirmed on chat." />
      <section className="section-y bg-paper">
        <div className="container-x grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-[10px] border border-[var(--line)] bg-paper p-6">
            <h2 className="font-display text-xl text-ink">Delivery details <span className="text-[0.8rem] font-normal text-muted">(optional)</span></h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div><span className="field-label">Full name</span><input className="field-input" value={c.name} onChange={set("name")} placeholder="Ayesha Khan" /></div>
              <div><span className="field-label">Phone / WhatsApp</span><input className="field-input" value={c.phone} onChange={set("phone")} placeholder="+92 300 1234567" /></div>
              <div><span className="field-label">City</span><input className="field-input" value={c.city} onChange={set("city")} placeholder="Karachi" /></div>
              <div className="sm:col-span-2"><span className="field-label">Address</span><input className="field-input" value={c.address} onChange={set("address")} placeholder="House, street, area" /></div>
              <div className="sm:col-span-2"><span className="field-label">Notes</span><textarea className="field-input resize-y" rows={3} value={c.notes} onChange={set("notes")} placeholder="Measurements, deadline, design notes…" /></div>
            </div>
          </div>

          <aside className="h-fit rounded-[10px] border border-[var(--line)] bg-ivory p-6 lg:sticky lg:top-24">
            <h2 className="font-display text-xl text-ink">Your order</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {items.map((i) => (
                <li key={i.key} className="flex justify-between gap-3">
                  <span className="text-ink/80">
                    {i.name} × {i.qty}
                    <span className="block text-[0.72rem] text-muted">{i.stitched ? `Stitched${i.size !== "—" ? ` · ${i.size}` : ""}` : "Unstitched"}</span>
                  </span>
                  <span className="shrink-0 font-medium">{formatPKR(unitPrice(i) * i.qty)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between border-t border-[var(--line)] pt-4 font-display text-lg">
              <span>Subtotal</span><span className="text-rust">{formatPKR(subtotal)}</span>
            </div>
            <button onClick={placeOrder} className="btn btn-rust btn-block mt-5">Place order on WhatsApp <span className="arr">→</span></button>
            <Link href="/cart" className="mt-3 block text-center text-sm text-muted hover:text-rust">Back to cart</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
