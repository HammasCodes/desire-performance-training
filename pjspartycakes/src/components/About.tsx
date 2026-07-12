export default function About() {
  return (
    <section id="about" className="bg-cream py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-dark">
            Since 1976
          </p>
          <h2 className="text-display mt-3 text-4xl font-bold text-ink sm:text-5xl">
            Kelowna&apos;s Original Custom Cake Shop
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            For nearly fifty years, PJ&apos;s Party Cakes has been serving the
            Okanagan from right here in Kelowna. What started in 1976 has
            grown into a legendary local reputation — built one custom cake
            at a time, and led today by Darren and his dedicated team of
            cake artists.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            Every cake is custom made to order, never mass-produced. That
            attention to detail and creativity is what generations of
            Okanagan families have come to expect — and why so many keep
            coming back for every birthday, wedding, and milestone in
            between.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <span className="rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-sm font-semibold text-ink/80">
              Custom Made to Order
            </span>
            <span className="rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-sm font-semibold text-ink/80">
              Family Owned Since 1976
            </span>
            <span className="rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-sm font-semibold text-ink/80">
              Run by Darren
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-parchment to-cream-dark p-10 shadow-sm">
          <p className="text-script text-4xl text-crimson">Since 1976</p>
          <p className="text-display mt-6 text-2xl font-bold leading-snug text-ink">
            &ldquo;A legendary reputation for creative, detailed cake
            artistry — trusted by the Okanagan for generations.&rdquo;
          </p>
          <div className="mt-8 h-px w-full bg-gold/30" />
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-ink/60">
            Darren &middot; PJ&apos;s Party Cakes &middot; Kelowna, BC
          </p>
        </div>
      </div>
    </section>
  );
}
