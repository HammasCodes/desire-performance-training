"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles, Instagram } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Creations", href: "#services" },
    { name: "About Stacey", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-softpink-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-1.5 group">
              <Sparkles className="w-5 h-5 text-gold-500 animate-sparkle group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-softpink-500 via-gold-500 to-tealaccent-500 bg-clip-text text-transparent">
                Stacey&apos;s
              </span>
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-widest text-tealaccent-600 uppercase pt-1">
                Custom Creations
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-foreground/80 hover:text-softpink-600 transition-colors duration-200 text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.instagram.com/customizedbystacey/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-softpink-500 to-gold-500 hover:from-softpink-600 hover:to-gold-600 text-white font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm"
            >
              <Instagram className="w-4 h-4" />
              <span>DM to Order</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-foreground/80 hover:text-softpink-600 hover:bg-softpink-50 focus:outline-none transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out border-b border-softpink-100 bg-white ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-3 sm:px-3 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-medium text-foreground/80 hover:text-softpink-600 px-3 py-2 rounded-md hover:bg-softpink-50 transition-colors duration-200 text-base"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 px-3">
            <a
              href="https://www.instagram.com/customizedbystacey/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-softpink-500 to-gold-500 text-white font-semibold py-3 px-4 rounded-full shadow-md w-full text-center hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
            >
              <Instagram className="w-5 h-5" />
              <span>DM to Order</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
