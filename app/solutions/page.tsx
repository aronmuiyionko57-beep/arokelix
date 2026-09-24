import { Building2, Workflow, ShoppingBag, Users, Package, BarChart3, CalendarCheck, Globe2, Cog } from "lucide-react";

export const metadata = {
  title: "Solutions | AROKELIX",
  description: "Business digitization, automation, e-commerce and internal systems — technology solutions built around real business problems.",
};

export default function Solutions() {
  const solutions = [
    { icon: Building2, label: "Digitization", name: "Business Digitization", desc: "Move core operations off paper and spreadsheets into systems your team can actually rely on." },
    { icon: Workflow, label: "Automation", name: "Business Process Automation", desc: "Automate repetitive manual work so your team spends time on what actually needs a person." },
    { icon: ShoppingBag, label: "Retail", name: "Online Selling", desc: "Sell online with a storefront built around your real inventory, pricing and fulfillment process." },
    { icon: Users, label: "CRM", name: "Customer Management", desc: "Track customers, communication and history in one place instead of scattered across tools." },
    { icon: Package, label: "Inventory", name: "Inventory Management", desc: "Real-time stock tracking across locations, with alerts before you run out or overorder." },
    { icon: BarChart3, label: "Data", name: "Data & Reporting", desc: "Turn scattered numbers into dashboards that actually answer the questions your business asks." },
    { icon: CalendarCheck, label: "Booking", name: "Online Booking", desc: "Let customers book directly, with automated reminders and a calendar your staff can trust." },
    { icon: Globe2, label: "Presence", name: "Digital Presence", desc: "A professional website and brand presence that matches the quality of the work you actually do." },
    { icon: Cog, label: "Internal", name: "Internal Business Systems", desc: "Custom internal tools built around how your team actually works, not a generic template." },
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
          <div className="card-grid">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <div className="info-card" key={s.name}>
                  <div className="info-card-icon"><Icon size={22} /></div>
                  <div className="info-card-label">{s.label}</div>
                  <div className="info-card-title">{s.name}</div>
                  <p style={{ color: "var(--text-2)", fontSize: "14px", margin: "0 0 16px" }}>{s.desc}</p>
                  <div className="info-card-arrow">→</div>
                </div>
              );
            })}
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