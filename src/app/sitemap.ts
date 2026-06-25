import type { MetadataRoute } from "next";
import { SITE, PRODUCTS, POSTS } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();
  const staticRoutes = ["", "/shop", "/about", "/contact", "/faq", "/size-guide", "/blog", "/cart", "/checkout"].map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
  const products = PRODUCTS.map((p) => ({
    url: `${base}/shop/${p.slug}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8,
  }));
  const posts = POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "monthly" as const, priority: 0.6,
  }));
  return [...staticRoutes, ...products, ...posts];
}
