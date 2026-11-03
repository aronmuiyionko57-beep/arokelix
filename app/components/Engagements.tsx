import { Globe, Layers, LifeBuoy, Check, ArrowRight } from "lucide-react";

const plans = [
  {
    icon: Globe,
    name: "Launch",
    tag: "For new and small businesses",
    summary: "A professional website that builds trust and brings in enquiries.",
    points: [
      "Business website or landing page",
      "Mobile-first, fast and secure",
      "Basic SEO and WhatsApp contact built in",
      "Domain, hosting and launch handled",
    ],
    featured: false,
  },
  {
    icon: Layers,
    name: "Build",
    tag: "Best for growing businesses",
    summary: "E-commerce, web apps and custom software built around how you operate.",
    points: [
      "Online stores and ordering systems",
      "Custom dashboards and business tools",
      "Payments, integrations and automation",
      "Training and documentation at handover",
    ],
    featured: true,
  },
  {
    icon: LifeBuoy,
    name: "Partner",
    tag: "For ongoing growth",
    summary: "A long-term team for updates, improvements and new features.",
    points: [
      "Monthly maintenance and security updates",
      "Priority support by WhatsApp",
      "New pages, features and campaigns",
      "Regular progress reviews",
    ],
    featured: false,
  },
];

export default function Engagements() {
  return (
    <section id="engagements" className="bg-alt">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="hero-kicker">Ways to work with us</div>
            <h2>Choose how you want to work with us.</h2>
          </div>
          <p>Every project gets a fixed quote after a short discovery call, so you know the cost before we start.</p>
        </div>

        <div className="plans">
          {plans.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.name} className={`plan ${p.featured ? "plan-featured" : ""}`}>
                <div className="plan-icon"><Icon size={24} aria-hidden="true" /></div>
                <div className="plan-tag">{p.tag}</div>
                <h3>{p.name}</h3>
                <p className="plan-summary">{p.summary}</p>
                <ul className="plan-points">
                  {p.points.map((pt) => (
                    <li key={pt}><Check size={18} aria-hidden="true" /><span>{pt}</span></li>
                  ))}
                </ul>
                <a href="/contact" className={`btn ${p.featured ? "btn-gold" : "btn-primary"}`}>
                  Get a quote <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}