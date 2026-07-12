import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Fillings from "@/components/Fillings";
import TrustSignals from "@/components/TrustSignals";
import LocationHours from "@/components/LocationHours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Fillings />
        <TrustSignals />
        <LocationHours />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
