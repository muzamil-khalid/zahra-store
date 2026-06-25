"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCart, unitPrice } from "@/context/CartContext";
import { Img } from "./ui/Img";
import { formatPKR } from "@/lib/site";
import { waLink, buildOrderMessage } from "@/lib/whatsapp";

export function CartDrawer() {
  const { items, isOpen, closeCart, remove, setQty, subtotal } = useCart();

  function order() {
    window.open(waLink(buildOrderMessage(items)), "_blank", "noopener");
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[150] bg-ink/50 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            className="fixed right-0 top-0 z-[160] flex h-full w-full max-w-[420px] flex-col bg-paper shadow-2xl"
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-[var(--line)] px-6 py-5">
              <h2 className="font-display text-xl text-ink">Your cart ({items.length})</h2>
              <button onClick={closeCart} aria-label="Close" className="text-2xl text-muted hover:text-ink">×</button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <p className="text-muted">Your cart is empty.</p>
                <Link href="/shop" onClick={closeCart} className="btn btn-rust">Browse the shop</Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  {items.map((i) => (
                    <div key={i.key} className="flex gap-4 border-b border-[var(--line)] py-4">
                      <div className="h-24 w-20 shrink-0 overflow-hidden rounded-[6px] bg-ivory">
                        <Img src={i.image} alt={i.name} seed={i.slug} width={200} height={260} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between gap-2">
                          <h3 className="font-display text-[1rem] leading-tight text-ink">{i.name}</h3>
                          <button onClick={() => remove(i.key)} aria-label="Remove" className="text-muted hover:text-rust">×</button>
                        </div>
                        <p className="text-[0.72rem] uppercase tracking-[0.08em] text-muted">
                          {i.stitched ? `Stitched${i.size !== "—" ? ` · ${i.size}` : ""}` : "Unstitched"}
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center rounded-full border border-[var(--line)]">
                            <button onClick={() => setQty(i.key, i.qty - 1)} className="px-2.5 py-1 text-muted hover:text-ink">−</button>
                            <span className="min-w-6 text-center text-sm">{i.qty}</span>
                            <button onClick={() => setQty(i.key, i.qty + 1)} className="px-2.5 py-1 text-muted hover:text-ink">+</button>
                          </div>
                          <span className="font-display text-[0.95rem] text-ink">{formatPKR(unitPrice(i) * i.qty)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[var(--line)] px-6 py-5">
                  <div className="mb-1 flex justify-between text-[0.95rem]">
                    <span className="text-muted">Subtotal</span>
                    <span className="font-display text-lg text-ink">{formatPKR(subtotal)}</span>
                  </div>
                  <p className="mb-4 text-[0.72rem] text-muted">Shipping &amp; final total WhatsApp pe confirm honge.</p>
                  <button onClick={order} className="btn btn-rust btn-block mb-2">Order on WhatsApp <span className="arr">→</span></button>
                  <Link href="/cart" onClick={closeCart} className="btn btn-ghost btn-block">View full cart</Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
