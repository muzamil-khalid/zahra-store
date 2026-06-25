"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Img } from "./ui/Img";

export function ProductGallery({ images, name, slug }: { images: string[]; name: string; slug: string }) {
  const [active, setActive] = useState(0);
  return (
    <div className="lg:sticky lg:top-24">
      <motion.div
        key={active}
        initial={{ opacity: 0.4, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="aspect-[3/4] overflow-hidden rounded-[10px] bg-ivory"
      >
        <Img src={images[active]} alt={name} seed={`${slug}-${active}`} width={900} height={1200} loading="eager" className="h-full w-full object-cover" />
      </motion.div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-3">
          {images.map((img, i) => (
            <button key={i} onClick={() => setActive(i)} className={`h-24 w-20 overflow-hidden rounded-[6px] border-2 transition ${i === active ? "border-rust" : "border-transparent opacity-70 hover:opacity-100"}`}>
              <Img src={img} alt={`${name} ${i + 1}`} seed={`${slug}-t${i}`} width={160} height={200} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
