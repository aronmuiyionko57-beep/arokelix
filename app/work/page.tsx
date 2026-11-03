"use client";

import { useState } from "react";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const projects = [
  {
    name: "GMJR Critical Minerals Mozambique",
    category: "Websites",
    industry: "Mining",
    desc: "A corporate website for a Mozambican critical-minerals exploration and development company, presenting their mission, mineral portfolio and partnership approach.",
    image: "/gmjr-screenshot.png",
    caseStudy: "/work/gmjr",
  },
  {
    name: "Tensei Ark",
    category: "E-commerce",
    industry: "Retail",
    desc: "A full electronics storefront with a live product catalog, cart, wishlist, product comparison and multi-currency support (KSH/USD).",
    image: "/tenseiark-screenshot.png",
    caseStudy: "/work/tenseiark",
  },
];

const categories = ["All", "Websites", "Web Apps", "Mobile", "Software", "E-commerce", "UI/UX"];

export default function Work() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <SiteHeader />

      <section id="main-content" className="hero">
        <div className="wrap">
          <div className="hero-kicker">Our Work</div>
          <h1 style={{ maxWidth: "600px" }}>Projects we&apos;ve delivered.</h1>
          <p className="lede">Real work for real businesses.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="filter-row" role="group" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
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
                <div className="work-visual" aria-hidden="true">
                  <Image src={p.image} alt="" fill style={{ objectFit: "cover", objectPosition: "top" }} />
                </div>
                <div className="work-meta">{p.industry.toUpperCase()} — {p.category.toUpperCase()}</div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <a href={p.caseStudy} className="work-link">View case study →</a>
              </div>
            ))}
          </div>
          {visible.length === 0 && (
            <p style={{ color: "var(--text-2)", padding: "40px 28px" }}>No projects in this category yet.</p>
          )}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}