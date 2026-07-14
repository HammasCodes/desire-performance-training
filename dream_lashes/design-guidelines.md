# Design Guidelines — Small Business Landing Pages

Read this before writing any HTML/CSS/JSX. Its job is to stop the model from producing
"AI slop" — the generic, templatey look every free coding model defaults to when given no
constraints.

## The One Rule

**If it could be any business in any city, it's wrong.** Every design decision below exists to
make the site look like it was hand-built for *this* specific owner, in *this* niche, not
generated from a SaaS-landing-page template.

---

## 1. Typography

- **Two fonts, max.** One for display/headings, one for body. Never three.
- **Never default to Inter for everything.** Inter is fine as a body font. It is a dead
  giveaway of AI-slop when it's also the display font. Pick a display font that matches the
  niche mood (see palette table below for pairings).
- Headline sizes should feel intentional, not just "big." Use a real type scale (e.g.
  14/16/20/28/40/56px or a similar ratio-based scale) — never eyeball random px values per
  heading.
- Line length for body text: 45–75 characters. Don't let paragraphs stretch full-width on
  desktop.

## 2. Color

- **Never ship the default purple-to-pink or blue-to-cyan gradient.** This is the single
  most obvious tell of an ungrounded AI build. If a gradient is used at all, it must be
  two adjacent, low-contrast hues pulled from the niche palette below — not a stock SaaS
  gradient.
- Build every palette around the niche, not a generic "professional blue":

| Niche | Palette direction | Example anchor hex |
|---|---|---|
| Bakery / cakes | Warm cream, dusty rose, terracotta | `#FBF3EA`, `#C97C5D`, `#8A5A44` |
| Lash / brow / beauty | Blush, soft black, warm gold | `#F7E9E3`, `#1C1917`, `#C9A15E` |
| Henna / mehndi | Deep maroon, gold, warm ivory | `#5C1A1A`, `#C9A227`, `#FAF3E7` |
| Nails | Bold but not neon — hot pink/black or sage/cream | varies by shop personality |
| Balloons / party decor | Playful but max 2 saturated colors + neutral | pick from their actual brand colors if visible in photos |
| Fitness / gym | High-contrast, energetic, dark base | `#111111`, `#E7FF4D` or similar |
| Trade/repair/contractor | Muted, trustworthy, no pastels | navy, charcoal, safety-orange accent only |

- Use a **60/30/10 split**: 60% neutral background, 30% secondary, 10% accent (buttons,
  links, highlights). Sites where every section is a different saturated color look amateur.
- Text contrast must pass WCAG AA (4.5:1 for body text) — check this, don't assume.

## 3. Layout & Spacing

- Use a consistent spacing scale (4/8/16/24/32/48/64/96px) — never arbitrary values like
  `13px` or `22px`.
- Generous whitespace beats a packed page. If every section is edge-to-edge with no
  breathing room, it reads as a template.
- **Break the center-everything habit.** Not every section needs centered text and a
  centered button. Left-align body copy. Offset images. Give the hero asymmetry if the
  niche supports it (e.g. photo-heavy niches like bakers/lash artists benefit from an
  image-led hero, not text-centered-over-gradient).
- One primary layout idea per section — don't cram feature grid + testimonial + stats +
  CTA into a single section.

## 4. Imagery

- **Real photos > tasteful placeholder > stock photography > AI-generated imagery.** In
  that order, always.
- If no real photos exist yet, use a clearly labeled placeholder block (e.g. a soft-colored
  rectangle with a small `[Add real photo]` caption) — do NOT fill the gap with generic
  stock photos of unrelated hands/faces/products that don't match the business's actual
  style. A wrong stock photo is worse than an honest placeholder.
- Never use the cliché "hands typing on a laptop with a coffee cup" stock photo, generic
  smiling-stock-model photography, or clip-art-style icon illustrations for a local service
  business. These instantly signal "template."

## 5. Anti-Patterns Checklist (reject the build if you see any of these)

- [ ] Purple/pink or blue/cyan default gradient anywhere
- [ ] `rounded-2xl` + drop-shadow on literally every card, with no variation
- [ ] Generic checkmark-icon feature list ("✓ Fast ✓ Reliable ✓ Affordable")
- [ ] Hero copy that says "Welcome to [Business Name]" as the headline
- [ ] Three-column icon+heading+paragraph grid used as the *only* layout idea on the page
- [ ] Emoji used as section icons (💅 ✨ 🎉) instead of real iconography or none at all
- [ ] Lorem-ipsum-shaped copy — vague claims with no specific detail about this business
- [ ] Fabricated testimonials, review counts, star ratings, or "10,000+ happy customers"
      style stats that weren't provided as real data
- [ ] A pricing table when no real pricing was given
- [ ] Stock "team of diverse professionals in an office" photography for a solo home-based
      artist

## 6. When Instructions Give You Real Data

If the build brief includes real business details (services, review themes, hours, contact
info) — as ours always will — treat every one of those as a hard constraint, not a
suggestion. Do not invent services, prices, star ratings, or testimonials beyond what's
given. Where the brief says "ask about X" or "placeholder," keep it honest rather than
filling the gap with invented specifics.
