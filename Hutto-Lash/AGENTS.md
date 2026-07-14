# Project Instructions

This project builds single-page landing sites for small local businesses (lash artists,
bakers, henna artists, nail salons, etc.) that currently have no real website — only
Instagram or a bare booking-platform page. Each site is a free demo built to show the owner
what a real site could look like, as part of a cold-outreach campaign.

## Before writing any code

1. Read `skills/design-guidelines.md` in full.
2. Read `skills/ui-ux-conversion.md` in full.
3. Read the build brief provided in the prompt for this specific business — it contains
   real services, real review sentiment, real hours, and the real contact channel. Treat
   every detail in it as ground truth. Do not invent services, prices, testimonials, or
   contact methods beyond what's given.

## Non-negotiables

- No purple/pink or blue/cyan default AI-gradient anywhere.
- No fabricated reviews, star ratings, review counts, or pricing.
- Contact CTA must use the business's real channel (Instagram DM / phone / email) — never
  invent a contact form for a business that doesn't use one.
- Mobile-first. Assume most visitors are on a phone.
- Run the Anti-Patterns Checklist in `design-guidelines.md` section 5 and the Pre-Ship
  Checklist in `ui-ux-conversion.md` section 8 before considering a build done.

## Tech defaults (override only if the brief says otherwise)

- Next.js + Tailwind CSS
- Single page, no client-side routing
- Fast-loading, lazy-loaded images, semantic HTML

## Output

When a build is done, do a final pass and describe in plain language:
- Which anti-patterns you checked for and confirmed you avoided
- Where you left an honest placeholder (e.g. gallery photos) instead of guessing
- Anything in the brief you couldn't fully satisfy and why
