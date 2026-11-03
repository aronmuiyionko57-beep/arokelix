"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, Globe as GlobeIcon } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const services = [
  "Website", "Software", "E-commerce", "Mobile App",
  "Branding", "Digital Marketing", "Automation", "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    service: "", budget: "", message: "",
  });
  const [status, setStatus] = useState("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("sent");
      setForm({ name: "", company: "", email: "", phone: "", service: "", budget: "", message: "" });
    } else {
      setStatus("error");
    }
  }

  const fieldStyle = {
    padding: "13px 14px",
    border: "1px solid var(--line)",
    borderRadius: "8px",
    background: "var(--surface)",
    color: "var(--text-1)",
    fontFamily: "inherit",
    fontSize: "15px",
    width: "100%",
  };

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--text-1)",
    marginBottom: "7px",
  };

  return (
    <>
      <SiteHeader />

      <section id="main-content" className="contact-hero">
        <div className="wrap contact-hero-grid">
          <div className="contact-hero-text">
            <div className="hero-kicker">Start a Project</div>
            <h1 className="contact-hero-h1">Let&apos;s build something that moves your business forward.</h1>
            <p className="contact-hero-lede">
              Whether you have a clear idea or just a spark, we&apos;re here to help
              you turn it into a digital solution that works — beautifully,
              efficiently and built for long-term growth.
            </p>
          </div>
          <div className="contact-hero-photo" style={{ position: "relative" }}>
            <Image src="/contact-photo.jpg" alt="AROKELIX workspace" fill style={{ objectFit: "cover", borderRadius: "16px" }} priority />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap contact-split">
          <div className="contact-info">
            <div className="hero-kicker">Tell us about your project</div>
            <h2 className="contact-info-h2">We&apos;d love to hear from you.</h2>
            <p className="contact-info-lede">
              Share a few details about your project and we&apos;ll get back to
              you within one business day. If you have any questions, reach
              out directly using the contact information below.
            </p>

            <div className="contact-item">
              <div className="contact-icon"><Mail size={20} /></div>
              <div>
                <b>Email Us</b>
                <div>aronmuiyionko57@gmail.com</div>
                <span>We typically respond within 1 business day.</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><Phone size={20} /></div>
              <div>
                <b>Call / WhatsApp</b>
                <div>+254 706 519 789</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><GlobeIcon size={20} /></div>
              <div>
                <b>Where We Work</b>
                <div>Remote — serving clients globally</div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            {status === "sent" ? (
              <p style={{ fontSize: "18px" }}>Thanks — your project enquiry is in. We&apos;ll be in touch soon.</p>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <label htmlFor="name" style={labelStyle}>Full name *</label>
                  <input id="name" name="name" required value={form.name} onChange={handleChange} style={fieldStyle} placeholder="Your full name" />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }}>
                  <div>
                    <label htmlFor="company" style={labelStyle}>Business / Organization</label>
                    <input id="company" name="company" value={form.company} onChange={handleChange} style={fieldStyle} placeholder="Your business or organization" />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} style={fieldStyle} placeholder="you@company.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" style={labelStyle}>Phone / WhatsApp</label>
                  <input id="phone" name="phone" value={form.phone} onChange={handleChange} style={fieldStyle} placeholder="+254 700 000 000" />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }}>
                  <div>
                    <label htmlFor="service" style={labelStyle}>What do you need? *</label>
                    <select id="service" name="service" required value={form.service} onChange={handleChange} style={fieldStyle}>
                      <option value="">Select one</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" style={labelStyle}>Estimated budget</label>
                    <input id="budget" name="budget" placeholder="e.g. $500 – $2,000" value={form.budget} onChange={handleChange} style={fieldStyle} />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>Project description *</label>
                  <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} style={fieldStyle} placeholder="Tell us about your project, goals and any specific requirements..." />
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: "15px 24px", fontSize: "16px" }} disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send Project Enquiry"}
                </button>
                {status === "error" && <p style={{ color: "crimson" }}>Something went wrong — try again.</p>}
              </form>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}