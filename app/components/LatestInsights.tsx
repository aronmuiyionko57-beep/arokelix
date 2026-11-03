import { ArrowRight } from "lucide-react";
import { articles, readingTime } from "../insights/data";

export default function LatestInsights() {
  return (
    <section id="insights" className="bg-alt">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="hero-kicker">Insights</div>
            <h2>Practical advice, no jargon.</h2>
          </div>
          <p>Short guides for businesses planning a website or software project.</p>
        </div>
        <div className="card-grid">
          {articles.slice(0, 3).map((a) => (
            <a key={a.slug} href={`/insights/${a.slug}`} className="info-card-link">
              <div className="info-card">
                <div className="info-card-label">{a.category}</div>
                <div className="info-card-title">{a.title}</div>
                <p style={{ color: "var(--text-2)", fontSize: "14px", margin: "0 0 16px" }}>{a.description}</p>
                <p className="article-meta">{readingTime(a)} min read</p>
                <div className="info-card-arrow"><ArrowRight size={16} /></div>
              </div>
            </a>
          ))}
        </div>
        <div style={{ marginTop: "32px" }}>
          <a href="/insights" className="work-link" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            Read all insights <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}