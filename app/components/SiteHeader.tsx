"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header>
        <div className="wrap nav">
          <a href="/" className="logo">
            <Image src="/logo.png" alt="AROKELIX" width={220} height={70} className="logo-img" priority />
          </a>
          <nav className="navlinks" aria-label="Main">
            {links.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <a href="/contact" className="navcta">Start a Project</a>
          <button
            className="navmobile-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
        {open && (
          <div className="mobile-menu">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href="/contact" onClick={() => setOpen(false)}>Start a Project</a>
          </div>
        )}
      </header>
    </>
  );
}