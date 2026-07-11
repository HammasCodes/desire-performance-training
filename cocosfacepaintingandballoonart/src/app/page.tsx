"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Paintbrush, 
  Sparkles, 
  Phone, 
  Mail, 
  Instagram, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Smile,
  Compass,
  MessageSquare,
  Gift
} from "lucide-react";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "painting" | "twisting" | "decor">("all");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    eventType: "",
    services: [] as string[],
    message: "",
  });

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Form Submitted:", formData);
    setFormSubmitted(true);
  };

  const eventTypes = [
    "Birthday Parties", "Corporate Events", "Festivals", "Grand Openings", 
    "Halloween", "Christmas Events", "Church Events", "Family Reunions", 
    "School Events", "Restaurant Family Nights", "Mall Events"
  ];

  const services = [
    {
      id: "painting",
      title: "Face Painting",
      description: "Transforming kids and adults into superheroes, fairy princesses, magical creatures, and fierce tigers! Our designs range from quick, high-impact cheek art to breathtaking full-face transformations.",
      details: [
        "100% FDA-compliant, cosmetic-grade skin paints",
        "Gentle, hypoallergenic formulas, easy to wash off with soap and water",
        "Fast & professional application suitable for large crowds",
        "Custom designs tailored to match your event's theme"
      ],
      image: "/images/face-painting.png",
      colorClass: "bg-brand-pink text-white",
      badgeColor: "bg-brand-pink/15 text-brand-pink border-brand-pink/30",
      buttonColor: "bg-brand-pink hover:bg-brand-pink-hover text-white shadow-brand-pink/20"
    },
    {
      id: "twisting",
      title: "Balloon Twisting",
      description: "Watch balloons transform into whimsical art! Our talented twisters create everything from classic puppies and swords to intricate hats, magical wands, and multi-balloon masterpieces that kids love.",
      details: [
        "Premium quality, 100% biodegradable natural latex balloons",
        "Highly interactive & entertaining twisting performance",
        "Colorful variety of shapes, animals, and characters",
        "Perfect party favors that guests get to take home"
      ],
      image: "/images/balloon-twisting.png",
      colorClass: "bg-brand-blue text-white",
      badgeColor: "bg-brand-blue/15 text-brand-blue border-brand-blue/30",
      buttonColor: "bg-brand-blue hover:bg-brand-blue-hover text-white shadow-brand-blue/20"
    },
    {
      id: "decor",
      title: "Balloon Decor",
      description: "Elevate your venue with stunning custom balloon installations! From organic arches and eye-catching pillars to table centerpieces and photo backdrops, we build the perfect backdrop for memories.",
      details: [
        "Custom color matching & theme-specific arrangements",
        "Beautiful organic arches, half-arches, and balloon walls",
        "Professional installation and setup at your venue",
        "Biodegradable, eco-friendly materials used in all arches"
      ],
      image: "/images/balloon-decor.png",
      colorClass: "bg-brand-purple text-white",
      badgeColor: "bg-brand-purple/15 text-brand-purple border-brand-purple/30",
      buttonColor: "bg-brand-purple hover:bg-brand-purple-hover text-white shadow-brand-purple/20"
    }
  ];

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(s => s.id === activeTab);

  return (
    <div className="min-h-screen bg-[#fffcf9] selection:bg-brand-pink selection:text-white">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-0 -z-10 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 -z-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#fffcf9]/80 backdrop-blur-md border-b border-orange-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-brand-pink via-brand-orange to-brand-yellow rounded-2xl shadow-md rotate-3 group-hover:rotate-12 transition-transform duration-300">
                <Paintbrush className="w-6 h-6 text-white" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-blue rounded-full animate-bounce" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue bg-clip-text text-transparent">
                  Coco's
                </span>
                <span className="text-xs font-semibold text-gray-500 tracking-wider uppercase -mt-1">
                  Face Painting & Balloon Art
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="font-medium text-gray-600 hover:text-brand-pink transition-colors">Services</a>
              <a href="#events" className="font-medium text-gray-600 hover:text-brand-purple transition-colors">Events We Serve</a>
              <a href="#about" className="font-medium text-gray-600 hover:text-brand-blue transition-colors">About Us</a>
              <a href="#trust" className="font-medium text-gray-600 hover:text-brand-orange transition-colors">Why Choose Coco</a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-pink to-brand-orange text-white font-semibold shadow-lg hover:shadow-brand-pink/20 hover:scale-[1.03] transition-all duration-200"
                id="nav-cta-btn"
              >
                Book Your Event
              </a>
            </nav>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-orange-50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#fffcf9] border-b border-orange-100 px-4 pt-2 pb-6 space-y-3">
            <a 
              href="#services" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl font-medium text-gray-700 hover:bg-brand-pink/10 hover:text-brand-pink transition-colors"
            >
              Services
            </a>
            <a 
              href="#events" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl font-medium text-gray-700 hover:bg-brand-purple/10 hover:text-brand-purple transition-colors"
            >
              Events We Serve
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl font-medium text-gray-700 hover:bg-brand-blue/10 hover:text-brand-blue transition-colors"
            >
              About Us
            </a>
            <a 
              href="#trust" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl font-medium text-gray-700 hover:bg-brand-orange/10 hover:text-brand-orange transition-colors"
            >
              Why Choose Coco
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-center w-full px-4 py-3 rounded-full bg-gradient-to-r from-brand-pink to-brand-orange text-white font-semibold shadow-md"
            >
              Book Your Event
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Playful background blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-gradient-to-r from-brand-pink/5 via-brand-yellow/5 to-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pink font-semibold text-sm animate-pulse">
                <Sparkles className="w-4 h-4" />
                Serving Huntsville & Madison, AL
              </div>

              {/* Tagline */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
                Adding <span className="text-brand-pink relative inline-block">Fun<span className="absolute left-0 bottom-1 w-full h-2 bg-brand-pink/15 -z-10" /></span>, 
                {" "}<span className="text-brand-blue relative inline-block">Color<span className="absolute left-0 bottom-1 w-full h-2 bg-brand-blue/15 -z-10" /></span>, & 
                {" "}<span className="text-brand-yellow relative inline-block">Smiles<span className="absolute left-0 bottom-1 w-full h-2 bg-brand-yellow/15 -z-10" /></span> to Any Event!
              </h1>

              {/* Description */}
              <p className="max-w-xl text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
                Coco's Face Painting & Balloon Twisting brings imagination to life. From gorgeous cosmetic-grade face art to biodegradable balloon animals and stunning decor, we make your celebrations unforgettable!
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-pink to-brand-orange text-white font-bold text-lg shadow-xl shadow-brand-pink/20 hover:shadow-brand-pink/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  id="hero-cta-btn"
                >
                  Book Your Event
                  <ChevronRight className="w-5 h-5 ml-1.5" />
                </a>
                <a 
                  href="#services" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white border-2 border-orange-100 hover:border-brand-blue text-gray-700 hover:text-brand-blue font-bold text-lg transition-all duration-200"
                >
                  Explore Services
                </a>
              </div>

              {/* Trust highlights in Hero */}
              <div className="pt-6 grid grid-cols-3 gap-6 border-t border-orange-100/60 w-full">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-bold text-brand-pink">100%</span>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center lg:text-left">FDA-Compliant</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-bold text-brand-blue">Eco</span>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center lg:text-left">Biodegradable</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl font-bold text-brand-purple">Fully</span>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center lg:text-left">Insured & Safe</span>
                </div>
              </div>

            </div>

            {/* Hero Image Collage */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              {/* Playful background frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow to-brand-pink opacity-20 blur-2xl rounded-3xl -z-10 scale-95 pointer-events-none" />
              
              {/* Image Container with floating objects */}
              <div className="relative w-full max-w-[480px] h-[400px] md:h-[450px]">
                {/* Main Image 1 (Face Painting) */}
                <div className="absolute top-0 left-0 w-[65%] h-[60%] rounded-3xl overflow-hidden border-4 border-white shadow-xl rotate-[-3deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300">
                  <Image 
                    src="/images/face-painting.png"
                    alt="Face Painting Showcase"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-2 left-2 bg-brand-pink/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    🎨 Face Art
                  </div>
                </div>

                {/* Main Image 2 (Balloon Twisting) */}
                <div className="absolute bottom-0 right-0 w-[65%] h-[60%] rounded-3xl overflow-hidden border-4 border-white shadow-xl rotate-[4deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300">
                  <Image 
                    src="/images/balloon-twisting.png"
                    alt="Balloon Twisting Showcase"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-2 right-2 bg-brand-blue/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    🎈 Balloon Animals
                  </div>
                </div>

                {/* Floating Balloon Arch Deco (Top Right) */}
                <div className="absolute top-[10%] right-[5%] w-[40%] h-[35%] rounded-3xl overflow-hidden border-4 border-white shadow-lg rotate-[-8deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300 hidden sm:block">
                  <Image 
                    src="/images/balloon-decor.png"
                    alt="Balloon Decor Arch"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>

                {/* Decorative floating badges */}
                <div className="absolute -top-4 right-1/4 bg-white p-3 rounded-2xl shadow-lg border border-orange-50 flex items-center gap-2 -rotate-12 animate-bounce">
                  <span className="text-xl">✨</span>
                  <span className="text-xs font-bold text-gray-700">Magical Event Fun!</span>
                </div>

                <div className="absolute bottom-1/3 -left-6 bg-[#fffcf9] p-3 rounded-2xl shadow-lg border border-orange-100 flex items-center gap-2 rotate-6">
                  <div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center text-white">
                    <Smile className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 leading-none">COMMITTED TO</span>
                    <span className="text-xs font-black text-gray-800">100% Smiles</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-orange-50/40 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#ff5995_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-purple bg-brand-purple/10 px-4 py-1.5 rounded-full">
              What We Do Best
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              Our Fun & Colorful Services
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              We provide professional, high-quality, and interactive entertainment services. Select a tab to see specific details.
            </p>

            {/* Interactive Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pt-6">
              {[
                { id: "all", label: "All Services" },
                { id: "painting", label: "Face Painting" },
                { id: "twisting", label: "Balloon Twisting" },
                { id: "decor", label: "Balloon Decor" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue text-white shadow-md scale-105"
                      : "bg-white text-gray-600 hover:bg-orange-50 border border-orange-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services Display Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={service.id} 
                className="bg-white rounded-3xl overflow-hidden border border-orange-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Service Image */}
                <div className="relative h-64 w-full">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/95 text-gray-800 text-xs font-bold rounded-full shadow-sm backdrop-blur-sm">
                      ✨ Premium Quality
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl font-bold text-gray-900 flex items-center gap-2.5">
                      {service.id === "painting" && <Paintbrush className="w-6 h-6 text-brand-pink" />}
                      {service.id === "twisting" && <Gift className="w-6 h-6 text-brand-blue" />}
                      {service.id === "decor" && <Sparkles className="w-6 h-6 text-brand-purple" />}
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2 pt-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a 
                    href="#contact" 
                    onClick={() => {
                      // Automatically select this service in the contact form
                      if (!formData.services.includes(service.title)) {
                        setFormData(prev => ({ ...prev, services: [...prev.services, service.title] }));
                      }
                    }}
                    className={`block w-full py-3.5 px-4 rounded-full font-bold text-center text-sm shadow-md transition-all duration-200 cursor-pointer ${service.buttonColor}`}
                  >
                    Inquire About {service.title}
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Events We Serve Section */}
      <section id="events" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-pink bg-brand-pink/10 px-4 py-1.5 rounded-full">
              Versatile & Experienced
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              We Bring Fun to Any Event!
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              No event is too big or too small. We specialize in bringing life, color, and excitement to a wide variety of celebrations in the Tennessee Valley area.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {eventTypes.map((event, index) => {
              // Cycle through colored accents
              const colors = [
                { bg: "hover:bg-brand-pink/5 hover:border-brand-pink/40", icon: "text-brand-pink" },
                { bg: "hover:bg-brand-blue/5 hover:border-brand-blue/40", icon: "text-brand-blue" },
                { bg: "hover:bg-brand-yellow/5 hover:border-brand-yellow/40", icon: "text-brand-yellow" },
                { bg: "hover:bg-brand-purple/5 hover:border-brand-purple/40", icon: "text-brand-purple" },
                { bg: "hover:bg-brand-orange/5 hover:border-brand-orange/40", icon: "text-brand-orange" },
                { bg: "hover:bg-brand-green/5 hover:border-brand-green/40", icon: "text-brand-green" },
              ];
              const accent = colors[index % colors.length];

              return (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl border border-orange-100 bg-[#fffcf9] flex flex-col justify-between gap-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-md ${accent.bg}`}
                >
                  <div className="flex justify-between items-start">
                    <div className={`p-2.5 rounded-xl bg-white shadow-sm border border-orange-50 ${accent.icon}`}>
                      <Smile className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-300">#0{index + 1}</span>
                  </div>
                  <h3 className="font-display font-bold text-base md:text-lg text-gray-800 leading-snug">
                    {event}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Quick Contact Link */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 font-medium">
              Don't see your event type listed?{" "}
              <a href="#contact" className="text-brand-pink font-bold hover:underline inline-flex items-center gap-1">
                Contact us anyway <ChevronRight className="w-4 h-4" />
              </a>
              — we love customizing our setups for unique events!
            </p>
          </div>

        </div>
      </section>

      {/* About & Trust Signals Section */}
      <section id="about" className="py-20 bg-orange-50/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* About Image / Badge Column */}
            <div className="lg:col-span-5 relative flex justify-center">
              {/* Balloon Arch Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 to-brand-blue/20 blur-3xl rounded-full scale-95 pointer-events-none" />
              
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden border-8 border-white shadow-xl bg-white flex flex-col justify-between p-6">
                
                {/* Visual Header */}
                <div className="flex justify-between items-center">
                  <span className="px-3.5 py-1 bg-brand-yellow/15 text-brand-yellow-hover border border-brand-yellow/20 rounded-full font-bold text-xs">
                    FDA Compliant
                  </span>
                  <span className="text-xs font-bold text-gray-400">Coco's Promise</span>
                </div>

                {/* Giant Sparkle/Stamp inside card */}
                <div className="my-auto flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-brand-pink to-brand-orange flex items-center justify-center text-white shadow-lg rotate-6">
                    <ShieldCheck className="w-10 h-10" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-xl text-gray-800">Safe, Fun & Insured</h4>
                    <p className="text-xs text-gray-500 font-medium px-4">
                      We treat your children's safety and environment with the highest professional care.
                    </p>
                  </div>
                </div>

                {/* Certification highlights */}
                <div className="border-t border-gray-100 pt-4 grid grid-cols-2 gap-2 text-center">
                  <div className="flex flex-col items-center">
                    <CheckCircle2 className="w-5 h-5 text-brand-green mb-1" />
                    <span className="text-[10px] font-bold text-gray-600">Cosmetic-Grade Paints</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <CheckCircle2 className="w-5 h-5 text-brand-green mb-1" />
                    <span className="text-[10px] font-bold text-gray-600">100% Biodegradable</span>
                  </div>
                </div>

              </div>
            </div>

            {/* About Info & Trust Signals */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-4 py-1.5 rounded-full">
                  Meet Coco
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
                  Professional Entertainment You Can Trust
                </h2>
                <p className="text-lg text-gray-600 font-medium leading-relaxed">
                  Serving <strong>Huntsville, Madison, and the Tennessee Valley area</strong>, we are a dedicated family-friendly mobile entertainment service. Our absolute top priorities are bringing premium fun and maintaining rigorous safety and environmental standards.
                </p>
              </div>

              {/* Trust Signals grid */}
              <div id="trust" className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* Signal 1 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-orange-100 flex items-center justify-center text-brand-pink shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-gray-800 text-base">FDA Compliant Cosmetics</h3>
                    <p className="text-sm text-gray-600">
                      We use only professional, FDA-compliant, and hypoallergenic cosmetic-grade skin paints that wash off easily with soap and warm water.
                    </p>
                  </div>
                </div>

                {/* Signal 2 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-orange-100 flex items-center justify-center text-brand-blue shrink-0">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-gray-800 text-base">100% Biodegradable Latex</h3>
                    <p className="text-sm text-gray-600">
                      Our balloons are made from premium-quality natural latex, which is 100% biodegradable, making them environmentally friendly.
                    </p>
                  </div>
                </div>

                {/* Signal 3 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-orange-100 flex items-center justify-center text-brand-yellow-hover shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-gray-800 text-base">Huntsville & Madison Local</h3>
                    <p className="text-sm text-gray-600">
                      Proudly serving families, schools, and corporate clients throughout Madison County, Limestone County, and the Tennessee Valley.
                    </p>
                  </div>
                </div>

                {/* Signal 4 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-orange-100 flex items-center justify-center text-brand-purple shrink-0">
                    <Star className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-gray-800 text-base">Diverse Event Coverage</h3>
                    <p className="text-sm text-gray-600">
                      With experience spanning hundreds of events, we adapt our designs to suit toddlers, teens, and adults seamlessly.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Booking & Contact Section */}
      <section id="contact" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-full">
                  Get In Touch
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                  Contact For Your Free Quote
                </h2>
                <p className="text-lg text-gray-600 font-medium">
                  Ready to add a splash of color to your next event? Fill out our form or contact us directly using the options below!
                </p>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-4">
                
                {/* Phone Link (Click to Call) */}
                <a 
                  href="tel:219-588-8646" 
                  className="flex items-center gap-4 p-4 rounded-2xl border border-orange-100 bg-[#fffcf9] hover:border-brand-pink hover:bg-brand-pink/5 hover:-translate-y-0.5 transition-all duration-200 group"
                  id="contact-call-btn"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-pink flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 block tracking-wider uppercase">CALL OR TEXT</span>
                    <span className="font-display font-bold text-lg text-gray-800 group-hover:text-brand-pink transition-colors">
                      219-588-8646
                    </span>
                  </div>
                </a>

                {/* Email Link */}
                <a 
                  href="mailto:CocosFacePainting@yahoo.com" 
                  className="flex items-center gap-4 p-4 rounded-2xl border border-orange-100 bg-[#fffcf9] hover:border-brand-blue hover:bg-brand-blue/5 hover:-translate-y-0.5 transition-all duration-200 group"
                  id="contact-email-btn"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 block tracking-wider uppercase">EMAIL DIRECTLY</span>
                    <span className="font-display font-bold text-lg text-gray-800 group-hover:text-brand-blue transition-colors break-all">
                      CocosFacePainting@yahoo.com
                    </span>
                  </div>
                </a>

                {/* Instagram Link */}
                <a 
                  href="https://www.instagram.com/cocosfacepaintingandballoonart/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-orange-100 bg-[#fffcf9] hover:border-brand-purple hover:bg-brand-purple/5 hover:-translate-y-0.5 transition-all duration-200 group"
                  id="contact-instagram-btn"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-purple flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 block tracking-wider uppercase">INSTAGRAM DM</span>
                    <span className="font-display font-bold text-lg text-gray-800 group-hover:text-brand-purple transition-colors">
                      @cocosfacepaintingandballoonart
                    </span>
                  </div>
                </a>

              </div>
            </div>

            {/* Inquiry Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-[#fffcf9] p-6 sm:p-10 rounded-3xl border border-orange-100 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />
                
                {formSubmitted ? (
                  /* Success State */
                  <div className="text-center py-12 space-y-6">
                    <div className="w-20 h-20 bg-brand-green/10 text-brand-green border border-brand-green/20 rounded-full flex items-center justify-center mx-auto">
                      <Smile className="w-12 h-12" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-3xl text-gray-800">Inquiry Sent Successfully!</h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        Thank you for reaching out, <strong>{formData.name}</strong>! We will check availability for your event on <strong>{formData.date || "your selected date"}</strong> and get back to you shortly.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50/50 rounded-2xl text-left border border-orange-100 inline-block max-w-sm w-full space-y-2 text-sm text-gray-700">
                      <p><strong>Summary of Request:</strong></p>
                      <p>📍 Services: {formData.services.length > 0 ? formData.services.join(", ") : "Not specified"}</p>
                      <p>🎈 Event Type: {formData.eventType || "Not specified"}</p>
                      <p>📞 Phone: {formData.phone}</p>
                      <p>✉️ Email: {formData.email}</p>
                    </div>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-brand-blue text-white font-bold hover:bg-brand-blue-hover transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  /* Booking Form */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-display text-xl font-bold text-gray-800">Send an Inquiry</h3>
                      <p className="text-sm text-gray-500">Provide details about your event, and we'll send you a custom quote.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-1">
                        <label htmlFor="name" className="text-xs font-bold text-gray-600 block">Your Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          required 
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-orange-100 bg-white focus:outline-none focus:border-brand-pink text-gray-800 font-medium text-sm transition-colors"
                          placeholder="e.g. Sarah Jenkins"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label htmlFor="phone" className="text-xs font-bold text-gray-600 block">Phone Number *</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          required 
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-orange-100 bg-white focus:outline-none focus:border-brand-pink text-gray-800 font-medium text-sm transition-colors"
                          placeholder="e.g. 256-555-0199"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="space-y-1">
                        <label htmlFor="email" className="text-xs font-bold text-gray-600 block">Email Address *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          required 
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-orange-100 bg-white focus:outline-none focus:border-brand-pink text-gray-800 font-medium text-sm transition-colors"
                          placeholder="e.g. sarah@example.com"
                        />
                      </div>

                      {/* Event Date */}
                      <div className="space-y-1">
                        <label htmlFor="date" className="text-xs font-bold text-gray-600 block">Event Date *</label>
                        <input 
                          type="date" 
                          id="date" 
                          name="date" 
                          required 
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-orange-100 bg-white focus:outline-none focus:border-brand-pink text-gray-800 font-medium text-sm transition-colors"
                        />
                      </div>
                    </div>

                    {/* Event Type Select */}
                    <div className="space-y-1">
                      <label htmlFor="eventType" className="text-xs font-bold text-gray-600 block">Event Type *</label>
                      <select 
                        id="eventType" 
                        name="eventType" 
                        required 
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-orange-100 bg-white focus:outline-none focus:border-brand-pink text-gray-800 font-medium text-sm transition-colors"
                      >
                        <option value="">Select event type...</option>
                        {eventTypes.map((event, idx) => (
                          <option key={idx} value={event}>{event}</option>
                        ))}
                        <option value="Other">Other Event</option>
                      </select>
                    </div>

                    {/* Services Checklist */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-gray-600 block">Services Needed (Select all that apply):</span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {["Face Painting", "Balloon Twisting", "Balloon Decor"].map((service) => (
                          <label 
                            key={service} 
                            className={`flex items-center gap-2.5 p-3 rounded-xl border border-orange-100 bg-white cursor-pointer hover:border-brand-pink/40 hover:bg-brand-pink/5 transition-all duration-200 select-none ${
                              formData.services.includes(service) ? "border-brand-pink bg-brand-pink/5 text-brand-pink font-semibold" : ""
                            }`}
                          >
                            <input 
                              type="checkbox" 
                              checked={formData.services.includes(service)}
                              onChange={() => handleCheckboxChange(service)}
                              className="w-4 h-4 rounded text-brand-pink focus:ring-brand-pink border-gray-300 accent-brand-pink"
                            />
                            <span className="text-xs sm:text-sm">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label htmlFor="message" className="text-xs font-bold text-gray-600 block">Details & Special Requests</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-orange-100 bg-white focus:outline-none focus:border-brand-pink text-gray-800 font-medium text-sm transition-colors resize-none"
                        placeholder="Please include approximate guest count, duration, location, themes, or any questions..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      id="contact-submit-btn"
                      className="w-full py-4 rounded-full bg-gradient-to-r from-brand-pink to-brand-orange text-white font-bold text-base shadow-lg shadow-brand-pink/20 hover:shadow-brand-pink/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                    >
                      Submit Free Quote Request
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Footer Logo Info */}
            <div className="md:col-span-5 space-y-4">
              <a href="#" className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-brand-pink to-brand-orange rounded-xl shadow-md rotate-3">
                  <Paintbrush className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-xl font-bold tracking-tight text-white">
                    Coco's
                  </span>
                  <span className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase -mt-1">
                    Face Painting & Balloon Art
                  </span>
                </div>
              </a>
              <p className="text-sm text-gray-400 max-w-sm">
                Providing vibrant, safe, and professional face painting, balloon twisting, and custom balloon decor designs that elevate children's birthday parties, corporate events, and festivals.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#events" className="hover:text-white transition-colors">Events Served</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Safety</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Free Quote</a></li>
              </ul>
            </div>

            {/* Service Areas */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">Our Service Area</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                We are a fully mobile entertainment service bringing the party directly to you in <strong>Huntsville, Madison, Decatur, Athens</strong>, and across the <strong>Tennessee Valley</strong> area in Alabama.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-pink">
                <MapPin className="w-4 h-4" />
                <span>Huntsville & Madison County, AL</span>
              </div>
            </div>

          </div>

          {/* Bottom Footer Details */}
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Coco's Face Painting & Balloon Twisting. All Rights Reserved.</p>
            <p>Designed with ❤️ for Coco's Face Painting and Balloon Art</p>
          </div>

        </div>
      </footer>
    </div>
  );
}
