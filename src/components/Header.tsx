"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";

export function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* top bar */}
      <div className="bg-ink text-[0.72rem] tracking-[0.08em] text-muted-light">
        <div className="container-x flex h-[38px] items-center justify-between">
          <span>✦ Worldwide delivery — Pakistan &amp; international</span>
          <span className="hidden text-taupe sm:block">Mon–Sat · 11am–8pm (PKT)</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-[100] transition-all duration-500 ${
          stuck ? "bg-paper shadow-[0_1px_0_var(--line),0_14px_30px_-24px_rgba(0,0,0,.25)]" : "bg-transparent"
        }`}
      >
        <div className={`container-x flex items-center justify-between transition-all duration-500 ${stuck ? "h-[68px]" : "h-[84px]"}`}>
          <a href="#home" className="flex items-center gap-3 text-ink" aria-label="Zahra Stitching Studio">
            <span className="grid place-items-center text-rust">
              <svg viewBox="0 0 40 40" width="32" height="32" aria-hidden>
                <path d="M20 3 L31 14 L20 25 L9 14 Z M20 15 L37 32 M20 15 L3 32" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.32rem] font-semibold tracking-[0.16em]">ZAHRA</span>
              <span className="mt-[3px] text-[0.6rem] uppercase tracking-[0.34em] text-muted">stitching studio</span>
            </span>
          </a>

          <nav className="hidden items-center gap-[clamp(1rem,2vw,2rem)] lg:flex" aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="group relative py-1 text-[0.82rem] tracking-[0.06em] text-ink transition-colors hover:text-rust">
                {n.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-rust transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href={waLink("Hi Zahra Stitching Studio! I'd like to know more.")} target="_blank" rel="noopener noreferrer" className="btn btn-rust btn-sm hidden sm:inline-flex">
              WhatsApp Us
            </a>
            <button className="relative h-[22px] w-[30px] lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
              <span className={`absolute left-0 h-[2px] w-full bg-ink transition-all duration-300 ${open ? "top-[10px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-[10px] h-[2px] w-full bg-ink transition-all duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 h-[2px] w-full bg-ink transition-all duration-300 ${open ? "top-[10px] -rotate-45" : "top-[20px]"}`} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center gap-8 bg-paper lg:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}
          >
            <nav className="flex flex-col items-center gap-6">
              {NAV.map((n, i) => (
                <motion.a
                  key={n.href} href={n.href} onClick={() => setOpen(false)}
                  className="font-display text-3xl text-ink hover:text-rust"
                  initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i + 0.1 }}
                >
                  {n.label}
                </motion.a>
              ))}
            </nav>
            <a href={waLink("Hi! I'd like to know more.")} target="_blank" rel="noopener noreferrer" className="btn btn-rust">WhatsApp Us</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
