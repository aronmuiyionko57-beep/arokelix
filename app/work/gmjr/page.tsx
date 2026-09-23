export default function GmjrCaseStudy() {
  return (
    <>
      <header>
        <div className="wrap nav">
          <a href="/" className="logo">
            <img src="/logo.png" alt="AROKELIX" className="logo-img" />
          </a>
          <nav className="navlinks">
            <a href="/">Home</a>
            <a href="/work">Our Work</a>
          </nav>
          <a href="/contact" className="navcta">Start a Project</a>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div className="hero-kicker">Case Study — Mining</div>
          <h1 style={{ maxWidth: "650px" }}>GMJR Critical Minerals Mozambique</h1>
          <p className="lede">
            A complete corporate website built from the ground up for a Mozambican
            company focused on the exploration, development and commercialization
            of critical mineral assets across Mozambique and Southern Africa.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <img
            src="/gmjr-screenshot.png"
            alt="GMJR Critical Minerals Mozambique website screenshot"
            style={{ width: "100%", borderRadius: "8px", border: "1px solid var(--line)" }}
          />
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: "720px" }}>
          <div className="process-row" style={{ gridTemplateColumns: "1fr" }}>
            <h3>What we built</h3>
            <p className="p-desc">
              AROKELIX designed and developed the entire website — from information
              architecture through to the final build. The site presents the
              company&apos;s mission, mineral portfolio and partnership approach
              in a way that meets the expectations of investors and industry
              partners evaluating the company for the first time.
            </p>
          </div>
          <div className="process-row" style={{ gridTemplateColumns: "1fr" }}>
            <h3>Design approach</h3>
            <p className="p-desc">
              A navy-and-gold visual identity, built for credibility in a
              serious, capital-intensive industry — clean typography, clear
              navigation between company information, mineral assets and
              services, and content structured around how the industry itself
              evaluates a company.
            </p>
          </div>
          <div className="process-row" style={{ gridTemplateColumns: "1fr" }}>
            <h3>Result</h3>
            <p className="p-desc">
              A live, professional web presence the company can point investors
              and partners to with confidence.
            </p>
          </div>
          <div style={{ marginTop: "32px" }}>
            <a href="https://gmjrminerals.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit the live site →
            </a>
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