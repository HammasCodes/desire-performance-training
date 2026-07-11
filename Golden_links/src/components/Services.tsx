"use client";

import React, { useState } from "react";
import { Sparkles, HelpCircle, Shield, RotateCcw, Heart } from "lucide-react";

export default function Services() {
  const [selectedMaterial, setSelectedMaterial] = useState("gold");

  const services = [
    {
      title: "Permanent Bracelets",
      desc: "Our most popular offering. A delicate chain welded around your wrist for a daily sparkle that never comes off.",
      price: "From $55",
      time: "15 min session",
      popular: true,
    },
    {
      title: "Permanent Anklets",
      desc: "Perfect for Boise summers. A tarnish-free, micro-welded anklet that looks stunning in heels, sneakers, or barefoot.",
      price: "From $65",
      time: "15 min session",
      popular: false,
    },
    {
      title: "Permanent Necklaces",
      desc: "An elegant, custom-measured necklace that sits perfectly on your collarbone. Say goodbye to struggling with clasps.",
      price: "From $85",
      time: "20 min session",
      popular: false,
    },
    {
      title: "Permanent Rings",
      desc: "A dainty, custom-sized ring welded around your finger. Minimalist, stackable, and incredibly comfortable.",
      price: "From $35",
      time: "10 min session",
      popular: false,
    },
  ];

  const materials = [
    {
      id: "gold",
      name: "14k Gold-Filled",
      tagline: "The Premium Standard",
      description:
        "Gold-filled jewelry has a thick layer of solid 14k gold mechanically bonded to a brass core. It contains 100x more real gold than gold plating, making it highly tarnish-resistant and durable enough for everyday wear, showers, and sweat.",
      features: ["Won't tarnish, peel, or turn color", "Hypoallergenic & nickel-free", "Beautiful rich gold shine", "Fraction of solid gold cost"],
    },
    {
      id: "silver",
      name: "Sterling Silver (.925)",
      tagline: "Classic White Sheen",
      description:
        "Our high-quality .925 Sterling Silver provides a stunning bright white finish. While sterling silver can naturally oxidize over time when exposed to oxygen, wearing it constantly actually helps prevent tarnish by rubbing against skin oils. A quick wipe with a polishing cloth restores its shine instantly.",
      features: ["Premium precious metal", "Timeless cool silver aesthetic", "Highly recyclable & clean", "Restored to high-shine easily"],
    },
    {
      id: "steel",
      name: "Stainless Steel",
      tagline: "Ultimate Durability",
      description:
        "For those who live an active lifestyle or need maximum durability. Our medical-grade Stainless Steel is virtually indestructible. It is highly resistant to scratching, rusting, and chemical tarnishing, offering a darker metallic sheen.",
      features: ["Extremely scratch-resistant", "Will not rust or corrode", "Great budget-friendly option", "Industrial luxury look"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-luxury-black relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-gold-primary uppercase block mb-3">
            Custom-Fit Collection
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-white mb-4">
            Services & Materials
          </h2>
          <div className="w-16 h-0.5 bg-gold-primary mx-auto mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto font-light text-sm sm:text-base">
            Select your chain style, get custom-fit, and have it seamlessly welded in a flash. Walk out with a permanent spark.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between relative transition-all duration-300 ${
                service.popular ? "border-gold-primary/45 shadow-[0_0_20px_rgba(212,175,55,0.05)]" : ""
              }`}
            >
              {service.popular && (
                <span className="absolute -top-3 right-6 bg-gold-primary text-luxury-black text-2xs font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                  Popular
                </span>
              )}
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light mb-6 leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-4">
                <div>
                  <span className="text-2xs text-gray-500 uppercase tracking-widest block">Investment</span>
                  <span className="text-lg font-bold text-gold-champagne">{service.price}</span>
                </div>
                <span className="text-2xs font-medium text-gold-primary bg-gold-primary/10 px-2.5 py-1 rounded-full border border-gold-primary/10">
                  {service.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Material Selection Showcase */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-gold-primary/10 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">Our Premium Materials</h3>
            <p className="text-xs sm:text-sm text-gray-400">
              We source only the highest quality metals, perfect for clasp-free, everyday wear.
            </p>
          </div>

          {/* Material Tabs */}
          <div className="flex justify-center border-b border-white/10 mb-8 p-1 gap-2 sm:gap-4 overflow-x-auto">
            {materials.map((mat) => (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterial(mat.id)}
                className={`pb-3 text-xs sm:text-sm uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 relative px-4 ${
                  selectedMaterial === mat.id
                    ? "text-gold-primary"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {mat.name}
                {selectedMaterial === mat.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-primary rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {materials
            .filter((m) => m.id === selectedMaterial)
            .map((mat) => (
              <div key={mat.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in">
                <div>
                  <span className="text-2xs font-bold uppercase tracking-widest text-gold-primary bg-gold-primary/10 px-3 py-1 rounded-full">
                    {mat.tagline}
                  </span>
                  <h4 className="font-serif text-2xl font-semibold text-white mt-4 mb-4">
                    Why Choose {mat.name}?
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-6">
                    {mat.description}
                  </p>
                </div>

                <div className="bg-luxury-black/60 border border-white/5 rounded-2xl p-6 space-y-4">
                  <h5 className="text-xs font-semibold uppercase tracking-widest text-white border-b border-white/5 pb-2">
                    Key Features
                  </h5>
                  <ul className="space-y-3">
                    {mat.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Sparkles className="h-4 w-4 text-gold-primary shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-gray-300 font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>

        {/* Process Steps */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="font-serif text-2xl sm:text-3xl text-white">How It Works</h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">Three simple steps to your new permanent accessory</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Chain",
                desc: "Browse our beautiful collection of 14k gold-filled, sterling silver, and steel chains of varying thicknesses and link styles.",
                icon: Heart,
              },
              {
                step: "02",
                title: "Custom Sized Fit",
                desc: "We measure the chain around your wrist, ankle, collarbone, or finger for the absolute perfect, comfortable custom fit.",
                icon: Shield,
              },
              {
                step: "03",
                title: "The Magic Weld",
                desc: "With a quick, safe flash of light, we micro-weld the jump ring closed. Clasp-free, painless, and complete in seconds.",
                icon: RotateCcw,
              },
            ].map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={idx} className="relative glass-panel p-6 rounded-2xl text-center border-t-2 border-t-gold-primary/30">
                  <div className="absolute top-4 right-6 text-3xl font-serif font-black text-white/5 tracking-wider">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-gold-primary/10 rounded-full border border-gold-primary/20 flex items-center justify-center mx-auto mb-4">
                    <IconComp className="h-5 w-5 text-gold-primary" />
                  </div>
                  <h4 className="font-serif text-lg font-medium text-white mb-2">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
