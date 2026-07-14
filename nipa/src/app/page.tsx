"use client";

import { useEffect, useRef } from "react";
import { Phone, MapPin, Clock, Sparkles, CalendarHeart, Users, Building2, GraduationCap } from "lucide-react";

/* ---------------------------------------------------------------------------
   Ornamental mehndi flourishes - inline SVG line motifs
   (mandala / paisley shapes, stroke-only, gold). No clip-art, no emoji.
   --------------------------------------------------------------------------- */

const PaisleyDivider = () => (
  <div className="flex items-center justify-center gap-3 text-gold-deep" aria-hidden="true">
    <span className="h-px w-12 bg-current opacity-40 sm:w-20" />
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M20 4c-6 6-9 10-9 14a9 9 0 0 0 18 0c0-4-3-8-9-14Z" />
      <path d="M20 12c-2 2-3 4-3 6a3 3 0 0 0 6 0c0-2-1-4-3-6Z" />
      <circle cx="20" cy="18" r="0.8" fill="currentColor" stroke="none" />
    </svg>
    <span className="h-px w-12 bg-current opacity-40 sm:w-20" />
  </div>
);

const MandalaOrb = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.9" aria-hidden="true">
    <circle cx="60" cy="60" r="6" />
    <circle cx="60" cy="60" r="20" />
    <circle cx="60" cy="60" r="38" strokeDasharray="2 4" />
    {Array.from({ length: 12 }).map((_, i) => {
      const a = (i / 12) * Math.PI * 2;
      const x1 = 60 + Math.cos(a) * 20, y1 = 60 + Math.sin(a) * 20;
      const x2 = 60 + Math.cos(a) * 38, y2 = 60 + Math.sin(a) * 38;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
    })}
    {Array.from({ length: 8 }).map((_, i) => {
      const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
      const cx = 60 + Math.cos(a) * 38, cy = 60 + Math.sin(a) * 38;
      return <circle key={i} cx={cx} cy={cy} r="3.5" />;
    })}
    <circle cx="60" cy="60" r="56" strokeDasharray="1 5" />
  </svg>
);

/* Instagram mark - inline SVG (inline SVG fallback for the Instagram icon) */
const InstagramGlyph = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

/* ---------------------------------------------------------------------------
   Ground-truth content (from brief - nothing invented beyond it)
   --------------------------------------------------------------------------- */
const INSTAGRAM_URL = "https://instagram.com/nipadesai.henna";
const INSTAGRAM_HANDLE = "@nipadesai.henna";
const PHONE_DISPLAY = "(512) 762-8048";
const PHONE_TEL = "+15127628048";

const services = [
  {
    icon: CalendarHeart,
    title: "Bridal Mehndi",
    desc: "Intricate, personalized bridal designs tailored to your wedding story - the centerpiece of her work for two decades.",
  },
  {
    icon: Users,
    title: "Sangeet & Wedding Guest Henna",
    desc: "Beautiful, flowing designs for sangeet nights and wedding guests, applied efficiently so dozens of guests can be adorned on the day.",
  },
  {
    icon: Building2,
    title: "Corporate & Festival Events",
    desc: "On-site henna for corporate celebrations and cultural festivals, with mobile service that brings the artistry to your venue.",
  },
  {
    icon: GraduationCap,
    title: "School / Community Events",
    desc: "Gentle, crowd-pleasing designs for school functions and community gatherings across the greater Austin area.",
  },
];

/* Paraphrased real client sentiment - NOT verbatim quotes, NO names, NO ratings. */
const sentiments = [
  {
    text: "She's the first name that comes up when you search for a henna artist in Austin - and the one clients say they'd go back to.",
    tag: "What people searching find",
  },
  {
    text: "Her bridal work carries through wedding parties with dozens of guests, and the line work stays intricate on every single hand.",
    tag: "On her bridal designs",
  },
  {
    text: "Warm and easy to work with even on short timelines - clients describe her as calm, flexible, and quick to respond when dates move.",
    tag: "On working with her",
  },
];

/* Gallery placeholders - clearly labeled. REAL photos essential before launch. */
const gallerySlots = [
  { label: "Add real henna design photos here", note: "Bridal mehndi" },
  { label: "Add real henna design photos here", note: "Sangeet / guest" },
  { label: "Add real henna design photos here", note: "Festival event" },
  { label: "Add real henna design photos here", note: "Community event" },
  { label: "Add real henna design photos here", note: "Detail shot" },
  { label: "Add real henna design photos here", note: "Detail shot" },
];

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  // IntersectionObserver scroll reveals - adds .is-visible as each [data-reveal] enters view.
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (prefersReduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-gold-metallic focus:px-4 focus:py-2 focus:text-maroon-deep"
      >
        Skip to content
      </a>

      {/* ----------------------- HEADER / NAV ----------------------- */}
      <header className="sticky top-0 z-40 border-b hairline-gold bg-cream-base/90 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8" aria-label="Primary">
          <a href="#top" className="flex items-center gap-2.5 leading-none">
            <MandalaOrb className="h-7 w-7 text-gold-deep" />
            <span className="font-display text-xl font-semibold text-maroon-deep">Nipa Desai</span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-gold-deep sm:inline">
              Henna
            </span>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 rounded-full bg-maroon-deep px-5 py-2.5 text-sm font-medium text-cream-base"
            style={{ minHeight: 44 }}
          >
            <InstagramGlyph className="h-4 w-4" />
            <span className="hidden sm:inline">Message on Instagram</span>
            <span className="sm:hidden">Message</span>
          </a>
        </nav>
      </header>

      <main id="main" ref={mainRef}>
        {/* ----------------------- HERO ----------------------- */}
        <section id="top" className="relative overflow-hidden">
          {/* floating maroon-to-gold orb */}
          <div
            className="hero-orb pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle at 40% 40%, #7A2424 0%, #C9A227 70%, transparent 100%)" }}
            aria-hidden="true"
          />
          <div
            className="hero-orb pointer-events-none absolute -right-24 -top-10 h-80 w-80 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle at 60% 40%, #C9A227 0%, #5C1A1A 70%, transparent 100%)" }}
            aria-hidden="true"
          />
          <MandalaOrb className="pointer-events-none absolute right-6 top-24 hidden h-40 w-40 text-gold-metallic opacity-20 lg:block" />

          <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
            <div className="max-w-2xl">
              <p className="hero-enter hero-delay-1 mb-4 inline-flex items-center gap-2 rounded-full border hairline-gold bg-cream-card px-3.5 py-1.5 text-sm font-medium text-maroon-ink">
                <Sparkles className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
                Henna & mehndi artist &middot; North Austin, TX
              </p>

              <h1 className="hero-enter hero-delay-2 font-display t-scale-56 font-bold text-maroon-deep">
                Intricate henna, made personal &mdash; for the moments Austin remembers.
              </h1>

              <p className="hero-enter hero-delay-3 mt-5 t-scale-20 text-maroon-ink prose-measure">
                I&rsquo;m Nipa Desai. For 20+ years I&rsquo;ve been drawing bridal mehndi and
                guest henna across North Austin &mdash; designs tailored to you, from a single
                bride to a full wedding party. By appointment; mobile service available for events.
              </p>

              <div className="hero-enter hero-delay-4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2.5 rounded-full bg-maroon-deep px-7 py-3.5 text-base font-medium text-cream-base"
                  style={{ minHeight: 52 }}
                >
                  <InstagramGlyph className="h-5 w-5" />
                  Message Nipa on Instagram
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="link-grow inline-flex items-center justify-center gap-2 px-2 py-2 text-base font-medium text-maroon-deep"
                  style={{ minHeight: 44 }}
                >
                  <Phone className="h-4 w-4 text-gold-deep" aria-hidden="true" />
                  or call/text {PHONE_DISPLAY}
                </a>
              </div>

              <p className="mt-6 text-sm text-maroon-ink opacity-70">
                Booking happens over Instagram DM. No storefront &mdash; I come to you for events.
              </p>
            </div>
          </div>
        </section>

        {/* ----------------------- SERVICES ----------------------- */}
        <section id="services" className="bg-cream-warm py-16 sm:py-24" aria-labelledby="services-h">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div data-reveal className="reveal">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-deep">What I do</p>
              <h2 id="services-h" className="mt-2 font-display t-scale-40 font-semibold text-maroon-deep">
                Four ways I bring henna to your day
              </h2>
            </div>

            <ul data-reveal className="reveal stagger mt-10 grid gap-5 sm:grid-cols-2">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.title}>
                    <article className="card-lift h-full rounded-2xl border hairline-gold bg-cream-card p-6 shadow-[0_1px_0_rgba(201,162,39,0.25)]">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-maroon-deep text-cream-base">
                        <Icon className="h-5 w-5 text-gold-soft" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 font-display text-2xl font-semibold text-maroon-deep">{s.title}</h3>
                      <p className="mt-2 text-base text-maroon-ink prose-measure">{s.desc}</p>
                    </article>
                  </li>
                );
              })}
            </ul>

            <p data-reveal className="reveal mt-8 text-base text-maroon-ink prose-measure">
              Every service is by appointment and quoted individually over DM &mdash; I don&rsquo;t
              publish a one-size price list because each design is sized to the person and the occasion.
            </p>
          </div>
        </section>

        {/* ----------------------- ABOUT ----------------------- */}
        <section id="about" className="py-16 sm:py-24" aria-labelledby="about-h">
          <div className="mx-auto grid max-w-5xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-12">
            <div data-reveal className="reveal lg:col-span-7">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-deep">About Nipa</p>
              <h2 id="about-h" className="mt-2 font-display t-scale-40 font-semibold text-maroon-deep">
                Two decades of henna, drawn by hand in Austin
              </h2>
              <div className="mt-5 space-y-4 text-lg text-maroon-ink prose-measure">
                <p>
                  I&rsquo;ve been doing henna in the Austin area for over twenty years. What started
                  as something I loved doing for friends became a practice I&rsquo;m proud of &mdash; intricate
                  designs, each one personalized rather than stamped from a pattern book.
                </p>
                <p>
                  I&rsquo;m known for bridal mehndi and for keeping up with wedding parties where dozens
                  of guests want henna on the same day. My clients tell me I&rsquo;m the artist they
                  keep finding at the top of the search &mdash; and they come back because the line work
                  holds up on real hands, not just in photos.
                </p>
                <p>
                  I work by appointment and travel for events. The easiest way to reach me is a
                  quick DM on Instagram.
                </p>
              </div>
            </div>

            <aside data-reveal className="reveal lg:col-span-5">
              <figure className="rounded-2xl mehndi-field p-7 text-cream-base shadow-[0_20px_40px_-18px_rgba(92,26,26,0.5)]">
                <MandalaOrb className="mx-auto h-16 w-16 text-gold-soft" />
                <figcaption className="mt-5 text-center">
                  <p className="font-display text-3xl font-semibold text-gold-soft">20+</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.16em] text-cream-base opacity-80">
                    years serving the<br className="sm:hidden" /> Austin area
                  </p>
                </figcaption>
                <div className="mt-6 space-y-3 border-t border-gold-metallic pt-6 text-sm text-cream-base opacity-90">
                  <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold-soft" aria-hidden="true" /> North Austin, TX & surrounding areas</p>
                  <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold-soft" aria-hidden="true" /> By appointment &mdash; mobile service for events</p>
                </div>
              </figure>
            </aside>
          </div>
        </section>

        {/* ----------------------- TRUST SIGNALS (before final CTA) ----------------------- */}
        <section id="trust" className="bg-cream-warm py-16 sm:py-24" aria-labelledby="trust-h">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div data-reveal className="reveal text-center">
              <PaisleyDivider />
              <h2 id="trust-h" className="mt-6 font-display t-scale-40 font-semibold text-maroon-deep">
                What clients say to each other
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-maroon-ink">
                Paraphrased from real client sentiment &mdash; these are the things people tell friends
                when they recommend me, not formal reviews.
              </p>
            </div>

            <ul data-reveal className="reveal stagger mt-12 grid gap-6 sm:grid-cols-3">
              {sentiments.map((s) => (
                <li key={s.tag}>
                  <blockquote className="h-full rounded-2xl border hairline-gold bg-cream-card p-6">
                    <p className="font-display text-xl font-medium text-maroon-deep">&ldquo;{s.text}&rdquo;</p>
                    <footer className="mt-4 border-t hairline-gold pt-3 text-xs font-medium uppercase tracking-[0.14em] text-gold-deep">
                      {s.tag}
                    </footer>
                  </blockquote>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ----------------------- GALLERY (honest placeholders) ----------------------- */}
        <section id="gallery" className="py-16 sm:py-24" aria-labelledby="gallery-h">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div data-reveal className="reveal">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-deep">Gallery</p>
              <h2 id="gallery-h" className="mt-2 font-display t-scale-40 font-semibold text-maroon-deep">
                The work, in pictures
              </h2>
              <p className="mt-3 max-w-xl text-base text-maroon-ink prose-measure">
                Henna is a visual business, and the only photos that belong here are of my actual
                line work. These tiles are placeholders until real photos drop in &mdash; a wrong stock
                hand would misrepresent the art better than an honest empty frame.
              </p>
            </div>

            <ul data-reveal className="reveal stagger mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {gallerySlots.map((g, i) => (
                <li key={i} className={i === 0 ? "col-span-2 sm:col-span-1" : ""}>
                  <figure className="tile-lift group relative flex aspect-square items-end overflow-hidden rounded-2xl border hairline-gold bg-gradient-to-br from-cream-warm to-cream-card p-4">
                    <MandalaOrb className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-gold-metallic opacity-25" />
                    <figcaption className="relative w-full text-center">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-maroon-ink opacity-70">
                        {g.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-maroon-deep">{g.note}</p>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>

            <p data-reveal className="reveal mt-6 rounded-xl bg-maroon-deep p-4 text-sm text-cream-base prose-measure" style={{ backgroundColor: "rgba(92,26,26,0.06)" }}>
              <strong className="font-semibold text-maroon-deep">Before this goes live:</strong> add real
              henna design photos to <code className="rounded bg-cream-card px-1.5 py-0.5 font-mono text-xs text-maroon-deep">public/images/</code> and
              swap these placeholder tiles for next/image components with descriptive alt text. This is
              non-negotiable for a mehndi artist &mdash; the portfolio is the proof.
            </p>
          </div>
        </section>

        {/* ----------------------- LOCATION & HOURS ----------------------- */}
        <section id="location" className="bg-cream-warm py-16 sm:py-24" aria-labelledby="location-h">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div data-reveal className="reveal grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-deep">Location</p>
                <h2 id="location-h" className="mt-2 font-display t-scale-40 font-semibold text-maroon-deep">
                  Where I work
                </h2>
                <div className="mt-5 space-y-3 text-base text-maroon-ink">
                  <p className="flex items-start gap-3 prose-measure">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
                    <span>Serves North Austin, TX and surrounding areas. No fixed storefront &mdash; by appointment only.</span>
                  </p>
                  <p className="flex items-start gap-3 prose-measure">
                    <Sparkles className="mt-1 h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
                    <span>Mobile service available for events: I come to your sangeet, wedding, festival, or community venue.</span>
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border hairline-gold bg-cream-card p-6">
                <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-gold-deep">
                  <Clock className="h-4 w-4" aria-hidden="true" /> Hours
                </p>
                <p className="mt-3 text-lg font-medium text-maroon-deep">By appointment</p>
                <p className="mt-1 text-base text-maroon-ink prose-measure">
                  I don&rsquo;t keep walk-in hours &mdash; reach out over Instagram DM and we&rsquo;ll
                  set a time that works. Mobile event service can be scheduled evenings and weekends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------- CONTACT (restate primary CTA last) ----------------------- */}
        <section id="contact" className="py-16 sm:py-24" aria-labelledby="contact-h">
          <div data-reveal className="reveal mx-auto max-w-3xl px-5 text-center sm:px-8">
            <PaisleyDivider />
            <h2 id="contact-h" className="mt-6 font-display t-scale-40 font-semibold text-maroon-deep">
              Let&rsquo;s put your henna on the calendar
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-maroon-ink prose-measure">
              The fastest way to reach me is a DM on Instagram with your date and what you&rsquo;re
              planning. For events with multiple guests, the earlier the better.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2.5 rounded-full bg-maroon-deep px-8 py-4 text-lg font-medium text-cream-base"
                style={{ minHeight: 56 }}
              >
                <InstagramGlyph className="h-5 w-5" />
                Message Nipa on Instagram
              </a>

              <p className="text-sm text-maroon-ink opacity-80">
                <span className="font-medium text-maroon-deep">{INSTAGRAM_HANDLE}</span> &middot; or call/text{" "}
                <a href={`tel:${PHONE_TEL}`} className="link-grow font-medium text-maroon-deep">
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ----------------------- FOOTER ----------------------- */}
      <footer className="border-t hairline-gold bg-cream-warm">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
          <div className="flex items-center gap-2.5">
            <MandalaOrb className="h-6 w-6 text-gold-deep" />
            <span className="font-display text-lg font-semibold text-maroon-deep">Nipa Desai Henna</span>
          </div>
          <p className="text-sm text-maroon-ink opacity-75">
            Henna & mehndi &middot; North Austin, TX &middot; by appointment
          </p>
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-maroon-deep hover:text-gold-deep"
              aria-label="Message Nipa Desai on Instagram"
            >
              <InstagramGlyph className="h-5 w-5" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-maroon-deep hover:text-gold-deep"
              aria-label={`Call or text Nipa Desai at ${PHONE_DISPLAY}`}
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
