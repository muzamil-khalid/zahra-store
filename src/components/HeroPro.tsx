"use client";

import { useRef } from "react";
import { Scissors } from "lucide-react";

const Flower = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden>
    <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="4 3">
      {[0, 60, 120, 180, 240, 300].map((d) => (
        <ellipse key={d} cx="50" cy="28" rx="7.5" ry="15" transform={`rotate(${d} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="7" strokeDasharray="0" />
    </g>
  </svg>
);

export function HeroPro() {
  const parRef = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    if (parRef.current) parRef.current.style.transform = `translate(${x * 22}px, ${y * 22}px)`;
  }
  function onLeave() { if (parRef.current) parRef.current.style.transform = "translate(0,0)"; }

  function goNext() {
    const hero = document.getElementById("home");
    const next = hero?.nextElementSibling as HTMLElement | null;
    if (!next) return;
    const lenis = (window as unknown as { lenis?: { scrollTo: (t: HTMLElement, o?: { offset?: number }) => void } }).lenis;
    if (lenis) lenis.scrollTo(next, { offset: -60 });
    else next.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="home" className="zhero" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="bgpar" ref={parRef} aria-hidden>
        <span className="blob b1" /><span className="blob b2" /><span className="blob b3" />
        <div className="marq"><b>Stitched · Unstitched · Couture · Bespoke · Stitched · Unstitched · Couture · Bespoke ·</b></div>

        {/* embroidered flower motifs (echo the logo) */}
        <span className="flower fl1"><Flower /></span>
        <span className="flower fl2"><Flower /></span>
        <span className="flower fl3"><Flower /></span>

        {/* fabric swatches */}
        <span className="sw sw1" /><span className="sw sw2" /><span className="sw sw3" />

        <span className="ring" /><span className="spool" />
        <span className="scissors"><Scissors size={26} strokeWidth={1.6} /></span>

        {/* running-stitch threads */}
        <svg className="thread" viewBox="0 0 600 600" preserveAspectRatio="none">
          <path d="M70 110 C 200 160, 240 250, 300 300" fill="none" />
        </svg>
        <svg className="thread thread2" viewBox="0 0 600 600" preserveAspectRatio="none">
          <path d="M540 90 C 430 170, 470 360, 350 430" fill="none" />
        </svg>
        <svg className="thread thread3" viewBox="0 0 600 600" preserveAspectRatio="none">
          <path d="M120 520 C 240 470, 360 520, 500 470" fill="none" />
        </svg>
      </div>
      <span className="grain" aria-hidden />

      <div className="content">
        <div className="eyebrow">bespoke stitching</div>
        <div className="pre">Beautifully</div>
        <div className="sewwrap">
          <svg className="sew" viewBox="0 0 620 170" aria-label="stitched">
            <text x="310" y="130" textAnchor="middle" fontSize="150" fontStyle="italic">stitched</text>
          </svg>
          {/* needle + thread that sews the word */}
          <svg className="needlesvg" viewBox="0 0 120 40" aria-hidden>
            <line x1="6" y1="20" x2="86" y2="20" stroke="var(--rust)" strokeWidth="2.4" strokeDasharray="6 5" strokeLinecap="round" />
            <line className="ndl" x1="86" y1="20" x2="112" y2="9" stroke="var(--ink)" strokeWidth="2.6" strokeLinecap="round" />
            <circle className="ndl" cx="111" cy="9.5" r="2.4" fill="none" stroke="var(--ink)" strokeWidth="1.4" />
          </svg>
          <span className="baseline" aria-hidden />
          <span className="needle" aria-hidden />
        </div>
        <div className="tag">made to measure — tailored, by hand, just for you</div>
        <button className="cue" onClick={goNext}>explore <span className="ch">↓</span></button>
      </div>
    </section>
  );
}
