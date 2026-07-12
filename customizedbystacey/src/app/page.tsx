import React from "react";
import Navbar from "src/components/Navbar";
import Hero from "src/components/Hero";
import Services from "src/components/Services";
import About from "src/components/About";
import Gallery from "src/components/Gallery";
import TrustSignals from "src/components/TrustSignals";
import Contact from "src/components/Contact";
import Footer from "src/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <TrustSignals />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
