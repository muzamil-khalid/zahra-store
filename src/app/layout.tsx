import type { Metadata } from "next";
import { Playfair_Display, Jost, Allura } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SITE } from "@/lib/site";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost", display: "swap" });
const allura = Allura({ subsets: ["latin"], weight: "400", variable: "--font-allura", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Premium stitched & unstitched outfits, custom made-to-measure tailoring, and faithful brand-replica stitching. Delivered across Pakistan and worldwide.",
  keywords: ["stitching studio", "custom stitching", "unstitched fabric", "Pakistani tailoring", "bridal couture", "brand replica", "made to measure", "worldwide delivery"],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: "Stitched & unstitched outfits, custom tailoring, and brand replicas — delivered worldwide.",
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
  },
  twitter: { card: "summary_large_image", title: SITE.name, description: SITE.tagline },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: SITE.name,
  description: SITE.tagline,
  email: SITE.email,
  telephone: SITE.phone,
  address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  url: SITE.url,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable} ${allura.variable}`}>
      <body className="font-body antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
