# Zahra Stitching Studio — Next.js (e-commerce style)

A premium, animation-rich, multi-page site for a stitching studio. **No backend, no payments** — products go into a **cart**, and the whole order is sent via **WhatsApp** with one tap. Built with **Next.js 14**, **Framer Motion** (site-wide parallax + animations), **Lenis** (smooth scroll), and **Tailwind CSS**, exported as fast static HTML for great speed + SEO.

## Pages
Home · Shop (with category filter) · Product detail · Cart · Checkout · About · Contact — plus a sticky header with a live cart count and a slide-in **cart drawer**.

## How ordering works (no payment)
1. On a product: choose **Stitched / Unstitched**, **size**, and **quantity** → Add to cart.
2. Cart drawer / Cart page → **“Order on WhatsApp”** opens WhatsApp with the full order (items, options, quantities, subtotal) ready to send.
3. Optional **Checkout** page adds name/phone/address to that WhatsApp message. Nothing is stored anywhere.

## Run it
```bash
npm install
npm run dev          # http://localhost:3000
```

## Build a static site (for hosting / your domain)
```bash
npm run build        # outputs static site to ./out
```
Deploy the **`out/`** folder to Vercel, Netlify, or any static host. (On Vercel just import the repo — it builds automatically; your `zahrastudio.store` domain points here.)

## The only things to edit — all in `src/lib/site.ts`
- **WhatsApp number** → `SITE.whatsapp` (digits only, country code, no `+`).
- **Products** → the `PRODUCTS` array: name, category, price, `stitchingCost` (added when stitched), fabric, sizes, images, description, `featured`, `badge`.
- **Categories**, **gallery**, **stats**, **testimonials**, **steps**, contact details, nav — all in the same file.
- **Images**: swap the Unsplash demo URLs for your own photos. Every image has an automatic fallback so the page never looks broken.

## Animations
Site-wide **parallax** (`<Parallax>` / `<ParallaxImage>`), Lenis smooth scroll, scroll-progress bar, word-by-word titles, staggered reveals, pinned horizontal lookbook, count-up stats, animated tabs, and a slide-in cart drawer — all respecting “reduced motion”.

## Structure
```
src/
  app/            home, shop, shop/[slug], cart, checkout, about, contact
  components/     Hero, ProductCard, CartDrawer, AddToCart, Parallax, … 
  context/CartContext.tsx   cart state (localStorage)
  lib/
    site.ts       ← ALL content + products + WhatsApp number
    whatsapp.ts   order-message builder + link
```

Stack: Next.js 14 · React 18 · Framer Motion · Lenis · Tailwind CSS.
