// ============================================================
// EDIT ME — saari content + dummy data + WhatsApp number yahan.
// WhatsApp: digits only, country code ke saath, bina + ya space.
//   e.g. 0300 1234567 -> "923001234567"
// ============================================================

export const SITE = {
  name: "Zahra Stitching Studio",
  tagline: "Bespoke stitching, tailored to you",
  whatsapp: "923001234567",
  email: "hello@zahrastudio.store",
  phone: "+92 300 1234567",
  city: "Karachi, Pakistan",
  hours: "Mon–Sat · 11am–8pm (PKT)",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
  ],
  url: "https://zahrastudio.store",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const CURRENCY = "Rs";
export function formatPKR(n: number): string {
  return `${CURRENCY} ${Math.round(n).toLocaleString("en-PK")}`;
}

// Shared imagery (Unsplash demo — apni asli photos se replace karein).
export const IMG = {
  hero: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80",
  heroChip: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80",
  about: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=800&q=80",
  cta: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1400&q=80",
  shop: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&w=1400&q=80",
};

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export interface Category {
  id: string;
  name: string;
  blurb: string;
  image: string;
}
export const CATEGORIES: Category[] = [
  { id: "stitched", name: "Stitched Suits", blurb: "Ready to wear, finished with care", image: U("photo-1583846783214-7229a91b20ed") },
  { id: "unstitched", name: "Unstitched Fabric", blurb: "Design your own, your way", image: U("photo-1610030469983-98e550d6193c") },
  { id: "party", name: "Party & Formal", blurb: "Made for evenings to remember", image: U("photo-1594633312681-425c7b97ccd1") },
  { id: "bridal", name: "Bridal & Couture", blurb: "Made-to-measure for your big day", image: U("photo-1595777457583-95e059d581b8") },
];

export interface Product {
  slug: string;
  name: string;
  category: string; // Category id
  price: number; // base (unstitched / fabric) price, PKR
  stitchingCost: number; // added when "Stitched" is chosen
  fabric: string;
  description: string;
  sizes: string[];
  images: string[];
  featured?: boolean;
  badge?: string;
}

export const SIZES = ["XS", "S", "M", "L", "XL"];

export const PRODUCTS: Product[] = [
  {
    slug: "embroidered-lawn-3-piece",
    name: "Embroidered Lawn 3-Piece",
    category: "unstitched",
    price: 6500,
    stitchingCost: 2500,
    fabric: "Premium Lawn",
    description:
      "A breezy summer staple in premium lawn — delicate front embroidery, a printed dupatta, and dyed trousers. Available unstitched, or add made-to-measure stitching to your size.",
    sizes: SIZES,
    images: [U("photo-1610030469983-98e550d6193c", 1000), U("photo-1556905055-8f358a7a47b2", 1000)],
    featured: true,
    badge: "New",
  },
  {
    slug: "chikankari-cotton-kurti",
    name: "Chikankari Cotton Kurti",
    category: "stitched",
    price: 3800,
    stitchingCost: 1800,
    fabric: "Soft Cotton",
    description:
      "Hand-finished chikankari kurti in soft cotton — light, elegant and perfect for everyday wear. Finished and ready to wear.",
    sizes: SIZES,
    images: [U("photo-1583391733956-6c78276477e2", 1000), U("photo-1564257631407-4deb1f99d992", 1000)],
    featured: true,
  },
  {
    slug: "chiffon-party-3-piece",
    name: "Chiffon Party 3-Piece",
    category: "party",
    price: 9500,
    stitchingCost: 3000,
    fabric: "Chiffon",
    description:
      "Flowing chiffon with sequin detailing for parties and evening events. Add custom stitching for a flawless personal fit.",
    sizes: SIZES,
    images: [U("photo-1594633312681-425c7b97ccd1", 1000), U("photo-1583846783214-7229a91b20ed", 1000)],
    featured: true,
    badge: "Bestseller",
  },
  {
    slug: "silk-formal-suit",
    name: "Silk Formal Suit",
    category: "party",
    price: 11000,
    stitchingCost: 3500,
    fabric: "Raw Silk",
    description:
      "Understated raw-silk formal suit with subtle embroidery — elegant for formal gatherings and dinners.",
    sizes: SIZES,
    images: [U("photo-1583846783214-7229a91b20ed", 1000), U("photo-1490481651871-ab68de25d43d", 1000)],
  },
  {
    slug: "velvet-festive-shawl-suit",
    name: "Velvet Festive Shawl Suit",
    category: "stitched",
    price: 16000,
    stitchingCost: 5000,
    fabric: "Velvet",
    description:
      "Rich velvet suit with an embroidered shawl for Eid and winter festivities. Add stitching for a tailored finish.",
    sizes: SIZES,
    images: [U("photo-1610189019599-77e9a8d5b8b8", 1000), U("photo-1595777457583-95e059d581b8", 1000)],
    featured: true,
  },
  {
    slug: "printed-cotton-2-piece",
    name: "Printed Cotton 2-Piece",
    category: "unstitched",
    price: 3200,
    stitchingCost: 2000,
    fabric: "Cotton",
    description:
      "Easy everyday two-piece in breathable printed cotton. A wardrobe workhorse for the warm months.",
    sizes: SIZES,
    images: [U("photo-1564257631407-4deb1f99d992", 1000), U("photo-1610030469983-98e550d6193c", 1000)],
  },
  {
    slug: "mehndi-yellow-festive-set",
    name: "Mehndi Yellow Festive Set",
    category: "bridal",
    price: 13500,
    stitchingCost: 6000,
    fabric: "Organza",
    description:
      "Cheerful mehndi-ready set with gota detailing and a vibrant dupatta — made to celebrate.",
    sizes: SIZES,
    images: [U("photo-1617059062460-1dec8e8e8b0a", 1000), U("photo-1595777457583-95e059d581b8", 1000)],
    featured: true,
  },
  {
    slug: "bridal-embroidered-maxi",
    name: "Bridal Embroidered Maxi",
    category: "bridal",
    price: 60000,
    stitchingCost: 25000,
    fabric: "Net & Raw Silk",
    description:
      "A statement bridal maxi with intricate hand embroidery and a sweeping silhouette — made to measure for your big day.",
    sizes: SIZES,
    images: [U("photo-1595777457583-95e059d581b8", 1000), U("photo-1617059062460-1dec8e8e8b0a", 1000)],
    badge: "Couture",
  },
  {
    slug: "organza-embroidered-3-piece",
    name: "Organza Embroidered 3-Piece",
    category: "unstitched",
    price: 7800,
    stitchingCost: 2800,
    fabric: "Organza",
    description:
      "Sheer organza with all-over embroidery — a refined choice for formal day events. Pair with our stitching service for the perfect drape.",
    sizes: SIZES,
    images: [U("photo-1490481651871-ab68de25d43d", 1000), U("photo-1583391733956-6c78276477e2", 1000)],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
export function categoryName(id: string): string {
  return CATEGORIES.find((c) => c.id === id)?.name ?? id;
}

export interface GalleryItem { image: string; caption: string }
export const GALLERY: GalleryItem[] = [
  { image: U("photo-1583391733956-6c78276477e2"), caption: "Embroidered chikankari" },
  { image: U("photo-1564257631407-4deb1f99d992"), caption: "Printed cotton" },
  { image: U("photo-1610189019599-77e9a8d5b8b8"), caption: "Velvet festive" },
  { image: U("photo-1617059062460-1dec8e8e8b0a"), caption: "Mehndi yellow set" },
  { image: U("photo-1595777457583-95e059d581b8"), caption: "Bridal couture" },
  { image: U("photo-1490481651871-ab68de25d43d"), caption: "Formal elegance" },
];

export interface Step { num: string; title: string; body: string }
export const STEPS: Step[] = [
  { num: "01", title: "Browse & pick", body: "Choose a stitched piece, fabric, or a custom design from our collection." },
  { num: "02", title: "Add to cart", body: "Select size, stitched or unstitched, and quantity — then add to your cart." },
  { num: "03", title: "Order on WhatsApp", body: "Tap ‘Order on WhatsApp’ and your full order opens in chat, ready to send." },
  { num: "04", title: "Stitched & shipped", body: "We confirm, stitch with care, and deliver — anywhere in the world." },
];

export interface Stat { value: number; suffix: string; label: string }
export const STATS: Stat[] = [
  { value: 2000, suffix: "+", label: "Outfits stitched" },
  { value: 40, suffix: "+", label: "Countries served" },
  { value: 98, suffix: "%", label: "Perfect-fit rate" },
  { value: 15, suffix: "+", label: "Years of craft" },
];

export interface Testimonial { quote: string; name: string; place: string }
export const TESTIMONIALS: Testimonial[] = [
  { quote: "The fit was perfect and the finishing is beautiful. They even shipped to the UK within days — I felt looked after the whole way.", name: "Hira A.", place: "London, UK" },
  { quote: "I sent a photo of a designer dress and they recreated it exactly, in my size and budget. Honestly couldn’t tell the difference.", name: "Sana M.", place: "Karachi, PK" },
  { quote: "Lovely fabric, gorgeous stitching, and they guided me through measurements on WhatsApp so patiently. My go-to studio now.", name: "Ayesha K.", place: "Toronto, CA" },
];

export interface Service { key: string; tab: string; title: string; body: string; points: string[]; image: string; }
export const SERVICES: Service[] = [
  { key: "stitched", tab: "Stitched", title: "Ready stitched outfits", body: "Beautifully finished suits and kurtis, ready to wear and ready to ship.", points: ["Premium fabrics", "Casual to formal", "Alteration support"], image: U("photo-1583846783214-7229a91b20ed", 900) },
  { key: "unstitched", tab: "Unstitched", title: "Unstitched fabric", body: "Hand-picked unstitched sets for those who love to design their own.", points: ["Embroidered & printed", "Seasonal ranges", "Optional stitching"], image: U("photo-1610030469983-98e550d6193c", 900) },
  { key: "custom", tab: "Custom", title: "Custom & made-to-measure", body: "Send your fabric and measurements — we stitch to your exact fit.", points: ["Your measurements", "Choose finishing", "WhatsApp guidance"], image: U("photo-1551232864-3f0890e580d9", 900) },
  { key: "replica", tab: "Brand Replica", title: "Brand replica & couture", body: "Love a designer piece? We recreate it in your size, fabric and budget.", points: ["Any design", "Bridal specials", "Clear quote first"], image: U("photo-1595777457583-95e059d581b8", 900) },
];
