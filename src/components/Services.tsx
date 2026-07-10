const SERVICES = [
  {
    tag: "01",
    title: "Personal Training",
    description:
      "One-on-one sessions tailored to your body, your schedule, and your goals — whether that's fat loss, muscle, or simply moving better every day.",
    points: ["Custom programming", "Form & technique coaching", "Flexible scheduling"],
  },
  {
    tag: "02",
    title: "Performance Coaching",
    description:
      "Sport-specific speed, power, and conditioning work for athletes who want to outwork the competition and stay injury-free doing it.",
    points: ["Speed & agility", "Strength & power", "Injury prevention"],
  },
  {
    tag: "03",
    title: "Kids & Youth Training",
    description:
      "A structured, encouraging program that builds strong fundamentals, confidence, and discipline in a respectful, well-supervised environment parents trust.",
    points: ["Age-appropriate coaching", "Discipline & respect", "Confidence building"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-crimson">
            What We Offer
          </p>
          <h2 className="text-display mt-3 text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Training Built Around You
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col rounded-sm border border-white/10 bg-ink p-8 transition duration-300 hover:-translate-y-1 hover:border-crimson/50"
            >
              <span className="text-display text-5xl font-bold text-white/10 transition group-hover:text-crimson/25">
                {service.tag}
              </span>
              <h3 className="text-display mt-4 text-2xl font-bold uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="mt-4 flex-1 text-bone/70">{service.description}</p>
              <ul className="mt-6 space-y-2 border-t border-white/10 pt-6">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-bone/80">
                    <span className="h-1.5 w-1.5 shrink-0 bg-crimson" />
                    {point}
                  </li>
                ))}
              </ul>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-crimson transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
