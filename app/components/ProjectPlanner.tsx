"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, RotateCcw } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { SITE_PHONE } from "../lib/site";

const needs = ["Website", "E-commerce store", "Custom software", "Mobile app", "Branding", "Digital marketing", "Automation", "Not sure yet"];
const timelines = ["As soon as possible", "Within 1 month", "1 to 3 months", "Just exploring"];
const budgets = ["Under $500", "$500 – $2,000", "$2,000 – $5,000", "$5,000+", "Not sure yet"];

export default function ProjectPlanner() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");

  const total = 3;
  const done = step === total;

  function toggleNeed(n: string) {
    setPicked((p) => (p.includes(n) ? p.filter((x) => x !== n) : [...p, n]));
  }

  const canNext =
    (step === 0 && picked.length > 0) ||
    (step === 1 && timeline !== "") ||
    (step === 2 && budget !== "");

  const message =
    `Hello AROKELIX, I'd like to start a project.\n\n` +
    `I need: ${picked.join(", ")}\n` +
    `Timeline: ${timeline}\n` +
    `Budget: ${budget}\n\nPlease get in touch.`;
  const waNumber = SITE_PHONE.replace(/\D/g, "");
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

  function reset() {
    setStep(0);
    setPicked([]);
    setTimeline("");
    setBudget("");
  }

  const titles = ["What do you need?", "When do you need it?", "What is your budget range?"];

  return (
    <section id="planner">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="hero-kicker">Project planner</div>
            <h2>Plan your project in 30 seconds.</h2>
          </div>
          <p>Answer three quick questions and send us a ready-made brief. We reply within one business day.</p>
        </div>

        <div className="planner">
          {!done && (
            <>
              <div className="planner-progress" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                  <span key={i} className={i <= step ? "on" : ""} />
                ))}
              </div>
              <div className="planner-step">Step {step + 1} of {total}</div>
              <h3 className="planner-title">{titles[step]}</h3>

              <div className="planner-options" role="group" aria-label={titles[step]}>
                {step === 0 &&
                  needs.map((n) => (
                    <button
                      key={n}
                      type="button"
                      className={`planner-chip ${picked.includes(n) ? "active" : ""}`}
                      aria-pressed={picked.includes(n)}
                      onClick={() => toggleNeed(n)}
                    >
                      {picked.includes(n) && <Check size={16} aria-hidden="true" />} {n}
                    </button>
                  ))}
                {step === 1 &&
                  timelines.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`planner-chip ${timeline === t ? "active" : ""}`}
                      aria-pressed={timeline === t}
                      onClick={() => setTimeline(t)}
                    >
                      {timeline === t && <Check size={16} aria-hidden="true" />} {t}
                    </button>
                  ))}
                {step === 2 &&
                  budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      className={`planner-chip ${budget === b ? "active" : ""}`}
                      aria-pressed={budget === b}
                      onClick={() => setBudget(b)}
                    >
                      {budget === b && <Check size={16} aria-hidden="true" />} {b}
                    </button>
                  ))}
              </div>

              <div className="planner-nav">
                {step > 0 ? (
                  <button type="button" className="btn btn-secondary" onClick={() => setStep(step - 1)}>
                    <ArrowLeft size={16} /> Back
                  </button>
                ) : (
                  <span />
                )}
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!canNext}
                  onClick={() => setStep(step + 1)}
                >
                  {step === total - 1 ? "See my brief" : "Next"} <ArrowRight size={16} />
                </button>
              </div>
            </>
          )}

          {done && (
            <div>
              <div className="planner-step">Your brief</div>
              <h3 className="planner-title">Ready to send.</h3>
              <ul className="planner-summary">
                <li><b>Need</b><span>{picked.join(", ")}</span></li>
                <li><b>Timeline</b><span>{timeline}</span></li>
                <li><b>Budget</b><span>{budget}</span></li>
              </ul>
              <div className="planner-nav">
                <button type="button" className="btn btn-secondary" onClick={reset}>
                  <RotateCcw size={16} /> Start over
                </button>
                <div className="planner-final">
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                    <SiWhatsapp size={18} /> Send on WhatsApp
                  </a>
                  <a href="/contact" className="work-link">Use the contact form instead</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}