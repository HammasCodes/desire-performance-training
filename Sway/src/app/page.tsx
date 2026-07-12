import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Artists from "@/components/Artists";
import Services from "@/components/Services";
import About from "@/components/About";
import TrustSignals from "@/components/TrustSignals";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-charcoal-950 font-sans selection:bg-gold-amber selection:text-black">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Artists Section */}
        <Artists />

        {/* Services Section */}
        <Services />

        {/* About Section */}
        <About />

        {/* Trust Signals & Reviews Section */}
        <TrustSignals />

        {/* Location & Contact Section */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
