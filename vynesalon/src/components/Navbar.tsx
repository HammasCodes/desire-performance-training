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
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Why Vyne", href: "#why-vyne" },
    { name: "Hours & Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-charcoal-dark/90 backdrop-blur-md border-b border-brand-gold/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex flex-col group">
            <span className="font-display text-2xl tracking-[0.2em] text-white group-hover:text-brand-gold transition-colors duration-300">
              VYNE
            </span>
            <span className="font-sans text-[0.6rem] tracking-[0.4em] text-brand-gold uppercase -mt-1 pl-[0.1em]">
              Salon & Barbershop
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-brand-gold font-sans text-sm tracking-wider uppercase transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/vynesalon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-gold transition-colors duration-300"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#contact"
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal-dark font-sans font-semibold text-xs tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(197,168,128,0.15)] hover:shadow-[0_0_20px_rgba(197,168,128,0.3)] hover:-translate-y-0.5"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-gold transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-brand-charcoal-dark/98 backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl tracking-widest uppercase text-gray-200 hover:text-brand-gold font-display transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-6 pt-4 border-t border-brand-gold/10 w-40 justify-center">
            <a
              href="https://www.instagram.com/vynesalon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-gold transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
            <a
              href="tel:+97167416264"
              className="text-gray-300 hover:text-brand-gold transition-colors duration-300"
            >
              <Phone size={24} />
            </a>
          </div>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal-dark font-sans font-semibold text-sm tracking-widest uppercase px-8 py-3.5 text-center rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(197,168,128,0.15)]"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  );
}
