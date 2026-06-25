"use client";

import Link from "next/link";
import { SITE } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";
import { ArrowUp, MessageCircle, Phone, Mail, Instagram, Facebook, Clock, MessageSquare, CreditCard, Globe, MapPin } from "lucide-react";

const QUICK = [
  { label: "Shop", href: "/shop" },
  { label: "Custom Stitching", href: "/contact" },
  { label: "How It Works", href: "/about" },
  { label: "Size Guide", href: "/faq" },
  { label: "FAQs", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

export function Footer() {
  const toTop = () => {
    const lenis = (window as unknown as { lenis?: { scrollTo: (n: number) => void } }).lenis;
    if (lenis) lenis.scrollTo(0); else window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="relative overflow-hidden bg-ink pt-[clamp(3rem,6vw,5rem)] text-muted-light">
      {/* faint watermark */}
      <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 select-none font-display text-[22vw] font-bold leading-none text-paper/[0.03]">ZAHRA</span>

      <div className="container-x relative grid gap-[clamp(2rem,4vw,3rem)] md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1.3fr_1.2fr]">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-full bg-paper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Zahra Stitching Studio" className="h-12 w-12 object-contain" />
            </span>
            <span className="font-display text-[1.3rem] font-semibold text-paper">{SITE.name}</span>
          </div>
          <p className="mt-4 max-w-[40ch] text-[0.92rem] leading-relaxed">
            <span className="text-paper">{SITE.tagline}.</span> Custom stitching, ready-to-wear and wholesale orders — delivered across Pakistan and worldwide.
          </p>
        </div>

        {/* Quick links */}
        <nav>
          <h4 className="mb-4 font-display text-[1.05rem] font-semibold tracking-[0.04em] text-gold">Quick Links</h4>
          {QUICK.map((n) => (
            <Link key={n.label} href={n.href} className="block py-[0.4rem] text-[0.92rem] transition-all hover:pl-[6px] hover:text-gold">{n.label}</Link>
          ))}
        </nav>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-display text-[1.05rem] font-semibold tracking-[0.04em] text-gold">Contact</h4>
          <ul className="space-y-[0.7rem] text-[0.92rem]">
            <li><a href={waLink("Hi Zahra Stitching Studio!")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 transition-colors hover:text-gold"><MessageCircle size={16} className="text-gold" /> WhatsApp: {SITE.phone}</a></li>
            <li><a href={`tel:+92${SITE.phone.replace(/\s|^0/g, "")}`} className="inline-flex items-center gap-2.5 transition-colors hover:text-gold"><Phone size={16} className="text-gold" /> {SITE.phone}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2.5 break-all transition-colors hover:text-gold"><Mail size={16} className="text-gold" /> {SITE.email}</a></li>
            <li><a href="https://instagram.com/zahra.stitching.studio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 transition-colors hover:text-gold"><Instagram size={16} className="text-gold" /> {SITE.instagram}</a></li>
            <li><a href="#" className="inline-flex items-center gap-2.5 transition-colors hover:text-gold"><Facebook size={16} className="text-gold" /> Facebook</a></li>
          </ul>
        </div>

        {/* Good to know */}
        <div>
          <h4 className="mb-4 font-display text-[1.05rem] font-semibold tracking-[0.04em] text-gold">Good to Know</h4>
          <ul className="space-y-[0.7rem] text-[0.92rem]">
            <li className="inline-flex items-center gap-2.5"><Clock size={16} className="shrink-0 text-gold" /> Mon–Sat, 10am – 8pm (PKT)</li>
            <li className="inline-flex items-center gap-2.5"><MessageSquare size={16} className="shrink-0 text-gold" /> Replies within a few hours</li>
            <li className="inline-flex items-center gap-2.5"><CreditCard size={16} className="shrink-0 text-gold" /> COD (Pakistan) · Bank Transfer (Intl.)</li>
            <li className="inline-flex items-center gap-2.5"><Globe size={16} className="shrink-0 text-gold" /> Worldwide shipping available</li>
            <li className="inline-flex items-center gap-2.5"><MapPin size={16} className="shrink-0 text-gold" /> {SITE.city}</li>
          </ul>
        </div>
      </div>

      <div className="container-x relative mt-[clamp(2rem,4vw,3rem)] flex items-center justify-between border-t border-[var(--line-light)] py-[1.6rem] text-[0.78rem]">
        <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
        <button onClick={toTop} aria-label="Back to top" className="grid h-12 w-12 place-items-center rounded-full border border-[var(--line-light)] text-taupe transition-colors hover:border-gold hover:bg-gold hover:text-ink"><ArrowUp size={18} /></button>
      </div>
    </footer>
  );
}
