export default function Solutions() {
  const solutions = [
    { name: "Business Digitization", desc: "Move core operations off paper and spreadsheets into systems your team can actually rely on." },
    { name: "Business Process Automation", desc: "Automate repetitive manual work so your team spends time on what actually needs a person." },
    { name: "Online Selling", desc: "Sell online with a storefront built around your real inventory, pricing and fulfillment process." },
    { name: "Customer Management", desc: "Track customers, communication and history in one place instead of scattered across tools." },
    { name: "Inventory Management", desc: "Real-time stock tracking across locations, with alerts before you run out or overorder." },
    { name: "Data & Reporting", desc: "Turn scattered numbers into dashboards that actually answer the questions your business asks." },
    { name: "Online Booking", desc: "Let customers book directly, with automated reminders and a calendar your staff can trust." },
    { name: "Digital Presence", desc: "A professional website and brand presence that matches the quality of the work you actually do." },
    { name: "Internal Business Systems", desc: "Custom internal tools built around how your team actually works, not a generic template." },
  ];

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
          <div className="hero-kicker">Solutions</div>
          <h1 style={{ maxWidth: "650px" }}>We solve business problems, not just build software.</h1>
          <p className="lede">Technology is the tool. The business problem is what actually matters.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="services-list">
            {solutions.map((s) => (
              <div className="service-row" key={s.name} style={{ gridTemplateColumns: "280px 1fr" }}>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <h2>Not sure which fits your business?</h2>
          <p>Tell us what you&apos;re dealing with — we&apos;ll help you figure out the right approach.</p>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-primary">Start a Project</a>
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