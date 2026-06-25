"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { NAV } from "@/lib/site";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Sparkles } from "lucide-react";

export function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <div className="bg-ink text-[0.72rem] tracking-[0.08em] text-muted-light">
        <div className="container-x flex h-[38px] items-center justify-between">
          <span className="inline-flex items-center gap-1.5"><Sparkles size={12} className="text-rust" /> Worldwide delivery — Pakistan &amp; international</span>
          <span className="hidden text-taupe sm:block">Mon–Sat · 11am–8pm (PKT)</span>
        </div>
      </div>

      <header className={`sticky top-0 z-[100] transition-all duration-500 ${stuck ? "bg-paper shadow-[0_1px_0_var(--line),0_14px_30px_-24px_rgba(0,0,0,.25)]" : "bg-paper/80 backdrop-blur"}`}>
        <div className={`container-x flex items-center justify-between transition-all duration-500 ${stuck ? "h-[64px]" : "h-[78px]"}`}>
          <Link href="/" className="flex items-center gap-3 text-ink" aria-label="Zahra Stitching Studio">
            <span className="grid place-items-center text-rust">
              <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden><path d="M20 3 L31 14 L20 25 L9 14 Z M20 15 L37 32 M20 15 L3 32" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.28rem] font-semibold tracking-[0.16em]">ZAHRA</span>
              <span className="mt-[3px] text-[0.58rem] uppercase tracking-[0.34em] text-muted">stitching studio</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-[clamp(1rem,2.4vw,2.4rem)] lg:flex" aria-label="Primary">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={`group relative py-1 text-[0.82rem] tracking-[0.06em] transition-colors hover:text-rust ${isActive(n.href) ? "text-rust" : "text-ink"}`}>
                {n.label}
                <span className={`absolute bottom-0 left-0 h-px bg-rust transition-all duration-300 ${isActive(n.href) ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={openCart} aria-label="Open cart" className="relative grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] text-ink transition hover:border-rust">
              <ShoppingBag size={18} strokeWidth={1.6} />
              {count > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-rust px-1 text-[0.62rem] font-bold text-white">{count}</span>}
            </button>
            <button className="relative h-[20px] w-[28px] lg:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
              <span className={`absolute left-0 h-[2px] w-full bg-ink transition-all duration-300 ${open ? "top-[9px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-[9px] h-[2px] w-full bg-ink transition-all ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 h-[2px] w-full bg-ink transition-all duration-300 ${open ? "top-[9px] -rotate-45" : "top-[18px]"}`} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[90] flex flex-col items-center justify-center gap-7 bg-paper lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
            {NAV.map((n, i) => (
              <motion.div key={n.href} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i + 0.1 }}>
                <Link href={n.href} onClick={() => setOpen(false)} className="font-display text-3xl text-ink hover:text-rust">{n.label}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
