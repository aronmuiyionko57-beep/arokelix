export const metadata = {
  title: "AROKELIX Lab | Experiments & Emerging Technology",
  description: "New technology, AI experiments and internal tools AROKELIX is building and testing.",
};

export default function Lab() {
  return (
    <>
      <header>
        <div className="wrap nav">
          <a href="/" className="logo">
            <img src="/logo.png" alt="AROKELIX" className="logo-img" />
          </a>
          <nav className="navlinks">
            <a href="/">Home</a>
            <a href="/about">About AROKELIX</a>
            <a href="/work">Our Work</a>
          </nav>
          <a href="/contact" className="navcta">Start a Project</a>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div className="hero-kicker">AROKELIX Lab</div>
          <h1 style={{ maxWidth: "650px" }}>Where we experiment before we ship.</h1>
          <p className="lede">
            A space for the new technology, AI experiments and internal tools
            we&apos;re building outside of client work.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: "560px" }}>
          <p style={{ fontSize: "17px", color: "var(--text-2)" }}>
            New experiments are added here as they&apos;re ready to show.
            Curious what we&apos;re working on right now? Reach out — we&apos;d
            love to tell you about it.
          </p>
          <div className="hero-actions" style={{ marginTop: "24px" }}>
            <a href="/contact" className="btn btn-primary">Get in touch</a>
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