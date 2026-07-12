import { Instagram, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal-dark border-t border-brand-gold/10 py-12 relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Footer Top Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-10 border-b border-brand-gold/5 items-start">
          
          {/* Column 1: Logo & Tagline (5 columns) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex flex-col">
              <span className="font-display text-2xl tracking-[0.2em] text-white">
                VYNE
              </span>
              <span className="font-sans text-[0.6rem] tracking-[0.4em] text-brand-gold uppercase -mt-1 pl-[0.1em]">
                Salon & Barbershop
              </span>
            </a>
            <p className="font-sans text-xs text-gray-400 leading-relaxed font-light max-w-sm">
              Providing modern premium grooming, precision styling, and customized experience for the trend-conscious gentlemen in Al Helio, Ajman, UAE.
            </p>
          </div>

          {/* Column 2: Navigation Links (3 columns) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold tracking-widest text-white uppercase pb-1 border-b border-brand-gold/10 w-24">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Services Menu", href: "#services" },
                { name: "Our Destination", href: "#about" },
                { name: "Why VYNE", href: "#why-vyne" },
                { name: "Hours & Location", href: "#location" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="font-sans text-xs text-gray-400 hover:text-brand-gold transition-colors duration-300 uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Summary & Social (4 columns) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display text-xs font-bold tracking-widest text-white uppercase pb-1 border-b border-brand-gold/10 w-24">
              Contact Info
            </h4>
            <div className="space-y-2 pt-1">
              <p className="font-sans text-xs text-gray-400 flex items-center space-x-2.5">
                <MapPin size={12} className="text-brand-gold shrink-0" />
                <span>Al Helio 2, Al Amerah, Ajman, UAE</span>
              </p>
              <a
                href="tel:+97167416264"
                className="font-sans text-xs text-gray-400 hover:text-brand-gold transition-colors duration-300 flex items-center space-x-2.5"
              >
                <Phone size={12} className="text-brand-gold shrink-0" />
                <span>+971 6 741 6264</span>
              </a>
              <a
                href="https://www.instagram.com/vynesalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-gray-400 hover:text-brand-gold transition-colors duration-300 flex items-center space-x-2.5"
              >
                <Instagram size={12} className="text-brand-gold shrink-0" />
                <span>@vynesalon</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Content (Copyright) */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-center sm:text-left gap-4">
          <p className="font-sans text-[0.65rem] text-gray-500 tracking-wider">
            © {currentYear} VYNE SALON. All rights reserved. Premium Barbershop Grooming.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/vynesalon/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[0.65rem] text-gray-500 hover:text-brand-gold tracking-widest uppercase flex items-center space-x-1"
            >
              <span>Instagram</span>
              <ExternalLink size={10} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
