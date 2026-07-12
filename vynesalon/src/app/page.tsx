import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import TrustSignals from "@/components/TrustSignals";
import LocationHours from "@/components/LocationHours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <TrustSignals />
        <LocationHours />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
