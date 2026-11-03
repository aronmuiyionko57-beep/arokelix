import { Home, Briefcase, Send, MessageCircle } from "lucide-react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { WHATSAPP_URL } from "./lib/site";

export const metadata = {
  title: "Page not found | AROKELIX",
  robots: { index: false, follow: true },
};

const row = { display: "inline-flex", alignItems: "center", gap: "6px" } as const;

export default function NotFound() {
  return (
    <>
      <SiteHeader />

      <section id="main-content" className="page-hero">
        <div className="wrap">
          <div className="nf-code">404</div>
          <h1>This page doesn&apos;t exist.</h1>
          <p className="lede">
            The link may be old or mistyped. Try one of these instead.
          </p>
          <div className="hero-actions" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
            <a href="/" className="btn btn-primary" style={row}>
              <Home size={16} aria-hidden="true" /> Back to home
            </a>
            <a href="/services" className="btn btn-secondary" style={row}>
              <Briefcase size={16} aria-hidden="true" /> Our services
            </a>
            <a href="/contact" className="btn btn-secondary" style={row}>
              <Send size={16} aria-hidden="true" /> Contact us
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={row}>
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}