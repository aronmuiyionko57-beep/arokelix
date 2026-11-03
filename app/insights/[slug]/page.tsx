import { notFound } from "next/navigation";
import { ArrowLeft, Send } from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { SITE_URL, SITE_NAME } from "../../lib/site";
import { articles, getArticle, readingTime, formatDate } from "../data";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | AROKELIX`,
    description: article.description,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `/insights/${article.slug}`,
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: `${SITE_URL}/insights/${article.slug}`,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } },
  };

  return (
    <>
      <SiteHeader />

      <section id="main-content" className="page-hero">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="wrap">
          <div className="hero-kicker">{article.category}</div>
          <h1>{article.title}</h1>
          <p className="lede">{article.description}</p>
          <p className="article-hero-meta">
            {formatDate(article.date)} · {readingTime(article)} min read
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <article className="article">
            {article.sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            ))}
            <a href="/insights" className="work-link" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "16px" }}>
              <ArrowLeft size={16} /> All insights
            </a>
          </article>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <h2>Want to talk about your project?</h2>
          <p>Share a few details and we&apos;ll reply within one business day.</p>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <Send size={16} /> Start a Project
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}