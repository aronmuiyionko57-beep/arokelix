import Image from "next/image";
import {
  LayoutGrid, ShoppingCart, Heart, GitCompare, Banknote,
  Hammer, Palette, CircleCheck, ExternalLink, ArrowLeft, Send, MessageCircle, Tag,
} from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { WHATSAPP_URL } from "../../lib/site";

export const metadata = {
  title: "Tensei Ark — Case Study | AROKELIX",
  description: "How AROKELIX built a full e-commerce storefront for a Nairobi-based electronics retailer.",
};

const facts = [
  { icon: Tag, label: "Industry", value: "Electronics retail" },
  { icon: ShoppingCart, label: "Type", value: "E-commerce store" },
  { icon: Banknote, label: "Currencies", value: "KSH and USD" },
  { icon: GitCompare, label: "Shopper tools", value: "Cart, wishlist, compare" },
];

const features = [
  { icon: LayoutGrid, text: "A live product catalog" },
  { icon: ShoppingCart, text: "Shopping cart" },
  { icon: Heart, text: "Wishlist" },
  { icon: GitCompare, text: "Product comparison" },
  { icon: Banknote, text: "Kenyan Shilling and US Dollar pricing" },
];

const row = { display: "inline-flex", alignItems: "center", gap: "8px" } as const;

export default function TenseiArkCaseStudy() {
  return (
    <>
      <SiteHeader />

      <section id="main-content" className="hero">
        <div className="wrap">
          <a href="/work" className="work-link" style={{ ...row, marginBottom: "20px", color: "#fff", borderBottomColor: "#fff" }}>
            <ArrowLeft size={16} aria-hidden="true" /> All projects
          </a>
          <div className="hero-kicker">Case Study — Retail / E-commerce</div>
          <h1 style={{ maxWidth: "650px" }}>Tensei Ark</h1>
          <p className="lede">
            A full electronics storefront built for a Nairobi-based client,
            supporting a live product catalog, cart, wishlist, product
            comparison and multi-currency pricing.
          </p>
        </div>
      </section>

      <section className="facts-wrap">
        <div className="wrap">
          <div className="facts">
            {facts.map((f) => {
              const Icon = f.icon;
              return (
                <div className="fact" key={f.label}>
                  <div className="fact-icon"><Icon size={20} aria-hidden="true" /></div>
                  <div>
                    <div className="fact-label">{f.label}</div>
                    <div className="fact-value">{f.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "56px" }}>
        <div className="wrap">
          <Image
            src="/tenseiark-screenshot.png"
            alt="Tensei Ark online store screenshot"
            width={1600}
            height={900}
            style={{ width: "100%", height: "auto", borderRadius: "16px", border: "1px solid var(--line)", boxShadow: "0 24px 60px rgba(11,18,32,0.14)" }}
          />
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: "720px" }}>
          <div className="process-row" style={{ gridTemplateColumns: "1fr" }}>
            <h3 style={row}><Hammer size={20} aria-hidden="true" /> What we built</h3>
            <p className="p-desc">
              AROKELIX built a complete e-commerce storefront for the client,
              covering the product catalog, shopping cart, wishlist and
              product comparison features, along with support for both
              Kenyan Shilling and US Dollar pricing to serve local and
              international buyers.
            </p>
            <ul className="check-list" style={{ marginTop: "18px" }}>
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <li key={f.text}><Icon size={18} aria-hidden="true" /><span>{f.text}</span></li>
                );
              })}
            </ul>
          </div>
          <div className="process-row" style={{ gridTemplateColumns: "1fr" }}>
            <h3 style={row}><Palette size={20} aria-hidden="true" /> Design approach</h3>
            <p className="p-desc">
              A storefront built around clarity and ease of browsing — product
              discovery, comparison and checkout designed to reduce friction
              for customers shopping for electronics online.
            </p>
          </div>
          <div className="process-row" style={{ gridTemplateColumns: "1fr" }}>
            <h3 style={row}><CircleCheck size={20} aria-hidden="true" /> Result</h3>
            <p className="p-desc">
              A live online store the client uses to sell electronics directly
              to customers in Kenya and beyond.
            </p>
          </div>
          <div style={{ marginTop: "32px" }}>
            <a href="https://tenseiark.store" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={row}>
              Visit the live store <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <h2>Want a store like this?</h2>
          <p>Tell us what you sell and who you sell to.</p>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-primary" style={row}>
              <Send size={16} aria-hidden="true" /> Start a Project
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={row}>
              <MessageCircle size={16} aria-hidden="true" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}