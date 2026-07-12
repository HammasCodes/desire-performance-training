import React from "react";
import { Star, ShieldCheck, Heart, MapPin } from "lucide-react";

export default function TrustSignals() {
  const values = [
    {
      title: "5.0 Star Rating",
      description: "Loved by gift givers and craft lovers in the Tulsa metro area for exceptional quality and design.",
      icon: Star,
      color: "text-gold-500 fill-gold-500",
      bg: "bg-gold-50",
    },
    {
      title: "Personalized Attention",
      description: "No mass production here. Stacey works with you one-on-one to bring your specific vision to life.",
      icon: Heart,
      color: "text-softpink-500 fill-softpink-500",
      bg: "bg-softpink-50",
    },
    {
      title: "Premium Materials",
      description: "We use weather-resistant outdoor vinyl, ultra-fine glitters, and premium food-safe epoxy seals.",
      icon: ShieldCheck,
      color: "text-tealaccent-600",
      bg: "bg-tealaccent-50",
    },
  ];

  const testimonials = [
    {
      quote: "The glitter tumbler Stacey made for my daughter's graduation is absolutely stunning! The glitter is incredibly smooth, and the personalized name stencil is perfect. She hasn't stopped using it!",
      author: "Megan K.",
      location: "Broken Arrow, OK",
      stars: 5,
    },
    {
      quote: "I ordered a custom welcome sign for our home. Stacey was so helpful in choosing the colors and fonts to match our front porch. Excellent communication and fast pickup!",
      author: "David L.",
      location: "Jenks, OK",
      stars: 5,
    },
    {
      quote: "Stacey's decals are the only ones that actually last on my car through Oklahoma car washes! Highly recommend her decals and personalized coffee mugs.",
      author: "Sarah M.",
      location: "Tulsa, OK",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-softpink-50/20 relative">
      {/* Decorative floating dots */}
      <div className="absolute top-1/3 left-10 w-2 h-2 text-tealaccent-300 animate-sparkle" />
      <div className="absolute bottom-1/3 right-10 w-2.5 h-2.5 text-gold-300 animate-sparkle [animation-delay:0.5s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 sm:mb-24">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="bg-white border border-softpink-100/80 rounded-2xl p-8 flex flex-col items-center text-center custom-card-shadow transition-transform duration-300 hover:-translate-y-1"
              >
                <div className={`p-4 rounded-full ${val.bg} ${val.color} mb-5`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonials Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 text-gold-500 font-bold text-sm tracking-wider uppercase mb-2">
            <Star className="w-4 h-4 fill-gold-500 text-gold-500 animate-pulse" />
            <Star className="w-4 h-4 fill-gold-500 text-gold-500 animate-pulse" />
            <Star className="w-4 h-4 fill-gold-500 text-gold-500 animate-pulse" />
            <Star className="w-4 h-4 fill-gold-500 text-gold-500 animate-pulse" />
            <Star className="w-4 h-4 fill-gold-500 text-gold-500 animate-pulse" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Loved by Our Neighbors
          </h2>
          <p className="text-sm sm:text-base text-foreground/60 mt-2">
            See what customers around Tulsa are saying about Stacey&apos;s custom creations.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <div
              key={test.author + index}
              className="bg-white border border-softpink-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between custom-card-shadow relative"
            >
              {/* Quote bubble decor */}
              <div className="absolute top-4 right-6 text-5xl font-serif text-softpink-100 select-none">
                ”
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(test.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-sm text-foreground/80 italic leading-relaxed mb-6">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author details */}
              <div className="flex items-center gap-3 pt-4 border-t border-softpink-50">
                <div className="w-10 h-10 rounded-full bg-softpink-100 text-softpink-600 flex items-center justify-center font-bold text-sm shrink-0">
                  {test.author[0]}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-foreground">
                    {test.author}
                  </h4>
                  <div className="flex items-center gap-1 text-[10px] text-foreground/50 font-semibold">
                    <MapPin className="w-3 h-3 text-tealaccent-500" />
                    <span>{test.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
