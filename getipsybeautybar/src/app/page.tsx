"use client";

import { useState } from "react";

interface Service {
  id: string;
  name: string;
  description: string;
  highlights: string[];
}

const INSTAGRAM_URL = "https://instagram.com/getipsybeautybar";
const PHONE_DISPLAY = "778-583-6050";
const PHONE_TEL = "tel:+17785836050";
const ADDRESS_LINE1 = "375 4 Ave #2";
const ADDRESS_LINE2 = "Kamloops, BC V2C 3P1";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=375+4+Ave+%232%2C+Kamloops%2C+BC+V2C+3P1";

const services: Service[] = [
  {
    id: "sculpted-gel",
    name: "Sculpted Gel Nails",
    description:
      "Our signature service. Nails sculpted from gel over dual forms for a flawless, fully custom extension — built to your exact length and shape, no tips needed.",
    highlights: ["Fully customized length & shape", "Lightweight, natural-looking finish", "Long-lasting, durable wear"],
  },
  {
    id: "gel-overlay",
    name: "Gel Overlays",
    description:
      "A strengthening layer of gel applied directly over your natural nail for added durability and a glassy, high-shine finish — no extensions required.",
    highlights: ["Strengthens natural nails", "Glossy, chip-resistant shine", "Great for growing out damage"],
  },
  {
    id: "nail-art",
    name: "Nail Art",
    description:
      "Hand-painted designs, chrome finishes, ombré, 3D accents, and custom sets built to match your exact vibe — as subtle or as bold as you want.",
    highlights: ["Fully custom designs", "Chrome, ombré & 3D accents", "Perfect for special occasions"],
  },
  {
    id: "manicures",
    name: "Manicures",
    description:
      "A classic, polished manicure featuring precise shaping, cuticle care, and your choice of gel or regular polish for a clean, put-together look.",
    highlights: ["Cuticle care & shaping", "Gel or regular polish", "Quick, everyday polish refresh"],
  },
  {
    id: "restoration",
    name: "Natural Nail Restoration",
    description:
      "Gentle, corrective care designed to repair and rebuild damaged or over-processed natural nails, bringing them back to healthy, strong condition.",
    highlights: ["Repairs damaged nails", "Rebuilds nail strength", "Gentle, condition-focused care"],
  },
];

const testimonials = [
  {
    quote:
      "Sage is an absolute artist. My sculpted set is flawless every single time — perfectly even, perfectly shaped, and it lasts for weeks. This studio is worth the wait.",
    name: "Brianna T.",
    location: "Kamloops, BC",
  },
  {
    quote:
      "I've never had sculpted nails look this natural before. The attention to detail is next level and the studio itself is so bright and relaxing. I prebook every visit now.",
    name: "Maya R.",
    location: "Kamloops, BC",
  },
  {
    quote:
      "Get Tipsy is hands-down the best nail studio in Kamloops. Clean, welcoming, and Sage genuinely cares about nail health. My go-to for every set.",
    name: "Chloe D.",
    location: "Kamloops, BC",
  },
];

function InstagramIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex-grow flex flex-col bg-champagne text-ink min-h-screen relative font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-champagne/95 backdrop-blur-md border-b border-hot-pink/15 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#" className="flex flex-col select-none group">
              <span className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl tracking-tight font-bold text-ink group-hover:text-hot-pink transition-colors duration-300">
                Get Tipsy <span className="text-hot-pink">Beauty Bar</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-hot-pink-dark font-semibold -mt-1 pl-0.5">
                Kamloops, BC
              </span>
            </a>

            <nav className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToId("services")} className="text-sm font-semibold tracking-wide hover:text-hot-pink transition-colors duration-300 cursor-pointer">
                Services
              </button>
              <button onClick={() => scrollToId("about")} className="text-sm font-semibold tracking-wide hover:text-hot-pink transition-colors duration-300 cursor-pointer">
                About
              </button>
              <button onClick={() => scrollToId("location")} className="text-sm font-semibold tracking-wide hover:text-hot-pink transition-colors duration-300 cursor-pointer">
                Location
              </button>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/60 hover:text-hot-pink transition-colors duration-300"
                title="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <button
                onClick={() => scrollToId("contact")}
                className="shine-effect cursor-pointer bg-ink hover:bg-hot-pink text-champagne text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded-full transition-all duration-300 shadow-md"
              >
                Book Your Appointment
              </button>
            </nav>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-ink hover:text-hot-pink p-2 focus:outline-none transition-colors duration-300"
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

        <div
          className={`md:hidden absolute left-0 right-0 bg-champagne/98 border-b border-hot-pink/15 shadow-lg transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "opacity-100 max-h-[400px] visible py-6" : "opacity-0 max-h-0 invisible overflow-hidden py-0"
          }`}
        >
          <div className="px-4 space-y-4 flex flex-col text-center">
            <button onClick={() => scrollToId("services")} className="text-sm font-bold tracking-wide uppercase py-2 hover:text-hot-pink transition-colors duration-200 cursor-pointer">
              Services
            </button>
            <button onClick={() => scrollToId("about")} className="text-sm font-bold tracking-wide uppercase py-2 hover:text-hot-pink transition-colors duration-200 cursor-pointer">
              About
            </button>
            <button onClick={() => scrollToId("location")} className="text-sm font-bold tracking-wide uppercase py-2 hover:text-hot-pink transition-colors duration-200 cursor-pointer">
              Location
            </button>
            <div className="flex justify-center py-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold tracking-wide uppercase hover:text-hot-pink transition-colors duration-200"
              >
                <InstagramIcon className="w-5 h-5" />
                Instagram
              </a>
            </div>
            <button
              onClick={() => scrollToId("contact")}
              className="shine-effect cursor-pointer bg-ink hover:bg-hot-pink text-champagne text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded-full transition-all duration-300 w-full"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center bg-ink text-champagne py-16 sm:py-24">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-hot-pink rounded-full mix-blend-screen filter blur-[150px] animate-float" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[650px] h-[650px] bg-hot-pink-light rounded-full mix-blend-screen filter blur-[150px] animate-float-delayed" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-hot-pink/15 border border-hot-pink/40 text-hot-pink-light text-[11px] font-bold tracking-[0.25em] uppercase mb-6 sm:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-hot-pink" />
                Kamloops&apos; Premier Sculpted Gel Nail Bar
              </div>

              <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-white font-bold mb-6">
                Sculpted gel nails, poured with{" "}
                <span className="relative inline-block text-hot-pink-light italic">
                  precision
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-hot-pink/50 rounded-full" />
                </span>
              </h1>

              <p className="max-w-xl text-champagne/80 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
                Get Tipsy Beauty Bar is Kamloops&apos; go-to studio for flawless, high-quality sculpted gel nails — crafted by founder Sage Nolin in a bright, comfortable space built for beauty and good vibes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button
                  onClick={() => scrollToId("contact")}
                  className="shine-effect cursor-pointer bg-hot-pink hover:bg-hot-pink-light text-white font-bold text-xs tracking-[0.15em] uppercase py-4.5 px-8 rounded-full shadow-lg transition-all duration-300 text-center"
                >
                  Book Your Appointment
                </button>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-champagne/30 hover:border-hot-pink hover:text-hot-pink-light text-champagne font-bold text-xs tracking-[0.15em] uppercase py-4.5 px-8 rounded-full transition-all duration-300 bg-white/5 backdrop-blur-sm"
                >
                  <InstagramIcon className="w-4 h-4" />
                  Follow on Instagram
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2rem] border-2 border-hot-pink/25 p-4 bg-gradient-to-tr from-charcoal to-ink shadow-2xl">
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-hot-pink" />
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-hot-pink" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-hot-pink" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-hot-pink" />

                <div className="w-full h-full rounded-[1.5rem] bg-ink flex flex-col justify-center items-center p-8 overflow-hidden relative border border-hot-pink/15">
                  <div className="w-full max-w-[220px] aspect-square flex flex-col justify-center items-center relative opacity-90">
                    <svg className="w-48 h-48 text-hot-pink" viewBox="0 0 100 100" fill="none">
                      {/* Stylized hand with sculpted nails */}
                      <path d="M35 90 C 30 70, 28 55, 30 40 C 31 34, 38 33, 39 40 L 41 62" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      <path d="M41 62 L 43 33 C 44 27, 51 27, 52 33 L 53 63" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      <path d="M53 63 L 55 30 C 56 24, 63 24, 64 30 L 65 64" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      <path d="M65 64 L 66 37 C 67 32, 73 32, 74 37 L 75 66" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      <path d="M30 40 C 20 45, 18 55, 25 68 L 35 90 C 45 96, 65 96, 75 90 L 75 66" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      {/* sparkles */}
                      <path d="M20 22 L21.5 27 L26 28.5 L21.5 30 L20 35 L18.5 30 L14 28.5 L18.5 27 Z" fill="currentColor" opacity="0.7" />
                      <circle cx="80" cy="20" r="2" fill="currentColor" opacity="0.5" />
                      <circle cx="85" cy="30" r="1.2" fill="currentColor" opacity="0.4" />
                    </svg>

                    <div className="absolute bottom-4 text-center">
                      <span className="font-[family-name:var(--font-display)] italic text-hot-pink text-lg tracking-wide block">Sculpted</span>
                      <span className="text-[10px] text-champagne/60 tracking-[0.4em] uppercase font-semibold">Gel Artistry</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-2 right-4 bg-champagne text-ink px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-hot-pink/20">
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-bold tracking-wide">Excellent Reviews</span>
                      <div className="flex items-center gap-1.5">
                        <div className="flex text-hot-pink">
                          {"★★★★★".split("").map((s, i) => (
                            <span key={i} className="text-xs">★</span>
                          ))}
                        </div>
                        <span className="text-xs font-bold text-ink/70">5.0 Star</span>
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
      <section className="bg-champagne-dark border-y border-hot-pink/15 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-hot-pink font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold mb-1">5.0 ★ Rating</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-ink/50 font-semibold">Flawless Reviews</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-hot-pink font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold mb-1">Meticulous</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-ink/50 font-semibold">Attention to Detail</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-hot-pink font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold mb-1">Prebooked</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-ink/50 font-semibold">Loyal Repeat Clients</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-hot-pink font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold mb-1">Bright & Comfy</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-ink/50 font-semibold">Studio Space</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-28 bg-champagne scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-hot-pink-dark text-xs font-bold tracking-[0.3em] uppercase block mb-3">Our Services</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6">
              Nail Artistry, Poured On
            </h2>
            <div className="w-16 h-[3px] bg-hot-pink mx-auto mb-6 rounded-full" />
            <p className="text-ink/60 text-sm sm:text-base leading-relaxed">
              From signature sculpted sets to restorative care, every service is tailored to your nails, your shape, and your style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white border border-hot-pink/10 hover:border-hot-pink/40 rounded-3xl p-8 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-hot-pink-light to-hot-pink rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-ink tracking-wide mb-4 group-hover:text-hot-pink transition-colors duration-300">
                    {service.name}
                  </h3>

                  <p className="text-ink/60 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {service.highlights.map((detail, index) => (
                      <li key={index} className="flex items-start text-xs text-ink/70 gap-2">
                        <svg className="w-4 h-4 text-hot-pink flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => scrollToId("contact")}
                  className="w-full border border-ink/10 hover:border-hot-pink hover:bg-hot-pink hover:text-white text-ink text-[11px] font-bold tracking-widest uppercase py-3 px-6 rounded-full transition-all duration-300 text-center cursor-pointer"
                >
                  Book This Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 sm:py-28 bg-ink text-champagne scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2rem] border-2 border-hot-pink/20 p-4 bg-gradient-to-br from-charcoal to-ink shadow-2xl">
                <div className="absolute -top-6 -left-6 bg-hot-pink/15 backdrop-blur-md border border-hot-pink/30 p-4 rounded-2xl hidden sm:block">
                  <span className="font-[family-name:var(--font-display)] text-hot-pink text-2xl font-bold block leading-none">100%</span>
                  <span className="text-[9px] uppercase tracking-widest text-champagne/70 font-semibold">Sculpted Artistry</span>
                </div>

                <div className="w-full h-full rounded-[1.5rem] bg-charcoal border border-hot-pink/15 flex flex-col justify-between p-8 relative overflow-hidden">
                  <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full border border-hot-pink/10 pointer-events-none" />

                  <div className="flex flex-col items-center justify-center flex-grow">
                    <svg className="w-24 h-24 text-hot-pink/40 mb-4" viewBox="0 0 100 100" fill="none">
                      <path d="M30 40 C 40 10, 60 10, 70 40" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                      <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" />
                      <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                    </svg>
                    <span className="font-[family-name:var(--font-display)] italic text-hot-pink text-2xl tracking-widest">Sage</span>
                    <span className="text-[10px] text-champagne/50 tracking-[0.3em] uppercase mt-1">Founder & Nail Artist</span>
                  </div>

                  <div className="bg-black/30 border border-hot-pink/15 p-4 rounded-xl text-center">
                    <span className="text-xs text-champagne/90 italic leading-relaxed">
                      &ldquo;I wanted to build a studio where every set feels custom and every client leaves feeling their absolute best.&rdquo;
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-hot-pink text-xs font-bold tracking-[0.3em] uppercase mb-3">Meet the Founder</span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Founded by Sage Nolin
              </h2>
              <div className="w-16 h-[3px] bg-hot-pink mb-6 rounded-full" />

              <p className="text-champagne/80 text-sm sm:text-base leading-relaxed mb-6">
                Get Tipsy Beauty Bar was founded by Sage Nolin with one goal: to make Kamloops&apos; premier destination for high-quality sculpted gel nails. Every set is built with precision, patience, and a genuine love for the craft.
              </p>

              <p className="text-champagne/80 text-sm sm:text-base leading-relaxed mb-8">
                The studio itself is bright, comfortable, and welcoming — designed as a space where clients can relax while receiving meticulous, detail-driven nail artistry. It&apos;s no surprise so many clients become regulars, prebooking their next appointment before they even leave the chair.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-hot-pink/15 border border-hot-pink/30 flex-shrink-0 flex items-center justify-center text-hot-pink">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white tracking-wide mb-1">Premier Sculpted Specialist</h4>
                    <p className="text-xs text-champagne/60 leading-relaxed">Focused specifically on high-quality sculpted gel nail artistry.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-hot-pink/15 border border-hot-pink/30 flex-shrink-0 flex items-center justify-center text-hot-pink">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white tracking-wide mb-1">Bright, Comfortable Studio</h4>
                    <p className="text-xs text-champagne/60 leading-relaxed">A welcoming space designed for a relaxed, feel-good visit.</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center sm:justify-start">
                <button
                  onClick={() => scrollToId("contact")}
                  className="shine-effect cursor-pointer bg-hot-pink hover:bg-hot-pink-light text-white font-bold text-xs tracking-widest uppercase py-4 px-8 rounded-full shadow-lg transition-all duration-300"
                >
                  Book With Sage
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 bg-champagne-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex justify-center text-hot-pink gap-1 mb-2">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} className="text-lg">★</span>
              ))}
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-ink font-bold mb-2">
              Loved by Kamloops Clients
            </h2>
            <p className="text-ink/50 text-xs tracking-widest uppercase font-bold">5.0 Star Rated & Prebooked by Regulars</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-3xl shadow-sm border border-hot-pink/10 relative flex flex-col justify-between">
                <span className="text-hot-pink-light font-[family-name:var(--font-display)] text-6xl absolute top-3 left-4 select-none opacity-40 leading-none">&ldquo;</span>
                <p className="text-ink/70 text-sm italic leading-relaxed relative z-10 mb-6">
                  {t.quote}
                </p>
                <div className="border-t border-ink/10 pt-4">
                  <span className="font-bold text-xs text-ink block">{t.name}</span>
                  <span className="text-[10px] text-ink/40 uppercase tracking-widest font-semibold">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location, Hours & Contact */}
      <section id="contact" className="py-20 sm:py-28 bg-champagne scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-hot-pink-dark text-xs font-bold tracking-[0.3em] uppercase block mb-3">Visit The Studio</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6">
              Book Your Appointment
            </h2>
            <div className="w-16 h-[3px] bg-hot-pink mx-auto mb-6 rounded-full" />
            <p className="text-ink/60 text-sm sm:text-base leading-relaxed">
              Give us a call or send a DM on Instagram — we&apos;ll get you booked in.
            </p>
          </div>

          <div id="location" className="grid grid-cols-1 lg:grid-cols-2 gap-8 scroll-mt-20">
            {/* Contact Card */}
            <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl border border-hot-pink/10 flex flex-col gap-8">
              <div>
                <span className="text-hot-pink-dark text-xs font-bold tracking-[0.3em] uppercase block mb-3">Contact</span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-ink mb-2">Get Tipsy Beauty Bar</h3>
                <p className="text-ink/60 text-sm">We&apos;d love to get you in the chair.</p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href={PHONE_TEL}
                  className="shine-effect flex items-center justify-center gap-3 bg-ink hover:bg-hot-pink text-champagne font-bold text-sm tracking-wide py-4 px-6 rounded-2xl transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {PHONE_DISPLAY}
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 border-2 border-hot-pink text-hot-pink-dark hover:bg-hot-pink hover:text-white font-bold text-sm tracking-wide py-4 px-6 rounded-2xl transition-all duration-300"
                >
                  <InstagramIcon className="w-5 h-5" />
                  DM @getipsybeautybar
                </a>
              </div>

              <div className="border-t border-ink/10 pt-6 flex flex-col gap-4">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-hot-pink flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-ink/70 hover:text-hot-pink transition-colors duration-300">
                    {ADDRESS_LINE1}<br />{ADDRESS_LINE2}
                  </a>
                </div>
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-hot-pink flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm text-ink/70">
                    <div className="flex justify-between gap-6"><span>Mon – Fri</span><span className="font-semibold text-ink">9:00 AM – 7:00 PM</span></div>
                    <div className="flex justify-between gap-6"><span>Sat – Sun</span><span className="font-semibold text-ink/40">Closed</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-[2.5rem] overflow-hidden border border-hot-pink/10 shadow-xl min-h-[360px] relative bg-charcoal">
              <iframe
                title="Get Tipsy Beauty Bar Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_LINE2}`)}&output=embed`}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-champagne/70 py-10 border-t border-hot-pink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div>
            <span className="font-[family-name:var(--font-display)] text-lg font-bold text-white block">Get Tipsy Beauty Bar</span>
            <span className="text-xs text-champagne/50">{ADDRESS_LINE1}, {ADDRESS_LINE2}</span>
          </div>
          <div className="flex items-center gap-6 text-xs">
            <a href={PHONE_TEL} className="hover:text-hot-pink transition-colors duration-300">{PHONE_DISPLAY}</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-hot-pink transition-colors duration-300">
              <InstagramIcon className="w-4 h-4" />
              @getipsybeautybar
            </a>
          </div>
          <span className="text-xs text-champagne/40">&copy; {new Date().getFullYear()} Get Tipsy Beauty Bar</span>
        </div>
      </footer>
    </div>
  );
}
