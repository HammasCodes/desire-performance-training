export default function Contact() {
  return (
    <section id="contact" className="bg-crimson-dark py-24">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-light">
          Order Your Custom Cake
        </p>
        <h2 className="text-display mt-3 text-4xl font-bold text-parchment sm:text-5xl">
          Let&apos;s Create Something Sweet
        </h2>
        <p className="mt-5 text-lg text-parchment/80">
          Reach out by phone or Instagram to start planning your custom
          cake with PJ&apos;s Party Cakes.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+12507631144"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-bold uppercase tracking-wider text-ink shadow-lg transition hover:bg-gold-light sm:w-auto"
          >
            Call 250-763-1144
          </a>
          <a
            href="https://instagram.com/pjspartycakes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-parchment/40 px-8 py-4 text-base font-semibold uppercase tracking-wider text-parchment transition hover:border-parchment hover:bg-parchment/10 sm:w-auto"
          >
            DM @pjspartycakes
          </a>
        </div>

        <p className="mt-8 inline-block rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-sm font-semibold text-gold-light">
          Please phone first to order
        </p>
      </div>
    </section>
  );
}
