import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Reveal } from "@/components/ui/Reveal";
import { waLink } from "@/lib/whatsapp";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Size Guide — How to Measure for Stitching",
  description: "Zahra Stitching Studio size guide: how to take your bust, waist, hips, shoulder, sleeve and length measurements at home, plus a standard size chart for a perfect made-to-measure fit.",
  keywords: ["size guide", "measurement chart", "how to measure", "stitching measurements", "made to measure", "Pakistani clothes sizing"],
  alternates: { canonical: "/size-guide" },
  openGraph: { title: `Size Guide — ${SITE.name}`, description: "How to measure for a perfect made-to-measure fit.", url: "/size-guide" },
};

const CHART = [
  { size: "XS", bust: "32", waist: "26", hips: "36" },
  { size: "S", bust: "34", waist: "28", hips: "38" },
  { size: "M", bust: "36", waist: "30", hips: "40" },
  { size: "L", bust: "38", waist: "32", hips: "42" },
  { size: "XL", bust: "40", waist: "34", hips: "44" },
];

const STEPS = [
  { t: "Bust", d: "Measure around the fullest part of your bust, keeping the tape level." },
  { t: "Waist", d: "Measure around the narrowest part of your natural waistline." },
  { t: "Hips", d: "Measure around the fullest part of your hips." },
  { t: "Shoulder", d: "Measure across the back, from one shoulder seam to the other." },
  { t: "Sleeve length", d: "From the shoulder edge down to where you want the sleeve to end." },
  { t: "Shirt length", d: "From the shoulder, down to your desired hem length." },
  { t: "Trouser length", d: "From the waist down to the ankle." },
];

export default function SizeGuidePage() {
  return (
    <>
      <PageHero eyebrow="measurements" title="Size Guide" sub="Take a few measurements at home for a flawless made-to-measure fit." />

      <section className="section bg-paper">
        <div className="container-x grid gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-2">
          {/* How to measure */}
          <Reveal>
            <div>
              <span className="script text-[1.7rem] text-rust">how to measure</span>
              <h2 className="mt-1 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold text-ink">Measuring at home</h2>
              <p className="mt-3 text-[0.96rem] leading-relaxed text-muted">Use a soft measuring tape, keep it snug (not tight), and stand naturally. Already have a perfectly fitting outfit? Measure that flat and share the numbers instead.</p>
              <ul className="mt-6 space-y-4">
                {STEPS.map((s) => (
                  <li key={s.t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                    <span><span className="font-display text-[1.05rem] text-ink">{s.t}</span><span className="block text-[0.92rem] leading-relaxed text-muted">{s.d}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Size chart */}
          <Reveal delay={0.1}>
            <div>
              <span className="script text-[1.7rem] text-rust">standard sizes</span>
              <h2 className="mt-1 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold text-ink">Size chart (inches)</h2>
              <p className="mt-3 text-[0.96rem] leading-relaxed text-muted">A general guide. For custom orders we always stitch to your exact measurements.</p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--line)]">
                <table className="w-full text-left text-[0.95rem]">
                  <thead className="bg-cocoa text-paper">
                    <tr>
                      <th className="px-4 py-3 font-display font-medium">Size</th>
                      <th className="px-4 py-3 font-display font-medium">Bust</th>
                      <th className="px-4 py-3 font-display font-medium">Waist</th>
                      <th className="px-4 py-3 font-display font-medium">Hips</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CHART.map((r, i) => (
                      <tr key={r.size} className={i % 2 ? "bg-ivory/40" : "bg-white"}>
                        <td className="px-4 py-3 font-semibold text-ink">{r.size}</td>
                        <td className="px-4 py-3 text-muted">{r.bust}"</td>
                        <td className="px-4 py-3 text-muted">{r.waist}"</td>
                        <td className="px-4 py-3 text-muted">{r.hips}"</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <a href={waLink("Hi Zahra Stitching Studio! I need help with my measurements / sizing.")} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-rust px-6 py-3 text-[0.82rem] uppercase tracking-[0.1em] text-ink transition-colors hover:bg-rust-dark">
                Need help? Ask on WhatsApp →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
