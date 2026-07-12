import Image from "next/image";
import { ShieldCheck, Music, Users, Compass } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-charcoal-900/20 relative bg-noise overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-gold-amber/5 blur-[100px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Section */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-mono text-xs font-bold tracking-[0.3em] text-gold-amber uppercase mb-3">
              Who We Are
            </h2>
            <h3 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6">
              A Welcoming Studio Built on Trust
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              At Local Strangers Studios, we believe that body art is a deeply personal journey. That&apos;s why we&apos;ve intentionally created a space that defies the typical intimidating shop vibe. From the moment you walk through our doors, you&apos;ll feel a laid-back, family-oriented warmth.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              We spin good music, swap stories, and maintain a friendly, judgment-free zone. Whether you&apos;re getting a small ear piercing or starting a full back piece, you are treated like one of our own.
            </p>

            {/* Icon Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-charcoal-900 border border-charcoal-800 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-gold-amber" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Strict Sterility</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Hospital-grade sanitization, single-use sterilized needles, and 100% disposable materials. Your safety is our absolute priority.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-charcoal-900 border border-charcoal-800 flex items-center justify-center flex-shrink-0">
                  <Music className="w-5 h-5 text-gold-amber" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Incredible Music Vibe</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    No harsh noises here. We play a chill, handpicked selection of vinyl records and playlists to keep you relaxed and vibing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-charcoal-900 border border-charcoal-800 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-gold-amber" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Family Atmosphere</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    We are family-oriented and community-first. We welcome clients of all backgrounds and levels of tattooing experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-charcoal-900 border border-charcoal-800 flex items-center justify-center flex-shrink-0">
                  <Compass className="w-5 h-5 text-gold-amber" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Expert Guidance</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    We guide you patiently through design options, jewelry scaling, and detailed aftercare. You are never rushed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-charcoal-850 shadow-2xl amber-glow-strong">
              <Image
                src="/studio_vibe.png"
                alt="Local Strangers Studios Vibe"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* Overlay styling badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-charcoal-950/90 border border-charcoal-800 backdrop-blur-md">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-gold-amber font-bold uppercase">
                    Health Dept. Approved
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Sterile & Cozy</h4>
                <p className="text-[11px] text-gray-400 leading-normal">
                  Our facility is fully licensed, regularly inspected, and strictly adheres to global sterilization standards.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
