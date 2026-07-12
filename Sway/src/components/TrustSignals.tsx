import { Star, Quote, ShieldAlert } from "lucide-react";

interface Testimonial {
  name: string;
  service: string;
  artist: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah McAllister",
    service: "Custom Ear Curation",
    artist: "Princess",
    rating: 5,
    text: "I was extremely anxious about getting my cartilage pierced, but Princess was a dream. She talked me through the breathing, showed me the sterile packaging, and helped me pick the perfect titanium studs. Her patience is unmatched!",
    date: "2 weeks ago",
  },
  {
    name: "Jacob Davis",
    service: "Black & Grey Custom Sleeve",
    artist: "Sway",
    rating: 5,
    text: "Sway's attention to detail is insane. The custom lettering and shading on my arm is beautiful. The shop is incredibly clean and everyone is friendly. It felt like hanging out with friends, not getting stabbed for 4 hours. 10/10.",
    date: "1 month ago",
  },
  {
    name: "Emma Robinson",
    service: "First Tattoo (Fine Line)",
    artist: "Cam",
    rating: 5,
    text: "My very first tattoo and I was shaking. Cam was so incredibly patient with me, letting me take a break when I needed to. The vibe in here is so welcoming and not intimidating at all. Great music, clean setup, and great staff.",
    date: "3 weeks ago",
  },
  {
    name: "Marcus Powell",
    service: "Neo-Traditional Cover-Up",
    artist: "Mars",
    rating: 5,
    text: "Mars did a cover-up for a 10-year-old mistake. The design is bold, vibrant, and you would never know there was a tattoo underneath. The studio is laid-back, hygienic, and plays excellent playlists. I'll definitely be back.",
    date: "2 months ago",
  },
];

export default function TrustSignals() {
  return (
    <section id="reviews" className="py-24 bg-charcoal-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs font-bold tracking-[0.3em] text-gold-amber uppercase mb-3">
            Client Experiences
          </h2>
          <h3 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6">
            Loved by Huntsville Locals
          </h3>
          
          {/* Main Review Summary */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-charcoal-900 border border-charcoal-800 p-6 rounded-3xl shadow-xl shadow-black/35 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-extrabold text-white">4.9</span>
              <div className="flex flex-col items-start">
                <div className="flex text-gold-amber">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-gray-400 font-medium">Google Rating (240+ reviews)</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-charcoal-800" />
            <div className="text-xs text-gray-300 max-w-xs text-center sm:text-left">
              Highly praised for our <strong className="text-gold-amber">patience</strong>, extreme <strong className="text-gold-amber">attention to detail</strong>, and comforting atmosphere.
            </div>
          </div>
          <div className="h-1 w-16 bg-gold-amber mx-auto rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-charcoal-900 border border-charcoal-800 shadow-xl shadow-black/25 flex flex-col justify-between"
            >
              {/* Quote Icon overlay */}
              <Quote className="absolute top-6 right-8 w-12 h-12 text-charcoal-800/60 pointer-events-none" />

              <div>
                {/* Rating & Service */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex text-gold-amber">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-[11px] font-mono text-gold-amber uppercase tracking-wider">
                    {test.service} ({test.artist})
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm leading-relaxed italic mb-6">
                  &ldquo;{test.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex justify-between items-center border-t border-charcoal-850 pt-4 mt-auto">
                <span className="text-sm font-semibold text-white">
                  {test.name}
                </span>
                <span className="text-xs text-gray-400">
                  {test.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Anxiety assurance badge */}
        <div className="mt-12 max-w-2xl mx-auto p-5 rounded-2xl bg-gold-amber/5 border border-gold-amber/20 flex items-start gap-4">
          <ShieldAlert className="w-5 h-5 text-gold-amber flex-shrink-0 mt-0.5" />
          <p className="text-xs text-gray-300 leading-relaxed">
            <strong className="text-white">Anxious or first-timer?</strong> Don&apos;t sweat it. We pride ourselves on creating an environment where you are allowed to ask questions, take breaks, and dictate the pace of your tattoo or piercing. Your comfort and consent are paramount.
          </p>
        </div>

      </div>
    </section>
  );
}
