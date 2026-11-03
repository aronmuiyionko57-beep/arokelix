import Image from "next/image";
import {
  ShoppingBag, UtensilsCrossed, GraduationCap, HeartPulse,
  Building2, Truck, Sprout, Landmark, ArrowRight,
} from "lucide-react";

const industries = [
  { icon: ShoppingBag, image: "/industries/retail-new.jpg", name: "Retail & e-commerce", text: "Online stores, catalogues and ordering that turn visitors into customers." },
  { icon: UtensilsCrossed, image: "/industries/hospitality.jpg", name: "Hospitality", text: "Menus, bookings and a presence that fills tables and rooms." },
  { icon: GraduationCap, image: "/industries/education.jpg", name: "Education", text: "Portals, course pages and enrolment systems for schools and trainers." },
  { icon: HeartPulse, image: "/industries/health.jpg", name: "Health & wellness", text: "Clear, trustworthy sites with appointment and enquiry flows." },
  { icon: Building2, image: "/industries/real-estate.jpg", name: "Real estate", text: "Listings, property pages and lead capture for agents and developers." },
  { icon: Truck, image: "/industries/logistics.jpg", name: "Logistics & trade", text: "Quotes, tracking and internal tools that keep operations moving." },
  { icon: Sprout, image: "/industries/agriculture.jpg", name: "Agriculture", text: "Product showcases and ordering for producers selling beyond their market." },
  { icon: Landmark, image: "/industries/finance.jpg", name: "Finance & services", text: "Professional websites and systems for firms that depend on credibility." },
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
                <div className="industry-media">
                  <Image
                    src={i.image}
                    alt=""
                    fill
                    sizes="(max-width:560px) 100vw, (max-width:1000px) 50vw, 280px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="industry-body">
                  <div className="industry-icon"><Icon size={24} aria-hidden="true" /></div>
                  <h3>{i.name}</h3>
                  <p>{i.text}</p>
                  <span className="industry-link">Discuss your project <ArrowRight size={15} aria-hidden="true" /></span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}