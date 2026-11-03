"use client";

import { useState } from "react";
import Image from "next/image";
import {
  LayoutGrid, Globe, AppWindow, Smartphone, Code2, ShoppingCart, Palette,
  ArrowRight, FolderOpen, Send, MessageCircle,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { WHATSAPP_URL } from "../lib/site";

const projects = [
  {
    name: "OKOA Furniture",
    category: "E-commerce",
    industry: "Furniture",
    desc: "An online furniture store with a 270+ piece catalogue, shop-by-room browsing, offer filters and ordering through WhatsApp.",
    image: "/okoa-screenshot.png",
    caseStudy: "/work/okoa",
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

const categories = [
  { name: "All", icon: LayoutGrid },
  { name: "Websites", icon: Globe },
  { name: "Web Apps", icon: AppWindow },
  { name: "Mobile", icon: Smartphone },
  { name: "Software", icon: Code2 },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "UI/UX", icon: Palette },
];

const iconRow = { display: "inline-flex", alignItems: "center", gap: "6px" } as const;

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
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.name}
                  className={`filter-btn ${filter === cat.name ? "active" : ""}`}
                  onClick={() => setFilter(cat.name)}
                  aria-pressed={filter === cat.name}
                  style={iconRow}
                >
                  <Icon size={15} aria-hidden="true" /> {cat.name}
                </button>
              );
            })}
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
                <a href={p.caseStudy} className="work-link" style={iconRow}>
                  View case study <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
          {visible.length === 0 && (
            <p style={{ color: "var(--text-2)", padding: "40px 28px", ...iconRow }}>
              <FolderOpen size={20} aria-hidden="true" /> No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <h2>Want your project here next?</h2>
          <p>Tell us what you&apos;re building and we&apos;ll reply within one business day.</p>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-primary" style={iconRow}>
              <Send size={16} /> Start a Project
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={iconRow}>
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}