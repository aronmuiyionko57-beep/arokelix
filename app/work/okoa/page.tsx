import Image from "next/image";
import { Check } from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata = {
  title: "OKOA Furniture — Case Study | AROKELIX",
  description: "How AROKELIX built an online furniture store with shop-by-room browsing and WhatsApp ordering for a Kenyan furniture brand.",
};

const features = [
  "Shop-by-room browsing across seven categories: Living Room, Bedroom, Dining Room, Home Office, Outdoor, TV Area and Custom Furniture",
  "A catalogue of 270+ pieces with search, sorting and price-range filters",
  "A filter for pieces currently on offer, with discount badges showing the original and sale price",
  "Availability shown on every product, either Available or Available on Order",
  "Promotional banners the client can switch on for seasonal campaigns",
  "Mobile-friendly pages, since most furniture shoppers browse on their phones",
];

export default function OkoaCaseStudy() {
  return (
    <>
      <SiteHeader />

      <section id="main-content" className="hero">
        <div className="wrap">
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
            <h3>What we built</h3>
            <p className="p-desc">
              AROKELIX built the complete storefront, from the room-by-room
              structure to the product pages. It includes:
            </p>
            <ul className="check-list" style={{ marginTop: "18px" }}>
              {features.map((f) => (
                <li key={f}><Check size={18} /><span>{f}</span></li>
              ))}
            </ul>
          </div>

          <div className="process-row" style={{ gridTemplateColumns: "1fr" }}>
            <h3>Ordering through WhatsApp</h3>
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
            <h3>Design approach</h3>
            <p className="p-desc">
              A clean, image-led layout that puts the furniture first, with the
              brand&apos;s orange and black running through the interface.
              Customers can start from a room, narrow by budget, and reach a
              WhatsApp conversation without creating an account or filling in a
              form.
            </p>
          </div>

          <div className="process-row" style={{ gridTemplateColumns: "1fr" }}>
            <h3>Result</h3>
            <p className="p-desc">
              A live online store the client uses to show its full range and
              take enquiries and orders from customers directly.
            </p>
          </div>

          <div style={{ marginTop: "32px" }}>
            <a href="https://www.okoafurniture.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit the live store →
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}