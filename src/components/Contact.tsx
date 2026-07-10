const PHONE_DISPLAY = "254-457-0210";
const PHONE_TEL = "tel:+12544570210";
const ADDRESS = "5900 Franklin Ave Service Rd, Waco, TX 76710";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink py-24 sm:py-32"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,6,19,0.16),transparent_60%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-crimson">
          Ready to Start?
        </p>
        <h2 className="text-display mt-3 text-4xl font-bold uppercase leading-tight sm:text-5xl md:text-6xl">
          Book Your First Session Today
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-bone/70">
          Call now to speak with a coach and get scheduled — no long
          commitments, no confusing sign-up forms, just a real conversation
          about your goals.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={PHONE_TEL}
            className="group inline-flex items-center justify-center gap-3 rounded-sm bg-crimson px-10 py-5 text-xl font-bold uppercase tracking-wider text-white transition hover:bg-crimson-dark hover:shadow-[0_0_35px_6px_rgba(227,6,19,0.35)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden
            >
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02Z" />
            </svg>
            {PHONE_DISPLAY}
          </a>
          <p className="text-sm uppercase tracking-wider text-bone/50">
            Tap to call — Mon–Fri, 6:00 AM – 5:00 PM
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl gap-6 border-t border-white/10 pt-10 text-left sm:grid-cols-2">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-bone/50">
              Visit
            </h3>
            <p className="mt-2 text-bone/85">{ADDRESS}</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-bone/50">
              Call
            </h3>
            <a
              href={PHONE_TEL}
              className="mt-2 block font-semibold text-bone/85 hover:text-crimson"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
