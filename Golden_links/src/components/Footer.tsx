"use client";

import React from "react";
import { Sparkles, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-luxury-black border-t border-white/5 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="flex items-center gap-2 group">
              <Sparkles className="h-4 w-4 text-gold-primary" />
              <span className="font-serif text-lg font-bold tracking-widest gold-gradient-text uppercase">
                Golden Links
              </span>
            </a>
            <span className="text-4xs text-gray-500 uppercase tracking-widest mt-1 block">
              Permanent Jewelry Studio &bull; Boise, ID
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-3xs uppercase tracking-wider font-medium text-gray-400">
            <a href="#services" className="hover:text-gold-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-gold-primary transition-colors">Story</a>
            <a href="#gallery" className="hover:text-gold-primary transition-colors">Collection</a>
            <a href="#location" className="hover:text-gold-primary transition-colors">Find Us</a>
          </div>

          {/* Actions / Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/goldenlinks.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 border border-white/5 rounded-full text-gray-400 hover:text-gold-primary hover:bg-gold-primary/5 transition-all duration-300"
              aria-label="Instagram Link"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              onClick={handleScrollTop}
              className="p-2.5 bg-white/5 border border-white/5 rounded-full text-gray-400 hover:text-gold-primary hover:bg-gold-primary/5 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-4xs text-gray-500 font-light tracking-wide text-center sm:text-left">
            &copy; {new Date().getFullYear()} Golden Links Studio. All rights reserved. Custom-welded in Boise, Idaho.
          </p>
          <div className="flex gap-4 text-4xs text-gray-600 font-light">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
