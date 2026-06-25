import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Booking } from "@/components/Booking";
import { SITE } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Contact", description: "Talk to Zahra Stitching Studio on WhatsApp — quick, free quotes." };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="contact" title="Let’s talk stitching" sub="Have a design or a question? Message us on WhatsApp for a quick, free quote — we reply within a few hours." />
      <section className="section-y bg-paper">
        <div className="container-x grid gap-6 sm:grid-cols-3">
          <a href={waLink("Hi Zahra Stitching Studio!")} target="_blank" rel="noopener noreferrer" className="rounded-[10px] border border-[var(--line)] bg-ivory p-6 transition hover:border-rust">
            <span className="text-[0.72rem] uppercase tracking-[0.1em] text-muted">WhatsApp / Phone</span>
            <p className="mt-1 font-display text-xl text-ink">{SITE.phone}</p>
          </a>
          <a href={`mailto:${SITE.email}`} className="rounded-[10px] border border-[var(--line)] bg-ivory p-6 transition hover:border-rust">
            <span className="text-[0.72rem] uppercase tracking-[0.1em] text-muted">Email</span>
            <p className="mt-1 font-display text-xl text-ink">{SITE.email}</p>
          </a>
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
