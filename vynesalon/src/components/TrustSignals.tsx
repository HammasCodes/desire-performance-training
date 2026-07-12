import { Star, ShieldCheck, Sparkles, HeartHandshake, Eye } from "lucide-react";

export default function TrustSignals() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Welcoming & Clean Ambiance",
      description: "Step into a spotless, relaxing atmosphere. All tools are ultra-hygienically sterilized between clients, and our workspace is kept pristine.",
    },
    {
      icon: Sparkles,
      title: "High-End Grooming Products",
      description: "We use only the finest imported pomades, organic beard oils, hair clay, and dermatologically tested skincare from world-renowned brands.",
    },
    {
      icon: Eye,
      title: "Uncompromising Attention to Detail",
      description: "We never rush. Every fade, line-up, and razor line is crafted to perfection with complete focus on symmetry, precision, and neatness.",
    },
    {
      icon: HeartHandshake,
      title: "Custom Tailored Consultations",
      description: "Every appointment starts with a discussion about your style goals, hair texture, and lifestyle. We design a style uniquely suited for you.",
    },
  ];

  return (
    <section id="why-vyne" className="py-24 bg-brand-charcoal-light relative">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Trust Summary Grid (Rating Card + Title Column) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
          <div className="lg:col-span-8">
            <span className="font-sans text-[0.7rem] tracking-[0.3em] text-brand-gold font-semibold uppercase block mb-3">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide mb-6">
              THE VYNE SALON DIFFERENCE
            </h2>
            <div className="w-16 h-[2px] bg-brand-gold mb-6" />
            <p className="font-sans text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-2xl">
              We have set a new benchmark for gentleman's grooming in Ajman. By focusing on elite craftsmanship, high-quality products, and client comfort, we ensure that every visit leaves you looking sharp and feeling refreshed.
            </p>
          </div>

          {/* Large Interactive 4.9 Rating Card */}
          <div className="lg:col-span-4 bg-brand-green border border-brand-gold/30 p-8 rounded-sm text-center relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)] group">
            {/* Background Accent glow */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-gold/10 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} className="fill-brand-gold text-brand-gold animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
              ))}
            </div>
            
            <span className="font-display text-6xl font-extrabold text-white block mb-1 tracking-tight">
              4.9
            </span>
            
            <span className="font-sans text-xs tracking-[0.25em] text-brand-gold uppercase font-bold block mb-4">
              Star Rated Studio
            </span>
            
            <p className="font-sans text-xs text-gray-300 leading-relaxed font-light">
              Highly rated by the trend-conscious gentlemen of Al Helio & Al Amerah, Ajman for premium grooming and barbershop service.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="flex items-start space-x-5 p-6 bg-brand-charcoal border border-brand-gold/5 hover:border-brand-gold/20 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              >
                <div className="p-3 bg-brand-green-light rounded-sm border border-brand-gold/10 text-brand-gold shrink-0">
                  <Icon size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-semibold text-white tracking-wider uppercase">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
