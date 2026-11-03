"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/lab", label: "Lab" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "";

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

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
              <a key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <ThemeToggle />
            <a href="/contact" className="navcta">
              Start a Project <ArrowRight size={16} aria-hidden="true" style={{ marginLeft: 6, verticalAlign: "middle" }} />
            </a>
            <button
              className="navmobile-btn"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="mobile-menu">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="/contact" onClick={() => setOpen(false)}>Start a Project</a>
          </div>
        )}
      </header>
    </>
  );
}