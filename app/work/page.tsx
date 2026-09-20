"use client";

import { useState } from "react";

const projects = [
  { name: "Inventory & ordering system", category: "Software", industry: "Retail", desc: "Replaced three spreadsheets with one live system for stock, ordering and reporting.", gradient: "linear-gradient(135deg, var(--signal), var(--ink))" },
  { name: "Client booking & scheduling", category: "Web Apps", industry: "Services", desc: "Online booking, automated reminders and a staff calendar built to replace phone-only scheduling.", gradient: "linear-gradient(135deg, var(--gold), var(--signal-dim))" },
  { name: "Corporate site & brand refresh", category: "Websites", industry: "Logistics", desc: "A new visual identity and website built to support a growing fleet and sales team.", gradient: "linear-gradient(135deg, var(--ink), var(--gold))" },
  { name: "Secure client portal", category: "Web Apps", industry: "Fintech", desc: "A dashboard where clients track statements, submit documents and message their account manager.", gradient: "linear-gradient(135deg, var(--signal-dim), var(--gold))" },
];

const categories = ["All", "Websites", "Web Apps", "Mobile", "Software", "E-commerce", "UI/UX"];

export default function Work() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <header>
        <div className="wrap nav">
          <div className="logo"><span className="mark"></span>AROKELIX</div>
          <nav className="navlinks">
            <a href="/">Home</a>
            <a href="/about">About AROKELIX</a>
          </nav>
          <a href="/contact" className="navcta">Start a Project</a>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div className="hero-kicker">Our Work</div>
          <h1 style={{ maxWidth: "600px" }}>Projects we&apos;ve delivered.</h1>
          <p className="lede">A sample of the systems and products built for real businesses.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="filter-row">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="wrap" style={{ padding: 0, marginTop: "40px" }}>
          <div className="work-grid">
            {visible.map((p) => (
              <div className="work-card" key={p.name}>
                <div className="work-visual" style={{ background: p.gradient }}></div>
                <div className="work-meta">{p.industry.toUpperCase()} — {p.category.toUpperCase()}</div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <a href="#" className="work-link">View project</a>
              </div>
            ))}
          </div>
          {visible.length === 0 && (
            <p style={{ color: "var(--text-2)", padding: "40px 28px" }}>No projects in this category yet.</p>
          )}
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