const PILLARS = [
  {
    title: "Personalized Attention",
    description:
      "Every program is built around you — not a generic template. Small-group and one-on-one formats mean real coaching, not just supervision.",
  },
  {
    title: "Clean, Professional Facility",
    description:
      "A well-maintained, purpose-built space with quality equipment — no crowded big-box gym chaos, just a focused place to train.",
  },
  {
    title: "Discipline & Respect",
    description:
      "A structured, respectful training culture where hard work is expected and every client — from first-timers to competitive athletes — is coached with integrity.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-crimson">
            About Desire Performance Training
          </p>
          <h2 className="text-display mt-3 text-4xl font-bold uppercase leading-tight sm:text-5xl">
            A Gym Built On
            <br />
            <span className="text-crimson">Standards.</span>
          </h2>
          <p className="mt-6 text-lg text-bone/70">
            Desire Performance Training is Waco&apos;s home for personalized
            strength and performance coaching. We&apos;re not another
            crowded chain gym — we&apos;re a focused, professional facility
            where every client gets real attention, every session has a
            purpose, and every rep is coached with discipline and respect.
          </p>
          <p className="mt-4 text-lg text-bone/70">
            Whether you&apos;re chasing your first pull-up, prepping for a
            season, or bringing your kids in to build confidence the right
            way, you&apos;ll train in a clean, well-run environment built to
            bring out your best.
          </p>
        </div>

        <div className="grid gap-5">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex gap-5 rounded-sm border border-white/10 bg-steel/60 p-6"
            >
              <span className="mt-1 h-full w-1 shrink-0 self-stretch bg-crimson" />
              <div>
                <h3 className="text-display text-xl font-bold uppercase tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-bone/70">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
