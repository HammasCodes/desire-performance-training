"use client";

import { useState } from "react";

interface ServiceItem {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const INSTAGRAM_HANDLE = "@luscious_looks__";
const INSTAGRAM_URL = "https://instagram.com/luscious_looks__";
const ADDRESS = "Flexspace, Battlefield Enterprise Park, Shrewsbury SY1 3FE";
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

function HeartIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20s-7-4.35-9.5-8.8C.7 7.9 2.3 4.5 5.7 4c2-.3 3.8.6 4.8 2.3.5.9 1.7.9 2.2 0C13.7 4.6 15.5 3.7 17.5 4c3.4.5 5 3.9 3.2 7.2C19 15.65 12 20 12 20z"
      />
    </svg>
  );
}

function ThreadingIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path strokeLinecap="round" d="M3 14c1.5-4 6-6 9-6s5.5 1 9 3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6l4 4M18 5l-3.5 4" />
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

function HennaIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 18c3-8 6-11 8-14 2 3 5 6 8 14M8 12c1.5 1 2.5 2.5 4 6M16 12c-1.5 1-2.5 2.5-4 6"
      />
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

function LashIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path strokeLinecap="round" d="M3 15c2.5-7 15.5-7 18 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 15c.5 1.6 1.6 2.5 3 2.5s2.5-.9 3-2.5" />
    </svg>
  );
}

function WaxIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c3 3.6 5 6.6 5 9.5a5 5 0 0 1-10 0C7 9.6 9 6.6 12 3z"
      />
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

function ShieldIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l7 3v5.5c0 4.7-3 8.4-7 9.5-4-1.1-7-4.8-7-9.5V6l7-3z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

const services: ServiceItem[] = [
  {
    name: "Brow Threading",
    description:
      "Precise, ancient-technique hair removal for clean, sharp lines with minimal irritation to the skin.",
    icon: <ThreadingIcon className="w-7 h-7 text-rose" />,
  },
  {
    name: "Definition Brows",
    description:
      "A tailored shape and finish that defines your natural arch and frames your face beautifully.",
    icon: <BrowIcon className="w-7 h-7 text-rose" />,
  },
  {
    name: "Henna Brows",
    description:
      "Semi-permanent tint that stains both skin and hair for a fuller, longer-lasting defined brow.",
    icon: <HennaIcon className="w-7 h-7 text-rose" />,
  },
  {
    name: "Brow Lamination",
    description:
      "Sleek, fluffy, laminated brows that hold their shape for a fuller, more polished arch.",
    icon: <LaminationIcon className="w-7 h-7 text-rose" />,
  },
  {
    name: "Lash Lifts",
    description:
      "Korean and traditional lash lift methods to enhance your natural lashes with a soft, curled, mascara-free lift.",
    icon: <LashIcon className="w-7 h-7 text-rose" />,
  },
  {
    name: "Brow Waxing & Tinting",
    description:
      "Precision waxing and rich tinting to shape and define your brows with lasting colour.",
    icon: <WaxIcon className="w-7 h-7 text-rose" />,
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
    <div className="flex flex-col min-h-screen bg-cream text-plum">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-rose-light/40">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
          <a href="#top" className="font-serif text-xl sm:text-2xl tracking-wide text-plum">
            Luscious <span className="text-rose-dark">Looks</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide uppercase text-plum-soft hover:text-rose-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-soft hover:text-rose-dark transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-rose hover:bg-rose-dark transition-colors text-cream text-sm font-semibold px-5 py-2.5 shine-effect"
            >
              Book Now
            </a>
          </div>

          <button
            className="md:hidden text-plum"
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
          <div className="md:hidden flex flex-col gap-4 px-5 pb-6 pt-2 bg-cream border-t border-rose-light/40">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-wide uppercase text-plum-soft hover:text-rose-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-plum-soft hover:text-rose-dark transition-colors text-sm"
            >
              <InstagramIcon className="w-5 h-5" /> {INSTAGRAM_HANDLE}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-rose hover:bg-rose-dark transition-colors text-cream text-sm font-semibold px-5 py-2.5 text-center"
            >
              Book Now
            </a>
          </div>
        )}
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-blush">
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold-light/40 blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-rose/20 blur-3xl" />

          <div className="relative max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 text-center">
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-rose-dark font-semibold mb-5">
              Shrewsbury, Shropshire
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl leading-tight text-plum mb-6">
              Personalised Eyebrow Magic,
              <br className="hidden sm:block" /> Crafted Just for You
            </h1>
            <p className="text-plum-soft text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Step into a boutique studio where every brow and lash appointment is
              treated as an art form. Personalised artistry by Becky Stafford,
              designed to bring out your most confident look.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-full bg-rose hover:bg-rose-dark transition-colors text-cream font-semibold px-8 py-3.5 shine-effect"
              >
                Book Your Appointment
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-rose-dark/40 hover:border-rose-dark text-plum font-medium px-8 py-3.5 transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </section>

        {/* Trust signals */}
        <section className="border-y border-rose-light/40 bg-cream-dark/60">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" />
                ))}
              </div>
              <p className="font-serif text-lg text-plum">5+ Years Experience</p>
              <p className="text-sm text-plum-soft">Brow artist in Shrewsbury since 2019</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <HeartIcon className="w-7 h-7 text-rose" />
              <p className="font-serif text-lg text-plum">Loyal Clientele</p>
              <p className="text-sm text-plum-soft">A loyal, returning client base built on trust</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CertificateIcon className="w-7 h-7 text-rose" />
              <p className="font-serif text-lg text-plum">2,800+ Followers</p>
              <p className="text-sm text-plum-soft">A thriving Instagram community of brow lovers</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-rose-dark font-semibold mb-4">
              Services
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-plum mb-4">
              Artistry Tailored to You
            </h2>
            <p className="text-plum-soft leading-relaxed">
              Every treatment is delivered with a gentle, personalised touch in a
              calm, elegant studio designed around you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="rounded-2xl bg-white/60 border border-rose-light/50 p-7 hover:shadow-lg hover:shadow-rose-light/30 hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-rose-light/40 flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl text-plum mb-2">{service.name}</h3>
                <p className="text-sm text-plum-soft leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-cream-dark/60 border-y border-rose-light/40">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-rose-dark font-semibold mb-4">
                About Luscious Looks
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-plum mb-6">
                Meet Your Brow Artist
              </h2>
              <p className="text-plum-soft leading-relaxed mb-4">
                Luscious Looks is owned and run by Becky Stafford, Shrewsbury&rsquo;s
                brow artist since 2019. Every appointment is approached with a
                personalised eye &mdash; your face shape, your features, your
                preferences &mdash; to create brows that are uniquely yours.
              </p>
              <p className="text-plum-soft leading-relaxed mb-4">
                What began as a mobile service, travelling to clients across
                Shropshire, has grown into a beautiful studio of Becky&rsquo;s own
                at Flexspace, Battlefield Enterprise Park &mdash; a journey built on
                dedication and a loyal, returning clientele.
              </p>
              <p className="text-plum-soft leading-relaxed">
                A patch test is required for all new clients ahead of henna brow
                and tinting treatments, ensuring every visit is safe as well as
                beautiful.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-rose-light via-rose to-rose-dark shine-effect shadow-xl shadow-rose-dark/20" />
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-rose-dark font-semibold mb-4">
              Visit the Studio
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-plum">Location</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl overflow-hidden border border-rose-light/50 aspect-[4/3]">
              <iframe
                title="Luscious Looks location"
                src={MAPS_EMBED_URL}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-2xl bg-white/60 border border-rose-light/50 p-8 space-y-8">
              <div className="flex gap-4">
                <PinIcon className="w-6 h-6 text-rose-dark flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-plum mb-1">Address</h3>
                  <p className="text-plum-soft">{ADDRESS}</p>
                  <a
                    href={MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm font-semibold text-rose-dark hover:text-plum transition-colors"
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <ShieldIcon className="w-6 h-6 text-rose-dark flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-plum mb-1">Patch Test Policy</h3>
                  <p className="text-plum-soft text-sm leading-relaxed">
                    A patch test is mandatory for all new clients at least 24-48
                    hours before henna brow or tinting appointments. Please DM to
                    arrange yours ahead of booking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section id="contact" className="bg-gradient-to-br from-rose-dark via-rose to-gold">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20 sm:py-28 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-5">
              Ready for Your Brow Transformation?
            </h2>
            <p className="text-cream/90 max-w-xl mx-auto mb-6 leading-relaxed">
              Message us on Instagram to book your appointment or ask a question
              &mdash; we&rsquo;d love to welcome you into the studio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-cream text-plum font-semibold px-8 py-3.5 hover:bg-white transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
                DM {INSTAGRAM_HANDLE}
              </a>
            </div>
            <p className="text-cream/80 text-sm max-w-xl mx-auto leading-relaxed">
              Please note: a patch test is required for all new clients before
              henna brow and tinting treatments.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-plum text-cream/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-serif text-xl text-cream">Luscious Looks</p>
            <p className="text-sm mt-1">{ADDRESS}</p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-light transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-cream/60 order-last sm:order-none">
            {`© ${new Date().getFullYear()} Luscious Looks Brow & Lash Studio`}
          </p>
        </div>
      </footer>
    </div>
  );
}
