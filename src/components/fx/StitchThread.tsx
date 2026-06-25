"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// A running-stitch rail in the left margin that "draws" as you scroll,
// with a bead that travels down — connecting the whole page top to bottom.
export function StitchThread() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 30, mass: 0.4 });
  const top = useTransform(p, [0, 1], ["0%", "100%"]);
  return (
    <div className="pointer-events-none fixed left-[18px] top-0 z-[70] hidden h-screen w-[2px] lg:block" aria-hidden>
      {/* faint dashed track */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(var(--muted-light) 0 6px, transparent 6px 12px)", backgroundSize: "2px 12px" }} />
      {/* drawn rust portion */}
      <motion.div className="absolute left-0 top-0 w-full origin-top bg-rust" style={{ scaleY: p, height: "100%" }} />
      {/* travelling bead */}
      <motion.div className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-rust bg-paper shadow" style={{ top }} />
    </div>
  );
}
