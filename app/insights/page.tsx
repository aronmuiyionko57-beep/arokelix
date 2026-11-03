import { ArrowRight } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { articles, readingTime, formatDate } from "./data";

export const metadata = {
  title: "Insights | AROKELIX",
  description:
    "Practical advice on websites, software and digital strategy for businesses, from the AROKELIX team.",
};

export default function Insights() {
  return (
    <>
      <SiteHeader />

      <section id="main-content" className="hero">
        <div className="wrap">
          <div className="hero-kicker">Insights</div>
          <h1 style={{ maxWidth: "700px" }}>Practical advice for businesses going digital.</h1>
          <p className="lede">
            Clear answers to the questions we hear most, written without jargon.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="card-grid">
            {articles.map((a) => (
              <a key={a.slug} href={`/insights/${a.slug}`} className="info-card-link">
                <div className="info-card">
                  <div className="info-card-label">{a.category}</div>
                  <div className="info-card-title">{a.title}</div>
                  <p style={{ color: "var(--text-2)", fontSize: "14px", margin: "0 0 16px" }}>{a.description}</p>
                  <p className="article-meta">{formatDate(a.date)} · {readingTime(a)} min read</p>
                  <div className="info-card-arrow"><ArrowRight size={16} /></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}