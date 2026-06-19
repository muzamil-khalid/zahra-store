"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { AnimatedTitle } from "./ui/AnimatedTitle";
import { Img } from "./ui/Img";
import { waLink } from "@/lib/whatsapp";
import { SITE, IMG } from "@/lib/site";

const SERVICES = ["Custom stitching (my fabric)", "Stitched outfit", "Unstitched fabric", "Brand replica", "Bridal / couture", "Alteration / resizing"];

export function Booking() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const [form, setForm] = useState({ service: SERVICES[0], name: "", country: "", phone: "", msg: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text =
      `Hi ${SITE.name}! I'd like to book a stitching consultation.\n\n` +
      `Service: ${form.service}\n` +
      `Name: ${form.name || "—"}\n` +
      `Country: ${form.country || "—"}\n` +
      `Phone: ${form.phone || "—"}\n\n` +
      (form.msg ? `Details: ${form.msg}` : "");
    window.open(waLink(text), "_blank", "noopener");
  }

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden text-paper">
      <motion.div style={{ y }} className="absolute inset-0 -z-[1] h-[124%]">
        <Img src={IMG.cta} alt="" seed="cta" width={1400} height={900} className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 -z-[1] bg-[linear-gradient(105deg,rgba(12,16,23,.88)_36%,rgba(12,16,23,.5))]" />

      <div className="container-x grid items-center gap-[clamp(2rem,5vw,4.5rem)] section-y lg:grid-cols-2">
        <div>
          <Reveal as="span" className="script script-light">let’s begin</Reveal>
          <AnimatedTitle text="Start your next custom outfit" className="section-title !text-paper mt-2" accent="custom" />
          <Reveal><p className="mt-4 max-w-[42ch] text-muted-light">Tell us a little about what you need. We’ll open WhatsApp with your details ready to send — and reply within a few hours.</p></Reveal>
          <Reveal>
            <div className="mt-9 flex max-w-[30ch] items-center gap-4">
              <span className="font-display text-[3rem] leading-none text-white">89%</span>
              <span className="text-[0.85rem] text-muted-light">of clients return to us after their first order</span>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <form onSubmit={submit} className="rounded-[8px] bg-paper p-[clamp(1.6rem,3vw,2.6rem)] text-[#1d222b] shadow-[0_40px_80px_-40px_rgba(0,0,0,.6)]">
            <h3 className="mb-6 text-center font-display text-[1.5rem] text-ink">Book a stitching consultation</h3>
            <div className="mb-4">
              <label className="field-label" htmlFor="bf-service">Service</label>
              <select id="bf-service" className="field-input" value={form.service} onChange={set("service")}>
                {SERVICES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="field-label" htmlFor="bf-name">Your name</label>
                <input id="bf-name" className="field-input" value={form.name} onChange={set("name")} placeholder="Ayesha Khan" />
              </div>
              <div>
                <label className="field-label" htmlFor="bf-country">Country</label>
                <input id="bf-country" className="field-input" value={form.country} onChange={set("country")} placeholder="Pakistan" />
              </div>
            </div>
            <div className="mb-4">
              <label className="field-label" htmlFor="bf-phone">Phone / WhatsApp</label>
              <input id="bf-phone" type="tel" className="field-input" value={form.phone} onChange={set("phone")} placeholder="+92 300 1234567" />
            </div>
            <div className="mb-5">
              <label className="field-label" htmlFor="bf-msg">Message</label>
              <textarea id="bf-msg" rows={3} className="field-input resize-y" value={form.msg} onChange={set("msg")} placeholder="Tell us about the design, fabric, deadline…" />
            </div>
            <button type="submit" className="btn btn-rust btn-block">Send on WhatsApp <span className="arr">→</span></button>
            <p className="mt-3 text-center text-[0.75rem] text-muted">No account needed — opens your WhatsApp with the message ready.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
