"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IMG } from "@/lib/site";

export function HeroVideo() {
  function goNext() {
    const hero = document.getElementById("home");
    const next = hero?.nextElementSibling as HTMLElement | null;
    if (!next) return;
    const lenis = (window as unknown as { lenis?: { scrollTo: (t: HTMLElement, o?: { offset?: number }) => void } }).lenis;
    if (lenis) lenis.scrollTo(next, { offset: -60 });
    else next.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="home" className="relative flex min-h-[calc(100vh-116px)] items-center justify-center overflow-hidden bg-ink text-paper">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay muted loop playsInline poster={IMG.heroPoster}
        aria-hidden
      >
        <source src={IMG.heroVideo} type="video/mp4" />
      </video>
      {/* dark luxury overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(47,18,22,.60),rgba(47,18,22,.40)_42%,rgba(35,14,18,.86))]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_30%,transparent,rgba(35,14,18,.55))]" />

      <div className="container-x relative z-10 text-center">
        <span className="script text-[clamp(2rem,5vw,3rem)] text-gold">bespoke stitching</span>
        <h1 className="mt-1 font-display text-[clamp(2.6rem,8vw,6rem)] font-semibold leading-[0.98] text-paper drop-shadow-[0_2px_24px_rgba(0,0,0,.4)]">
          Beautifully <span className="italic text-gold">Stitched</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[54ch] text-[clamp(0.95rem,1.6vw,1.08rem)] leading-relaxed text-paper/85">
          Custom made-to-measure outfits, premium fabrics, and faithful brand replicas — delivered across Pakistan and worldwide.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/shop" className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-ink transition-all hover:gap-3 hover:bg-paper">
            Explore Our Collections <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link href="/about" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-[0.82rem] uppercase tracking-[0.12em] text-paper backdrop-blur-sm transition-colors hover:border-gold hover:text-gold">
            Our Story
          </Link>
        </div>
      </div>

      <button onClick={goNext} aria-label="Scroll down" className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-paper/70 transition-colors hover:text-gold">
        <span className="flex flex-col items-center gap-1 text-[0.6rem] uppercase tracking-[0.3em]">
          explore
          <span className="h-9 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
        </span>
      </button>
    </section>
  );
}
