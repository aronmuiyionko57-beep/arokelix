import Image from "next/image";
import {
  Home, Search, Tag, PackageCheck, Megaphone, Smartphone,
  Hammer, MessageCircle, Palette, CircleCheck, ExternalLink,
  ArrowLeft, Send,
} from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { WHATSAPP_URL } from "../../lib/site";

export const metadata = {
  title: "OKOA Furniture — Case Study | AROKELIX",
  description: "How AROKELIX built an online furniture store with shop-by-room browsing and WhatsApp ordering for a Kenyan furniture brand.",
};

const features = [
  { icon: Home, text: "Shop-by-room browsing across seven categories: Living Room, Bedroom, Dining Room, Home Office, Outdoor, TV Area and Custom Furniture" },
  { icon: Search, text: "A catalogue of 270+ pieces with search, sorting and price-range filters" },
  { icon: Tag, text: "A filter for pieces currently on offer, with discount badges showing the original and sale price" },
  { icon: PackageCheck, text: "Availability shown on every product, either Available or Available on Order" },
  { icon: Megaphone, text: "Promotional banners the client can switch on for seasonal campaigns" },
  { icon: Smartphone, text: "Mobile-friendly pages, since most furniture shoppers browse on their phones" },
];

const row = { display: "inline-flex", alignItems: "center", gap: "8px" } as const;

export default function OkoaCaseStudy() {
  return (
    <>
      <SiteHeader />

      <section id="main-content" className="hero">
        <div className="wrap">
          <a href="/work" className="work-link" style={{ ...row, marginBottom: "20px" }}>
            <ArrowLeft size={16} aria-hidden="true" /> All projects
          </a>
          <div className="hero-kicker">Case Study — Furniture / E-commerce</div>
          <h1 style={{ maxWidth: "650px" }}>OKOA Furniture</h1>
          <p className="lede">
            An online furniture store for a Kenyan furniture brand, with a large
            catalogue, shop-by-room browsing and ordering through WhatsApp.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Image
            src="/okoa-screenshot.png"
            alt="OKOA Furniture online store screenshot"
            width={1600}
            height={900}
            style={{ width: "100%", height: "auto", borderRadius: "8px", border: "1px solid var(--line)" }}
          />
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: "720px" }}>
          <div className="process-row" style={{ gridTemplateColumns: "1fr" }}>
            <h3 style={row}><Hammer size={20} aria-hidden="true" /> What we built</h3>
            <p className="p-desc">
              AROKELIX built the complete storefront, from the room-by-room
              structure to the product pages. It includes:
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
            <h3 style={row}><MessageCircle size={20} aria-hidden="true" /> Ordering through WhatsApp</h3>
            <p className="p-desc">
              The client negotiates price and payment with each customer
              directly, so the store has no in-site checkout. Instead, every
              product has an Order via WhatsApp button that opens a
              conversation with a message already filled in, naming the piece,
              its price and a link to it. The customer starts the chat in one
              tap, and the team knows exactly what they are asking about.
            </p>
          </div>

          <div className="process-row" style={{ gridTemplateColumns: "1fr" }}>
            <h3 style={row}><Palette size={20} aria-hidden="true" /> Design approach</h3>
            <p className="p-desc">
              A clean, image-led layout that puts the furniture first, with the
              brand&apos;s orange and black running through the interface.
              Customers can start from a room, narrow by budget, and reach a
              WhatsApp conversation without creating an account or filling in a
              form.
            </p>
          </div>

          <div className="process-row" style={{ gridTemplateColumns: "1fr" }}>
            <h3 style={row}><CircleCheck size={20} aria-hidden="true" /> Result</h3>
            <p className="p-desc">
              A live online store the client uses to show its full range and
              take enquiries and orders from customers directly.
            </p>
          </div>

          <div style={{ marginTop: "32px" }}>
            <a href="https://www.okoafurniture.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={row}>
              Visit the live store <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <h2>Want a store like this?</h2>
          <p>Tell us what you sell and how your customers like to order.</p>
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