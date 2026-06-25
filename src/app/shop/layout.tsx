import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop — Stitched & Unstitched Outfits",
  description: "Shop stitched suits, unstitched fabric, party, formal and bridal wear. Add made-to-measure stitching and order on WhatsApp — delivered across Pakistan and worldwide.",
  keywords: ["shop stitched suits", "unstitched fabric", "party wear", "bridal", "custom stitching", "Pakistani clothes online"],
  alternates: { canonical: "/shop" },
  openGraph: { title: "Shop — Zahra Stitching Studio", description: "Stitched & unstitched outfits with made-to-measure stitching.", url: "/shop" },
};
export default function ShopLayout({ children }: { children: React.ReactNode }) { return children; }
