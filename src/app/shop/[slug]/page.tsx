import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductGallery } from "@/components/ProductGallery";
import { AddToCart } from "@/components/AddToCart";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, getProduct, categoryName } from "@/lib/site";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProduct(params.slug);
  if (!p) return { title: "Product" };
  return { title: p.name, description: p.description };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <div className="container-x pt-[clamp(6.5rem,11vw,8.5rem)]">
        <nav className="mb-8 text-[0.82rem] text-muted">
          <Link href="/shop" className="hover:text-rust">Shop</Link>
          <span className="px-2">/</span>
          <Link href={`/shop?cat=${product.category}`} className="hover:text-rust">{categoryName(product.category)}</Link>
          <span className="px-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <section className="container-x grid gap-[clamp(2rem,5vw,4rem)] pb-[clamp(3rem,6vw,5rem)] lg:grid-cols-2">
        <ProductGallery images={product.images} name={product.name} slug={product.slug} />
        <div>
          <span className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">{categoryName(product.category)} · {product.fabric}</span>
          <h1 className="h-display mt-2 text-[clamp(1.9rem,4vw,3rem)]">{product.name}</h1>
          <p className="mt-4 max-w-[52ch] text-muted">{product.description}</p>
          <div className="mt-8 border-t border-[var(--line)] pt-8">
            <AddToCart product={product} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-y bg-ivory">
          <div className="container-x">
            <h2 className="section-title mb-8 text-center">You may also love</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3">
              {related.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
