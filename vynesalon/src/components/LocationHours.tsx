import { Clock, MapPin, Navigation, Compass } from "lucide-react";

export default function LocationHours() {
  return (
    <section id="location" className="py-24 bg-brand-charcoal relative">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[0.7rem] tracking-[0.3em] text-brand-gold font-semibold uppercase block mb-3">
            Find Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide mb-4">
            HOURS & LOCATION
          </h2>
          <div className="w-20 h-[2px] bg-brand-gold mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Conveniently located in Al Helio, Ajman, with extended hours daily to accommodate your busy schedule. Walk-ins are welcome, but appointments are highly recommended.
          </p>
        </div>

        {/* Split Grid: Details Card vs Stylized Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Detail Info Cards (4 columns on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Hours Card */}
            <div className="bg-brand-charcoal-light border border-brand-gold/10 p-8 rounded-sm hover:border-brand-gold/30 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex-1 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-brand-green rounded-sm border border-brand-gold/10 text-brand-gold">
                  <Clock size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-white tracking-wider uppercase">
                  Opening Hours
                </h3>
              </div>
              <div className="w-full space-y-3 pt-2">
                <div className="flex justify-between items-center border-b border-brand-gold/5 pb-2">
                  <span className="font-sans text-sm text-gray-300">Monday - Sunday</span>
                  <span className="font-sans text-sm font-semibold text-brand-gold">9:00 AM - 12:00 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-gray-300">Public Holidays</span>
                  <span className="font-sans text-sm font-semibold text-brand-gold">9:00 AM - 12:00 AM</span>
                </div>
                <span className="font-sans text-[0.65rem] text-gray-500 block text-right italic pt-1">
                  Open late daily for your convenience.
                </span>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-brand-charcoal-light border border-brand-gold/10 p-8 rounded-sm hover:border-brand-gold/30 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex-1 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-brand-green rounded-sm border border-brand-gold/10 text-brand-gold">
                  <MapPin size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-white tracking-wider uppercase">
                  Our Location
                </h3>
              </div>
              <div className="pt-2 space-y-3">
                <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
                  <strong>VYNE SALON</strong><br />
                  Al Helio 2, near Al Amerah Area,<br />
                  Ajman, United Arab Emirates
                </p>
                <div className="pt-2 flex space-x-3">
                  <a
                    href="https://maps.google.com/?q=Vyne+Salon+Al+Helio+Ajman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-brand-gold hover:text-brand-gold-light transition-colors uppercase"
                  >
                    <Navigation size={14} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Stylized Custom Map Visualizer (7 columns on lg) */}
          <div className="lg:col-span-7 bg-brand-charcoal-light border border-brand-gold/10 p-6 rounded-sm hover:border-brand-gold/30 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex flex-col justify-between min-h-[350px]">
            {/* Map Frame Header */}
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-brand-gold/5">
              <span className="font-sans text-xs tracking-wider text-gray-400 flex items-center space-x-2">
                <Compass size={14} className="text-brand-gold" />
                <span>Al Helio Barbershop Guide Map</span>
              </span>
              <span className="font-sans text-[0.6rem] bg-brand-green text-brand-gold px-2 py-1 rounded-full uppercase tracking-wider border border-brand-gold/20 font-semibold">
                Ajman, UAE
              </span>
            </div>

            {/* Stylized Vector Map Graphic */}
            <div className="relative flex-1 bg-brand-charcoal-dark border border-brand-gold/5 rounded-sm overflow-hidden flex flex-col items-center justify-center p-6 text-center group">
              {/* Grid background lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              
              {/* Visual highway route overlay */}
              <div className="absolute top-1/4 left-0 w-full h-8 bg-brand-charcoal/40 transform -rotate-12 border-y border-brand-gold/5 pointer-events-none flex items-center justify-center">
                <span className="font-sans text-[0.55rem] text-gray-600 tracking-[0.3em] uppercase select-none">
                  Sheikh Mohammed Bin Zayed Road (E311)
                </span>
              </div>
              
              <div className="absolute bottom-1/3 left-1/4 w-32 h-20 border border-brand-gold/5 rounded-sm bg-brand-green/5 flex items-center justify-center transform rotate-6 pointer-events-none">
                <span className="font-sans text-[0.5rem] text-gray-500 uppercase tracking-widest">
                  Al Amerah
                </span>
              </div>

              {/* Pin Accent Glow */}
              <div className="relative z-10 mb-4 bg-brand-green p-4 rounded-full border border-brand-gold/30 shadow-[0_0_30px_rgba(197,168,128,0.25)] group-hover:scale-110 transition-transform duration-500">
                <MapPin size={32} className="text-brand-gold animate-bounce" />
              </div>

              <h4 className="font-display text-base font-semibold text-white tracking-widest uppercase mb-1 z-10">
                VYNE SALON
              </h4>
              <p className="font-sans text-xs text-gray-400 max-w-sm mb-6 z-10 leading-relaxed font-light">
                Positioned in Al Helio 2, close to E311. Ideal stop-off for clients from Al Helio, Al Amerah, and Yasmeen.
              </p>

              <a
                href="https://maps.google.com/?q=Vyne+Salon+Al+Helio+Ajman"
                target="_blank"
                rel="noopener noreferrer"
                className="z-10 bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal-dark font-sans font-bold text-[0.7rem] tracking-widest uppercase px-6 py-3 rounded-sm transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
              >
                Open Google Maps
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
