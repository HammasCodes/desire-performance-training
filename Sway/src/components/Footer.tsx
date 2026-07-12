import { Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Col 1: Brand details */}
          <div className="flex flex-col space-y-4">
            <a href="#" className="flex flex-col group self-start">
              <span className="font-serif text-xl font-black tracking-tight text-white group-hover:text-gold-amber transition-colors">
                LOCAL STRANGERS
              </span>
              <span className="text-[9px] tracking-[0.25em] text-gold-amber font-mono font-bold -mt-0.5 uppercase">
                Studios • Huntsville, AL
              </span>
            </a>
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Custom tattooing and safe, sterile piercing in an atmosphere that welcomes you like family. Drop by, enjoy the music, and make your art reality.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-sm font-semibold tracking-widest text-white uppercase font-mono">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="#artists" className="text-xs text-gray-400 hover:text-gold-amber transition-colors">
                Meet the Artists
              </a>
              <a href="#services" className="text-xs text-gray-400 hover:text-gold-amber transition-colors">
                Our Services
              </a>
              <a href="#about" className="text-xs text-gray-400 hover:text-gold-amber transition-colors">
                About Us
              </a>
              <a href="#reviews" className="text-xs text-gray-400 hover:text-gold-amber transition-colors">
                Reviews
              </a>
              <a href="#location" className="text-xs text-gray-400 hover:text-gold-amber transition-colors">
                Our Location
              </a>
              <a href="#contact" className="text-xs text-gray-400 hover:text-gold-amber transition-colors">
                Book Consultation
              </a>
            </div>
          </div>

          {/* Col 3: Direct contact */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-sm font-semibold tracking-widest text-white uppercase font-mono">
              Connect With Us
            </h4>
            <div className="space-y-2 text-xs text-gray-400">
              <a 
                href="tel:256-417-5551" 
                className="flex items-center space-x-2 hover:text-gold-amber transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-amber" />
                <span>256-417-5551</span>
              </a>
              <a 
                href="https://instagram.com/sway_art" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 hover:text-gold-amber transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-gold-amber" />
                <span>@sway_art</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-gold-amber mt-0.5 flex-shrink-0" />
                <span>
                  1004 Jordan Ln NW #8,<br />
                  Huntsville, AL 35816
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-charcoal-900/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-500 text-center sm:text-left">
            &copy; {currentYear} Local Strangers Studios. All rights reserved.
          </p>
          <div className="flex space-x-4 text-[10px] text-gray-500">
            <span className="hover:text-gold-amber cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-gold-amber cursor-pointer transition-colors">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-gold-amber cursor-pointer transition-colors">Health & Safety</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
