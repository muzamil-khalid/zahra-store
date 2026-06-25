import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Checkout",
  description: "Add your details and send your order on WhatsApp.",
  alternates: { canonical: "/checkout" },
  robots: { index: false, follow: true },
};
export default function CheckoutLayout({ children }: { children: React.ReactNode }) { return children; }
