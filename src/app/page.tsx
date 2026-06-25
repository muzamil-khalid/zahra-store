import { HeroPro } from "@/components/HeroPro";
import { Marquee } from "@/components/Marquee";
import { StitchAssemble } from "@/components/fx/StitchAssemble";
import { Categories } from "@/components/Categories";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { About } from "@/components/About";
import { Lookbook } from "@/components/Lookbook";
import { Process } from "@/components/Process";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
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
      <About />
      <Lookbook />
      <Process />
      <Stats />
      <Testimonials />
      <ClosingCTA />
    </>
  );
}
