const CAKES = [
  {
    emoji: "🎨",
    name: "Cartoon Cakes",
    desc: "Favorite characters brought to life in cake and icing, perfect for kids' birthdays.",
  },
  {
    emoji: "🗿",
    name: "Sculpted Cakes",
    desc: "Hand-sculpted 3D shapes and figures — anything you can imagine, we can carve and craft.",
  },
  {
    emoji: "💍",
    name: "Wedding Cakes",
    desc: "Elegant tiered designs custom-built to match your big day, from classic to modern.",
  },
  {
    emoji: "🎀",
    name: "Fondant Cakes",
    desc: "Smooth, polished fondant finishes with intricate detailing for a picture-perfect cake.",
  },
  {
    emoji: "📷",
    name: "Photo Cakes",
    desc: "Edible photo prints turn a favorite memory into a one-of-a-kind celebration centerpiece.",
  },
  {
    emoji: "🌀",
    name: "Topsy Turvy Cakes",
    desc: "Whimsical tilted tiers with playful angles for a cake that stands out at any party.",
  },
  {
    emoji: "🎂",
    name: "Classic Cakes",
    desc: "Timeless, beautifully finished cakes for birthdays, anniversaries, and everyday celebrations.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream-dark py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-dark">
            Custom Cake Artistry
          </p>
          <h2 className="text-display mt-3 text-4xl font-bold text-ink sm:text-5xl">
            A Cake for Every Celebration
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Every cake is custom made to order and hand-crafted by Darren and
            the team at PJ&apos;s Party Cakes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAKES.map((cake) => (
            <div
              key={cake.name}
              className="rounded-2xl border border-gold/30 bg-parchment p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-crimson/10 text-3xl">
                {cake.emoji}
              </div>
              <h3 className="text-display mt-5 text-xl font-bold text-ink">
                {cake.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {cake.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
