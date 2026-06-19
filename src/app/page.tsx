import { Preloader } from "@/components/Preloader";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Lookbook } from "@/components/Lookbook";
import { Collection } from "@/components/Collection";
import { Process } from "@/components/Process";
import { Stats } from "@/components/Stats";
import { Booking } from "@/components/Booking";
import { Testimonials } from "@/components/Testimonials";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Lookbook />
        <Collection />
        <Process />
        <Stats />
        <Booking />
        <Testimonials />
        <ClosingCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
