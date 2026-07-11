"use client";

import React from "react";
import Image from "next/image";
import { Instagram, ArrowUpRight } from "lucide-react";

export default function Gallery() {
  const chains = [
    {
      name: "The Classic Paperclip",
      material: "14k Gold-Filled & Sterling Silver",
      desc: "Modern, flat-link profile that catches light from all angles.",
      image: "/chain_selection.png",
      tag: "Best Seller",
    },
    {
      name: "The Dainty Rope",
      material: "14k Gold-Filled",
      desc: "Interlocking links that create a sparkling twisted helix.",
      image: "/hero_jewelry.png",
      tag: "Elegant",
    },
    {
      name: "The Sleek Figaro",
      material: "Stainless Steel & Silver",
      desc: "Patterned link configuration offering a timeless Italian design.",
      image: "/chain_selection.png",
      tag: "Unisex",
    },
    {
      name: "The Shimmering Saturn",
      material: "14k Gold-Filled",
      desc: "Delicate bead accents that add a textured playfulness to your wrist.",
      image: "/hero_jewelry.png",
      tag: "Detailed",
    },
    {
      name: "The Minimal Cable",
      material: "Sterling Silver & Gold-Filled",
      desc: "Classic oval links for a subtle, everyday whisper of gold.",
      image: "/chain_selection.png",
      tag: "Minimalist",
    },
    {
      name: "The Bold Curb",
      material: "Stainless Steel",
      desc: "Flat interlocking loops that sit flush against the skin.",
      image: "/hero_jewelry.png",
      tag: "Durable",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold-primary/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-gold-primary uppercase block mb-3">
            The Chain Vault
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-white mb-4">
            Our Chain Styles
          </h2>
          <div className="w-16 h-0.5 bg-gold-primary mx-auto mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto font-light text-sm sm:text-base">
            Take a look at some of our popular micro-welded chains. We feature rotating styles in solid weights.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {chains.map((chain, idx) => (
            <div
              key={idx}
              className="group relative bg-luxury-charcoal rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-gold-primary/30"
            >
              {/* Image box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={chain.image}
                  alt={`${chain.name} Permanent Chain`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-transparent to-transparent opacity-80" />
                
                {/* Popularity Badge */}
                <span className="absolute top-4 left-4 text-3xs font-bold tracking-widest uppercase bg-gold-primary/15 text-gold-champagne px-2.5 py-1 rounded-md border border-gold-primary/30 backdrop-blur-md">
                  {chain.tag}
                </span>
              </div>

              {/* Text detail */}
              <div className="p-6">
                <span className="text-3xs font-semibold uppercase tracking-widest text-gold-primary">
                  {chain.material}
                </span>
                <h3 className="font-serif text-lg font-medium text-white mt-1 mb-2">
                  {chain.name}
                </h3>
                <p className="text-2xs sm:text-xs text-gray-400 font-light leading-relaxed">
                  {chain.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See Full Collection CTA Banner */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-gold-primary/10 max-w-4xl mx-auto text-center relative overflow-hidden group">
          {/* Subtle light effect on hover */}
          <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
          
          <Instagram className="h-10 w-10 text-gold-primary mx-auto mb-4 animate-bounce" />
          <h3 className="font-serif text-xl sm:text-3xl font-semibold text-white mb-3">
            See our full collection on Instagram
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto mb-8 font-light">
            We are constantly updating our vault with fresh charms, thick statement chains, and limited-edition silver & gold patterns. Follow our daily welds!
          </p>
          <a
            href="https://instagram.com/goldenlinks.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase bg-gold-primary text-luxury-black hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.25)]"
          >
            @goldenlinks.studio
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
