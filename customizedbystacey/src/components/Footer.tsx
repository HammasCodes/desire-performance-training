import React from "react";
import { Sparkles, Instagram, Phone, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-softpink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-5 h-5 text-gold-500 animate-sparkle" />
              <span className="font-serif text-xl font-bold bg-gradient-to-r from-softpink-500 to-gold-500 bg-clip-text text-transparent">
                Stacey&apos;s Custom Creations
              </span>
            </div>
            <p className="text-sm text-foreground/70 max-w-xs leading-relaxed">
              Handcrafted personalized gifts made with love and a touch of sparkle. Based near Tulsa, Oklahoma.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-tealaccent-700 tracking-wider text-sm uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="text-sm text-foreground/70 hover:text-softpink-600 transition-colors">
                  Our Creations
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-foreground/70 hover:text-softpink-600 transition-colors">
                  About Stacey
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-sm text-foreground/70 hover:text-softpink-600 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-foreground/70 hover:text-softpink-600 transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-sans font-semibold text-tealaccent-700 tracking-wider text-sm uppercase mb-4">
              Connect With Stacey
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/customizedbystacey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-softpink-600 transition-colors"
                >
                  <Instagram className="w-4.5 h-4.5 text-softpink-500" />
                  <span>@customizedbystacey</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:435-772-4104"
                  className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-softpink-600 transition-colors"
                >
                  <Phone className="w-4.5 h-4.5 text-tealaccent-500" />
                  <span>435-772-4104</span>
                </a>
              </li>
              <li className="text-sm text-foreground/60 leading-relaxed">
                Serving Tulsa, Jenks, Broken Arrow, Bixby, Owasso, and surrounding OK areas.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-softpink-50 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/50">
            &copy; {new Date().getFullYear()} Stacey&apos;s Custom Creations. All rights reserved.
          </p>
          <p className="text-xs text-foreground/50 flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-softpink-500 fill-softpink-500" /> near Tulsa, OK
          </p>
        </div>
      </div>
    </footer>
  );
}
