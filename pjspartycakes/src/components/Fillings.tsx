const BUTTERCREAM = [
  "Vanilla",
  "Chocolate",
  "Strawberry",
  "Raspberry",
  "Passionfruit",
  "Coconut",
  "Chocolate Peanut Butter",
  "Coffee",
];

const CUSTARD = ["Bavarian Cream", "Black Forest Cherries", "Lemon"];

export default function Fillings() {
  return (
    <section id="fillings" className="bg-cream-dark py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-dark">
            Fillings &amp; Flavors
          </p>
          <h2 className="text-display mt-3 text-4xl font-bold text-ink sm:text-5xl">
            Choose Your Filling
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Every custom cake can be filled with our whipped buttercream or
            classic custard fillings.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gold/30 bg-parchment p-8 shadow-sm">
            <h3 className="text-display text-2xl font-bold text-crimson">
              Whipped Buttercream
            </h3>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
              {BUTTERCREAM.map((flavor) => (
                <li
                  key={flavor}
                  className="flex items-center gap-2 text-ink/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {flavor}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gold/30 bg-parchment p-8 shadow-sm">
            <h3 className="text-display text-2xl font-bold text-crimson">
              Custard Fillings
            </h3>
            <ul className="mt-6 grid grid-cols-1 gap-y-3">
              {CUSTARD.map((flavor) => (
                <li
                  key={flavor}
                  className="flex items-center gap-2 text-ink/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {flavor}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
