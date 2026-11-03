import { Clock, FileCheck2, UserCheck, KeyRound } from "lucide-react";

const commitments = [
  {
    icon: Clock,
    label: "Response",
    title: "A reply within one business day",
    text: "Message us on WhatsApp or the contact form and you get a real answer, not an automated one.",
  },
  {
    icon: FileCheck2,
    label: "Clarity",
    title: "A fixed quote before we start",
    text: "You know the scope and the cost up front, so there are no surprises halfway through.",
  },
  {
    icon: UserCheck,
    label: "Access",
    title: "Direct access to the builder",
    text: "You talk to the person doing the work, not an account manager passing messages along.",
  },
  {
    icon: KeyRound,
    label: "Ownership",
    title: "Your project is yours",
    text: "Your site, content and domain belong to you, and we agree the handover in writing.",
  },
];

export default function Commitments() {
  return (
    <section id="commitments">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="hero-kicker">Our commitments</div>
            <h2>What you can count on when you work with us.</h2>
          </div>
          <p>Four promises we make to every client, whatever the size of the project.</p>
        </div>
        <div className="card-grid" style={{ gridTemplateColumns: undefined }}>
          {commitments.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="info-card">
                <div className="info-card-icon"><Icon size={22} aria-hidden="true" /></div>
                <div className="info-card-label">{c.label}</div>
                <div className="info-card-title">{c.title}</div>
                <p style={{ color: "var(--text-2)", fontSize: "14px", margin: 0 }}>{c.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}