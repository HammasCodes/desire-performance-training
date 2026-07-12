"use client";

import { useState } from "react";

// Types
interface Service {
  id: string;
  name: string;
  category: "extensions" | "lifts-brows";
  price: string;
  duration: string;
  description: string;
  details: string[];
}

export default function Home() {
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State for active service category filter
  const [activeCategory, setActiveCategory] = useState<"all" | "extensions" | "lifts-brows">("all");

  // State for appointment booking form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // State for FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Sample Services Data
  const services: Service[] = [
    {
      id: "classic",
      name: "Classic Eyelash Extensions",
      category: "extensions",
      price: "$120",
      duration: "1h 45m",
      description: "A timeless, natural-looking set. One individual extension is meticulously applied to each healthy natural lash.",
      details: ["Mascara-like look with added length", "Perfect for daily wear & lash beginners", "Tailored to your natural lash line density"],
    },
    {
      id: "hybrid",
      name: "Hybrid Eyelash Extensions",
      category: "extensions",
      price: "$140",
      duration: "2h 00m",
      description: "The perfect blend of classic and volume. Creates a textured, wispy look with a balance of definition and softness.",
      details: ["Textured & fluffy yet natural density", "Customized mix of single lashes & light fans", "Great for masking sparse lash gaps"],
    },
    {
      id: "volume",
      name: "Volume Eyelash Extensions",
      category: "extensions",
      price: "$160",
      duration: "2h 15m",
      description: "Fuller, fluffier, and more dramatic. Crafted using custom, hand-made fans of 3 to 6 ultra-light lashes per natural lash.",
      details: ["Dense, dark, and beautiful lash line", "Extremely lightweight and soft-to-touch", "Tailored to your preferred fullness levels"],
    },
    {
      id: "mega-volume",
      name: "Mega Volume Extensions",
      category: "extensions",
      price: "$190",
      duration: "2h 30m",
      description: "The ultimate glam set. Maximum density and absolute drama, using our thinnest, ultra-lightweight luxury fans.",
      details: ["Darkest, densest lash look available", "Advanced hand-made fan crafting techniques", "Safe for healthy lashes, maximum drama styling"],
    },
    {
      id: "lash-lift",
      name: "Lash Lift & Tint",
      category: "lifts-brows",
      price: "$95",
      duration: "1h 00m",
      description: "Enhance your natural lashes without extensions. Curls and darkens your natural lashes from the root.",
      details: ["Low maintenance, lasting 6 to 8 weeks", "Includes deep black lash tinting treatment", "Great alternative for a makeup-free look"],
    },
    {
      id: "brow-lamination",
      name: "Brow Lamination & Styling",
      category: "lifts-brows",
      price: "$85",
      duration: "50m",
      description: "Achieve sleek, full, feathery brows. Relaxes and sets your brow hairs in an upward, uniform direction.",
      details: ["Fuller, bolder appearance instantly", "Includes shaping, styling, and brow cleanup", "Lasts up to 6 weeks with proper aftercare"],
    },
  ];

  // FAQ Data
  const faqs = [
    {
      question: "How should I prepare for my lash appointment?",
      answer: "Please arrive with completely clean eyes and lashes. Do not wear mascara, eyeliner, or oils. Avoid caffeine prior to your appointment to prevent fluttery eyelids, and wear comfortable clothing as you'll be relaxing on our memory foam bed for 1.5 to 2.5 hours.",
    },
    {
      question: "How long do lash extensions typically last?",
      answer: "Lash extensions can last up to 6 weeks, depending on your natural lash growth cycle and aftercare. However, to keep them looking full and neat, we highly recommend booking refills every 2 to 3 weeks.",
    },
    {
      question: "What is your cancellation or rescheduling policy?",
      answer: "We require at least 24 hours' notice for cancellations or rescheduling. Cancellations within 24 hours of your appointment may be subject to a fee. We appreciate your consideration of Karli's time.",
    },
    {
      question: "Can I get my lash extensions wet?",
      answer: "Yes, you can! Our medical-grade adhesive cures almost instantly. However, we advise avoiding high humidity (steam rooms, long hot showers) and heavy oils around the eyes to maximize retention.",
    },
  ];

  // Filtered Services
  const filteredServices = services.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  // Handle Form Input Changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Booking Request
  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1200);
  };

  // Open booking form and scroll to it
  const scrollToBooking = (preselectedService: string = "") => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
    const element = document.getElementById("booking-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Generate Instagram DM Link with pre-filled style message
  const getInstagramLink = () => {
    return "https://instagram.com/kmstudiolash";
  };

  return (
    <div className="flex-grow flex flex-col bg-cream text-soft-black min-h-screen relative font-sans">
      {/* Premium Glassmorphism Header */}
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-gold/10 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex flex-col">
              <a href="#" className="flex flex-col select-none group">
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-light text-soft-black group-hover:text-gold transition-colors duration-300">
                  KM STUDIO LASH
                </span>
                <span className="text-[10px] uppercase tracking-[0.45em] text-gold-dark font-medium -mt-1 pl-0.5">
                  Kelowna, BC
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="text-sm font-medium tracking-widest uppercase hover:text-gold transition-colors duration-300">
                Services
              </a>
              <a href="#about" className="text-sm font-medium tracking-widest uppercase hover:text-gold transition-colors duration-300">
                About Karli
              </a>
              <a href="#experience" className="text-sm font-medium tracking-widest uppercase hover:text-gold transition-colors duration-300">
                The Experience
              </a>
              <a href="#location" className="text-sm font-medium tracking-widest uppercase hover:text-gold transition-colors duration-300">
                Location
              </a>
              <a
                href={getInstagramLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition-colors duration-300"
                title="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <button
                onClick={() => scrollToBooking()}
                className="shine-effect cursor-pointer bg-soft-black hover:bg-gold-dark text-white hover:text-soft-black text-xs font-semibold tracking-widest uppercase py-3.5 px-6 rounded-full transition-all duration-500 shadow-md border border-soft-black hover:border-gold-dark"
              >
                Book Appointment
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-soft-black hover:text-gold p-2 focus:outline-none transition-colors duration-300"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-cream/98 border-b border-gold/10 shadow-lg transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "opacity-100 max-h-[400px] visible py-6" : "opacity-0 max-h-0 invisible overflow-hidden py-0"
          }`}
        >
          <div className="px-4 space-y-4 flex flex-col text-center">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-widest uppercase py-2 hover:text-gold transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-widest uppercase py-2 hover:text-gold transition-colors duration-200"
            >
              About Karli
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-widest uppercase py-2 hover:text-gold transition-colors duration-200"
            >
              The Experience
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-widest uppercase py-2 hover:text-gold transition-colors duration-200"
            >
              Location
            </a>
            <div className="flex justify-center py-2">
              <a
                href={getInstagramLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase hover:text-gold transition-colors duration-200"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
            </div>
            <button
              onClick={() => scrollToBooking()}
              className="shine-effect cursor-pointer bg-soft-black hover:bg-gold text-white hover:text-soft-black text-xs font-semibold tracking-widest uppercase py-3.5 px-6 rounded-full transition-all duration-300 w-full"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center bg-soft-black text-cream py-16 sm:py-24">
        {/* Abstract Gold Background Mesh */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-gold rounded-full mix-blend-screen filter blur-[150px]" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[650px] h-[650px] bg-gold-light rounded-full mix-blend-screen filter blur-[150px]" />
          {/* Subtle Golden Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left text column */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Premium Top Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold-light text-[11px] font-semibold tracking-[0.25em] uppercase mb-6 sm:mb-8 animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
                Kelowna&apos;s Premier Lash Boutique
              </div>

              {/* Tagline & Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[0.05em] leading-[1.15] text-white font-extralight mb-6">
                Luxury meets artistry in every{" "}
                <span className="relative inline-block font-normal text-gold italic">
                  lash extension
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-light/40" />
                </span>
              </h1>

              {/* Description */}
              <p className="max-w-xl text-cream/80 text-base sm:text-lg leading-relaxed font-light mb-8 sm:mb-10">
                Experience bespoke, hand-crafted eyelash enhancements tailored to your natural beauty. Owner and certified lash technician Karli provides meticulous attention to detail in a private, ultra-relaxing studio environment.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button
                  onClick={() => scrollToBooking()}
                  className="shine-effect cursor-pointer bg-gold hover:bg-gold-light text-soft-black font-semibold text-xs tracking-[0.15em] uppercase py-4.5 px-8 rounded-full shadow-lg transition-all duration-300 text-center"
                >
                  Book Your Appointment
                </button>
                <a
                  href={getInstagramLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-cream/30 hover:border-gold hover:text-gold text-cream font-semibold text-xs tracking-[0.15em] uppercase py-4.5 px-8 rounded-full transition-all duration-300 bg-white/5 backdrop-blur-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Follow on Instagram
                </a>
              </div>
            </div>

            {/* Right graphic column (Sophisticated CSS Framed Visual) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2rem] border-2 border-gold/20 p-4 bg-gradient-to-tr from-luxury-charcoal to-soft-black shadow-2xl">
                {/* Decorative gold corners */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-gold" />
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-gold" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-gold" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-gold" />

                {/* Inner stylized art box */}
                <div className="w-full h-full rounded-[1.5rem] bg-soft-black flex flex-col justify-center items-center p-8 overflow-hidden relative border border-gold/10">
                  {/* Subtle vector artwork resembling lashes */}
                  <div className="w-full max-w-[200px] aspect-square flex flex-col justify-center items-center relative opacity-85">
                    {/* Lash curved graphic */}
                    <svg className="w-48 h-48 text-gold" viewBox="0 0 100 100" fill="none">
                      {/* Eyelid curve */}
                      <path d="M10,60 Q50,25 90,60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      
                      {/* Lashes */}
                      <path d="M18,52 Q14,38 12,24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M26,46 Q22,30 20,15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M34,42 Q30,22 30,8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M42,39 Q41,18 42,4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M50,38 Q52,18 57,4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M58,39 Q63,20 70,8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M66,42 Q73,24 81,15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M74,46 Q83,30 90,24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M82,52 Q92,42 97,36" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      
                      {/* Elegant stars */}
                      <circle cx="20" cy="70" r="1.5" fill="currentColor" opacity="0.6" />
                      <circle cx="80" cy="70" r="1.5" fill="currentColor" opacity="0.6" />
                      <circle cx="50" cy="80" r="1" fill="currentColor" opacity="0.4" />
                    </svg>
                    
                    {/* Decorative text */}
                    <div className="absolute bottom-4 text-center">
                      <span className="font-serif italic text-gold text-lg tracking-[0.2em] block">Bespoke</span>
                      <span className="text-[10px] text-cream/60 tracking-[0.4em] uppercase font-light">Lash Artistry</span>
                    </div>
                  </div>

                  {/* Rating Card Floating */}
                  <div className="absolute -bottom-2 right-4 bg-cream text-soft-black px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-gold/20">
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-semibold tracking-wide">Excellent Reviews</span>
                      <div className="flex items-center gap-1.5">
                        <div className="flex text-gold">
                          {"★★★★★".split("").map((s, i) => (
                            <span key={i} className="text-xs">★</span>
                          ))}
                        </div>
                        <span className="text-xs font-bold text-gray-700">5.0 Star</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Banner */}
      <section className="bg-neutral-beige border-y border-gold/10 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-gold font-serif text-xl sm:text-2xl font-semibold mb-1">5.0 ★ Rating</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-medium">Flawless Reviews</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gold font-serif text-xl sm:text-2xl font-semibold mb-1">Certified</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-medium">Lash Specialist</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gold font-serif text-xl sm:text-2xl font-semibold mb-1">Meticulous</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-medium">Attention to Detail</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gold font-serif text-xl sm:text-2xl font-semibold mb-1">Sanitized</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-medium">Clean & Relaxing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-28 bg-cream scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-dark text-xs font-semibold tracking-[0.3em] uppercase block mb-3">Our Services</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-[0.05em] text-soft-black mb-6">
              Bespoke Lash & Brow Treatments
            </h2>
            <div className="w-16 h-[1px] bg-gold mx-auto mb-6" />
            <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">
              Every set is fully customized. We assess your lash strength, natural eye shape, and preferences to build a personalized look that enhances your unique features.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex justify-center mb-12 border-b border-gray-200/60 max-w-md mx-auto">
            <button
              onClick={() => setActiveCategory("all")}
              className={`pb-4 px-6 text-xs uppercase tracking-widest font-semibold border-b-2 transition-all duration-300 ${
                activeCategory === "all" ? "border-gold text-gold font-bold" : "border-transparent text-gray-400 hover:text-soft-black"
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveCategory("extensions")}
              className={`pb-4 px-6 text-xs uppercase tracking-widest font-semibold border-b-2 transition-all duration-300 ${
                activeCategory === "extensions" ? "border-gold text-gold font-bold" : "border-transparent text-gray-400 hover:text-soft-black"
              }`}
            >
              Extensions
            </button>
            <button
              onClick={() => setActiveCategory("lifts-brows")}
              className={`pb-4 px-6 text-xs uppercase tracking-widest font-semibold border-b-2 transition-all duration-300 ${
                activeCategory === "lifts-brows" ? "border-gold text-gold font-bold" : "border-transparent text-gray-400 hover:text-soft-black"
              }`}
            >
              Lifts & Brows
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white border border-gold/10 hover:border-gold/40 rounded-3xl p-8 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                {/* Gold Highlight Border on Hover */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold-light to-gold rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Service Price & Duration Header */}
                  <div className="flex justify-between items-baseline mb-6">
                    <span className="text-gold font-serif text-2xl font-semibold tracking-tight">{service.price}</span>
                    <span className="text-gray-400 text-xs tracking-wider font-medium flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {service.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-soft-black tracking-wide mb-4 group-hover:text-gold transition-colors duration-300">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2.5 mb-8">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start text-xs text-gray-600 gap-2">
                        <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Button */}
                <button
                  onClick={() => scrollToBooking(service.name)}
                  className="w-full border border-soft-black/10 hover:border-gold hover:bg-gold hover:text-soft-black text-soft-black text-[11px] font-bold tracking-widest uppercase py-3 px-6 rounded-full transition-all duration-300 text-center cursor-pointer"
                >
                  Book Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-28 bg-soft-black text-cream scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Frame left */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2rem] border-2 border-gold/15 p-4 bg-gradient-to-br from-luxury-charcoal to-soft-black shadow-2xl">
                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 bg-gold/10 backdrop-blur-md border border-gold/20 p-4 rounded-2xl hidden sm:block">
                  <span className="font-serif text-gold text-2xl font-bold block leading-none">100%</span>
                  <span className="text-[9px] uppercase tracking-widest text-cream/70 font-medium font-sans">Certified Artistry</span>
                </div>

                <div className="w-full h-full rounded-[1.5rem] bg-luxury-charcoal border border-gold/10 flex flex-col justify-between p-8 relative overflow-hidden">
                  {/* Stylized cosmetic outline */}
                  <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full border border-gold/5 pointer-events-none" />
                  
                  <div className="flex flex-col items-center justify-center flex-grow">
                    <svg className="w-24 h-24 text-gold/30 mb-4" viewBox="0 0 100 100" fill="none">
                      <path d="M30 40 C 40 10, 60 10, 70 40" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                      <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" />
                      <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                    </svg>
                    <span className="font-serif italic text-gold text-2xl tracking-widest">Karli</span>
                    <span className="text-[10px] text-cream/50 tracking-[0.3em] uppercase mt-1">Founder & Artist</span>
                  </div>

                  <div className="bg-black/30 border border-gold/10 p-4 rounded-xl text-center">
                    <span className="text-xs text-cream/90 font-light italic leading-relaxed">
                      &ldquo;I believe that eyelashes are a form of personal architecture. My goal is to make every client feel relaxed and absolutely beautiful.&rdquo;
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Text right */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">Meet the Artist</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-[0.05em] text-white mb-6">
                Personalized Care by Karli
              </h2>
              <div className="w-16 h-[1px] bg-gold mb-6" />

              <p className="text-cream/80 font-light text-sm sm:text-base leading-relaxed mb-6">
                Hello, I&apos;m Karli! As a fully certified and experienced lash technician, I founded <strong>KM Studio Lash</strong> with a single vision: to merge meticulous technical artistry with a premium, relaxing boutique experience.
              </p>

              <p className="text-cream/80 font-light text-sm sm:text-base leading-relaxed mb-8">
                I understand that every set of eyes is unique. That&apos;s why I dedicate time at the start of every appointment for a personalized consultation. We will discuss your lifestyle, desired style, and map the lash extension sizes, curls, and shapes that will perfectly frame and brighten your eyes.
              </p>

              {/* Unique selling points grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex-shrink-0 flex items-center justify-center text-gold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white tracking-wide mb-1 font-sans">Certified Lash Artist</h4>
                    <p className="text-xs text-cream/60 leading-relaxed font-sans">Fully certified in classic, hybrid, volume, and lash lift/brow procedures.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex-shrink-0 flex items-center justify-center text-gold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white tracking-wide mb-1 font-sans">Welcoming Environment</h4>
                    <p className="text-xs text-cream/60 leading-relaxed font-sans">A private, highly sterile, and peaceful space designed solely for your comfort.</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center sm:justify-start">
                <button
                  onClick={() => scrollToBooking()}
                  className="shine-effect cursor-pointer bg-gold hover:bg-gold-light text-soft-black font-semibold text-xs tracking-widest uppercase py-4 px-8 rounded-full shadow-lg transition-all duration-300"
                >
                  Consult With Karli
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Experience Section (Trust signals detail) */}
      <section id="experience" className="py-20 sm:py-28 bg-cream border-b border-gold/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-dark text-xs font-semibold tracking-[0.3em] uppercase block mb-3">The Boutique Difference</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-[0.05em] text-soft-black mb-6">
              Meticulous Attention to Every Detail
            </h2>
            <div className="w-16 h-[1px] bg-gold mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gold/10 p-8 rounded-3xl text-center shadow-sm">
              <div className="w-14 h-14 bg-neutral-beige border border-gold/20 rounded-2xl flex items-center justify-center text-gold mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-light text-soft-black mb-3">Custom Lash Mapping</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                No cookie-cutter lashes here. We assess your natural lash layers and direct mapping sizes to achieve perfect symmetry and flow, protecting your lash health.
              </p>
            </div>

            <div className="bg-white border border-gold/10 p-8 rounded-3xl text-center shadow-sm">
              <div className="w-14 h-14 bg-neutral-beige border border-gold/20 rounded-2xl flex items-center justify-center text-gold mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-light text-soft-black mb-3">Impeccable Sanitation</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Your safety is paramount. We practice hospital-grade sterilization protocols. Every tool is thoroughly disinfected before and after each client, without exception.
              </p>
            </div>

            <div className="bg-white border border-gold/10 p-8 rounded-3xl text-center shadow-sm">
              <div className="w-14 h-14 bg-neutral-beige border border-gold/20 rounded-2xl flex items-center justify-center text-gold mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-light text-soft-black mb-3">Absolute Studio Comfort</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Enjoy your &ldquo;lash nap&rdquo; on a premium ergonomic memory foam mattress with soft, warm blankets, cozy pillows, and a peaceful atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Banner (High converting reviews) */}
      <section className="py-20 sm:py-24 bg-neutral-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex justify-center text-gold gap-1 mb-2">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} className="text-lg">★</span>
              ))}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl tracking-wide text-soft-black font-light mb-2">
              Loved by Kelowna Clients
            </h2>
            <p className="text-gray-500 text-xs tracking-widest uppercase font-sans font-semibold">5.0 Star Rated on Instagram & Bookings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gold/5 relative flex flex-col justify-between">
              <span className="text-gold-light font-serif text-6xl absolute top-3 left-4 select-none opacity-40 leading-none">“</span>
              <p className="text-gray-600 text-sm italic font-light leading-relaxed relative z-10 mb-6">
                Karli is an absolute master at lash mapping! She analyzed my eyes and customized a hybrid set that fits me perfectly. The studio is incredibly calming and super clean. I fell asleep instantly!
              </p>
              <div className="border-t border-gray-100 pt-4">
                <span className="font-bold text-xs text-soft-black block font-sans">Sarah M.</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium font-sans">Kelowna, BC</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gold/5 relative flex flex-col justify-between">
              <span className="text-gold-light font-serif text-6xl absolute top-3 left-4 select-none opacity-40 leading-none">“</span>
              <p className="text-gray-600 text-sm italic font-light leading-relaxed relative z-10 mb-6">
                I&apos;ve tried multiple lash technicians in Kelowna, and Karli is hands-down the best. The retention is incredible—usually lasting 3-4 weeks before I need a fill. The memory foam bed is pure heaven.
              </p>
              <div className="border-t border-gray-100 pt-4">
                <span className="font-bold text-xs text-soft-black block font-sans">Jessica D.</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium font-sans">West Kelowna</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gold/5 relative flex flex-col justify-between">
              <span className="text-gold-light font-serif text-6xl absolute top-3 left-4 select-none opacity-40 leading-none">“</span>
              <p className="text-gray-600 text-sm italic font-light leading-relaxed relative z-10 mb-6">
                Highly recommend the brow lamination and lash lift treatments. Meticulous execution and very gentle. She explained the entire aftercare process. My brows have never looked so full and neat!
              </p>
              <div className="border-t border-gray-100 pt-4">
                <span className="font-bold text-xs text-soft-black block font-sans">Amanda K.</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium font-sans">Kelowna, BC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form + Location Section */}
      <section id="booking-section" className="py-20 sm:py-28 bg-cream scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Booking Form (Left) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl border border-gold/10">
              <span className="text-gold-dark text-xs font-semibold tracking-[0.3em] uppercase block mb-3 font-sans">Reservations</span>
              <h3 className="font-serif text-3xl font-light text-soft-black tracking-wide mb-2">Request Appointment</h3>
              <p className="text-gray-500 text-xs mb-8 font-sans">Fill out the request form below, and Karli will follow up to finalize your booking.</p>

              {submitSuccess ? (
                <div className="bg-gold/10 border border-gold/30 p-8 rounded-2xl text-center">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-soft-black mb-2">Request Received!</h4>
                  <p className="text-gray-600 text-sm font-light leading-relaxed mb-6 font-sans">
                    Thank you {formData.name}. Karli will contact you shortly via email/phone to confirm your slot.
                  </p>
                  
                  {/* Option to send Instagram message immediately */}
                  <a
                    href={`https://instagram.com/kmstudiolash`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shine-effect inline-flex items-center gap-2 bg-soft-black hover:bg-gold text-white hover:text-soft-black text-xs font-semibold tracking-widest uppercase py-3.5 px-6 rounded-full transition-all duration-300 font-sans cursor-pointer"
                  >
                    DM @kmstudiolash on Instagram
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmitBooking} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-semibold text-gray-500 mb-2 font-sans">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g., Sarah Jenkins"
                        className="w-full bg-cream border border-gold/20 focus:border-gold px-4 py-3 text-sm rounded-xl focus:outline-none transition-all duration-300 text-soft-black font-sans"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[10px] uppercase tracking-widest font-semibold text-gray-500 mb-2 font-sans">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g., (250) 555-0199"
                        className="w-full bg-cream border border-gold/20 focus:border-gold px-4 py-3 text-sm rounded-xl focus:outline-none transition-all duration-300 text-soft-black font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] uppercase tracking-widest font-semibold text-gray-500 mb-2 font-sans">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., sarah@example.com"
                      className="w-full bg-cream border border-gold/20 focus:border-gold px-4 py-3 text-sm rounded-xl focus:outline-none transition-all duration-300 text-soft-black font-sans"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-[10px] uppercase tracking-widest font-semibold text-gray-500 mb-2 font-sans">Preferred Service *</label>
                      <select
                        name="service"
                        id="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-cream border border-gold/20 focus:border-gold px-4 py-3 text-sm rounded-xl focus:outline-none transition-all duration-300 text-soft-black font-sans"
                      >
                        <option value="">Select Service...</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.name}>{s.name} ({s.price})</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="date" className="block text-[10px] uppercase tracking-widest font-semibold text-gray-500 mb-2 font-sans">Preferred Date *</label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full bg-cream border border-gold/20 focus:border-gold px-4 py-3 text-sm rounded-xl focus:outline-none transition-all duration-300 text-soft-black font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-[10px] uppercase tracking-widest font-semibold text-gray-500 mb-2 font-sans">Preferred Time *</label>
                    <select
                      name="time"
                      id="time"
                      required
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full bg-cream border border-gold/20 focus:border-gold px-4 py-3 text-sm rounded-xl focus:outline-none transition-all duration-300 text-soft-black font-sans"
                    >
                      <option value="">Select Time...</option>
                      <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM - 3:00 PM)</option>
                      <option value="late-afternoon">Late Afternoon (3:00 PM - 6:00 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-[10px] uppercase tracking-widest font-semibold text-gray-500 mb-2 font-sans">Additional Notes / Custom Requests</label>
                    <textarea
                      name="notes"
                      id="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Specify if you have existing lash extensions from another studio, sensitivities, or requests."
                      className="w-full bg-cream border border-gold/20 focus:border-gold px-4 py-3 text-sm rounded-xl focus:outline-none transition-all duration-300 text-soft-black font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="shine-effect w-full bg-soft-black hover:bg-gold text-white hover:text-soft-black text-xs font-bold tracking-widest uppercase py-4.5 rounded-full shadow-lg transition-all duration-300 cursor-pointer disabled:opacity-55 font-sans"
                  >
                    {isSubmitting ? "Sending Request..." : "Submit Booking Request"}
                  </button>
                </form>
              )}
            </div>

            {/* Location & Contact Info (Right) */}
            <div id="location" className="lg:col-span-5 space-y-8 scroll-mt-20">
              {/* Studio Info Card */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-gold/10 shadow-lg space-y-6">
                <span className="text-gold-dark text-xs font-semibold tracking-[0.3em] uppercase block font-sans">Location & Contact</span>
                
                <div>
                  <h4 className="font-serif text-lg font-light text-soft-black mb-1">KM Studio Lash</h4>
                  <p className="text-sm font-light text-gray-500 leading-relaxed font-sans">
                    1889 Spall Rd #204, Kelowna, BC V1Y 4R2
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-6 space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-neutral-beige flex items-center justify-center text-gold">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block font-sans">Instagram DM</span>
                      <a href={getInstagramLink()} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-gold transition-colors duration-200 font-sans">
                        @kmstudiolash
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-neutral-beige flex items-center justify-center text-gold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block font-sans">Hours of Operation</span>
                      <p className="text-sm font-semibold text-soft-black font-sans leading-relaxed">
                        Mon - Fri: 9:00 AM - 6:00 PM <br />
                        Sat: 10:00 AM - 4:00 PM <br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium CSS-based Map Visualizer */}
              <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-[2.5rem] border border-gold/10 shadow-lg bg-neutral-beige overflow-hidden">
                {/* Simulated luxury map styling */}
                <div className="absolute inset-0 bg-[#EFECE6] p-4 flex flex-col justify-between">
                  {/* Grid Lines representing streets */}
                  <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#8c7c64_1px,transparent_1px),linear-gradient(to_bottom,#8c7c64_1px,transparent_1px)] bg-[size:30px_30px]" />
                  
                  {/* Simulated main roads */}
                  <div className="absolute top-1/2 left-0 w-full h-8 bg-white opacity-40 transform -rotate-6" />
                  <div className="absolute top-0 left-1/3 w-10 h-full bg-white opacity-40 transform rotate-12" />
                  
                  {/* Okanagan Lake water styling graphic */}
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-blue-200/25 blur-md" />

                  {/* Marker Pin */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-gold border-2 border-white shadow-md"></span>
                    </span>
                    <div className="bg-soft-black text-cream px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-wider uppercase mt-2 shadow-xl border border-gold/30 font-sans">
                      KM Studio Lash
                    </div>
                  </div>

                  {/* Map Controls placeholder */}
                  <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm border border-gold/20 p-2 rounded-lg text-[9px] font-semibold tracking-wider text-gray-500 uppercase flex gap-2 font-sans">
                    <span>Kelowna, BC</span>
                  </div>
                  
                  {/* Direct Google Maps Button */}
                  <a
                    href="https://maps.google.com/?q=1889+Spall+Rd+%23204,+Kelowna,+BC+V1Y+4R2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 left-4 shine-effect bg-soft-black text-white hover:bg-gold hover:text-soft-black text-[9px] font-bold tracking-widest uppercase py-2 px-3 rounded-lg transition-all duration-300 shadow-md flex items-center gap-1.5 font-sans cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordions Section */}
      <section className="py-20 bg-neutral-beige">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold-dark text-xs font-semibold tracking-[0.3em] uppercase block mb-3 font-sans">FAQ</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-soft-black">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gold/5 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none select-none cursor-pointer"
                >
                  <span className="font-serif text-sm sm:text-base font-semibold tracking-wide text-soft-black">
                    {faq.question}
                  </span>
                  <span className="text-gold ml-4 flex-shrink-0">
                    {openFaqIndex === index ? (
                      <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaqIndex === index ? "max-h-[200px] border-t border-gray-100" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-gray-500 text-xs sm:text-sm font-light leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-soft-black text-cream/70 border-t border-gold/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] text-white">KM STUDIO LASH</span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-gold mt-1 font-sans">Bespoke Beauty Boutique</span>
          </div>

          <div className="flex justify-center space-x-6 text-xs uppercase tracking-widest font-sans font-semibold">
            <a href="#services" className="hover:text-gold transition-colors duration-200">Services</a>
            <a href="#about" className="hover:text-gold transition-colors duration-200">About</a>
            <a href="#experience" className="hover:text-gold transition-colors duration-200">Experience</a>
            <a href="#location" className="hover:text-gold transition-colors duration-200">Location</a>
          </div>

          <div className="w-12 h-[1px] bg-gold/20 mx-auto" />

          <p className="text-[10px] text-gray-500 max-w-md mx-auto leading-relaxed font-sans">
            © {new Date().getFullYear()} KM Studio Lash Kelowna. Owned and operated by Karli. <br /> All rights reserved. Designed with luxury and precision in British Columbia, Canada.
          </p>
        </div>
      </footer>
    </div>
  );
}
