"use client";

import { useEffect, useState } from "react";

const PHONE_DISPLAY = "254-457-0210";
const PHONE_TEL = "tel:+12544570210";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="text-display text-lg font-semibold tracking-wide sm:text-xl">
          DESIRE <span className="text-crimson">PERFORMANCE</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-bone/80 transition hover:text-crimson"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={PHONE_TEL}
            className="text-sm font-semibold tracking-wide text-bone/90 hover:text-crimson"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href="#contact"
            className="rounded-sm bg-crimson px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-crimson-dark"
          >
            Book a Session
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-bone transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`h-0.5 w-6 bg-bone transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-bone transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-ink px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium uppercase tracking-wider text-bone/85 hover:text-crimson"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_TEL}
              className="text-base font-semibold text-bone/90 hover:text-crimson"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-sm bg-crimson px-5 py-3 text-center text-sm font-bold uppercase tracking-wider text-white"
            >
              Book a Session
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
