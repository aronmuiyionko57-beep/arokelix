"use client";

import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("arokelix-theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      <Moon size={18} className="icon-moon" aria-hidden="true" />
      <Sun size={18} className="icon-sun" aria-hidden="true" />
    </button>
  );
}