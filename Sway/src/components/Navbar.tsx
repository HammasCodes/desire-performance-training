"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Instagram } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Artists", href: "#artists" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location", href: "#location" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal-950/90 backdrop-blur-md border-b border-charcoal-800/80 py-4 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif text-2xl font-black tracking-tight text-white group-hover:text-gold-amber transition-colors duration-200">
              LOCAL STRANGERS
            </span>
            <span className="text-[10px] tracking-[0.25em] text-gold-amber font-mono font-bold -mt-1 uppercase">
              Studios • Huntsville, AL
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-gold-amber transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:256-417-5551"
              className="flex items-center space-x-2 text-xs font-semibold text-gray-300 hover:text-gold-amber transition-colors duration-200 border border-charcoal-700 hover:border-gold-amber/40 bg-charcoal-900/50 py-2 px-3 rounded-full"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>256-417-5551</span>
            </a>
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold text-black rounded-full group bg-gradient-to-br from-gold-light to-gold-amber hover:text-black focus:ring-4 focus:outline-none focus:ring-gold-muted"
            >
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-transparent rounded-full group-hover:bg-opacity-0">
                Book Consultation
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-charcoal-950/95 border-b border-charcoal-800 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-charcoal-900 hover:text-gold-amber transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-charcoal-800 flex flex-col space-y-3 px-3">
            <a
              href="tel:256-417-5551"
              className="flex items-center justify-center space-x-2 text-sm font-semibold text-gray-300 bg-charcoal-900 border border-charcoal-700 py-3 rounded-xl hover:text-gold-amber hover:border-gold-amber/40 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-amber" />
              <span>256-417-5551</span>
            </a>
            <a
              href="https://instagram.com/sway_art"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 text-sm font-semibold text-gray-300 bg-charcoal-900 border border-charcoal-700 py-3 rounded-xl hover:text-gold-amber hover:border-gold-amber/40 transition-colors"
            >
              <Instagram className="w-4 h-4 text-gold-amber" />
              <span>DM @sway_art</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-gradient-to-r from-gold-light to-gold-amber text-black py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-gold-amber/20 transition-all duration-200"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
