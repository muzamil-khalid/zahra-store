"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { AnimatedTitle } from "./ui/AnimatedTitle";
import { Img } from "./ui/Img";
import { WaButton } from "./ui/WaButton";
import { IMG } from "@/lib/site";

const POINTS = [
  "Made to your exact measurements",
  "Send your own fabric, or choose from ours",
  "Recreate any design or brand you love",
  "Tracked delivery, in Pakistan & abroad",
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="section-y bg-paper">
      <div className="container-x grid items-center gap-[clamp(2rem,5vw,5rem)] lg:grid-cols-[0.9fr_1.1fr]">
        <div ref={ref} className="relative mx-auto w-full max-w-[480px]">
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[8px]"
          >
            <motion.div style={{ y }} className="aspect-[4/4.6]">
              <Img src={IMG.about} alt="Tailor at work in the studio" seed="about" className="h-full w-full object-cover" />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -right-[18px] bottom-7 rounded-[6px] bg-rust px-[1.4rem] py-[1.1rem] text-center text-white shadow-[0_20px_40px_-20px_rgba(181,85,46,.7)]"
          >
            <strong className="block font-display text-[2rem] leading-none">98%</strong>
            <span className="text-[0.7rem] uppercase tracking-[0.08em] opacity-90">perfect-fit rate</span>
          </motion.div>
        </div>

        <div>
          <Reveal as="span" className="script">our story</Reveal>
          <AnimatedTitle text="Crafted with precision, finished with love" className="section-title mt-2" accent="love" />
          <Reveal delay={1}>
            <p className="mt-5 max-w-[52ch] text-muted">
              What began as a love for stitching has grown into a studio that dresses women across Pakistan and around the world — with the same care in every single stitch. We blend traditional craftsmanship with a modern, made-to-measure experience.
            </p>
          </Reveal>
          <ul className="ticks my-7">
            {POINTS.map((p, i) => (
              <Reveal as="li" key={p} delay={i}>{p}</Reveal>
            ))}
          </ul>
          <Reveal delay={1}>
            <WaButton message="Hi! I'd love to learn more about your stitching services." className="btn btn-dark">
              Talk to our studio <span className="arr">→</span>
            </WaButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
