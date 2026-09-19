"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("sent");
      setForm({ name: "", email: "", company: "", message: "" });
    } else {
      setStatus("error");
    }
  }

  return (
    <>
      <header>
        <div className="wrap nav">
          <div className="logo"><span className="mark"></span>AROKELIX</div>
          <nav className="navlinks">
            <a href="/">Home</a>
            <a href="/about">About AROKELIX</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div className="hero-kicker">Start a Project</div>
          <h1 style={{ maxWidth: "600px" }}>Tell us what you&apos;re building.</h1>
          <p className="lede">We&apos;ll follow up within one business day.</p>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: "560px" }}>
          {status === "sent" ? (
            <p style={{ fontSize: "18px" }}>Thanks — your message is in. We&apos;ll be in touch soon.</p>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <input
                name="name" placeholder="Your name" required
                value={form.name} onChange={handleChange}
                style={{ padding: "12px", border: "1px solid var(--line)", borderRadius: "3px", background: "var(--surface)", color: "var(--text-1)" }}
              />
              <input
                name="email" type="email" placeholder="Email" required
                value={form.email} onChange={handleChange}
                style={{ padding: "12px", border: "1px solid var(--line)", borderRadius: "3px", background: "var(--surface)", color: "var(--text-1)" }}
              />
              <input
                name="company" placeholder="Company (optional)"
                value={form.company} onChange={handleChange}
                style={{ padding: "12px", border: "1px solid var(--line)", borderRadius: "3px", background: "var(--surface)", color: "var(--text-1)" }}
              />
              <textarea
                name="message" placeholder="Tell us about the project" required rows={5}
                value={form.message} onChange={handleChange}
                style={{ padding: "12px", border: "1px solid var(--line)", borderRadius: "3px", background: "var(--surface)", color: "var(--text-1)" }}
              />
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send"}
              </button>
              {status === "error" && <p style={{ color: "crimson" }}>Something went wrong — try again.</p>}
            </form>
          )}
        </div>
      </section>

      <footer>
        <div className="wrap foot-row">
          <div>© {new Date().getFullYear()} AROKELIX.</div>
        </div>
      </footer>
    </>
  );
}