export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-24"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,6,19,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(227,6,19,0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-screen [background-image:repeating-linear-gradient(45deg,#fff_0,#fff_1px,transparent_1px,transparent_14px)]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="animate-in">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-crimson/40 bg-crimson/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-crimson">
            Waco, Texas
          </p>

          <h1 className="text-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Train With
            <br />
            <span className="text-crimson">Purpose.</span>
            <br />
            Perform With
            <br />
            <span className="text-outline">Confidence.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg text-bone/75 sm:text-xl">
            Desire Performance Training delivers personalized, one-on-one
            coaching built around your goals — strength, speed, and
            discipline, forged in a clean, professional facility right here
            in Waco.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-crimson px-8 py-4 text-base font-bold uppercase tracking-wider text-white shadow-[0_0_0_0_rgba(227,6,19,0.5)] transition hover:bg-crimson-dark hover:shadow-[0_0_30px_5px_rgba(227,6,19,0.35)]"
            >
              Book Your First Session
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
            <a
              href="tel:+12544570210"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-bone/25 px-8 py-4 text-base font-semibold uppercase tracking-wider text-bone/90 transition hover:border-bone/60 hover:bg-white/5"
            >
              Call 254-457-0210
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="text-display text-3xl font-bold text-crimson">1:1</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-bone/60">
                Personalized Coaching
              </dd>
            </div>
            <div>
              <dt className="text-display text-3xl font-bold text-crimson">All</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-bone/60">
                Ages &amp; Levels
              </dd>
            </div>
            <div>
              <dt className="text-display text-3xl font-bold text-crimson">100%</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-bone/60">
                Discipline &amp; Respect
              </dd>
            </div>
          </dl>
        </div>

        <div className="animate-in relative hidden aspect-[4/5] w-full max-w-md justify-self-end overflow-hidden rounded-sm border border-white/10 bg-steel lg:block">
          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(227,6,19,0.25),rgba(10,10,10,0.9))]" />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <p className="text-display text-2xl font-bold uppercase leading-tight text-white">
              Every Rep.
              <br />
              Every Session.
              <br />
              <span className="text-crimson">On Purpose.</span>
            </p>
          </div>
          <div className="absolute right-6 top-6 h-16 w-16 rounded-full border-2 border-crimson/60" />
          <div className="absolute right-10 top-10 h-8 w-8 rounded-full bg-crimson" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink to-transparent" />
    </section>
  );
}
