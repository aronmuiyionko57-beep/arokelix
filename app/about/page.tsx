import Image from "next/image";
import { Target, Eye, Gem, Send, ArrowRight, Check } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "About AROKELIX | Digital Technology & Creative Company",
  description: "AROKELIX is a technology and creative company building websites, software and digital systems for businesses that need more than a template.",
};

export default function About() {
  const values = [
    { icon: Target, label: "Mission", name: "Real software for real businesses", desc: "Give organizations access to engineering and design usually reserved for companies with in-house product teams." },
    { icon: Eye, label: "Vision", name: "Technology that fits the business", desc: "We choose tools to match what a business actually needs — never the other way around." },
    { icon: Gem, label: "Values", name: "Built to last, not to demo", desc: "Every project is judged by whether it's still working — and still helping — a year later." },
  ];

  const ways = [
    "We start with your business problem, not a template.",
    "You talk directly to the person building your project.",
    "You get a clear scope and a fixed quote before work begins.",
    "We stay available for support and improvements after launch.",
  ];

  return (
    <>
      <SiteHeader />

      <section id="main-content" className="hero">
        <div className="wrap">
          <div className="hero-kicker">About AROKELIX</div>
          <h1 style={{ maxWidth: "700px" }}>
            We build the systems businesses actually run on.
          </h1>
          <p className="lede" style={{ maxWidth: "60ch" }}>
            AROKELIX started with a simple observation: most businesses are held
            together by spreadsheets, manual processes and disconnected tools —
            not because that&apos;s the best way to run things, but because
            proper software always felt out of reach. We exist to close that gap.
          </p>
        </div>
      </section>

      <section className="banner-wrap">
        <div className="wrap">
          <div className="photo-banner">
            <Image
              src="/about/about-workspace.jpg"
              alt=""
              fill
              priority
              sizes="(max-width:1180px) 100vw, 1124px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>What we believe</h2>
          </div>
          <div className="card-grid">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div className="info-card" key={v.name}>
                  <div className="info-card-icon"><Icon size={22} /></div>
                  <div className="info-card-label">{v.label}</div>
                  <div className="info-card-title">{v.name}</div>
                  <p style={{ color: "var(--text-2)", fontSize: "14px", margin: 0 }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-alt">
        <div className="wrap about-split">
          <div className="about-photo">
            <Image
              src="/about/about-collaboration.jpg"
              alt=""
              fill
              sizes="(max-width:900px) 100vw, 540px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="hero-kicker">How we work</div>
            <h2 style={{ fontSize: "clamp(26px,3.4vw,36px)", marginBottom: "22px" }}>
              Working with AROKELIX is simple and direct.
            </h2>
            <ul className="check-list">
              {ways.map((w) => (
                <li key={w}><Check size={18} /><span>{w}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <h2>Have a project in mind?<br />Let&apos;s talk.</h2>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <Send size={16} /> Start a Project
            </a>
            <a href="/services" className="btn btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              Our Services <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}