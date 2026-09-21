export default function TenseiArkCaseStudy() {
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
          <div className="hero-kicker">Case Study — Retail / E-commerce</div>
          <h1 style={{ maxWidth: "650px" }}>Tensei Ark</h1>
          <p className="lede">
            A full electronics storefront built for a Nairobi-based client,
            supporting a live product catalog, cart, wishlist, product
            comparison and multi-currency pricing.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <img
            src="/tenseiark-screenshot.png"
            alt="Tensei Ark online store screenshot"
            style={{ width: "100%", borderRadius: "8px", border: "1px solid var(--line)" }}
          />
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: "720px" }}>
          <div className="process-row" style={{ gridTemplateColumns: "1fr" }}>
            <h3>What we built</h3>
            <p className="p-desc">
              AROKELIX built a complete e-commerce storefront for the client,
              covering the product catalog, shopping cart, wishlist and
              product comparison features, along with support for both
              Kenyan Shilling and US Dollar pricing to serve local and
              international buyers.
            </p>
          </div>
          <div className="process-row" style={{ gridTemplateColumns: "1fr" }}>
            <h3>Design approach</h3>
            <p className="p-desc">
              A storefront built around clarity and ease of browsing — product
              discovery, comparison and checkout designed to reduce friction
              for customers shopping for electronics online.
            </p>
          </div>
          <div className="process-row" style={{ gridTemplateColumns: "1fr" }}>
            <h3>Result</h3>
            <p className="p-desc">
              A live online store the client uses to sell electronics directly
              to customers in Kenya and beyond.
            </p>
          </div>
          <div style={{ marginTop: "32px" }}>
            <a href="https://tenseiark.store" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit the live store →
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot-row">
          <div>© {new Date().getFullYear()} AROKELIX.</div>
        </div>
      </footer>
    </>
  );
}