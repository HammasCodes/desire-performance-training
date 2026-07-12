import { Palette, Layers, Sparkles, Smile } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

const services: Service[] = [
  {
    title: "Custom Tattoos",
    description: "Work with our skilled artists to design a completely original tattoo that tells your story. No generic flash walls here.",
    icon: <Palette className="w-6 h-6 text-gold-amber" />,
    details: ["Consultation included", "Original sketches", "Black & Grey or Color", "All skin types and placements"],
  },
  {
    title: "Tattoo Cover-Ups & Refreshes",
    description: "Have an old tattoo that no longer fits? We specialize in clever, beautiful cover-ups and restoring faded artwork.",
    icon: <Layers className="w-6 h-6 text-gold-amber" />,
    details: ["Scar cover-ups", "Complete cover designs", "Color correction", "Detail restoration"],
  },
  {
    title: "Professional Piercings",
    description: "Expert ear, nose, facial, and body piercings in a hospital-grade sterile environment using premium implant-grade jewelry.",
    icon: <Sparkles className="w-6 h-6 text-gold-amber" />,
    details: ["Implant-grade titanium", "Custom ear curations", "Facial & body piercings", "Safe for sensitive skin"],
  },
  {
    title: "Walk-Ins & Quick Consultation",
    description: "Spontaneous inspiration? We welcome walk-ins for simple tattoos and quick piercings on a daily, first-come first-served basis.",
    icon: <Smile className="w-6 h-6 text-gold-amber" />,
    details: ["Open daily for walk-ins", "Consultation bookings", "Small-to-medium tattoos", "Jewelry changes & sizing"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-charcoal-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="font-mono text-xs font-bold tracking-[0.3em] text-gold-amber uppercase mb-3">
              Craftsmanship & Care
            </h2>
            <h3 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
              Our Studio Services
            </h3>
            <div className="h-1 w-16 bg-gold-amber rounded-full mb-6 md:mb-0" />
          </div>
          <p className="text-gray-400 max-w-sm text-sm sm:text-base leading-relaxed">
            From the initial consultation to final healing, we maintain strict safety protocols and a welcoming attitude. Walk-ins are always welcome!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-charcoal-900 border border-charcoal-800 hover:border-gold-amber/20 transition-all duration-300 flex flex-col md:flex-row gap-6 shadow-xl shadow-black/25"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-charcoal-950 flex items-center justify-center border border-charcoal-800 shadow-inner">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h4 className="font-serif text-xl font-bold text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Details Checklist */}
                <div className="grid grid-cols-2 gap-2 border-t border-charcoal-800/80 pt-4">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-amber" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Bar CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-charcoal-900 to-charcoal-950 border border-charcoal-800 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-white mb-1">
              Have something unique in mind?
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm">
              Book a custom consult. We take time to map, design, and discuss placement.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 bg-charcoal-800 hover:bg-gold-amber hover:text-black border border-charcoal-700 text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-lg"
          >
            Start Your Project
          </a>
        </div>

      </div>
    </section>
  );
}
