import { Mail, Phone, Globe } from "lucide-react";
import { SITE_EMAIL, SITE_PHONE } from "../lib/site";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap topbar-inner">
        <div className="topbar-left">
          <Globe size={14} aria-hidden="true" />
          <span>Technology &amp; Creative Company</span>
          <span className="topbar-sep" aria-hidden="true" />
          <span className="topbar-muted">Serving clients worldwide</span>
        </div>
        <div className="topbar-right">
          <a href={`mailto:${SITE_EMAIL}`}>
            <Mail size={14} aria-hidden="true" />
            <span className="topbar-email">{SITE_EMAIL}</span>
          </a>
          <a href={`tel:${SITE_PHONE}`}>
            <Phone size={14} aria-hidden="true" />
            <span>+254 706 519 789</span>
          </a>
        </div>
      </div>
    </div>
  );
}