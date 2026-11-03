import { Building2, Workflow, ShoppingBag, Users, Package, BarChart3, CalendarCheck, Globe2, Cog } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Solutions | AROKELIX",
  description: "Business digitization, automation, e-commerce and internal systems — technology solutions built around real business problems.",
};

export default function Solutions() {
  const solutions = [
    { icon: Building2, label: "Digitization", name: "Business Digitization", desc: "Move core operations off paper and spreadsheets into systems your team can actually rely on." },
    { icon: Workflow, label: "Automation", name: "Business Process Automation", desc: "Automate repetitive manual work so your team spends time on what actually needs a person." },
    { icon: ShoppingBag, label: "Retail", name: "Online Selling", desc: "Sell online with a storefront built around your real inventory, pricing and fulfillment process." },
    { icon: Users, label: "CRM", name: "Customer Management", desc: "Track customers, communication and history in one place instead of scattered across tools." },
    { icon: Package, label: "Inventory", name: "Inventory Management", desc: "Real-time stock tracking across locations, with alerts before you run out or overorder." },
    { icon: BarChart3, label: "Data", name: "Data & Reporting", desc: "Turn scattered numbers into dashboards that actually answer the questions your business asks." },
    { icon: CalendarCheck, label: "Booking", name: "Online Booking", desc: "Let customers book directly, with automated reminders and a calendar your staff can trust." },
    { icon: Globe2, label: "Presence", name: "Digital Presence", desc: "A professional website and brand presence that matches the quality of the work you actually do." },
    { icon: Cog, label: "Internal", name: "Internal Business Systems", desc: "Custom internal tools built around how your team actually works, not a generic template." },
  ];

  return (
    <>
      <SiteHeader />

      <section id="main-content" className="hero">
        <div className="wrap">
          <div className="hero-kicker">Solutions</div>
          <h1 style={{ maxWidth: "650px" }}>We solve business problems, not just build software.</h1>
          <p className="lede">Technology is the tool. The business problem is what actually matters.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="card-grid">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <div className="info-card" key={s.name}>
                  <div className="info-card-icon"><Icon size={22} /></div>
                  <div className="info-card-label">{s.label}</div>
                  <div className="info-card-title">{s.name}</div>
                  <p style={{ color: "var(--text-2)", fontSize: "14px", margin: 0 }}>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <h2>Not sure which fits your business?</h2>
          <p>Tell us what you&apos;re dealing with — we&apos;ll help you figure out the right approach.</p>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-primary">Start a Project</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}