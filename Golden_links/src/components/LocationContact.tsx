"use client";

import React, { useState } from "react";
import { MapPin, Instagram, Mail, Phone, Calendar, Send, Check } from "lucide-react";

export default function LocationContact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    service: "bracelet",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <section id="location" className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-gold-primary uppercase block mb-3">
            Find Us & Book
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-white mb-4">
            Location & Booking
          </h2>
          <div className="w-16 h-0.5 bg-gold-primary mx-auto mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto font-light text-sm sm:text-base">
            Visit us inside the Boise Town Square Mall for walk-ins, or request an appointment below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Location & Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6">
              <h3 className="font-serif text-2xl font-semibold text-white">Golden Links Studio</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gold-primary/10 rounded-lg text-gold-primary mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Address</h4>
                    <p className="text-xs sm:text-sm text-gray-300 font-light mt-1">
                      350 N Milwaukee St Ste 5501<br />
                      Boise, ID 83704
                    </p>
                    <p className="text-2xs text-gold-champagne font-light mt-2 italic">
                      Inside Boise Town Square Mall, Upper Level (Near Macy's & Food Court)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gold-primary/10 rounded-lg text-gold-primary mt-1">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Instagram DM</h4>
                    <a
                      href="https://instagram.com/goldenlinks.studio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-gold-champagne hover:underline font-medium block mt-1"
                    >
                      @goldenlinks.studio
                    </a>
                    <p className="text-2xs text-gray-400 font-light">
                      Fastest response for walk-in queues and custom chain designs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gold-primary/10 rounded-lg text-gold-primary mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Email</h4>
                    <p className="text-xs sm:text-sm text-gray-300 font-light mt-1">
                      hello@goldenlinks.studio
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gold-primary/10 rounded-lg text-gold-primary mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Phone</h4>
                    <p className="text-xs sm:text-sm text-gray-300 font-light mt-1">
                      (208) 555-0147
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Styled Map Graphic Mockup */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
              <div className="aspect-[16/9] bg-luxury-charcoal rounded-xl relative border border-white/5 overflow-hidden">
                
                {/* Stylized grid pattern representing map */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                
                {/* Boise Mall boundaries placeholder */}
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/2 border border-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
                    Boise Town Square
                  </span>
                </div>
                
                {/* Pins and Labels */}
                <div className="absolute top-1/3 left-1/3 flex flex-col items-center">
                  <div className="w-2.5 h-2.5 bg-gray-600 rounded-full animate-ping absolute" />
                  <div className="w-2.5 h-2.5 bg-gray-500 rounded-full" />
                  <span className="text-[8px] text-gray-400 mt-1 uppercase">Macy's</span>
                </div>

                <div className="absolute top-[55%] left-[55%] flex flex-col items-center z-20">
                  <div className="w-3.5 h-3.5 bg-gold-primary rounded-full animate-ping absolute opacity-70" />
                  <div className="p-1 bg-luxury-black border border-gold-primary rounded-full text-gold-primary relative z-10 shadow-lg">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="text-[9px] font-bold text-gold-primary mt-1 uppercase tracking-wider bg-luxury-black/90 px-2 py-0.5 rounded border border-gold-primary/20 backdrop-blur-md">
                    Golden Links
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 bg-luxury-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5">
                  <span className="text-3xs font-semibold text-white block uppercase">N Milwaukee St</span>
                  <span className="text-4xs text-gray-500 block">Boise, ID 83704</span>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=350+N+Milwaukee+St+Ste+5501,+Boise,+ID+83704"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center mt-4 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-gold-primary hover:text-white uppercase transition-colors"
              >
                Get Directions on Google Maps
                <MapPin className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Contact / Appointment Inquiry Form Column */}
          <div id="contact" className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-gold-primary/15 relative">
              
              {formSubmitted ? (
                <div className="text-center py-16 animate-fade-in">
                  <div className="w-16 h-16 bg-gold-primary/10 border border-gold-primary/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8 text-gold-primary animate-[scale-up_0.5s]" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-4">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto font-light leading-relaxed mb-8">
                    Thank you, <span className="font-semibold text-gold-champagne">{formData.name}</span>. We've received your request for a permanent jewelry session. We'll reach out via email or DM to finalize your slot!
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-semibold tracking-widest uppercase text-gold-primary hover:underline"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-white mb-2">Book Your Spark</h3>
                    <p className="text-xs sm:text-sm text-gray-400 font-light">
                      Fill out this quick form or send a DM on Instagram to schedule your appointment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-3xs font-semibold uppercase tracking-wider text-gold-champagne mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ashley Johnson"
                        className="w-full bg-luxury-black border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-gold-primary transition-colors font-light"
                      />
                    </div>

                    <div>
                      <label className="block text-3xs font-semibold uppercase tracking-wider text-gold-champagne mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full bg-luxury-black border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-gold-primary transition-colors font-light"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-3xs font-semibold uppercase tracking-wider text-gold-champagne mb-2">
                        Instagram Handle (Optional)
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-3 text-xs sm:text-sm text-gray-500 font-light">@</span>
                        <input
                          type="text"
                          value={formData.instagram}
                          onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                          placeholder="username"
                          className="w-full bg-luxury-black border border-white/10 rounded-xl pl-8 pr-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-gold-primary transition-colors font-light"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-3xs font-semibold uppercase tracking-wider text-gold-champagne mb-2">
                        Preferred Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-luxury-black border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-gold-primary transition-colors font-light"
                      >
                        <option value="bracelet">Permanent Bracelet</option>
                        <option value="anklet">Permanent Anklet</option>
                        <option value="necklace">Permanent Necklace</option>
                        <option value="ring">Permanent Ring</option>
                        <option value="multiple">Group / Multi-Weld Session</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-3xs font-semibold uppercase tracking-wider text-gold-champagne mb-2">
                      Inquiry Details (Preferred times or chain preferences)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Let us know if you're booking for a specific occasion (e.g. birthday, anniversary) or have styling questions..."
                      className="w-full bg-luxury-black border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-gold-primary transition-colors font-light resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs font-bold tracking-widest uppercase bg-gold-primary text-luxury-black hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                  >
                    <Send className="h-3.5 w-3.5" />
                    Submit Request
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-4 border-t border-white/5">
                    <span className="text-3xs text-gray-500 uppercase tracking-widest">Or book instantly via</span>
                    <a
                      href="https://instagram.com/goldenlinks.studio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-2xs font-semibold text-gold-primary hover:text-white transition-colors"
                    >
                      <Instagram className="h-3.5 w-3.5" />
                      Instagram DM
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
