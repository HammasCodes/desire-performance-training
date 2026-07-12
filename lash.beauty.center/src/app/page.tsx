"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Phone,
  MapPin,
  Clock,
  Check,
  Star,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Sparkle,
  Calendar,
  User,
  Heart,
  MessageSquare
} from "lucide-react";

const Instagram = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Lash Extensions",
    date: "",
    time: "",
    notes: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and phone number.");
      return;
    }
    setSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const services = [
    {
      title: "Silk Eyelash Extensions",
      price: "From AED 180",
      description: "Our signature natural-looking silk extensions. Choose from Classic, Hybrid, or Volume sets custom-tailored to enhance your eyes.",
      details: ["Classic Set (1:1): AED 180", "Hybrid Set (Mixed): AED 220", "Volume Set (3D-6D): AED 260", "Weightless, full & premium silk fiber"],
      image: "/images/lashes_hero.png"
    },
    {
      title: "Nail Services",
      price: "From AED 90",
      description: "Treat your hands to luxury gel manicures, custom extensions, and bespoke rose gold/lavender nail art designed by specialists.",
      details: ["Classic Manicure: AED 90", "Gel Manicure: AED 140", "Soft Gel Extensions: AED 220", "Custom Nail Art & Accents available"],
      image: "/images/nails_showcase.png"
    },
    {
      title: "Waxing & Hair Removal",
      price: "From AED 45",
      description: "Attentive, hygienic body and face waxing using premium soothing waxes to ensure minimal discomfort and silky smooth skin.",
      details: ["Eyebrow / Lip Wax: AED 45", "Full Arm Wax: AED 80", "Full Leg Wax: AED 120", "Hygienic & spotless process"],
      image: "/images/salon_interior.png"
    },
    {
      title: "Beauty Treatments",
      price: "From AED 120",
      description: "Revitalize your look with our professional brow lamination, lash lifts, and calming mini-facials designed for a flawless glow.",
      details: ["Lash Lift & Tint: AED 150", "Brow Lamination: AED 160", "Hydrating Facial (45m): AED 200", "Attentive & customized results"],
      image: "/images/salon_interior.png"
    }
  ];

  const testimonials = [
    {
      name: "Mariam Al Suwaidi",
      role: "Loyal Client (2+ Years)",
      rating: 5,
      text: "The lash quality here is unmatched! They feel completely weightless, and I regularly get 5 to 6 weeks of retention. The studio is spotless and so relaxing—I always fall asleep during my sessions!"
    },
    {
      name: "Sarah Jenkins",
      role: "Frequent Client",
      rating: 5,
      text: "Lash Beauty Center is Ajman's absolute best kept secret. The lavender and cream aesthetic is incredibly calming, and the staff are so professional and attentive. My gel nails and lashes always look pristine."
    },
    {
      name: "Fatima Al Kaabi",
      role: "Regular Client",
      rating: 5,
      text: "I love the personalized attention I get here. The technicians consult with you on what lash length and curl fits your eye shape best. It's clean, hygienic, and they play the most relaxing music. Highly recommended!"
    }
  ];

  // Helper to generate dynamic WhatsApp link
  const getWhatsAppLink = () => {
    const text = `Hi Lash Beauty Center, I'd like to book an appointment.
Name: ${formData.name || "Guest"}
Phone: ${formData.phone || "N/A"}
Service: ${formData.service}
Preferred Date: ${formData.date || "Anytime"}
Preferred Time: ${formData.time || "Anytime"}
Notes: ${formData.notes || "None"}`;
    return `https://wa.me/971561115841?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="flex-1 flex flex-col bg-cream-base text-slate-body overflow-hidden">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-cream-base/90 border-b border-lavender-light transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-2" id="nav-logo">
              <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-rosegold-primary to-lavender-primary flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-widest text-slate-deep font-semibold leading-tight">LASH</span>
                <span className="text-[10px] tracking-[0.25em] text-rosegold-primary font-medium -mt-0.5">BEAUTY CENTER</span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-sm font-medium text-slate-deep hover:text-rosegold-primary transition-colors" id="desktop-link-services">Services</a>
              <a href="#about" className="text-sm font-medium text-slate-deep hover:text-rosegold-primary transition-colors" id="desktop-link-about">About</a>
              <a href="#testimonials" className="text-sm font-medium text-slate-deep hover:text-rosegold-primary transition-colors" id="desktop-link-trust">Why Us</a>
              <a href="#location" className="text-sm font-medium text-slate-deep hover:text-rosegold-primary transition-colors" id="desktop-link-location">Location</a>
              <a href="#booking" className="text-sm font-medium text-slate-deep hover:text-rosegold-primary transition-colors" id="desktop-link-contact">Contact</a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="tel:+971561115841" 
                className="text-xs font-semibold text-slate-deep hover:text-rosegold-primary flex items-center gap-1.5 px-3 py-2 transition-all"
                id="desktop-call-cta"
              >
                <Phone className="w-3.5 h-3.5" /> +971 56 111 5841
              </a>
              <a
                href="#booking"
                className="bg-rosegold-primary hover:bg-rosegold-dark text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                id="desktop-book-cta"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-deep hover:text-rosegold-primary p-2 focus:outline-none"
                aria-label="Toggle menu"
                id="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cream-card border-b border-lavender-light animate-fade-in-up py-4 px-6 space-y-4">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-deep hover:text-rosegold-primary transition-colors py-1"
                id="mobile-link-services"
              >
                Services
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-deep hover:text-rosegold-primary transition-colors py-1"
                id="mobile-link-about"
              >
                About Us
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-deep hover:text-rosegold-primary transition-colors py-1"
                id="mobile-link-trust"
              >
                Why Choose Us
              </a>
              <a 
                href="#location" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-deep hover:text-rosegold-primary transition-colors py-1"
                id="mobile-link-location"
              >
                Location & Hours
              </a>
              <a 
                href="#booking" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-deep hover:text-rosegold-primary transition-colors py-1"
                id="mobile-link-contact"
              >
                Contact
              </a>
            </nav>
            <div className="pt-4 border-t border-lavender-light flex flex-col gap-3">
              <a 
                href="tel:+971561115841" 
                className="w-full text-center border border-rosegold-soft text-slate-deep py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2"
                id="mobile-call-cta"
              >
                <Phone className="w-4 h-4 text-rosegold-primary" /> Call +971 56 111 5841
              </a>
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-rosegold-primary text-white py-2.5 rounded-full text-sm font-medium block"
                id="mobile-book-cta"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-24 md:py-32 bg-gradient-to-b from-cream-base via-cream-base to-lavender-light/30">
        
        {/* Soft elegant background blobs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-lavender-light rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10 animate-fade-in"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-rosegold-soft rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animate-fade-in"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender-light border border-lavender-primary/20 text-lavender-primary text-xs font-semibold uppercase tracking-wider">
                <Sparkle className="w-3 h-3 text-rosegold-primary" /> Eyelash & Beauty Studio in Ajman
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-deep leading-[1.1] font-bold">
                Unveil Your <br />
                <span className="bg-gradient-to-r from-rosegold-primary to-lavender-primary bg-clip-text text-transparent">Natural Radiance</span> <br />
                with Silk Lashes
              </h1>
              
              <p className="text-slate-body text-base sm:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
                Indulge in a premium, bespoke lash experience at Ajman's spotless sanctuary. Our ultra-lightweight, premium silk extensions are meticulously applied to enhance your natural eyes with weightless comfort.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                <a
                  href="#booking"
                  className="bg-rosegold-primary hover:bg-rosegold-dark text-white text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  id="hero-book-cta"
                >
                  Book Your Appointment <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/lash.beauty.center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-rosegold-soft hover:border-rosegold-primary text-slate-deep hover:text-rosegold-primary bg-white/50 backdrop-blur-sm text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                  id="hero-instagram-cta"
                >
                  <Instagram className="w-4 h-4 text-rosegold-primary" /> Follow Instagram
                </a>
              </div>

              {/* Mini trust stats in hero */}
              <div className="pt-8 border-t border-lavender-light/60 grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
                <div>
                  <div className="font-serif text-2xl font-bold text-slate-deep">4.9 ★</div>
                  <div className="text-[10px] text-slate-body tracking-wider uppercase font-medium mt-0.5">Top-Rated Studio</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-slate-deep">98%</div>
                  <div className="text-[10px] text-slate-body tracking-wider uppercase font-medium mt-0.5">Repeat Clients</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-slate-deep">100%</div>
                  <div className="text-[10px] text-slate-body tracking-wider uppercase font-medium mt-0.5">Spotless Clean</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mx-auto max-w-md lg:max-w-none w-full flex justify-center">
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-lavender-light to-rosegold-soft rounded-3xl transform rotate-3 -z-10 opacity-70"></div>
              
              <div className="bg-white p-3 rounded-3xl shadow-xl border border-lavender-light/50 w-full aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/lashes_hero.png"
                  alt="Elegant Silk Eyelash Extensions Close-up"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-2xl object-cover hover:scale-102 transition-transform duration-700"
                  priority
                />
              </div>
              
              {/* Soft overlay badge */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md border border-lavender-light shadow-lg rounded-2xl p-4 flex items-center gap-3 animate-fade-in-up">
                <span className="w-10 h-10 rounded-full bg-rosegold-light flex items-center justify-center text-rosegold-primary">
                  <Heart className="w-5 h-5 fill-current" />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-deep uppercase tracking-wider">Premium Quality</h4>
                  <p className="text-[11px] text-slate-body">Ultra-soft full silk fiber</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-cream-card relative border-t border-b border-lavender-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-rosegold-primary uppercase block">Our Menu</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-deep font-bold">Bespoke Studio Services</h2>
            <div className="w-12 h-0.5 bg-rosegold-primary mx-auto my-4"></div>
            <p className="text-slate-body text-sm font-light">
              Meticulous care and premium-grade materials combined to provide beautiful, lasting enhancements in our Ajman beauty haven.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-cream-base rounded-2xl border border-lavender-light/60 p-6 sm:p-8 flex flex-col justify-between hover:shadow-md hover:border-rosegold-soft/60 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  
                  {/* Title & Price */}
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-serif text-xl sm:text-2xl text-slate-deep font-semibold group-hover:text-rosegold-primary transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-sm font-bold text-rosegold-primary px-3 py-1 bg-rosegold-light rounded-full shrink-0">
                      {service.price}
                    </span>
                  </div>

                  <p className="text-slate-body text-sm leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-deep">
                        <Check className="w-3.5 h-3.5 text-lavender-primary shrink-0" />
                        <span className="font-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                <div className="pt-6 mt-6 border-t border-lavender-light/60 flex items-center justify-between">
                  <a 
                    href="#booking"
                    onClick={() => setFormData(prev => ({ ...prev, service: service.title }))}
                    className="text-xs font-bold text-slate-deep hover:text-rosegold-primary uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    Select & Book <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] text-slate-body/70 italic">Ajman Studio</span>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Promo block */}
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-lavender-light/50 via-cream-base to-rosegold-light/50 border border-lavender-light flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-deep">First Time Client Special Offer</h4>
              <p className="text-sm text-slate-body font-light">Enjoy a complimentary consultation & custom lash design styling session on your first visit.</p>
            </div>
            <a 
              href="#booking" 
              className="bg-slate-deep hover:bg-slate-deep/90 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all shrink-0 shadow-sm"
              id="promo-cta"
            >
              Claim Special Offer
            </a>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-cream-base relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Image Column */}
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto md:mx-0">
              {/* Background styling elements */}
              <div className="absolute inset-x-0 bottom-0 top-12 bg-lavender-light/70 rounded-3xl transform -rotate-2 -z-10"></div>
              
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg border border-lavender-light">
                <Image
                  src="/images/salon_interior.png"
                  alt="Spotless and Relaxing Beauty Studio Interior"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              
              {/* Cleanliness badge overlay */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-lavender-light shadow-md flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-rosegold-primary" />
                <span className="text-xs font-semibold text-slate-deep uppercase tracking-wider">Spotless Studio</span>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-rosegold-primary uppercase block">Our Sanctuary</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-deep font-bold leading-tight">
                A Calming, Spotless Haven for Your Beauty Needs
              </h2>
              <div className="w-12 h-0.5 bg-rosegold-primary"></div>
              
              <p className="text-slate-body text-base leading-relaxed font-light">
                At Lash Beauty Center, our philosophy centers on providing a pristine, exceptionally hygienic, and relaxing environment. Located in the heart of Al Muwaihat 3, Ajman, our studio has been meticulously designed as a soothing escape from the daily hustle.
              </p>
              
              <p className="text-slate-body text-base leading-relaxed font-light">
                We believe that every client is unique. Our highly trained, certified technicians dedicate time to assess your eye shape, lash health, and aesthetic preferences. This personalized approach guarantees a look that is custom-tailored to enhance your natural beauty.
              </p>

              {/* Three Pill Values */}
              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-rosegold-light border border-rosegold-soft/30 flex items-center justify-center text-rosegold-primary shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-deep">Rigorous Sanitization</h4>
                    <p className="text-xs text-slate-body font-light">All instruments are sterilized before every single session. Your safety and hygiene are our absolute top priority.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-lavender-light border border-lavender-primary/10 flex items-center justify-center text-lavender-primary shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-deep">Premium Certified Staff</h4>
                    <p className="text-xs text-slate-body font-light">Our technicians are certified artists with extensive experience in the UAE, dedicated to delivering detailed, gentle artistry.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-rosegold-light border border-rosegold-soft/30 flex items-center justify-center text-rosegold-primary shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-deep">Bespoke Mapping Consultation</h4>
                    <p className="text-xs text-slate-body font-light">We consult with you on weight, volume, length, and style before application to ensure comfort and eye safety.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* TRUST SIGNALS / TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-cream-base via-lavender-light/20 to-cream-base border-t border-b border-lavender-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-rosegold-primary uppercase block">Reviews</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-deep font-bold">Why Our Clients Keep Coming Back</h2>
            <div className="w-12 h-0.5 bg-rosegold-primary mx-auto my-4"></div>
            <p className="text-slate-body text-sm font-light">
              We take pride in our outstanding reputation. Over 98% of our guests become regular, loyal clients.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="bg-cream-card rounded-2xl p-6 sm:p-8 border border-lavender-light/60 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-rosegold-primary text-rosegold-primary" />
                    ))}
                  </div>
                  <p className="text-slate-deep text-sm leading-relaxed font-light italic mb-6">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="pt-4 border-t border-lavender-light/40 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-lavender-primary/20 flex items-center justify-center text-lavender-primary font-bold text-xs">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-deep uppercase tracking-wider">{testimonial.name}</h4>
                    <p className="text-[10px] text-rosegold-primary">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rating Summary banner */}
          <div className="mt-12 text-center">
            <p className="text-sm font-medium text-slate-deep flex items-center justify-center gap-2 flex-wrap">
              <span>Highly rated for lash quality & relaxing atmosphere on Google Maps</span>
              <span className="inline-flex items-center gap-0.5 text-rosegold-primary">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </span>
              <span className="font-bold">(4.9/5.0 based on 500+ visits)</span>
            </p>
          </div>

        </div>
      </section>

      {/* LOCATION & HOURS */}
      <section id="location" className="py-24 bg-cream-card relative border-b border-lavender-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            
            {/* Left Details Column */}
            <div className="flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <span className="text-xs font-bold tracking-widest text-rosegold-primary uppercase block">Find Us</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-slate-deep font-bold">Visit Our Ajman Studio</h2>
                <div className="w-12 h-0.5 bg-rosegold-primary"></div>
                
                <p className="text-slate-body text-sm font-light leading-relaxed">
                  Lash Beauty Center is nestled in the serene residential neighborhood of Al Muwaihat 3, Ajman. We provide ample dedicated parking space directly outside the studio, ensuring a stress-free arrival for all our guests.
                </p>

                {/* Location Address Block */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-rosegold-light flex items-center justify-center text-rosegold-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-deep">Our Address</h4>
                      <p className="text-xs text-slate-body font-light mt-0.5">
                        Villa 12, Street 18B, Al Muwaihat 3, Ajman, United Arab Emirates
                      </p>
                      <a 
                        href="https://maps.google.com/?q=Al+Muwaihat+3+Ajman" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-rosegold-primary hover:text-rosegold-dark hover:underline flex items-center gap-1 mt-1"
                        id="google-maps-directions"
                      >
                        Get Directions on Google Maps <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Hours Block */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center text-lavender-primary shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-deep">Studio Hours</h4>
                      <p className="text-xs text-slate-body font-light mt-0.5">
                        Daily: 11:00 AM – 10:00 PM
                      </p>
                      <p className="text-[11px] text-rosegold-primary font-medium mt-1">
                        *Reservations are highly recommended. Walk-ins subject to availability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact mini section */}
              <div className="pt-6 border-t border-lavender-light/50 flex flex-wrap gap-6 items-center">
                <a 
                  href="tel:+971561115841"
                  className="bg-rosegold-light hover:bg-rosegold-soft/30 text-rosegold-primary text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 transition-all"
                  id="location-call"
                >
                  <Phone className="w-4 h-4" /> Call +971 56 111 5841
                </a>
                <a 
                  href="https://www.instagram.com/lash.beauty.center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-slate-deep hover:text-rosegold-primary flex items-center gap-1.5 transition-all"
                  id="location-instagram"
                >
                  <Instagram className="w-4 h-4 text-rosegold-primary" /> @lash.beauty.center
                </a>
              </div>
            </div>

            {/* Right Map Mockup Column */}
            <div className="relative min-h-[300px] bg-cream-base rounded-3xl border border-lavender-light overflow-hidden shadow-sm flex flex-col items-center justify-center p-6 text-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-lavender-light/20 to-rosegold-soft/10 pointer-events-none"></div>
              
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-rosegold-primary shadow-md mb-4 group-hover:scale-105 transition-transform duration-300">
                <MapPin className="w-8 h-8" />
              </div>
              
              <h3 className="font-serif text-xl font-bold text-slate-deep">Al Muwaihat 3, Ajman</h3>
              <p className="text-xs text-slate-body font-light max-w-sm mt-2 leading-relaxed">
                We are conveniently located in Al Muwaihat 3, near school zones and easily accessible from Sheikh Mohammed Bin Zayed Road (E311).
              </p>
              
              <div className="mt-6 flex flex-col gap-2 w-full max-w-xs">
                <a 
                  href="https://maps.google.com/?q=Al+Muwaihat+3+Ajman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-deep hover:bg-slate-deep/90 text-white text-xs font-semibold py-3 rounded-xl transition-all shadow-sm"
                  id="map-directions-btn"
                >
                  Open in Google Maps
                </a>
                <a 
                  href="#booking"
                  className="w-full border border-rosegold-soft hover:border-rosegold-primary text-slate-deep hover:text-rosegold-primary text-xs font-semibold py-3 rounded-xl transition-all bg-white/50"
                  id="map-book-btn"
                >
                  Book Appointment Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT & BOOKING FORM SECTION */}
      <section id="booking" className="py-24 bg-cream-base relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lavender-light rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-rosegold-soft rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-rosegold-primary uppercase block">Reservations</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-deep font-bold">Book Your Bespoke Session</h2>
            <div className="w-12 h-0.5 bg-rosegold-primary mx-auto my-4"></div>
            <p className="text-slate-body text-sm font-light">
              Secure your appointment slot. Fill in the details below, and our attentive team will contact you shortly to confirm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 bg-white rounded-3xl border border-lavender-light shadow-lg overflow-hidden">
            
            {/* Left 5 Cols: Contact details info */}
            <div className="md:col-span-5 bg-gradient-to-b from-lavender-light/50 via-cream-base to-rosegold-light/40 p-8 sm:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-lavender-light">
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-deep">Get In Touch</h3>
                  <p className="text-xs text-slate-body font-light mt-1">Have any questions? Don't hesitate to reach out to us directly.</p>
                </div>

                <div className="space-y-4">
                  {/* Call Direct */}
                  <a 
                    href="tel:+971561115841"
                    className="block p-4 bg-white/80 rounded-2xl border border-lavender-light/40 hover:border-rosegold-soft transition-all group"
                    id="contact-call-card"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-rosegold-light flex items-center justify-center text-rosegold-primary group-hover:scale-105 transition-transform shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold text-slate-deep uppercase tracking-wider">Call or WhatsApp</h4>
                        <p className="text-xs font-semibold text-slate-deep mt-0.5">+971 56 111 5841</p>
                      </div>
                    </div>
                  </a>

                  {/* Instagram DM */}
                  <a 
                    href="https://www.instagram.com/lash.beauty.center"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-white/80 rounded-2xl border border-lavender-light/40 hover:border-rosegold-soft transition-all group"
                    id="contact-instagram-card"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-lavender-light flex items-center justify-center text-lavender-primary group-hover:scale-105 transition-transform shrink-0">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold text-slate-deep uppercase tracking-wider">Instagram DM</h4>
                        <p className="text-xs font-semibold text-slate-deep mt-0.5">@lash.beauty.center</p>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Quick booking notes */}
                <div className="bg-white/40 p-4 rounded-2xl border border-lavender-light/30">
                  <h4 className="text-[11px] font-bold text-slate-deep uppercase tracking-wider mb-1 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-rosegold-primary" /> Booking Policy
                  </h4>
                  <ul className="space-y-1 text-[11px] text-slate-body font-light">
                    <li>• Please arrive 5-10 minutes prior to your slot.</li>
                    <li>• For lash extensions, please arrive without eye makeup.</li>
                    <li>• Rescheduling is free up to 12 hours in advance.</li>
                  </ul>
                </div>
              </div>

              {/* Map mini text */}
              <div className="pt-8 border-t border-lavender-light/40 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rosegold-primary shrink-0" />
                <span className="text-[11px] text-slate-body font-medium">Al Muwaihat 3, Ajman, UAE</span>
              </div>
            </div>

            {/* Right 7 Cols: Interactive Form */}
            <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
              
              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-5" id="booking-form">
                  
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label htmlFor="name-input" className="text-xs font-bold text-slate-deep uppercase tracking-wider flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-rosegold-primary" /> Your Name *
                    </label>
                    <input
                      type="text"
                      id="name-input"
                      name="name"
                      required
                      placeholder="e.g. Mariam Al Suwaidi"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-cream-base border border-lavender-light rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rosegold-soft focus:ring-1 focus:ring-rosegold-soft/30 transition-all text-slate-deep font-medium"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1">
                    <label htmlFor="phone-input" className="text-xs font-bold text-slate-deep uppercase tracking-wider flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-rosegold-primary" /> Phone Number (WhatsApp preferred) *
                    </label>
                    <input
                      type="tel"
                      id="phone-input"
                      name="phone"
                      required
                      placeholder="e.g. +971 56 111 5841"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-cream-base border border-lavender-light rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rosegold-soft focus:ring-1 focus:ring-rosegold-soft/30 transition-all text-slate-deep font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Selection */}
                    <div className="space-y-1">
                      <label htmlFor="service-select" className="text-xs font-bold text-slate-deep uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkle className="w-3.5 h-3.5 text-rosegold-primary" /> Select Service
                      </label>
                      <select
                        id="service-select"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-cream-base border border-lavender-light rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-rosegold-soft transition-all text-slate-deep font-medium"
                      >
                        <option value="Silk Eyelash Extensions">Silk Eyelash Extensions</option>
                        <option value="Nail Services">Nail Services</option>
                        <option value="Waxing & Hair Removal">Waxing & Hair Removal</option>
                        <option value="Beauty Treatments">Beauty Treatments</option>
                        <option value="Other Consultation">Other Consultation</option>
                      </select>
                    </div>

                    {/* Date Input */}
                    <div className="space-y-1">
                      <label htmlFor="date-input" className="text-xs font-bold text-slate-deep uppercase tracking-wider flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-rosegold-primary" /> Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date-input"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full bg-cream-base border border-lavender-light rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-rosegold-soft transition-all text-slate-deep font-medium"
                      />
                    </div>
                  </div>

                  {/* Time and Notes */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-1 space-y-1">
                      <label htmlFor="time-input" className="text-xs font-bold text-slate-deep uppercase tracking-wider flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-rosegold-primary" /> Preferred Time
                      </label>
                      <input
                        type="time"
                        id="time-input"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full bg-cream-base border border-lavender-light rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-rosegold-soft transition-all text-slate-deep font-medium"
                      />
                    </div>

                    <div className="sm:col-span-2 space-y-1">
                      <label htmlFor="notes-textarea" className="text-xs font-bold text-slate-deep uppercase tracking-wider flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-rosegold-primary" /> Special Requests
                      </label>
                      <input
                        type="text"
                        id="notes-textarea"
                        name="notes"
                        placeholder="e.g. prefer classic, curl styles, nail art ideas"
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="w-full bg-cream-base border border-lavender-light rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-rosegold-soft transition-all text-slate-deep font-medium"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-rosegold-primary hover:bg-rosegold-dark disabled:bg-rosegold-soft text-white text-sm font-semibold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                      id="submit-booking-btn"
                    >
                      {submitting ? "Sending Request..." : "Request Appointment"}
                    </button>
                  </div>

                  {/* Immediate fast-track CTA */}
                  <div className="text-center pt-2">
                    <span className="text-[11px] text-slate-body font-light">or speed up your booking by texting us:</span>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-rosegold-primary hover:text-rosegold-dark block mt-1 hover:underline"
                      id="fast-track-whatsapp"
                    >
                      💬 Click to Book Instantly via WhatsApp
                    </a>
                  </div>

                </form>
              ) : (
                // SUCCESS STATE
                <div className="text-center space-y-6 py-8 animate-fade-in" id="booking-success-message">
                  <div className="w-16 h-16 rounded-full bg-rosegold-light border border-rosegold-soft flex items-center justify-center text-rosegold-primary mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-slate-deep">Booking Request Received!</h3>
                    <p className="text-sm text-slate-body font-light max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-slate-deep">{formData.name}</span>. Our team in Al Muwaihat 3 is checking availability and will call or text you shortly.
                    </p>
                  </div>

                  {/* Fast track to lock slot */}
                  <div className="p-5 bg-gradient-to-tr from-lavender-light/30 to-rosegold-light/30 rounded-2xl border border-lavender-light max-w-sm mx-auto space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-slate-deep uppercase tracking-wider">Fast-Track Your Appointment</h4>
                      <p className="text-[11px] text-slate-body mt-0.5">Send a pre-filled WhatsApp message to lock in your requested time slot instantly.</p>
                    </div>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all"
                      id="success-whatsapp-cta"
                    >
                      💬 Send WhatsApp Confirmation
                    </a>
                  </div>

                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        service: "Lash Extensions",
                        date: "",
                        time: "",
                        notes: ""
                      });
                    }}
                    className="text-xs text-slate-body hover:text-rosegold-primary underline"
                    id="success-new-booking-btn"
                  >
                    Submit Another Booking Request
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-deep text-white/80 py-16 border-t border-slate-deep/50 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
            
            {/* Col 1: Studio info */}
            <div className="space-y-4 md:col-span-2">
              <a href="#" className="flex items-center gap-2" id="footer-logo">
                <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-rosegold-primary to-lavender-primary flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div className="flex flex-col">
                  <span className="font-serif text-lg tracking-widest text-white font-semibold leading-tight">LASH</span>
                  <span className="text-[10px] tracking-[0.25em] text-rosegold-soft font-medium -mt-0.5">BEAUTY CENTER</span>
                </div>
              </a>
              <p className="text-xs text-white/60 font-light max-w-sm leading-relaxed">
                Premium eyelash extensions, luxury manicure art, waxing, and specialized beauty treatments. Indulge in personalized care and absolute hygiene in our Ajman beauty studio.
              </p>
              <div className="flex gap-4">
                <a 
                  href="tel:+971561115841"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-rosegold-primary hover:text-white flex items-center justify-center text-white/80 transition-all"
                  aria-label="Call studio"
                  id="footer-call"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/lash.beauty.center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-rosegold-primary hover:text-white flex items-center justify-center text-white/80 transition-all"
                  aria-label="Instagram profile"
                  id="footer-instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Fast links */}
            <div className="space-y-3">
              <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase">Quick Links</h4>
              <ul className="space-y-2 text-xs font-light">
                <li><a href="#services" className="hover:text-rosegold-soft transition-colors" id="footer-link-services">Our Services</a></li>
                <li><a href="#about" className="hover:text-rosegold-soft transition-colors" id="footer-link-about">About Sanctuary</a></li>
                <li><a href="#testimonials" className="hover:text-rosegold-soft transition-colors" id="footer-link-trust">Client Reviews</a></li>
                <li><a href="#location" className="hover:text-rosegold-soft transition-colors" id="footer-link-location">Location & Hours</a></li>
              </ul>
            </div>

            {/* Col 3: Hours info */}
            <div className="space-y-3">
              <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase">Contact & Info</h4>
              <ul className="space-y-2 text-xs font-light">
                <li className="flex items-start gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rosegold-soft shrink-0" />
                  <span>Villa 12, Al Muwaihat 3, Ajman, UAE</span>
                </li>
                <li className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-rosegold-soft shrink-0" />
                  <span>+971 56 111 5841</span>
                </li>
                <li className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-rosegold-soft shrink-0" />
                  <span>Daily 11:00 AM – 10:00 PM</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright line */}
          <div className="pt-12 mt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40 font-light">
            <p>© {new Date().getFullYear()} Lash Beauty Center. All rights reserved.</p>
            <p>Designed with Care for Lash Beauty Studio, Ajman.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
