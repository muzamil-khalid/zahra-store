"use client";

import { useState } from "react";

// Plain img with a graceful fallback if a remote (stock) image fails to load.
export function Img({
  src, alt, className, seed = "zahra", width = 800, height = 1000, loading = "lazy",
}: {
  src: string; alt: string; className?: string; seed?: string; width?: number; height?: number; loading?: "lazy" | "eager";
}) {
  const [failed, setFailed] = useState(false);
  const finalSrc = failed ? `https://picsum.photos/seed/zahra-${seed}/${width}/${height}` : src;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={finalSrc} alt={alt} className={className} loading={loading} onError={() => setFailed(true)} />
  );
}
