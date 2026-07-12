"use client";

import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  ShieldCheck,
  Check,
  Menu,
  X,
  ChevronRight,
  Star,
  Car,
  Droplet,
  Leaf,
  Send,
  MessageCircle,
  Award,
  Users,
  ArrowRight
} from "lucide-react";

// Custom Instagram SVG Icon to bypass Lucide version export issues
const Instagram = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  // Booking Form State
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingEmirate, setBookingEmirate] = useState("Dubai");
  const [bookingService, setBookingService] = useState("Exterior Wash");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingCar, setBookingCar] = useState("");
  const [showFormAlert, setShowFormAlert] = useState(false);

  const reviews = [
    {
      name: "Sarah M.",
      location: "Dubai Marina, Dubai",
      stars: 5,
      comment: "Wiper is a total lifesaver! They washed and detailed my SUV in my office parking lot in Dubai. The interior smells brand new, and they didn't need any water or electrical connections from my end. Best detailing in town!",
    },
    {
      name: "Ahmed K.",
      location: "Al Helio, Ajman",
      stars: 5,
      comment: "Very professional team. They brought their own water and power. My sports car paint looks incredibly glossy after the machine polishing and carnauba wax. Definite value for money.",
    },
    {
      name: "Ryan D.",
      location: "Al Majaz, Sharjah",
      stars: 5,
      comment: "Booked via WhatsApp, they arrived in Sharjah exactly on time. Friendly crew, eco-friendly washing, and excellent attention to detail on the rims. Highly recommended!",
    },
  ];

  const services = [
    {
      id: "exterior",
      title: "Exterior Foam Wash",
      icon: <Droplet className="w-6 h-6 text-accent-cyan" />,
      features: [
        "Pre-wash snow foam application",
        "Scratch-free hand mitt wash",
        "Deep wheel rim cleaning & tire dressing",
        "Hydrophobic glass window wipe",
        "High-performance microfiber towel dry"
      ],
      priceRange: "From AED 49",
      tag: "Popular"
    },
    {
      id: "interior",
      title: "Interior Detailing",
      icon: <Sparkles className="w-6 h-6 text-accent-cyan" />,
      features: [
        "Deep vacuuming (carpets, seats, trunk)",
        "Leather conditioning & dashboard restore",
        "Steam sanitize door panels & vents",
        "Anti-bacterial cabin deodorizing",
        "Stain spot treatment"
      ],
      priceRange: "From AED 129",
      tag: "Best Value"
    },
    {
      id: "polishing",
      title: "Machine Polishing",
      icon: <Car className="w-6 h-6 text-accent-cyan" />,
      features: [
        "Clay bar paint decontamination",
        "Dual-action machine polish treatment",
        "Light scratch & swirl mark removal",
        "Depth and clarity gloss enrichment",
        "Fender & trim restoration styling"
      ],
      priceRange: "From AED 199",
      tag: "Showroom Shine"
    },
    {
      id: "waxing",
      title: "Premium Hydrophobic Wax",
      icon: <ShieldCheck className="w-6 h-6 text-accent-cyan" />,
      features: [
        "Premium Carnauba wax hand buff",
        "100% UV protective paint shield",
        "Hydrophobic rain & dust repelling layer",
        "Mirror-like paint reflectivity",
        "Up to 3 months shine preservation"
      ],
      priceRange: "From AED 99",
      tag: "Protection"
    }
  ];

  // Quick Select Service handler
  const handleSelectService = (serviceTitle: string) => {
    setBookingService(serviceTitle);
    const formElement = document.getElementById("booking-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Compile and redirect to WhatsApp
  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();

    if (!bookingName || !bookingPhone || !bookingDate) {
      setShowFormAlert(true);
      setTimeout(() => setShowFormAlert(false), 4000);
      return;
    }

    // Format pre-filled WhatsApp message
    const whatsappNum = "971504345233"; // +971 50 434 5233
    const text = `Hello Wiper Car Wash! I would like to book a mobile detailing appointment:
• *Name:* ${bookingName}
• *Phone:* ${bookingPhone}
• *Emirate:* ${bookingEmirate}
• *Service:* ${bookingService}
• *Car Model:* ${bookingCar || "Not Specified"}
• *Date:* ${bookingDate}
• *Time:* ${bookingTime || "Anytime"}`;

    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${whatsappNum}?text=${encodedText}`;

    // Open WhatsApp in new tab
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-[#0a1226] to-[#0f1c3f] text-slate-100 flex flex-col selection:bg-accent-cyan selection:text-primary-dark">
      
      {/* Floating Bubbles / Water particles background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-accent-cyan/10 rounded-full animate-bubble"
            style={{
              left: `${15 + i * 16}%`,
              width: `${12 + (i % 3) * 10}px`,
              height: `${12 + (i % 3) * 10}px`,
              animationDuration: `${12 + i * 3}s`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 glass-panel shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-accent-cyan to-accent-sparkle shadow-md shadow-accent-cyan/20">
                <Car className="w-5 h-5 text-primary-dark" />
                {/* Windshield wiper line overlay */}
                <div className="absolute inset-0 border border-white/20 rounded-lg overflow-hidden">
                  <div className="absolute w-[1px] h-8 bg-white/40 left-1/2 top-0 origin-bottom -rotate-45 animate-pulse" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-wider text-white group-hover:text-accent-cyan transition-colors">
                  WIPER
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-accent-cyan leading-none">
                  Mobile Car Care
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-semibold hover:text-accent-cyan transition-colors">
                Services
              </a>
              <a href="#about" className="text-sm font-semibold hover:text-accent-cyan transition-colors">
                About Us
              </a>
              <a href="#trust" className="text-sm font-semibold hover:text-accent-cyan transition-colors">
                Why Us
              </a>
              <a href="#booking-section" className="text-sm font-semibold hover:text-accent-cyan transition-colors">
                Book appointment
              </a>
            </nav>

            {/* CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://wa.me/971504345233"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-accent-cyan hover:text-accent-sparkle transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>+971 50 434 5233</span>
              </a>
              <a
                href="#booking-section"
                className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full font-display font-bold text-sm bg-gradient-to-r from-accent-cyan to-accent-sparkle text-primary-dark hover:shadow-lg hover:shadow-accent-cyan/30 hover:scale-102 transition-all overflow-hidden"
              >
                <span>Book Wash</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-panel border-t border-white/5 px-4 pt-4 pb-6 space-y-3">
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-white/5 transition-all text-slate-200"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-white/5 transition-all text-slate-200"
            >
              About Us
            </a>
            <a
              href="#trust"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-white/5 transition-all text-slate-200"
            >
              Why Us
            </a>
            <a
              href="#booking-section"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-white/5 transition-all text-slate-200"
            >
              Book Appointment
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://wa.me/971504345233"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-lg border border-accent-cyan/30 text-accent-cyan font-bold"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat WhatsApp</span>
              </a>
              <a
                href="#booking-section"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-sparkle text-primary-dark font-display font-bold"
              >
                <span>Book Your Wash</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:py-32 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
              {/* Service Badges */}
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                  Dubai, Sharjah, Ajman, UAQ
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan">
                  <Clock className="w-3.5 h-3.5" />
                  Daily 10AM - 10PM
                </span>
              </div>

              {/* Bold Title */}
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none">
                <span className="block text-gradient-metallic">Showroom Shine,</span>
                <span className="block text-gradient-cyan mt-1">Delivered to Your Door.</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Experience the ultimate convenience in mobile car care. We bring professional high-pressure foam washes, deep interior detailing, and premium machine polishing directly to your home or office.
              </p>

              {/* USP List */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 text-left pt-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent-cyan" />
                  </div>
                  <span className="text-sm font-semibold text-slate-200">100% Self-Sufficient</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent-cyan" />
                  </div>
                  <span className="text-sm font-semibold text-slate-200">Eco-Conscious Tech</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent-cyan" />
                  </div>
                  <span className="text-sm font-semibold text-slate-200">Professional Gear</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent-cyan" />
                  </div>
                  <span className="text-sm font-semibold text-slate-200">Premium Microfibers</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="#booking-section"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full font-display font-extrabold text-base bg-gradient-to-r from-accent-cyan to-accent-sparkle text-primary-dark shadow-xl shadow-accent-cyan/20 hover:shadow-accent-cyan/35 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  Book Your Wash
                </a>
                <a
                  href="https://wa.me/971504345233?text=Hello%20Wiper!%20I'd%20like%20to%20learn%20more%20about%20your%20mobile%20car%20wash%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full font-display font-bold text-base glass-panel border-white/15 text-white hover:bg-white/5 hover:border-white/25 transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]/10" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Graphic Mockup */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
              <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
                {/* Glowing Background Radial */}
                <div className="absolute w-[300px] h-[300px] bg-accent-cyan/25 rounded-full blur-[60px] animate-glow pointer-events-none" />

                {/* Main Graphic Container */}
                <div className="relative w-full h-full glass-panel border-white/10 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-2xl animate-float">
                  
                  {/* Sweep Reflection Line Overlay */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                    <div className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shine" />
                  </div>

                  {/* Top Header Card */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-black text-accent-cyan">Wiper Service Rig</span>
                  </div>

                  {/* Middle Car Outline SVG */}
                  <div className="my-auto py-8 flex justify-center items-center">
                    <svg viewBox="0 0 100 40" className="w-full max-w-[340px] text-accent-cyan drop-shadow-[0_0_12px_rgba(0,180,216,0.6)]" fill="none" stroke="currentColor" strokeWidth="1">
                      {/* Sports car wireframe path */}
                      <path d="M 5,28 Q 15,28 18,26 L 25,16 Q 32,8 48,8 L 65,8 Q 78,8 84,18 L 94,22 Q 97,25 97,28 L 95,29 C 93,29 92,27 89,27 C 86,27 84,29 84,31 C 84,33 86,35 89,35 C 91,35 93,33 94,31 L 97,31 C 97,33 95,35 92,35 L 75,35 C 74,31 71,28 68,28 C 65,28 62,31 61,35 L 39,35 C 38,31 35,28 32,28 C 29,28 26,31 25,35 L 8,35 C 7,35 6,34 5,32 Z" strokeLinecap="round" strokeLinejoin="round" />
                      {/* Rear wheel */}
                      <circle cx="32" cy="32" r="4.5" stroke="currentColor" fill="#070d19" strokeWidth="1" />
                      <circle cx="32" cy="32" r="1.5" stroke="currentColor" fill="currentColor" />
                      {/* Front wheel */}
                      <circle cx="68" cy="68" r="4.5" transform="translate(0, -36)" stroke="currentColor" fill="#070d19" strokeWidth="1" />
                      <circle cx="68" cy="32" r="1.5" stroke="currentColor" fill="currentColor" />
                      {/* Windows */}
                      <path d="M 27,17 L 31,18 Q 42,11 48,11 L 57,11 Q 59,11 60,13 L 64,18 L 63,18" strokeLinecap="round" />
                      <line x1="48" y1="11" x2="48" y2="18" stroke="currentColor" />
                      {/* Door details */}
                      <path d="M 48,18 H 63 L 60,28 H 48 Z" strokeOpacity="0.5" />
                      {/* Speed swoosh effect */}
                      <path d="M 2,12 H 10" strokeOpacity="0.4" strokeWidth="0.5" />
                      <path d="M -2,16 H 6" strokeOpacity="0.3" strokeWidth="0.5" />
                      <path d="M 0,20 H 5" strokeOpacity="0.4" strokeWidth="0.5" />
                    </svg>
                  </div>

                  {/* Bottom Stats Overlay */}
                  <div className="grid grid-cols-3 gap-2 bg-white/5 border border-white/5 rounded-xl p-3 text-center">
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Status</span>
                      <span className="text-xs font-extrabold text-[#25D366] flex items-center justify-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping" />
                        Online
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Crew ETA</span>
                      <span className="text-xs font-extrabold text-white mt-0.5">35-50 Min</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Eco Saving</span>
                      <span className="text-xs font-extrabold text-accent-sparkle mt-0.5">80% Water</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 border-t border-white/5 bg-gradient-to-b from-[#0a1226] to-primary-dark z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-accent-cyan">Our Services</h2>
            <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gradient-metallic">
              Premium Mobile Detailing Options
            </h3>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              We bring specialized equipment and premium products directly to you, delivering showroom perfection for all vehicle types.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between p-6 rounded-2xl glass-panel hover:bg-card-dark hover:border-accent-cyan/35 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent-cyan/15 group-hover:scale-105 transition-all">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-400 group-hover:border-accent-cyan/20 group-hover:text-accent-cyan transition-colors">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-display font-bold text-xl text-white mb-4 group-hover:text-accent-cyan transition-colors">
                    {service.title}
                  </h4>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-accent-cyan mt-1 flex-shrink-0" />
                        <span className="text-xs text-slate-300 leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer and Price/CTA */}
                <div className="border-t border-white/5 pt-4 mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">Starting Price</span>
                      <span className="text-sm font-extrabold text-white">{service.priceRange}</span>
                    </div>
                    <button
                      onClick={() => handleSelectService(service.title)}
                      className="inline-flex items-center gap-1 py-2 px-4 rounded-full text-xs font-bold bg-white/5 text-slate-200 group-hover:bg-gradient-to-r group-hover:from-accent-cyan group-hover:to-accent-sparkle group-hover:text-primary-dark transition-all"
                    >
                      <span>Book</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery Note */}
          <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/5 text-center max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-accent-cyan/15 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent-cyan" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white">Serving Across 4 Emirates</h4>
                <p className="text-xs text-slate-300">We drive to your location in Dubai, Sharjah, Ajman, and Umm Al Quwain.</p>
              </div>
            </div>
            <a
              href="#booking-section"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-accent-cyan to-accent-sparkle text-primary-dark shadow-md shadow-accent-cyan/10 hover:shadow-accent-cyan/20 transition-all whitespace-nowrap"
            >
              <span>Check Slot Availability</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 z-10 overflow-hidden bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Mockup/Grid */}
            <div className="lg:col-span-5 relative">
              {/* Decorative backgrounds */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/15 to-transparent rounded-3xl blur-[40px] pointer-events-none" />
              
              {/* Graphic Box */}
              <div className="relative glass-panel border-white/10 rounded-3xl p-8 flex flex-col space-y-6 overflow-hidden">
                <h4 className="font-display font-bold text-xl text-gradient-cyan">Eco-Conscious Mobile Tech</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Unlike traditional car wash garages that consume upwards of 150 liters of water per vehicle, Wiper utilizes specialized vaporized micro-cleaning tech and biodegradable polymer solutions.
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-accent-cyan/25 flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-4 h-4 text-accent-sparkle" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white">Save Up to 80% Water</h5>
                      <p className="text-[11px] text-slate-400 mt-0.5">High pressure vapor lifts dirt with minimal water consumption, protecting paint and the environment.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-accent-cyan/25 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-4 h-4 text-accent-sparkle" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white">Biodegradable Chemical Agents</h5>
                      <p className="text-[11px] text-slate-400 mt-0.5">We use high-end, bio-degradable polymer compounds that seal vehicle clearcoats, resisting dust and moisture.</p>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Certified Technicians & Equipment</span>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 flex flex-col space-y-8">
              <div className="space-y-4">
                <h2 className="text-xs uppercase font-extrabold tracking-widest text-accent-cyan">Who We Are</h2>
                <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gradient-metallic leading-none">
                  Your Convenient Mobile detailing Specialists
                </h3>
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
                Wiper Car Wash is a premium, customer-first mobile automotive care team. We believe that your time is valuable. Instead of forcing you to drive to a crowded station and wait in long lines, we bring the car wash directly to you.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                Whether you are busy working at your office in Dubai Media City, relaxing at your villa in Sharjah, or staying at home in Ajman or UAQ, our self-sufficient vans arrive fully loaded with clean water reserves, silent generator power rigs, professional steam machines, and high-end detailing supplies.
              </p>

              {/* Icon Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-white">Premium Quality Standard</h4>
                    <p className="text-xs text-slate-400 mt-0.5">We treat your vehicle like our own, using premium dual-action polishers and color-coded scratch-free towels.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-white">100% Hassle-Free</h4>
                    <p className="text-xs text-slate-400 mt-0.5">No messy driveways, no hose hookups required. We bring our own power, water, and specialized toolkits.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Signals & Social Proof */}
      <section id="trust" className="relative py-24 border-t border-white/5 bg-gradient-to-b from-primary-dark to-[#0a1226] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Side: Stats and Social info */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-xs uppercase font-extrabold tracking-widest text-accent-cyan">Trust Signals</h2>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-gradient-metallic">
                  Backed by Real Customer trust
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  We are proud to maintain a reliable reputation across the UAE, built upon punctuality, meticulous car care, and active customer feedback.
                </p>
              </div>

              {/* Stats Counters */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="block font-display font-black text-3xl text-accent-cyan">3,600+</span>
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Instagram Followers</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="block font-display font-black text-3xl text-white">10k+</span>
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Cars Wash Completed</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="block font-display font-black text-3xl text-white">12 Hours</span>
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">10 AM - 10 PM Daily</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="block font-display font-black text-3xl text-accent-sparkle">4.9★</span>
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Average Rating</span>
                </div>
              </div>

              {/* Instagram Promo card */}
              <a
                href="https://www.instagram.com/wiper.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-red-900/20 border border-white/10 hover:border-pink-500/40 transition-all shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-accent-cyan transition-colors">Follow us @wiper.ae</h4>
                  <p className="text-xs text-slate-300">View real-time detailing showcases, reels, and exclusive booking offers on Instagram.</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right Side: Mock Instagram Grid + Testimonials */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-12">
              
              {/* Instagram Feed Grid Mockup */}
              <div>
                <span className="block text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-4">Latest from Instagram</span>
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(6)].map((_, i) => (
                    <a
                      key={i}
                      href="https://www.instagram.com/wiper.ae"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative aspect-square rounded-xl bg-[#142345] overflow-hidden border border-white/5 flex items-center justify-center"
                    >
                      {/* Subtly colored gradients representing car wash posts */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${
                        i % 3 === 0
                          ? "from-blue-600/30 to-accent-cyan/10"
                          : i % 3 === 1
                          ? "from-indigo-600/30 to-purple-600/10"
                          : "from-cyan-600/30 to-emerald-600/10"
                      } group-hover:scale-110 transition-transform duration-500`} />
                      
                      {/* Car outlines/details icons */}
                      <div className="z-10 text-white/20 group-hover:text-white/80 transition-colors flex flex-col items-center">
                        <Car className="w-6 h-6 mb-1" />
                        <span className="text-[9px] uppercase font-bold tracking-widest text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">View Post</span>
                      </div>
                      
                      {/* Sparkle star overlay */}
                      <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
                        <Star className="w-2.5 h-2.5 text-accent-sparkle fill-accent-sparkle" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Real Customer Review Slider */}
              <div className="glass-panel border-white/10 rounded-2xl p-6 relative">
                <span className="block text-xs uppercase font-extrabold tracking-widest text-accent-cyan mb-4">Testimonials</span>
                
                {/* Review Body */}
                <div className="min-h-[140px] flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex gap-1">
                      {[...Array(reviews[activeReview].stars)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-200 text-sm italic font-sans leading-relaxed">
                      &ldquo;{reviews[activeReview].comment}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-4">
                    <div>
                      <span className="block text-xs font-bold text-white">{reviews[activeReview].name}</span>
                      <span className="text-[10px] text-slate-400">{reviews[activeReview].location}</span>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex gap-1.5">
                      {reviews.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => setActiveReview(dotIdx)}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            activeReview === dotIdx
                              ? "bg-accent-cyan w-6"
                              : "bg-white/20 hover:bg-white/40"
                          }`}
                          aria-label={`Go to slide ${dotIdx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Booking Form & Contact Section */}
      <section id="booking-section" className="relative py-24 bg-[#070d19] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Panel: Contact Info */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
              <div className="space-y-6">
                <h2 className="text-xs uppercase font-extrabold tracking-widest text-accent-cyan">Quick Booking</h2>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-gradient-metallic leading-tight">
                  Ready for a showroom finish? Book now
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Fill in the booking reservation request. Our team will review your selection and immediately connect with you on WhatsApp to confirm details, exact location, and slot arrival.
                </p>

                {/* Direct Contact Details list */}
                <div className="space-y-4 pt-4">
                  <a
                    href="https://wa.me/971504345233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent-cyan/20 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366] flex-shrink-0">
                      <MessageCircle className="w-5 h-5 fill-[#25D366]/10" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Book Via WhatsApp</span>
                      <span className="text-sm font-bold text-white hover:text-accent-cyan transition-colors">+971 50 434 5233</span>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/wiper.ae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-pink-500/20 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-pink-500/15 flex items-center justify-center text-pink-500 flex-shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Direct Message</span>
                      <span className="text-sm font-bold text-white hover:text-accent-cyan transition-colors">@wiper.ae</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Working Hours Info Box */}
              <div className="p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/15">
                <span className="text-xs font-bold text-accent-cyan flex items-center gap-1.5 mb-1">
                  <Clock className="w-4 h-4" />
                  Service Hours
                </span>
                <p className="text-xs text-slate-300">
                  Every day from **10:00 AM to 10:00 PM**, including weekends. Mobile rigs operate throughout all coverage areas.
                </p>
              </div>
            </div>

            {/* Right Panel: Interactive Form */}
            <div id="booking-form" className="lg:col-span-7">
              <div className="glass-panel border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
                
                <h4 className="font-display font-bold text-xl text-white mb-6">Reservation Setup</h4>
                
                {showFormAlert && (
                  <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-bold flex items-center gap-2">
                    <X className="w-4 h-4 flex-shrink-0" />
                    <span>Please enter your Name, Phone Number, and Appointment Date.</span>
                  </div>
                )}

                <form onSubmit={handleWhatsAppBooking} className="space-y-5">
                  {/* Row 1: Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-cyan focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-300">WhatsApp Mobile *</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={bookingPhone}
                        onChange={(e) => setBookingPhone(e.target.value)}
                        placeholder="e.g. +971 50 123 4567"
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-cyan focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Emirate and Service Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="emirate" className="text-xs font-bold uppercase tracking-wider text-slate-300">Emirate Location</label>
                      <select
                        id="emirate"
                        value={bookingEmirate}
                        onChange={(e) => setBookingEmirate(e.target.value)}
                        className="px-4 py-3 rounded-xl bg-[#0b132a] border border-white/10 focus:border-accent-cyan focus:outline-none text-sm text-white transition-colors"
                      >
                        <option value="Dubai">Dubai</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Ajman">Ajman</option>
                        <option value="Umm Al Quwain">Umm Al Quwain</option>
                      </select>
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-slate-300">Select Service</label>
                      <select
                        id="service"
                        value={bookingService}
                        onChange={(e) => setBookingService(e.target.value)}
                        className="px-4 py-3 rounded-xl bg-[#0b132a] border border-white/10 focus:border-accent-cyan focus:outline-none text-sm text-white transition-colors"
                      >
                        <option value="Exterior Wash">Exterior Foam Wash</option>
                        <option value="Interior Detailing">Interior Detailing</option>
                        <option value="Machine Polishing">Machine Polishing</option>
                        <option value="Premium Hydrophobic Wax">Premium Hydrophobic Wax</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Vehicle details */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="car" className="text-xs font-bold uppercase tracking-wider text-slate-300">Car Brand & Model</label>
                    <input
                      type="text"
                      id="car"
                      value={bookingCar}
                      onChange={(e) => setBookingCar(e.target.value)}
                      placeholder="e.g. Nissan Patrol 2023 / Tesla Model 3"
                      className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-cyan focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                    />
                  </div>

                  {/* Row 4: Date and Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="date" className="text-xs font-bold uppercase tracking-wider text-slate-300">Preferred Date *</label>
                      <input
                        type="date"
                        id="date"
                        required
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-cyan focus:outline-none text-sm text-white transition-colors"
                      />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="time" className="text-xs font-bold uppercase tracking-wider text-slate-300">Preferred Time Window</label>
                      <select
                        id="time"
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="px-4 py-3 rounded-xl bg-[#0b132a] border border-white/10 focus:border-accent-cyan focus:outline-none text-sm text-white transition-colors"
                      >
                        <option value="">Select a time slot</option>
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                        <option value="Evening (5:00 PM - 10:00 PM)">Evening (5:00 PM - 10:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full font-display font-extrabold text-base bg-gradient-to-r from-accent-cyan to-accent-sparkle text-primary-dark shadow-xl shadow-accent-cyan/20 hover:shadow-accent-cyan/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                    >
                      <Send className="w-5 h-5" />
                      <span>Confirm & Book via WhatsApp</span>
                    </button>
                    <span className="block text-center text-[10px] text-slate-400 mt-3">
                      No prepayment required. You pay after the service is completed.
                    </span>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/5 bg-[#040811] text-slate-400 py-12 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-white/5 pb-8 mb-8">
            
            {/* Logo */}
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-cyan to-accent-sparkle">
                <Car className="w-4 h-4 text-primary-dark" />
              </div>
              <span className="font-display font-black text-xl tracking-wider text-white">WIPER</span>
            </div>

            {/* Quick Links */}
            <div className="flex justify-center gap-6 text-sm">
              <a href="#services" className="hover:text-accent-cyan transition-colors">Services</a>
              <a href="#about" className="hover:text-accent-cyan transition-colors">About Us</a>
              <a href="#trust" className="hover:text-accent-cyan transition-colors">Why Us</a>
              <a href="#booking-section" className="hover:text-accent-cyan transition-colors">Book Now</a>
            </div>

            {/* Socials */}
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://wa.me/971504345233"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Contact WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/wiper.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Instagram Page"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <span>© {new Date().getFullYear()} Wiper Mobile Car Wash & Detailing Services. All Rights Reserved.</span>
            <span>Serving Dubai, Sharjah, Ajman, and Umm Al Quwain, UAE.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
