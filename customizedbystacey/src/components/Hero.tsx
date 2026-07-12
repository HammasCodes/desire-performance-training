import React from "react";
import { Sparkles, Instagram, ArrowRight, Gift, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 bg-dot-pattern">
      {/* Background Sparkle Elements */}
      <div className="absolute top-1/4 left-1/10 w-3 h-3 text-gold-300 animate-sparkle" />
      <div className="absolute top-1/3 right-1/8 w-4.5 h-4.5 text-softpink-400 animate-sparkle [animation-delay:0.5s]" />
      <div className="absolute bottom-1/4 left-1/5 w-4 h-4 text-tealaccent-300 animate-sparkle [animation-delay:1s]" />
      <div className="absolute top-1/2 left-2/3 w-3.5 h-3.5 text-gold-400 animate-sparkle [animation-delay:1.5s]" />

      {/* Decorative Blob Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-softpink-100/50 blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-tealaccent-50/50 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-softpink-100 border border-softpink-200 text-softpink-600 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-gold-500 animate-spin-slow" />
              <span>Tulsa&apos;s Choice for Handmade Sparkle</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Handcrafted Sparkle,{" "}
              <span className="bg-gradient-to-r from-softpink-500 via-gold-500 to-tealaccent-500 bg-clip-text text-transparent">
                Personalized
              </span>{" "}
              Just for You!
            </h1>

            <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              From dazzling glitter tumblers and customized mugs to bespoke wooden signs, decals, and shirts. 
              Stacey turns your unique ideas into gorgeous, handcrafted masterpieces right here near Tulsa, Oklahoma.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://www.instagram.com/customizedbystacey/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-softpink-500 via-softpink-600 to-gold-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 text-base"
              >
                <Instagram className="w-5 h-5 animate-pulse" />
                <span>DM to Order Now</span>
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-softpink-50 border-2 border-softpink-200 text-foreground font-semibold px-8 py-4 rounded-full shadow-sm hover:shadow transition-all duration-200 text-base"
              >
                <span>Explore Creations</span>
                <ArrowRight className="w-4 h-4 text-tealaccent-500" />
              </a>
            </div>

            {/* Local Badge / Trust */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-sm text-foreground/70">
              <div className="flex items-center gap-1.5">
                <span className="text-gold-500 font-bold">★ 5.0</span>
                <span>Tulsa Reviews</span>
              </div>
              <div className="h-4 w-px bg-softpink-200" />
              <div className="flex items-center gap-1.5">
                <Gift className="w-4 h-4 text-tealaccent-500" />
                <span>100% Customized</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card Stack */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 animate-float">
              {/* Main Graphic Container */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-softpink-200 via-gold-100 to-tealaccent-200 p-1.5 shadow-2xl">
                <div className="w-full h-full rounded-2.5xl bg-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                  
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-dot-pattern opacity-40" />

                  {/* Sparkle sparkles */}
                  <Sparkles className="w-12 h-12 text-gold-500 animate-sparkle absolute top-6 right-6" />
                  <Sparkles className="w-8 h-8 text-softpink-400 animate-sparkle absolute bottom-8 left-8 [animation-delay:0.75s]" />

                  {/* Circle Accent */}
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-softpink-100/70 flex items-center justify-center mb-6 border border-softpink-200 relative">
                    <Gift className="w-14 h-14 sm:w-16 sm:h-16 text-softpink-500" />
                    <div className="absolute -bottom-1 -right-1 bg-gold-500 text-white rounded-full p-2 shadow-md">
                      <Sparkles className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground z-10">
                    Handmade with Love
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/75 mt-2 max-w-xs z-10">
                    Custom tumblers, signs, apparel & decals, crafted one at a time for your perfect moments.
                  </p>
                </div>
              </div>

              {/* Floating Badge 1 - Tumblers */}
              <div className="absolute -top-4 -left-6 sm:-left-12 bg-white rounded-2xl shadow-xl border border-softpink-100 p-3 sm:p-4 flex items-center gap-3 animate-pulse-slow">
                <div className="bg-gold-100 p-2 rounded-xl text-gold-600 font-bold text-sm">
                  ✨
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Glitter Tumblers</p>
                  <p className="text-[10px] text-foreground/60">Stacey&apos;s Specialty</p>
                </div>
              </div>

              {/* Floating Badge 2 - Star Rating */}
              <div className="absolute -bottom-4 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl border border-tealaccent-100 p-3 sm:p-4 flex items-center gap-3">
                <div className="bg-tealaccent-50 p-2 rounded-xl text-tealaccent-600">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Premium Quality</p>
                  <p className="text-[10px] text-tealaccent-600 font-semibold">5.0 Star Rated</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
