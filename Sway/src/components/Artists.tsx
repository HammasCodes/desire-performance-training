import Image from "next/image";
import { Instagram } from "lucide-react";

interface Artist {
  name: string;
  role: string;
  specialty: string[];
  bio: string;
  image: string;
  instagram: string;
}

const artists: Artist[] = [
  {
    name: "Sway",
    role: "Owner & Custom Tattoo Artist",
    specialty: ["Black & Grey Realism", "Custom Lettering", "Fine Line"],
    bio: "Sway is known for his incredible patience, custom hand-drawn lettering, and breathtaking black-and-grey realism. He works closely with each client to translate personal stories into lasting skin art.",
    image: "/artist_sway.png",
    instagram: "https://instagram.com/sway_art",
  },
  {
    name: "Mars",
    role: "Custom Tattoo Specialist",
    specialty: ["Neo-Traditional", "Bold Color Work", "Illustrative"],
    bio: "Mars brings vibrant life to the studio with a love for bold outlines, traditional styles, and custom illustrative tattoos. He loves creating custom designs that pop and stand the test of time.",
    image: "/artist_mars.png",
    instagram: "https://instagram.com/sway_art", // using sway_art as requested
  },
  {
    name: "Princess",
    role: "Lead Body Piercing Specialist",
    specialty: ["Ear Project Curation", "Nose & Facial Piercings", "Dermals"],
    bio: "Princess is highly praised for her gentle touch, attention to detail, and expertise in custom ear styling/curations. Her patient approach is legendary for calming nervous first-timers.",
    image: "/artist_princess.png",
    instagram: "https://instagram.com/sway_art",
  },
  {
    name: "Cam",
    role: "Versatile Tattoo & Piercing Artist",
    specialty: ["Anime & Pop Culture", "Fine Line Tattoos", "Body Piercing"],
    bio: "Cam is the studio's dual threat, offering clean pop-culture tattoos and professional piercing services. Friendly, precise, and extremely versatile, Cam loves bringing client ideas to life.",
    image: "/artist_cam.png",
    instagram: "https://instagram.com/sway_art",
  },
];

export default function Artists() {
  return (
    <section id="artists" className="py-24 bg-charcoal-900/40 relative bg-noise">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-charcoal-950 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs font-bold tracking-[0.3em] text-gold-amber uppercase mb-3">
            Creative Masters
          </h2>
          <h3 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Meet Our Artists
          </h3>
          <div className="h-1 w-16 bg-gold-amber mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-base sm:text-lg">
            Our team is comprised of professional, licensed creators who specialize in high-quality tattoos and sterile, precise piercings in a welcoming atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="group relative flex flex-col bg-charcoal-900 border border-charcoal-800 rounded-3xl overflow-hidden hover:border-gold-amber/40 transition-all duration-300 shadow-xl shadow-black/30 hover:-translate-y-1"
            >
              {/* Image container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal-950">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent opacity-90" />
                
                {/* Social Floating Button */}
                <a
                  href={artist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-gold-amber text-black hover:bg-gold-light p-2.5 rounded-full shadow-lg transition-colors duration-200 z-20"
                  aria-label={`Follow ${artist.name} on Instagram`}
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

              {/* Text content */}
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="font-serif text-2xl font-bold text-white mb-1">
                  {artist.name}
                </h4>
                <p className="text-xs text-gold-amber font-mono font-semibold tracking-wide uppercase mb-4">
                  {artist.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {artist.bio}
                </p>

                {/* Specialties tags */}
                <div className="border-t border-charcoal-800 pt-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {artist.specialty.map((spec) => (
                      <span
                        key={spec}
                        className="text-[10px] font-medium text-gray-300 bg-charcoal-800/80 px-2.5 py-1 rounded-full border border-charcoal-700/50"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
