const HOURS = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "12:00 PM – 4:00 PM" },
  { day: "Wednesday", time: "12:00 PM – 4:00 PM" },
  { day: "Thursday", time: "12:00 PM – 4:00 PM" },
  { day: "Friday", time: "12:00 PM – 4:00 PM" },
  { day: "Saturday", time: "12:00 PM – 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function LocationHours() {
  return (
    <section id="location" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-dark">
            Visit Us
          </p>
          <h2 className="text-display mt-3 text-4xl font-bold text-ink sm:text-5xl">
            Location &amp; Hours
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-gold/30 bg-parchment p-8 shadow-sm">
            <h3 className="text-display text-xl font-bold text-crimson">
              Where to Find Us
            </h3>
            <p className="mt-4 text-lg text-ink/80">
              651 Grandview Rd
              <br />
              Kelowna, BC
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=651+Grandview+Rd+Kelowna+BC"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-crimson hover:text-crimson-dark"
            >
              Get Directions &rarr;
            </a>
          </div>

          <div className="rounded-2xl border border-gold/30 bg-parchment p-8 shadow-sm">
            <h3 className="text-display text-xl font-bold text-crimson">
              Shop Hours
            </h3>
            <ul className="mt-4 divide-y divide-gold/20">
              {HOURS.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between py-2 text-ink/80"
                >
                  <span className="font-semibold">{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ink/50">
              Hours may vary — please phone ahead before visiting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
