import React from "react";
import { Instagram, Phone, MapPin, Sparkles, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative bg-dot-pattern-teal">
      {/* Decorative Sparkles */}
      <div className="absolute top-1/4 right-1/10 w-3 h-3 text-tealaccent-300 animate-sparkle" />
      <div className="absolute bottom-1/4 left-1/10 w-2.5 h-2.5 text-gold-300 animate-sparkle [animation-delay:1.2s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Contact Details Panel */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-softpink-100 border border-softpink-200 text-softpink-600 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-gold-500 animate-sparkle" />
              <span>Let&apos;s Start Crafting</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Ready to Order Your{" "}
              <span className="bg-gradient-to-r from-softpink-500 to-gold-500 bg-clip-text text-transparent">
                Custom Gift?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              We make ordering super easy and personal. Send a direct message on Instagram with your design thoughts or give us a phone call. Stacey will handle your project from start to finish!
            </p>

            <div className="space-y-4">
              {/* Instagram Card CTA */}
              <a
                href="https://www.instagram.com/customizedbystacey/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-2xl border border-softpink-150 bg-white hover:bg-softpink-50/30 transition-all duration-300 custom-card-shadow hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white flex items-center justify-center shadow-md">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-base text-foreground">
                      Instagram Direct Message
                    </h3>
                    <p className="text-xs text-foreground/60">
                      @customizedbystacey — Fast, direct support
                    </p>
                  </div>
                </div>
                <div className="p-2 bg-softpink-100 text-softpink-600 rounded-full group-hover:translate-x-1 transition-transform">
                  <Send className="w-4 h-4" />
                </div>
              </a>

              {/* Call Card CTA */}
              <a
                href="tel:435-772-4104"
                className="group flex items-center justify-between p-5 rounded-2xl border border-tealaccent-100 bg-white hover:bg-tealaccent-50/20 transition-all duration-300 custom-card-shadow hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-tealaccent-600 text-white flex items-center justify-center shadow-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-base text-foreground">
                      Call Stacey
                    </h3>
                    <p className="text-xs text-foreground/60">
                      435-772-4104 — Call to chat about your ideas
                    </p>
                  </div>
                </div>
                <div className="p-2 bg-tealaccent-100 text-tealaccent-700 rounded-full group-hover:translate-x-1 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>

          {/* Service Area / Illustration Map Panel */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-tealaccent-100/50 via-softpink-100/50 to-gold-100/50 rounded-3xl p-6 border border-softpink-100 flex flex-col justify-between custom-card-shadow-teal overflow-hidden shadow-2xl animate-float">
              
              {/* Dot Pattern Overlay */}
              <div className="absolute inset-0 bg-dot-pattern opacity-40 -z-10" />

              {/* Top Details */}
              <div className="space-y-2 relative">
                <div className="flex items-center gap-2 text-tealaccent-700 font-bold text-sm tracking-wide uppercase">
                  <MapPin className="w-4 h-4 text-tealaccent-600 animate-bounce" />
                  <span>Tulsa Service Area</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                  Handcrafted Near Tulsa
                </h3>
              </div>

              {/* Graphic Representation of Tulsa Area Map */}
              <div className="my-6 grow bg-white/70 backdrop-blur-sm rounded-2xl border border-softpink-150 p-6 flex flex-col justify-center items-center text-center relative shadow-inner">
                {/* Simulated Map Markers */}
                <div className="absolute top-1/4 left-1/3 text-xs bg-softpink-500 text-white font-bold px-2 py-1 rounded-full shadow-sm">
                  Owasso
                </div>
                <div className="absolute top-1/2 left-[45%] text-xs bg-gold-500 text-white font-bold px-3 py-1.5 rounded-full shadow-md animate-pulse">
                  📍 Stacey&apos;s
                </div>
                <div className="absolute bottom-1/4 left-1/4 text-xs bg-tealaccent-600 text-white font-bold px-2.5 py-1 rounded-full shadow-sm">
                  Tulsa
                </div>
                <div className="absolute top-1/2 right-1/10 text-xs bg-softpink-500 text-white font-bold px-2.5 py-1 rounded-full shadow-sm">
                  Broken Arrow
                </div>
                <div className="absolute bottom-1/6 right-1/4 text-xs bg-tealaccent-600 text-white font-bold px-2 py-1 rounded-full shadow-sm">
                  Jenks
                </div>

                <div className="space-y-1 z-10 pt-12">
                  <p className="text-xs uppercase font-extrabold tracking-widest text-tealaccent-700">
                    Local Pickup & Delivery
                  </p>
                  <p className="text-sm text-foreground/80 font-medium">
                    Serving Tulsa & surrounding metro areas.
                  </p>
                  <p className="text-[11px] text-foreground/50">
                    Nationwide shipping available for all tumblers and apparel.
                  </p>
                </div>
              </div>

              {/* Card Footer detail */}
              <p className="text-[11px] text-foreground/60 text-center italic">
                Note: Local pickups are fully coordinated via Instagram DM.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
