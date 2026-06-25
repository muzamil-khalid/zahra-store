"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Scissors } from "lucide-react";

// As you scroll, a top piece and a bottom piece slide toward each other and a
// running-stitch seam "sews" them into one two-tone fabric disc — then a line reveals.
export function StitchAssemble() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 28, mass: 0.4 });

  const topY = useTransform(p, [0, 0.5], ["-135%", "0%"]);
  const botY = useTransform(p, [0, 0.5], ["135%", "0%"]);
  const topX = useTransform(p, [0, 0.5], ["-22%", "0%"]);
  const botX = useTransform(p, [0, 0.5], ["22%", "0%"]);
  const seam = useTransform(p, [0.42, 0.74], [0, 1]);
  const discScale = useTransform(p, [0.45, 0.72], [0.94, 1]);
  const discRot = useTransform(p, [0.45, 1], [-6, 0]);
  const textY = useTransform(p, [0.6, 0.9], [40, 0]);
  const textOpacity = useTransform(p, [0.6, 0.9], [0, 1]);

  // reduced motion / static fallback values
  const sTop = reduce ? "0%" : topY, sBot = reduce ? "0%" : botY;
  const sTopX = reduce ? "0%" : topX, sBotX = reduce ? "0%" : botX;

  return (
    <section ref={ref} className="relative h-[210vh] bg-ivory md:h-[230vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="script mb-6">made by hand</motion.span>

        {/* the disc */}
        <motion.div style={{ scale: reduce ? 1 : discScale, rotate: reduce ? 0 : discRot }} className="relative h-[clamp(220px,42vw,360px)] w-[clamp(220px,42vw,360px)]">
          {/* top half (cream) */}
          <motion.div
            style={{ y: sTop, x: sTopX }}
            className="absolute left-0 top-0 h-1/2 w-full overflow-hidden rounded-t-full"
          >
            <div className="h-full w-full" style={{ background: "linear-gradient(135deg, #F4ECD9, #d8c39a)" }} />
          </motion.div>
          {/* bottom half (rust) */}
          <motion.div
            style={{ y: sBot, x: sBotX }}
            className="absolute bottom-0 left-0 h-1/2 w-full overflow-hidden rounded-b-full"
          >
            <div className="h-full w-full" style={{ background: "linear-gradient(135deg, #E1C16E, #8D734B)" }} />
          </motion.div>

          {/* running-stitch seam across the join */}
          <svg className="absolute left-0 top-1/2 h-4 w-full -translate-y-1/2" viewBox="0 0 100 4" preserveAspectRatio="none" aria-hidden>
            <motion.line x1="2" y1="2" x2="98" y2="2" stroke="var(--paper)" strokeWidth="1.4" strokeDasharray="3 3" strokeLinecap="round" style={{ pathLength: reduce ? 1 : seam }} />
          </svg>

          {/* center motif */}
          <motion.span style={{ opacity: reduce ? 1 : seam }} className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-rust shadow"><Scissors size={20} strokeWidth={1.7} /></motion.span>
        </motion.div>

        {/* reveal copy */}
        <motion.div style={{ y: reduce ? 0 : textY, opacity: reduce ? 1 : textOpacity }} className="mt-10 max-w-[44ch] px-6 text-center">
          <h2 className="h-display text-[clamp(1.8rem,4vw,3rem)]">Two pieces, <em className="italic text-rust">one perfect fit</em></h2>
          <p className="mt-3 text-muted">Every order is cut, stitched, and finished by hand — brought together into a piece that fits you exactly.</p>
          <Link href="/shop" className="btn btn-dark mt-6">Start with the collection <span className="arr">→</span></Link>
        </motion.div>
      </div>
    </section>
  );
}
