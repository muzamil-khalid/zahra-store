import type { Metadata } from "next";
import { Playfair_Display, Jost, Allura } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";
import { Preloader } from "@/components/Preloader";
import { SITE } from "@/lib/site";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost", display: "swap" });
const allura = Allura({ subsets: ["latin"], weight: "400", variable: "--font-allura", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s — ${SITE.name}` },
  description: "Premium stitched & unstitched outfits, custom made-to-measure tailoring, and faithful brand-replica stitching. Delivered across Pakistan and worldwide.",
  keywords: ["stitching studio", "custom stitching", "unstitched fabric", "Pakistani tailoring", "bridal couture", "brand replica", "made to measure"],
  openGraph: { title: `${SITE.name} — ${SITE.tagline}`, description: "Stitched & unstitched outfits, custom tailoring, and brand replicas — delivered worldwide.", type: "website", siteName: SITE.name, url: SITE.url, locale: "en_PK", images: [{ url: "/img/hero-model.jpg", width: 1200, height: 1600, alt: SITE.name }] },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: { icon: "/logo.png", apple: "/logo.png", shortcut: "/logo.png" },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "ClothingStore",
  name: SITE.name, description: SITE.tagline, email: SITE.email, telephone: `+92${SITE.phone.replace(/\s|^0/g, "")}`,
  image: `${SITE.url}/img/hero-model.jpg`, logo: `${SITE.url}/logo.png`, url: SITE.url, priceRange: "$$",
  address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  areaServed: "Worldwide",
  openingHours: "Mo-Sa 10:00-20:00",
  sameAs: ["https://instagram.com/zahra.stitching.studio"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable} ${allura.variable}`}>
      <body className="font-body antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <CartProvider>
          <Preloader />
          <SmoothScroll />
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppFloat />
        </CartProvider>
      </body>
    </html>
  );
}
