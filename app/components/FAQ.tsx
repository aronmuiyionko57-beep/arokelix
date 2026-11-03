import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What does AROKELIX build?",
    a: "We design and build websites, e-commerce stores, software, mobile apps and automation for businesses. We also help with branding and digital marketing so the product gets seen.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on scope, so we don't quote a one-size-fits-all price. Tell us what you need and your budget range through the contact form or WhatsApp, and we'll send a clear quote after a short discovery conversation.",
  },
  {
    q: "How long does a project take?",
    a: "A simple website takes much less time than a store or custom software. After we understand your goals, we give you a timeline with milestones before any work starts.",
  },
  {
    q: "Do you work with clients outside Kenya?",
    a: "Yes. We work remotely with clients worldwide, using WhatsApp, email and video calls.",
  },
  {
    q: "Will I own my website?",
    a: "Yes. Your site, content and domain are yours. We agree on ownership and handover in writing before the project begins.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. We can keep maintaining, securing and improving your site after launch. We'll agree what that looks like at the start so there are no surprises.",
  },
  {
    q: "How do we get started?",
    a: "Send a message on WhatsApp or fill in the contact form. We reply within one business day to book a short call.",
  },
];

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="hero-kicker">FAQ</div>
            <h2>Questions clients ask before they start.</h2>
          </div>
          <p>Straight answers, so you know what working with us looks like.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>
                <span>{f.q}</span>
                <Plus size={20} className="faq-plus" aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}