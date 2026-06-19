# Zahra Stitching Studio — Next.js

A premium, animation-rich showcase site for a stitching studio. **No backend, no database** — all content is hardcoded, and every call-to-action opens **WhatsApp**. Built with **Next.js 14**, **Framer Motion**, **Lenis** (smooth scroll), and **Tailwind CSS**, and exported as fast static HTML for great speed + SEO.

---

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build a static site (for hosting)

```bash
npm run build        # outputs a static site to ./out
```

Upload the **`out/`** folder to any static host:
- **Netlify / Vercel:** connect the repo (build: `npm run build`, publish dir: `out`), or drag the `out` folder onto Netlify.
- **cPanel / shared hosting:** upload the contents of `out/` to `public_html`.
- **GitHub Pages:** push `out/` to your Pages branch.

> The first build downloads the Google fonts and self-hosts them automatically (needs internet during build). After that the exported site is fully static.

---

## The 2 things to change

Everything lives in **`src/lib/site.ts`**:

1. **WhatsApp number** — `SITE.whatsapp` (digits only, with country code, no `+`):
   ```ts
   whatsapp: "923001234567",
   ```
   Every button, the floating icon, and the consultation form use it automatically.

2. **Images** — swap the Unsplash demo URLs (`IMG`, plus each item in `SERVICES`, `GALLERY`, `PIECES`) for your own photos. Every image has an automatic fallback so the page never looks broken.

Also editable in the same file: services, gallery captions, signature pieces + prices, process steps, stats, testimonials, contact details, and nav.

---

## Why it's good for speed & SEO

- **Static HTML export** — pages are pre-rendered, so they load instantly and crawlers see full content.
- **Self-hosted fonts** via `next/font` (no layout shift, no third-party font request at runtime).
- Semantic headings, meta/OpenGraph tags, and **JSON-LD** structured data (`ClothingStore`) in the document head.
- Smooth scrolling + scroll animations that **respect “reduced motion”** preferences.

## Animations (Framer Motion + Lenis)

Scroll-progress bar · word-by-word title reveals · staggered section reveals · hero image clip-reveal + parallax · parallax on About/CTA imagery · animated tab transitions · **pinned horizontal-scroll lookbook** · animated process connector · count-up stats · crossfade testimonials.

---

## Structure

```
src/
  app/
    layout.tsx     fonts, SEO metadata, JSON-LD, smooth scroll
    page.tsx       composes all sections
    globals.css    design tokens, buttons, bespoke effects
  components/      Hero, Services, Lookbook, Booking, … + ui/ (Reveal, Counter, …)
  lib/
    site.ts        ← all content + your WhatsApp number
    whatsapp.ts    link builder
```

## Notes

- The consultation form has **no server** — on submit it composes a WhatsApp message and opens the chat. Nothing is stored.
- Demo images are from Unsplash; replace with your own for production.
- Stack: Next.js 14 · React 18 · Framer Motion · Lenis · Tailwind CSS.
