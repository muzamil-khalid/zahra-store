import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { ClosingCTA } from "@/components/ClosingCTA";

export const metadata: Metadata = { title: "About — Our Story", description: "Tailored to perfection, crafted for you. The Zahra Stitching Studio story: from a home studio in Karachi to customers around the world, with care in every stitch.", keywords: ["about Zahra Stitching Studio", "Pakistani tailoring", "custom stitching Karachi", "made to measure"], alternates: { canonical: "/about" } };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="about us" title="Tailored to Perfection, Crafted for You" sub="At Zahra Stitching Studio, every piece begins with a vision and ends with a garment made to fit beautifully, feel comfortable, and last beyond trends." />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <ClosingCTA />
    </>
  );
}
