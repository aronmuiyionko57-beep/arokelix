import {
  ShoppingBag, UtensilsCrossed, GraduationCap, HeartPulse,
  Building2, Truck, Sprout, Landmark, ArrowRight,
} from "lucide-react";

const industries = [
  { icon: ShoppingBag, name: "Retail & e-commerce", text: "Online stores, catalogues and ordering that turn visitors into customers." },
  { icon: UtensilsCrossed, name: "Hospitality", text: "Menus, bookings and a presence that fills tables and rooms." },
  { icon: GraduationCap, name: "Education", text: "Portals, course pages and enrolment systems for schools and trainers." },
  { icon: HeartPulse, name: "Health & wellness", text: "Clear, trustworthy sites with appointment and enquiry flows." },
  { icon: Building2, name: "Real estate", text: "Listings, property pages and lead capture for agents and developers." },
  { icon: Truck, name: "Logistics & trade", text: "Quotes, tracking and internal tools that keep operations moving." },
  { icon: Sprout, name: "Agriculture", text: "Product showcases and ordering for producers selling beyond their market." },
  { icon: Landmark, name: "Finance & services", text: "Professional websites and systems for firms that depend on credibility." },
];

export default function Industries() {
  return (
    <section id="industries">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="hero-kicker">Industries</div>
            <h2>Built for businesses like yours.</h2>
          </div>
          <p>Whatever your sector, we start from how your business earns and design the system around that.</p>
        </div>

        <div className="industry-grid">
          {industries.map((i) => {
            const Icon = i.icon;
            return (
              <a href="/contact" key={i.name} className="industry-card">
                <div className="industry-icon"><Icon size={24} aria-hidden="true" /></div>
                <h3>{i.name}</h3>
                <p>{i.text}</p>
                <span className="industry-link">Discuss your project <ArrowRight size={15} aria-hidden="true" /></span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}