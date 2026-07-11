"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Heart, 
  Star, 
  Sparkles, 
  Instagram, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Menu, 
  X, 
  ArrowRight,
  Clock,
  Calendar,
  Gift,
  ShoppingBag,
  MessageSquare
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    quantity: "1 Dozen",
    theme: "",
    details: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create pre-filled email client mailto link
    const subject = encodeURIComponent(`Cookie Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Melissa,\n\nI would love to inquire about custom cookies!\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Requested Date: ${formData.date}\n` +
      `Quantity: ${formData.quantity}\n` +
      `Theme/Occasion: ${formData.theme}\n` +
      `Design Details & Inspiration: ${formData.details}\n\n` +
      `Thank you!`
    );
    
    window.location.href = `mailto:goodngonecookiejar@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const services = [
    {
      title: "Custom Decorated Cookies",
      image: "/cookie_hero.png",
      tag: "Most Popular",
      desc: "Signature vanilla-almond sugar cookies hand-decorated to match any hobby, sport, or special milestone.",
      features: ["Custom color match", "Vibrant royal icing details", "Individually heat-sealed"],
      bg: "bg-cookie-pink-light/40 border-cookie-pink/40"
    },
    {
      title: "Wedding & Shower Cookies",
      image: "/cookie_wedding.png",
      tag: "Elegant",
      desc: "Delicate bridal shower, engagement, and wedding favors with intricate lace, floral, and gold accents.",
      features: ["Elegant monogram details", "Custom shapes & sizes", "Perfect guest favors"],
      bg: "bg-cookie-cream border-cookie-yellow/30"
    },
    {
      title: "Holiday & Seasonal Sets",
      image: "/cookie_holiday.png",
      tag: "Limited Runs",
      desc: "Festive, seasonally themed cookies for Christmas, Valentine's Day, Halloween, and more.",
      features: ["Beautiful gift boxes", "Festive designs", "Pre-order availability"],
      bg: "bg-cookie-green-light/40 border-cookie-green/40"
    },
    {
      title: "Birthday Collections",
      image: "/cookie_birthday.png",
      tag: "Fun & Playful",
      desc: "Fun, vibrant cookie sets featuring custom ages, names, and beloved cartoon characters or themes.",
      features: ["Bright, playful colors", "Personalized lettering", "Kid-approved taste"],
      bg: "bg-cookie-yellow-light/40 border-cookie-yellow/40"
    }
  ];

  const galleryItems = [
    { src: "/cookie_hero.png", title: "Hand-painted Florals", tag: "Floral" },
    { src: "/cookie_wedding.png", title: "Elegant Bride & Groom Set", tag: "Wedding" },
    { src: "/cookie_holiday.png", title: "Halloween Pumpkin Set", tag: "Holiday" },
    { src: "/cookie_birthday.png", title: "First Birthday Set", tag: "Birthday" },
    { src: "/cookie_about.png", title: "Freshly Boxed Hearts", tag: "Custom" },
    { src: "/cookie_hero.png", title: "Custom Baby Shower Set", tag: "Baby Shower" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-cookie-pink selection:text-cookie-pink-dark">
      
      {/* Header & Navigation */}
      <header className="sticky top-0 z-50 bg-[#FAF6EE]/95 backdrop-blur-md border-b border-cookie-pink-light transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-cookie-pink flex items-center justify-center text-cookie-pink-dark shadow-sm group-hover:scale-110 transition-transform">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="font-heading text-xl font-bold text-cookie-brown-dark tracking-tight block">
                Good'N Gone Cookie Jar
              </span>
              <span className="text-xs text-cookie-pink-dark font-medium -mt-1 block tracking-wider uppercase">
                Waco, Texas
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-semibold text-cookie-brown-dark hover:text-cookie-pink-dark transition-colors">Services</a>
            <a href="#about" className="text-sm font-semibold text-cookie-brown-dark hover:text-cookie-pink-dark transition-colors">About Melissa</a>
            <a href="#process" className="text-sm font-semibold text-cookie-brown-dark hover:text-cookie-pink-dark transition-colors">How to Order</a>
            <a href="#gallery" className="text-sm font-semibold text-cookie-brown-dark hover:text-cookie-pink-dark transition-colors">Gallery</a>
            <a href="#reviews" className="text-sm font-semibold text-cookie-brown-dark hover:text-cookie-pink-dark transition-colors">Reviews</a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-cookie-pink text-cookie-pink-deep font-bold text-sm shadow-sm hover:bg-cookie-pink-medium hover:text-white transition-all hover:scale-105 active:scale-95 duration-200">
              Order Your Cookies
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-cookie-pink-light text-cookie-brown-dark md:hidden transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="md:hidden border-b border-cookie-pink-light bg-[#FAF6EE] px-4 pt-2 pb-6 flex flex-col gap-4 shadow-inner">
            <a 
              href="#services" 
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 font-semibold text-cookie-brown-dark hover:bg-cookie-pink-light rounded-xl transition-all"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 font-semibold text-cookie-brown-dark hover:bg-cookie-pink-light rounded-xl transition-all"
            >
              About Melissa
            </a>
            <a 
              href="#process" 
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 font-semibold text-cookie-brown-dark hover:bg-cookie-pink-light rounded-xl transition-all"
            >
              How to Order
            </a>
            <a 
              href="#gallery" 
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 font-semibold text-cookie-brown-dark hover:bg-cookie-pink-light rounded-xl transition-all"
            >
              Gallery
            </a>
            <a 
              href="#reviews" 
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 font-semibold text-cookie-brown-dark hover:bg-cookie-pink-light rounded-xl transition-all"
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="mx-4 mt-2 inline-flex items-center justify-center py-3 rounded-full bg-cookie-pink text-cookie-pink-deep font-bold shadow-sm hover:bg-cookie-pink-medium hover:text-white transition-all active:scale-95 duration-200"
            >
              Order Your Cookies
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">

        {/* Hero Section */}
        <section className="relative pt-12 pb-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#FAF6EE] to-[#FFFBF5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Hero Left */}
              <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cookie-pink-light border border-cookie-pink/40 text-cookie-pink-dark text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 animate-float">
                  <MapPin className="w-4 h-4 text-cookie-pink-medium" /> Waco, Texas Home Bakery
                </div>
                
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-cookie-brown-dark leading-[1.15] mb-6">
                  Handcrafted Custom <br className="hidden sm:inline" />
                  <span className="relative">
                    <span className="relative z-10 text-cookie-pink-dark">Decorated Cookies</span>
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-cookie-yellow/50 -z-10 rounded-full"></span>
                  </span><br />
                  for Any Occasion
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-cookie-brown-light max-w-xl mb-8 leading-relaxed">
                  Baking smiles from scratch in Waco. Melissa creates beautifully detailed, delicious sugar cookies custom-designed to bring your sweetest visions to life.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cookie-pink-dark text-white font-bold text-base shadow-md hover:bg-cookie-pink-deep hover:shadow-lg transition-all hover:scale-105 active:scale-95 duration-200 group"
                  >
                    <span>Order Your Cookies</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                  <a 
                    href="#gallery" 
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-cookie-pink text-cookie-pink-deep font-bold text-base bg-white/60 hover:bg-cookie-pink-light hover:border-cookie-pink-medium transition-all duration-200"
                  >
                    Browse Designs
                  </a>
                </div>
              </div>

              {/* Hero Right */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px]">
                  
                  {/* Decorative Background Blobs */}
                  <div className="absolute -top-4 -left-4 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-cookie-pink/30 blur-2xl -z-10"></div>
                  <div className="absolute -bottom-4 -right-4 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-cookie-yellow/40 blur-2xl -z-10"></div>
                  
                  {/* Custom Styled Frame */}
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-8 border-cookie-cream shadow-xl rotate-1 sm:rotate-2 hover:rotate-0 transition-all duration-300 bg-white">
                    <Image 
                      src="/cookie_hero.png" 
                      alt="Beautiful custom decorated sugar cookies with royal icing" 
                      fill 
                      priority
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover"
                    />
                  </div>

                  {/* Trust Badge overlay */}
                  <div className="absolute -bottom-6 -left-6 sm:bottom-4 sm:-left-4 bg-white px-5 py-3.5 rounded-2xl shadow-lg border border-cookie-pink-light flex items-center gap-3 animate-bounce-slow">
                    <div className="w-10 h-10 rounded-full bg-cookie-yellow-light flex items-center justify-center text-cookie-yellow-dark">
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="flex gap-0.5 text-cookie-yellow-dark">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                      </div>
                      <span className="text-xs font-bold text-cookie-brown-dark block">5.0 Star Rating</span>
                    </div>
                  </div>

                  {/* Sparkles overlay */}
                  <div className="absolute -top-6 -right-4 sm:-top-4 sm:-right-4 bg-cookie-pink text-cookie-pink-deep px-4 py-2 rounded-full shadow-md border border-cookie-pink-medium flex items-center gap-1.5 text-xs font-bold rotate-6">
                    <Sparkles className="w-4 h-4" /> 100% Made With Love
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Trust Signals Banner */}
        <section className="bg-cookie-pink-light border-y border-cookie-pink/40 py-8 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-cookie-pink/30">
              
              <div className="flex flex-col items-center justify-center px-4 py-2">
                <span className="font-heading text-3xl font-extrabold text-cookie-pink-dark">5.0 ★</span>
                <span className="text-xs sm:text-sm font-semibold text-cookie-brown-light mt-1">Loved by Waco Locals</span>
              </div>
              
              <div className="flex flex-col items-center justify-center px-4 py-2">
                <span className="font-heading text-xl sm:text-2xl font-bold text-cookie-brown-dark flex items-center gap-1">
                  <CheckCircle className="w-5 h-5 text-cookie-pink-medium" /> Local Pickup
                </span>
                <span className="text-xs sm:text-sm font-semibold text-cookie-brown-light mt-1">Easy Waco, TX Pickup</span>
              </div>

              <div className="flex flex-col items-center justify-center px-4 py-2">
                <span className="font-heading text-xl sm:text-2xl font-bold text-cookie-brown-dark flex items-center gap-1">
                  <Sparkles className="w-5 h-5 text-cookie-yellow-dark" /> Custom Design
                </span>
                <span className="text-xs sm:text-sm font-semibold text-cookie-brown-light mt-1">Tailored to Your Theme</span>
              </div>

              <div className="flex flex-col items-center justify-center px-4 py-2">
                <span className="font-heading text-xl sm:text-2xl font-bold text-cookie-brown-dark flex items-center gap-1">
                  <Heart className="w-5 h-5 text-cookie-pink-medium fill-current" /> Small Batch
                </span>
                <span className="text-xs sm:text-sm font-semibold text-cookie-brown-light mt-1">Personal Attention</span>
              </div>

            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-cookie-cream/40 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cookie-brown-dark mb-4">
                Sweet Custom Creations for Every Event
              </h2>
              <div className="w-24 h-1.5 bg-cookie-pink rounded-full mx-auto mb-6"></div>
              <p className="text-cookie-brown-light leading-relaxed">
                Whether you need elegant colors for a wedding or fun cartoon shapes for a birthday, Melissa handcrafts every cookie set to match your exact theme.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((item, idx) => (
                <div 
                  key={idx}
                  className={`rounded-3xl border p-5 flex flex-col bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group ${item.bg}`}
                >
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 250px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white text-cookie-pink-deep px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      {item.tag}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-lg font-bold text-cookie-brown-dark mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-cookie-brown-light leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>

                  <div className="border-t border-cookie-brown-dark/5 pt-4 mt-auto">
                    <ul className="space-y-2">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-1.5 text-xs text-cookie-brown-dark/95">
                          <CheckCircle className="w-3.5 h-3.5 text-cookie-pink-medium flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <span className="text-sm font-semibold text-cookie-brown-light block mb-4">
                🍪 Flavor Profile: Our signature cookie is a thick, soft-baked vanilla-almond sugar cookie, iced with royal icing.
              </span>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-1 text-cookie-pink-dark font-bold hover:text-cookie-pink-deep group transition-colors text-sm"
              >
                <span>Need a custom flavor or dietary inquiry? Ask Melissa</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="process" className="py-20 bg-white border-y border-cookie-pink-light/40 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-cookie-pink-dark font-bold text-xs uppercase tracking-widest block mb-2">Simple Steps</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cookie-brown-dark mb-4">
                How Our Custom Ordering Works
              </h2>
              <div className="w-24 h-1.5 bg-cookie-yellow rounded-full mx-auto mb-6"></div>
              <p className="text-cookie-brown-light leading-relaxed">
                As a home-based small bakery, I specialize in personal attention. We work together to create the perfect design for your date.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-1/4 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-cookie-pink/40 -z-10"></div>

              {/* Step 1 */}
              <div className="flex flex-col items-center text-center p-4 bg-[#FAF6EE]/35 rounded-2xl border border-cookie-pink-light/20">
                <div className="w-16 h-16 rounded-full bg-cookie-pink-light text-cookie-pink-dark flex items-center justify-center font-heading text-2xl font-bold shadow-inner mb-6 relative">
                  1
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-cookie-pink/50 flex items-center justify-center">
                    <Calendar className="w-3.5 h-3.5 text-cookie-pink-medium" />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold text-cookie-brown-dark mb-2">Share Your Theme</h3>
                <p className="text-sm text-cookie-brown-light leading-relaxed">
                  Provide your pickup date, quantities (minimum 1 dozen), and design ideas, color palettes, or inspiration photos.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center p-4 bg-[#FAF6EE]/35 rounded-2xl border border-cookie-pink-light/20">
                <div className="w-16 h-16 rounded-full bg-cookie-yellow-light text-cookie-yellow-dark flex items-center justify-center font-heading text-2xl font-bold shadow-inner mb-6 relative">
                  2
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-cookie-yellow/50 flex items-center justify-center">
                    <MessageSquare className="w-3.5 h-3.5 text-cookie-yellow-dark" />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold text-cookie-brown-dark mb-2">Get a Quote</h3>
                <p className="text-sm text-cookie-brown-light leading-relaxed">
                  Melissa reviews your request, maps out details, confirms availability for your date, and provides a custom price quote.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center p-4 bg-[#FAF6EE]/35 rounded-2xl border border-cookie-pink-light/20">
                <div className="w-16 h-16 rounded-full bg-cookie-pink-light text-cookie-pink-dark flex items-center justify-center font-heading text-2xl font-bold shadow-inner mb-6 relative">
                  3
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-cookie-pink/50 flex items-center justify-center">
                    <Gift className="w-3.5 h-3.5 text-cookie-pink-medium" />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold text-cookie-brown-dark mb-2">Baked & Decorated</h3>
                <p className="text-sm text-cookie-brown-light leading-relaxed">
                  Once details are locked in, Melissa hand-decorates every cookie in the batch with personal care, and heat-seals them fresh.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center p-4 bg-[#FAF6EE]/35 rounded-2xl border border-cookie-pink-light/20">
                <div className="w-16 h-16 rounded-full bg-cookie-yellow-light text-cookie-yellow-dark flex items-center justify-center font-heading text-2xl font-bold shadow-inner mb-6 relative">
                  4
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-cookie-yellow/50 flex items-center justify-center">
                    <ShoppingBag className="w-3.5 h-3.5 text-cookie-yellow-dark" />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold text-cookie-brown-dark mb-2">Local Waco Pickup</h3>
                <p className="text-sm text-cookie-brown-light leading-relaxed">
                  Pick up your beautifully boxed custom cookies at our Waco cottage location, ready to delight your guests!
                </p>
              </div>

            </div>

            <div className="bg-cookie-pink-light/40 border border-cookie-pink/30 rounded-2xl p-6 md:p-8 mt-12 text-center max-w-3xl mx-auto">
              <span className="font-bold text-cookie-pink-deep text-sm md:text-base block mb-2">
                ⚠️ Booking Notice
              </span>
              <p className="text-xs md:text-sm text-cookie-brown-dark/90 leading-relaxed">
                Because every single cookie is hand-decorated, I take on a limited number of orders per week. I highly recommend ordering <strong>2 to 4 weeks in advance</strong> to guarantee availability for your special event!
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-cookie-cream/40 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* About Left - Image */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px]">
                  
                  {/* Decorative background circle */}
                  <div className="absolute inset-0 rounded-full bg-cookie-yellow/40 blur-xl -z-10"></div>
                  
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-8 border-white shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300">
                    <Image 
                      src="/cookie_about.png" 
                      alt="Melissa decorating custom sugar cookies with royal icing" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-cookie-pink text-cookie-pink-deep px-5 py-3 rounded-2xl shadow-md border border-cookie-pink-medium text-center">
                    <span className="font-heading text-lg font-bold block">Melissa</span>
                    <span className="text-xs font-semibold uppercase tracking-wider block">Owner & Decorator</span>
                  </div>
                </div>
              </div>

              {/* About Right - Text */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cookie-yellow-light border border-cookie-yellow/60 text-cookie-yellow-dark text-xs font-bold uppercase tracking-wider mb-4">
                  Meet the Baker
                </span>
                
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cookie-brown-dark mb-6">
                  Made with Love in Waco, Texas
                </h2>
                
                <div className="w-20 h-1 bg-cookie-pink rounded-full mb-6"></div>

                <p className="text-cookie-brown-light leading-relaxed mb-4">
                  Welcome to Good'N Gone Cookie Jar! What started as a fun creative outlet in my home kitchen in Waco quickly turned into a passionate cottage bakery. I specialize in signature vanilla-almond decorated sugar cookies that bring a beautiful, personalized touch to your events.
                </p>

                <p className="text-cookie-brown-light leading-relaxed mb-6">
                  For me, baking is about sharing happiness. I understand that every occasion you celebrate is special. That's why I dedicate personal attention to every single cookie, taking time to hand-pipe every line, star, and flower. Every batch is baked fresh with premium ingredients, so they taste just as sweet and soft as they look.
                </p>

                <div className="grid grid-cols-2 gap-6 w-full max-w-md pt-4 border-t border-cookie-brown-dark/10">
                  <div className="flex gap-2.5 items-start text-left">
                    <CheckCircle className="w-5 h-5 text-cookie-pink-medium mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-cookie-brown-dark">100% Homemade</h4>
                      <p className="text-xs text-cookie-brown-light">Baked fresh from scratch</p>
                    </div>
                  </div>
                  <div className="flex gap-2.5 items-start text-left">
                    <CheckCircle className="w-5 h-5 text-cookie-pink-medium mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-cookie-brown-dark">Waco Local</h4>
                      <p className="text-xs text-cookie-brown-light">Proudly serving Waco & surrounding areas</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cookie-brown-dark mb-4">
                Our Sweet Designs Gallery
              </h2>
              <div className="w-24 h-1.5 bg-cookie-pink rounded-full mx-auto mb-6"></div>
              <p className="text-cookie-brown-light leading-relaxed">
                Take a peek inside our cookie jar. Browse some of our favorite custom-decorated batches.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {galleryItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="group relative rounded-3xl overflow-hidden aspect-square border border-cookie-pink-light bg-cookie-pink-light/20 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                >
                  <Image 
                    src={item.src} 
                    alt={item.title} 
                    fill 
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cookie-brown-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6 text-white">
                    <span className="text-xs font-semibold text-cookie-yellow tracking-wider uppercase mb-1">
                      {item.tag}
                    </span>
                    <h4 className="font-heading text-base sm:text-lg font-bold">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block bg-[#FAF6EE] border border-cookie-pink-light px-8 py-6 rounded-3xl max-w-xl mx-auto">
                <span className="text-sm font-semibold text-cookie-brown-light block mb-3">
                  See our latest weekly cookie themes and behind-the-scenes icing videos!
                </span>
                <a 
                  href="https://www.instagram.com/goodngonecookiejar254" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold text-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <Instagram className="w-4 h-4" />
                  <span>See more on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials / Trust Section */}
        <section id="reviews" className="py-20 bg-cookie-pink-light/30 border-y border-cookie-pink-light/55 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-cookie-pink-dark font-bold text-xs uppercase tracking-widest block mb-2">Love Letters</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cookie-brown-dark mb-4">
                What Waco is Saying
              </h2>
              <div className="w-24 h-1.5 bg-cookie-yellow rounded-full mx-auto mb-6"></div>
              <p className="text-cookie-brown-light leading-relaxed text-sm sm:text-base">
                I feel incredibly lucky to bake for so many beautiful Waco celebrations. Here are review snippets from sweet customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Review 1 */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-cookie-pink-light relative">
                <div className="flex gap-0.5 text-cookie-yellow-dark mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <blockquote className="text-sm sm:text-base text-cookie-brown-dark font-medium leading-relaxed mb-6">
                  "Melissa's cookies are absolute perfection! Not only were they the most beautiful cookies at my baby shower, but they were also incredibly soft and delicious. Everyone was asking where I got them!"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cookie-pink flex items-center justify-center font-bold text-[#451A03] text-sm">
                    SM
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-sm text-cookie-brown-dark block">Sarah M.</cite>
                    <span className="text-xs text-cookie-brown-light">Waco, TX Customer</span>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-cookie-pink-light relative">
                <div className="flex gap-0.5 text-cookie-yellow-dark mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <blockquote className="text-sm sm:text-base text-cookie-brown-dark font-medium leading-relaxed mb-6">
                  "I ordered a custom set for my daughter's graduation party and they went above and beyond my expectations. The attention to detail on the designs was spectacular, they were literally a work of art!"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cookie-yellow flex items-center justify-center font-bold text-[#451A03] text-sm">
                    DL
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-sm text-cookie-brown-dark block">David L.</cite>
                    <span className="text-xs text-cookie-brown-light">Waco, TX Customer</span>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-cookie-pink-light relative">
                <div className="flex gap-0.5 text-cookie-yellow-dark mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <blockquote className="text-sm sm:text-base text-cookie-brown-dark font-medium leading-relaxed mb-6">
                  "Best custom cookies in Waco! Melissa is so easy to work with and the ordering process via Instagram DM was seamless. The packaging is adorable too. We'll be ordering for every party!"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cookie-pink flex items-center justify-center font-bold text-[#451A03] text-sm">
                    ER
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-sm text-cookie-brown-dark block">Emily R.</cite>
                    <span className="text-xs text-cookie-brown-light">Woodway, TX Customer</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact & Ordering Section */}
        <section id="contact" className="py-20 bg-cookie-cream/40 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl border border-cookie-pink/40 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Info Panel */}
                <div className="lg:col-span-5 bg-cookie-pink-dark p-8 sm:p-12 text-white flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
                      <Sparkles className="w-3.5 h-3.5 fill-current" /> Book Your Date
                    </div>
                    <h3 className="font-heading text-3xl font-bold mb-4">
                      Let's Custom Design Your Cookies
                    </h3>
                    <p className="text-cookie-pink-light text-sm sm:text-base mb-8 leading-relaxed">
                      Message Melissa to check availability for your date and map out details. Every order is baked fresh and hand-painted.
                    </p>

                    <div className="space-y-6">
                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-cookie-pink-light">
                          <Instagram className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs text-cookie-pink-light block font-semibold">Instagram DM</span>
                          <a 
                            href="https://www.instagram.com/goodngonecookiejar254" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="font-bold text-sm sm:text-base hover:underline hover:text-cookie-pink-light transition-colors"
                          >
                            @goodngonecookiejar254
                          </a>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-cookie-pink-light">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs text-cookie-pink-light block font-semibold">Email Inquiry</span>
                          <a 
                            href="mailto:goodngonecookiejar@gmail.com" 
                            className="font-bold text-sm sm:text-base hover:underline hover:text-cookie-pink-light transition-colors"
                          >
                            goodngonecookiejar@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-cookie-pink-light">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs text-cookie-pink-light block font-semibold">Pickup Location</span>
                          <span className="font-bold text-sm sm:text-base block">
                            Waco, Texas (Local Pickup)
                          </span>
                          <span className="text-xs text-cookie-pink-light block mt-0.5">
                            *Exact address provided upon booking confirmation
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-6 border-t border-white/20 text-xs text-cookie-pink-light leading-relaxed">
                    <strong>Starting at $45 per dozen</strong> (minimum order 1 dozen). Price depends on complexity of color match and icing detail.
                  </div>
                </div>

                {/* Form Panel */}
                <div className="lg:col-span-7 p-8 sm:p-12 bg-white">
                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-cookie-brown-dark mb-2">
                    Send a Booking Inquiry
                  </h4>
                  <p className="text-xs sm:text-sm text-cookie-brown-light mb-6">
                    Enter details below. Submitting will launch your email client with your pre-filled inquiry to Melissa.
                  </p>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-cookie-brown-dark uppercase tracking-wider mb-1">
                          Your Name
                        </label>
                        <input 
                          type="text" 
                          name="name" 
                          required 
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Sarah Smith"
                          className="w-full px-4 py-2.5 rounded-xl border border-cookie-pink-light focus:outline-none focus:ring-2 focus:ring-cookie-pink focus:border-transparent text-sm text-cookie-brown-dark"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-cookie-brown-dark uppercase tracking-wider mb-1">
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          name="email" 
                          required 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. sarah@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-cookie-pink-light focus:outline-none focus:ring-2 focus:ring-cookie-pink focus:border-transparent text-sm text-cookie-brown-dark"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-cookie-brown-dark uppercase tracking-wider mb-1">
                          Event Date / Needed By
                        </label>
                        <input 
                          type="date" 
                          name="date" 
                          required 
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-cookie-pink-light focus:outline-none focus:ring-2 focus:ring-cookie-pink focus:border-transparent text-sm text-cookie-brown-dark"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-cookie-brown-dark uppercase tracking-wider mb-1">
                          Quantity
                        </label>
                        <select 
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-cookie-pink-light focus:outline-none focus:ring-2 focus:ring-cookie-pink focus:border-transparent text-sm text-cookie-brown-dark bg-white"
                        >
                          <option>1 Dozen (Min)</option>
                          <option>2 Dozen</option>
                          <option>3 Dozen</option>
                          <option>4 Dozen+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-cookie-brown-dark uppercase tracking-wider mb-1">
                        Theme / Occasion
                      </label>
                      <input 
                        type="text" 
                        name="theme" 
                        required 
                        value={formData.theme}
                        onChange={handleInputChange}
                        placeholder="e.g. Woodland Creatures Baby Shower"
                        className="w-full px-4 py-2.5 rounded-xl border border-cookie-pink-light focus:outline-none focus:ring-2 focus:ring-cookie-pink focus:border-transparent text-sm text-cookie-brown-dark"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-cookie-brown-dark uppercase tracking-wider mb-1">
                        Design details / Inspiration
                      </label>
                      <textarea 
                        name="details" 
                        rows={3}
                        value={formData.details}
                        onChange={handleInputChange}
                        placeholder="Detail color palettes, specific shapes (e.g. overalls, flowers, banners with name), or special requests..."
                        className="w-full px-4 py-2.5 rounded-xl border border-cookie-pink-light focus:outline-none focus:ring-2 focus:ring-cookie-pink focus:border-transparent text-sm text-cookie-brown-dark"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-cookie-pink text-cookie-pink-deep hover:bg-cookie-pink-medium hover:text-white font-bold text-sm sm:text-base shadow-sm transition-all hover:scale-102 active:scale-98 duration-200"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Prepare Inquiry Email</span>
                    </button>

                    {formSubmitted && (
                      <div className="p-3 bg-cookie-green-light border border-cookie-green text-cookie-green-dark rounded-xl text-xs flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        <span>Email client opened! You can review and click send. Melissa will respond shortly.</span>
                      </div>
                    )}
                  </form>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-cookie-brown-dark text-[#FAF6EE] pt-16 pb-8 border-t border-cookie-brown-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Branding Column */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-cookie-pink flex items-center justify-center text-cookie-pink-deep">
                  <Heart className="w-4 h-4 fill-current" />
                </div>
                <span className="font-heading text-lg font-bold text-white">Good'N Gone Cookie Jar</span>
              </div>
              <p className="text-xs text-cookie-pink-light/75 leading-relaxed max-w-sm">
                Melissa handcrafts beautiful custom decorated sugar cookies in Waco, Texas. Meticulous designs made from scratch to make your special moments even sweeter.
              </p>
            </div>

            {/* Links Column */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-cookie-yellow mb-4">
                Navigation
              </h5>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs">
                <a href="#services" className="hover:text-cookie-pink transition-colors">Services</a>
                <a href="#about" className="hover:text-cookie-pink transition-colors">About Melissa</a>
                <a href="#process" className="hover:text-cookie-pink transition-colors">How to Order</a>
                <a href="#gallery" className="hover:text-cookie-pink transition-colors">Gallery</a>
                <a href="#reviews" className="hover:text-cookie-pink transition-colors">Reviews</a>
                <a href="#contact" className="hover:text-cookie-pink transition-colors">Inquire Now</a>
              </div>
            </div>

            {/* Socials & Pickup Column */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-cookie-yellow mb-4">
                Say Hello
              </h5>
              <p className="text-xs text-cookie-pink-light/75 mb-3 leading-relaxed">
                Serving Waco, Woodway, Hewitt, and surrounding Texas areas.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/goodngonecookiejar254" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-cookie-pink flex items-center justify-center text-[#FAF6EE] hover:text-cookie-brown-dark transition-all duration-200"
                  aria-label="Instagram Link"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="mailto:goodngonecookiejar@gmail.com" 
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-cookie-pink flex items-center justify-center text-[#FAF6EE] hover:text-cookie-brown-dark transition-all duration-200"
                  aria-label="Email Link"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Legal / Texas Cottage Law Disclaimer */}
          <div className="pt-8 border-t border-white/15 text-center text-cookie-pink-light/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-[10px] sm:text-xs leading-relaxed max-w-2xl text-left md:text-center block mx-auto">
              📝 <strong>Texas Cottage Food Law Disclosure:</strong> Made in a home kitchen that is not regulated by a state or local health department. May contain allergens (wheat, eggs, milk, nuts).
            </span>
          </div>

          <div className="mt-8 text-center text-[10px] text-cookie-pink-light/50">
            &copy; {new Date().getFullYear()} Good'N Gone Cookie Jar. All rights reserved. Created with &hearts; in Waco, TX.
          </div>
        </div>
      </footer>

    </div>
  );
}
