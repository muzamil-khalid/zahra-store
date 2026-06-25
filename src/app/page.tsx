import { HeroVideo } from "@/components/HeroVideo";
import { Marquee } from "@/components/Marquee";
import { StitchAssemble } from "@/components/fx/StitchAssemble";
import { Categories } from "@/components/Categories";
import { WhyChoose } from "@/components/WhyChoose";
import { Lookbook } from "@/components/Lookbook";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { ClosingCTA } from "@/components/ClosingCTA";
import { StitchThread } from "@/components/fx/StitchThread";

export default function HomePage() {
  return (
    <>
      <StitchThread />
      <HeroVideo />
      <Marquee />
      <StitchAssemble />
      <Categories />
      <WhyChoose />
      <Lookbook />
      <Process />
      <Testimonials />
      <ClosingCTA />
    </>
  );
}
