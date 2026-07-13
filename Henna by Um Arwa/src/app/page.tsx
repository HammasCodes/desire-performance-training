"use client";

import { useState } from "react";
import Image from "next/image";

// Inline SVGs for elegant UI icons
const WhatsAppIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.417 9.86-9.86.002-2.638-1.024-5.117-2.884-6.979C16.57 1.902 14.09 1.024 11.453 1.024c-5.437 0-9.857 4.417-9.859 9.86-.001 1.81.488 3.578 1.416 5.121L1.87 21.08l4.777-1.926zm11.754-5.328c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 text-gold-metallic fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const services = [
    {
      id: "bridal",
      title: "Bridal Henna",
      image: "/bridal_henna.png",
      desc: "Extravagant, highly intricate traditional patterns stretching up the arms and feet, curated specifically to make you shine on your wedding day.",
      badge: "Most Popular",
    },
    {
      id: "party",
      title: "Party Henna",
      image: "/party_henna.png",
      desc: "Elegant, modern, and minimalist designs for guests and family members. Quick, beautiful accents perfect for celebrations.",
      badge: "Fast Application",
    },
    {
      id: "facepainting",
      title: "Face Painting",
      image: "/face_painting.png",
      desc: "Vibrant, creative, and completely safe designs for children's parties, school carnivals, and family gatherings. Using hypoallergenic makeup.",
      badge: "Kids & Events",
    },
    {
      id: "arabic",
      title: "Arabic Designs",
      image: "/arabic_henna.png",
      desc: "Bold floral motifs, leafy extensions, and artistic negative space framing. Captures a classic, flowing Middle Eastern aesthetic.",
      badge: "Bold & Elegant",
    },
    {
      id: "indian",
      title: "Indian Designs",
      image: "/indian_henna.png",
      desc: "Dense, detailed geometric symmetry, traditional paisley patterns, and delicate mandala centers for a deeply cultural, full coverage look.",
      badge: "Traditional",
    },
  ];

  const faqs = [
    {
      question: "How do I book a home service session?",
      answer: "Booking is very easy! Click any of our WhatsApp or Instagram buttons, and message us with your preferred date, time, your area in Kuwait, and the number of people requiring henna or face painting. We will confirm availability instantly.",
    },
    {
      question: "Do you travel to all areas of Kuwait?",
      answer: "Yes, our premium home service covers all governorates in Kuwait. Whether you are in Al Asimah, Hawally, Farwaniya, Ahmadi, Mubarak Al-Kabeer, or Jahra, we bring the henna studio directly to your doorstep.",
    },
    {
      question: "How long does the henna stain last?",
      answer: "We use only top-grade, natural henna paste. With proper care (keeping the dry paste on for at least 4-6 hours and avoiding harsh scrubbing), you will get a rich, dark mahogany stain that lasts between 7 to 14 days.",
    },
    {
      question: "Are your face painting materials safe for children?",
      answer: "Absolutely! We prioritize safety above all. We use only premium, FDA-approved, water-based, non-toxic, and hypoallergenic face painting cosmetics. They are completely safe for children's sensitive skin and wash off easily with warm water and soap.",
    },
    {
      question: "What occasions do you cater to?",
      answer: "We cater to all celebrations across Kuwait: weddings (bridal mehndi nights), Eid celebrations, girls' gatherings, birthday parties, baby showers, school carnivals, corporate promotional events, and private appointments.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-maroon-dark/95 backdrop-blur-md border-b border-gold-metallic/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex flex-col group" id="nav-logo">
              <span className="font-serif text-2xl font-bold tracking-wider text-gold-accent group-hover:text-gold-soft transition-colors">
                Henna by Um Arwa
              </span>
              <span className="text-[10px] uppercase tracking-widest text-cream-dark/60 -mt-1">
                Kuwait Home Service
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                id="link-services"
                className="font-medium text-cream-base hover:text-gold-accent transition-colors tracking-wide text-sm"
              >
                Services
              </a>
              <a
                href="#about"
                id="link-about"
                className="font-medium text-cream-base hover:text-gold-accent transition-colors tracking-wide text-sm"
              >
                About the Artist
              </a>
              <a
                href="#gallery"
                id="link-gallery"
                className="font-medium text-cream-base hover:text-gold-accent transition-colors tracking-wide text-sm"
              >
                Gallery
              </a>
              <a
                href="#faq"
                id="link-faq"
                className="font-medium text-cream-base hover:text-gold-accent transition-colors tracking-wide text-sm"
              >
                FAQs
              </a>
              <a
                href="#contact"
                id="link-contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gold-gradient-bg text-maroon-dark font-semibold text-sm shadow-md hover:scale-[1.03] transition-all duration-300"
              >
                <WhatsAppIcon />
                <span>Book Home Service</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-menu-btn"
                className="p-2 rounded-md text-gold-accent hover:text-gold-soft focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-maroon-deep border-b border-gold-metallic/20" id="mobile-drawer">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              <a
                href="#services"
                id="mobile-link-services"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-cream-base hover:bg-maroon-dark hover:text-gold-accent transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                id="mobile-link-about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-cream-base hover:bg-maroon-dark hover:text-gold-accent transition-colors"
              >
                About the Artist
              </a>
              <a
                href="#gallery"
                id="mobile-link-gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-cream-base hover:bg-maroon-dark hover:text-gold-accent transition-colors"
              >
                Gallery
              </a>
              <a
                href="#faq"
                id="mobile-link-faq"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-cream-base hover:bg-maroon-dark hover:text-gold-accent transition-colors"
              >
                FAQs
              </a>
              <div className="pt-2 px-3">
                <a
                  href="#contact"
                  id="mobile-link-booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full gold-gradient-bg text-maroon-dark font-bold text-sm shadow-md"
                >
                  <WhatsAppIcon />
                  <span>Book Home Service</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center mandala-pattern overflow-hidden py-16 px-4">
          {/* Subtle overlay grid for luxury feel */}
          <div className="absolute inset-0 bg-maroon-dark/75 z-0" />
          
          {/* Background image - generated hero_bg.png */}
          <div className="absolute inset-0 z-0 opacity-45 mix-blend-overlay">
            <Image
              src="/hero_bg.png"
              alt="Traditional Intricate Henna Artistry Background"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gold-metallic/40 bg-maroon-dark/60 text-gold-accent text-xs font-semibold uppercase tracking-widest mb-6">
              <span>✨ Premium Henna & Face Painting home service in kuwait</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-cream-light leading-tight tracking-wide mb-6">
              Intricate Artistry.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-accent via-gold-metallic to-gold-soft">
                Timeless Traditions.
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-cream-dark/90 font-light leading-relaxed mb-10">
              Transform your special moments with elegant, bespoke henna and safe, vibrant face painting designs. 
              Enjoy a professional and punctual studio experience directly in the comfort of your home, anywhere in Kuwait.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                id="hero-cta-book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full gold-gradient-bg text-maroon-dark font-bold text-base shadow-lg shadow-gold-dark/20 hover:shadow-gold-dark/40 hover:scale-[1.03] transition-all duration-300"
              >
                <WhatsAppIcon />
                <span>Book Home Service</span>
              </a>
              <a
                href="https://instagram.com/kuwait.henna.design"
                id="hero-cta-instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-gold-metallic/60 bg-maroon-dark/50 text-gold-accent font-semibold text-base backdrop-blur-sm hover:bg-gold-metallic hover:text-maroon-dark transition-all duration-300"
              >
                <InstagramIcon />
                <span>See Instagram Designs</span>
              </a>
            </div>

            {/* Quick badges under CTAs */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t border-gold-metallic/20">
              <div className="flex items-center justify-center gap-2 text-cream-dark/80 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-metallic" />
                <span>100% Home Service</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-cream-dark/80 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-metallic" />
                <span>Organic Henna Paste</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-cream-dark/80 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-metallic" />
                <span>FDA-Approved Face Paint</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-cream-dark/80 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-metallic" />
                <span>Serving All Occasions</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals Banner */}
        <section className="bg-cream-dark border-y border-gold-metallic/20 py-8 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gold-metallic/20">
            <div className="py-4 md:py-0 flex flex-col justify-center items-center">
              <span className="font-serif text-4xl font-extrabold text-maroon-deep">19,000+</span>
              <span className="text-sm font-medium tracking-wide uppercase text-gold-dark mt-1">Instagram Followers</span>
            </div>
            <div className="py-4 md:py-0 flex flex-col justify-center items-center">
              <span className="font-serif text-4xl font-extrabold text-maroon-deep">Kuwait-Wide</span>
              <span className="text-sm font-medium tracking-wide uppercase text-gold-dark mt-1">Convenient Home Service</span>
            </div>
            <div className="py-4 md:py-0 flex flex-col justify-center items-center">
              <div className="flex gap-1 mb-1">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase text-gold-dark mt-1">5-Star Client Satisfaction</span>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-4 bg-cream-base mandala-pattern-light">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-maroon-deep tracking-wide mb-4">
                Our Specialized Services
              </h2>
              <div className="w-24 h-1 gold-gradient-bg mx-auto mb-6 rounded-full" />
              <p className="text-lg text-maroon-dark/80 font-light">
                Beautiful, custom henna drawings and skin-safe cosmetics artistry. Since we work exclusively as a home service provider, you can enjoy these premium treatments in the relaxation of your living room.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((svc) => (
                <div
                  key={svc.id}
                  id={`service-card-${svc.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gold-metallic/20 shadow-md hover:shadow-xl hover:border-gold-metallic/40 transition-all duration-300 flex flex-col"
                >
                  {/* Image Container with Golden Frame aspect */}
                  <div className="relative h-64 overflow-hidden bg-maroon-dark">
                    <Image
                      src={svc.image}
                      alt={`${svc.title} design example`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-maroon-deep/90 border border-gold-metallic/40 text-gold-accent px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
                      {svc.badge}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-maroon-deep mb-3">
                        {svc.title}
                      </h3>
                      <p className="text-maroon-dark/80 text-sm sm:text-base font-light leading-relaxed mb-6">
                        {svc.desc}
                      </p>
                    </div>
                    <a
                      href="#contact"
                      id={`service-btn-${svc.id}`}
                      className="inline-flex items-center justify-center w-full py-2.5 rounded-xl border border-maroon-deep text-maroon-deep hover:bg-maroon-deep hover:text-cream-light font-semibold text-sm transition-all duration-300"
                    >
                      Book Home Service
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Exclusive Service Callout Banner */}
            <div className="mt-16 bg-maroon-deep text-cream-light rounded-2xl p-8 sm:p-10 border border-gold-metallic/30 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 mandala-pattern rounded-full pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="max-w-2xl text-center md:text-left">
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-gold-accent mb-3">
                    Bespoke Designs for All Celebrations
                  </h4>
                  <p className="text-cream-dark/90 text-sm sm:text-base font-light leading-relaxed">
                    Um Arwa specializes in custom bookings for brides, private Eid gatherings, birthdays, baby showers, school parties, and all ladies-only occasions in Kuwait. Standard hygienic protocols are followed for every booking.
                  </p>
                </div>
                <a
                  href="#contact"
                  id="services-banner-btn"
                  className="whitespace-nowrap px-8 py-3.5 rounded-full gold-gradient-bg text-maroon-dark font-bold text-sm hover:scale-[1.03] transition-all duration-300"
                >
                  Book My Occasion Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 bg-cream-dark border-t border-gold-metallic/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* About Images Grid (Overlapping layered layout for luxury feel) */}
              <div className="relative h-[480px] w-full max-w-lg mx-auto lg:mx-0">
                <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-2xl overflow-hidden border border-gold-metallic/35 shadow-lg bg-maroon-dark">
                  <Image
                    src="/bridal_henna.png"
                    alt="Intricate bridal henna artwork close-up"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden border-2 border-gold-metallic shadow-2xl bg-maroon-deep z-10">
                  <Image
                    src="/party_henna.png"
                    alt="Modern minimalist henna design"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 gold-gradient-bg rounded-full border border-maroon-deep flex items-center justify-center shadow-lg z-20 pointer-events-none hidden sm:flex">
                  <span className="font-serif text-maroon-dark font-bold text-center text-xs tracking-wider">
                    Um Arwa<br />Studio
                  </span>
                </div>
              </div>

              {/* About Text Content */}
              <div className="lg:pl-8">
                <span className="text-gold-dark font-semibold text-sm uppercase tracking-widest block mb-3">
                  Kuwait's Trusted Artist
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-maroon-deep tracking-wide mb-6">
                  Beautiful, Safe, and Professional Artistry
                </h2>
                <div className="w-20 h-1 gold-gradient-bg mb-6 rounded-full" />

                <p className="text-maroon-dark/95 text-base sm:text-lg font-light leading-relaxed mb-6">
                  Um Arwa is a renowned professional henna and face painting artist serving families across Kuwait. Recognized for executing exceptionally detailed, delicate line-work, her portfolio includes traditional Arabic and Indian mandalas as well as modern Western body paint.
                </p>

                <p className="text-maroon-dark/95 text-base sm:text-lg font-light leading-relaxed mb-8">
                  Using only **100% natural, fresh, chemical-free henna paste**, Um Arwa ensures that your skin remains healthy while developing a rich, dark, and long-lasting color stain. For children's events, she uses premium, FDA-approved, non-toxic cosmetic paints that wash off effortlessly, leaving children happy and parents at peace.
                </p>

                {/* About Quick Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-metallic/20 flex items-center justify-center text-gold-dark">
                      ✓
                    </span>
                    <span className="text-sm font-semibold text-maroon-deep">Intricate Detailed Line-work</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-metallic/20 flex items-center justify-center text-gold-dark">
                      ✓
                    </span>
                    <span className="text-sm font-semibold text-maroon-deep">100% Organic Henna Paste</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-metallic/20 flex items-center justify-center text-gold-dark">
                      ✓
                    </span>
                    <span className="text-sm font-semibold text-maroon-deep">Safe & Skin-Friendly Pigments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-metallic/20 flex items-center justify-center text-gold-dark">
                      ✓
                    </span>
                    <span className="text-sm font-semibold text-maroon-deep">Prompt Doorstep Service</span>
                  </div>
                </div>

                <div className="mt-10">
                  <a
                    href="#contact"
                    id="about-cta-btn"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full gold-gradient-bg text-maroon-dark font-bold text-sm hover:scale-[1.03] transition-all duration-300 shadow-md"
                  >
                    <span>Schedule an Appointment</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 px-4 bg-cream-base">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-maroon-deep tracking-wide mb-4">
                Featured Work Gallery
              </h2>
              <div className="w-24 h-1 gold-gradient-bg mx-auto mb-6 rounded-full" />
              <p className="text-lg text-maroon-dark/80 font-light">
                A selection of gorgeous designs applied for our lovely clients in Kuwait.
              </p>
              <a
                href="https://instagram.com/kuwait.henna.design"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold-dark hover:text-maroon-deep font-semibold text-sm tracking-wider uppercase mt-4 transition-colors group"
              >
                <span>See more on Instagram @kuwait.henna.design</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { src: "/bridal_henna.png", title: "Intricate Bridal Hands" },
                { src: "/party_henna.png", title: "Modern Back-Hand Henna" },
                { src: "/face_painting.png", title: "Sparkling Butterfly Face Paint" },
                { src: "/arabic_henna.png", title: "Traditional Arabic Florals" },
                { src: "/indian_henna.png", title: "Traditional Mandala Palm" },
                { src: "/hero_bg.png", title: "Elegant Mehndi Rituals" },
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="group relative h-80 rounded-2xl overflow-hidden border border-gold-metallic/20 shadow-md bg-maroon-dark"
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-maroon-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                    <span className="text-gold-accent font-serif text-2xl font-bold text-center mb-2">
                      {img.title}
                    </span>
                    <span className="text-cream-light/80 text-xs tracking-wider uppercase flex items-center gap-1.5 border border-gold-metallic/40 px-3 py-1 rounded-full">
                      <InstagramIcon />
                      <span>@kuwait.henna.design</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Booking Section */}
        <section id="contact" className="py-24 px-4 bg-maroon-deep text-cream-light mandala-pattern relative">
          <div className="absolute inset-0 bg-maroon-dark/85 pointer-events-none" />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: CTAs */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-gold-accent font-semibold text-sm uppercase tracking-widest block mb-3">
                  Book Your Date
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream-light tracking-wide mb-6">
                  Schedule Home Service
                </h2>
                <p className="text-cream-dark/90 text-base sm:text-lg font-light leading-relaxed mb-8">
                  Get premium henna application or face painting in Kuwait. Fill in your details directly on WhatsApp, or send us an Instagram DM. Let us know the date, your location, and the service required. We reply promptly!
                </p>

                {/* Instant Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="https://wa.me/96565162170"
                    id="contact-wa-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    <WhatsAppIcon />
                    <span>Chat on WhatsApp (65162170)</span>
                  </a>
                  <a
                    href="https://instagram.com/kuwait.henna.design"
                    id="contact-ig-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-gold-metallic/60 bg-maroon-dark/50 text-gold-accent hover:bg-gold-metallic hover:text-maroon-dark font-bold text-base transition-all duration-300 hover:scale-[1.02]"
                  >
                    <InstagramIcon />
                    <span>Instagram DM</span>
                  </a>
                </div>

                {/* Secure Badge */}
                <div className="flex items-center gap-3 text-cream-dark/70 text-sm">
                  <span className="text-gold-accent">★</span>
                  <span>Direct booking with Um Arwa. No middle agency fees. Fast confirmation.</span>
                </div>
              </div>

              {/* Right Column: Mini FAQ/Info panel */}
              <div className="lg:col-span-5 bg-maroon-dark/90 p-8 rounded-3xl border border-gold-metallic/30 shadow-xl self-center">
                <h3 className="font-serif text-2xl font-bold text-gold-accent mb-6">
                  Contact Details
                </h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="text-gold-metallic text-lg">📍</span>
                    <div>
                      <h4 className="font-semibold text-cream-light">Service Area</h4>
                      <p className="text-sm text-cream-dark/80 font-light mt-1">
                        All Governorates of Kuwait (Home Service only)
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-gold-metallic text-lg">📞</span>
                    <div>
                      <h4 className="font-semibold text-cream-light">Phone / WhatsApp</h4>
                      <p className="text-sm text-cream-dark/80 font-light mt-1">
                        +965 65162170
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-gold-metallic text-lg">📸</span>
                    <div>
                      <h4 className="font-semibold text-cream-light">Instagram</h4>
                      <p className="text-sm text-cream-dark/80 font-light mt-1">
                        @kuwait.henna.design
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-gold-metallic text-lg">⏰</span>
                    <div>
                      <h4 className="font-semibold text-cream-light">Availability</h4>
                      <p className="text-sm text-cream-dark/80 font-light mt-1">
                        Everyday from 9:00 AM to 9:00 PM (Prior booking recommended)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faq" className="py-24 px-4 bg-cream-base border-t border-gold-metallic/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-maroon-deep tracking-wide mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 gold-gradient-bg mx-auto mb-6 rounded-full" />
              <p className="text-lg text-maroon-dark/80 font-light">
                Everything you need to know about our home service henna and face painting.
              </p>
            </div>

            {/* Accordion Drawers */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-gold-metallic/20 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      id={`faq-btn-${index}`}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className="font-serif text-lg sm:text-xl font-bold text-maroon-deep pr-4">
                        {faq.question}
                      </span>
                      <ChevronDownIcon isOpen={isOpen} />
                    </button>
                    
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-[300px] border-t border-gold-metallic/10" : "max-h-0"
                      }`}
                    >
                      <div className="p-6 text-maroon-dark/85 text-sm sm:text-base font-light leading-relaxed bg-cream-base/30">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-maroon-dark text-cream-light py-12 px-4 border-t border-gold-metallic/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 border-b border-gold-metallic/10 pb-8 mb-8 text-center md:text-left">
          
          <div>
            <h3 className="font-serif text-2xl font-bold text-gold-accent mb-2">
              Henna by Um Arwa
            </h3>
            <p className="text-sm text-cream-dark/60 max-w-md font-light">
              Premium home service henna artist and face painting expert offering high-end cultural designs across all Kuwait governorates.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-sm font-semibold tracking-wide uppercase text-gold-dark">
              Connect With Us
            </span>
            <div className="flex gap-4">
              <a
                href="https://wa.me/96565162170"
                id="footer-wa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream-base/10 hover:bg-gold-metallic hover:text-maroon-dark flex items-center justify-center text-gold-accent transition-colors"
                aria-label="WhatsApp Chat"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://instagram.com/kuwait.henna.design"
                id="footer-ig"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream-base/10 hover:bg-gold-metallic hover:text-maroon-dark flex items-center justify-center text-gold-accent transition-colors"
                aria-label="Instagram Page"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-cream-dark/50 gap-4 text-center">
          <p>© {new Date().getFullYear()} Henna by Um Arwa. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#services" className="hover:text-gold-accent transition-colors">Services</a>
            <a href="#about" className="hover:text-gold-accent transition-colors">About</a>
            <a href="#contact" className="hover:text-gold-accent transition-colors">Bookings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
