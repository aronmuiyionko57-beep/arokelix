import Image from "next/image";
import { Mail, Phone, Globe } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { SITE_EMAIL, SITE_PHONE, WHATSAPP_URL } from "../lib/site";

const company = [
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/websites-web-applications", label: "Websites & Web Apps" },
  { href: "/services/custom-software", label: "Custom Software" },
  { href: "/services/e-commerce", label: "E-commerce" },
  { href: "/services/branding-creative", label: "Branding & Creative" },
  { href: "/services/digital-marketing", label: "Digital Marketing" },
];

export default function SiteFooter() {
  return (
    <footer className="footer-main">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <a href="/" className="logo" aria-label="AROKELIX home">
              <Image src="/logo.png" alt="AROKELIX" width={220} height={70} className="logo-img" />
            </a>
            <p className="footer-brand-tagline">Digital Products · Technology · Creative Solutions.</p>
          </div>

          <nav className="footer-col" aria-label="Company">
            <h4>Company</h4>
            <ul>
              {company.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Services">
            <h4>Services</h4>
            <ul>
              {serviceLinks.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><Mail size={16} aria-hidden="true" /><a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a></li>
              <li><Phone size={16} aria-hidden="true" /><a href={`tel:${SITE_PHONE}`}>+254 706 519 789</a></li>
              <li><SiWhatsapp size={16} aria-hidden="true" /><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp us</a></li>
              <li><Globe size={16} aria-hidden="true" /><span>Remote — worldwide</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} AROKELIX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}