import React from "react";
import { Sparkles, Coffee, Home, Sticker, Shirt, Gift } from "lucide-react";

export default function Services() {
  const products = [
    {
      title: "Glitter Tumblers",
      description: "Our signature double-walled, vacuum-insulated stainless steel tumblers coated in premium ultra-fine glitter and sealed with glass-like epoxy.",
      icon: Sparkles,
      color: "from-gold-300 to-gold-500",
      accent: "text-gold-600",
      bgLight: "bg-gold-50",
      badge: "Best Seller",
    },
    {
      title: "Personalized Mugs & Cups",
      description: "Monogrammed mugs, custom glass cups, and thematic drinkware. Perfect for morning coffees, office desks, or personalized gifts.",
      icon: Coffee,
      color: "from-softpink-400 to-softpink-500",
      accent: "text-softpink-600",
      bgLight: "bg-softpink-50",
      badge: "Cute & Daily",
    },
    {
      title: "Wooden Signs",
      description: "Hand-painted, rustic-chic, and modern wooden signs. Beautifully customized for entryways, weddings, nurseries, and home decor.",
      icon: Home,
      color: "from-tealaccent-400 to-tealaccent-600",
      accent: "text-tealaccent-600",
      bgLight: "bg-tealaccent-50",
      badge: "Home Decor",
    },
    {
      title: "Wall & Car Decals",
      description: "High-quality, weather-resistant vinyl decals. Personalize your car windows, laptops, or walls with custom names, logos, or quotes.",
      icon: Sticker,
      color: "from-gold-400 to-tealaccent-400",
      accent: "text-tealaccent-700",
      bgLight: "bg-tealaccent-50/50",
      badge: "Vibrant Vinyl",
    },
    {
      title: "Custom Shirts",
      description: "Bespoke t-shirts, hoodies, and matching family sets using premium vinyl or high-definition sublimation printing for long-lasting wear.",
      icon: Shirt,
      color: "from-softpink-500 to-gold-400",
      accent: "text-softpink-600",
      bgLight: "bg-softpink-50/50",
      badge: "Custom Apparel",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-white relative">
      {/* Sparkles background */}
      <div className="absolute top-10 left-10 w-2 h-2 text-softpink-300 animate-sparkle" />
      <div className="absolute bottom-10 right-10 w-3 h-3 text-gold-300 animate-sparkle [animation-delay:1s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-softpink-500 to-gold-500 bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 mt-4 leading-relaxed">
            Everything is crafted custom from scratch, ensuring that your personalization fits perfectly. 
            Choose from our popular categories or request a completely new idea!
          </p>
        </div>

        {/* Services/Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="group relative rounded-2xl border border-softpink-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl custom-card-shadow overflow-hidden flex flex-col justify-between"
              >
                {/* Accent Color Band */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${product.color}`} />

                <div>
                  {/* Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl ${product.bgLight} ${product.accent} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {product.badge && (
                      <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full ${product.bgLight} ${product.accent}`}>
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-3 group-hover:text-softpink-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="mt-8 pt-4 border-t border-softpink-50/50 flex items-center justify-between">
                  <span className="text-xs uppercase font-semibold text-tealaccent-600 tracking-wider group-hover:underline">
                    Get custom pricing
                  </span>
                  <Gift className="w-4 h-4 text-gold-500 transition-transform duration-300 group-hover:rotate-12" />
                </div>
              </div>
            );
          })}

          {/* Custom Creation Card */}
          <div className="group relative rounded-2xl border-2 border-dashed border-softpink-200 bg-softpink-50/20 p-8 transition-all duration-300 hover:border-softpink-400 hover:bg-softpink-50/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-gold-100 text-gold-600">
                  <Sparkles className="w-6 h-6 animate-sparkle" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-gold-100 text-gold-600">
                  Unlimited
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3 text-gold-700">
                Your Idea Here!
              </h3>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
                Have a unique design or a product idea not listed? Stacey loves experimental crafts and custom requests. 
                Share your vision, and let&apos;s craft a bespoke masterpiece together.
              </p>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="https://www.instagram.com/customizedbystacey/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-softpink-500 to-gold-500 text-white font-bold px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 text-sm"
              >
                <span>Message Stacey</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
