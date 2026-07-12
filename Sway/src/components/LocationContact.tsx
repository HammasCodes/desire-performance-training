import { MapPin, Phone, Instagram, Calendar, Clock } from "lucide-react";

export default function LocationContact() {
  const hours = [
    { day: "Monday", status: "Closed", active: false },
    { day: "Tuesday", status: "12:00 PM - 8:00 PM", active: true },
    { day: "Wednesday", status: "12:00 PM - 8:00 PM", active: true },
    { day: "Thursday", status: "12:00 PM - 8:00 PM", active: true },
    { day: "Friday", status: "12:00 PM - 9:00 PM", active: true },
    { day: "Saturday", status: "12:00 PM - 9:00 PM", active: true },
    { day: "Sunday", status: "Closed", active: false },
  ];

  return (
    <section id="location" className="py-24 bg-charcoal-900/40 relative bg-noise">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-charcoal-950 to-transparent pointer-events-none" />

      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs font-bold tracking-[0.3em] text-gold-amber uppercase mb-3">
            Come Visit Us
          </h2>
          <h3 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Location, Hours & Booking
          </h3>
          <div className="h-1 w-16 bg-gold-amber mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-base sm:text-lg">
            Ready to book a consultation or check out the shop? Give us a call, send an Instagram DM, or drop by during walk-in hours!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Hours Card */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            {/* Quick Contact Box */}
            <div className="p-8 rounded-3xl bg-charcoal-900 border border-charcoal-800 shadow-xl shadow-black/25">
              <h4 className="font-serif text-2xl font-bold text-white mb-6">Get in Touch</h4>
              
              <div className="space-y-6">
                <a
                  href="tel:256-417-5551"
                  className="flex items-center gap-4 group p-3 rounded-2xl bg-charcoal-950 border border-charcoal-800 hover:border-gold-amber/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-amber/10 border border-gold-amber/25 flex items-center justify-center text-gold-amber group-hover:bg-gold-amber group-hover:text-black transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-gray-400">Call the Studio</p>
                    <p className="text-base font-bold text-white group-hover:text-gold-amber transition-colors">256-417-5551</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/sway_art"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-3 rounded-2xl bg-charcoal-950 border border-charcoal-800 hover:border-gold-amber/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-amber/10 border border-gold-amber/25 flex items-center justify-center text-gold-amber group-hover:bg-gold-amber group-hover:text-black transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-gray-400">Instagram DM</p>
                    <p className="text-base font-bold text-white group-hover:text-gold-amber transition-colors">@sway_art</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-gold-amber/10 border border-gold-amber/25 flex items-center justify-center text-gold-amber flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-gray-400">Studio Address</p>
                    <p className="text-sm font-bold text-white leading-relaxed">
                      1004 Jordan Ln NW #8<br />
                      Huntsville, AL 35816
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Box */}
            <div className="p-8 rounded-3xl bg-charcoal-900 border border-charcoal-800 shadow-xl shadow-black/25">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-gold-amber" />
                <h4 className="font-serif text-2xl font-bold text-white">Business Hours</h4>
              </div>

              <div className="space-y-3">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center text-sm py-1 border-b border-charcoal-800/40 last:border-b-0"
                  >
                    <span className={`font-medium ${item.active ? "text-gray-300" : "text-gray-500"}`}>
                      {item.day}
                    </span>
                    <span
                      className={`font-mono text-xs font-semibold ${
                        item.active ? "text-gold-amber" : "text-red-500/80"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7">
            <div className="w-full h-full min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden border border-charcoal-800 shadow-2xl relative bg-charcoal-900 flex">
              <iframe
                title="Local Strangers Studios Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.4316314811915!2d-86.621217!3d34.744795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88626cfa9280d94f%3A0xe968fe0ef88cc0ad!2s1004%20Jordan%20Ln%20NW%20%238%2C%20Huntsville%2C%20AL%2035816!5e0!3m2!1sen!2sus!4v1783815000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter grayscale invert contrast-[85%] opacity-85 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
