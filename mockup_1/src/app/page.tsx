"use client";

import { useState } from "react";
import Image from "next/image";

// Custom SVG Icons for a lightweight and instant loading experience
const StarIcon = () => (
  <svg className="w-5 h-5 text-gold fill-gold" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25g3 3 0 1115 0z" />
  </svg>
);

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3 15l5.096-.813L9 9l.813 5.096L15 15l-5.187.904zM18 9.75L17.25 12l-.75-2.25L14.25 9l2.25-.75L17.25 6l.75 2.25L20.25 9l-2.25.75zM20.25 14.25l-.375 1.125-.75-.375-.375-1.125-.375-1.125.75-.375 1.125.375.375 1.125z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    service: "Classic Full Set",
    date: "",
    time: "",
    agreedToDeposit: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const services = [
    {
      id: "classic",
      category: "lashes",
      name: "Classic Full Lash Set",
      price: "$120",
      duration: "105 mins",
      description: "A beautiful, natural enhancements. A single high-quality premium extension is carefully applied to each of your healthy natural lashes. Perfect for regular everyday wear.",
      features: ["Custom length mapping", "1:1 lash ratio", "Lightweight, premium synthetic silk", "Recommended for first-timers"],
    },
    {
      id: "volume",
      category: "lashes",
      name: "Volume Full Lash Set",
      price: "$160",
      duration: "120 mins",
      description: "Dense, fluffy lash styling for a luxurious and high-contrast look. Handmade volume fans (2D-6D) are custom mapped and applied to create depth, fullness, and textured drama.",
      features: ["Custom handmade fans", "Great for sparse lashes", "Dramatic yet soft texture", "Tailored style mapping"],
    },
    {
      id: "lift",
      category: "lashes",
      name: "Lash Lift & Tint Session",
      price: "$85",
      duration: "60 mins",
      description: "A semi-permanent boost that curls and lifts your natural lashes from the root. Completed with a deep black conditioning tint to make your eyes pop without mascara.",
      features: ["Lasts up to 6-8 weeks", "Extremely low maintenance", "Damage-free nourishing system", "Includes custom dark tinting"],
    },
    {
      id: "brow-lam",
      category: "brows",
      name: "Brow Lamination & Shaping",
      price: "$70",
      duration: "45 mins",
      description: "The ultimate brow restructuring service to align hair direction. Gives you fuller, fluffier, and perfectly styled brows. Includes professional wax shaping and hybrid tint.",
      features: ["Lasts up to 6 weeks", "Feathery, symmetrical look", "Includes wax & clean-up", "Custom tint customization"],
    },
    {
      id: "facial",
      category: "skincare",
      name: "Bellamy Signature Custom Facial",
      price: "$95",
      duration: "75 mins",
      description: "A restorative skincare experience customized to your skin needs. Includes deep double-cleansing, gentle exfoliation, pore extractions, custom masque, and therapeutic massage.",
      features: ["Individually customized", "Premium clean skincare lines", "Relaxing face & neck massage", "Restores natural glow"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Montgomery",
      location: "Savannah, GA",
      stars: 5,
      comment: "Jerrika is a true artist! I've been getting Classic Sets from her for 2 years and my natural lashes stay incredibly healthy. The studio is pristine, calming, and smells like a spa.",
    },
    {
      name: "Elena Richardson",
      location: "Tybee Island, GA",
      stars: 5,
      comment: "The volume sets are to die for! They are dense, fluffy, and feel completely weightless. Jerrika is incredibly detail-oriented and never rushes. Highly recommend!",
    },
    {
      name: "Jessica Taylor",
      location: "Pooler, GA",
      stars: 5,
      comment: "Got a Lash Lift and Brow Lamination before my wedding. The results were gorgeous and lasted through my entire honeymoon! Jerrika is professional, sweet, and highly skilled.",
    },
  ];

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: checked }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.phone || !bookingForm.date || !bookingForm.time) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }
    if (!bookingForm.agreedToDeposit) {
      setErrorMessage("Please acknowledge the booking policy deposit requirement.");
      return;
    }
    setErrorMessage("");
    setFormSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-cream selection:bg-blush-dark selection:text-espresso font-sans">
      
      {/* 1. Header / Navigation */}
      <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-md border-b border-blush/60 luxury-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="font-serif text-2xl tracking-wider font-semibold text-espresso">
                BELLAMY <span className="text-gold font-light font-serif">Lash Studio</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="text-sm font-medium tracking-wide text-espresso-muted hover:text-gold transition-colors duration-300">Services</a>
              <a href="#about" className="text-sm font-medium tracking-wide text-espresso-muted hover:text-gold transition-colors duration-300">About Jerrika</a>
              <a href="#testimonials" className="text-sm font-medium tracking-wide text-espresso-muted hover:text-gold transition-colors duration-300">Reviews</a>
              <a href="#location" className="text-sm font-medium tracking-wide text-espresso-muted hover:text-gold transition-colors duration-300">Location</a>
              <a href="#contact" className="text-sm font-medium tracking-wide text-espresso-muted hover:text-gold transition-colors duration-300">Booking Policy</a>
              
              <a 
                href="#book-now" 
                className="ml-4 inline-flex items-center justify-center px-5 py-2.5 rounded-full border-none text-xs font-semibold uppercase tracking-wider text-white bg-gold hover:bg-gold-dark hover:shadow-md transition-all duration-300"
              >
                Book Appointment
              </a>
              <a 
                href="https://instagram.com/bellamylashstudio" 
                target="_blank" 
                rel="noreferrer" 
                className="text-espresso-muted hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <a 
                href="#book-now" 
                className="inline-flex items-center justify-center px-4 py-2 rounded-full border-none text-xs font-semibold uppercase tracking-wider text-white bg-gold transition-all duration-300"
              >
                Book
              </a>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-espresso p-2 hover:text-gold focus:outline-none"
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Open Menu</span>
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L12 12M12 12l6 6M12 12L6 6m6 6l6-6" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cream border-t border-blush/60 px-4 pt-2 pb-6 space-y-3">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-espresso hover:bg-blush hover:text-gold transition-colors"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-espresso hover:bg-blush hover:text-gold transition-colors"
            >
              About Jerrika
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-espresso hover:bg-blush hover:text-gold transition-colors"
            >
              Reviews
            </a>
            <a 
              href="#location" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-espresso hover:bg-blush hover:text-gold transition-colors"
            >
              Location & Hours
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-espresso hover:bg-blush hover:text-gold transition-colors"
            >
              Booking & Contact
            </a>
            <div className="pt-4 flex items-center gap-4">
              <a 
                href="https://instagram.com/bellamylashstudio" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold text-xs font-semibold tracking-wider text-gold hover:bg-gold hover:text-white transition-all duration-300"
              >
                <InstagramIcon className="w-4 h-4" /> Instagram
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden blush-gradient py-12 md:py-24 border-b border-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Taglines & Actions */}
            <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Trust Signal Badge */}
              <div className="inline-flex items-center justify-center lg:justify-start gap-2">
                <span className="flex items-center gap-0.5 bg-cream px-3.5 py-1.5 rounded-full border border-gold-light/60 text-xs font-semibold tracking-wider uppercase text-espresso-muted">
                  <span className="flex gap-0.5 mr-1">
                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                  </span>
                  5.0 Rated Studio in Savannah
                </span>
              </div>

              {/* Tagline & Headings */}
              <div className="space-y-4">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-espresso font-semibold">
                  Effortless Beauty.<br />
                  <span className="gold-text-gradient font-serif">Masterful Lash Artistry.</span>
                </h1>
                <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-espresso-muted font-light leading-relaxed">
                  Step into a bespoke lash experience tailored to your unique eye shape and lifestyle. 
                  Curated with expert care by Jerrika Hinton, certified lash artist and licensed esthetician with 
                  5+ years of dedicated professional experience.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#book-now" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-gold hover:bg-gold-dark hover:shadow-lg transition-all duration-300"
                >
                  Book Your Appointment
                </a>
                <a 
                  href="https://instagram.com/bellamylashstudio" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-gold border border-gold hover:bg-gold hover:text-white transition-all duration-300"
                >
                  <InstagramIcon className="w-5 h-5" /> Follow Us
                </a>
              </div>

              {/* Core studio values banner */}
              <div className="pt-6 border-t border-blush-dark/40 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <div className="font-serif text-xl sm:text-2xl font-bold text-gold">5 Years</div>
                  <div className="text-xs uppercase tracking-wide text-espresso-muted font-medium">Esthetician Practice</div>
                </div>
                <div>
                  <div className="font-serif text-xl sm:text-2xl font-bold text-gold">100%</div>
                  <div className="text-xs uppercase tracking-wide text-espresso-muted font-medium">Bespoke Mapping</div>
                </div>
                <div>
                  <div className="font-serif text-xl sm:text-2xl font-bold text-gold">5.0 ★</div>
                  <div className="text-xs uppercase tracking-wide text-espresso-muted font-medium">Client Rating</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Graphic (Lash Artistry portrait) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md h-[450px] sm:h-[520px]">
                {/* Decorative gold backdrop frame */}
                <div className="absolute inset-4 rounded-3xl border border-gold translate-x-3 translate-y-3 pointer-events-none z-0"></div>
                {/* Main image container */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden bg-blush-dark/30 luxury-shadow z-10 border-4 border-cream">
                  <Image 
                    src="/hero_lashes.png" 
                    alt="Luxury lash extensions up close" 
                    fill
                    sizes="(max-width: 640px) 100vw, 450px"
                    priority
                    className="object-cover object-center transform hover:scale-105 duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Value Props (Trust Signals) */}
      <section className="bg-cream-light py-16 border-b border-blush/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-cream rounded-2xl border border-blush/40 transition-all hover:border-gold-light/60 hover:shadow-sm duration-300">
              <div className="w-16 h-16 rounded-full bg-blush flex items-center justify-center mb-4">
                <SparklesIcon />
              </div>
              <h3 className="font-serif text-xl font-semibold text-espresso mb-2">Artistry & Expertise</h3>
              <p className="text-sm text-espresso-muted font-light leading-relaxed">
                Jerrika Hinton is a double-certified lash artist who tailors thickness, curls, and styling lengths 
                based on your eye shape and natural lash health.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-cream rounded-2xl border border-blush/40 transition-all hover:border-gold-light/60 hover:shadow-sm duration-300">
              <div className="w-16 h-16 rounded-full bg-blush flex items-center justify-center mb-4">
                <ShieldCheckIcon />
              </div>
              <h3 className="font-serif text-xl font-semibold text-espresso mb-2">Clean & Welcoming Space</h3>
              <p className="text-sm text-espresso-muted font-light leading-relaxed">
                Your health is our priority. Our boutique Savannah studio maintains medical-grade sanitation, 
                sterile implements, and hypoallergenic materials in a quiet, cozy room.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-cream rounded-2xl border border-blush/40 transition-all hover:border-gold-light/60 hover:shadow-sm duration-300">
              <div className="w-16 h-16 rounded-full bg-blush flex items-center justify-center mb-4">
                <HeartIcon />
              </div>
              <h3 className="font-serif text-xl font-semibold text-espresso mb-2">Dedicated Attentive Care</h3>
              <p className="text-sm text-espresso-muted font-light leading-relaxed">
                We believe in a slow-beauty, attentive approach. You receive 100% focused attention during your session, 
                explaining each step for your comfort and longevity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Services Menu */}
      <section id="services" className="py-20 md:py-28 bg-cream border-b border-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">The Services Menu</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-espresso">
              Exquisite Services, Custom Craftsmanship
            </h2>
            <div className="w-16 h-[2px] bg-gold mx-auto mt-2"></div>
            <p className="max-w-2xl mx-auto text-base text-espresso-muted font-light">
              Choose from classic lashes, luxury volumes, structural brow enhancements, or custom facial treatments. 
              All services include a customized styling and health consultation.
            </p>

            {/* Categories filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
              <button 
                onClick={() => setActiveCategory("all")}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${activeCategory === "all" ? "bg-gold text-white" : "bg-cream-light border border-blush text-espresso-muted hover:border-gold-light"}`}
              >
                All Services
              </button>
              <button 
                onClick={() => setActiveCategory("lashes")}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${activeCategory === "lashes" ? "bg-gold text-white" : "bg-cream-light border border-blush text-espresso-muted hover:border-gold-light"}`}
              >
                Eyelashes
              </button>
              <button 
                onClick={() => setActiveCategory("brows")}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${activeCategory === "brows" ? "bg-gold text-white" : "bg-cream-light border border-blush text-espresso-muted hover:border-gold-light"}`}
              >
                Eyebrows
              </button>
              <button 
                onClick={() => setActiveCategory("skincare")}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${activeCategory === "skincare" ? "bg-gold text-white" : "bg-cream-light border border-blush text-espresso-muted hover:border-gold-light"}`}
              >
                Skincare & Facials
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div 
                key={service.id}
                className="flex flex-col bg-cream-light rounded-2xl border border-blush/60 p-6 sm:p-8 luxury-shadow transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 flex-1 justify-between"
              >
                <div className="space-y-4">
                  {/* Name, Price & Time */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-espresso leading-snug">{service.name}</h3>
                    <div className="text-right">
                      <span className="font-serif text-2xl font-semibold text-gold leading-none">{service.price}</span>
                      <span className="block text-[10px] text-espresso-muted uppercase tracking-wider font-semibold mt-1">{service.duration}</span>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="w-full h-px bg-blush"></div>

                  {/* Description */}
                  <p className="text-sm text-espresso-muted font-light leading-relaxed">{service.description}</p>
                  
                  {/* Bullet Points */}
                  <ul className="space-y-2 pt-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-espresso-muted">
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-blush-dark/20">
                  <a 
                    href="#book-now" 
                    onClick={() => {
                      setBookingForm(prev => ({ ...prev, service: service.name }));
                    }}
                    className="block text-center w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-gold border border-gold hover:bg-gold hover:text-white transition-all duration-300"
                  >
                    Select & Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="text-center mt-12 bg-blush/30 border border-blush/60 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-xs text-espresso-muted leading-relaxed font-light">
              <span className="font-semibold text-espresso">Need Custom Volume, Color Lashes, or Special Lash Fills?</span> We offer 2-week and 3-week lash fills to maintain your extensions. Inquire during your session or contact us directly on Instagram for specific inquiries.
            </p>
          </div>

        </div>
      </section>

      {/* 5. About Section (Owner Jerrika Hinton) */}
      <section id="about" className="py-20 md:py-28 bg-cream-light border-b border-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Professional Photo */}
            <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
              <div className="relative w-full max-w-xs sm:max-w-sm h-[400px] sm:h-[480px]">
                {/* Decorative border frame */}
                <div className="absolute inset-4 rounded-3xl border border-gold -translate-x-3 translate-y-3 pointer-events-none z-0"></div>
                {/* Frame container */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden bg-blush-dark/30 luxury-shadow z-10 border-4 border-cream">
                  <Image 
                    src="/owner.png" 
                    alt="Jerrika Hinton, Licensed Esthetician" 
                    fill
                    sizes="(max-width: 640px) 100vw, 380px"
                    className="object-cover object-center transform hover:scale-105 duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Biography */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest font-semibold text-gold">Meet the Artist & Owner</span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-espresso">
                  Jerrika Hinton, L.E.
                </h2>
                <div className="w-16 h-[2px] bg-gold mt-2"></div>
              </div>

              <div className="space-y-4 text-base text-espresso-muted font-light leading-relaxed">
                <p>
                  Welcome to Bellamy Lash Studio! I&apos;m Jerrika, a **licensed esthetician with 5 years of professional experience** and a double-certified lash artist. 
                  My mission is to deliver a tailored, luxurious experience that makes you feel confident and effortlessly beautiful every day.
                </p>
                <p>
                  Unlike mass-production salons, I specialize in an **attentive, personal approach**. Every set begins with an eye shape assessment 
                  and lash health consultation. I carefully map lash placements to complement your natural contours, utilizing premium weightless silks and high-retention adhesives that protect your natural lash follicle health.
                </p>
                <p>
                  Over the years, I have built a **loyal, long-term clientele** in Savannah who value my meticulous detail work, strict sanitary standards, and the relaxing atmosphere of my studio. I look forward to welcoming you into Studio 20!
                </p>
              </div>

              {/* Qualifications checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blush flex items-center justify-center shrink-0">
                    <CheckIcon />
                  </div>
                  <span className="text-sm text-espresso font-medium">Licensed Esthetician (State of GA)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blush flex items-center justify-center shrink-0">
                    <CheckIcon />
                  </div>
                  <span className="text-sm text-espresso font-medium">5+ Years Active Salon Practice</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blush flex items-center justify-center shrink-0">
                    <CheckIcon />
                  </div>
                  <span className="text-sm text-espresso font-medium">Certified Classic & Volume Artist</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blush flex items-center justify-center shrink-0">
                    <CheckIcon />
                  </div>
                  <span className="text-sm text-espresso font-medium">Eyelash Health Consultation</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Studio Environment & Testimonials (Trust Signals) */}
      <section id="testimonials" className="py-20 md:py-28 bg-cream border-b border-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">Savannah&apos;s Top Rated</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-espresso">
              Loved by Loyal, Repeat Clients
            </h2>
            <div className="w-16 h-[2px] bg-gold mx-auto mt-2"></div>
            <p className="max-w-2xl mx-auto text-base text-espresso-muted font-light">
              We are proud of our 5.0 star rating in Savannah, GA. Here is what our long-term repeat clients say about their experience in Studio 20.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Testimonials List */}
            <div className="lg:col-span-7 space-y-6">
              {testimonials.map((t, idx) => (
                <div 
                  key={idx} 
                  className="bg-cream-light p-6 sm:p-8 rounded-2xl border border-blush/60 luxury-shadow flex flex-col gap-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-espresso">{t.name}</h4>
                      <p className="text-xs text-espresso-muted">{t.location}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-espresso-muted font-light italic leading-relaxed">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>
              ))}
            </div>

            {/* Right: Studio Atmosphere photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm h-[320px] sm:h-[400px]">
                {/* Decorative frame */}
                <div className="absolute inset-4 rounded-3xl border border-gold translate-x-3 translate-y-3 pointer-events-none z-0"></div>
                {/* Frame container */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden bg-blush-dark/30 luxury-shadow z-10 border-4 border-cream">
                  <Image 
                    src="/studio.png" 
                    alt="Cozy interior of Bellamy Lash Studio" 
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover object-center transform hover:scale-105 duration-700"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-transparent p-6 text-white text-center">
                    <span className="font-serif text-lg font-medium block">Studio 20 Sanctuary</span>
                    <span className="text-xs text-cream/80 block mt-1">Clean, welcoming, and warm atmosphere</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Location & Hours */}
      <section id="location" className="py-20 md:py-28 bg-cream-light border-b border-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Address, Directions, Hours */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest font-semibold text-gold">Visit the Studio</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso">Location & Hours</h2>
                <div className="w-16 h-[2px] bg-gold mt-2"></div>
              </div>

              {/* Address details */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center shrink-0">
                  <MapPinIcon />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-semibold text-espresso">Our Address</h3>
                  <p className="text-sm text-espresso-muted font-light leading-relaxed">
                    1100 Eisenhower Dr<br />
                    Suite 15, Studio 20<br />
                    Savannah, GA 31405
                  </p>
                  <p className="text-xs text-gold font-medium pt-1">
                    📍 Located inside Eisenhower Plaza, Studio 20. Free front parking.
                  </p>
                </div>
              </div>

              {/* Hours details */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="space-y-1 w-full">
                  <h3 className="font-serif text-lg font-semibold text-espresso">Studio Hours</h3>
                  <div className="grid grid-cols-2 gap-y-1 max-w-xs text-sm text-espresso-muted font-light">
                    <div>Monday – Friday</div>
                    <div className="text-right">9:00 AM – 6:00 PM</div>
                    <div>Saturday</div>
                    <div className="text-right">10:00 AM – 4:00 PM</div>
                    <div>Sunday</div>
                    <div className="text-right font-medium text-gold">Closed</div>
                  </div>
                </div>
              </div>

              {/* Call-to-action buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <a 
                  href="https://maps.google.com/?q=1100+Eisenhower+Dr+Savannah+GA+31405" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-espresso border border-espresso hover:bg-espresso hover:text-white transition-all duration-300"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Right Column: Stylized map display */}
            <div className="rounded-3xl border border-blush/60 bg-cream p-4 sm:p-6 luxury-shadow relative overflow-hidden h-[360px] flex flex-col justify-between">
              
              {/* Minimal Map Backdrop Graphic (Clean & Luxury aesthetic instead of raw iframe) */}
              <div className="absolute inset-0 z-0 bg-blush/40 flex items-center justify-center opacity-60">
                {/* Styled decorative grid paths representing Savannah streets */}
                <svg className="w-full h-full text-blush-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                  <line x1="0" y1="50" x2="400" y2="50" stroke="currentColor" strokeWidth="2" />
                  <line x1="0" y1="120" x2="400" y2="120" stroke="currentColor" strokeWidth="4" />
                  <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="0" y1="280" x2="400" y2="280" stroke="currentColor" strokeWidth="2" />
                  <line x1="50" y1="0" x2="50" y2="400" stroke="currentColor" strokeWidth="2" />
                  <line x1="150" y1="0" x2="150" y2="400" stroke="currentColor" strokeWidth="4" />
                  <line x1="260" y1="0" x2="260" y2="400" stroke="currentColor" strokeWidth="2" />
                  <line x1="330" y1="0" x2="330" y2="400" stroke="currentColor" strokeWidth="2" />
                  {/* Pin Point */}
                  <circle cx="260" cy="200" r="40" fill="currentColor" fillOpacity="0.15" />
                  <circle cx="260" cy="200" r="10" fill="#C5A880" />
                </svg>
              </div>

              {/* Map overlay card */}
              <div className="z-10 bg-cream-light p-5 sm:p-6 rounded-2xl border border-blush/80 max-w-sm luxury-shadow self-center sm:self-start mt-auto md:mb-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blush flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-gold">📍</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-espresso">Eisenhower Plaza</h4>
                    <p className="text-xs text-espresso-muted font-light leading-relaxed mt-1">
                      1100 Eisenhower Dr, Suite 15, Studio 20. Convenient parking directly outside the front.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom directional helper */}
              <div className="z-10 text-center text-[10px] uppercase tracking-wider font-semibold text-espresso-muted/60 self-center mb-2">
                Savannah, Georgia • Est. 2021
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 8. Booking Policy, Contact & Booking Form */}
      <section id="book-now" className="py-20 md:py-28 bg-cream border-b border-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Policies and Instagram Contact */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest font-semibold text-gold">Booking Rules</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso">Booking Policies</h2>
                <div className="w-16 h-[2px] bg-gold mt-2"></div>
              </div>

              {/* Policy alert card */}
              <div className="bg-blush-dark/30 border border-blush-dark rounded-2xl p-6 sm:p-8 space-y-4">
                <h3 className="font-serif text-lg font-semibold text-espresso flex items-center gap-2">
                  <span>✨</span> Important Booking Policies
                </h3>
                <div className="w-full h-px bg-blush-dark/40"></div>
                <ul className="space-y-3 text-sm text-espresso-muted font-light leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-gold font-bold shrink-0 mt-0.5">•</span>
                    <span><strong>$30 Deposit Required:</strong> A deposit is required to secure any appointment. It goes directly towards your final service cost. Deposit is non-refundable.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-gold font-bold shrink-0 mt-0.5">•</span>
                    <span><strong>Rescheduling:</strong> 24-hour notice is strictly required. Deposits can be transferred once if rescheduled 24 hours prior.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-gold font-bold shrink-0 mt-0.5">•</span>
                    <span><strong>Grace Period:</strong> 10 minutes late grace period. Beyond 15 minutes, appointments are cancelled and deposits forfeited to respect other client slots.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-gold font-bold shrink-0 mt-0.5">•</span>
                    <span><strong>Clean Eyes:</strong> Please arrive to lash sessions with completely clean, makeup-free eyes. A lash wash fee will apply if lashes need heavy cleaning.</span>
                  </li>
                </ul>
              </div>

              {/* Instagram link card */}
              <div className="bg-cream-light border border-blush/60 p-6 rounded-2xl luxury-shadow space-y-4">
                <h3 className="font-serif text-lg font-semibold text-espresso">Have Questions First?</h3>
                <p className="text-sm text-espresso-muted font-light leading-relaxed">
                  We are highly active on social media. DM us on Instagram for quickest responses, custom photos, or scheduling queries.
                </p>
                <a 
                  href="https://instagram.com/bellamylashstudio" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-espresso hover:bg-gold transition-all duration-300"
                >
                  <InstagramIcon className="w-4 h-4" /> Message @bellamylashstudio
                </a>
              </div>

            </div>

            {/* Right: Interactive Booking Form */}
            <div id="contact" className="lg:col-span-7 bg-cream-light rounded-3xl border border-blush/60 p-6 sm:p-10 luxury-shadow">
              
              <div className="space-y-2 mb-8 text-center sm:text-left">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-espresso">Request Your Appointment</h3>
                <p className="text-xs sm:text-sm text-espresso-muted font-light">
                  Select your desired session. We will respond within 2-4 hours to finalize deposit and secure your calendar slot.
                </p>
              </div>

              {formSubmitted ? (
                /* Success Message */
                <div className="text-center py-12 px-4 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-blush flex items-center justify-center mx-auto text-3xl">
                    🌸
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl font-semibold text-espresso">Request Received, {bookingForm.name}!</h4>
                    <p className="text-sm text-espresso-muted font-light max-w-md mx-auto leading-relaxed">
                      Thank you for choosing Bellamy Lash Studio. Jerrika will text/call you at <strong>{bookingForm.phone}</strong> shortly to collect the $30 deposit and finalize your appointment details for <strong>{bookingForm.service}</strong> on <strong>{bookingForm.date}</strong> at <strong>{bookingForm.time}</strong>.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setBookingForm({
                        name: "",
                        phone: "",
                        service: "Classic Full Set",
                        date: "",
                        time: "",
                        agreedToDeposit: false,
                      });
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gold hover:bg-gold-dark transition-all duration-300"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                /* Booking Form */
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  {errorMessage && (
                    <div className="bg-red-50 text-red-700 text-xs rounded-xl p-3 border border-red-200">
                      ⚠️ {errorMessage}
                    </div>
                  )}

                  {/* Name field */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold text-espresso-muted">Full Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={bookingForm.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Elena Gilbert" 
                      className="w-full bg-cream border border-blush/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold font-light transition-all"
                      required
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-xs uppercase tracking-wider font-semibold text-espresso-muted">Phone Number <span className="text-red-500">*</span></label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={bookingForm.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. (912) 555-0199" 
                      className="w-full bg-cream border border-blush/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold font-light transition-all"
                      required
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-1">
                    <label htmlFor="service" className="text-xs uppercase tracking-wider font-semibold text-espresso-muted">Select Service</label>
                    <select 
                      id="service"
                      name="service"
                      value={bookingForm.service}
                      onChange={handleInputChange}
                      className="w-full bg-cream border border-blush/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold font-light transition-all cursor-pointer"
                    >
                      <option value="Classic Full Lash Set">Classic Full Lash Set ($120)</option>
                      <option value="Volume Full Lash Set">Volume Full Lash Set ($160)</option>
                      <option value="Lash Lift & Tint Session">Lash Lift & Tint Session ($85)</option>
                      <option value="Brow Lamination & Shaping">Brow Lamination & Shaping ($70)</option>
                      <option value="Bellamy Signature Custom Facial">Bellamy Signature Custom Facial ($95)</option>
                    </select>
                  </div>

                  {/* Date and Time selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="date" className="text-xs uppercase tracking-wider font-semibold text-espresso-muted">Desired Date <span className="text-red-500">*</span></label>
                      <input 
                        type="date" 
                        id="date"
                        name="date"
                        value={bookingForm.date}
                        onChange={handleInputChange}
                        className="w-full bg-cream border border-blush/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold font-light transition-all cursor-pointer"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="time" className="text-xs uppercase tracking-wider font-semibold text-espresso-muted">Desired Time <span className="text-red-500">*</span></label>
                      <input 
                        type="time" 
                        id="time"
                        name="time"
                        value={bookingForm.time}
                        onChange={handleInputChange}
                        className="w-full bg-cream border border-blush/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold font-light transition-all cursor-pointer"
                        required
                      />
                    </div>
                  </div>

                  {/* Checkbox Policy Agreement */}
                  <div className="flex items-start gap-3 bg-blush/20 border border-blush/40 p-4 rounded-xl">
                    <input 
                      type="checkbox" 
                      id="agreedToDeposit"
                      name="agreedToDeposit"
                      checked={bookingForm.agreedToDeposit}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-gold border-blush-dark rounded focus:ring-gold mt-0.5 cursor-pointer accent-gold"
                      required
                    />
                    <label htmlFor="agreedToDeposit" className="text-xs text-espresso-muted font-light leading-relaxed cursor-pointer select-none">
                      <span className="font-semibold text-espresso">I understand & agree to the booking policy.</span> I understand a $30 deposit is required to confirm my session, and is credited toward my service.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="w-full inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-gold hover:bg-gold-dark hover:shadow-lg transition-all duration-300"
                  >
                    Request Booking Slot
                  </button>

                  <div className="text-center">
                    <span className="text-[10px] text-espresso-muted uppercase tracking-wider">🔒 Your information is confidential and securely processed.</span>
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-espresso text-cream-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Column 1: Brand Info */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="font-serif text-2xl font-semibold tracking-wider text-cream-light">
                BELLAMY <span className="text-gold font-light font-serif">Lash Studio</span>
              </h4>
              <p className="text-xs text-cream-light/60 font-light leading-relaxed max-w-sm">
                Luxury eyelash extensions, structural brow lifts, and customized esthetic skin treatments in Savannah, GA. 
                Experience a relaxing service crafted to highlight your natural elegance.
              </p>
              <div className="flex gap-4 pt-2">
                <a 
                  href="https://instagram.com/bellamylashstudio" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-full bg-cream-light/10 flex items-center justify-center hover:bg-gold transition-colors duration-300 text-cream-light"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h5 className="text-xs uppercase tracking-widest font-semibold text-gold">Explore</h5>
              <ul className="space-y-2 text-xs font-light text-cream-light/60">
                <li><a href="#services" className="hover:text-gold transition-colors">Services Menu</a></li>
                <li><a href="#about" className="hover:text-gold transition-colors">About Jerrika</a></li>
                <li><a href="#testimonials" className="hover:text-gold transition-colors">Client Reviews</a></li>
                <li><a href="#location" className="hover:text-gold transition-colors">Location & Hours</a></li>
              </ul>
            </div>

            {/* Column 3: Contact & Info */}
            <div className="space-y-4">
              <h5 className="text-xs uppercase tracking-widest font-semibold text-gold">Contact</h5>
              <ul className="space-y-2 text-xs font-light text-cream-light/60">
                <li className="flex items-start gap-1">
                  <span>📍</span>
                  <span>1100 Eisenhower Dr, Suite 15, Studio 20, Savannah, GA 31405</span>
                </li>
                <li className="flex items-center gap-1">
                  <span>✉️</span>
                  <span>Instagram DM @bellamylashstudio</span>
                </li>
                <li className="flex items-center gap-1">
                  <span>📅</span>
                  <span>Appt Only • Deposit Required</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright Divider */}
          <div className="w-full h-px bg-cream-light/10 my-10"></div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-cream-light/40 font-light">
            <div>
              &copy; {new Date().getFullYear()} Bellamy Lash Studio. All Rights Reserved.
            </div>
            <div>
              Licensed Esthetician & Lash Artist • Savannah, Georgia
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
