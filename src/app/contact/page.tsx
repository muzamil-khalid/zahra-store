import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Booking } from "@/components/Booking";
import { SITE } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Contact", description: "Contact Zahra Stitching Studio — available 24/7 for orders & custom stitching requests. Message us on WhatsApp for a quick, free quote.", keywords: ["contact stitching studio", "custom stitching quote", "WhatsApp order", "Karachi tailor"], alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="contact" title="Let’s talk stitching" sub="Available 24/7 for orders & custom stitching requests. Message us on WhatsApp for a quick, free quote — we reply within a few hours." />
      <section className="section-y bg-paper">
        <div className="container-x grid gap-6 sm:grid-cols-3">
          <a href={waLink("Hi Zahra Stitching Studio!")} target="_blank" rel="noopener noreferrer" className="rounded-[10px] border border-[var(--line)] bg-ivory p-6 transition hover:border-rust">
            <span className="text-[0.72rem] uppercase tracking-[0.1em] text-muted">WhatsApp / Phone</span>
            <p className="mt-1 font-display text-xl text-ink">{SITE.phone}</p>
          </a>
          <div className="rounded-[10px] border border-[var(--line)] bg-ivory p-6">
            <span className="text-[0.72rem] uppercase tracking-[0.1em] text-muted">Follow us</span>
            <div className="mt-1 flex flex-col gap-1 font-display text-lg text-ink">
              <a href="https://www.instagram.com/zahra.stitching.studio" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-rust">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=100086684887102" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-rust">Facebook</a>
              <a href="https://www.tiktok.com/@adeelchaudhry33?_r=1&_t=ZS-97V5wXjfFcv" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-rust">TikTok</a>
            </div>
          </div>
          <div className="rounded-[10px] border border-[var(--line)] bg-ivory p-6">
            <span className="text-[0.72rem] uppercase tracking-[0.1em] text-muted">Studio · Hours</span>
            <p className="mt-1 font-display text-xl text-ink">{SITE.city}</p>
            <p className="text-sm text-muted">{SITE.hours}</p>
          </div>
        </div>
      </section>
      <Booking />
    </>
  );
}
