export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-cream pt-28"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(156,28,46,0.10),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(201,152,47,0.16),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 top-0 h-2 bg-[repeating-linear-gradient(90deg,var(--color-crimson)_0,var(--color-crimson)_20px,var(--color-gold)_20px,var(--color-gold)_40px)]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="animate-in">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
            Kelowna&apos;s Original Custom Cake Shop
          </p>

          <h1 className="text-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
            Fifty Years of
            <br />
            <span className="text-crimson">Cake Artistry</span>
            <br />
            in the Okanagan
          </h1>

          <p className="mt-7 max-w-xl text-lg text-ink/75 sm:text-xl">
            Since 1976, PJ&apos;s Party Cakes has been Kelowna&apos;s trusted name
            for custom-made cartoon, sculpted, wedding, and fondant cakes —
            crafted by hand, made to order, one celebration at a time.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-8 py-4 text-base font-bold uppercase tracking-wider text-parchment shadow-[0_8px_24px_-6px_rgba(156,28,46,0.5)] transition hover:bg-crimson-dark"
            >
              Order Your Custom Cake
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
            <a
              href="tel:+12507631144"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-4 text-base font-semibold uppercase tracking-wider text-ink/90 transition hover:border-crimson/50 hover:text-crimson"
            >
              Call 250-763-1144
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-gold/30 pt-8">
            <div>
              <dt className="text-display text-3xl font-bold text-crimson">
                50
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-ink/60">
                Years in Business
              </dd>
            </div>
            <div>
              <dt className="text-display text-3xl font-bold text-crimson">
                1976
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-ink/60">
                Serving the Okanagan
              </dd>
            </div>
            <div>
              <dt className="text-display text-3xl font-bold text-crimson">
                100%
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-ink/60">
                Custom Made to Order
              </dd>
            </div>
          </dl>
        </div>

        <div className="animate-in relative hidden aspect-[4/5] w-full max-w-md justify-self-end overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-br from-crimson-dark via-crimson to-crimson-light shadow-2xl lg:block">
          <div
            className="absolute inset-0 opacity-[0.08] mix-blend-overlay [background-image:repeating-linear-gradient(45deg,#fff_0,#fff_1px,transparent_1px,transparent_14px)]"
            aria-hidden
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <p className="text-script text-3xl leading-tight text-gold-light">
              Happy Birthday!
            </p>
            <p className="text-display mt-4 text-2xl font-bold uppercase leading-tight text-parchment">
              Made By Hand.
              <br />
              Made With Love.
              <br />
              <span className="text-gold-light">Since 1976.</span>
            </p>
          </div>
          <div className="absolute right-6 top-6 h-16 w-16 rounded-full border-2 border-gold-light/70" />
          <div className="absolute right-10 top-10 h-8 w-8 rounded-full bg-gold-light/80" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-cream-dark/60 to-transparent" />
    </section>
  );
}
