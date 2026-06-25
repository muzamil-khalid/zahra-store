import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { POSTS, getPost, SITE } from "@/lib/site";
import { ClosingCTA } from "@/components/ClosingCTA";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title, description: post.description, type: "article",
      url: `/blog/${post.slug}`, images: [{ url: post.cover, alt: post.title }],
      publishedTime: post.date, authors: [post.author],
    },
  };
}

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleLd = {
    "@context": "https://schema.org", "@type": "BlogPosting",
    headline: post.title, description: post.description,
    image: `${SITE.url}${post.cover}`, datePublished: post.date, dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` } },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE.url}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <article className="bg-paper">
        {/* hero */}
        <header className="container-x pt-[clamp(2.5rem,6vw,4.5rem)]">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-[0.82rem] text-muted transition-colors hover:text-rust"><ArrowLeft size={15} /> All articles</Link>
          <div className="mx-auto mt-6 max-w-[760px] text-center">
            <span className="script text-[1.6rem] text-rust">{post.tags[0]}</span>
            <h1 className="mt-1 font-display text-[clamp(1.9rem,4.5vw,3.1rem)] font-semibold leading-[1.08] text-ink">{post.title}</h1>
            <div className="mt-4 text-[0.8rem] uppercase tracking-[0.1em] text-muted">{fmt(post.date)} · {post.readMins} min read · {post.author}</div>
          </div>
        </header>

        <div className="container-x mt-8">
          <div className="mx-auto max-w-[960px] overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.cover} alt={post.title} className="aspect-[16/9] w-full object-cover" />
          </div>
        </div>

        {/* body */}
        <div className="container-x py-[clamp(2.5rem,5vw,4rem)]">
          <div className="mx-auto max-w-[680px]">
            {post.content.map((b, i) => {
              if (b.type === "h2") return <h2 key={i} className="mt-9 font-display text-[1.5rem] font-semibold text-ink">{b.text}</h2>;
              if (b.type === "ul") return (
                <ul key={i} className="mt-4 space-y-2">
                  {b.items?.map((it, j) => (
                    <li key={j} className="flex gap-3 text-[1.02rem] leading-relaxed text-ink/85">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" /> {it}
                    </li>
                  ))}
                </ul>
              );
              return <p key={i} className="mt-5 text-[1.04rem] leading-[1.85] text-ink/85">{b.text}</p>;
            })}

            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((t) => <span key={t} className="rounded-full border border-[var(--line)] px-3 py-1 text-[0.74rem] text-muted">#{t}</span>)}
            </div>
          </div>

          {/* related */}
          <div className="mx-auto mt-14 max-w-[960px] border-t border-[var(--line)] pt-10">
            <h3 className="font-display text-[1.4rem] font-semibold text-ink">Keep reading</h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex gap-4 rounded-xl border border-[var(--line)] bg-white p-3 transition-colors hover:border-rust">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.cover} alt={p.title} className="h-20 w-24 shrink-0 rounded-lg object-cover" />
                  <span className="flex flex-col justify-center">
                    <span className="text-[0.68rem] uppercase tracking-[0.1em] text-muted">{p.readMins} min</span>
                    <span className="mt-1 font-display text-[1.02rem] leading-snug text-ink transition-colors group-hover:text-rust">{p.title}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
      <ClosingCTA />
    </>
  );
}
