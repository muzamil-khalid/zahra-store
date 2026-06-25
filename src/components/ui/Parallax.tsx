"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

// Site-wide parallax: shifts children vertically as they pass through the viewport.
// `speed` > 0 moves slower/down, negative moves up. Tasteful range: 0.05–0.3
export function Parallax({
  children, speed = 0.15, className,
}: { children: ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 100}%`, `${-speed * 100}%`]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

// Parallax specifically for a cover image inside a fixed-ratio frame (no edge gaps).
export function ParallaxImage({
  src, alt, speed = 0.12, className, rounded = "rounded-[10px]",
}: { src: string; alt: string; speed?: number; className?: string; rounded?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${rounded} ${className ?? ""}`}>
      <motion.img
        src={src} alt={alt} loading="lazy"
        style={reduce ? undefined : { y, scale: 1.18 }}
        className="h-full w-full object-cover"
        onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/seed/zsi-${alt.slice(0,8)}/900/1100`; }}
      />
    </div>
  );
}
