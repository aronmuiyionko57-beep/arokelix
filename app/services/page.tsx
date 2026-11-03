import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { services } from "./data";
import { ArrowRight, Send, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../lib/site";

export const metadata = {
  title: "Services | AROKELIX",
  description: "Websites, software, e-commerce, mobile apps, branding, digital marketing, automation and IT consulting from AROKELIX.",
};

const iconBtn = { display: "inline-flex", alignItems: "center", gap: "6px" } as const;

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />

      <section id="main-content" className="page-hero">
        <div className="wrap">
          <div className="hero-kicker">Services</div>
          <h1>Everything your business needs to build, sell and grow online.</h1>
          <p className="lede">
            Design, engineering and marketing under one roof, so your website,
            software and brand work together instead of being handled by
            separate vendors.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="card-grid">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.slug} href={`/services/${s.slug}`} className="info-card-link">
                  <div className="info-card">
                    <div className="info-card-icon"><Icon size={22} /></div>
                    <div className="info-card-label">{s.label}</div>
                    <div className="info-card-title">{s.title}</div>
                    <p style={{ color: "var(--text-2)", fontSize: "14px", margin: "0 0 16px" }}>{s.tagline}</p>
                    <div className="info-card-arrow"><ArrowRight size={16} /></div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <h2>Not sure which service you need?</h2>
          <p>Tell us what you&apos;re trying to achieve and we&apos;ll recommend the right starting point.</p>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-primary" style={iconBtn}>
              <Send size={16} /> Start a Project
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={iconBtn}>
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}