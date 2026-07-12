import { Calendar, Instagram } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark & Green Gradients */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-105"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      />
      {/* Premium Multi-layer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal-dark via-brand-charcoal-dark/85 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal-dark/50 z-10" />
      
      {/* Accent Light Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-green/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 pt-20">
        <div className="max-w-3xl text-left">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center space-x-2 bg-brand-green-light/80 border border-brand-gold/25 px-4 py-2 rounded-full mb-6 backdrop-blur-md animate-fade-in shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse" />
            <span className="font-sans text-[0.65rem] tracking-[0.25em] text-brand-gold-light uppercase font-semibold">
              Al Helio, Ajman's Premier Grooming Destination
            </span>
          </div>

          {/* Main Headings */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Crafting Identity.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-accent">
              Defining Style.
            </span>
          </h1>

          {/* Tagline Description */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light max-w-2xl">
            Premium grooming for the trend-conscious gentleman. We don't just cut hair; we sculpt your personal style through customized service and meticulous attention to detail.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-brand-gold to-brand-gold-accent hover:from-brand-gold-light hover:to-brand-gold text-brand-charcoal-dark font-sans font-bold text-xs tracking-widest uppercase py-4 px-8 rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(197,168,128,0.2)] hover:shadow-[0_0_30px_rgba(197,168,128,0.4)] hover:-translate-y-0.5"
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </a>
            
            <a
              href="https://www.instagram.com/vynesalon/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 border border-gray-600 hover:border-brand-gold text-white hover:text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase py-4 px-8 rounded-sm transition-all duration-300 bg-brand-charcoal/20 backdrop-blur-sm hover:-translate-y-0.5"
            >
              <Instagram size={16} />
              <span>@vynesalon</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative vertical social indicator or location badge */}
      <div className="hidden lg:flex absolute right-12 bottom-12 z-20 flex-col items-center space-y-4">
        <span className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-gold/60 [writing-mode:vertical-lr] select-none">
          Est. 2026 • Premium Quality
        </span>
        <div className="w-[1px] h-12 bg-brand-gold/30" />
      </div>
    </section>
  );
}
