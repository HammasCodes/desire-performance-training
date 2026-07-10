const PHONE_DISPLAY = "254-457-0210";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <p className="text-display text-base font-semibold tracking-wide">
          DESIRE <span className="text-crimson">PERFORMANCE</span> TRAINING
        </p>
        <p className="text-sm text-bone/50">
          5900 Franklin Ave Service Rd, Waco, TX 76710 &middot;{" "}
          <a href="tel:+12544570210" className="hover:text-crimson">
            {PHONE_DISPLAY}
          </a>
        </p>
        <p className="text-xs text-bone/40">
          &copy; {new Date().getFullYear()} Desire Performance Training. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
