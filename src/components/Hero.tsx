"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Img } from "./ui/Img";
import { WaButton } from "./ui/WaButton";
import { IMG } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;
const up = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.9, ease, delay: 0.15 + i * 0.12 } }),
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yFrame = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const yChip = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section id="home" ref={ref} className="relative bg-paper">
      <div className="container-x grid min-h-[calc(100vh-122px)] items-center gap-[clamp(2rem,5vw,4rem)] py-[clamp(2.5rem,6vw,5rem)] lg:grid-cols-[1.05fr_0.95fr]">
        {/* copy */}
        <motion.div initial="hidden" animate="show">
          <motion.span variants={up} custom={0} className="script">bespoke stitching</motion.span>
          <motion.h1 variants={up} custom={1} className="h-display my-5 text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.98]">
            Timeless stitching, <em className="italic text-rust">tailored</em> to you
          </motion.h1>
          <motion.p variants={up} custom={2} className="max-w-[40ch] text-[clamp(1rem,1.4vw,1.12rem)] text-muted">
            Stitched &amp; unstitched outfits, made-to-measure tailoring, and faithful brand replicas — crafted with precision and delivered to your door, anywhere in the world.
          </motion.p>
          <motion.div variants={up} custom={3} className="mt-8 flex flex-wrap gap-[0.9rem]">
            <a href="#collection" className="btn btn-rust">Explore Collection <span className="arr">→</span></a>
            <WaButton message="Hi! I'd like to start a custom stitching order." className="btn btn-ghost">Start a Custom Order</WaButton>
          </motion.div>
          <motion.div variants={up} custom={4} className="mt-10 flex flex-wrap items-center gap-[clamp(1rem,2.4vw,2.2rem)]">
            {[["15+ yrs", "of craft"], ["2,000+", "outfits stitched"], ["40+", "countries served"]].map(([a, b], i) => (
              <div key={b} className="flex items-center gap-[clamp(1rem,2.4vw,2.2rem)]">
                {i > 0 && <span className="hidden h-[34px] w-px bg-[var(--line)] sm:block" />}
                <span className="flex flex-col">
                  <strong className="font-display text-2xl font-semibold text-ink">{a}</strong>
                  <span className="text-[0.72rem] uppercase tracking-[0.06em] text-muted">{b}</span>
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* visual */}
        <div className="relative mx-auto aspect-[4/4.4] w-full max-w-[460px]">
          <motion.div
            style={{ y: yFrame }}
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.1, ease, delay: 0.2 }}
            className="absolute inset-0 left-[12%] overflow-hidden rounded-[200px_200px_8px_8px] shadow-[0_40px_80px_-40px_rgba(17,22,31,.45)]"
          >
            <Img src={IMG.hero} alt="Elegant hand-finished outfit" seed="hero" loading="eager" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div
            style={{ y: yChip }}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease, delay: 0.6 }}
            className="absolute bottom-[8%] left-0 aspect-square w-[38%] overflow-hidden rounded-[8px] border-[6px] border-paper shadow-[0_24px_50px_-28px_rgba(17,22,31,.5)]"
          >
            <Img src={IMG.heroChip} alt="Fine fabric detail" seed="herochip" width={500} height={500} className="h-full w-full object-cover" />
          </motion.div>

          <motion.div style={{ rotate }} className="absolute right-[4%] top-[2%] grid aspect-square w-[clamp(86px,9vw,116px)] place-items-center">
            <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full" aria-hidden>
              <defs><path id="hp" d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" /></defs>
              <text className="stamp-text"><textPath href="#hp">· PRECISION FIT · FINE FINISHING · HONEST PRICING </textPath></text>
            </svg>
            <span className="text-[1.4rem] text-rust">✂</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
