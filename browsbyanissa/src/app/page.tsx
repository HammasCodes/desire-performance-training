"use client";

import { useState } from "react";
import Image from "next/image";

// Services Data
const services = [
  {
    id: "microblading",
    name: "Signature Microblading",
    price: "$550",
    duration: "2.5 Hours",
    description: "Custom, hyper-realistic hair-like strokes meticulously drawn by hand to mimic natural brow growth. Best suited for dry to normal skin types looking to fill in sparse areas, define arches, or rebuild brows.",
    includes: "Includes comprehensive brow mapping, custom pigment mixing, and a complimentary 6-week perfecting touch-up.",
    tag: "Most Natural"
  },
  {
    id: "powder-brows",
    name: "Ombré Powder Brows",
    price: "$600",
    duration: "3 Hours",
    description: "A soft, misty, shaded makeup look that creates a pixelated gradient from light bulb to dark tail. Fully customizable from soft and airy to bold and defined. Suitable for all skin types, especially combination to oily skin.",
    includes: "Includes digital mapping, customized shading density, and a complimentary 6-week perfecting touch-up.",
    tag: "Longest Lasting"
  },
  {
    id: "color-boost",
    name: "Annual Color Boost",
    price: "$300",
    duration: "2 Hours",
    description: "A single session color refresh designed for returning clients to restore pigment vibrancy, crispness, and shape structure. Recommended every 12 to 18 months to maintain optimal brow depth.",
    includes: "For existing Brows by Anissa clients only. Requires prior work to be faded by at least 50%.",
    tag: "Maintenance"
  },
  {
    id: "touch-ups",
    name: "Perfecting Touch-Ups",
    price: "$150",
    duration: "1.5 Hours",
    description: "An optional detailing session between 8 weeks and 6 months post-initial appointment. Perfect for addressing minor pigment retention differences, adjusting shading saturation, or tailoring shape details.",
    includes: "Pricing varies based on time elapsed since last session.",
    tag: "Detailing"
  }
];

// FAQs Data
const faqs = [
  {
    question: "What is the difference between Microblading and Powder Brows?",
    answer: "Microblading uses a manual hand tool to create fine, hair-like cuts (strokes) in the skin, which is ideal for dry to normal skin and those seeking a purely natural look. Powder Brows use a cosmetic tattooing machine to insert tiny pixels of pigment, creating a soft, filled-in powdered makeup effect. Powder brows are gentler on the skin, last longer, and are suitable for all skin types, including oily skin."
  },
  {
    question: "Does the brow procedure hurt?",
    answer: "Most clients describe the sensation as a light scratching or pressure. We apply a highly effective 5% Lidocaine topical numbing cream before the procedure and secondary epinephrine gel throughout the session to ensure you remain completely comfortable and relaxed."
  },
  {
    question: "How long do the results typically last?",
    answer: "Microblading generally lasts between 12 to 18 months before needing a refresh. Ombré Powder Brows last longer, usually between 2 to 3 years. Pigment longevity depends on your skin type, lifestyle, sun exposure, and skincare routine (avoid using chemical exfoliants directly over your brows)."
  },
  {
    question: "What is your cancellation and booking policy?",
    answer: "We require a non-refundable deposit to secure your appointment. We have a strict 48-hour cancellation policy: if you reschedule or cancel less than 48 hours before your session, your deposit is forfeited. Books open on the 1st of every month for the following month's calendar."
  },
  {
    question: "How should I prepare for my brow appointment?",
    answer: "To minimize bleeding and ensure optimal pigment retention, avoid alcohol, caffeine, ibuprofen, aspirin, and fish oil supplements for 24-48 hours before your appointment. Discontinue retinol, AHA/BHA exfoliants, and chemical peels near the brow area at least 2 weeks prior."
  }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  
  // Interactive Quiz State
  const [quizStep, setQuizStep] = useState(1);
  const [skinType, setSkinType] = useState("");
  const [makeupLook, setMakeupLook] = useState("");
  const [quizResult, setQuizResult] = useState<string | null>(null);

  // Booking Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "microblading",
    notes: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handler for Quiz Answers
  const handleQuizNext = (answer: string) => {
    if (quizStep === 1.5) {
      setSkinType(answer);
      setQuizStep(2);
    } else if (quizStep === 2) {
      setMakeupLook(answer);
      calculateQuizResult(skinType, answer);
      setQuizStep(3);
    }
  };

  const calculateQuizResult = (skin: string, look: string) => {
    if (skin === "oily" || skin === "combination") {
      if (look === "bold") {
        setQuizResult("Ombré Powder Brows");
      } else {
        setQuizResult("Ombré Powder Brows (Soft & Shaded)");
      }
    } else {
      if (look === "natural") {
        setQuizResult("Signature Microblading");
      } else if (look === "bold") {
        setQuizResult("Combination / Hybrid Brows (Microblading + Shading)");
      } else {
        setQuizResult("Signature Microblading or Powder Brows");
      }
    }
  };

  const resetQuiz = () => {
    setSkinType("");
    setMakeupLook("");
    setQuizResult(null);
    setQuizStep(1);
  };

  // Form submit handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submission
    setFormSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans text-warm-brown selection:bg-terracotta-light selection:text-warm-brown">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex flex-col group">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-warm-brown group-hover:text-terracotta transition-colors duration-300">
                BROWS BY ANISSA
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.2em] font-semibold text-terracotta uppercase -mt-1">
                Lowcountry Brow Artistry
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="text-sm font-medium hover:text-terracotta transition-colors duration-200">Services</a>
              <a href="#quiz" className="text-sm font-medium hover:text-terracotta transition-colors duration-200">Brow Quiz</a>
              <a href="#about" className="text-sm font-medium hover:text-terracotta transition-colors duration-200">About Anissa</a>
              <a href="#training" className="text-sm font-medium hover:text-terracotta transition-colors duration-200">Training</a>
              <a href="#location" className="text-sm font-medium hover:text-terracotta transition-colors duration-200">Location</a>
              <a href="#faqs" className="text-sm font-medium hover:text-terracotta transition-colors duration-200">FAQs</a>
              
              <a 
                href="#book" 
                className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-full text-cream bg-terracotta hover:bg-terracotta-dark shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Appointment
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-warm-brown hover:text-terracotta focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cream border-b border-terracotta/10 animate-fade-in">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium hover:bg-cream-dark hover:text-terracotta transition-colors"
              >
                Services
              </a>
              <a 
                href="#quiz" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium hover:bg-cream-dark hover:text-terracotta transition-colors"
              >
                Brow Quiz
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium hover:bg-cream-dark hover:text-terracotta transition-colors"
              >
                About Anissa
              </a>
              <a 
                href="#training" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium hover:bg-cream-dark hover:text-terracotta transition-colors"
              >
                Training
              </a>
              <a 
                href="#location" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium hover:bg-cream-dark hover:text-terracotta transition-colors"
              >
                Location
              </a>
              <a 
                href="#faqs" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium hover:bg-cream-dark hover:text-terracotta transition-colors"
              >
                FAQs
              </a>
              <div className="pt-4 pb-2 px-3">
                <a 
                  href="#book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 border border-transparent text-base font-semibold rounded-full text-cream bg-terracotta hover:bg-terracotta-dark shadow-sm"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-cream-light via-cream to-cream">
        {/* Subtle decorative circles */}
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-terracotta-light/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-[-10%] w-[350px] h-[350px] rounded-full bg-gold-light/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8 animate-slide-up">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terracotta-light/20 border border-terracotta/10 text-xs sm:text-sm font-semibold text-terracotta uppercase tracking-widest mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
                  Charleston&apos;s Premier PMU Studio
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6.5xl font-extrabold tracking-tight leading-none text-warm-brown">
                  The <span className="italic font-normal text-terracotta relative">
                    &ldquo;it girl&rdquo;
                  </span>
                  <br className="hidden sm:inline" /> brow artistry of the Lowcountry.
                </h1>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-warm-brown-light leading-relaxed max-w-2xl">
                Elevate your everyday look with custom, hyper-realistic brows designed uniquely for your face. Meticulously mapped, natural-looking results by Anissa Martinez—master specialist with 6+ years of industry experience.
              </p>

              {/* CTAs and Notices */}
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <a 
                  href="#book"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-cream bg-terracotta hover:bg-terracotta-dark shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  Book Your Appointment
                </a>
                <a 
                  href="#services"
                  className="inline-flex items-center justify-center px-6 py-4 border border-warm-brown/25 text-base font-semibold rounded-full hover:bg-cream-dark hover:border-warm-brown transition-colors duration-300 text-center"
                >
                  Explore Services
                </a>
              </div>

              {/* Booking notification alert */}
              <div className="p-4 rounded-xl bg-gold-light/40 border border-gold/30 flex items-start gap-3 max-w-xl">
                <svg className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-xs font-bold text-warm-brown uppercase tracking-wider">High Demand Notice</p>
                  <p className="text-sm text-warm-brown-light mt-0.5">
                    <strong>Books open 1st of every month at 9:00 AM EST</strong> for the following month. Slots fill rapidly—join the waitlist for cancellation openings.
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Image / Design */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in">
              <div className="relative w-full max-w-sm sm:max-w-md">
                {/* Arch background shape */}
                <div className="absolute inset-0 bg-terracotta-light/15 arch-clip scale-[1.03] translate-x-2 translate-y-2 pointer-events-none transition-all duration-500" />
                
                {/* Main Arch-clipped photo of eyebrows */}
                <div className="relative arch-clip overflow-hidden border-8 border-cream-light shadow-2xl aspect-[3/4]">
                  <Image 
                    src="/images/hero_brows.png" 
                    alt="Perfect, natural microbladed eyebrows close up" 
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Overlaid stats card */}
                <div className="absolute -bottom-6 -left-6 bg-cream border border-gold/30 p-4 rounded-xl shadow-lg flex items-center gap-3 animate-slide-up">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold font-serif text-warm-brown leading-none">5.0 Stars</p>
                    <p className="text-xs text-warm-brown-light mt-0.5">100+ verified client reviews</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-cream-dark py-8 sm:py-12 border-y border-terracotta/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-terracotta/15">
            
            <div className="flex flex-col items-center justify-center p-2">
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-terracotta">6+ Years</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-warm-brown-light mt-1">Studio Experience</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-terracotta">2,400+</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-warm-brown-light mt-1">Instagram Followers</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-terracotta">5.0 Star</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-warm-brown-light mt-1">Google &amp; Booking Rating</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-terracotta">100%</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-warm-brown-light mt-1">Custom Mapping</span>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-terracotta uppercase tracking-widest mb-3">Signature Artistry Menu</h2>
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-warm-brown">
              Tailored Brow Services
            </p>
            <div className="w-16 h-0.5 bg-terracotta mx-auto mt-4" />
            <p className="text-base sm:text-lg text-warm-brown-light mt-4">
              We focus on enhancing your natural framework, using high-quality custom pigments selected to match your skin undertones and natural brow hair color perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-cream-light border border-terracotta/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:border-terracotta/20 transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Corner highlight badge */}
                <div className="absolute top-0 right-0 bg-terracotta-light/20 text-terracotta text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-bl-xl border-l border-b border-terracotta/10">
                  {service.tag}
                </div>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-warm-brown group-hover:text-terracotta transition-colors duration-300 pr-20">
                    {service.name}
                  </h3>
                  
                  <div className="flex items-center gap-4 mt-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-warm-brown-light">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {service.duration}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta/30" />
                    <span className="text-terracotta font-bold text-base">{service.price}</span>
                  </div>

                  <p className="text-sm sm:text-base text-warm-brown-light leading-relaxed mt-4">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-terracotta/10 text-xs sm:text-sm text-warm-brown-muted italic leading-relaxed">
                  {service.includes}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Notice */}
          <div className="mt-12 text-center text-xs sm:text-sm text-warm-brown-light max-w-2xl mx-auto">
            💡 <strong>Note for Touch-Ups:</strong> If you have existing microblading or permanent makeup from another artist, this is considered a correction service. Please email/DM photos of your brows before booking to confirm suitability.
          </div>

        </div>
      </section>

      {/* Interactive Quiz Section */}
      <section id="quiz" className="py-20 bg-cream-dark border-y border-terracotta/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-terracotta via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-cream rounded-3xl border border-gold/30 p-8 sm:p-12 shadow-xl">
            
            {quizStep === 1 && (
              <div className="text-center space-y-6">
                <h3 className="text-xs font-bold text-terracotta uppercase tracking-widest">Interactive Consultation</h3>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-warm-brown">
                  Which Brow Technique is Right For You?
                </h2>
                <p className="text-sm sm:text-base text-warm-brown-light max-w-xl mx-auto">
                  Take our 2-step quick quiz to find the perfect brow style that fits your skin type and desired daily makeup maintenance routine.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setQuizStep(1.5)}
                    className="px-8 py-3.5 bg-terracotta text-cream font-bold rounded-full hover:bg-terracotta-dark shadow transition-all duration-300"
                  >
                    Start Quick Quiz
                  </button>
                </div>
              </div>
            )}

            {quizStep === 1.5 && (
              <div className="space-y-6">
                <div className="flex justify-between items-center text-xs font-semibold text-warm-brown-muted uppercase tracking-wider">
                  <span>Question 1 of 2</span>
                  <span>Skin Type Analysis</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-warm-brown text-center">
                  How would you describe your facial skin?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <button
                    onClick={() => handleQuizNext("dry")}
                    className="p-5 border border-terracotta/10 hover:border-terracotta bg-cream-light hover:bg-gold-light/20 rounded-xl text-left transition-all duration-300 group"
                  >
                    <p className="font-bold text-warm-brown group-hover:text-terracotta">Normal or Dry Skin</p>
                    <p className="text-xs text-warm-brown-muted mt-1 leading-normal">Tiny pores, tight texture, rarely feels greasy. Makeup stays put easily.</p>
                  </button>
                  <button
                    onClick={() => handleQuizNext("oily")}
                    className="p-5 border border-terracotta/10 hover:border-terracotta bg-cream-light hover:bg-gold-light/20 rounded-xl text-left transition-all duration-300 group"
                  >
                    <p className="font-bold text-warm-brown group-hover:text-terracotta">Combination or Oily Skin</p>
                    <p className="text-xs text-warm-brown-muted mt-1 leading-normal">Visible pores, occasional oiliness in T-zone or overall. Brows get shiny.</p>
                  </button>
                </div>
              </div>
            )}

            {quizStep === 2 && (
              <div className="space-y-6">
                <div className="flex justify-between items-center text-xs font-semibold text-warm-brown-muted uppercase tracking-wider">
                  <span>Question 2 of 2</span>
                  <span>Style Preference</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-warm-brown text-center">
                  What is your daily eyebrow aesthetic goal?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <button
                    onClick={() => handleQuizNext("natural")}
                    className="p-5 border border-terracotta/10 hover:border-terracotta bg-cream-light hover:bg-gold-light/20 rounded-xl text-left transition-all duration-300 group"
                  >
                    <p className="font-bold text-warm-brown group-hover:text-terracotta">Barely-There Natural Strokes</p>
                    <p className="text-xs text-warm-brown-muted mt-1 leading-normal">I want individual strokes that blend seamlessly. Minimal daily makeup look.</p>
                  </button>
                  <button
                    onClick={() => handleQuizNext("bold")}
                    className="p-5 border border-terracotta/10 hover:border-terracotta bg-cream-light hover:bg-gold-light/20 rounded-xl text-left transition-all duration-300 group"
                  >
                    <p className="font-bold text-warm-brown group-hover:text-terracotta">Soft Shaded Powder Makeup</p>
                    <p className="text-xs text-warm-brown-muted mt-1 leading-normal">I like the look of soft brow powder or pencil. Defined but not overly dark.</p>
                  </button>
                </div>
              </div>
            )}

            {quizStep === 3 && (
              <div className="text-center space-y-6 animate-slide-up">
                <div className="w-16 h-16 rounded-full bg-gold/20 text-gold-dark flex items-center justify-center mx-auto text-2xl">
                  ✨
                </div>
                <h3 className="text-xs font-bold text-terracotta uppercase tracking-widest">Your Personalized Recommendation</h3>
                <h2 className="font-serif text-3xl font-extrabold text-warm-brown">
                  {quizResult}
                </h2>
                <p className="text-sm sm:text-base text-warm-brown-light max-w-lg mx-auto leading-relaxed">
                  Based on your skin profile ({skinType === "dry" ? "Normal/Dry" : "Oily/Combo"}) and preferred brow finish ({makeupLook === "natural" ? "Natural strokes" : "Powder shading"}), this technique will yield the best pigment retention and look most harmonious on your skin.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={resetQuiz}
                    className="px-6 py-3 border border-warm-brown/25 text-sm font-semibold rounded-full hover:bg-cream-dark transition-all duration-300"
                  >
                    Take Quiz Again
                  </button>
                  <a
                    href="#book"
                    className="px-8 py-3 bg-terracotta hover:bg-terracotta-dark text-cream text-sm font-bold rounded-full shadow transition-all duration-300"
                  >
                    Book This Style Now
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Image block */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-terracotta-light/10 rounded-3xl transform rotate-2 pointer-events-none" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-cream-light shadow-xl aspect-square">
                <Image 
                  src="/images/training_professional.png" 
                  alt="Anissa Martinez teaching a student microblading lines" 
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              {/* Highlight badge overlay */}
              <div className="absolute -bottom-4 right-4 bg-terracotta text-cream px-6 py-3 rounded-xl shadow-lg border border-terracotta-dark/15 text-center">
                <span className="block text-2xl font-serif font-extrabold leading-none">6+ Years</span>
                <span className="text-[10px] uppercase font-bold tracking-widest mt-0.5 block">PMU Experience</span>
              </div>
            </div>

            {/* Content block */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h2 className="text-xs font-bold text-terracotta uppercase tracking-widest">The Brow Artist Behind the Brand</h2>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-warm-brown">
                  Meet Anissa Martinez
                </h3>
                <div className="w-16 h-0.5 bg-terracotta mt-2" />
              </div>

              <p className="text-base text-warm-brown-light leading-relaxed">
                As Charleston&apos;s premier eye-opening arch specialist, I believe brows are not one-size-fits-all. A great set of eyebrows gives you a natural, youthful lift. That&apos;s why I focus on the golden ratio, mapping out a custom framework for every client that complements your specific bone structure and facial aesthetics.
              </p>

              <p className="text-base text-warm-brown-light leading-relaxed">
                Over the past 6+ years, I have successfully transformed thousands of brows, earning a solid 5.0-star reputation. I am deeply passionate about precision and continuous training, and I utilize only the highest grade, hypoallergenic cosmetic pigments and sterile micro-blades.
              </p>

              {/* Education block */}
              <div className="p-5 rounded-2xl bg-cream-dark/60 border border-terracotta/5">
                <h4 className="font-bold text-sm text-warm-brown uppercase tracking-wider flex items-center gap-2">
                  <svg className="w-5 h-5 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Certified PMU Educator
                </h4>
                <p className="text-xs sm:text-sm text-warm-brown-light mt-2 leading-relaxed">
                  In addition to my daily studio clients, I host exclusive, in-person training programs for beauty professionals in South Carolina. I teach mapping precision, shading gradients, and business growth systems.
                </p>
              </div>

              <div className="pt-2">
                <a 
                  href="#book"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-terracotta hover:text-terracotta-dark group"
                >
                  Schedule Your Free Mapping Consult
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 md:py-28 bg-cream-dark border-t border-terracotta/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-terracotta uppercase tracking-widest mb-3">Elevate Your Beauty Career</h2>
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-warm-brown">
              In-Person PMU Masterclasses
            </p>
            <div className="w-16 h-0.5 bg-terracotta mx-auto mt-4" />
            <p className="text-base sm:text-lg text-warm-brown-light mt-4">
              Learn the exact microblading and shading mapping systems Anissa has perfected over 6+ years. Join an elite class of certified brow artists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-cream border border-gold/20 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <span className="text-2xl mb-4 block">🎓</span>
                <h4 className="font-serif text-xl font-bold text-warm-brown">1-on-1 Mentorship</h4>
                <p className="text-sm text-warm-brown-light mt-3 leading-relaxed">
                  A completely customizable, intensive 2-day course focused exclusively on your specific technique needs, mapping speeds, and custom design issues.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-terracotta/10 text-xs font-semibold text-terracotta tracking-wider uppercase">
                Includes Live Model Practice
              </div>
            </div>

            <div className="bg-cream border border-gold/20 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <span className="text-2xl mb-4 block">👜</span>
                <h4 className="font-serif text-xl font-bold text-warm-brown">Elite Starter Kit</h4>
                <p className="text-sm text-warm-brown-light mt-3 leading-relaxed">
                  Receive a fully loaded premium kit containing Anissa&apos;s favorite mapping string, caliper, PMU machine, sterile needles, pigment line, and practice latex.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-terracotta/10 text-xs font-semibold text-terracotta tracking-wider uppercase">
                Worth $650+ Retail Value
              </div>
            </div>

            <div className="bg-cream border border-gold/20 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <span className="text-2xl mb-4 block">📈</span>
                <h4 className="font-serif text-xl font-bold text-warm-brown">Business Blueprint</h4>
                <p className="text-sm text-warm-brown-light mt-3 leading-relaxed">
                  Go beyond the brows. Learn client acquisition strategies, social media photography, lighting setups, and client management to scale to 6-figures.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-terracotta/10 text-xs font-semibold text-terracotta tracking-wider uppercase">
                Lifetime Support Included
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <a 
              href="#book"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-bold rounded-full text-cream bg-terracotta hover:bg-terracotta-dark shadow transition-all duration-300"
            >
              Inquire About Class Dates
            </a>
          </div>

        </div>
      </section>

      {/* Studio & Location Section */}
      <section id="location" className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Map and Details Block */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <h2 className="text-xs font-bold text-terracotta uppercase tracking-widest">Our Charleston Sanctuary</h2>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-warm-brown">
                  The Historic East Bay Studio
                </h3>
                <div className="w-16 h-0.5 bg-terracotta mt-2" />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0 text-terracotta mt-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide">Studio Address</h4>
                    <p className="text-sm text-warm-brown-light mt-1">
                      701 E Bay St Ste 102A, Charleston, SC 29403
                    </p>
                    <p className="text-xs text-warm-brown-muted mt-0.5">
                      Located in downtown Charleston, featuring comfortable client parking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0 text-terracotta mt-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide">Studio Hours</h4>
                    <p className="text-sm text-warm-brown-light mt-1">
                      By Appointment Only — Tuesday through Saturday: 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-xs text-warm-brown-muted mt-0.5">
                      No walk-ins accepted. Appointments must be requested in advance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mock/Styled Map */}
              <div className="relative rounded-2xl overflow-hidden border border-gold/30 bg-cream-dark aspect-[16/9] shadow-sm flex flex-col justify-center items-center text-center p-6">
                {/* Decorative map elements */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-terracotta via-transparent to-transparent pointer-events-none" />
                <div className="absolute w-full h-[1px] bg-terracotta/10 top-1/3 left-0" />
                <div className="absolute w-full h-[1px] bg-terracotta/10 top-2/3 left-0" />
                <div className="absolute h-full w-[1px] bg-terracotta/10 left-1/3 top-0" />
                <div className="absolute h-full w-[1px] bg-terracotta/10 left-2/3 top-0" />
                
                {/* Pin marker */}
                <div className="relative z-10 animate-bounce text-terracotta text-3xl">
                  📍
                </div>
                <div className="relative z-10 mt-2">
                  <p className="font-bold text-xs uppercase tracking-widest text-terracotta">Brows by Anissa</p>
                  <p className="text-xxs text-warm-brown-light mt-0.5">701 E Bay St (Ste 102A), Charleston</p>
                </div>
                
                {/* View on Google Maps Button */}
                <a
                  href="https://maps.google.com/?q=701+E+Bay+St+Ste+102A,+Charleston,+SC+29403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 mt-4 px-4 py-2 bg-cream text-xs font-bold rounded-full border border-terracotta/20 hover:border-terracotta text-warm-brown shadow-sm transition-all duration-300"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Studio Image Block */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute inset-0 bg-terracotta-light/10 rounded-3xl transform -rotate-2 pointer-events-none" />
                <div className="relative rounded-3xl overflow-hidden border-4 border-cream-light shadow-xl aspect-[4/3] sm:aspect-[4/3]">
                  <Image 
                    src="/images/studio_interior.png" 
                    alt="Elegant, warm luxury design microblading studio interior" 
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faqs" className="py-20 md:py-28 bg-cream-dark border-y border-terracotta/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-terracotta uppercase tracking-widest mb-3">Answers to Your Questions</h2>
            <p className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-warm-brown">
              Client Frequently Asked Questions
            </p>
            <div className="w-16 h-0.5 bg-terracotta mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-cream rounded-2xl border border-terracotta/5 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex justify-between items-center text-warm-brown hover:text-terracotta transition-colors focus:outline-none"
                >
                  <span className="font-serif font-bold text-base sm:text-lg pr-4">{faq.question}</span>
                  <span className="text-terracotta shrink-0 font-bold text-xl">
                    {faqOpen === index ? "−" : "+"}
                  </span>
                </button>
                
                {faqOpen === index && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-warm-brown-light border-t border-terracotta/5 leading-relaxed animate-slide-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Booking Form, Policies, and Contact Info */}
      <section id="book" className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left side details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-2">
                <h2 className="text-xs font-bold text-terracotta uppercase tracking-widest">Reserve Your Spot</h2>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-warm-brown">
                  Book Your Appointment
                </h3>
                <div className="w-16 h-0.5 bg-terracotta mt-2" />
              </div>

              <p className="text-base text-warm-brown-light leading-relaxed">
                Thank you for selecting Brows by Anissa. Because of high-demand and highly custom mapping, our books are opened on the <strong>1st of every month for the next month&apos;s appointments</strong>.
              </p>

              {/* Studio Cancellation Policy Card */}
              <div className="p-6 rounded-2xl bg-terracotta-light/15 border border-terracotta/20 space-y-3">
                <h4 className="font-bold text-xs uppercase tracking-widest text-terracotta flex items-center gap-1.5">
                  ⚠️ Strict 48-Hour Cancellation Policy
                </h4>
                <p className="text-xs sm:text-sm text-warm-brown-light leading-relaxed">
                  We respect Anissa&apos;s time and the high wait times for our clients. Any rescheduling or cancellations must be completed at least 48 hours prior to your scheduled time. Failing to do so will result in the immediate forfeiture of your booking deposit.
                </p>
              </div>

              {/* Instagram CTA */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-gold/30 bg-cream-light">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white text-xl shadow shrink-0">
                  📸
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide">Follow on Instagram</h4>
                  <a 
                    href="https://instagram.com/browsbyanissa" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-terracotta hover:underline font-bold"
                  >
                    @browsbyanissa
                  </a>
                  <p className="text-xxs text-warm-brown-muted">Follow for daily healed results, client reels, and booking alert openings.</p>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="lg:col-span-7 bg-cream-light border border-terracotta/10 rounded-3xl p-8 sm:p-10 shadow-lg relative">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-6 animate-slide-up">
                  <div className="w-16 h-16 rounded-full bg-gold-light/40 border border-gold/30 text-gold-dark flex items-center justify-center mx-auto text-3xl">
                    ✓
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-warm-brown">Inquiry Received</h3>
                  <p className="text-sm sm:text-base text-warm-brown-light max-w-md mx-auto leading-relaxed">
                    Thank you! Anissa will review your inquiry details. We will contact you via email or text within <strong>48 business hours</strong> to finalize booking steps, coordinate calendar dates, and request your deposit.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 bg-terracotta text-cream text-xs uppercase font-bold tracking-wider rounded-full hover:bg-terracotta-dark transition-all duration-300"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <h4 className="font-serif text-xl font-bold text-warm-brown border-b border-terracotta/10 pb-4">
                    Send a Direct Booking Request
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-warm-brown-light mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-cream border border-terracotta/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-terracotta text-warm-brown"
                        placeholder="Anissa Martinez"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-warm-brown-light mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-cream border border-terracotta/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-terracotta text-warm-brown"
                        placeholder="hello@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-warm-brown-light mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full bg-cream border border-terracotta/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-terracotta text-warm-brown"
                        placeholder="(843) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-warm-brown-light mb-2">
                        Select Service
                      </label>
                      <select
                        id="service"
                        className="w-full bg-cream border border-terracotta/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-terracotta text-warm-brown appearance-none"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="microblading">Signature Microblading ($550)</option>
                        <option value="powder-brows">Ombré Powder Brows ($600)</option>
                        <option value="color-boost">Annual Color Boost ($300)</option>
                        <option value="touch-ups">Perfecting Touch-Ups ($150+)</option>
                        <option value="training">In-Person Brow Training Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-warm-brown-light mb-2">
                      Additional Notes or Questions
                    </label>
                    <textarea
                      id="notes"
                      rows={4}
                      className="w-full bg-cream border border-terracotta/10 rounded-lg p-4 text-sm focus:outline-none focus:border-terracotta text-warm-brown"
                      placeholder="Please note if you have existing brow tattoos/microblading, or detail any specific scheduling preference."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-terracotta hover:bg-terracotta-dark text-cream font-bold rounded-full text-center uppercase tracking-widest text-xs sm:text-sm shadow hover:shadow-lg transition-all duration-300"
                  >
                    Submit Booking Request
                  </button>
                  
                  <p className="text-center text-[10px] sm:text-xs text-warm-brown-muted italic leading-normal">
                    * Submitting this request does not guarantee an appointment. All bookings require confirmation and a non-refundable deposit.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-brown text-cream-light py-12 sm:py-16 border-t border-terracotta/20 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-cream-light/10">
            
            {/* Column 1: Studio Identity */}
            <div className="space-y-4">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-cream block">
                BROWS BY ANISSA
              </span>
              <p className="text-xs text-cream-light/70 leading-relaxed max-w-sm">
                Providing premier microblading, powder shading, and expert aesthetic training in the historic heart of Charleston, South Carolina.
              </p>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-gold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                <a href="#services" className="hover:text-gold transition-colors">Services</a>
                <a href="#quiz" className="hover:text-gold transition-colors">Brow Quiz</a>
                <a href="#about" className="hover:text-gold transition-colors">About Anissa</a>
                <a href="#training" className="hover:text-gold transition-colors">Training</a>
                <a href="#location" className="hover:text-gold transition-colors">Location</a>
                <a href="#faqs" className="hover:text-gold transition-colors">FAQs</a>
              </div>
            </div>

            {/* Column 3: Contact & Social */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-gold mb-4">Get in Touch</h4>
              <p className="text-xs text-cream-light/70 leading-relaxed">
                701 E Bay St Ste 102A<br />
                Charleston, SC 29403
              </p>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://instagram.com/browsbyanissa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-cream-light/20 hover:border-gold flex items-center justify-center text-sm hover:text-gold transition-colors"
                  aria-label="Instagram Profile"
                >
                  📸
                </a>
                <a 
                  href="#book"
                  className="w-8 h-8 rounded-full border border-cream-light/20 hover:border-gold flex items-center justify-center text-sm hover:text-gold transition-colors"
                  aria-label="Book Brows"
                >
                  📅
                </a>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-light/50 gap-4">
            <p>&copy; {new Date().getFullYear()} Brows by Anissa Martinez. All rights reserved.</p>
            <p>Designed with ❤️ in Charleston, SC</p>
          </div>

        </div>
      </footer>
    </div>
  );
}
