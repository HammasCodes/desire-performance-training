import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import TrustSignals from "@/components/TrustSignals";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-luxury-black text-gray-100 font-sans selection:bg-gold-primary selection:text-luxury-black">
      {/* Dynamic Header */}
      <Navbar />

      {/* Main content blocks */}
      <main className="flex-grow">
        {/* Elegant Hero header */}
        <Hero />

        {/* Services & Materials selection */}
        <Services />

        {/* Brand story and Mall benefits */}
        <About />

        {/* Chain style display grid */}
        <Gallery />

        {/* Stars, warranties and stats */}
        <TrustSignals />

        {/* Mock Map, Location details and Booking request form */}
        <LocationContact />
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}
