import Image from "next/image";
import { Award, Compass, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-charcoal relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Images & Frames */}
          <div className="lg:col-span-5 relative w-full h-[350px] sm:h-[450px] lg:h-[550px]">
            {/* Background Accent Frame */}
            <div className="absolute top-4 left-4 right-0 bottom-0 border border-brand-gold/30 rounded-sm pointer-events-none" />
            
            {/* Main Image Container */}
            <div className="absolute top-0 left-0 right-4 bottom-4 overflow-hidden rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/about.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal-dark/70 via-transparent to-transparent" />
            </div>

            {/* Small floating badge */}
            <div className="absolute -bottom-2 right-8 bg-brand-green border border-brand-gold/30 p-4 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-md">
              <div className="text-center">
                <span className="font-display block text-2xl font-bold text-brand-gold">100%</span>
                <span className="font-sans block text-[0.55rem] tracking-[0.2em] text-gray-300 uppercase font-medium">Bespoke Experience</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7">
            <span className="font-sans text-[0.7rem] tracking-[0.3em] text-brand-gold font-semibold uppercase block mb-3">
              The Destination
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide mb-6 leading-tight">
              A NEW STANDARD OF<br />
              <span className="text-brand-gold">GROOMING EXCELLENCE</span>
            </h2>
            <div className="w-16 h-[2px] bg-brand-gold mb-8" />

            <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed font-light mb-6">
              VYNE SALON is a modern, premium grooming destination located in the heart of Al Helio, Ajman. We have reimagined the traditional barbershop into a stylish, comfortable sanctuary designed for the modern, trend-conscious client.
            </p>
            <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed font-light mb-8">
              Our philosophy revolves around one simple principle: **understanding each client's unique personal style**. We believe grooming is an art form. Our elite barbers consult with you individually, analyzing your style preferences, hair type, and lifestyle to deliver a customized experience and a tailor-made look during every single visit.
            </p>

            {/* Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-brand-gold/10">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:items-start lg:space-y-2">
                  <div className="p-2 bg-brand-green-light rounded-sm border border-brand-gold/10 text-brand-gold">
                    <Compass size={20} />
                  </div>
                  <h4 className="font-display text-sm font-semibold text-white tracking-wider uppercase">
                    Style Match
                  </h4>
                </div>
                <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                  Tailored cuts mapped perfectly to your facial structure and lifestyle.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:items-start lg:space-y-2">
                  <div className="p-2 bg-brand-green-light rounded-sm border border-brand-gold/10 text-brand-gold">
                    <Users size={20} />
                  </div>
                  <h4 className="font-display text-sm font-semibold text-white tracking-wider uppercase">
                    Master Barbers
                  </h4>
                </div>
                <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                  Our professional barbers are highly trained in both classic and modern trends.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:items-start lg:space-y-2">
                  <div className="p-2 bg-brand-green-light rounded-sm border border-brand-gold/10 text-brand-gold">
                    <Award size={20} />
                  </div>
                  <h4 className="font-display text-sm font-semibold text-white tracking-wider uppercase">
                    Premium Ambiance
                  </h4>
                </div>
                <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                  Enjoy supreme comfort, curated music, and complimentary beverages.
                </p>
              </div>
            </div>

            {/* Link to Location */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#location"
                className="font-sans text-xs tracking-widest uppercase text-brand-gold hover:text-brand-gold-light font-bold transition-colors duration-300 flex items-center space-x-1.5"
              >
                <span>Find Us in Al Helio</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
