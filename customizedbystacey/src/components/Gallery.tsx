import React from "react";
import { Instagram, Sparkles, Image as ImageIcon } from "lucide-react";

export default function Gallery() {
  const galleryItems = [
    {
      title: "Sparkly Glitter Tumbler",
      category: "Tumblers",
      image: "/images/glitter_tumbler.png",
      gradient: "from-gold-100 to-softpink-100",
    },
    {
      title: "Rustic Family Welcome Sign",
      category: "Wooden Signs",
      image: null,
      gradient: "from-tealaccent-100 via-tealaccent-50 to-gold-100",
      placeholderText: "🪵 Wood Carving & Hand-Painted",
    },
    {
      title: "Monogrammed Ceramic Mug",
      category: "Mugs & Cups",
      image: null,
      gradient: "from-softpink-100 via-white to-gold-100",
      placeholderText: "☕ Monogram Coffee Mug",
    },
    {
      title: "Botanical Decal Glass Cup",
      category: "Mugs & Cups",
      image: null,
      gradient: "from-tealaccent-100 via-white to-softpink-100",
      placeholderText: "🌿 Durable Vinyl Cup Wrap",
    },
    {
      title: "Family Matching Shirts",
      category: "Custom Shirts",
      image: null,
      gradient: "from-gold-100 via-softpink-50 to-softpink-100",
      placeholderText: "👕 Sublimated Family Tees",
    },
    {
      title: "Custom Laptop Decals",
      category: "Decals",
      image: null,
      gradient: "from-tealaccent-100 via-softpink-100 to-gold-100",
      placeholderText: "✨ Waterproof Vinyl Decals",
    },
  ];

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white relative">
      {/* Sparkles design */}
      <div className="absolute top-20 right-12 w-3 h-3 text-gold-300 animate-sparkle" />
      <div className="absolute bottom-20 left-12 w-2.5 h-2.5 text-tealaccent-300 animate-sparkle [animation-delay:1.5s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Creations{" "}
            <span className="bg-gradient-to-r from-softpink-500 via-gold-500 to-tealaccent-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 mt-4 leading-relaxed">
            Take a look at some of the personalized creations Stacey has crafted for customers near Tulsa. 
            Every design is unique!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <a
              key={item.title + idx}
              href="https://www.instagram.com/customizedbystacey/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-2xl overflow-hidden custom-card-shadow border border-softpink-100 bg-white aspect-square sm:aspect-[4/3] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Card Media */}
              {item.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                /* Fallback Graphic */
                <div className={`w-full h-full bg-gradient-to-tr ${item.gradient} flex flex-col items-center justify-center p-6 text-center relative`}>
                  <div className="absolute inset-0 bg-dot-pattern opacity-30" />
                  
                  <div className="w-12 h-12 rounded-full bg-white/70 flex items-center justify-center mb-3 border border-softpink-100">
                    <ImageIcon className="w-5 h-5 text-softpink-500" />
                  </div>
                  
                  <span className="text-xs uppercase font-bold tracking-wider text-tealaccent-600 bg-tealaccent-50/80 px-2.5 py-1 rounded-full border border-tealaccent-100/50 mb-2">
                    {item.category}
                  </span>
                  
                  <p className="text-sm font-semibold text-foreground/80">
                    {item.placeholderText}
                  </p>
                </div>
              )}

              {/* Hover overlay - See more on Instagram */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                  <div className="flex items-center gap-1.5 text-white/90 text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-sparkle" />
                    <span>{item.category}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white leading-tight">
                    {item.title}
                  </h4>
                  <div className="inline-flex items-center gap-1.5 text-softpink-300 font-semibold text-sm pt-2">
                    <Instagram className="w-4 h-4" />
                    <span>See more on Instagram</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* See more banner */}
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/customizedbystacey/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-softpink-50 to-gold-50 hover:from-softpink-100 hover:to-gold-100 border border-softpink-200 text-foreground/90 font-bold px-8 py-4 rounded-full shadow-sm hover:shadow transition-all duration-200"
          >
            <Instagram className="w-5 h-5 text-softpink-500" />
            <span>Follow @customizedbystacey for daily updates!</span>
          </a>
        </div>

      </div>
    </section>
  );
}
