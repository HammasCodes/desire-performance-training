import { Star, ShieldAlert, HeartHandshake, Compass } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-charcoal-950">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: "url('/hero_bg.png')" }}
      />
      
      {/* Gradients to blend background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-charcoal-950/80 via-transparent to-charcoal-950/80" />

      {/* Decorative Amber Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-amber/10 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-amber/5 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust Signal Badge */}
        <div className="inline-flex items-center space-x-2 bg-charcoal-900/80 border border-gold-amber/30 py-1.5 px-4 rounded-full mb-8 backdrop-blur-sm animate-fade-in shadow-lg shadow-black/40">
          <div className="flex items-center text-gold-amber">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="text-xs font-semibold tracking-wide text-gray-200">
            Huntsville&apos;s Highest Rated Studio (4.9 Stars)
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] animate-fade-in-up">
          Where Strangers <br className="hidden sm:inline" />
          Become <span className="text-gradient">Family</span>.
        </h1>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-300 mb-10 leading-relaxed font-light">
          Experience premium custom tattoo artistry and body piercing in a warm, laid-back, and completely judgment-free space. Located in Huntsville, Alabama.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-light via-gold-amber to-gold-muted text-black font-extrabold rounded-xl shadow-lg shadow-gold-amber/20 hover:shadow-gold-amber/40 transform hover:-translate-y-0.5 transition-all duration-200 text-center tracking-wide"
          >
            Book a Consultation
          </a>
          <a
            href="#artists"
            className="w-full sm:w-auto px-8 py-4 bg-charcoal-900/60 hover:bg-charcoal-900 border border-charcoal-700 hover:border-gold-amber/30 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-200 text-center"
          >
            Meet the Artists
          </a>
        </div>

        {/* Core Studio Pillars (Visual Badges) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8 border-t border-charcoal-800/80">
          <div className="flex flex-col items-center p-3 rounded-2xl bg-charcoal-900/20 backdrop-blur-sm border border-charcoal-900/40">
            <HeartHandshake className="w-6 h-6 text-gold-amber mb-2" />
            <span className="text-sm font-semibold text-white">Welcoming Vibe</span>
            <span className="text-xs text-gray-400 text-center mt-1">Laid-back & family-first</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-2xl bg-charcoal-900/20 backdrop-blur-sm border border-charcoal-900/40">
            <Compass className="w-6 h-6 text-gold-amber mb-2" />
            <span className="text-sm font-semibold text-white">Custom Artistry</span>
            <span className="text-xs text-gray-400 text-center mt-1">No generic templates</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-2xl bg-charcoal-900/20 backdrop-blur-sm border border-charcoal-900/40">
            <ShieldAlert className="w-6 h-6 text-gold-amber mb-2" />
            <span className="text-sm font-semibold text-white">100% Sterile</span>
            <span className="text-xs text-gray-400 text-center mt-1">Hospital-grade clean</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-2xl bg-charcoal-900/20 backdrop-blur-sm border border-charcoal-900/40">
            <Star className="w-6 h-6 text-gold-amber mb-2" />
            <span className="text-sm font-semibold text-white">Anxiety Friendly</span>
            <span className="text-xs text-gray-400 text-center mt-1">Patient & caring team</span>
          </div>
        </div>
      </div>

      {/* Ambient bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-charcoal-950 to-transparent pointer-events-none" />
    </section>
  );
}
