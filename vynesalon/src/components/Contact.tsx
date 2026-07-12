"use client";

import { useState } from "react";
import { Phone, Instagram, Send, CheckCircle2, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Signature Haircut",
    date: "",
    time: "",
    specialRequests: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    "Vyne Signature Haircut",
    "Classic Gentleman's Cut",
    "Buzz Cut & Fade",
    "Vyne Beard Design",
    "Classic Beard Trim",
    "Traditional Hot Towel Shave",
    "Vyne Royal Shave",
    "Scalp Detox & Therapy",
    "Keratin Smooth Treatment",
    "Camouflage Hair Coloring",
    "The Vyne Ritual (Combo)",
    "The Trend-Conscious VIP Package",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create pre-filled WhatsApp message
    const whatsappBase = "https://api.whatsapp.com/send";
    const phoneNum = "97167416264"; // UAE Country Code +971, Number: 67416264
    
    const message = `Hello VYNE SALON, I would like to request an appointment:
- *Name*: ${formData.name}
- *Phone*: ${formData.phone}
- *Service*: ${formData.service}
- *Date*: ${formData.date}
- *Preferred Time*: ${formData.time}
${formData.specialRequests ? `- *Special Requests*: ${formData.specialRequests}` : ""}`;

    const encodedText = encodeURIComponent(message);
    const whatsappURL = `${whatsappBase}?phone=${phoneNum}&text=${encodedText}`;
    
    setIsSubmitted(true);
    
    // Wait a brief moment then open WhatsApp
    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setIsSubmitted(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-brand-charcoal-light relative">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Contact Information (5 columns) */}
          <div className="lg:col-span-5">
            <span className="font-sans text-[0.7rem] tracking-[0.3em] text-brand-gold font-semibold uppercase block mb-3">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide mb-6">
              BOOK YOUR EXPERIENCE
            </h2>
            <div className="w-16 h-[2px] bg-brand-gold mb-8" />
            
            <p className="font-sans text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-10">
              Ready to elevate your look? Call us directly, send an Instagram DM, or fill out the quick booking form to lock in your appointment via WhatsApp.
            </p>

            {/* Contact Channels Grid */}
            <div className="space-y-6">
              {/* Call Card */}
              <a
                href="tel:+97167416264"
                className="group flex items-center space-x-5 p-6 bg-brand-charcoal border border-brand-gold/5 hover:border-brand-gold/25 rounded-sm transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="p-3.5 bg-brand-green rounded-sm border border-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-charcoal-dark transition-all duration-300">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="font-sans text-[0.65rem] text-gray-500 uppercase tracking-widest block mb-0.5">
                    Click to Call Us
                  </span>
                  <span className="font-sans font-bold text-white tracking-wider text-base sm:text-lg group-hover:text-brand-gold transition-colors duration-300">
                    +971 6 741 6264
                  </span>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href="https://www.instagram.com/vynesalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-5 p-6 bg-brand-charcoal border border-brand-gold/5 hover:border-brand-gold/25 rounded-sm transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="p-3.5 bg-brand-green rounded-sm border border-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-charcoal-dark transition-all duration-300">
                  <Instagram size={22} />
                </div>
                <div>
                  <span className="font-sans text-[0.65rem] text-gray-500 uppercase tracking-widest block mb-0.5">
                    Direct Message
                  </span>
                  <span className="font-sans font-bold text-white tracking-wider text-base sm:text-lg group-hover:text-brand-gold transition-colors duration-300">
                    @vynesalon
                  </span>
                </div>
              </a>

              {/* WhatsApp Quick Note */}
              <div className="p-6 bg-brand-green/20 border border-brand-gold/10 rounded-sm">
                <span className="font-sans text-xs text-brand-gold font-semibold tracking-wider block mb-1">
                  ⚡ INSTANT BOOKINGS
                </span>
                <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
                  Prefer direct messaging? Send a DM on Instagram for quick responses and customization requests.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Booking Form (7 columns) */}
          <div className="lg:col-span-7 bg-brand-charcoal border border-brand-gold/10 hover:border-brand-gold/25 p-8 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500">
            
            {isSubmitted ? (
              <div className="py-16 text-center space-y-6 animate-fade-in">
                <div className="flex justify-center">
                  <CheckCircle2 size={64} className="text-brand-gold animate-bounce" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                  REDIRECTING TO WHATSAPP...
                </h3>
                <p className="font-sans text-sm text-gray-400 max-w-sm mx-auto font-light leading-relaxed">
                  We are opening WhatsApp with your reservation details pre-filled. Simply click "Send" to finalize your booking with our salon coordinator.
                </p>
                <div className="w-12 h-1 bg-brand-gold mx-auto rounded-full animate-pulse" />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-display text-xl font-semibold text-white tracking-widest uppercase mb-4 text-center">
                  Online Reservation
                </h3>

                {/* Grid Inputs: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-sans text-xs tracking-wider uppercase text-gray-400 font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-brand-charcoal-light border border-brand-gold/10 focus:border-brand-gold text-white font-sans text-sm px-4 py-3 rounded-sm outline-none transition-colors duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="font-sans text-xs tracking-wider uppercase text-gray-400 font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g. +971 50 123 4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-brand-charcoal-light border border-brand-gold/10 focus:border-brand-gold text-white font-sans text-sm px-4 py-3 rounded-sm outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label htmlFor="service" className="font-sans text-xs tracking-wider uppercase text-gray-400 font-semibold">
                    Select Grooming Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-brand-charcoal-light border border-brand-gold/10 focus:border-brand-gold text-white font-sans text-sm px-4 py-3 rounded-sm outline-none transition-colors duration-300"
                  >
                    {servicesList.map((service, i) => (
                      <option key={i} value={service} className="bg-brand-charcoal-light text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Grid Inputs: Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="date" className="font-sans text-xs tracking-wider uppercase text-gray-400 font-semibold">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-brand-charcoal-light border border-brand-gold/10 focus:border-brand-gold text-white font-sans text-sm px-4 py-3 rounded-sm outline-none transition-colors duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="time" className="font-sans text-xs tracking-wider uppercase text-gray-400 font-semibold">
                      Preferred Time (9AM - 12AM)
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-brand-charcoal-light border border-brand-gold/10 focus:border-brand-gold text-white font-sans text-sm px-4 py-3 rounded-sm outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <label htmlFor="specialRequests" className="font-sans text-xs tracking-wider uppercase text-gray-400 font-semibold">
                    Special Instructions (Optional)
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    rows={3}
                    placeholder="Describe specific styling requests, hair type details, or barber preferences..."
                    value={formData.specialRequests}
                    onChange={handleChange}
                    className="w-full bg-brand-charcoal-light border border-brand-gold/10 focus:border-brand-gold text-white font-sans text-sm px-4 py-3 rounded-sm outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-brand-gold to-brand-gold-accent hover:from-brand-gold-light hover:to-brand-gold text-brand-charcoal-dark font-sans font-bold text-xs tracking-widest uppercase py-4 px-6 rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(197,168,128,0.2)] hover:shadow-[0_0_25px_rgba(197,168,128,0.35)] cursor-pointer"
                >
                  <MessageCircle size={16} />
                  <span>Send Booking Request</span>
                </button>

                <span className="font-sans text-[0.6rem] text-gray-500 text-center block leading-relaxed pt-2">
                  * Clicking button opens WhatsApp with pre-filled details. Your appointment is officially secured once our coordinator replies.
                </span>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
