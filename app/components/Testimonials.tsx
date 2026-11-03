import { Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

// Add real, permitted quotes here. Leave empty to hide the section.
// Example shape:
// { quote: "…", name: "Full Name", role: "Owner", company: "OKOA Furniture" },
const testimonials: Testimonial[] = [];

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="bg-alt">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="hero-kicker">Client feedback</div>
            <h2>What our clients say.</h2>
          </div>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="testimonial">
              <Quote size={28} className="testimonial-mark" aria-hidden="true" />
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <b>{t.name}</b>
                <span>{t.role}, {t.company}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}