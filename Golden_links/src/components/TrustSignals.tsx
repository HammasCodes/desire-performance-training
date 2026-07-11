"use client";

import React from "react";
import { Star, Shield, Award, Users, Smile } from "lucide-react";

export default function TrustSignals() {
  const reviews = [
    {
      name: "Ashley K.",
      location: "Boise, ID",
      rating: 5,
      date: "2 weeks ago",
      text: "Got matching permanent bracelets with my best friend. The studio is beautiful, the techs are so sweet, and the welds look flawless. It's been two months and my gold-filled chain looks just as shiny as day one! Will definitely be back for an anklet.",
    },
    {
      name: "Marcus T.",
      location: "Meridian, ID",
      rating: 5,
      date: "1 month ago",
      text: "Super cool experience. I was looking for a minimalist stainless steel chain. They custom fit it perfectly. No clasp to mess with, very clean weld. Convenient location inside the mall makes it easy to stop in.",
    },
    {
      name: "Sarah L.",
      location: "Boise, ID",
      rating: 5,
      date: "3 days ago",
      text: "Felt so premium! Walked in during a shopping trip. They measured my wrist, explained the metals (I chose 14k gold-filled), and welded it in 10 minutes. Safe, quick, and beautiful. 5 stars all the way!",
    },
  ];

  const stats = [
    { number: "5.0", label: "Google Rating", icon: Star },
    { number: "10,000+", label: "Permanent Welds", icon: Smile },
    { number: "100%", label: "Tarnish-Free Metals", icon: Shield },
    { number: "15k+", label: "Social Followers", icon: Users },
  ];

  return (
    <section className="py-24 bg-luxury-charcoal relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Statistics Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 pb-12 border-b border-white/5">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div key={idx} className="text-center group">
                <div className="inline-flex p-3 bg-gold-primary/5 rounded-full border border-gold-primary/10 text-gold-primary mb-4 group-hover:bg-gold-primary group-hover:text-luxury-black transition-all duration-300">
                  <IconComp className="h-5 w-5" />
                </div>
                <div className="font-serif text-3xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-2xs sm:text-xs font-medium uppercase tracking-widest text-gold-champagne">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-gold-primary uppercase block mb-3">
            Client Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-white mb-4">
            Loved By Thousands in Boise
          </h2>
          <div className="w-16 h-0.5 bg-gold-primary mx-auto mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto font-light text-sm sm:text-base">
            See what our clients say about their permanent jewelry experience at our Boise Town Square Mall studio.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col justify-between"
            >
              <div>
                {/* Stars and verified tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-gold-primary gap-1">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-3xs font-semibold uppercase tracking-widest text-gold-primary bg-gold-primary/10 px-2 py-0.5 rounded-md border border-gold-primary/20">
                    Verified Weld
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-white/5 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">{rev.name}</h4>
                  <span className="text-3xs text-gray-500 font-light block">{rev.location}</span>
                </div>
                <span className="text-3xs text-gray-500">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Badges Row */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-8 sm:gap-16 border-t border-white/5 pt-16">
          {[
            { text: "Tarnish-Free Guarantee", icon: Shield },
            { text: "Lifetime Weld Warranty", icon: Award },
            { text: "Safe Precision Lasers", icon: Star },
          ].map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div key={idx} className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-gold-primary shrink-0" />
                <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">
                  {badge.text}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
