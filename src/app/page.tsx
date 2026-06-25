import { HeroPro } from "@/components/HeroPro";
import { Marquee } from "@/components/Marquee";
import { StitchAssemble } from "@/components/fx/StitchAssemble";
import { Categories } from "@/components/Categories";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Lookbook } from "@/components/Lookbook";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { ClosingCTA } from "@/components/ClosingCTA";
import { StitchThread } from "@/components/fx/StitchThread";

export default function HomePage() {
  return (
    <>
      <StitchThread />
      <HeroPro />
      <Marquee />
      <StitchAssemble />
      <Categories />
      <FeaturedProducts />
      <Lookbook />
      <Process />
      <Testimonials />
      <Faq limit={6} />
      <ClosingCTA />
    </>
  );
}
