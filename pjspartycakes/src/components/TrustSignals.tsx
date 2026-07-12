const SIGNALS = [
  {
    stat: "50 Years",
    label: "In Business Since 1976",
  },
  {
    stat: "Legendary",
    label: "Reputation for Creativity & Detail",
  },
  {
    stat: "Generations",
    label: "Of Loyal Okanagan Customers",
  },
];

export default function TrustSignals() {
  return (
    <section className="bg-crimson py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
          {SIGNALS.map((signal) => (
            <div key={signal.label}>
              <p className="text-display text-4xl font-bold text-gold-light">
                {signal.stat}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-parchment/85">
                {signal.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
