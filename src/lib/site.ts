// ============================================================
// EDIT ME — content, products, FAQs, blog & WhatsApp number.
// WhatsApp: digits only, country code, no + or spaces.
// ============================================================

export const SITE = {
  name: "Zahra Stitching Studio",
  tagline: "Stitched with Care, Worn with Confidence",
  whatsapp: "923212263937",
  phone: "0321 2263937",
  email: "zahrastitchingstudio@gmail.com",
  city: "Karachi, Pakistan",
  hours: "Mon–Sat · 10am–8pm (PKT)",
  instagram: "@zahra.stitching.studio",
  socials: [
    { label: "Instagram", href: "https://instagram.com/zahra.stitching.studio" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
  ],
  url: "https://zahrastudio.store",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const CURRENCY = "Rs";
export function formatPKR(n: number): string {
  return `${CURRENCY} ${Math.round(n).toLocaleString("en-PK")}`;
}

const U = (id: string, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  logo: "/logo.png",
  heroModel: "/img/hero-model.jpg",
  studio: "/img/studio.jpg",
  craft: "/img/craft.jpg",
  lavender: "/img/lavender-suit.jpg",
  hero: "/img/hero-model.jpg",
  about: "/img/studio.jpg",
  cta: "/img/hero-model.jpg",
};

export interface Category { id: string; name: string; blurb: string; image: string }
export const CATEGORIES: Category[] = [
  { id: "stitched", name: "Stitched Suits", blurb: "Ready to wear, finished with care", image: "/img/hero-model.jpg" },
  { id: "unstitched", name: "Unstitched Fabric", blurb: "Design your own, your way", image: "/img/lavender-suit.jpg" },
  { id: "party", name: "Party & Formal", blurb: "Made for evenings to remember", image: U("photo-1594633312681-425c7b97ccd1") },
  { id: "bridal", name: "Bridal & Couture", blurb: "Made-to-measure for your big day", image: U("photo-1595777457583-95e059d581b8") },
];

export interface Product {
  slug: string; name: string; category: string; price: number; stitchingCost: number;
  fabric: string; description: string; sizes: string[]; images: string[]; featured?: boolean; badge?: string;
}
export const SIZES = ["XS", "S", "M", "L", "XL"];

export const PRODUCTS: Product[] = [
  { slug: "lavender-embroidered-3-piece", name: "Lavender Embroidered 3-Piece", category: "party", price: 9500, stitchingCost: 3000, fabric: "Embroidered Lawn", description: "A soft lavender three-piece with intricate thread-work, scalloped lace hems and a finely finished neckline — graceful for day or evening. Available unstitched, or add made-to-measure stitching.", sizes: SIZES, images: ["/img/lavender-suit.jpg", "/img/craft.jpg"], featured: true, badge: "New" },
  { slug: "grey-luxe-embroidered-suit", name: "Grey Luxe Embroidered Suit", category: "stitched", price: 11500, stitchingCost: 3500, fabric: "Cotton Net", description: "Our signature grey suit with delicate chikankari-style embroidery and lace detailing on the cuffs and hem — finished and ready to wear.", sizes: SIZES, images: ["/img/hero-model.jpg", "/img/studio.jpg"], featured: true, badge: "Bestseller" },
  { slug: "embroidered-lawn-3-piece", name: "Embroidered Lawn 3-Piece", category: "unstitched", price: 6500, stitchingCost: 2500, fabric: "Premium Lawn", description: "A breezy summer staple in premium lawn with delicate embroidery, a printed dupatta and dyed trousers. Available unstitched, or add stitching to your size.", sizes: SIZES, images: [U("photo-1610030469983-98e550d6193c", 1000), U("photo-1556905055-8f358a7a47b2", 1000)], featured: true },
  { slug: "chikankari-cotton-kurti", name: "Chikankari Cotton Kurti", category: "stitched", price: 3800, stitchingCost: 1800, fabric: "Soft Cotton", description: "Hand-finished chikankari kurti in soft cotton — light, elegant and perfect for everyday wear.", sizes: SIZES, images: [U("photo-1583391733956-6c78276477e2", 1000), U("photo-1564257631407-4deb1f99d992", 1000)], featured: true },
  { slug: "chiffon-party-3-piece", name: "Chiffon Party 3-Piece", category: "party", price: 9500, stitchingCost: 3000, fabric: "Chiffon", description: "Flowing chiffon with sequin detailing for parties and evening events. Add custom stitching for a flawless fit.", sizes: SIZES, images: [U("photo-1594633312681-425c7b97ccd1", 1000), U("photo-1583846783214-7229a91b20ed", 1000)] },
  { slug: "velvet-festive-shawl-suit", name: "Velvet Festive Shawl Suit", category: "stitched", price: 16000, stitchingCost: 5000, fabric: "Velvet", description: "Rich velvet suit with an embroidered shawl for Eid and winter festivities.", sizes: SIZES, images: [U("photo-1610189019599-77e9a8d5b8b8", 1000), U("photo-1595777457583-95e059d581b8", 1000)] },
  { slug: "printed-cotton-2-piece", name: "Printed Cotton 2-Piece", category: "unstitched", price: 3200, stitchingCost: 2000, fabric: "Cotton", description: "Easy everyday two-piece in breathable printed cotton — a warm-weather workhorse.", sizes: SIZES, images: [U("photo-1564257631407-4deb1f99d992", 1000), U("photo-1610030469983-98e550d6193c", 1000)] },
  { slug: "mehndi-yellow-festive-set", name: "Mehndi Yellow Festive Set", category: "bridal", price: 13500, stitchingCost: 6000, fabric: "Organza", description: "Cheerful mehndi-ready set with gota detailing and a vibrant dupatta — made to celebrate.", sizes: SIZES, images: [U("photo-1617059062460-1dec8e8e8b0a", 1000), U("photo-1595777457583-95e059d581b8", 1000)], featured: true },
  { slug: "bridal-embroidered-maxi", name: "Bridal Embroidered Maxi", category: "bridal", price: 60000, stitchingCost: 25000, fabric: "Net & Raw Silk", description: "A statement bridal maxi with intricate hand embroidery and a sweeping silhouette — made to measure for your big day.", sizes: SIZES, images: [U("photo-1595777457583-95e059d581b8", 1000), U("photo-1617059062460-1dec8e8e8b0a", 1000)], badge: "Couture" },
];

export function getProduct(slug: string) { return PRODUCTS.find((p) => p.slug === slug); }
export function categoryName(id: string) { return CATEGORIES.find((c) => c.id === id)?.name ?? id; }

export interface GalleryItem { image: string; caption: string }
export const GALLERY: GalleryItem[] = [
  { image: "/img/hero-model.jpg", caption: "Grey luxe embroidery" },
  { image: "/img/lavender-suit.jpg", caption: "Lavender thread-work" },
  { image: "/img/craft.jpg", caption: "Stitched by hand" },
  { image: "/img/studio.jpg", caption: "Inside the studio" },
  { image: U("photo-1595777457583-95e059d581b8"), caption: "Bridal couture" },
  { image: U("photo-1617059062460-1dec8e8e8b0a"), caption: "Festive set" },
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

export interface Service { key: string; tab: string; title: string; body: string; points: string[]; image: string }
export const SERVICES: Service[] = [
  { key: "stitched", tab: "Stitched", title: "Ready stitched outfits", body: "Beautifully finished suits and kurtis, ready to wear and ready to ship.", points: ["Premium fabrics", "Casual to formal", "Alteration support"], image: "/img/hero-model.jpg" },
  { key: "unstitched", tab: "Unstitched", title: "Unstitched fabric", body: "Hand-picked unstitched sets for those who love to design their own.", points: ["Embroidered & printed", "Seasonal ranges", "Optional stitching"], image: "/img/lavender-suit.jpg" },
  { key: "custom", tab: "Custom", title: "Custom & made-to-measure", body: "Send your fabric and measurements — we stitch to your exact fit.", points: ["Your measurements", "Choose finishing", "WhatsApp guidance"], image: "/img/craft.jpg" },
  { key: "replica", tab: "Brand Replica", title: "Brand replica & couture", body: "Love a designer piece? We recreate it in your size, fabric and budget.", points: ["Any design", "Bridal specials", "Clear quote first"], image: "/img/studio.jpg" },
];

export interface Faq { q: string; a: string }
export const FAQS: Faq[] = [
  { q: "How do I place an order?", a: "Browse the shop, add pieces to your cart with your size and stitched/unstitched choice, then tap “Order on WhatsApp”. Your full order opens in WhatsApp, ready to send — we confirm details and total there." },
  { q: "Do you offer custom, made-to-measure stitching?", a: "Yes. You can send us your own fabric or choose from ours, share your measurements over WhatsApp, and we stitch to your exact fit and chosen design." },
  { q: "How do I share my measurements?", a: "We guide you step by step on WhatsApp with a simple measurement chart. If you already have a well-fitting outfit, you can share those measurements instead." },
  { q: "Can you copy a designer or brand outfit?", a: "We can recreate most designs in your size, fabric and budget. Just send a clear photo and we’ll give you an honest quote before we begin." },
  { q: "How long does stitching take?", a: "Everyday stitched pieces typically take 7–10 days; detailed party and bridal work takes longer. We confirm a timeline on WhatsApp before starting." },
  { q: "Do you deliver outside Pakistan?", a: "Yes — we ship worldwide with tracked delivery. Shipping cost depends on destination and weight, confirmed before dispatch." },
  { q: "What are the payment options?", a: "Cash on Delivery within Pakistan, and bank transfer for international orders. Final total and payment details are confirmed on WhatsApp." },
  { q: "Can I get alterations if the fit isn’t right?", a: "Absolutely. If something needs adjusting, message us and we’ll arrange alterations to get your perfect fit." },
];

export interface Post {
  slug: string; title: string; excerpt: string; description: string; cover: string;
  date: string; author: string; readMins: number; tags: string[];
  content: { type: "p" | "h2" | "ul"; text?: string; items?: string[] }[];
}
export const POSTS: Post[] = [
  {
    slug: "how-to-take-your-measurements-for-stitching",
    title: "How to Take Your Own Measurements for Stitching",
    excerpt: "A simple, step-by-step guide to measuring yourself at home so your stitched outfit fits perfectly the first time.",
    description: "Step-by-step guide to taking accurate body measurements at home for custom stitching — bust, waist, hips, shoulder, sleeve and length, with tips for a perfect fit.",
    cover: "/img/craft.jpg", date: "2026-06-10", author: "Zahra Studio", readMins: 5,
    tags: ["measurements", "custom stitching", "guide"],
    content: [
      { type: "p", text: "A great stitched outfit starts with accurate measurements. With a soft measuring tape and a few minutes, you can measure yourself at home and get a perfect made-to-measure fit." },
      { type: "h2", text: "What you’ll need" },
      { type: "ul", items: ["A soft measuring tape", "A well-fitting outfit to reference", "Someone to help (optional, but easier)"] },
      { type: "h2", text: "The key measurements" },
      { type: "ul", items: ["Bust — around the fullest part", "Waist — the narrowest part", "Hips — the fullest part", "Shoulder — seam to seam across the back", "Sleeve length — shoulder to wrist", "Shirt length — shoulder to desired hem", "Trouser length — waist to ankle"] },
      { type: "p", text: "Keep the tape snug but not tight, and stand naturally. If you already own an outfit that fits beautifully, you can measure that flat and share those numbers with us instead." },
      { type: "h2", text: "Share and relax" },
      { type: "p", text: "Send your measurements on WhatsApp and we’ll handle the rest — and if anything needs adjusting after delivery, we’re happy to alter it for the perfect fit." },
    ],
  },
  {
    slug: "stitched-vs-unstitched-which-to-choose",
    title: "Stitched vs Unstitched: Which Should You Choose?",
    excerpt: "Not sure whether to buy ready-stitched or unstitched fabric? Here’s how to decide based on fit, time and personal style.",
    description: "Stitched vs unstitched outfits compared — pros, cons and who each option suits best, so you can choose confidently for your next Pakistani outfit.",
    cover: "/img/lavender-suit.jpg", date: "2026-06-05", author: "Zahra Studio", readMins: 4,
    tags: ["stitched", "unstitched", "buying guide"],
    content: [
      { type: "p", text: "One of the first choices when buying Pakistani wear is whether to go stitched or unstitched. Both have their place — here’s how to pick." },
      { type: "h2", text: "Choose stitched if…" },
      { type: "ul", items: ["You want it ready to wear, fast", "You prefer standard sizing with minor alterations", "You’re ordering as a gift"] },
      { type: "h2", text: "Choose unstitched if…" },
      { type: "ul", items: ["You want a fully personalised fit", "You like choosing your own design and finishing", "You enjoy a made-to-measure experience"] },
      { type: "p", text: "With us you don’t have to compromise: pick unstitched fabric and add our stitching service to get a custom fit on the fabric you love." },
    ],
  },
  {
    slug: "timeless-stitching-trends-2026",
    title: "5 Timeless Stitching Trends for 2026",
    excerpt: "From scalloped hems to delicate chikankari, here are the details that never go out of style this season.",
    description: "Discover 5 timeless Pakistani stitching trends for 2026 — scalloped hems, chikankari, statement sleeves, pastel palettes and hand embroidery.",
    cover: "/img/hero-model.jpg", date: "2026-05-28", author: "Zahra Studio", readMins: 4,
    tags: ["trends", "2026", "style"],
    content: [
      { type: "p", text: "Trends come and go, but a few details stay beautiful season after season. Here are five we’re stitching a lot of this year." },
      { type: "ul", items: ["Scalloped, lace-trimmed hems", "Soft pastel palettes — lavender, sage, sky", "Delicate chikankari and thread-work", "Statement sleeves with cutwork", "Subtle hand embroidery over print"] },
      { type: "p", text: "Want any of these on your next outfit? Send us a reference and we’ll tailor it to your taste." },
    ],
  },
  {
    slug: "how-brand-replica-stitching-works",
    title: "How Brand-Replica Stitching Works (and What to Expect)",
    excerpt: "Love a designer piece that’s out of budget? Here’s how a faithful replica is made, and how to get an honest quote.",
    description: "How brand-replica stitching works at Zahra Stitching Studio — sharing a reference, choosing fabric, getting a clear quote, and what to expect in fit and finishing.",
    cover: "/img/studio.jpg", date: "2026-05-20", author: "Zahra Studio", readMins: 5,
    tags: ["brand replica", "couture", "custom"],
    content: [
      { type: "p", text: "A faithful replica lets you wear the design you love, in your size and budget. Here’s how the process works with us." },
      { type: "h2", text: "1. Share a reference" },
      { type: "p", text: "Send a clear photo of the outfit you love. The more angles, the better we can match the cut and detailing." },
      { type: "h2", text: "2. Choose fabric & get a quote" },
      { type: "p", text: "Pick fabric from us or send your own. We give you an honest quote and timeline before any work begins — no surprises." },
      { type: "h2", text: "3. Stitched to your measurements" },
      { type: "p", text: "We recreate the design to your exact fit, quality-check it, and ship it with care, anywhere in the world." },
    ],
  },
];
export function getPost(slug: string) { return POSTS.find((p) => p.slug === slug); }
