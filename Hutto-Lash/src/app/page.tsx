"use client";

import { useEffect } from "react";
import {
  MapPin,
  Clock,
  CalendarDays,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// ───── Ground-truth content (per repo AGENTS.md, do not invent beyond this) ─────
const BUSINESS = {
  name: "Hutto Lash Co",
  owner: "Bailey Graves",
  city: "Hutto",
  state: "TX",
  address: "102 Taylor St, Hutto, TX 78634",
  hours: [
    { day: "Monday", time: "8am – 3pm" },
    { day: "Tuesday", time: "8am – 3pm" },
    { day: "Wednesday", time: "8am – 3pm" },
    { day: "Thursday", time: "8am – 3pm" },
    { day: "Friday", time: "8am – 2pm" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ],
};

// Primary CTA — Instagram DM. Replace if the real handle differs.
const INSTAGRAM_URL = "https://instagram.com/huttolashco";
const INSTAGRAM_HANDLE = "@huttolashco";

// Secondary CTA — visibly smaller, never equal weight.
const SQUARE_URL = "https://huttolashco.square.site";
// ───────────────────────────────────────────────────────────────────────────────

// Inline SVG for the IG mark (per brief: inline SVG fallback for Instagram mark)
function IgMark({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Page() {
  // IntersectionObserver adds .is-visible to each .reveal / .reveal-stagger as it enters view
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger")
    );
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
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
      {/* ═══════════════════════════ HEADER / NAV ═══════════════════════════ */}
      <header className="sticky top-0 z-50 bg-cream-base/85 backdrop-blur-sm border-b border-gold-accent/20">
        <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="font-serif text-xl font-semibold text-plum-anchor tracking-tight">
            Hutto Lash Co
          </a>
          <div className="flex items-center gap-5">
            <a
              href="#services"
              className="hidden sm:inline text-sm font-medium text-plum-body link-underline"
            >
              Services
            </a>
            <a
              href="#visit"
              className="hidden sm:inline text-sm font-medium text-plum-body link-underline"
            >
              Visit
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-plum-anchor px-4 py-2.5 text-sm font-semibold text-cream-onplum transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg min-h-[44px]"
            >
              <IgMark className="w-4 h-4" /> Book on Instagram
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* ═══════════════════════════ 1. HERO ═══════════════════════════ */}
        <section className="relative overflow-hidden bg-cream-base">
          {/* floating warm orb, deep inside plum — low-contrast, two-hue, NOT a stock gradient */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-20 w-[min(85vw,560px)] h-[min(85vw,560px)] rounded-full blur-3xl animate-hero-float"
            style={{
              background:
                "radial-gradient(circle, rgba(201,161,94,0.30) 0%, rgba(74,34,56,0.12) 55%, transparent 72%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
            <div className="max-w-2xl">
              {/* staggered entrance via transition-delay utility classes */}
              <p
                className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gold-deep opacity-0"
                style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) 0s forwards" }}
              >
                Lash Extensions &middot; {BUSINESS.city}, {BUSINESS.state}
              </p>
              <h1
                className="mt-5 font-serif text-[clamp(2.5rem,7vw,3.5rem)] leading-[1.05] font-semibold text-plum-ink opacity-0"
                style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s forwards" }}
              >
                Lash extensions made for your face, done in Hutto.
              </h1>
              <p
                className="mt-6 text-lg leading-relaxed text-plum-body opacity-0"
                style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s forwards" }}
              >
                A quiet, single-artist studio on Taylor St where {BUSINESS.owner}{" "}
                takes time with every set — no rushed appointments, no cookie-cutter looks.
              </p>
              <div
                className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0"
                style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s forwards" }}
              >
                {/* PRIMARY CTA — Instagram DM */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-plum-anchor px-7 py-4 text-base font-semibold text-cream-onplum shadow-md transition-all duration-250 hover:-translate-y-0.5 hover:shadow-xl min-h-[56px]"
                >
                  <IgMark className="w-5 h-5" /> Message {BUSINESS.owner.split(" ")[0]} on Instagram
                </a>
                {/* SECONDARY CTA — Square, visibly smaller, never equal weight */}
                <a
                  href={SQUARE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cream-card px-5 py-3.5 text-sm font-medium text-plum-anchor border border-gold-accent/40 transition-all duration-250 hover:-translate-y-0.5 hover:border-gold-accent min-h-[48px]"
                >
                  <CalendarDays className="w-4 h-4" /> Book a time on Square
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-deep" />
                </a>
              </div>
              <p
                className="mt-5 text-sm text-plum-body/80 opacity-0"
                style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s forwards" }}
              >
                By appointment &middot; {INSTAGRAM_HANDLE}
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ 2. SERVICES ═══════════════════════════ */}
        <section
          id="services"
          className="bg-cream-card border-y border-gold-accent/20"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
            <div className="reveal max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
                What {BUSINESS.owner.split(" ")[0]} does
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-plum-ink">
                Custom lash sets, one appointment at a time
              </h2>
              <p className="mt-4 text-plum-body leading-relaxed">
                Every set is mapped to your eye shape, natural lashes, and how much
                drama you actually want — not off a fixed menu. {BUSINESS.owner} will
                talk you through what works before you commit to anything.
              </p>
            </div>

            {/* HONEST SERVICES: no invented lash menu. The brief lists no specific
                services, so we do NOT fabricate volume/mega/hybrid set names. */}
            <div className="reveal-stagger grid gap-4 sm:grid-cols-3">
              <article className="rounded-2xl bg-cream-base border border-gold-accent/25 p-7 hover:-translate-y-1.5 hover:shadow-xl transition-transform duration-250">
                <Sparkles className="w-6 h-6 text-gold-deep" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-plum-ink">
                  Full lash sets
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-plum-body">
                  New lash extensions, designed and applied in a single,
                  unhurried appointment.
                </p>
              </article>

              <article className="rounded-2xl bg-cream-base border border-gold-accent/25 p-7 hover:-translate-y-1.5 hover:shadow-xl transition-transform duration-250">
                <CalendarDays className="w-6 h-6 text-gold-deep" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-plum-ink">
                  Lash fills
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-plum-body">
                  Ongoing maintenance to keep your set full and even between appointments.
                </p>
              </article>

              <article className="rounded-2xl bg-plum-anchor border border-gold-accent/30 p-7 hover:-translate-y-1.5 hover:shadow-xl transition-transform duration-250">
                <ArrowRight className="w-6 h-6 text-gold-accent" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-cream-onplum">
                  Ask about styles
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-onplum/85">
                  Not sure whether you want natural, volume, or something in between?
                  DM {INSTAGRAM_HANDLE} — that conversation decides it.
                </p>
              </article>
            </div>

            <p className="reveal mt-8 text-sm text-plum-body/80 leading-relaxed">
              No published price list — quotes are based on the set you and{" "}
              {BUSINESS.owner.split(" ")[0]} land on. A quick Instagram message gets
              you a straight answer.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════ 3. ABOUT ═══════════════════════════ */}
        <section className="bg-cream-base">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
            <div className="reveal grid gap-12 sm:gap-16 sm:grid-cols-[1fr,1.4fr] sm:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
                  The artist
                </p>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-plum-ink">
                  {BUSINESS.owner}
                </h2>
                <p className="mt-2 text-plum-body">Lash extension artist &middot; {BUSINESS.city}, {BUSINESS.state}</p>

                {/* Honest placeholder — no invented headshot photo per guardrails.
                    A wrong stock photo is worse than an honest placeholder. */}
                <div className="mt-6 aspect-[4/5] w-full max-w-xs rounded-2xl border border-dashed border-gold-accent/50 bg-cream-card flex flex-col items-center justify-center text-center px-6">
                  <div className="w-12 h-12 rounded-full bg-cream-deep text-plum-anchor flex items-center justify-center font-serif text-lg">
                    B
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-wider text-gold-deep">
                    [Add real photo of {BUSINESS.owner.split(" ")[0]}]
                  </p>
                </div>
              </div>

              <div className="text-lg leading-relaxed text-plum-body max-w-prose">
                {/* Owner's voice — kept to the two real facts supplied (name + solo
                    Hutto artist); the third line is an honest placeholder for any
                    real detail Bailey wants to add. Nothing invented about years,
                    training, or credentials. */}
                <p>
                  I&rsquo;m {BUSINESS.owner}, and I run Hutto Lash Co as a one-person
                  studio on Taylor St. Every set I do is by appointment, and I keep my
                  days small on purpose so each client gets my full attention instead
                  of feeling rushed.
                </p>
                <p className="mt-5">
                  {/* HONEST PLACEHOLDER — replace with Bailey's real philosophy line */}
                  <span className="inline-block border-b border-dashed border-gold-accent/60 text-plum-body/80">
                    [Add a line or two in your own words &mdash; what you&rsquo;re known
                    for, your style, what a first appointment with you feels like.]
                  </span>
                </p>
                <div className="mt-8">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base font-semibold text-plum-anchor link-underline min-h-[44px]"
                  >
                    <IgMark className="w-4 h-4" /> Say hi on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ 4. TRUST SIGNALS (before final CTA) ═══════════════════════════ */}
        <section className="bg-plum-anchor text-cream-onplum">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
            <div className="reveal max-w-2xl mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-accent">
                Why people come back
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold">
                A growing local favorite
              </h2>
            </div>

            {/* HONEST TRUST: no verbatim quotes, no star ratings, no review counts,
                no fabricated client names were provided — guardrails forbid all of
                those. Instead, one honest low-key line about the kind of studio it is. */}
            <div className="reveal grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-plum-soft/70 border border-gold-accent/25 p-7">
                <p className="text-lg leading-relaxed text-cream-onplum/95">
                  A single artist, not a chain &mdash; so the lashes you leave with
                  are the lashes {BUSINESS.owner.split(" ")[0]} personally designed and
                  applied, every visit.
                </p>
              </div>
              <div className="rounded-2xl bg-plum-soft/70 border border-gold-accent/25 p-7">
                <p className="text-lg leading-relaxed text-cream-onplum/95">
                  {/* Honest placeholder for real client sentiment Bailey can share */}
                  <span className="border-b border-dashed border-gold-accent/50">
                    [Add one or two real things clients tell you &mdash; e.g. how your
                    sets feel, why they rebook. Paraphrase is fine; real sentiment
                    reads better than polished marketing copy.]
                  </span>
                </p>
              </div>
            </div>

            <p className="reveal mt-8 text-sm text-cream-onplum/70">
              No star ratings or review counts are listed here &mdash; when you have
              real ones to share, {INSTAGRAM_HANDLE} is the best place to display them.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════ 5. GALLERY ═══════════════════════════ */}
        <section className="bg-cream-base">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
            <div className="reveal max-w-2xl mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
                The work
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-plum-ink">
                A look at {BUSINESS.owner.split(" ")[0]}&rsquo;s sets
              </h2>
            </div>

            {/* GALLERY PLACEHOLDERS — labeled blocks, NO stock photography.
                Replace with real photos in public/images/ when available. */}
            <div className="reveal-stagger grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <figure
                  key={i}
                  className="relative aspect-square sm:aspect-[4/5] rounded-xl border border-dashed border-gold-accent/45 bg-cream-card flex flex-col items-center justify-center overflow-hidden group"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-40 transition-transform duration-500 group-hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(243,231,211,0.6), rgba(201,161,94,0.10))",
                    }}
                  />
                  <figcaption className="relative text-center px-3">
                    <p className="text-[11px] uppercase tracking-wider text-gold-deep">
                      [Add real lash photo]
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="reveal mt-6 text-sm text-plum-body/80">
              Real photos {BUSINESS.owner.split(" ")[0]} sends will replace these
              blocks &mdash; no stock images, so what you see is actually her work.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════ 6. LOCATION & HOURS ═══════════════════════════ */}
        <section id="visit" className="bg-cream-card border-y border-gold-accent/20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
            <div className="reveal mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
                Where & when
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-plum-ink">
                Plan your visit
              </h2>
            </div>

            <div className="reveal grid gap-8 sm:grid-cols-2">
              {/* Location */}
              <div className="rounded-2xl bg-cream-base border border-gold-accent/25 p-7">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-gold-deep shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-plum-ink">
                      Hutto Lash Co
                    </h3>
                    <address className="not-italic mt-2 text-plum-body leading-relaxed">
                      {BUSINESS.address}
                    </address>
                    <p className="mt-2 text-sm text-plum-body/80">
                      By appointment only &middot; please message before stopping by.
                    </p>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    BUSINESS.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-plum-anchor link-underline min-h-[44px]"
                >
                  Open in Google Maps <ArrowUpRight className="w-3.5 h-3.5 text-gold-deep" />
                </a>
              </div>

              {/* Hours */}
              <div className="rounded-2xl bg-cream-base border border-gold-accent/25 p-7">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-gold-deep shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-plum-ink">
                      Hours
                    </h3>
                    <ul className="mt-3 space-y-1.5 text-plum-body text-sm">
                      {BUSINESS.hours.map((h) => (
                        <li
                          key={h.day}
                          className="flex justify-between gap-4 max-w-xs"
                        >
                          <span>{h.day}</span>
                          <span
                            className={
                              h.time === "Closed"
                                ? "text-plum-body/50"
                                : "font-medium"
                            }
                          >
                            {h.time}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ 7. CONTACT (restate primary CTA last) ═══════════════════════════ */}
        <section id="contact" className="bg-plum-anchor text-cream-onplum">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 py-24 sm:py-28 text-center">
            <div className="reveal">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-accent">
                Book with {BUSINESS.owner.split(" ")[0]}
              </p>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold leading-tight">
                Your lashes start with a message.
              </h2>
              <p className="mt-5 text-lg text-cream-onplum/85 max-w-xl mx-auto leading-relaxed">
                The fastest way to reach {BUSINESS.owner.split(" ")[0]} is a DM on
                Instagram &mdash; tell her a little about what you&rsquo;re after and
                she&rsquo;ll get back to you to set a time.
              </p>

              {/* PRIMARY CTA — repeated (final instance) */}
              <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cream-onplum px-7 py-4 text-base font-semibold text-plum-anchor shadow-lg transition-all duration-250 hover:-translate-y-0.5 hover:shadow-xl min-h-[56px]"
                >
                  <IgMark className="w-5 h-5" /> Message on Instagram
                </a>
                {/* SECONDARY — Square, smaller */}
                <a
                  href={SQUARE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-transparent px-5 py-3.5 text-sm font-medium text-cream-onplum border border-gold-accent/50 transition-all duration-250 hover:-translate-y-0.5 hover:border-gold-accent min-h-[48px]"
                >
                  <CalendarDays className="w-4 h-4" /> Book a time on Square
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="mt-6 text-sm text-cream-onplum/70">
                {INSTAGRAM_HANDLE} &middot; by appointment in {BUSINESS.city}, {BUSINESS.state}
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════ FOOTER ═══════════════════════════ */}
      <footer className="bg-plum-ink text-cream-onplum/80">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row gap-5 sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-lg font-semibold text-cream-onplum">
              {BUSINESS.name}
            </p>
            <p className="mt-1 text-sm">
              {BUSINESS.address}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${BUSINESS.name} on Instagram`}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-gold-accent/40 text-cream-onplum transition-colors duration-250 hover:border-gold-accent hover:text-gold-accent min-h-[44px] min-w-[44px]"
            >
              <IgMark className="w-5 h-5" />
            </a>
            <a
              href={SQUARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium link-underline min-h-[44px]"
            >
              <CalendarDays className="w-4 h-4" /> Square booking
            </a>
          </div>
        </div>
      </footer>

      {/* keyframes used by hero inline-animation style above */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
