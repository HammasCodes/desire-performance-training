"use client";

import React, { useState } from "react";

// Inline SVG Icons for premium styling and zero load delay
const StarIcon = ({ className = "w-5 h-5 text-gold-dark" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const ShieldCheckIcon = ({ className = "w-6 h-6 text-mint-dark" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const SparklesIcon = ({ className = "w-6 h-6 text-pastel-pink-dark" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const SmileIcon = ({ className = "w-6 h-6 text-gold-dark" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckIcon = ({ className = "w-5 h-5 text-mint-dark" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Package Calculator State
  const [selectedPackage, setSelectedPackage] = useState("classic");
  const [addons, setAddons] = useState({
    bounceHouse: false,
    balloonArch: false,
    customDecal: false,
  });
  const [setupSurface, setSetupSurface] = useState("indoor");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    location: "shreveport",
    message: "",
  });

  const packages = {
    mini: {
      name: "Toddler Oasis (Mini)",
      price: 250,
      description: "Perfect for smaller spaces & cozy living room parties. Ideal for 1-5 children.",
      items: ["4ft x 4ft Pastel Ball Pit", "1000+ Premium Crush-Proof Balls", "Mini Soft Foam Arch & Wedges", "Safe Puzzle Foam Flooring", "Soft Boundary Gates"],
    },
    classic: {
      name: "Geaux Play Palace (Standard)",
      price: 350,
      description: "Our most popular setup! Loaded with climbs, tunnels, and animal hoppers.",
      items: ["6ft x 6ft Luxury Ball Pit", "2000+ Coordinating Pastel Balls", "Foam Climb wedge & Soft Tunnel", "2 Fun Soft Animal Hoppers", "Soft Stepping Blocks", "Safe Premium Foam Mat Flooring"],
    },
    deluxe: {
      name: "Adventure Kingdom (Deluxe)",
      price: 480,
      description: "The ultimate soft play experience. Keeps up to 15 toddlers safely entertained for hours.",
      items: ["8ft x 8ft Giant Ball Pit", "3000+ Luxury Pastel Balls", "Double Foam Slide & Wave Climber", "Deluxe Soft Climbing Blocks", "3 Animal Hoppers & Safe Tunnel", "Premium Extra Thick Flooring", "Personalized Custom Entry Gate Sign"],
    },
  };

  const addonPrices = {
    bounceHouse: 120,
    balloonArch: 90,
    customDecal: 75,
  };

  const calculateTotal = () => {
    let total = packages[selectedPackage as keyof typeof packages].price;
    if (addons.bounceHouse) total += addonPrices.bounceHouse;
    if (addons.balloonArch) total += addonPrices.balloonArch;
    if (addons.customDecal) total += addonPrices.customDecal;
    if (setupSurface === "outdoor") total += 30; // Clean surcharge for grass/concrete setup
    return total;
  };

  const handleCheckboxChange = (addonKey: "bounceHouse" | "balloonArch" | "customDecal") => {
    setAddons((prev) => ({ ...prev, [addonKey]: !prev[addonKey] }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call/processing
    setFormSubmitted(true);
  };

  const handleBookNowClick = (pkgKey: string) => {
    setSelectedPackage(pkgKey);
    const element = document.getElementById("book-now");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqData = [
    {
      q: "What age range is soft play designed for?",
      a: "Our soft play setups are specifically designed for toddlers aged 0 to 5 years old. This ensures everything is soft, low to the ground, and safe for early walkers and crawlers.",
    },
    {
      q: "How do you sanitize and clean the equipment?",
      a: "Safety and cleanliness are our top priorities. Every ball pit, foam block, and mat is vacuumed, hand-scrubbed, and sanitized with child-safe, FDA-approved, non-toxic cleaner before and after every single rental. We guarantee a spotless setup!",
    },
    {
      q: "Where do you deliver and set up?",
      a: "We proudly serve Shreveport, Bossier City, and the surrounding areas. We can set up indoors (living rooms, venues, daycares, church halls) or outdoors on level grass or concrete. Outdoor setups include heavy-duty under-mats to protect the equipment.",
    },
    {
      q: "What is your bad weather policy for outdoor setups?",
      a: "Since toddler soft play equipment cannot get wet or be exposed to high winds, we require an indoor alternative space (like a garage, living room, or venue) if rain or high winds are forecast. We do not charge reschedule fees if bad weather forces a date change at least 48 hours in advance.",
    },
  ];

  return (
    <div className="bg-cream min-h-screen font-sans bg-bubbles pb-12 selection:bg-pastel-pink">
      {/* Dynamic Announcement Bar */}
      <div className="bg-gradient-to-r from-pastel-pink to-mint text-charcoal text-center py-2 px-4 text-xs sm:text-sm font-semibold tracking-wide shadow-sm flex justify-center items-center gap-2">
        <span className="animate-pulse-subtle">✨</span>
        Now booking for summer birthdays, daycares, and weekend events in Shreveport & Bossier!
        <span className="animate-pulse-subtle">✨</span>
      </div>

      {/* Sticky Header & Nav */}
      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-pastel-pink/20 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group focus:outline-none">
            {/* Playful Whimsical Logo Symbol */}
            <div className="w-10 h-10 rounded-full bg-pastel-pink flex items-center justify-center text-xl font-bold shadow-md shadow-pastel-pink/30 group-hover:scale-110 transition-transform duration-300">
              🎈
            </div>
            <span className="font-fredoka text-xl sm:text-2xl font-bold text-charcoal tracking-tight">
              Happy Geaux <span className="text-pastel-pink-dark">Play</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-base font-semibold text-charcoal">
            <a href="#services" className="hover:text-pastel-pink-dark transition-colors">Services</a>
            <a href="#about" className="hover:text-pastel-pink-dark transition-colors">About Us</a>
            <a href="#safety" className="hover:text-pastel-pink-dark transition-colors">Sanitization</a>
            <a href="#faq" className="hover:text-pastel-pink-dark transition-colors">FAQs</a>
            <a href="#contact" className="hover:text-pastel-pink-dark transition-colors">Contact</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#book-now"
              className="bg-pastel-pink-dark hover:bg-pastel-pink text-charcoal font-bold px-6 py-2.5 rounded-full shadow-md shadow-pastel-pink/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-pink-dark/50"
            >
              Book Your Party 🎉
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-charcoal hover:bg-pastel-pink/20 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cream border-b border-pastel-pink/20 py-4 px-6 flex flex-col gap-4 animate-fade-in shadow-inner">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-charcoal hover:text-pastel-pink-dark transition-colors py-1"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-charcoal hover:text-pastel-pink-dark transition-colors py-1"
            >
              About Us
            </a>
            <a
              href="#safety"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-charcoal hover:text-pastel-pink-dark transition-colors py-1"
            >
              Sanitization
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-charcoal hover:text-pastel-pink-dark transition-colors py-1"
            >
              FAQs
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-charcoal hover:text-pastel-pink-dark transition-colors py-1"
            >
              Contact
            </a>
            <a
              href="#book-now"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-pastel-pink-dark text-charcoal text-center font-bold py-3 rounded-full shadow-md shadow-pastel-pink/30 hover:bg-pastel-pink transition-colors mt-2"
            >
              Book Your Party 🎉
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Serving Badge */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-mint-light border border-mint text-charcoal text-xs sm:text-sm font-bold mb-6 animate-bounce-gentle">
                <span className="text-base">📍</span>
                Serving Shreveport, Bossier City & Surrounding Areas
              </div>

              {/* Tagline */}
              <h1 className="font-fredoka text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal leading-tight tracking-tight max-w-2xl sm:max-w-3xl">
                Bringing <span className="text-pastel-pink-dark relative inline-block">Joy & Safe<span className="absolute bottom-1 left-0 w-full h-3 bg-pastel-pink/40 -z-10 rounded-full"></span></span> Soft Play to Any Event!
              </h1>

              {/* Subheading */}
              <p className="mt-6 text-lg sm:text-xl text-charcoal/80 max-w-xl font-medium leading-relaxed">
                Specializing in gorgeous, toddler-friendly play setups for ages <strong className="text-pastel-pink-dark font-extrabold">0 to 5</strong>. Fully sanitized, fully insured, and designed to match your chic aesthetic.
              </p>

              {/* Hero CTA buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="#book-now"
                  className="bg-pastel-pink-dark hover:bg-pastel-pink text-charcoal font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-pastel-pink/40 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-center focus:outline-none focus:ring-4 focus:ring-pastel-pink-dark/30 animate-pulse-subtle"
                >
                  Book Your Party Now ✨
                </a>
                <a
                  href="#services"
                  className="bg-white border-2 border-pastel-pink text-charcoal hover:bg-pastel-pink-dark hover:border-pastel-pink-dark font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 text-center focus:outline-none"
                >
                  Explore Play Zones
                </a>
              </div>

              {/* Simple reviews summary */}
              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-1 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full shadow-sm">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                  <span className="font-bold text-sm text-charcoal ml-1">5.0 Star Rating</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-charcoal/70">
                  <span>🛡️</span> Fully Insured & Bonded
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-charcoal/70">
                  <span>🧼</span> Meticulously Sanitized
                </div>
              </div>
            </div>

            {/* Whimsical Interactive Illustration (Playground Setup Mockup) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Decorative pastel circles behind */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-pastel-pink/30 blur-2xl -z-10 animate-float" />
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-mint/20 blur-2xl -z-10 animate-float" style={{ animationDelay: "2s" }} />

              {/* Styled SVG Representing a Cozy Premium Play Zone */}
              <div className="relative w-full max-w-sm sm:max-w-md bg-white/70 backdrop-blur rounded-3xl p-6 shadow-xl border border-pastel-pink/30 hover:scale-102 transition-transform duration-500">
                <svg className="w-full h-auto" viewBox="0 0 400 350" fill="none">
                  {/* Backdrop Wall */}
                  <rect x="30" y="30" width="340" height="290" rx="20" fill="#FFFDF9" />
                  {/* Sky/Grass scene on backdrop */}
                  <path d="M30 250 C 130 220, 270 280, 370 240 L 370 320 L 30 320 Z" fill="#E8F5E9" />
                  <path d="M30 180 C 100 150, 300 210, 370 160 L 370 320 L 30 320 Z" fill="#FFCCD5" opacity="0.4" />
                  
                  {/* Soft Fence */}
                  <rect x="50" y="220" width="10" height="70" rx="3" fill="#FFE066" />
                  <rect x="70" y="220" width="10" height="70" rx="3" fill="#FFE066" />
                  <rect x="90" y="220" width="10" height="70" rx="3" fill="#FFE066" />
                  <rect x="110" y="220" width="10" height="70" rx="3" fill="#FFE066" />
                  <rect x="50" y="240" width="70" height="10" rx="3" fill="#FFE066" />
                  <rect x="50" y="270" width="70" height="10" rx="3" fill="#FFE066" />

                  {/* Ball Pit */}
                  <ellipse cx="270" cy="260" rx="80" ry="40" fill="#E8F5E9" stroke="#B9F6CA" strokeWidth="4" />
                  {/* Balls inside */}
                  <circle cx="230" cy="255" r="10" fill="#FFCCD5" />
                  <circle cx="245" cy="250" r="10" fill="#FFE066" />
                  <circle cx="260" cy="245" r="10" fill="#B9F6CA" />
                  <circle cx="280" cy="248" r="10" fill="#FFCCD5" />
                  <circle cx="295" cy="253" r="10" fill="#FFE066" />
                  <circle cx="265" cy="265" r="10" fill="#FFCCD5" />
                  <circle cx="250" cy="262" r="10" fill="#B9F6CA" />
                  <circle cx="235" cy="268" r="10" fill="#FFE066" />
                  <circle cx="280" cy="265" r="10" fill="#B9F6CA" />
                  <circle cx="310" cy="260" r="10" fill="#FFCCD5" />

                  {/* Bubble Bounce House */}
                  <rect x="130" y="80" width="140" height="140" rx="30" fill="#FFCCD5" opacity="0.85" stroke="#FFA6C9" strokeWidth="4" />
                  <path d="M150 80 Q 200 40 250 80" fill="none" stroke="#FFA6C9" strokeWidth="4" />
                  <circle cx="200" cy="50" r="12" fill="#FFE066" />
                  {/* Door */}
                  <path d="M170 220 L 170 140 A 30 30 0 0 1 230 140 L 230 220 Z" fill="#FFFDF9" stroke="#FFA6C9" strokeWidth="3" />
                  
                  {/* Foam Slide & blocks */}
                  <rect x="50" y="290" width="300" height="20" rx="10" fill="#3A3A3A" opacity="0.1" />
                  <path d="M60 280 L 110 240 L 160 280 Z" fill="#FFE066" />
                  <rect x="100" y="250" width="30" height="30" rx="5" fill="#B9F6CA" />
                  
                  {/* Balloons Floating */}
                  <circle cx="330" cy="90" r="15" fill="#FFCCD5" />
                  <path d="M330 105 Q 335 120 330 135" fill="none" stroke="#3A3A3A" strokeWidth="1" />
                  <circle cx="350" cy="70" r="18" fill="#B9F6CA" />
                  <path d="M350 88 Q 345 105 350 120" fill="none" stroke="#3A3A3A" strokeWidth="1" />
                  <circle cx="315" cy="65" r="12" fill="#FFE066" />
                  <path d="M315 77 Q 320 95 315 110" fill="none" stroke="#3A3A3A" strokeWidth="1" />
                </svg>

                {/* Overlaid Playful Tag */}
                <div className="absolute -bottom-4 -right-4 bg-gold text-charcoal font-extrabold px-5 py-2.5 rounded-2xl shadow-lg border border-gold-dark text-xs sm:text-sm tracking-wider rotate-3">
                  ✨ SPECIALIST SETUPS ✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signal Strip */}
      <section className="bg-white/60 backdrop-blur py-8 border-y border-pastel-pink/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl mb-1">🌟</span>
              <h3 className="font-fredoka text-xl font-bold text-charcoal">5.0 Star Rated</h3>
              <p className="text-xs text-charcoal/60 mt-1">Parents love our attention to detail</p>
            </div>
            <div className="flex flex-col items-center border-l border-pastel-pink/20">
              <span className="text-3xl mb-1">🧼</span>
              <h3 className="font-fredoka text-xl font-bold text-charcoal">Meticulously Cleaned</h3>
              <p className="text-xs text-charcoal/60 mt-1">Disinfected before every single use</p>
            </div>
            <div className="flex flex-col items-center border-l border-pastel-pink/20">
              <span className="text-3xl mb-1">🛡️</span>
              <h3 className="font-fredoka text-xl font-bold text-charcoal">Fully Insured</h3>
              <p className="text-xs text-charcoal/60 mt-1">Licensed and insured for total peace of mind</p>
            </div>
            <div className="flex flex-col items-center border-l border-pastel-pink/20">
              <span className="text-3xl mb-1">🤗</span>
              <h3 className="font-fredoka text-xl font-bold text-charcoal">Stress-Free Booking</h3>
              <p className="text-xs text-charcoal/60 mt-1">We handle setup, clean-up & collection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-28 relative scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-pastel-pink-dark font-extrabold text-sm sm:text-base tracking-widest uppercase">What We Offer</span>
            <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal mt-3">
              Explore Our Fun Play Zones
            </h2>
            <div className="w-24 h-1.5 bg-pastel-pink mx-auto mt-4 rounded-full" />
            <p className="text-charcoal/70 font-semibold mt-4 text-base sm:text-lg">
              We design custom setups tailored for little explorers. Every element is crafted to encourage safe, active, and creative play.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {/* Service 1: Ball Pits */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pastel-pink/30 hover:border-pastel-pink shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-mint-light flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                🔮
              </div>
              <h3 className="font-fredoka text-xl sm:text-2xl font-extrabold text-charcoal">Dreamy Ball Pits</h3>
              <p className="text-charcoal/70 text-sm sm:text-base mt-3 leading-relaxed">
                Large, deep ball pits filled to the brim with high-quality, soft pastel balls. Designed with extra foam padding for maximum safety and endless diving fun.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs bg-mint-light text-charcoal font-semibold px-3 py-1 rounded-full border border-mint">Safe Foam Walls</span>
                <span className="text-xs bg-mint-light text-charcoal font-semibold px-3 py-1 rounded-full border border-mint">Crush-Proof Balls</span>
              </div>
            </div>

            {/* Service 2: Climbing Blocks & Mini Slides */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pastel-pink/30 hover:border-pastel-pink shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-pastel-pink flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                🧗
              </div>
              <h3 className="font-fredoka text-xl sm:text-2xl font-extrabold text-charcoal">Climbing blocks & Slides</h3>
              <p className="text-charcoal/70 text-sm sm:text-base mt-3 leading-relaxed">
                Foam tunnels, climbing arches, bridges, and gentle mini-slides that encourage gross motor skill development in baby and toddler age groups.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs bg-pastel-pink text-charcoal font-semibold px-3 py-1 rounded-full border border-pastel-pink-dark/20">Toddler Friendly</span>
                <span className="text-xs bg-pastel-pink text-charcoal font-semibold px-3 py-1 rounded-full border border-pastel-pink-dark/20">High Density Foam</span>
              </div>
            </div>

            {/* Service 3: Bounce House / Bubble House Upgrade */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pastel-pink/30 hover:border-pastel-pink shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gold/30 flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                🏰
              </div>
              <h3 className="font-fredoka text-xl sm:text-2xl font-extrabold text-charcoal">Bounce & Bubble Houses</h3>
              <p className="text-charcoal/70 text-sm sm:text-base mt-3 leading-relaxed">
                Inflatable toddler-safe bounce house upgrades and our signature Bubble House dome—a whirlwind of colorful flying balloons inside that kids adore.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs bg-gold/20 text-charcoal font-semibold px-3 py-1 rounded-full border border-gold-dark/30">Ultimate Upgrade</span>
                <span className="text-xs bg-gold/20 text-charcoal font-semibold px-3 py-1 rounded-full border border-gold-dark/30">Bubble Dome Fun</span>
              </div>
            </div>

            {/* Service 4: Balloon Arches */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pastel-pink/30 hover:border-pastel-pink shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-pastel-pink flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                🎈
              </div>
              <h3 className="font-fredoka text-xl sm:text-2xl font-extrabold text-charcoal">Chic Balloon Arches</h3>
              <p className="text-charcoal/70 text-sm sm:text-base mt-3 leading-relaxed">
                Stunning, customized pastel balloon garlands and organic structures that add height, color, and absolute charm to your party styling.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs bg-pastel-pink text-charcoal font-semibold px-3 py-1 rounded-full border border-pastel-pink-dark/20">Custom Colors</span>
                <span className="text-xs bg-pastel-pink text-charcoal font-semibold px-3 py-1 rounded-full border border-pastel-pink-dark/20">Organic Styling</span>
              </div>
            </div>

            {/* Service 5: Custom Decals & Backdrops */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pastel-pink/30 hover:border-pastel-pink shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-mint-light flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                ✨
              </div>
              <h3 className="font-fredoka text-xl sm:text-2xl font-extrabold text-charcoal">Decals & Backdrops</h3>
              <p className="text-charcoal/70 text-sm sm:text-base mt-3 leading-relaxed">
                Add a personal touch with customized vinyl decals (name or theme) applied directly to the ball pit, paired with beautiful backdrop panels.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs bg-mint-light text-charcoal font-semibold px-3 py-1 rounded-full border border-mint">Custom Lettering</span>
                <span className="text-xs bg-mint-light text-charcoal font-semibold px-3 py-1 rounded-full border border-mint">Theme Backdrop</span>
              </div>
            </div>

            {/* Service 6: Indoor and Outdoor Setups */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pastel-pink/30 hover:border-pastel-pink shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gold/30 fill-gold flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                🏡
              </div>
              <h3 className="font-fredoka text-xl sm:text-2xl font-extrabold text-charcoal">Indoor & Outdoor Setups</h3>
              <p className="text-charcoal/70 text-sm sm:text-base mt-3 leading-relaxed">
                Flexible layout options matching any space. From backyards and parks (using heavy-duty protective tarps) to living rooms, playrooms, and venues.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs bg-gold/20 text-charcoal font-semibold px-3 py-1 rounded-full border border-gold-dark/30">Heavy Tarps Included</span>
                <span className="text-xs bg-gold/20 text-charcoal font-semibold px-3 py-1 rounded-full border border-gold-dark/30">Flexible Sizes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Sanitization (Clean Hands, Happy Hearts) */}
      <section id="safety" className="py-16 sm:py-24 bg-white/60 backdrop-blur border-y border-pastel-pink/20 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Image Placeholder / Icon Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-mint-light/60 border border-mint p-8 sm:p-12 rounded-3xl text-center max-w-sm sm:max-w-md shadow-inner relative overflow-hidden">
                {/* Float elements inside */}
                <div className="absolute top-4 left-4 text-4xl opacity-20 animate-float">🧼</div>
                <div className="absolute bottom-8 right-6 text-4xl opacity-20 animate-float" style={{ animationDelay: "3s" }}>✨</div>
                
                <div className="inline-flex p-4 bg-white rounded-full text-mint-dark shadow-md mb-6">
                  <ShieldCheckIcon className="w-12 h-12" />
                </div>
                <h3 className="font-fredoka text-2xl font-extrabold text-charcoal">Our Clean Play Guarantee</h3>
                <p className="text-charcoal/80 text-sm sm:text-base mt-4 leading-relaxed">
                  As parents, we know you care about cleanliness. Every single ball, fence, mat, and blocks is vacuumed, hand-scrubbed, and deep sanitized before it reaches your home.
                </p>
                <div className="mt-6 flex items-center justify-center gap-1.5 text-mint-dark font-extrabold text-sm sm:text-base">
                  <span className="text-xl">✅</span> 100% Non-Toxic & Child-Safe Sanitizers
                </div>
              </div>
            </div>

            {/* Text Information */}
            <div className="lg:col-span-7">
              <span className="text-pastel-pink-dark font-extrabold text-sm sm:text-base tracking-widest uppercase">Safe & Supervised</span>
              <h2 className="font-fredoka text-3xl sm:text-4xl font-extrabold text-charcoal mt-3">
                How We Keep Your Little Ones Safe
              </h2>
              <div className="w-20 h-1.5 bg-mint mt-4 rounded-full" />
              
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pastel-pink flex items-center justify-center font-bold text-charcoal">
                    1
                  </div>
                  <div>
                    <h4 className="font-fredoka text-lg font-bold text-charcoal">Double Sanitization Process</h4>
                    <p className="text-sm sm:text-base text-charcoal/70 mt-1">
                      Equipment is disinfected thoroughly during teardown, and sanitized again immediately upon setup at your location.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-mint flex items-center justify-center font-bold text-charcoal">
                    2
                  </div>
                  <div>
                    <h4 className="font-fredoka text-lg font-bold text-charcoal">Non-Toxic Cleaners Only</h4>
                    <p className="text-sm sm:text-base text-charcoal/70 mt-1">
                      We use hospital-grade disinfectants that are entirely EPA-approved, non-toxic, bleach-free, and safe for child skin and mouth contact.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center font-bold text-charcoal">
                    3
                  </div>
                  <div>
                    <h4 className="font-fredoka text-lg font-bold text-charcoal">Thorough Quality Inspections</h4>
                    <p className="text-sm sm:text-base text-charcoal/70 mt-1">
                      We manually inspect every block, slide, and gate panel to verify there are no tears, loose parts, or hazards before setup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 sm:py-28 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Story Content */}
            <div className="lg:col-span-7">
              <span className="text-pastel-pink-dark font-extrabold text-sm sm:text-base tracking-widest uppercase">Our Story</span>
              <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal mt-3">
                About Happy Geaux Play LLC
              </h2>
              <div className="w-20 h-1.5 bg-pastel-pink mt-4 rounded-full" />
              
              <p className="text-charcoal/80 text-base sm:text-lg mt-6 leading-relaxed">
                Welcome! We are a locally-owned, family-run soft play party rental business serving families, daycares, and churches in **Shreveport** and **Bossier City, Louisiana**. 
              </p>
              
              <p className="text-charcoal/70 text-sm sm:text-base mt-4 leading-relaxed">
                Our business was born out of a desire to create clean, safe, and beautiful play spaces for toddlers. We specialize in setups designed specifically for ages **0 to 5**—a crucial age range where traditional bounce houses can be intimidating or unsafe for little ones.
              </p>

              <p className="text-charcoal/70 text-sm sm:text-base mt-4 leading-relaxed">
                Whether you are planning a **birthday party, baby shower, daycare event, or church gathering**, we aim to make your event stress-free. We deliver, set up the perfect play zone, inspect it, and then pack it all up when the party is over, leaving you free to enjoy the special memories.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white/80 p-4 rounded-2xl border border-pastel-pink/20">
                  <h4 className="font-fredoka text-lg font-bold text-pastel-pink-dark">Birthday Parties</h4>
                  <p className="text-xs text-charcoal/60 mt-1">Keep toddlers active, giggling, and safe for hours.</p>
                </div>
                <div className="bg-white/80 p-4 rounded-2xl border border-pastel-pink/20">
                  <h4 className="font-fredoka text-lg font-bold text-mint-dark">Daycare Events</h4>
                  <p className="text-xs text-charcoal/60 mt-1">Safe, sensory-friendly configurations for child learning.</p>
                </div>
                <div className="bg-white/80 p-4 rounded-2xl border border-pastel-pink/20">
                  <h4 className="font-fredoka text-lg font-bold text-gold-dark">Baby Showers</h4>
                  <p className="text-xs text-charcoal/60 mt-1">Chic layouts that blend perfectly with your decorations.</p>
                </div>
                <div className="bg-white/80 p-4 rounded-2xl border border-pastel-pink/20">
                  <h4 className="font-fredoka text-lg font-bold text-charcoal">Church Gatherings</h4>
                  <p className="text-xs text-charcoal/60 mt-1">A dedicated area for little ones during family events.</p>
                </div>
              </div>
            </div>

            {/* Whimsical Stamp Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-8 bg-pastel-pink/25 border-2 border-dashed border-pastel-pink-dark rounded-3xl max-w-sm text-center">
                <div className="absolute -top-6 -right-4 bg-gold text-charcoal font-bold text-xs px-3 py-1.5 rounded-full shadow-md rotate-12">
                  Ages 0-5 Specialists
                </div>
                <span className="text-5xl">👶🍼</span>
                <h3 className="font-fredoka text-xl font-extrabold text-charcoal mt-4">Why Soft Play?</h3>
                <p className="text-charcoal/70 text-sm mt-2 leading-relaxed">
                  Unlike traditional metal play frames or massive bounce houses, our soft play foam allows toddlers to crawl, climb, fall, and slide in a fully padded, low-to-the-ground environment. It encourages exploration and builds physical confidence without the bumps and bruises!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages / Pricing & Interactive Booking Calculator */}
      <section id="book-now" className="py-20 sm:py-28 bg-white/60 backdrop-blur border-y border-pastel-pink/20 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-pastel-pink-dark font-extrabold text-sm sm:text-base tracking-widest uppercase">Plan Your Event</span>
            <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal mt-3">
              Build Your Play Zone & Estimate
            </h2>
            <div className="w-24 h-1.5 bg-pastel-pink mx-auto mt-4 rounded-full" />
            <p className="text-charcoal/70 font-semibold mt-4 text-base sm:text-lg">
              Pick a base package, toggle your custom upgrades, and see an estimated total instantly. Ready to lock it in? Submit the form below!
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Interactive Package Customizer */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-pastel-pink/30 shadow-md">
              <h3 className="font-fredoka text-xl sm:text-2xl font-extrabold text-charcoal mb-6 flex items-center gap-2">
                <span>🎨</span> Step 1: Customize Your Setup
              </h3>

              {/* Package Selectors */}
              <div className="space-y-4">
                <label className="block text-sm font-bold text-charcoal/70 tracking-wide uppercase">Choose Base Play Zone</label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {Object.entries(packages).map(([key, pkg]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedPackage(key)}
                      className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 ${
                        selectedPackage === key
                          ? "border-pastel-pink-dark bg-pastel-pink/15 shadow-inner"
                          : "border-charcoal/10 hover:border-pastel-pink/50 hover:bg-cream/40"
                      }`}
                    >
                      <h4 className="font-fredoka font-bold text-charcoal text-sm sm:text-base leading-tight">{pkg.name}</h4>
                      <p className="text-pastel-pink-dark font-extrabold text-lg sm:text-xl mt-1.5">${pkg.price}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Package Description & Included Items */}
              <div className="bg-cream/60 rounded-2xl p-5 border border-pastel-pink/10 mt-6">
                <p className="text-sm font-semibold text-charcoal/80 leading-relaxed italic">
                  &ldquo;{packages[selectedPackage as keyof typeof packages].description}&rdquo;
                </p>
                <div className="mt-4">
                  <h5 className="text-xs font-extrabold text-charcoal/60 uppercase tracking-wider mb-2">What is Included:</h5>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm text-charcoal/90">
                    {packages[selectedPackage as keyof typeof packages].items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckIcon className="w-4 h-4 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Upgrades & Add-ons */}
              <div className="mt-8 space-y-4">
                <label className="block text-sm font-bold text-charcoal/70 tracking-wide uppercase">Add Upgrades & Extras</label>
                <div className="space-y-3">
                  {/* Upgrade 1 */}
                  <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-colors ${
                    addons.bounceHouse ? "border-mint bg-mint-light/20" : "border-charcoal/10 hover:border-mint/50"
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addons.bounceHouse}
                        onChange={() => handleCheckboxChange("bounceHouse")}
                        className="w-5 h-5 accent-mint-dark rounded text-mint"
                      />
                      <div>
                        <span className="font-bold text-charcoal text-sm sm:text-base">White Inflatable Bounce/Bubble House</span>
                        <p className="text-xs text-charcoal/60 mt-0.5">Toddler-sized aesthetic castle with optional interior flying balloons</p>
                      </div>
                    </div>
                    <span className="font-extrabold text-mint-dark ml-2 text-sm sm:text-base">+${addonPrices.bounceHouse}</span>
                  </label>

                  {/* Upgrade 2 */}
                  <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-colors ${
                    addons.balloonArch ? "border-pastel-pink-dark bg-pastel-pink/10" : "border-charcoal/10 hover:border-pastel-pink/40"
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addons.balloonArch}
                        onChange={() => handleCheckboxChange("balloonArch")}
                        className="w-5 h-5 accent-pastel-pink-dark rounded text-pastel-pink-dark"
                      />
                      <div>
                        <span className="font-bold text-charcoal text-sm sm:text-base">Premium Coordinating Balloon Garland</span>
                        <p className="text-xs text-charcoal/60 mt-0.5">Custom colors designed to match your event theme flawlessly</p>
                      </div>
                    </div>
                    <span className="font-extrabold text-pastel-pink-dark ml-2 text-sm sm:text-base">+${addonPrices.balloonArch}</span>
                  </label>

                  {/* Upgrade 3 */}
                  <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-colors ${
                    addons.customDecal ? "border-gold-dark bg-gold/5" : "border-charcoal/10 hover:border-gold-dark/40"
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addons.customDecal}
                        onChange={() => handleCheckboxChange("customDecal")}
                        className="w-5 h-5 accent-gold-dark rounded text-gold-dark"
                      />
                      <div>
                        <span className="font-bold text-charcoal text-sm sm:text-base">Custom Theme Decals & Backdrop arch</span>
                        <p className="text-xs text-charcoal/60 mt-0.5">Vinyl lettering and arches customized with child's name/age</p>
                      </div>
                    </div>
                    <span className="font-extrabold text-gold-dark ml-2 text-sm sm:text-base">+${addonPrices.customDecal}</span>
                  </label>
                </div>
              </div>

              {/* Surface Option */}
              <div className="mt-8 space-y-4">
                <label className="block text-sm font-bold text-charcoal/70 tracking-wide uppercase">Setup Location Surface</label>
                <div className="grid sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSetupSurface("indoor")}
                    className={`p-3 rounded-xl border-2 text-center font-bold text-sm transition-colors ${
                      setupSurface === "indoor"
                        ? "border-charcoal bg-charcoal text-white"
                        : "border-charcoal/15 hover:border-charcoal/50 text-charcoal"
                    }`}
                  >
                    🏠 Indoor (Wood, Tile, Carpet) - +$0
                  </button>
                  <button
                    type="button"
                    onClick={() => setSetupSurface("outdoor")}
                    className={`p-3 rounded-xl border-2 text-center font-bold text-sm transition-colors ${
                      setupSurface === "outdoor"
                        ? "border-mint bg-mint-dark text-charcoal"
                        : "border-charcoal/15 hover:border-mint/50 text-charcoal"
                    }`}
                  >
                    🌳 Outdoor (Grass, Clean Concrete) - +$30
                  </button>
                </div>
                {setupSurface === "outdoor" && (
                  <p className="text-xs text-mint-dark font-semibold mt-1">
                    *Includes heavy-duty protective under-tarps, sandbags, and extra deep sanitization after collection.
                  </p>
                )}
              </div>
            </div>

            {/* Inquiry Form & Live Estimator */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-pastel-pink/30 shadow-lg relative lg:sticky lg:top-24">
              {/* Est Price Display */}
              <div className="bg-gradient-to-br from-pastel-pink to-mint-light rounded-2xl p-6 text-center border border-pastel-pink/20 mb-8 shadow-sm">
                <span className="text-xs sm:text-sm font-extrabold text-charcoal/60 uppercase tracking-widest">Estimated Total</span>
                <div className="font-fredoka text-4xl sm:text-5xl font-extrabold text-charcoal mt-1 animate-bounce-gentle">
                  ${calculateTotal()}
                </div>
                <p className="text-xs text-charcoal/60 mt-2 font-medium">
                  Tax and standard delivery in Shreveport-Bossier included.
                </p>
              </div>

              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <h3 className="font-fredoka text-lg sm:text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                    <span>📝</span> Step 2: Request Booking
                  </h3>

                  <div>
                    <label className="block text-xs font-extrabold text-charcoal/70 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Mama / Dada Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-charcoal/15 focus:outline-none focus:ring-2 focus:ring-pastel-pink-dark/50 text-sm bg-cream/35"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-charcoal/70 uppercase mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="hello@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-charcoal/15 focus:outline-none focus:ring-2 focus:ring-pastel-pink-dark/50 text-sm bg-cream/35"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold text-charcoal/70 uppercase mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(318) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-charcoal/15 focus:outline-none focus:ring-2 focus:ring-pastel-pink-dark/50 text-sm bg-cream/35"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-charcoal/70 uppercase mb-1">Event Date *</label>
                      <input
                        type="date"
                        required
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-charcoal/15 focus:outline-none focus:ring-2 focus:ring-pastel-pink-dark/50 text-sm bg-cream/35"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold text-charcoal/70 uppercase mb-1">Event Location *</label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-charcoal/15 focus:outline-none focus:ring-2 focus:ring-pastel-pink-dark/50 text-sm bg-cream/35 font-semibold text-charcoal"
                      >
                        <option value="shreveport">Shreveport, LA</option>
                        <option value="bossier">Bossier City, LA</option>
                        <option value="other">Surrounding Area</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-charcoal/70 uppercase mb-1">Special requests or theme details</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your event theme, toddler ages, delivery access, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-charcoal/15 focus:outline-none focus:ring-2 focus:ring-pastel-pink-dark/50 text-sm bg-cream/35 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-pastel-pink-dark hover:bg-pastel-pink text-charcoal font-extrabold py-3.5 rounded-xl shadow-md shadow-pastel-pink/30 hover:shadow-lg transition-all duration-300 text-base focus:outline-none cursor-pointer"
                  >
                    Submit Booking Inquiry 💌
                  </button>
                  <p className="text-[10px] text-center text-charcoal/50 leading-relaxed">
                    By submitting, you represent that the setup will be supervised by a responsible adult at all times. We will review availability and contact you within 24 hours to finalize details and secure deposit.
                  </p>
                </form>
              ) : (
                <div className="text-center py-10 px-4 animate-fade-in flex flex-col items-center">
                  <span className="text-6xl animate-bounce-gentle">🎉</span>
                  <h3 className="font-fredoka text-2xl font-extrabold text-charcoal mt-6">Inquiry Submitted!</h3>
                  <p className="text-sm text-charcoal/80 mt-4 leading-relaxed max-w-sm">
                    Thank you, <strong>{formData.name}</strong>! We have received your inquiry for the <strong>{packages[selectedPackage as keyof typeof packages].name}</strong> on <strong>{formData.eventDate}</strong>.
                  </p>
                  <p className="text-xs text-charcoal/60 mt-4 leading-relaxed">
                    We are checking availability and will call or email you at <strong>{formData.phone}</strong> / <strong>{formData.email}</strong> shortly. Get ready for a fun, stress-free soft play experience!
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", eventDate: "", location: "shreveport", message: "" });
                    }}
                    className="mt-8 border-2 border-dashed border-pastel-pink text-charcoal hover:bg-pastel-pink/15 font-bold px-6 py-2.5 rounded-full transition-colors text-sm focus:outline-none"
                  >
                    Create Another Quote
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faq" className="py-20 sm:py-28 scroll-mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-pastel-pink-dark font-extrabold text-sm sm:text-base tracking-widest uppercase">Got Questions?</span>
            <h2 className="font-fredoka text-3xl sm:text-4xl font-extrabold text-charcoal mt-3">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1.5 bg-pastel-pink mx-auto mt-4 rounded-full" />
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-pastel-pink/20 overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full text-left px-6 py-5 font-fredoka font-bold text-charcoal text-base sm:text-lg flex justify-between items-center focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className={`text-pastel-pink-dark text-2xl transform transition-transform duration-300 ${
                    activeFaq === index ? "rotate-45" : ""
                  }`}>
                    ➕
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeFaq === index ? "max-h-56 border-t border-pastel-pink/10" : "max-h-0"
                  }`}
                >
                  <p className="px-6 py-5 text-sm sm:text-base text-charcoal/70 leading-relaxed bg-cream/30">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/60 backdrop-blur border-y border-pastel-pink/20 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Contact details */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-pastel-pink-dark font-extrabold text-sm sm:text-base tracking-widest uppercase">Reach Out</span>
              <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal mt-3">
                Let&apos;s Get the Fun Started!
              </h2>
              <div className="w-20 h-1.5 bg-pastel-pink mt-4 rounded-full" />
              
              <p className="text-charcoal/80 text-base sm:text-lg mt-6 leading-relaxed max-w-xl">
                Ready to book your soft play area or have a custom styling request? Click to call us or slide into our Instagram DMs. We can&apos;t wait to celebrate with you!
              </p>

              {/* Call-to-actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="tel:318-519-1075"
                  className="inline-flex items-center justify-center gap-3 bg-mint hover:bg-mint-dark text-charcoal font-extrabold text-lg px-8 py-4 rounded-full shadow-lg shadow-mint/30 hover:shadow-xl transition-all duration-300"
                >
                  <PhoneIcon className="w-5 h-5 animate-bounce-gentle" />
                  Call 318-519-1075
                </a>
                <a
                  href="https://instagram.com/happygeauxplay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-pastel-pink-dark hover:bg-pastel-pink text-charcoal font-extrabold text-lg px-8 py-4 rounded-full shadow-lg shadow-pastel-pink/30 hover:shadow-xl transition-all duration-300"
                >
                  <InstagramIcon className="w-5 h-5" />
                  DM @happygeauxplay
                </a>
              </div>

              {/* Booking notification statement */}
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-sm font-bold text-charcoal/80">
                <span className="text-lg">📢</span>
                Now booking for birthday parties, daycares, and weekend events!
              </div>
            </div>

            {/* Cute map display */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-6 bg-white border border-pastel-pink/30 rounded-3xl shadow-lg w-full max-w-sm overflow-hidden">
                <div className="absolute top-3 left-3 bg-mint-light border border-mint text-charcoal font-extrabold text-xs px-3 py-1 rounded-full z-10 shadow-sm">
                  📍 Service Area Map
                </div>
                
                {/* Stylized SVG Map of Shreveport & Bossier City area */}
                <div className="w-full h-64 bg-cream/40 rounded-2xl relative overflow-hidden flex items-center justify-center border border-charcoal/5">
                  <svg className="w-full h-full opacity-70" viewBox="0 0 200 200" fill="none">
                    {/* River separating Shreveport and Bossier */}
                    <path d="M70 0 C 80 40, 110 80, 80 120 C 60 150, 110 180, 100 200" fill="none" stroke="#A3E9B9" strokeWidth="8" strokeLinecap="round" />
                    
                    {/* Shreveport Road Grid lines */}
                    <line x1="10" y1="40" x2="190" y2="40" stroke="#FFCCD5" strokeWidth="2" strokeDasharray="3 3" />
                    <line x1="10" y1="120" x2="190" y2="120" stroke="#FFCCD5" strokeWidth="2" strokeDasharray="3 3" />
                    <line x1="50" y1="10" x2="50" y2="190" stroke="#FFCCD5" strokeWidth="2" strokeDasharray="3 3" />
                    
                    {/* Shreveport label */}
                    <text x="20" y="80" fill="#3A3A3A" fontSize="12" fontWeight="bold">Shreveport</text>
                    
                    {/* Bossier City label */}
                    <text x="110" y="60" fill="#3A3A3A" fontSize="12" fontWeight="bold">Bossier City</text>

                    {/* Red River label */}
                    <text x="65" y="150" fill="#76D796" fontSize="8" fontWeight="bold" transform="rotate(75 65 150)">Red River</text>

                    {/* Fun Star markers */}
                    <circle cx="50" cy="90" r="6" fill="#FFA6C9" />
                    <circle cx="130" cy="80" r="6" fill="#FFA6C9" />
                  </svg>
                  
                  {/* Map Pin Marker Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-bounce-gentle">
                    <span className="text-3xl">📍</span>
                    <span className="bg-charcoal text-white text-[10px] font-bold py-0.5 px-2 rounded-full shadow-md whitespace-nowrap mt-1">
                      We Deliver to You!
                    </span>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-xs font-bold text-charcoal/70">
                    Shreveport • Bossier City • Haughton • Benton • Keithville
                  </p>
                  <p className="text-[10px] text-charcoal/50 mt-1">
                    Free delivery within 15 miles of Shreveport. Inquire for surrounding areas!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-8 border-t border-pastel-pink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-pastel-pink flex items-center justify-center font-bold shadow-sm">
              🎈
            </div>
            <span className="font-fredoka text-xl font-bold text-charcoal tracking-tight">
              Happy Geaux <span className="text-pastel-pink-dark">Play</span>
            </span>
          </div>

          <p className="text-sm text-charcoal/60 max-w-md mx-auto leading-relaxed">
            Whimsical, chic, and safe soft play setups for toddlers. Inspected, thoroughly sanitized, and delivered with love.
          </p>

          {/* Quick social links */}
          <div className="flex justify-center gap-6 mt-6">
            <a href="tel:318-519-1075" className="text-charcoal/60 hover:text-pastel-pink-dark transition-colors" aria-label="Call Happy Geaux Play">
              <PhoneIcon className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/happygeauxplay" target="_blank" rel="noopener noreferrer" className="text-charcoal/60 hover:text-pastel-pink-dark transition-colors" aria-label="Visit Instagram Profile">
              <InstagramIcon className="w-6 h-6" />
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-charcoal/5 text-xs text-charcoal/40 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Happy Geaux Play LLC. All rights reserved.</p>
            <p className="font-medium">Designed for smiles, safety, and toddlers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
