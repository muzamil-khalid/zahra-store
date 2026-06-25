"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export interface CartItem {
  key: string;          // slug | size | stitched
  slug: string;
  name: string;
  image: string;
  basePrice: number;    // unstitched price
  stitchingCost: number;
  stitched: boolean;
  size: string;         // "—" when unstitched
  qty: number;
}

interface CartCtx {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  add: (item: Omit<CartItem, "key" | "qty">, qty?: number) => void;
  remove: (key: string) => void;
  setQty: (key: string, qty: number) => void;
  clear: () => void;
}

const Ctx = createContext<CartCtx | null>(null);
const KEY = "zss-cart-v1";

export function unitPrice(i: Pick<CartItem, "basePrice" | "stitchingCost" | "stitched">) {
  return i.basePrice + (i.stitched ? i.stitchingCost : 0);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  }, [items, ready]);

  const api = useMemo<CartCtx>(() => ({
    items,
    count: items.reduce((n, i) => n + i.qty, 0),
    subtotal: items.reduce((s, i) => s + unitPrice(i) * i.qty, 0),
    isOpen,
    openCart: () => setOpen(true),
    closeCart: () => setOpen(false),
    add: (item, qty = 1) => {
      const key = `${item.slug}|${item.size}|${item.stitched ? "s" : "u"}`;
      setItems((prev) => {
        const found = prev.find((p) => p.key === key);
        if (found) return prev.map((p) => (p.key === key ? { ...p, qty: p.qty + qty } : p));
        return [...prev, { ...item, key, qty }];
      });
      setOpen(true);
    },
    remove: (key) => setItems((prev) => prev.filter((p) => p.key !== key)),
    setQty: (key, qty) =>
      setItems((prev) => prev.map((p) => (p.key === key ? { ...p, qty: Math.max(1, qty) } : p))),
    clear: () => setItems([]),
  }), [items, isOpen]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
}
