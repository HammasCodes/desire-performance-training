export default function Footer() {
  return (
    <footer className="bg-ink py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 text-center sm:px-8">
        <p className="text-display text-lg font-bold text-parchment">
          PJ&apos;s Party Cakes
        </p>
        <p className="text-sm text-parchment/60">
          651 Grandview Rd, Kelowna, BC &middot; 250-763-1144
        </p>
        <p className="text-xs uppercase tracking-wider text-parchment/40">
          Kelowna&apos;s Original Custom Cake Shop &middot; Serving the
          Okanagan Since 1976
        </p>
        <p className="mt-4 text-xs text-parchment/30">
          &copy; {new Date().getFullYear()} PJ&apos;s Party Cakes. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
