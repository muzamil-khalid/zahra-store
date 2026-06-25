"use client";

import { useRef } from "react";
import { Scissors } from "lucide-react";

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
        <span className="sw sw1" /><span className="sw sw2" /><span className="sw sw3" />
        <span className="ring" /><span className="spool" />
        <span className="scissors"><Scissors size={26} strokeWidth={1.6} /></span>
        <svg className="thread" viewBox="0 0 600 600" preserveAspectRatio="none">
          <path d="M70 110 C 200 160, 240 250, 300 300" fill="none" />
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
          <span className="baseline" aria-hidden />
          <span className="needle" aria-hidden />
        </div>
        <div className="tag">made to measure — tailored, by hand, just for you</div>
        <button className="cue" onClick={goNext}>explore <span className="ch">↓</span></button>
      </div>
    </section>
  );
}
