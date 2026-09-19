"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="wrap nav">
          <div className="logo">
            <span className="mark"></span>AROKELIX
          </div>
          <nav className="navlinks">
            <a href="/about">About AROKELIX</a>
            <a href="#services">Services</a>
            <a href="#work">Our Work</a>
            <a href="#process">Process</a>
            <a href="#technology">Technology</a>
            <a href="#ceo">About the CEO</a>
          </nav>
          <a href="/contact" className="navcta">Start a Project</a>
          <button
            className="navmobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            <a href="/about" onClick={() => setMenuOpen(false)}>About AROKELIX</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Our Work</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
            <a href="#technology" onClick={() => setMenuOpen(false)}>Technology</a>
            <a href="#ceo" onClick={() => setMenuOpen(false)}>About the CEO</a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>Start a Project</a>
          </div>
        )}
      </header>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="hero-kicker">AROKELIX — Digital Products, Technology, Creative Solutions</div>
            <h1>Digital products, built like systems.</h1>
            <p className="lede">
              AROKELIX designs and engineers software, websites and digital
              systems for businesses that need more than a template — and
              more than a freelancer.
            </p>
            <div className="hero-actions">
              <a href="/contact" className="btn btn-primary">Start a Project</a>
              <a href="#work" className="btn btn-secondary">Explore Our Work</a>
            </div>
          </div>
          <div className="hero-schema">
            <div className="head"><span className="dot"></span>current build queue</div>
            <div className="row"><span>Client portal — Fintech</span><b>Development</b></div>
            <div className="row"><span>Inventory system — Retail</span><b>Testing</b></div>
            <div className="row"><span>Booking platform — Services</span><b>Design</b></div>
            <div className="row"><span>Brand + site — Logistics</span><b>Planning</b></div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <div className="section-head">
            <h2>What we build</h2>
            <p>Software and creative work, delivered as one connected engagement rather than separate vendors.</p>
          </div>
          <div className="services-list">
            <div className="service-row">
              <h3>Websites & Web Apps</h3>
              <p>Marketing sites, dashboards and web applications built on modern, maintainable stacks.</p>
              <div className="service-tags"><span className="tag">React</span><span className="tag">Next.js</span><span className="tag">UI/UX</span></div>
            </div>
            <div className="service-row">
              <h3>Custom Software</h3>
              <p>Internal tools, business systems and automation that replace spreadsheets and manual process.</p>
              <div className="service-tags"><span className="tag">Node.js</span><span className="tag">APIs</span><span className="tag">Automation</span></div>
            </div>
            <div className="service-row">
              <h3>Mobile Apps</h3>
              <p>Cross-platform apps for customers or field teams, connected to your website and backend.</p>
              <div className="service-tags"><span className="tag">React Native</span><span className="tag">iOS</span><span className="tag">Android</span></div>
            </div>
            <div className="service-row">
              <h3>E-commerce</h3>
              <p>Storefronts and checkout systems built for real inventory, payments and fulfillment.</p>
              <div className="service-tags"><span className="tag">Stripe</span><span className="tag">Inventory</span><span className="tag">Storefront</span></div>
            </div>
            <div className="service-row">
              <h3>Branding & Creative</h3>
              <p>Visual identity, digital marketing assets and graphic design that hold up across a real product.</p>
              <div className="service-tags"><span className="tag">Brand</span><span className="tag">Design</span><span className="tag">Marketing</span></div>
            </div>
            <div className="service-row">
              <h3>IT Consulting & Support</h3>
              <p>Architecture guidance, system integration and ongoing maintenance after launch.</p>
              <div className="service-tags"><span className="tag">Cloud</span><span className="tag">Integration</span><span className="tag">Support</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <div className="section-head">
            <h2>Selected work</h2>
            <p>A sample of the systems and products we&apos;ve delivered for real businesses.</p>
          </div>
        </div>
        <div className="wrap" style={{ padding: 0 }}>
          <div className="work-grid">
            <div className="work-card">
              <div className="work-visual" style={{ background: "linear-gradient(135deg, var(--signal), var(--ink))" }}></div>
              <div className="work-meta">RETAIL — WEB APP</div>
              <h3>Inventory & ordering system</h3>
              <p>Replaced three spreadsheets with one live system for stock, ordering and reporting.</p>
              <a href="#" className="work-link">View project</a>
            </div>
            <div className="work-card">
              <div className="work-visual" style={{ background: "linear-gradient(135deg, var(--gold), var(--signal-dim))" }}></div>
              <div className="work-meta">SERVICES — BOOKING PLATFORM</div>
              <h3>Client booking & scheduling</h3>
              <p>Online booking, automated reminders and a staff calendar built to replace phone-only scheduling.</p>
              <a href="#" className="work-link">View project</a>
            </div>
            <div className="work-card">
              <div className="work-visual" style={{ background: "linear-gradient(135deg, var(--ink), var(--gold))" }}></div>
              <div className="work-meta">LOGISTICS — BRAND + WEBSITE</div>
              <h3>Corporate site & brand refresh</h3>
              <p>A new visual identity and website built to support a growing fleet and sales team.</p>
              <a href="#" className="work-link">View project</a>
            </div>
            <div className="work-card">
              <div className="work-visual" style={{ background: "linear-gradient(135deg, var(--signal-dim), var(--gold))" }}></div>
              <div className="work-meta">FINTECH — CLIENT PORTAL</div>
              <h3>Secure client portal</h3>
              <p>A dashboard where clients track statements, submit documents and message their account manager.</p>
              <a href="#" className="work-link">View project</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>Why AROKELIX</h2>
            <p>Not just execution — a partner who understands the business problem behind the build request.</p>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="num">Quality</div>
              <h3>Built to last, not to demo</h3>
              <p>Clean architecture and real testing, so what ships doesn&apos;t fall apart six months in.</p>
            </div>
            <div className="why-item">
              <div className="num">Approach</div>
              <h3>Problems first, code second</h3>
              <p>We start from what the business actually needs, and choose technology to fit.</p>
            </div>
            <div className="why-item">
              <div className="num">Outcome</div>
              <h3>Measured by results</h3>
              <p>Every engagement is judged by what it changes for your business.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="process">
        <div className="wrap">
          <div className="section-head">
            <h2>Our process</h2>
            <p>The same seven steps for every engagement, scaled to the size of the project.</p>
          </div>
          <div>
            <div className="process-row"><div className="p-num">01</div><h3>Discover</h3><p className="p-desc">Understand your objectives, constraints and requirements.</p></div>
            <div className="process-row"><div className="p-num">02</div><h3>Plan</h3><p className="p-desc">Define the solution, architecture and a realistic development plan.</p></div>
            <div className="process-row"><div className="p-num">03</div><h3>Design</h3><p className="p-desc">Design the experience and interface around how users actually work.</p></div>
            <div className="process-row"><div className="p-num">04</div><h3>Build</h3><p className="p-desc">Develop the solution in a modular, maintainable codebase.</p></div>
            <div className="process-row"><div className="p-num">05</div><h3>Test</h3><p className="p-desc">Verify functionality, performance, security and responsiveness.</p></div>
            <div className="process-row"><div className="p-num">06</div><h3>Deploy</h3><p className="p-desc">Launch to production with proper domain, hosting and monitoring.</p></div>
            <div className="process-row"><div className="p-num">07</div><h3>Support</h3><p className="p-desc">Ongoing maintenance and improvements once the project is live.</p></div>
          </div>
        </div>
      </section>

      <section id="technology">
        <div className="wrap">
          <div className="section-head">
            <h2>Technology</h2>
            <p>The stack we actually use — chosen for security, performance and maintainability.</p>
          </div>
          <div className="tech-groups">
            <div className="tech-group">
              <h4>FRONTEND</h4>
              <ul><li>React</li><li>Next.js</li><li>JavaScript</li><li>HTML / CSS</li></ul>
            </div>
            <div className="tech-group">
              <h4>BACKEND</h4>
              <ul><li>Node.js</li><li>Python</li><li>REST APIs</li></ul>
            </div>
            <div className="tech-group">
              <h4>DATABASES</h4>
              <ul><li>PostgreSQL</li><li>MySQL</li><li>MongoDB</li></ul>
            </div>
            <div className="tech-group">
              <h4>TOOLS</h4>
              <ul><li>Git & GitHub</li><li>Docker</li><li>VS Code</li></ul>
            </div>
          </div>
        </div>
      </section>

      <section id="ceo">
        <div className="wrap">
          <div className="section-head">
            <h2>Leadership</h2>
            <p></p>
          </div>
          <div className="ceo">
            <div className="ceo-photo"></div>
            <div>
              <h3>Aron Muiyionko</h3>
              <div className="role">CEO & Founder, AROKELIX</div>
              <p>Aron founded AROKELIX to give businesses access to the kind of engineering and design usually reserved for companies with in-house product teams.</p>
              <p>His approach is direct: understand the business problem completely before writing a line of code, and treat every project as something AROKELIX will stand behind long after launch.</p>
              <p>Under his leadership, AROKELIX is built to grow — from a founding team into a company with the systems and people to serve more businesses.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="cta">
        <div className="wrap">
          <h2>Have a project in mind?<br />Let&apos;s build it.</h2>
          <p>Tell us what you&apos;re trying to solve — we&apos;ll follow up with next steps within one business day.</p>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-primary">Start a Project</a>
            <a href="mailto:aronmuiyionko57@gmail.com" className="btn btn-secondary">Email us directly</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot-row">
          <div>© {new Date().getFullYear()} AROKELIX. Digital Products. Technology. Creative Solutions.</div>
          <div className="foot-links">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}