import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { ClosingCTA } from "@/components/ClosingCTA";

export const metadata: Metadata = { title: "About", description: "Crafted with precision, finished with love — the Zahra Stitching Studio story." };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="our story" title="Crafted with precision" sub="A studio that dresses women across Pakistan and the world — with the same care in every single stitch." />
      <About />
      <Services />
      <Process />
      <Stats />
      <Testimonials />
      <ClosingCTA />
    </>
  );
}
