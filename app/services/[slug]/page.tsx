import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { services, getService } from "../data";

const seoTitles: Record<string, string> = {
  "websites-web-applications": "Website & Web App Development",
  "custom-software": "Custom Software Development",
  "e-commerce": "E-commerce Website Development",
  "mobile-applications": "Mobile App Development",
  "branding-creative": "Branding & Logo Design",
  "digital-marketing": "Digital Marketing & SEO",
  "automation-business-systems": "Business Automation & Systems",
  "it-digital-consulting": "IT & Digital Consulting",
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${seoTitles[slug] ?? service.title} | AROKELIX`,
    description: service.tagline,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SiteHeader />

      <section id="main-content" className="page-hero">
        <div className="wrap">
          <div className="hero-kicker">Services — {service.label}</div>
          <h1>{service.title}</h1>
          <p className="lede">{service.tagline}</p>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-primary">Start a Project</a>
            <a href="/work" className="btn btn-secondary">See Our Work</a>
          </div>
        </div>
      </section>

      <section className="banner-wrap">
        <div className="wrap">
          <div className="photo-banner">
            <Image
              src={`/services/${service.slug}.jpg`}
              alt=""
              fill
              priority
              sizes="(max-width:1180px) 100vw, 1124px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="detail-grid">
            <div>
              <h2>Problems we solve</h2>
              <ul className="check-list">
                {service.problems.map((p) => (
                  <li key={p}><ArrowRight size={18} /><span>{p}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h2>What you get</h2>
              <ul className="check-list">
                {service.deliverables.map((d) => (
                  <li key={d}><Check size={18} /><span>{d}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bestfor"><b>Best for:</b> {service.bestFor}</div>
        </div>
      </section>

      <section className="bg-alt">
        <div className="wrap">
          <div className="section-head">
            <h2>Other services</h2>
            <p><a href="/services" className="work-link">View all services →</a></p>
          </div>
          <div className="card-grid">
            {others.map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.slug} href={`/services/${s.slug}`} className="info-card-link">
                  <div className="info-card">
                    <div className="info-card-icon"><Icon size={22} /></div>
                    <div className="info-card-label">{s.label}</div>
                    <div className="info-card-title">{s.title}</div>
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
          <h2>Ready to talk about {service.title.toLowerCase()}?</h2>
          <p>Share a few details and we&apos;ll reply within one business day.</p>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-primary">Start a Project</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}