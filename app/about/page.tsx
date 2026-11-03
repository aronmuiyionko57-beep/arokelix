import { Target, Eye, Gem } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "About AROKELIX | Digital Technology & Creative Studio",
  description: "AROKELIX is a technology and creative studio building websites, software and digital systems for businesses that need more than a template.",
};

export default function About() {
  const values = [
    { icon: Target, label: "Mission", name: "Real software for real businesses", desc: "Give organizations access to engineering and design usually reserved for companies with in-house product teams." },
    { icon: Eye, label: "Vision", name: "Technology that fits the business", desc: "We choose tools to match what a business actually needs — never the other way around." },
    { icon: Gem, label: "Values", name: "Built to last, not to demo", desc: "Every project is judged by whether it's still working — and still helping — a year later." },
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

      <SiteFooter />
    </>
  );
}