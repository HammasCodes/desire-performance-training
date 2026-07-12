"use client";

import { useState } from "react";
import { Scissors, Flame, Sparkles, Gem, RefreshCw } from "lucide-react";

interface ServiceItem {
  name: string;
  price: string;
  duration: string;
  description: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  services: ServiceItem[];
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("hair");

  const categories: ServiceCategory[] = [
    {
      id: "hair",
      title: "Precision Haircuts",
      icon: Scissors,
      services: [
        {
          name: "Vyne Signature Haircut",
          price: "AED 90",
          duration: "40 Mins",
          description: "Personalized consultation, precision cut, scalp massage, hair wash, and professional blow-dry styling with premium pomade.",
        },
        {
          name: "Classic Gentleman's Cut",
          price: "AED 75",
          duration: "30 Mins",
          description: "Traditional scissor or clipper cut tailored to your head shape, completed with a clean neck shave and hot towel wipe.",
        },
        {
          name: "Buzz Cut & Fade",
          price: "AED 60",
          duration: "25 Mins",
          description: "Single guard all over or standard clipper fade on the sides. Finished with outline cleaning.",
        },
        {
          name: "Junior Grooming (Under 12)",
          price: "AED 50",
          duration: "30 Mins",
          description: "Stylish and friendly haircut tailored for the younger gentlemen.",
        }
      ]
    },
    {
      id: "beard",
      title: "Beard Styling",
      icon: Flame,
      services: [
        {
          name: "Vyne Beard Design",
          price: "AED 60",
          duration: "30 Mins",
          description: "Detailed beard shaping, clipper trim, straight razor edge lining, hot towel finish, and nourishing organic oil application.",
        },
        {
          name: "Classic Beard Trim",
          price: "AED 45",
          duration: "20 Mins",
          description: "Clipper trim to uniform length and outline cleanup, completed with refreshing beard balm.",
        },
        {
          name: "Razor Contour Lineup",
          price: "AED 35",
          duration: "15 Mins",
          description: "Cheek and neck lining using a traditional straight razor and clear shaving gel for razor-sharp borders.",
        }
      ]
    },
    {
      id: "shaves",
      title: "Hot Towel Shaves",
      icon: RefreshCw,
      services: [
        {
          name: "Traditional Hot Towel Shave",
          price: "AED 50",
          duration: "30 Mins",
          description: "Luxury straight razor shave, pre-shave essential oils, two steaming hot towels, rich lather, and a cooling after-shave massage.",
        },
        {
          name: "Vyne Royal Shave",
          price: "AED 80",
          duration: "45 Mins",
          description: "Our traditional shave combined with a charcoal face mask, under-eye revitalizing patches, and premium skin-nourishing moisturizers.",
        }
      ]
    },
    {
      id: "treatments",
      title: "Hair Treatments",
      icon: Sparkles,
      services: [
        {
          name: "Scalp Detox & Therapy",
          price: "AED 80",
          duration: "30 Mins",
          description: "Deep cleansing charcoal scrub, exfoliating wash, scalp stimulation massage, and strengthening leave-in tonic.",
        },
        {
          name: "Keratin Smooth Treatment",
          price: "AED 150",
          duration: "60 Mins",
          description: "Frizz-reduction and smoothing treatment that softens, adds shine, and makes thick hair highly manageable.",
        },
        {
          name: "Camouflage Hair Coloring",
          price: "AED 95",
          duration: "30 Mins",
          description: "Subtle, ammonia-free hair color blending to naturally cover gray hairs in just 10 minutes.",
        }
      ]
    },
    {
      id: "packages",
      title: "Grooming Packages",
      icon: Gem,
      services: [
        {
          name: "The Vyne Ritual (Executive Combo)",
          price: "AED 140",
          duration: "70 Mins",
          description: "Our signature precision haircut combined with detailed beard styling, finished with essential oil hot towel service.",
        },
        {
          name: "The Trend-Conscious VIP",
          price: "AED 220",
          duration: "95 Mins",
          description: "Signature Haircut + Beard Design + Royal Hot Towel Shave + Scalp Detox. The ultimate grooming experience.",
        },
        {
          name: "Father & Son Package",
          price: "AED 125",
          duration: "60 Mins",
          description: "Classic Gentleman's Cut for dad and a Junior Grooming session for the little gentleman.",
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-charcoal-light relative">
      {/* Decorative side lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[0.7rem] tracking-[0.3em] text-brand-gold font-semibold uppercase block mb-3">
            Our Menu
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide mb-4">
            PREMIUM GROOMING SERVICES
          </h2>
          <div className="w-20 h-[2px] bg-brand-gold mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Every service begins with a customized consultation to understand your personal style. We combine traditional techniques with modern style trends.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2.5 px-4 sm:px-6 py-3.5 rounded-sm font-sans text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 border ${
                  isActive
                    ? "bg-brand-green border-brand-gold text-brand-gold shadow-[0_4px_20px_rgba(197,168,128,0.1)]"
                    : "bg-brand-charcoal-dark/50 border-white/5 text-gray-400 hover:border-brand-gold/30 hover:text-white"
                }`}
              >
                <Icon size={16} className={isActive ? "text-brand-gold" : "text-gray-400"} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 min-h-[300px]">
          {categories
            .find((cat) => cat.id === activeCategory)
            ?.services.map((service, index) => (
              <div
                key={index}
                className="group bg-brand-charcoal border border-brand-gold/5 hover:border-brand-gold/30 p-6 sm:p-8 rounded-sm transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-white group-hover:text-brand-gold transition-colors duration-300 pr-4">
                      {service.name}
                    </h3>
                    <div className="text-right flex flex-col items-end">
                      <span className="font-sans font-bold text-brand-gold tracking-wider text-base sm:text-lg">
                        {service.price}
                      </span>
                      <span className="font-sans text-[0.65rem] text-gray-500 uppercase tracking-widest mt-0.5">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-brand-gold/5 flex items-center justify-between">
                  <span className="font-sans text-[0.65rem] text-brand-gold/60 uppercase tracking-widest">
                    Tailored Experience
                  </span>
                  <a
                    href="#contact"
                    className="font-sans text-xs tracking-widest uppercase text-white hover:text-brand-gold font-semibold transition-colors duration-300 flex items-center space-x-1.5"
                  >
                    <span>Book Service</span>
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            ))}
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-16 bg-brand-green/30 border border-brand-gold/10 p-6 rounded-sm max-w-4xl mx-auto">
          <p className="font-sans text-xs sm:text-sm text-gray-300 tracking-wider">
            💈 Custom styling requests, hair coloring consultation, or group booking packages? Direct Message us on{" "}
            <a 
              href="https://www.instagram.com/vynesalon/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-gold underline hover:text-brand-gold-light transition-colors"
            >
              Instagram DM @vynesalon
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
