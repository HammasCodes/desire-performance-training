"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Compass, Users, CheckCircle } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Compass,
      title: "Boise Town Square Mall",
      desc: "Conveniently located for quick stops, date nights, or a fun addition to your shopping trip.",
    },
    {
      icon: Users,
      title: "Appointments & Walk-ins",
      desc: "Reserve a dedicated slot for groups and special occasions, or just drop by whenever you're in the mall.",
    },
    {
      icon: Sparkles,
      title: "Boise's Original Studio",
      desc: "Welded by certified technicians using state-of-the-art precision jewelry micro-welders.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-luxury-charcoal relative overflow-hidden">
      {/* Decorative background grid/gradients */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl" />
      <div className="absolute left-10 top-10 w-48 h-48 bg-white/2 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-gold-primary/30 to-gold-champagne/10 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[3/4] w-full rounded-2xl overflow-hidden border border-gold-primary/20">
              <Image
                src="/studio_vibe.png"
                alt="Golden Links Permanent Jewelry Studio Interior in Boise Mall"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel border border-gold-primary/30 p-4 rounded-xl text-center">
                <span className="text-2xs font-bold tracking-widest text-gold-primary uppercase block">
                  Location Status
                </span>
                <span className="text-sm font-semibold text-white mt-1 block">
                  Now Open inside Boise Town Square Mall
                </span>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold tracking-widest text-gold-primary uppercase block mb-3">
              The Golden Links Story
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-white mb-6 leading-tight">
              Boise's Premier Clasp-Free Jewelry Experience
            </h2>
            <div className="w-12 h-0.5 bg-gold-primary mb-8" />
            
            <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed mb-8">
              At Golden Links, we believe jewelry should be effortless, elegant, and uniquely yours. Our studio is dedicated to providing high-quality, custom-fit welded jewelry that becomes a permanent part of your daily style. 
            </p>
            <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed mb-10">
              Perfect for marking special milestones, celebrating friendships, sweethearts, mothers and daughters, or simply treating yourself. We make the welding process fun, safe, and memorable. Stop in while shopping at the Boise Town Square Mall—our quick 15-minute sessions make it a breeze to add a tarnish-free sparkle to your day.
            </p>

            {/* Core Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="glass-panel p-5 rounded-xl border border-white/5 flex flex-col items-start text-left">
                    <div className="p-2 bg-gold-primary/10 rounded-lg border border-gold-primary/20 text-gold-primary mb-3">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-sm font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-2xs sm:text-xs text-gray-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
