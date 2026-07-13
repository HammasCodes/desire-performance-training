"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronRight,
  MapPin,
  Clock,
  Calendar,
  Heart,
  Sparkles,
} from "lucide-react";

const INSTAGRAM_URL = "https://instagram.com/bmlbeautyco";
const INSTAGRAM_HANDLE = "@bmlbeautyco";

// Bri's existing Square booking page link.
// Set this to her real Square URL before deploying.
const SQUARE_URL = "https://squareup.com";

const Instagram = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const services = [
  {
    title: "Brow Shaping & Tinting",
    description:
      "Custom-mapped shaping to flatter your natural face shape, paired with a tint that adds depth and definition for weeks—so brows look full and polished even bare-faced.",
    details: ["Custom brow mapping", "Precision shaping & tint", "Soft, natural finish"],
  },
  {
    title: "Lash Lift & Tint",
    description:
      "A gentle lift that sets your natural lashes into a soft, lifted curl, finished with a tint so they look darker and more defined from root to tip—no extensions, no maintenance.",
    details: ["Enhances your natural lashes", "Low-maintenance, lasting curl", "Tint for effortless definition"],
  },
  {
    title: "Bridal & Event Makeup",
    description:
      "Soft, skin-focused makeup for your wedding day or a special event. Designed to look like you—refined, lasting, and photogenic—never heavy or overdone.",
    details: ["Wedding & bridal styling", "Special event & photo-ready", "Long-wear, natural finish"],
  },
];

const trustSignals = [
  "A peaceful, unhurried environment where you can actually slow down.",
  "Clients describe feeling genuinely cared for from consult to finish.",
  "Brows that quietly become a signature part of your everyday look.",
];

// Gallery imagery. These are representative stock shots of the services Bri
// offers, NOT her actual clients. Swap these for real before/after photos of
// her own work before deploying — real results sell this service better than
// any stock image. Images live in /public/images/gallery.
const galleryImages = [
  { src: "/images/gallery/brow-shaping.jpg", alt: "Brow shaping and mapping on a natural brow", caption: "Brow shaping & mapping" },
  { src: "/images/gallery/lash-lift.jpg", alt: "Fresh lash lift and tint result", caption: "Lash lift & tint" },
  { src: "/images/gallery/lash-closeup.jpg", alt: "Close-up of a lifted, defined natural lash", caption: "Lash definition" },
  { src: "/images/gallery/brow-detail.jpg", alt: "Detailed brow shape with soft tint", caption: "Brow tint detail" },
  { src: "/images/gallery/makeup-bride.jpg", alt: "Natural bridal and event makeup", caption: "Bridal & event makeup" },
  { src: "/images/gallery/makeup-products.jpg", alt: "Makeup products and brushes used for application", caption: "Studio-ready makeup" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#trust", label: "Clients" },
    { href: "#gallery", label: "Gallery" },
    { href: "#location", label: "Location" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="flex-1 flex flex-col bg-cream-warm text-matte-body overflow-hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-cream-warm/90 border-b border-blush-mist/70 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#" aria-label="BML Beauty — back to top" className="flex items-center gap-2.5" id="nav-logo">
              <span className="w-11 h-11 rounded-full bg-matte-ink flex items-center justify-center text-cream-warm">
                <Sparkles className="w-4 h-4" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-xl tracking-[0.18em] text-matte-ink font-semibold uppercase">BML</span>
                <span className="text-[10px] tracking-[0.32em] text-blush-deep font-medium -mt-0.5">BEAUTY</span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium tracking-wide text-matte-ink hover:text-blush-deep transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-matte-ink hover:bg-matte-ink/90 text-cream-warm text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              id="desktop-book-cta"
            >
              <Instagram className="w-4 h-4" /> Book on Instagram
            </a>

            {/* Mobile toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-matte-ink hover:text-blush-deep p-2 focus:outline-none"
                aria-label="Toggle menu"
                id="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cream-card border-b border-blush-mist animate-fade-in-up py-5 px-6 space-y-3.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-matte-ink hover:text-blush-deep transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-matte-ink text-cream-warm py-3 rounded-full text-sm font-medium"
              id="mobile-book-cta"
            >
              <Instagram className="w-4 h-4" /> Book on Instagram
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <main>
      <section className="relative overflow-hidden pt-20 pb-28 md:pt-28 md:pb-36 bg-gradient-to-b from-cream-warm via-cream-warm to-blush-mist/40">
        {/* soft background washes */}
        <div className="absolute top-16 -left-28 w-96 h-96 bg-blush-mist rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10"></div>
        <div className="absolute top-1/3 -right-28 w-96 h-96 bg-sand rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10"></div>

        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-mist/70 border border-blush-soft/40 text-blush-deep text-[11px] font-medium uppercase tracking-[0.22em] animate-fade-in">
            <Sparkles className="w-3 h-3" /> Round Rock&nbsp;&middot;&nbsp;Serving Hutto
          </div>

          <h1 className="mt-7 font-serif text-[2.6rem] sm:text-6xl lg:text-[4.2rem] tracking-tight text-matte-ink leading-[1.05] font-medium animate-fade-up">
            Expert brows, lashes
            <br className="hidden sm:block" />
            <span className="italic text-blush-deep">& makeup</span>
            <br />
            elevate your natural beauty with precision
          </h1>

          <p className="mt-7 text-matte-body text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-light animate-fade-up">
            A small, unhurried studio in Round Rock, Texas—where natural results,
            a calm atmosphere, and genuine care come first.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-matte-ink hover:bg-matte-ink/90 text-cream-warm text-base font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
              id="hero-book-cta"
            >
              <Instagram className="w-4 h-4" /> Book on Instagram
            </a>
            <a
              href="#services"
              className="border border-taupe/50 hover:border-matte-ink text-matte-ink bg-cream-card/50 backdrop-blur-sm text-base font-medium px-8 py-3.5 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2"
              id="hero-services-cta"
            >
              Explore services <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-6 text-xs text-matte-body/70 font-light tracking-wide">
            DM&nbsp;{INSTAGRAM_HANDLE} to book your appointment
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-cream-card relative border-t border-b border-blush-mist/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-semibold tracking-[0.28em] text-blush-deep uppercase block">The Menu</span>
            <h2 className="font-serif text-3xl sm:text-[2.6rem] text-matte-ink font-medium leading-tight">
              Natural-looking services, done with care
            </h2>
            <div className="w-12 h-px bg-blush-primary mx-auto my-4"></div>
            <p className="text-matte-body text-sm font-light leading-relaxed">
              Each appointment begins with a conversation about your features and what
              you actually want—so the result enhances what's already there.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-cream-warm rounded-2xl border border-blush-mist/60 p-7 sm:p-8 flex flex-col gap-5 hover:shadow-md hover:border-blush-soft transition-all duration-300 group"
              >
                <h3 className="font-serif text-2xl text-matte-ink font-semibold leading-tight group-hover:text-blush-deep transition-colors">
                  {service.title}
                </h3>
                <div className="w-10 h-px bg-blush-primary/70"></div>
                <p className="text-matte-body text-sm leading-relaxed font-light">
                  {service.description}
                </p>
                <ul className="space-y-2.5 mt-auto pt-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2.5 text-[13px] text-matte-ink">
                      <span className="w-1.5 h-1.5 rounded-full bg-blush-deep shrink-0"></span>
                      <span className="font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Price-promise note (no invented pricing) */}
          <p className="mt-12 text-center text-xs text-matte-body/70 font-light tracking-wide max-w-lg mx-auto">
            Service pricing and current availability are shared directly when you book
            through Instagram DM—so you always get an up-to-date quote for your specific visit.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-cream-warm relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <span className="text-[11px] font-semibold tracking-[0.28em] text-blush-deep uppercase block">About</span>
            <h2 className="font-serif text-3xl sm:text-[2.6rem] text-matte-ink font-medium leading-tight">
              Hi, I'm Bri
            </h2>
            <div className="w-12 h-px bg-blush-primary mx-auto"></div>

            <div className="space-y-5 text-left text-matte-body text-[15px] sm:text-base leading-relaxed font-light">
              <p>
                I'm a licensed esthetician based in Round Rock, Texas, serving
                Hutto and the surrounding area. I built BML Beauty around a simple
                belief: the best brow and lash work doesn't announce itself. It
                just makes you look rested, polished, and unmistakably like you.
              </p>
              <p>
                My appointments are never rushed. I'd rather take the time to map
                your brows to your features, talk through what you want, and work
                carefully—so when you leave, you feel confident without ever feeling
                &ldquo;done.&rdquo; That calm, unhurried pace is the whole point.
              </p>
              <p>
                Whether it's a subtle lash lift that opens your eyes, a brow shape
                that quietly becomes your signature, or bridal makeup for one of the
                biggest days of your life, my focus is the same: natural,
                confidence-boosting results in a relaxed studio where you can breathe.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-4 text-sm text-matte-ink font-medium">
              <span className="inline-flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-blush-deep" /> Licensed esthetician
              </span>
              <span className="inline-flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-blush-deep" /> Natural, confidence-first results
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-blush-deep" /> Unhurried appointments
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS (qualitative — no ratings/names) */}
      <section id="trust" className="py-24 bg-gradient-to-b from-cream-warm via-blush-mist/25 to-cream-warm border-t border-b border-blush-mist/40">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
            <span className="text-[11px] font-semibold tracking-[0.28em] text-blush-deep uppercase block">Why Clients Return</span>
            <h2 className="font-serif text-3xl sm:text-[2.6rem] text-matte-ink font-medium leading-tight">
              How clients describe their time here
            </h2>
            <div className="w-12 h-px bg-blush-primary mx-auto my-4"></div>
            <p className="text-matte-body text-sm font-light leading-relaxed">
              A few things guests say again and again—kept honest, not dressed up with numbers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {trustSignals.map((quote) => (
              <figure
                key={quote}
                className="bg-cream-card rounded-2xl p-7 sm:p-8 border border-blush-mist/60 shadow-sm flex flex-col gap-5"
              >
                <span className="font-serif text-4xl text-blush-primary/60 leading-none">&ldquo;</span>
                <blockquote className="text-matte-ink text-[15px] leading-relaxed font-light italic">
                  {quote}
                </blockquote>
                <figcaption className="mt-auto pt-4 border-t border-blush-mist/40 text-[11px] uppercase tracking-[0.2em] text-blush-deep font-medium">
                  Client sentiment
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY — representative stock shots (replace with Bri's real before/afters before deploy) */}
      <section id="gallery" className="py-24 bg-cream-card border-b border-blush-mist/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
            <span className="text-[11px] font-semibold tracking-[0.28em] text-blush-deep uppercase block">Gallery</span>
            <h2 className="font-serif text-3xl sm:text-[2.6rem] text-matte-ink font-medium leading-tight">
              A look at the work
            </h2>
            <div className="w-12 h-px bg-blush-primary mx-auto my-4"></div>
            <p className="text-matte-body text-sm font-light leading-relaxed">
              Below are representative examples of the brow, lash, and makeup services
              Bri offers. For her real before & afters, follow
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blush-deep hover:underline"
              >
                &nbsp;{INSTAGRAM_HANDLE}&nbsp;
              </a>
              —those results speak louder than any stock photo.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {galleryImages.map((img) => (
              <figure
                key={img.src}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-blush-mist/40 border border-blush-mist/60 group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-matte-ink/75 via-matte-ink/20 to-transparent p-3 pt-8">
                  <span className="text-[11px] sm:text-xs font-medium text-cream-warm uppercase tracking-[0.16em]">
                    {img.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-10 text-center text-[11px] text-matte-body/60 font-light max-w-xl mx-auto leading-relaxed">
            Photos shown are representative examples of these services and are not of BML Beauty's actual clients.
          </p>
        </div>
      </section>

      {/* LOCATION & HOURS */}
      <section id="location" className="py-24 bg-cream-warm relative border-b border-blush-mist/40">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
            <span className="text-[11px] font-semibold tracking-[0.28em] text-blush-deep uppercase block">Visit</span>
            <h2 className="font-serif text-3xl sm:text-[2.6rem] text-matte-ink font-medium leading-tight">
              Round Rock, Texas
            </h2>
            <div className="w-12 h-px bg-blush-primary mx-auto my-4"></div>
            <p className="text-matte-body text-sm font-light leading-relaxed">
              A quiet studio in Round Rock, happily welcoming clients from Hutto and the surrounding area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location */}
            <div className="bg-cream-card rounded-2xl border border-blush-mist/60 p-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-blush-mist flex items-center justify-center text-blush-deep shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-matte-ink uppercase tracking-wider">Studio Location</h3>
                  <p className="text-sm text-matte-body font-light leading-relaxed">
                    Round Rock, Texas
                    <br />
                    <span className="text-matte-ink/80">Also serving Hutto & the surrounding area</span>
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Round+Rock+TX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blush-deep hover:text-matte-ink transition-colors"
                id="maps-directions"
              >
                Get directions on Google Maps <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Hours */}
            <div className="bg-cream-card rounded-2xl border border-blush-mist/60 p-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-blush-mist flex items-center justify-center text-blush-deep shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-matte-ink uppercase tracking-wider">By Appointment</h3>
                  <p className="text-sm text-matte-body font-light leading-relaxed">
                    Hours vary by appointment to keep every session unhurried. Reach out
                    on Instagram to find a time that works for you.
                  </p>
                </div>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blush-deep hover:text-matte-ink transition-colors"
                id="hours-instagram"
              >
                Message to check availability <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT — Instagram DM primary, Square secondary */}
      <section id="contact" className="py-24 bg-cream-card relative overflow-hidden border-b border-blush-mist/40">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blush-mist rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-sand rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>

        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 relative text-center space-y-7">
          <span className="text-[11px] font-semibold tracking-[0.28em] text-blush-deep uppercase block">Contact</span>
          <h2 className="font-serif text-3xl sm:text-[2.6rem] text-matte-ink font-medium leading-tight">
            Let's get you on the books
          </h2>
          <div className="w-12 h-px bg-blush-primary mx-auto"></div>
          <p className="text-matte-body text-base font-light leading-relaxed max-w-lg mx-auto">
            The easiest way to book is a quick Instagram DM—send the service you're
            interested in and a couple of preferred dates, and we'll take it from there.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-matte-ink hover:bg-matte-ink/90 text-cream-warm text-base font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
              id="contact-instagram-cta"
            >
              <Instagram className="w-4 h-4" /> DM {INSTAGRAM_HANDLE}
            </a>
            <a
              href={SQUARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-taupe/50 hover:border-matte-ink text-matte-ink bg-cream-warm/50 backdrop-blur-sm text-base font-medium px-8 py-3.5 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2"
              id="contact-square-cta"
            >
              <Calendar className="w-4 h-4" /> Book Now <span className="text-matte-body/70 font-light text-sm">(Square)</span>
            </a>
          </div>

          <p className="text-xs text-matte-body/70 font-light tracking-wide pt-1">
            Prefer her existing booking site? Use the &ldquo;Book Now&rdquo; button above.
          </p>
        </div>
      </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-matte-ink text-cream-warm/80 py-14 mt-auto">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="space-y-3">
              <a href="#" aria-label="BML Beauty — back to top" className="flex items-center gap-2.5 justify-center md:justify-start">
                <span className="w-11 h-11 rounded-full bg-cream-warm flex items-center justify-center text-matte-ink">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="font-serif text-xl tracking-[0.18em] text-cream-warm font-semibold uppercase">BML</span>
                  <span className="text-[10px] tracking-[0.32em] text-blush-soft font-medium -mt-0.5">BEAUTY</span>
                </div>
              </a>
              <p className="text-xs text-cream-warm/60 font-light max-w-sm leading-relaxed">
                Natural-looking brows, lashes & makeup. A licensed esthetician's
                studio in Round Rock, proudly serving Hutto, TX.
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-light">
              <a href="#services" className="hover:text-blush-soft transition-colors">Services</a>
              <a href="#about" className="hover:text-blush-soft transition-colors">About</a>
              <a href="#gallery" className="hover:text-blush-soft transition-colors">Gallery</a>
              <a href="#location" className="hover:text-blush-soft transition-colors">Location</a>
              <a href="#contact" className="hover:text-blush-soft transition-colors">Contact</a>
            </nav>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-cream-warm/10 hover:bg-blush-deep hover:text-cream-warm flex items-center justify-center text-cream-warm/80 transition-all"
              aria-label="Instagram profile"
              id="footer-instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-10 mt-10 border-t border-cream-warm/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-cream-warm/40 font-light">
            <p>&copy; {new Date().getFullYear()} BML Beauty. All rights reserved.</p>
            <p className="inline-flex items-center gap-1.5">
              <Instagram className="w-3 h-3" /> {INSTAGRAM_HANDLE}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
