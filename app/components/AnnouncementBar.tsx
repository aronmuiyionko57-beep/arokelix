"use client";

import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";

export default function AnnouncementBar() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("arokelix-bar") === "closed") setOpen(false);
    } catch {}
  }, []);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem("arokelix-bar", "closed");
    } catch {}
  }

  if (!open) return null;

  return (
    <div className="announce" role="region" aria-label="Announcement">
      <div className="wrap announce-inner">
        <span className="announce-badge">
          <span className="announce-dot" aria-hidden="true" />
          Open for projects
        </span>
        <p>Tell us what you need — we reply within one business day.</p>
        <a href="/contact" className="announce-link">
          Start a project <ArrowRight size={14} aria-hidden="true" />
        </a>
        <button type="button" className="announce-close" onClick={close} aria-label="Dismiss announcement">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}