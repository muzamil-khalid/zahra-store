import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Reveal } from "@/components/ui/Reveal";
import { POSTS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Stitching Guides, Tips & Trends",
  description: "Stitching guides and style tips from Zahra Stitching Studio: how to take measurements, stitched vs unstitched, seasonal trends and how brand-replica stitching works.",
  keywords: ["stitching blog", "measurement guide", "stitched vs unstitched", "Pakistani fashion trends", "brand replica", "tailoring tips"],
  alternates: { canonical: "/blog" },
  openGraph: { title: `Blog — ${SITE.name}`, description: "Stitching guides, tips and trends.", url: "/blog" },
};

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="journal" title="The Stitching Journal" sub="Guides, tips and trends from our studio to your wardrobe." />
      <section className="section bg-paper">
        <div className="container-x grid gap-[clamp(1.6rem,3vw,2.4rem)] sm:grid-cols-2 lg:grid-cols-2">
          {POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(84,61,50,.5)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[0.66rem] uppercase tracking-[0.12em] text-rust">{p.tags[0]}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-[0.74rem] uppercase tracking-[0.1em] text-muted">{fmt(p.date)} · {p.readMins} min read</div>
                  <h2 className="mt-2 font-display text-[1.3rem] leading-snug text-ink transition-colors group-hover:text-rust">{p.title}</h2>
                  <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-muted">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[0.82rem] font-medium text-rust">Read article →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
