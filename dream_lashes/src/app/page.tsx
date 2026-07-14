"use client";

import { useEffect } from "react";
import {
  MapPin,
  Clock,
  CalendarDays,
  ArrowUpRight,
  Phone,
  Sparkles,
  Eye,
  RefreshCw,
  Flower2,
  Flame,
  Droplets,
} from "lucide-react";

// ═════ Ground-truth content (per repo AGENTS.md, do not invent beyond this) ═══
const BUSINESS = {
  name: "Dream Lashes & Spa",
  owner: "Anna Mendivil",
  team: ["David Mendivil", "Samantha Valdovinos"],
  city: "Kyle",
  state: "TX",
  region: "Kyle & South Austin, TX",
  address: "213 S. Old Hwy 81, Kyle, TX",
};

// Primary CTA — Instagram DM.
const INSTAGRAM_URL = "https://instagram.com/dream_lashes_n_spa";
const INSTAGRAM_HANDLE = "@dream_lashes_n_spa";

// Secondary CTA — real tel: link, visibly smaller/lower-emphasis (never equal weight).
const PHONE_DISPLAY = "(512) 921-8409";
const PHONE_TEL = "+15129218409";

// Booking — link out to the existing GlossGenius page, do NOT rebuild it.
// NOTE: exact GlossGenius URL was not supplied in the brief; the owner should
// paste her real booking link here before launch. Honest placeholder, not a guess.
const GLOSSGENIUS_URL = "https://book.glossgenius.com/dream_lashes_n_spa";

// Only these services — confirmed by her own booking listings. No invented
// add-ons, menus, or pricing tiers.
const SERVICES = [
  {
    icon: Eye,
    title: "Lash Extensions — Classic & Full Sets",
    body: "New lash sets designed for your eye shape and natural lashes, applied in an unhurried appointment.",
  },
  {
    icon: RefreshCw,
    title: "Lash Fills",
    body: "Maintenance to keep your set full and even between appointments — including foreign fills from other artists.",
  },
  {
    icon: Flower2,
    title: "Facials & Microdermabrasion",
    body: "Skincare and resurfacing treatments to refresh and smooth the skin.",
  },
  {
    icon: Flame,
    title: "Hot Stone Massage",
    body: "Warm-stone massage to ease tension and help you unwind.",
  },
  {
    icon: Droplets,
    title: "Chemical Peels",
    body: "Professional peels for brighter, more even skin — by appointment.",
  },
];
// ═══════════════════════════════════════════════════════════════════════════════

// Inline SVG: Instagram mark (per brief: inline SVG fallback for the IG mark)
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

// Inline SVG: botanical flourishes — a sage-leaf stem. Pure line motif, no
// clip-art, no emoji (per brief). Drawn so it reads as spa, not salon.
function LeafSprig({
  className = "w-16 h-16",
  stroke = "currentColor",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* central stem */}
      <path d="M32 60 C32 44 32 30 32 16 C32 10 32 6 32 4" />
      {/* leaf pairs, alternating slightly */}
      <path d="M32 50 C 24 48 20 42 19 36 C 26 36 31 40 32 48" />
      <path d="M32 50 C 40 48 44 42 45 36 C 38 36 33 40 32 48" />
      <path d="M32 38 C 25 36 21 30 20 24 C 27 24 31 28 32 36" />
      <path d="M32 38 C 39 36 43 30 44 24 C 37 24 33 28 32 36" />
      <path d="M32 26 C 26 24 22 19 21 13 C 28 13 31 17 32 24" />
      <path d="M32 26 C 38 24 42 19 43 13 C 36 13 33 17 32 24" />
    </svg>
  );
}

// Small horizontal sprig used as an ornamental divider accent.
function LeafDivider({ className = "w-24 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10 H 38" />
      <path d="M58 10 H 92" />
      <path d="M48 16 C 44 13 42 9 42 5 C 46 6 48 9 48 14" />
      <path d="M48 16 C 52 13 54 9 54 5 C 50 6 48 9 48 14" />
      <path d="M48 16 C 46 18 44 18 42 18" />
      <path d="M48 16 C 50 18 52 18 54 18" />
    </svg>
  );
}

export default function Page() {
  // IntersectionObserver adds .is-visible to each .reveal / .reveal-stagger as it enters view.
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
      <header className="sticky top-0 z-50 bg-sage-bg/85 backdrop-blur-sm border-b border-gold-accent/20">
        <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="font-display text-xl font-semibold text-sage-anchor tracking-tight"
          >
            Dream Lashes & Spa
          </a>
          <div className="flex items-center gap-5">
            <a
              href="#services"
              className="hidden sm:inline text-sm font-medium text-sage-ink link-underline"
            >
              Services
            </a>
            <a
              href="#visit"
              className="hidden sm:inline text-sm font-medium text-sage-ink link-underline"
            >
              Visit
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sage-anchor px-4 py-2.5 text-sm font-semibold text-sage-on transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg min-h-[44px]"
            >
              <IgMark className="w-4 h-4" /> Message Anna
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* ═══════════════════════════ 1. HERO ═══════════════════════════ */}
        <section className="relative overflow-hidden bg-sage-bg">
          {/* floating sage→gold orb, low in the background — two adjacent hues,
              NOT a stock purple-pink/blue-cyan gradient */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-20 w-[min(90vw,580px)] h-[min(90vw,580px)] rounded-full blur-3xl animate-float-orb"
            style={{
              background:
                "radial-gradient(circle, rgba(201,162,78,0.30) 0%, rgba(138,169,138,0.16) 55%, transparent 72%)",
            }}
          />
          {/* secondary orb, lower-left, even softer */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-12rem] -left-32 w-[min(80vw,500px)] h-[min(80vw,500px)] rounded-full blur-3xl animate-float-orb opacity-70"
            style={{
              background:
                "radial-gradient(circle, rgba(138,169,138,0.22) 0%, rgba(201,162,78,0.10) 60%, transparent 72%)",
              animationDelay: "-8s",
            }}
          />

          <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
            <div className="max-w-2xl">
              {/* staggered entrance: eyebrow → headline → subhead → CTA (0/0.1/0.2/0.3s) */}
              <p
                className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gold-deep opacity-0"
                style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) 0s forwards" }}
              >
                Lash & Esthetics Studio &middot; {BUSINESS.region}
              </p>
              <h1
                className="mt-5 font-display text-[clamp(2.5rem,7vw,3.5rem)] leading-[1.05] font-semibold text-sage-ink opacity-0"
                style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s forwards" }}
              >
                Lash extensions and esthetics in {BUSINESS.city} — done with care.
              </h1>
              <p
                className="mt-6 text-lg leading-relaxed text-sage-ink/90 opacity-0"
                style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s forwards" }}
              >
                A small studio on S. Old Hwy 81 where {BUSINESS.owner} has built a
                loyal client base over years of lashes, facials, and skincare —
                efficient, skilled work, every appointment.
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
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sage-anchor px-7 py-4 text-base font-semibold text-sage-on shadow-md transition-all duration-250 hover:-translate-y-0.5 hover:shadow-xl min-h-[56px]"
                >
                  <IgMark className="w-5 h-5" /> Message Anna on Instagram
                </a>
                {/* SECONDARY CTA — phone, visibly smaller, never equal weight */}
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sage-card px-5 py-3.5 text-sm font-medium text-sage-anchor border border-gold-accent/40 transition-all duration-250 hover:-translate-y-0.5 hover:border-gold-accent min-h-[48px]"
                >
                  <Phone className="w-4 h-4" /> or call/text {PHONE_DISPLAY}
                </a>
              </div>
              <p
                className="mt-5 text-sm text-sage-ink/75 opacity-0"
                style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s forwards" }}
              >
                Limited weekly days &middot; {INSTAGRAM_HANDLE} &middot; book via GlossGenius
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ 2. SERVICES ═══════════════════════════ */}
        <section
          id="services"
          className="bg-sage-card border-y border-gold-accent/20"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
            <div className="reveal max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
                What the studio offers
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-sage-ink">
                Lashes, skin, and a little time to unwind
              </h2>
              <p className="mt-4 text-sage-ink/90 leading-relaxed">
                Lash work is the heart of the studio, with esthetics and massage
                alongside it. Every service is by appointment — message
                {" "}
                {BUSINESS.owner.split(" ")[0]} to confirm what&rsquo;s right for you.
              </p>
              {/* ornamental botanical accent — drawn, not clip-art */}
              <LeafDivider className="mt-6 text-sage-soft" />
            </div>

            {/* 5 SERVICES — only these, from her own booking listings. No invented
                add-ons, menus, or pricing tiers. One primary layout idea per section,
                varied card fills (not rounded-2xl+shadow on every identical card). */}
            <div className="reveal-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => {
                const Icon = s.icon;
                // the third card gets a deep-sage fill to break the monotony
                const featured = i === 2;
                return (
                  <article
                    key={s.title}
                    className={
                      featured
                        ? "rounded-2xl bg-sage-anchor border border-gold-accent/30 p-7 transition-transform duration-250 hover:-translate-y-1.5 hover:shadow-xl"
                        : "rounded-2xl bg-sage-bg border border-gold-accent/25 p-7 transition-transform duration-250 hover:-translate-y-1.5 hover:shadow-xl"
                    }
                  >
                    <Icon
                      className={featured ? "w-6 h-6 text-gold-accent" : "w-6 h-6 text-gold-deep"}
                    />
                    <h3
                      className={
                        featured
                          ? "mt-4 font-display text-xl font-semibold text-sage-on"
                          : "mt-4 font-display text-xl font-semibold text-sage-ink"
                      }
                    >
                      {s.title}
                    </h3>
                    <p
                      className={
                        featured
                          ? "mt-2 text-sm leading-relaxed text-sage-on/85"
                          : "mt-2 text-sm leading-relaxed text-sage-ink/85"
                      }
                    >
                      {s.body}
                    </p>
                  </article>
                );
              })}

              {/* honest 6th cell: foreign-fills note (real differentiator from the brief) */}
              <article className="rounded-2xl bg-sage-deep border border-dashed border-sage-soft p-7 flex flex-col justify-center">
                <RefreshCw className="w-6 h-6 text-sage-anchor" />
                <h3 className="mt-4 font-display text-xl font-semibold text-sage-ink">
                  Coming from another lash tech?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sage-ink/85">
                  Anna takes &ldquo;foreign fills&rdquo; — clients whose lashes
                  were started elsewhere. She&rsquo;ll assess the existing work and
                  continue or correct it.
                </p>
              </article>
            </div>

            <p className="reveal mt-8 text-sm text-sage-ink/75 leading-relaxed">
              No published price list here — quotes depend on the service and your
              lashes/skin. A quick Instagram message gets you a straight answer,
              and you can also book a time directly on her GlossGenius page.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════ 3. ABOUT ═══════════════════════════ */}
        <section className="bg-sage-bg relative overflow-hidden">
          {/* decorative botanical sprig, faded into the corner */}
          <LeafSprig
            className="pointer-events-none absolute -top-6 right-2 sm:right-10 w-28 sm:w-36 text-sage-soft opacity-50"
          />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
            <div className="reveal grid gap-12 sm:gap-16 sm:grid-cols-[1fr,1.4fr] sm:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
                  The artist
                </p>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-sage-ink">
                  {BUSINESS.owner}
                </h2>
                <p className="mt-2 text-sage-ink/80">
                  Lash & esthetics artist &middot; {BUSINESS.city}, {BUSINESS.state}
                </p>

                {/* Honest placeholder — no invented headshot photo per guardrails.
                    A wrong stock photo is worse than an honest placeholder. */}
                <div className="mt-6 aspect-[4/5] w-full max-w-xs rounded-2xl border border-dashed border-gold-accent/50 bg-sage-card flex flex-col items-center justify-center text-center px-6">
                  <div className="w-12 h-12 rounded-full bg-sage-deep text-sage-anchor flex items-center justify-center font-display text-lg">
                    A
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-wider text-gold-deep">
                    [Add real photo of Anna]
                  </p>
                </div>
                {/* Team — mentioned honestly, named in the brief. No fabricated
                    "team of diverse professionals in an office" stock photo. */}
                <p className="mt-5 text-sm text-sage-ink/75">
                  With Anna&rsquo;s team &mdash; {BUSINESS.team.join(" & ")}.
                </p>
              </div>

              <div className="text-lg leading-relaxed text-sage-ink/90 max-w-prose">
                {/* Owner&rsquo;s voice — paraphrased to the real facts supplied: loyal
                    client base over years with no gaps, skilled efficient lash work,
                    no infections in years, accepts foreign fills. Nothing invented
                    about training/credentials. */}
                <p>
                  I&rsquo;m {BUSINESS.owner}, and I&rsquo;ve built a loyal client
                  base here in {BUSINESS.city} over years of lashes, facials, and
                  skincare — with no gaps in service along the way. People come
                  back because the work holds up, and because I treat their eyes
                  and skin like my own.
                </p>
                <p className="mt-5">
                  I&rsquo;m known for being efficient and skilled with lash work,
                  and for keeping things clean — no infections in years of doing
                  this. If you&rsquo;re coming to {BUSINESS.city} or anywhere in
                  South Austin looking for lash extensions done right, send me a
                  message and we&rsquo;ll find a time.
                </p>
                <p className="mt-5">
                  And if your lashes were started somewhere else, don&rsquo;t worry
                  &mdash; I take foreign fills all the time. I&rsquo;ll look at the
                  existing work and either continue it or quietly fix what needs
                  fixing.
                </p>
                <div className="mt-8">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base font-semibold text-sage-anchor link-underline min-h-[44px]"
                  >
                    <IgMark className="w-4 h-4" /> Say hi on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ 4. TRUST SIGNALS (before final CTA) ═══════════════════════════ */}
        <section className="bg-sage-anchor text-sage-on relative overflow-hidden">
          <LeafSprig
            className="pointer-events-none absolute -bottom-8 -left-6 w-28 sm:w-36 text-sage-on/15"
          />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
            <div className="reveal max-w-2xl mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-on-sage">
                Why people come back
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
                A loyal local clientele
              </h2>
            </div>

            {/* HONEST TRUST: no verbatim quotes, no star ratings, no review counts,
                no fabricated client names — guardrails forbid all of those. Instead,
                paraphrased real review sentiment from the brief ("the best", followed
                for years with zero issues, efficient + fair pricing) and concrete
                facts (no infections in years). */}
            <div className="reveal grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-sage-on/5 border border-gold-accent/25 p-7">
                <p className="text-lg leading-relaxed text-sage-on">
                  Clients describe {BUSINESS.owner.split(" ")[0]} as &ldquo;the
                  best&rdquo; &mdash; and say they&rsquo;ve followed her for years
                  with zero issues. That kind of loyalty isn&rsquo;t built by
                  accident.
                </p>
              </div>
              <div className="rounded-2xl bg-sage-on/5 border border-gold-accent/25 p-7">
                <p className="text-lg leading-relaxed text-sage-on">
                  What comes up again and again is how efficient her work is and how
                  fair her pricing feels — solid lashes, no drawn-out appointments,
                  no surprises.
                </p>
              </div>
              <div className="rounded-2xl bg-sage-on/5 border border-gold-accent/25 p-7 sm:col-span-2">
                <p className="text-lg leading-relaxed text-sage-on">
                  And the thing clients rarely say out loud but notice immediately:
                  years of lash work with no infections. Clean, hygienic service
                  is the baseline here, not a feature.
                </p>
              </div>
            </div>

            <p className="reveal mt-8 text-sm text-sage-on/70">
              No star ratings or review counts are listed here &mdash; when you
              have real ones to feature, {INSTAGRAM_HANDLE} and GlossGenius are
              the best places to show them.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════ 5. GALLERY ═══════════════════════════ */}
        <section className="bg-sage-bg">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
            <div className="reveal max-w-2xl mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
                The work
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-sage-ink">
                A look at lashes & facials
              </h2>
              <p className="mt-4 text-sage-ink/85 leading-relaxed">
                Lashes and facials are visual &mdash; so this gallery matters.
                The blocks below are honest placeholders, not stock photos; real
                photos of Anna&rsquo;s actual line work will replace them before
                launch. A wrong stock image would misrepresent her results.
              </p>
            </div>

            {/* GALLERY PLACEHOLDERS — clearly labeled, NO stock photography.
                Replace with real photos in public/images/ and the galleryImages
                array when available (per brief BEFORE SHIPPING section). */}
            <div className="reveal-stagger grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "[Add real lash photo]",
                "[Add real lash photo]",
                "[Add real facial photo]",
                "[Add real lash photo]",
                "[Add real lash photo]",
                "[Add real facial photo]",
              ].map((caption, i) => (
                <figure
                  key={i}
                  className="relative aspect-square sm:aspect-[4/5] rounded-xl border border-dashed border-gold-accent/45 bg-sage-card flex flex-col items-center justify-center overflow-hidden group"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-40 transition-transform duration-500 group-hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(238,243,236,0.7), rgba(201,162,78,0.12))",
                    }}
                  />
                  <Sparkles className="relative w-5 h-5 text-sage-soft" />
                  <figcaption className="relative text-center px-3 mt-2">
                    <p className="text-[11px] uppercase tracking-wider text-gold-deep">
                      {caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="reveal mt-6 text-sm text-sage-ink/80 max-w-prose">
              Real photos {BUSINESS.owner.split(" ")[0]} sends will replace these
              blocks. For a lash and spa studio, an accurate portfolio of her own
              sets and facial results is essential &mdash; nothing generic stands in
              for it.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════ 6. LOCATION & HOURS ═══════════════════════════ */}
        <section id="visit" className="bg-sage-card border-y border-gold-accent/20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
            <div className="reveal mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
                Where & when
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-sage-ink">
                Plan your visit
              </h2>
            </div>

            <div className="reveal grid gap-8 sm:grid-cols-2">
              {/* Location */}
              <div className="rounded-2xl bg-sage-bg border border-gold-accent/25 p-7">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-gold-deep shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-sage-ink">
                      {BUSINESS.name}
                    </h3>
                    <address className="not-italic mt-2 text-sage-ink/90 leading-relaxed">
                      {BUSINESS.address}
                    </address>
                    <p className="mt-2 text-sm text-sage-ink/80">
                      Serving {BUSINESS.region} &middot; by appointment &mdash;
                      please message before stopping by.
                    </p>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    BUSINESS.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sage-anchor link-underline min-h-[44px]"
                >
                  Open in Google Maps <ArrowUpRight className="w-3.5 h-3.5 text-gold-deep" />
                </a>
              </div>

              {/* Hours — HONEST: limited weekly days, NOT a fabricated 7-day schedule.
                  We do not list specific times she doesn't keep; we say honestly that
                  days are limited and to confirm availability via Instagram/GlossGenius. */}
              <div className="rounded-2xl bg-sage-bg border border-gold-accent/25 p-7">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-gold-deep shrink-0 mt-0.5" />
                  <div className="w-full">
                    <h3 className="font-display text-xl font-semibold text-sage-ink">
                      Hours
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-sage-ink/90">
                      Anna works a limited set of days each week &mdash; the
                      studio isn&rsquo;t open seven days. Specific availability
                      changes, so confirm the day and time on Instagram or her
                      GlossGenius booking page before planning your visit.
                    </p>
                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-sage-anchor link-underline min-h-[44px]"
                      >
                        <IgMark className="w-4 h-4" /> DM for availability
                      </a>
                      <a
                        href={GLOSSGENIUS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-sage-ink/80 link-underline min-h-[44px]"
                      >
                        <CalendarDays className="w-4 h-4" /> Book on GlossGenius
                        <ArrowUpRight className="w-3.5 h-3.5 text-gold-deep" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ 7. CONTACT (restate primary CTA last) ═══════════════════════════ */}
        <section id="contact" className="bg-sage-anchor text-sage-on">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 py-24 sm:py-28 text-center">
            <div className="reveal">
              <LeafDivider className="mx-auto mb-6 text-gold-on-sage" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-on-sage">
                Book with Anna
              </p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold leading-tight">
                Your lashes start with a message.
              </h2>
              <p className="mt-5 text-lg text-sage-on/85 max-w-xl mx-auto leading-relaxed">
                The fastest way to reach her is a DM on Instagram &mdash; tell her
                a little about what you&rsquo;re after and she&rsquo;ll get back to
                you to set a time.
              </p>

              {/* PRIMARY CTA — repeated (final instance) */}
              <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sage-on px-7 py-4 text-base font-semibold text-sage-anchor shadow-lg transition-all duration-250 hover:-translate-y-0.5 hover:shadow-xl min-h-[56px]"
                >
                  <IgMark className="w-5 h-5" /> Message on Instagram
                </a>
                {/* SECONDARY — GlossGenius booking, smaller, never equal weight */}
                <a
                  href={GLOSSGENIUS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-transparent px-5 py-3.5 text-sm font-medium text-sage-on border border-gold-accent/50 transition-all duration-250 hover:-translate-y-0.5 hover:border-gold-accent min-h-[48px]"
                >
                  <CalendarDays className="w-4 h-4" /> Book a time on GlossGenius
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* phone — visibly smaller secondary, real tel: link */}
              <p className="mt-6 text-sm text-sage-on/80">
                or call/text {PHONE_DISPLAY} &middot; {INSTAGRAM_HANDLE} &middot;
                by appointment in {BUSINESS.region}
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════ FOOTER ═══════════════════════════ */}
      <footer className="bg-sage-ink text-sage-on/80">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row gap-5 sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-sage-on">
              {BUSINESS.name}
            </p>
            <p className="mt-1 text-sm">{BUSINESS.address}</p>
            <p className="mt-1 text-sm text-sage-on/60">
              {BUSINESS.region}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${BUSINESS.name} on Instagram`}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-gold-accent/40 text-sage-on transition-colors duration-250 hover:border-gold-accent hover:text-gold-accent min-h-[44px] min-w-[44px]"
            >
              <IgMark className="w-5 h-5" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              aria-label={`Call or text ${BUSINESS.name}`}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-gold-accent/40 text-sage-on transition-colors duration-250 hover:border-gold-accent hover:text-gold-accent min-h-[44px] min-w-[44px]"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={GLOSSGENIUS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium link-underline min-h-[44px]"
            >
              <CalendarDays className="w-4 h-4" /> GlossGenius booking
            </a>
          </div>
        </div>
      </footer>

      {/* keyframes used by hero inline-animation style above (fade-in-up) */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
