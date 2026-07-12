"use client";

import { useEffect, useState } from "react";

const PHONE_DISPLAY = "250-763-1144";
const PHONE_TEL = "tel:+12507631144";

const NAV_LINKS = [
  { href: "#services", label: "Cakes" },
  { href: "#fillings", label: "Fillings" },
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
        scrolled
          ? "border-b border-gold/30 bg-cream/95 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-display text-xl font-bold tracking-wide text-crimson sm:text-2xl">
            PJ&apos;s Party Cakes
          </span>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark sm:inline">
            Est. 1976
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wider text-ink/80 transition hover:text-crimson"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={PHONE_TEL}
            className="text-sm font-bold tracking-wide text-ink/90 hover:text-crimson"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-crimson px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-parchment shadow-sm transition hover:bg-crimson-dark"
          >
            Order Your Cake
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-ink transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-gold/30 bg-cream px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-semibold uppercase tracking-wider text-ink/85 hover:text-crimson"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_TEL}
              className="text-base font-bold text-ink/90 hover:text-crimson"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-crimson px-5 py-3 text-center text-sm font-bold uppercase tracking-wider text-parchment"
            >
              Order Your Cake
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
