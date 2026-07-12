import React from "react";
import { Sparkles, MessageSquare, Heart, CheckCircle2, ChevronRight, Gift } from "lucide-react";

export default function About() {
  const steps = [
    {
      step: "01",
      title: "Share Your Idea",
      description: "Send us a DM on Instagram with your design inspiration, name/text, favorite colors, or themes.",
      icon: MessageSquare,
      color: "bg-softpink-100 text-softpink-600",
    },
    {
      step: "02",
      title: "Stacey Crafts It",
      description: "Stacey personally selects the materials, custom-paints, glitters, and finishes your piece with utmost care.",
      icon: Heart,
      color: "bg-gold-100 text-gold-600",
    },
    {
      step: "03",
      title: "Receive & Love",
      description: "Get your customized creation hand-delivered locally in the Tulsa area or shipped directly to your door.",
      icon: Gift,
      color: "bg-tealaccent-100 text-tealaccent-600",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-softpink-50/30 relative">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] rounded-full bg-gold-50 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bio & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-20 sm:mb-28">
          
          {/* Visual element */}
          <div className="order-2 lg:order-1 relative flex justify-center">
            <div className="w-80 h-80 sm:w-[450px] sm:h-[450px] rounded-3xl overflow-hidden bg-gradient-to-tr from-softpink-300 via-gold-200 to-tealaccent-300 p-2 shadow-xl relative animate-float">
              <div className="w-full h-full bg-white rounded-2.5xl flex flex-col justify-center p-8 text-center relative">
                <div className="absolute inset-0 bg-dot-pattern opacity-40" />
                
                {/* Sparkles */}
                <Sparkles className="w-8 h-8 text-gold-500 animate-sparkle absolute top-8 left-8" />
                <Sparkles className="w-6 h-6 text-softpink-400 animate-sparkle absolute bottom-8 right-8 [animation-delay:1.2s]" />

                <div className="w-24 h-24 rounded-full bg-tealaccent-50 text-tealaccent-600 flex items-center justify-center mx-auto mb-6 border border-tealaccent-100">
                  <Sparkles className="w-10 h-10 animate-pulse" />
                </div>
                
                <h3 className="font-serif text-2xl font-bold mb-3 bg-gradient-to-r from-softpink-600 to-gold-600 bg-clip-text text-transparent">
                  Stacey&apos;s Studio
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed max-w-sm mx-auto">
                  &ldquo;Every custom piece is a tiny piece of art. I pour my heart and lots of sparkle into everything I make, ensuring your gifts are cherished forever.&rdquo;
                </p>
                <div className="mt-4 font-serif text-sm font-semibold italic text-gold-600">
                  — Stacey, Owner & Creator
                </div>
              </div>
            </div>
          </div>

          {/* Bio text content */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tealaccent-50 border border-tealaccent-100 text-tealaccent-700 text-xs sm:text-sm font-semibold tracking-wide">
              <span>Meet the Creator</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Turns Your Ideas Into a{" "}
              <span className="bg-gradient-to-r from-gold-500 to-tealaccent-500 bg-clip-text text-transparent">
                Masterpiece
              </span>
            </h2>

            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              Based in the beautiful Tulsa metro area, Stacey&apos;s Custom Creations is born out of a love for handmade, personal details. 
              We believe that generic gifts just don&apos;t tell the story. That&apos;s why Stacey provides individualized, 1-on-1 attention to every order.
            </p>

            <ul className="space-y-4">
              {[
                "100% Handcrafted locally in Oklahoma",
                "High-quality materials designed to last (no peeling stickers!)",
                "Customizations tailored exactly to your design preference",
                "Friendly 1-on-1 collaboration via direct messaging",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm sm:text-base text-foreground/80">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3-Step Process Headline */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
            Ordering is Easy as{" "}
            <span className="bg-gradient-to-r from-softpink-500 to-gold-500 bg-clip-text text-transparent">
              1, 2, 3!
            </span>
          </h3>
          <p className="text-sm sm:text-base text-foreground/60 mt-2">
            No complex web forms or confusing checkouts. Send Stacey a DM and let&apos;s get started.
          </p>
        </div>

        {/* 3-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-softpink-200 -translate-y-8 -z-10" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-softpink-100 rounded-2xl p-8 text-center custom-card-shadow relative transition-all duration-300 hover:-translate-y-1"
              >
                {/* Step badge */}
                <div className="absolute top-4 right-6 font-mono text-3xl font-black text-softpink-100 select-none">
                  {item.step}
                </div>

                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h4 className="font-serif text-lg sm:text-xl font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                  {item.description}
                </p>

                {index < 2 && (
                  <div className="md:hidden flex justify-center mt-6 text-softpink-300">
                    <ChevronRight className="w-5 h-5 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
