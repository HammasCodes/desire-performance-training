"use client";

import { useState } from "react";

interface ServiceItem {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const PHONE_DISPLAY = "778-220-2902";
const PHONE_TEL = "tel:+17782202902";
const INSTAGRAM_HANDLE = "@hazelandhoneystudio";
const INSTAGRAM_URL = "https://instagram.com/hazelandhoneystudio";
const ADDRESS = "375 4 Ave, Kamloops, BC V2C 3P1";
const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS);
const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=" + encodeURIComponent(ADDRESS) + "&output=embed";

function StarIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M10 1.5l2.6 5.44 5.99.83-4.34 4.2 1.03 5.97L10 14.98l-5.28 2.96 1.03-5.97-4.34-4.2 5.99-.83L10 1.5z" />
    </svg>
  );
}

function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5.5C3 4.12 4.12 3 5.5 3h2a1 1 0 0 1 .97.76l1.1 4.4a1 1 0 0 1-.27.96l-1.6 1.6a13.5 13.5 0 0 0 6.58 6.58l1.6-1.6a1 1 0 0 1 .96-.27l4.4 1.1a1 1 0 0 1 .76.97v2c0 1.38-1.12 2.5-2.5 2.5h-1C10.5 22 2 13.5 2 6.5v-1z"
      />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CertificateIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <circle cx="12" cy="9" r="6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 14 7 22l5-2.5L17 22l-1.5-8" />
    </svg>
  );
}

function DepositIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h4" />
    </svg>
  );
}

function LashIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path strokeLinecap="round" d="M2 14c3-6 17-6 20 0" />
      <path strokeLinecap="round" d="M4 13.5 2.5 11M8 12l-1-2.8M12 11.5V8.5M16 12l1-2.8M20 13.5l1.5-2.5" />
    </svg>
  );
}

function LiftIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path strokeLinecap="round" d="M3 15c2.5-7 15.5-7 18 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 15c.5 1.6 1.6 2.5 3 2.5s2.5-.9 3-2.5" />
    </svg>
  );
}

function BrowIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 14c1.5-4 6-6 9-6s5.5 1 9 3" />
    </svg>
  );
}

function LaminationIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8c3-3 6-3 9 0s6 3 9 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15c3-3 6-3 9 0s6 3 9 0" />
    </svg>
  );
}

function FacialIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M9 10h.01M15 10h.01M8.5 15c1 1 2.2 1.5 3.5 1.5s2.5-.5 3.5-1.5" />
    </svg>
  );
}

function PinIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

function ClockIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3.3 2" />
    </svg>
  );
}

const services: ServiceItem[] = [
  {
    name: "Custom Lash Extensions",
    description:
      "Classic, hybrid, or volume sets tailored to your eye shape and desired look, applied with meticulous, gentle care.",
    icon: <LashIcon className="w-7 h-7 text-honey" />,
  },
  {
    name: "Lash Lift & Tint",
    description:
      "Enhance your natural lashes with a curl and deep tint for an effortless, mascara-free lift that lasts for weeks.",
    icon: <LiftIcon className="w-7 h-7 text-honey" />,
  },
  {
    name: "Brow Waxing & Tint",
    description:
      "Precision shaping and rich tinting to frame your face with full, defined brows suited to you.",
    icon: <BrowIcon className="w-7 h-7 text-honey" />,
  },
  {
    name: "Brow Lamination",
    description:
      "Sleek, fluffy, laminated brows that hold their shape beautifully for a fuller, more polished arch.",
    icon: <LaminationIcon className="w-7 h-7 text-honey" />,
  },
  {
    name: "Relaxation Facials",
    description:
      "Unwind with a soothing facial treatment designed to refresh your skin and leave you glowing from within.",
    icon: <FacialIcon className="w-7 h-7 text-honey" />,
  },
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-cream text-brown">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-honey-light/40">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
          <a href="#top" className="font-serif text-xl sm:text-2xl tracking-wide text-brown">
            Hazel <span className="text-honey-dark">&amp;</span> Honey
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide uppercase text-brown-soft hover:text-honey-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brown-soft hover:text-honey-dark transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={PHONE_TEL}
              className="rounded-full bg-honey hover:bg-honey-dark transition-colors text-cream text-sm font-semibold px-5 py-2.5 shine-effect"
            >
              Book Now
            </a>
          </div>

          <button
            className="md:hidden text-brown"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden flex flex-col gap-4 px-5 pb-6 pt-2 bg-cream border-t border-honey-light/40">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-wide uppercase text-brown-soft hover:text-honey-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brown-soft hover:text-honey-dark transition-colors text-sm"
            >
              <InstagramIcon className="w-5 h-5" /> {INSTAGRAM_HANDLE}
            </a>
            <a
              href={PHONE_TEL}
              className="rounded-full bg-honey hover:bg-honey-dark transition-colors text-cream text-sm font-semibold px-5 py-2.5 text-center"
            >
              Book Now
            </a>
          </div>
        )}
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-blush">
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-honey-light/40 blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-honey/20 blur-3xl" />

          <div className="relative max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 text-center">
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-honey-dark font-semibold mb-5">
              Kamloops, British Columbia
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl leading-tight text-brown mb-6">
              Relaxing Lash &amp; Brow Artistry,
              <br className="hidden sm:block" /> Crafted Just for You
            </h1>
            <p className="text-brown-soft text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Step into a warm, welcoming studio where every lash and brow appointment
              is a moment to slow down. Boutique artistry by Chlöe Asselin, designed to
              leave you glowing with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-full bg-honey hover:bg-honey-dark transition-colors text-cream font-semibold px-8 py-3.5 shine-effect"
              >
                Book Your Appointment
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-honey-dark/40 hover:border-honey-dark text-brown font-medium px-8 py-3.5 transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </section>

        {/* Trust signals */}
        <section className="border-y border-honey-light/40 bg-cream-dark/60">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1 text-honey">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" />
                ))}
              </div>
              <p className="font-serif text-lg text-brown">5.0 Star Rating</p>
              <p className="text-sm text-brown-soft">Loved by clients across Kamloops</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <DepositIcon className="text-honey" />
              <p className="font-serif text-lg text-brown">Deposit Required</p>
              <p className="text-sm text-brown-soft">To secure your appointment at booking</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CertificateIcon className="text-honey" />
              <p className="font-serif text-lg text-brown">Certified Artist</p>
              <p className="text-sm text-brown-soft">Trained &amp; certified in lash and brow artistry</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-honey-dark font-semibold mb-4">
              Services
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-brown mb-4">
              Artistry Tailored to You
            </h2>
            <p className="text-brown-soft leading-relaxed">
              Every service is delivered with a gentle touch in a calm, honey-warm studio
              designed for you to unwind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="rounded-2xl bg-white/60 border border-honey-light/50 p-7 hover:shadow-lg hover:shadow-honey-light/30 hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-honey-light/40 flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl text-brown mb-2">{service.name}</h3>
                <p className="text-sm text-brown-soft leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-cream-dark/60 border-y border-honey-light/40">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-honey-dark font-semibold mb-4">
                About Hazel &amp; Honey
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-brown mb-6">
                Meet Your Lash &amp; Brow Artist
              </h2>
              <p className="text-brown-soft leading-relaxed mb-4">
                Hazel &amp; Honey Lash &amp; Brow Studio is owned and operated by
                Chlöe Asselin, a certified lash and brow artist dedicated to
                meticulous, personalized artistry.
              </p>
              <p className="text-brown-soft leading-relaxed mb-4">
                Tucked into the heart of Kamloops, the studio is a relaxing,
                welcoming space where you can slow down and be looked after,
                every single visit.
              </p>
              <p className="text-brown-soft leading-relaxed">
                It&rsquo;s more than a beauty appointment &mdash; it&rsquo;s a
                luxury experience designed to leave you glowing with confidence.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-honey-light via-honey to-honey-dark shine-effect shadow-xl shadow-honey-dark/20" />
            </div>
          </div>
        </section>

        {/* Location & Hours */}
        <section id="location" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-honey-dark font-semibold mb-4">
              Visit the Studio
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-brown">Location &amp; Hours</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl overflow-hidden border border-honey-light/50 aspect-[4/3]">
              <iframe
                title="Hazel & Honey Studio location"
                src={MAPS_EMBED_URL}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-2xl bg-white/60 border border-honey-light/50 p-8 space-y-8">
              <div className="flex gap-4">
                <PinIcon className="w-6 h-6 text-honey-dark flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-brown mb-1">Address</h3>
                  <p className="text-brown-soft">{ADDRESS}</p>
                  <a
                    href={MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm font-semibold text-honey-dark hover:text-brown transition-colors"
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <ClockIcon className="w-6 h-6 text-honey-dark flex-shrink-0 mt-1" />
                <div className="w-full">
                  <h3 className="font-serif text-lg text-brown mb-2">Hours</h3>
                  <div className="flex justify-between text-brown-soft text-sm max-w-xs">
                    <span>Monday &ndash; Saturday</span>
                    <span className="font-medium text-brown">8:00 AM &ndash; 8:30 PM</span>
                  </div>
                  <div className="flex justify-between text-brown-soft text-sm max-w-xs mt-1">
                    <span>Sunday</span>
                    <span className="font-medium text-brown">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section id="contact" className="bg-gradient-to-br from-honey-dark via-honey to-honey-light">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20 sm:py-28 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-5">
              Ready to Glow?
            </h2>
            <p className="text-cream/90 max-w-xl mx-auto mb-10 leading-relaxed">
              Reach out to book your appointment or ask a question &mdash; we&rsquo;d
              love to welcome you into the studio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={PHONE_TEL}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-cream text-brown font-semibold px-8 py-3.5 hover:bg-white transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-cream/70 text-cream font-semibold px-8 py-3.5 hover:bg-cream/10 transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
                DM {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brown text-cream/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-serif text-xl text-cream">Hazel &amp; Honey</p>
            <p className="text-sm mt-1">{ADDRESS}</p>
          </div>
          <div className="flex items-center gap-5">
            <a href={PHONE_TEL} className="hover:text-honey-light transition-colors" aria-label="Call">
              <PhoneIcon className="w-5 h-5" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-honey-light transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-cream/60 order-last sm:order-none">
            {`© ${new Date().getFullYear()} Hazel & Honey Lash & Brow Studio`}
          </p>
        </div>
      </footer>
    </div>
  );
}
