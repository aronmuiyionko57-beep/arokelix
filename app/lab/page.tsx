export default function Lab() {
  return (
    <>
      <header>
        <div className="wrap nav">
          <div className="logo"><span className="mark"></span>AROKELIX</div>
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
            We&apos;re currently swapping out the early stuff for what we&apos;re
            building next — this page is mid-glow-up. New experiments are
            being added as they&apos;re ready to show. Curious what&apos;s in
            the pipeline? Ask us — we love talking about it.
          </p>
          <div className="hero-actions" style={{ marginTop: "24px" }}>
            <a href="/contact" className="btn btn-primary">Get in touch</a>
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