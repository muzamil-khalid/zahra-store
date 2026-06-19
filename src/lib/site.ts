// ============================================================
// EDIT ME — all site content & your WhatsApp number live here.
// WhatsApp: digits only, with country code, no + or spaces.
//   e.g. 0300 1234567 -> "923001234567"
// ============================================================

export const SITE = {
  name: "Zahra Stitching Studio",
  tagline: "Bespoke stitching, tailored to you",
  whatsapp: "923001234567",
  email: "hello@zahrastitching.studio",
  phone: "+92 300 1234567",
  city: "Karachi, Pakistan",
  hours: "Mon–Sat · 11am–8pm (PKT)",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
  ],
  url: "https://zahrastitching.studio",
};

export const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#collection", label: "Collection" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

// Unsplash demo imagery — replace with your own product photos.
export const IMG = {
  hero: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80",
  heroChip: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80",
  about: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=800&q=80",
  cta: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1400&q=80",
};

export interface Service {
  key: string;
  tab: string;
  title: string;
  body: string;
  points: string[];
  image: string;
  wa: string;
}

export const SERVICES: Service[] = [
  {
    key: "stitched",
    tab: "Stitched",
    title: "Ready stitched outfits",
    body: "Beautifully finished suits and kurtis, ready to wear and ready to ship — crafted in premium fabrics with refined detailing.",
    points: ["Lawn, cotton, chiffon, silk & velvet", "Casual to formal & party wear", "Standard sizing with alteration support"],
    image: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&w=900&q=80",
    wa: "Hi! I'm interested in your ready stitched outfits.",
  },
  {
    key: "unstitched",
    tab: "Unstitched",
    title: "Unstitched fabric",
    body: "Hand-picked unstitched 2 & 3-piece sets for those who love to design their own — add our stitching service any time.",
    points: ["Embroidered & printed collections", "Seasonal & festive ranges", "Optional made-to-measure stitching"],
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
    wa: "Hi! I'm interested in your unstitched fabric.",
  },
  {
    key: "custom",
    tab: "Custom Stitching",
    title: "Custom & made-to-measure",
    body: "Send us your fabric and measurements and we’ll stitch it to your exact fit and the design you have in mind.",
    points: ["Stitched to your measurements", "Choose neckline, sleeves & finishing", "Guidance over WhatsApp, step by step"],
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=900&q=80",
    wa: "Hi! I'd like custom made-to-measure stitching.",
  },
  {
    key: "replica",
    tab: "Brand Replica",
    title: "Brand replica & couture",
    body: "Love a designer piece? Share a photo and we’ll recreate it in your size, fabric and budget — from everyday wear to bridal couture.",
    points: ["Faithful recreation of any design", "Bridal, mehndi & party specials", "Clear quote before we begin"],
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
    wa: "Hi! I'd like a brand replica / couture piece recreated.",
  },
];

export interface GalleryItem { image: string; caption: string }
export const GALLERY: GalleryItem[] = [
  { image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80", caption: "Embroidered chikankari" },
  { image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=800&q=80", caption: "Printed cotton" },
  { image: "https://images.unsplash.com/photo-1610189019599-77e9a8d5b8b8?auto=format&fit=crop&w=800&q=80", caption: "Velvet festive" },
  { image: "https://images.unsplash.com/photo-1617059062460-1dec8e8e8b0a?auto=format&fit=crop&w=800&q=80", caption: "Mehndi yellow set" },
  { image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80", caption: "Bridal couture" },
  { image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80", caption: "Formal elegance" },
];

export interface Piece { name: string; desc: string; price: string; c1: string; c2: string }
export const PIECES: Piece[] = [
  { name: "Embroidered Lawn 3-Piece", desc: "Premium lawn · summer staple", price: "from Rs 6,500", c1: "#e7d8c4", c2: "#cbb08e" },
  { name: "Chikankari Kurti", desc: "Hand-finished cotton · everyday", price: "from Rs 4,200", c1: "#f3efe7", c2: "#dad2c2" },
  { name: "Chiffon Party 3-Piece", desc: "Sequin detailing · evening", price: "from Rs 12,500", c1: "#7a2e3b", c2: "#b04a5c" },
  { name: "Silk Formal 3-Piece", desc: "Subtle embroidery · formal", price: "from Rs 14,500", c1: "#3c4250", c2: "#e7c3cc" },
  { name: "Velvet Festive Shawl Suit", desc: "Embroidered shawl · Eid & winter", price: "from Rs 22,000", c1: "#5a1f2a", c2: "#243049" },
  { name: "Printed Cotton 2-Piece", desc: "Breathable · everyday", price: "from Rs 3,800", c1: "#d9a441", c2: "#2f7d72" },
  { name: "Mehndi Yellow Festive Set", desc: "Gota detailing · celebration", price: "from Rs 16,500", c1: "#f0c84a", c2: "#e89b3c" },
  { name: "Bridal Embroidered Maxi", desc: "Made-to-measure couture", price: "from Rs 85,000", c1: "#7a1322", c2: "#b68a3e" },
];

export interface Step { num: string; title: string; body: string }
export const STEPS: Step[] = [
  { num: "01", title: "Choose or send", body: "Pick a piece from our collection, or send us your own fabric and the design you love." },
  { num: "02", title: "Share measurements", body: "Use our simple size guidance over WhatsApp — we walk you through every step." },
  { num: "03", title: "We stitch & check", body: "Skilled tailors craft your outfit and quality-check it before it leaves the studio." },
  { num: "04", title: "Shipped with care", body: "Tracked delivery to your door — anywhere in Pakistan or around the world." },
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
