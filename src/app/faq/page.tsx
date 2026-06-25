import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Faq } from "@/components/Faq";
import { ClosingCTA } from "@/components/ClosingCTA";
import { FAQS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs — Orders, Stitching, Sizing & Delivery",
  description: "Answers to common questions about ordering, custom made-to-measure stitching, measurements, brand replicas, delivery worldwide and payment options at Zahra Stitching Studio.",
  keywords: ["stitching FAQ", "custom stitching questions", "measurements", "worldwide delivery", "COD Pakistan", "made to measure"],
  alternates: { canonical: "/faq" },
  openGraph: { title: `FAQs — ${SITE.name}`, description: "Common questions about ordering, stitching, sizing and delivery.", url: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero eyebrow="help & answers" title="Frequently Asked Questions" sub="Ordering, stitching, sizing and delivery — answered." />
      <Faq heading={false} />
      <ClosingCTA />
    </>
  );
}
