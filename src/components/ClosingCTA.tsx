"use client";

import { Reveal } from "./ui/Reveal";
import { AnimatedTitle } from "./ui/AnimatedTitle";
import { WaButton } from "./ui/WaButton";

export function ClosingCTA() {
  return (
    <section className="bg-paper py-[clamp(4rem,9vw,8.5rem)] text-center">
      <div className="container-x">
        <AnimatedTitle
          text="Reach out & discover bespoke stitching"
          className="mx-auto max-w-[16ch] font-display text-[clamp(2.2rem,6.5vw,5.4rem)] font-medium leading-[1.04] text-ink"
          accent="discover"
        />
        <Reveal>
          <div className="mt-9">
            <WaButton message="Hi Zahra Stitching Studio! I'd like to discuss an order." className="btn btn-rust btn-lg">
              Message us on WhatsApp <span className="arr">→</span>
            </WaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
