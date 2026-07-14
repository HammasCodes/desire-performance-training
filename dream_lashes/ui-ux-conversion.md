# UI/UX Guidelines — Conversion for Single-Page Local Business Sites

Read this alongside `design-guidelines.md`. That file governs how it looks; this one governs
how it works. The goal of every one of these builds is one specific action: get a visitor to
DM, call, or email the owner. Everything on the page should serve that goal.

## 1. The One-Job Rule

Each of these sites has exactly one conversion goal (usually "message on Instagram" or
"call/text"). Do not dilute it:

- **One primary CTA**, repeated at most 2–3 times down the page (hero, after trust signals,
  footer). Every instance of the primary CTA does the same action.
- No secondary CTAs that compete for attention (no "Learn More" buttons that go nowhere, no
  newsletter signup for a local lash artist).
- If a real secondary channel exists (phone number as backup to Instagram), style it
  visibly smaller/lower-emphasis than the primary CTA — don't give it equal visual weight.

## 2. Hero Section

- Value proposition must be understandable in under 5 seconds: what they do + where +
  what makes them worth messaging.
- Avoid "Welcome to X" as a headline — lead with the outcome or specialty instead
  (e.g. "Natural-looking lash extensions in Hutto" beats "Welcome to Hutto Lash Co").
- CTA button copy should match the actual action: "Message on Instagram," not generic
  "Get Started" or "Learn More."
- Don't bury the CTA below the fold. It should be visible without scrolling on mobile.

## 3. Information Architecture (single page, in this order)

1. Hero — who, what, where, one CTA
2. Services — scannable list, not paragraphs
3. About — humanizes the owner, builds trust, 2–4 sentences max
4. Trust signals — real review sentiment, placed *before* the visitor has to make a decision,
   not just dumped at the bottom
5. Gallery — visual proof (or honest placeholder)
6. Location & hours — answer "can I actually go there / reach them right now"
7. Contact — restate the CTA clearly, this is the last thing before they leave the page

Don't reorder this without a reason — visitors scan local-business pages in roughly this
sequence, and putting trust signals after contact info means most people never see them.

## 4. Mobile-First, Actually

Assume 70%+ of traffic is on a phone, because for local beauty/service businesses that's
almost always true.

- Design at 375px width first, then expand — not the reverse.
- Every tappable element (buttons, phone numbers, Instagram links) needs a minimum 44×44px
  tap target with real spacing around it, not text-sized links crammed together.
- Phone numbers must be `tel:` links. Instagram handles must be real `https://instagram.com/`
  links, not plain text.
- No hover-dependent interactions (flip cards, hover-reveal menus) — nothing on a phone can
  hover.
- Test that the hero CTA is reachable with a thumb without scrolling on a standard phone
  viewport.

## 5. Trust Signals That Actually Work

- Paraphrase real review sentiment in the client's own concerns, not marketing-speak
  ("she explained every step, so I wasn't nervous" beats "5-star customer service").
- 2–3 specific, real sentiments beat 10 generic ones. Specificity is what makes it credible.
- Never fabricate star ratings, review counts, or client names if they weren't provided.
- If the business is new with few reviews, say something honest and low-key instead of
  padding with invented volume ("a growing local favorite" beats a fake "500+ 5-star
  reviews").

## 6. Forms vs. Direct Contact

- **Default to no contact form** for solo/small local businesses whose owners actually work
  through Instagram DM, text, or phone. A form adds friction and most won't check a form
  inbox as reliably as their own phone.
- Only build a form if the brief explicitly says the business uses one (an existing booking
  system link is fine — link out to it, don't rebuild it).
- If you do build a form: 3 fields max (name, contact info, one message field). Every
  additional field measurably drops completion.

## 7. Performance & Technical Baseline

- Single page, no unnecessary client-side routing.
- Compress/lazy-load all images; don't ship multi-MB hero images.
- No animation libraries for a static local-business page unless the brief calls for it —
  a few CSS transitions (hover states, fade-ins on scroll) are enough. Heavy JS animation
  slows first load for no conversion benefit.
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) — helps both
  accessibility and SEO for local search.
- Every image needs real `alt` text describing what it actually shows, not `alt="image1"`.

## 8. Pre-Ship Checklist

- [ ] One clear primary CTA, consistent action, visible above the fold
- [ ] Real contact info only — no fabricated forms, emails, or booking systems that don't exist
- [ ] Mobile tap targets ≥44px with real spacing
- [ ] Hours/location easy to find, not buried
- [ ] Trust signals placed before the final CTA, not just at the bottom
- [ ] No dead links, no placeholder Lorem ipsum left in
- [ ] Passes a squint test: does it look like a specific business, or could it be anyone?
