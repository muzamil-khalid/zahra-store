"use client";

import { NAV, SITE } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";

export function Footer() {
  const toTop = () => {
    const lenis = (window as unknown as { lenis?: { scrollTo: (n: number) => void } }).lenis;
    if (lenis) lenis.scrollTo(0); else window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="relative bg-ink pt-[clamp(3rem,6vw,5rem)] text-muted-light">
      <div className="container-x relative grid gap-[clamp(2rem,4vw,3rem)] lg:grid-cols-[1.6fr_1fr_1.2fr]">
        <div>
          <span className="flex flex-col leading-none text-paper">
            <span className="font-display text-[1.32rem] font-semibold tracking-[0.16em]">ZAHRA</span>
            <span className="mt-[3px] text-[0.6rem] uppercase tracking-[0.34em] text-muted-light">stitching studio</span>
          </span>
          <p className="mt-4 font-display text-[1.3rem] text-paper">Crafted precision, tailored perfection.</p>
          <p className="mt-2 max-w-[38ch] text-[0.9rem]">Stitched &amp; unstitched outfits, custom tailoring, and brand replicas — delivered across Pakistan and worldwide.</p>
          <div className="mt-5 flex gap-5">
            {SITE.socials.map((s) => (
              <a key={s.label} href={s.href} className="text-[0.8rem] tracking-[0.06em] transition-colors hover:text-rust">{s.label}</a>
            ))}
          </div>
        </div>
        <nav>
          <h4 className="mb-4 font-display text-[1.05rem] font-medium tracking-[0.06em] text-paper">Explore</h4>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="block py-[0.3rem] text-[0.9rem] transition-all hover:pl-[6px] hover:text-rust">{n.label}</a>
          ))}
        </nav>
        <div>
          <h4 className="mb-4 font-display text-[1.05rem] font-medium tracking-[0.06em] text-paper">Contact</h4>
          <span className="mt-2 block text-[0.72rem] uppercase tracking-[0.08em] text-muted">WhatsApp / Phone</span>
          <a href={waLink("Hi Zahra Stitching Studio!")} target="_blank" rel="noopener noreferrer" className="font-display text-[1.15rem] text-paper hover:text-rust">{SITE.phone}</a>
          <span className="mt-3 block text-[0.72rem] uppercase tracking-[0.08em] text-muted">Email</span>
          <a href={`mailto:${SITE.email}`} className="font-display text-[1.15rem] text-paper hover:text-rust">{SITE.email}</a>
        </div>
      </div>
      <div className="container-x mt-[clamp(2rem,4vw,3rem)] flex items-center justify-between border-t border-[var(--line-light)] py-[1.6rem] text-[0.78rem]">
        <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
        <button onClick={toTop} aria-label="Back to top" className="grid h-12 w-12 place-items-center rounded-full border border-[var(--line-light)] text-taupe transition-colors hover:border-rust hover:bg-rust hover:text-white">✂</button>
      </div>
    </footer>
  );
}
