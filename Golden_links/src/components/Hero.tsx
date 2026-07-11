"use client";

import React from "react";
import { Sparkles, Calendar, Instagram } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_jewelry.png"
          alt="Permanent jewelry welding studio close up"
          fill
          priority
          className="object-cover object-center opacity-40 scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          sizes="100vw"
        />
        {/* Gradients to blend into background */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent" />
        <div className="absolute inset-0 bg-radial-vignette" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-primary/30 bg-gold-primary/5 backdrop-blur-md mb-6 animate-fade-in">
          <div className="flex text-gold-primary">
            {"★★★★★".split("").map((star, idx) => (
              <span key={idx} className="text-xs">★</span>
            ))}
          </div>
          <span className="text-xs font-semibold tracking-widest text-gold-champagne uppercase">
            Boise's Premier 5.0 Star Studio
          </span>
        </div>

        {/* Taglines */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
          A Bond That Lasts.
          <span className="block mt-2 font-sans font-light tracking-wide text-3xl sm:text-5xl md:text-6xl text-gold-champagne">
            Welded <span className="font-serif italic font-normal gold-gradient-text">Permanent</span> Jewelry
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Experience Boise's original custom-fit jewelry studio inside Boise Town Square Mall. Clasp-free, hypoallergenic, and micro-welded to perfectly fit your style.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase bg-gold-primary text-luxury-black hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            <Calendar className="h-4 w-4" />
            Book Appointment
          </a>
          <a
            href="https://instagram.com/goldenlinks.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-gold-primary transition-all duration-300"
          >
            <Instagram className="h-4 w-4 text-gold-primary" />
            Follow Instagram
          </a>
        </div>

        {/* Micro-Features Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-8 border-t border-white/5 max-w-3xl mx-auto">
          {[
            { label: "Custom Fit", desc: "Sized to perfection" },
            { label: "Tarnish Free", desc: "Shines forever" },
            { label: "100% Clasp-Free", desc: "Micro-welded bond" },
            { label: "Hypoallergenic", desc: "Safe for sensitive skin" },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-xs font-semibold tracking-widest text-gold-primary uppercase mb-1">
                {item.label}
              </div>
              <div className="text-2xs text-gray-400 font-light">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Shimmering gold sparklers */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-gold-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gold-primary/10 rounded-full blur-3xl animate-pulse" />
    </section>
  );
}
