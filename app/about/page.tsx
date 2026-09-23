import { Target, Eye, Gem } from "lucide-react";

export default function About() {
  const values = [
    { icon: Target, label: "Mission", name: "Real software for real businesses", desc: "Give organizations access to engineering and design usually reserved for companies with in-house product teams." },
    { icon: Eye, label: "Vision", name: "Technology that fits the business", desc: "We choose tools to match what a business actually needs — never the other way around." },
    { icon: Gem, label: "Values", name: "Built to last, not to demo", desc: "Every project is judged by whether it's still working — and still helping — a year later." },
  ];

  return (
    <>
      <header>
        <div className="wrap nav">
          <a href="/" className="logo">
            <img src="/logo.png" alt="AROKELIX" className="logo-img" />
          </a>
          <nav className="navlinks">
            <a href="/">Home</a>
            <a href="/#services">Services</a>
            <a href="/work">Our Work</a>
          </nav>
          <a href="/contact" className="navcta">Start a Project</a>
        </div>
      </header>

      <section className="hero">
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

      <footer className="footer-main">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <img src="/logo.png" alt="AROKELIX" style={{ height: "56px", width: "auto", mixBlendMode: "multiply" }} />
              <p className="footer-brand-tagline">Digital Products · Technology · Creative Solutions.</p>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/solutions">Solutions</a></li>
                <li><a href="/work">Work</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="/#services">Websites</a></li>
                <li><a href="/#services">Software</a></li>
                <li><a href="/#services">E-commerce</a></li>
                <li><a href="/#services">Branding</a></li>
                <li><a href="/#services">Digital Marketing</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:aronmuiyionko57@gmail.com">aronmuiyionko57@gmail.com</a></li>
                <li><a href="tel:+254706519789">+254 706 519 789</a></li>
                <li>Remote — worldwide</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} AROKELIX. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}