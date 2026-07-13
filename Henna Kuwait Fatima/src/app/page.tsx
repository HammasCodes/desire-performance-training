"use client";

import React, { useState, useEffect } from "react";

// Inline Custom SVG Icon Components to avoid import failures
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6v7z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MessageCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function AwardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

// Types
interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  priceRange: string;
  tag: string;
}

interface GalleryItem {
  id: string;
  title: string;
  category: "bridal" | "arabic" | "indian" | "party";
  desc: string;
  svgType: "mandala" | "floral" | "intricate" | "minimal";
}

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Data
const SERVICES: Service[] = [
  {
    id: "bridal",
    title: "Premium Bridal Henna",
    description: "Highly detailed, full-length traditional designs extending to elbows and feet. Tailored to your wedding theme with custom patterns reflecting Arabic or Indian styles.",
    features: ["Full hand & feet intricate coverage", "Deep-staining organic henna paste", "Custom design consultation", "Glitter highlighting optional"],
    priceRange: "From 35 KWD",
    tag: "Most Popular"
  },
  {
    id: "arabic",
    title: "Elegant Arabic Designs",
    description: "Bold floral patterns, modern flowing lines, and artistic negative space. Perfect for contemporary elegance that stands out.",
    features: ["Flowing hand & arm patterns", "Quick application", "High-contrast thick & thin outlines", "Perfect for modern celebrations"],
    priceRange: "From 10 KWD",
    tag: "Trending"
  },
  {
    id: "indian",
    title: "Traditional Indian & Rajasthani",
    description: "Ultra-fine, high-density geometric and traditional motifs including paisley, peacock, and mandala designs that tell a story.",
    features: ["Intricate cuff-to-fingertip details", "Traditional cultural motifs", "High density patterns", "Symmetrical matching layouts"],
    priceRange: "From 15 KWD",
    tag: "Timeless"
  },
  {
    id: "party",
    title: "Party & Festive Henna",
    description: "Quick, gorgeous henna patterns for your guests. Ideal for Eid, Diwali, baby showers, birthdays, or family gathering events.",
    features: ["Fast application (5-10 mins/hand)", "Diverse design book for guests", "Group booking discounts", "Great for all ages"],
    priceRange: "From 5 KWD per person",
    tag: "Great Value"
  },
  {
    id: "home-service",
    title: "24/7 Home Service (All Kuwait)",
    description: "Skip the salon. Enjoy professional henna artistry in the safety and comfort of your home, available around the clock to suit your schedule.",
    features: ["Available 24 hours / 7 days", "Servicing all governates of Kuwait", "Full sanitized setup", "Late night / early morning slots"],
    priceRange: "Standard travel fee applies",
    tag: "Exclusive"
  }
];

const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", title: "Royal Rajasthani Bridal", category: "indian", desc: "Detailed symmetrical bridal pattern with peacock motifs", svgType: "intricate" },
  { id: "g2", title: "Contemporary Gulf Floral", category: "arabic", desc: "Bold botanical lines with shaded petals and wrist cuffs", svgType: "floral" },
  { id: "g3", title: "Sacred Mandala Centrepiece", category: "bridal", desc: "Perfect geometric mandala design with matching fingertips", svgType: "mandala" },
  { id: "g4", title: "Minimalist Arabic Vine", category: "party", desc: "Flowing leafy trail running from index finger to wrist", svgType: "minimal" },
  { id: "g5", title: "Intricate Bridal Feet Lace", category: "bridal", desc: "Delicate mesh pattern mirroring fine anklet jewellery", svgType: "intricate" },
  { id: "g6", title: "Festive Eid Mandala", category: "party", desc: "Classic focal circle design with delicate ring accents", svgType: "mandala" }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Fatima Al-Enezi",
    location: "Salmiya, Kuwait",
    rating: 5,
    text: "Fatima did my bridal henna and it was absolutely stunning! The stain was so dark and rich. Best of all, she came to my house at 11 PM to match my schedule. Highly professional!",
    service: "Bridal Henna"
  },
  {
    id: "t2",
    name: "Mariam Dashti",
    location: "Kuwait City",
    rating: 5,
    text: "We booked her for our Eid gathering. She was fast, patient with the children, and her designs were so clean and beautiful. Everyone was asking where we got it done!",
    service: "Party Henna"
  },
  {
    id: "t3",
    name: "Priya Sharma",
    location: "Farwaniya",
    rating: 5,
    text: "Her Indian traditional designs are flawless. Very neat lines and she uses 100% natural henna which didn't cause any reaction on my sensitive skin. Highly recommend her 24-hour service!",
    service: "Traditional Indian Henna"
  }
];

const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "Do you offer 24-hour home service across all areas of Kuwait?",
    answer: "Yes, we offer home services 24 hours a day, 7 days a week, covering all areas in Kuwait including Capital (Al Asimah), Hawally, Farwaniya, Ahmadi, Jahra, and Mubarak Al-Kabeer. Please note that travel fees may vary depending on the distance."
  },
  {
    id: "faq2",
    question: "How far in advance should I book my henna session?",
    answer: "For regular sessions, booking 2–3 days in advance is ideal. For bridal henna, we recommend booking at least 2–4 weeks in advance to secure your preferred date and time, especially during wedding and festive seasons."
  },
  {
    id: "faq3",
    question: "Is your henna paste 100% natural and safe?",
    answer: "Yes, we exclusively use premium, 100% organic, chemical-free henna paste made from natural henna leaves, lemon juice, and essential oils. It is completely safe for children, pregnant women, and sensitive skin. We never use 'black henna' or products containing harmful chemicals."
  },
  {
    id: "faq4",
    question: "How do I get the deepest, darkest stain from my henna?",
    answer: "Keep the paste on your skin for at least 4 to 6 hours (overnight is best for brides). Before scraping it off, apply a lemon-sugar mixture. Avoid washing the area with water for the first 24 hours; instead, scrape the dry paste off and apply coconut oil or balm to protect the stain."
  },
  {
    id: "faq5",
    question: "Can I customize the henna designs?",
    answer: "Absolutely! You can choose from our extensive design catalog, blend different styles (e.g., Arabic-Indian fusion), or share photos of designs you've seen online. Fatima specializes in tailoring patterns to match your style and outfit."
  }
];

// Helper to render customized decorative SVGs for portfolio placeholders
const renderHennaSVG = (type: GalleryItem["svgType"]) => {
  switch (type) {
    case "mandala":
      return (
        <svg className="w-24 h-24 text-gold/30 hover:text-gold/50 transition-colors duration-300" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="4" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x = 50 + 15 * Math.cos(angle);
            const y = 50 + 15 * Math.sin(angle);
            return <circle key={i} cx={x} cy={y} r="2" />;
          })}
          {[...Array(16)].map((_, i) => {
            const angle = (i * 22.5 * Math.PI) / 180;
            const x1 = 50 + 20 * Math.cos(angle);
            const y1 = 50 + 20 * Math.sin(angle);
            const x2 = 50 + 28 * Math.cos(angle);
            const y2 = 50 + 28 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />;
          })}
          <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x = 50 + 38 * Math.cos(angle);
            const y = 50 + 38 * Math.sin(angle);
            return <circle key={i} cx={x} cy={y} r="1.5" />;
          })}
        </svg>
      );
    case "floral":
      return (
        <svg className="w-24 h-24 text-gold/30 hover:text-gold/50 transition-colors duration-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M50,90 C50,70 30,50 30,30 C30,10 50,20 50,20 C50,20 70,10 70,30 C70,50 50,70 50,90 Z" />
          <path d="M50,20 C42,28 42,42 50,50 C58,42 58,28 50,20 Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M30,30 C20,38 20,52 35,60 C40,50 35,38 30,30 Z" />
          <path d="M70,30 C80,38 80,52 65,60 C60,50 65,38 70,30 Z" />
          <circle cx="50" cy="35" r="3" fill="currentColor" />
        </svg>
      );
    case "intricate":
      return (
        <svg className="w-24 h-24 text-gold/30 hover:text-gold/50 transition-colors duration-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="15" y="15" width="70" height="70" rx="10" strokeDasharray="5,5" />
          <circle cx="50" cy="50" r="25" />
          <circle cx="50" cy="50" r="18" fill="currentColor" fillOpacity="0.1" />
          {[...Array(24)].map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            const x = 50 + 25 * Math.cos(angle);
            const y = 50 + 25 * Math.sin(angle);
            return <circle key={i} cx={x} cy={y} r="1" fill="currentColor" />;
          })}
          <path d="M15,50 L85,50 M50,15 L50,85" strokeWidth="0.5" strokeDasharray="2,2" />
          <path d="M25,25 L75,75 M75,25 L25,75" strokeWidth="0.5" strokeDasharray="2,2" />
        </svg>
      );
    case "minimal":
    default:
      return (
        <svg className="w-24 h-24 text-gold/30 hover:text-gold/50 transition-colors duration-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10,90 Q40,90 50,50 Q60,10 90,10" />
          <path d="M30,77 Q40,65 30,55" />
          <path d="M70,23 Q60,35 70,45" />
          <circle cx="30" cy="55" r="2.5" fill="currentColor" />
          <circle cx="70" cy="45" r="2.5" fill="currentColor" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
        </svg>
      );
  }
};

export default function Home() {
  // States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeGalleryTab, setActiveGalleryTab] = useState<string>("all");
  const [openFAQ, setOpenFAQ] = useState<string | null>("faq1");
  const [scrolled, setScrolled] = useState(false);
  
  // Booking Form States
  const [bookingName, setBookingName] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingService, setBookingService] = useState("Bridal Henna");
  const [bookingDetails, setBookingDetails] = useState("");
  const [bookingArea, setBookingArea] = useState("");

  // Handle Navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter gallery
  const filteredGallery = activeGalleryTab === "all" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeGalleryTab);

  // Form Submission redirect to WhatsApp
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "96569695042"; // Kuwait WhatsApp
    const message = `Hello Fatima! I would like to book a henna home service slot:
- *Name:* ${bookingName || "Client"}
- *Service:* ${bookingService}
- *Preferred Date:* ${bookingDate || "Flexible"}
- *Area in Kuwait:* ${bookingArea || "Not specified"}
- *Special Details:* ${bookingDetails || "None"}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex-1 flex flex-col font-sans">
      
      {/* 24-Hour Floating Urgent Banner */}
      <div className="bg-gold text-maroon-950 text-xs font-semibold py-1.5 px-4 text-center tracking-wider flex items-center justify-center gap-2 select-none">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-maroon-900 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-maroon-950"></span>
        </span>
        <span>24/7 HOME SERVICE AVAILABLE ACROSS ALL GOVERNATES OF KUWAIT - CALL / WHATSAPP: 69695042</span>
      </div>

      {/* Header / Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-maroon-950/95 backdrop-blur-md border-b border-gold/20 py-3 shadow-lg" : "bg-maroon-950 py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center bg-maroon-900 text-gold shadow-md">
              <svg className="w-6 h-6 animate-pulse" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="8" />
                <path d="M50,15 Q55,40 50,50 Q45,40 50,15 Z" />
                <path d="M50,85 Q55,60 50,50 Q45,60 50,85 Z" />
                <path d="M15,50 Q40,55 50,50 Q40,45 15,50 Z" />
                <path d="M85,50 Q60,55 50,50 Q60,45 85,50 Z" />
              </svg>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide gold-gradient-text block">
                Henna Kuwait Fatima
              </span>
              <span className="text-[10px] text-cream-300 tracking-widest block uppercase font-medium">
                Professional 24h Home Artist
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-cream-100 text-sm font-medium">
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
            <a href="#testimonials" className="hover:text-gold transition-colors">Reviews</a>
            <a href="#faqs" className="hover:text-gold transition-colors">FAQs</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </nav>

          {/* Nav CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://instagram.com/henna_kuwait_fatima" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream-200 hover:text-gold p-2 transition-colors"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a 
              href="tel:+96569695042" 
              className="text-cream-200 hover:text-gold text-sm font-semibold flex items-center gap-1.5"
            >
              <PhoneIcon className="w-4 h-4 text-gold" />
              <span>69695042</span>
            </a>
            <a 
              href="#book-now" 
              className="bg-gold hover:bg-gold-400 text-maroon-950 font-bold px-5 py-2.5 rounded-full text-sm shadow-md hover:shadow-gold/30 hover:scale-[1.02] transition-all"
            >
              Book Home Service
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cream-100 hover:text-gold p-1"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-maroon-950 border-t border-gold/15 mt-3 py-4 px-4 space-y-3 animate-fadeIn">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-cream-100 hover:text-gold py-2 font-medium border-b border-white/5"
            >
              Our Services
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-cream-100 hover:text-gold py-2 font-medium border-b border-white/5"
            >
              About Fatima
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-cream-100 hover:text-gold py-2 font-medium border-b border-white/5"
            >
              Design Gallery
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-cream-100 hover:text-gold py-2 font-medium border-b border-white/5"
            >
              Customer Reviews
            </a>
            <a 
              href="#faqs" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-cream-100 hover:text-gold py-2 font-medium border-b border-white/5"
            >
              FAQs
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-cream-100 hover:text-gold py-2 font-medium"
            >
              Contact & Location
            </a>
            <div className="pt-2 flex flex-col gap-3">
              <a 
                href="#book-now"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-gold text-maroon-950 py-3 rounded-full font-bold shadow-md"
              >
                Book Home Service (24/7)
              </a>
              <div className="flex justify-center gap-6 pt-2">
                <a 
                  href="https://instagram.com/henna_kuwait_fatima" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cream-200 hover:text-gold flex items-center gap-1.5 text-sm"
                >
                  <InstagramIcon className="w-5 h-5" />
                  <span>@henna_kuwait_fatima</span>
                </a>
                <a 
                  href="tel:+96569695042" 
                  className="text-cream-200 hover:text-gold flex items-center gap-1.5 text-sm"
                >
                  <PhoneIcon className="w-4 h-4" />
                  <span>69695042</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] bg-hero-pattern flex items-center text-cream-50 overflow-hidden py-16 lg:py-24">
        
        {/* Decorative corner mandalas (SVGs) */}
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 opacity-15 hidden lg:block select-none">
          <svg className="w-96 h-96 text-gold" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" />
            {[...Array(36)].map((_, i) => {
              const angle = (i * 10 * Math.PI) / 180;
              const x1 = 50 + 30 * Math.cos(angle);
              const y1 = 50 + 30 * Math.sin(angle);
              const x2 = 50 + 40 * Math.cos(angle);
              const y2 = 50 + 40 * Math.sin(angle);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" />;
            })}
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 opacity-15 hidden lg:block select-none">
          <svg className="w-96 h-96 text-gold" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" />
            {[...Array(36)].map((_, i) => {
              const angle = (i * 10 * Math.PI) / 180;
              const x1 = 50 + 30 * Math.cos(angle);
              const y1 = 50 + 30 * Math.sin(angle);
              const x2 = 50 + 40 * Math.cos(angle);
              const y2 = 50 + 40 * Math.sin(angle);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" />;
            })}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left: Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Availability Alert Badge */}
              <div className="inline-flex items-center gap-2 bg-maroon-900/80 border border-gold/30 rounded-full px-4 py-1.5 text-xs font-semibold text-gold tracking-wide mx-auto lg:mx-0 shadow-inner">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                <span>Active 24 Hours Home Service Across Kuwait</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                Exquisite Henna Artistry <br className="hidden sm:inline" />
                <span className="gold-gradient-text">At Your Doorstep, 24/7</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-cream-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Indulge in stunning custom henna designs crafted by **Fatima**, one of Kuwait’s premier henna artists. Offering professional round-the-clock home service so you can prepare for weddings, Eids, Diwalis, or special parties in absolute convenience and comfort.
              </p>

              {/* Key Trust Signals Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold">
                    <ClockIcon className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-cream-100 font-medium">24/7 Availability</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold">
                    <ShieldCheckIcon className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-cream-100 font-medium">100% Organic Henna</span>
                </div>
                <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-cream-100 font-medium">38K+ Instagram Fans</span>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href="#book-now" 
                  className="w-full sm:w-auto bg-gold hover:bg-gold-400 text-maroon-950 font-bold px-8 py-4 rounded-full text-base shadow-lg hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageCircleIcon className="w-5 h-5 fill-maroon-950 stroke-none" />
                  <span>Book Home Service</span>
                </a>
                <a 
                  href="https://instagram.com/henna_kuwait_fatima" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto border border-gold/60 text-cream-100 hover:text-gold hover:bg-gold/5 px-8 py-4 rounded-full text-base font-semibold transition-all text-center flex items-center justify-center gap-2"
                >
                  <InstagramIcon className="w-5 h-5" />
                  <span>@henna_kuwait_fatima</span>
                </a>
              </div>

              <p className="text-xs text-cream-300/80 font-light">
                * No salon travel required. We supply towels, design lookbooks, and post-stain aftercare instructions.
              </p>
            </div>

            {/* Hero Right: Premium Visual Mandala Showcase Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border-2 border-dashed border-gold/40 p-4 animate-spin-slow">
                <div className="w-full h-full rounded-full border border-gold/60 bg-maroon-900/60 flex flex-col items-center justify-center text-center p-6 bg-mandala border-gold-glow relative">
                  
                  {/* Decorative core SVG */}
                  <svg className="w-32 h-32 sm:w-44 sm:h-44 text-gold/80" fill="currentColor" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="5" />
                    <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="1" />
                    {[...Array(12)].map((_, i) => {
                      const angle = (i * 30 * Math.PI) / 180;
                      const x = 50 + 20 * Math.cos(angle);
                      const y = 50 + 20 * Math.sin(angle);
                      return <circle key={i} cx={x} cy={y} r="2.5" />;
                    })}
                    {[...Array(24)].map((_, i) => {
                      const angle = (i * 15 * Math.PI) / 180;
                      const x1 = 50 + 26 * Math.cos(angle);
                      const y1 = 50 + 26 * Math.sin(angle);
                      const x2 = 50 + 38 * Math.cos(angle);
                      const y2 = 50 + 38 * Math.sin(angle);
                      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.75" />;
                    })}
                    <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>

                  <div className="absolute inset-0 flex flex-col justify-end pb-8 px-4 text-center pointer-events-none">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-gold">Intricate Artistry</h3>
                    <p className="text-xs text-cream-200 font-light mt-1">Bridal, Arabic, Indian & Sudanese Designs</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="bg-cream-200 border-y border-gold/15 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            {/* Stat 1 */}
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-maroon-950 text-gold flex items-center justify-center mx-auto shadow-md">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-maroon-950">38,000+</h3>
              <p className="text-sm text-cream-950 font-medium">Instagram Followers</p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-maroon-950 text-gold flex items-center justify-center mx-auto shadow-md">
                <ClockIcon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-maroon-950">24 Hours</h3>
              <p className="text-sm text-cream-950 font-medium">Home Service Availability</p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-maroon-950 text-gold flex items-center justify-center mx-auto shadow-md">
                <ShieldCheckIcon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-maroon-950">100% Safe</h3>
              <p className="text-sm text-cream-950 font-medium">Organic Natural Stain</p>
            </div>

            {/* Stat 4 */}
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-maroon-950 text-gold flex items-center justify-center mx-auto shadow-md">
                <MapPinIcon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-maroon-950">All Kuwait</h3>
              <p className="text-sm text-cream-950 font-medium">Serving Every Governate</p>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-cream-100 bg-mandala">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 text-gold font-bold tracking-widest text-xs uppercase justify-center w-full">
              <SparklesIcon className="w-4 h-4" />
              <span>Our Artistry Specialties</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon-950">
              Professional Henna Styles We Deliver
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto"></div>
            <p className="text-cream-800 font-light text-sm">
              Fatima offers customized application services to accommodate any occasion. Below are our core designs and standard travel booking features.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl border border-gold/15 hover:border-gold/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Tag and Title */}
                  <div className="flex justify-between items-start">
                    <span className="bg-maroon-50 text-maroon-950 text-xs font-semibold px-2.5 py-1 rounded-full border border-maroon-100">
                      {service.tag}
                    </span>
                    <span className="text-sm font-serif font-bold text-gold-700">{service.priceRange}</span>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-maroon-950 group-hover:text-gold-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-cream-900 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="w-full h-[1px] bg-gold/10 my-4"></div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-cream-950">
                        <CheckIcon className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-cream-200">
                  <a 
                    href="#book-now"
                    onClick={() => {
                      setBookingService(service.title);
                      const el = document.getElementById("book-now");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full text-center block bg-maroon-950 hover:bg-maroon-800 text-cream-100 font-semibold py-2.5 rounded-xl text-xs tracking-wider uppercase transition-colors"
                  >
                    Select & Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-28 bg-white border-y border-gold/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* About Left: Visual Brand Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              {/* Gold border decorations */}
              <div className="absolute -inset-4 border border-gold/30 rounded-3xl transform rotate-2 pointer-events-none"></div>
              
              <div className="w-full max-w-sm rounded-2xl bg-maroon-950 text-cream-50 p-8 shadow-xl relative overflow-hidden border border-gold/30">
                
                {/* Visual SVG elements mimicking henna vine */}
                <div className="absolute top-4 right-4 opacity-20 text-gold">
                  <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    <path d="M10,10 Q50,30 90,10" />
                    <path d="M10,30 Q50,50 90,30" />
                    <path d="M10,50 Q50,70 90,50" />
                  </svg>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center text-gold mx-auto">
                    <AwardIcon className="w-8 h-8" />
                  </div>
                  
                  <div className="text-center space-y-1.5">
                    <h3 className="font-serif text-2xl font-bold gold-gradient-text">Fatima</h3>
                    <p className="text-xs text-cream-300 uppercase tracking-widest font-semibold">Master Henna Artist</p>
                  </div>

                  <p className="text-sm text-cream-200 text-center leading-relaxed font-light italic">
                    &ldquo;Henna is not just a stain, it is an expression of celebration, blessings, and cultural elegance. Every stroke tells a story.&rdquo;
                  </p>

                  <div className="border-t border-gold/20 pt-4 space-y-2">
                    <div className="flex justify-between text-xs text-cream-100">
                      <span>Experience</span>
                      <span className="font-semibold text-gold">10+ Years</span>
                    </div>
                    <div className="flex justify-between text-xs text-cream-100">
                      <span>Kuwait Coverage</span>
                      <span className="font-semibold text-gold">100% (All Areas)</span>
                    </div>
                    <div className="flex justify-between text-xs text-cream-100">
                      <span>Paste Type</span>
                      <span className="font-semibold text-gold">Pure Organic</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Right: Text story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-gold font-bold tracking-widest text-xs uppercase block">Meet the Artist</span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon-950">
                  Elegant Designs Hand-Crafted Just for You
                </h2>
                <div className="w-16 h-0.5 bg-gold"></div>
              </div>

              <p className="text-cream-950 font-light leading-relaxed">
                Fatima has established herself as one of the most reliable and highly sought-after henna artists in Kuwait. With a dedicated base of over <strong>38,000 Instagram followers</strong>, she is celebrated for her exceptional precision, intricate line work, and deep understanding of both traditional and modern cultural designs.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-cream-200/50 border border-gold/10 p-4 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-maroon-950 font-semibold text-sm">
                    <HeartIcon className="w-4 h-4 text-gold-700" />
                    <span>Intricate Attention to Detail</span>
                  </div>
                  <p className="text-xs text-cream-800 font-light">
                    Every dot and petal is perfectly placed, ensuring a flawless, clean design that matches your aesthetic.
                  </p>
                </div>

                <div className="bg-cream-200/50 border border-gold/10 p-4 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-maroon-950 font-semibold text-sm">
                    <ShieldCheckIcon className="w-4 h-4 text-gold-700" />
                    <span>Safe Organic Ingredients Only</span>
                  </div>
                  <p className="text-xs text-cream-800 font-light">
                    We strictly use fresh natural henna leaves containing zero PPD, chemicals, or black hair dyes.
                  </p>
                </div>
              </div>

              <div className="space-y-4 border-l-2 border-gold pl-4">
                <h4 className="text-sm font-semibold text-maroon-950 uppercase tracking-wider">Why Choose Our 24-Hour Home Service?</h4>
                <p className="text-xs text-cream-900 leading-relaxed font-light">
                  Getting ready for a wedding or event can be hectic. Fatima brings the full salon experience to your living room. Whether you need an early-morning slot before your event starts, or a late-night session after work, we accommodate your schedule perfectly.
                </p>
              </div>

              <div className="pt-2">
                <a 
                  href="#book-now" 
                  className="inline-flex items-center gap-2 text-maroon-950 font-bold hover:text-gold-700 text-sm tracking-wide group"
                >
                  <span>Book Fatima for your event</span>
                  <ChevronRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 lg:py-28 bg-cream-100 bg-mandala">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-gold font-bold tracking-widest text-xs uppercase block">Art Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon-950">
              Showcase of Design Styles
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
            <p className="text-cream-800 font-light text-sm">
              Explore some of our signature layouts. Switch categories to view bridal, Arabic, Indian, and festive party design structures.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["all", "bridal", "arabic", "indian", "party"].map((category) => (
              <button 
                key={category} 
                onClick={() => setActiveGalleryTab(category)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeGalleryTab === category 
                    ? "bg-maroon-950 text-gold shadow-md" 
                    : "bg-white text-cream-950 border border-gold/15 hover:bg-cream-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div 
                key={item.id} 
                className="bg-maroon-950 border border-gold/20 rounded-xl overflow-hidden shadow-md group relative h-64 flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:border-gold/60"
              >
                
                {/* SVG Henna Graphic */}
                <div className="mb-4">
                  {renderHennaSVG(item.svgType)}
                </div>

                <h3 className="font-serif text-gold text-lg font-bold">{item.title}</h3>
                <p className="text-xs text-cream-200 font-light mt-1 max-w-xs">{item.desc}</p>
                
                {/* Hover overlay badge */}
                <span className="absolute top-3 right-3 text-[10px] uppercase font-bold tracking-widest bg-gold/25 text-gold px-2 py-0.5 rounded border border-gold/30">
                  {item.category}
                </span>

                <div className="absolute inset-0 bg-maroon-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <InstagramIcon className="w-8 h-8 text-gold mb-2" />
                  <p className="text-xs text-cream-100 font-semibold mb-3">View final application stain on Instagram</p>
                  <a 
                    href="https://instagram.com/henna_kuwait_fatima" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gold hover:bg-gold-400 text-maroon-950 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md"
                  >
                    View @henna_kuwait_fatima
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof CTA Banner */}
          <div className="mt-12 bg-maroon-900 border border-gold/35 rounded-2xl p-6 text-center max-w-2xl mx-auto space-y-4">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-gold">See Real-Time Updates & Videos</h3>
            <p className="text-xs text-cream-200 font-light leading-relaxed">
              We post daily bridal work, color-staining result videos, client feedback, and live availability updates on our social handle.
            </p>
            <div>
              <a 
                href="https://instagram.com/henna_kuwait_fatima" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-white text-maroon-950 hover:bg-gold hover:text-maroon-950 px-6 py-3 rounded-full text-sm font-bold transition-all shadow-md"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>See more on Instagram @henna_kuwait_fatima</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials / Reviews Section */}
      <section id="testimonials" className="py-20 lg:py-28 bg-white border-y border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-gold font-bold tracking-widest text-xs uppercase block">Client Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon-950">
              Loved By Clients Across Kuwait
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
            <p className="text-cream-800 font-light text-sm">
              Read feedback from ladies who have experienced our personalized home henna service.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-cream-100 border border-gold/10 rounded-2xl p-6 relative flex flex-col justify-between"
              >
                {/* Visual Quote Icon */}
                <span className="absolute top-4 right-6 text-gold/20 font-serif text-7xl select-none leading-none pointer-events-none">&ldquo;</span>
                
                <div className="space-y-4 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-gold">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  <p className="text-xs text-cream-300 bg-maroon-950 inline-block px-2.5 py-0.5 rounded font-medium">
                    Service: {testimonial.service}
                  </p>

                  <p className="text-sm text-cream-955 leading-relaxed font-light italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gold/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-maroon-950">{testimonial.name}</h4>
                    <span className="text-[11px] text-cream-700 flex items-center gap-1">
                      <MapPinIcon className="w-3 h-3 text-gold-700" />
                      {testimonial.location}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold">
                    <HeartIcon className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Booking Form & Contact Section */}
      <section id="book-now" className="py-20 lg:py-28 bg-cream-100 bg-mandala relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Book Now Info: Left Side */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <div className="space-y-2">
                <span className="text-gold font-bold tracking-widest text-xs uppercase block">Quick Appointment</span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon-950">
                  Book Your Session in 60 Seconds
                </h2>
                <div className="w-16 h-0.5 bg-gold mx-auto lg:mx-0"></div>
              </div>

              <p className="text-cream-900 font-light leading-relaxed">
                Fill out the booking preferences details, and click submit to open a direct chat with Fatima. She will confirm her time slot availability, details, and travel quote immediately.
              </p>

              <div className="space-y-4 text-left">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-maroon-950 text-gold flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-maroon-950">Phone Call / WhatsApp</h4>
                    <a href="tel:+96569695042" className="text-sm font-bold text-gold-800 hover:underline">
                      +965 69695042
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-maroon-950 text-gold flex items-center justify-center flex-shrink-0">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-maroon-950">Instagram Direct Message</h4>
                    <a href="https://instagram.com/henna_kuwait_fatima" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gold-800 hover:underline">
                      @henna_kuwait_fatima
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-maroon-950 text-gold flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-maroon-950">Business Hours</h4>
                    <p className="text-xs text-cream-800">
                      Open 24 Hours / 7 Days (Inc. holidays & late night bookings)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Now Form: Right Side */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-gold/15 p-8 shadow-xl max-w-xl mx-auto">
                <h3 className="font-serif text-xl font-bold text-maroon-950 mb-6 text-center">
                  Request Home Henna Booking Slot
                </h3>
                
                <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-semibold text-cream-950 uppercase tracking-wider block">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="e.g., Sarah Al-Ali" 
                      required 
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      className="w-full bg-cream-100 border border-gold/15 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold-600 transition-colors"
                    />
                  </div>

                  {/* Grid for Date and Service */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="service" className="text-xs font-semibold text-cream-950 uppercase tracking-wider block">Henna Service Type</label>
                      <select 
                        id="service" 
                        value={bookingService}
                        onChange={(e) => setBookingService(e.target.value)}
                        className="w-full bg-cream-100 border border-gold/15 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold-600 transition-colors"
                      >
                        <option value="Bridal Henna">Bridal Henna</option>
                        <option value="Arabic Henna">Arabic Henna Design</option>
                        <option value="Indian Traditional">Indian Traditional Design</option>
                        <option value="Party Henna Group">Party / Event Henna (Group)</option>
                        <option value="Sudanese Henna">Sudanese Henna</option>
                        <option value="Custom Pattern Request">Custom Design Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="date" className="text-xs font-semibold text-cream-950 uppercase tracking-wider block">Preferred Date / Time</label>
                      <input 
                        type="text" 
                        id="date" 
                        placeholder="e.g., Oct 24th, 5:00 PM" 
                        required 
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full bg-cream-100 border border-gold/15 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Area in Kuwait */}
                  <div className="space-y-1">
                    <label htmlFor="area" className="text-xs font-semibold text-cream-950 uppercase tracking-wider block">Your Location (Area in Kuwait)</label>
                    <input 
                      type="text" 
                      id="area" 
                      placeholder="e.g., Hawally, Block 4, Street 12" 
                      required 
                      value={bookingArea}
                      onChange={(e) => setBookingArea(e.target.value)}
                      className="w-full bg-cream-100 border border-gold/15 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold-600 transition-colors"
                    />
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-1">
                    <label htmlFor="details" className="text-xs font-semibold text-cream-950 uppercase tracking-wider block">Additional Details / Special Requests</label>
                    <textarea 
                      id="details" 
                      rows={3} 
                      placeholder="e.g., I have 3 guests joining, or I want designs extending to wrists only."
                      value={bookingDetails}
                      onChange={(e) => setBookingDetails(e.target.value)}
                      className="w-full bg-cream-100 border border-gold/15 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold-600 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="w-full bg-gold hover:bg-gold-400 text-maroon-950 font-bold py-4 rounded-xl text-sm tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircleIcon className="w-4 h-4 fill-current stroke-none" />
                    <span>Send Booking request via WhatsApp</span>
                  </button>
                </form>

                <p className="text-[10px] text-cream-800 text-center mt-3 font-light">
                  * Clicking button opens WhatsApp web or application pre-filled with details. No payment is processed online.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section Accordion */}
      <section id="faqs" className="py-20 lg:py-28 bg-white border-t border-gold/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <span className="text-gold font-bold tracking-widest text-xs uppercase block">Clarifications</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon-950">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openFAQ === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="bg-cream-100 border border-gold/15 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button 
                    onClick={() => setOpenFAQ(isOpen ? null : faq.id)}
                    className="w-full text-left py-5 px-6 flex justify-between items-center text-maroon-950 font-serif font-bold text-base sm:text-lg focus:outline-none focus:text-gold-800"
                  >
                    <span>{faq.question}</span>
                    <ChevronDownIcon className={`w-5 h-5 text-gold-700 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-cream-950 font-light leading-relaxed border-t border-gold/10 pt-4 animate-slideDown">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-maroon-950 text-cream-200 border-t border-gold/20 pt-16 pb-8 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Column 1: Brand Info */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-gold tracking-wide">Henna Kuwait Fatima</h3>
              <p className="text-xs text-cream-300 leading-relaxed font-light">
                Delivering professional, high-precision traditional and contemporary henna artistry to homes across Kuwait 24 hours a day, 7 days a week.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/henna_kuwait_fatima" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-maroon-900 text-gold flex items-center justify-center hover:bg-gold hover:text-maroon-950 transition-colors"
                  aria-label="Instagram Page"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a 
                  href="tel:+96569695042" 
                  className="w-8 h-8 rounded-full bg-maroon-900 text-gold flex items-center justify-center hover:bg-gold hover:text-maroon-950 transition-colors"
                  aria-label="Phone Call"
                >
                  <PhoneIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-xs uppercase tracking-wider text-gold">Quick Navigation</h4>
              <nav className="flex flex-col gap-2.5 text-xs">
                <a href="#services" className="hover:text-gold transition-colors font-light">Specialist Services</a>
                <a href="#about" className="hover:text-gold transition-colors font-light">About Fatima</a>
                <a href="#gallery" className="hover:text-gold transition-colors font-light">Design Portfolio</a>
                <a href="#testimonials" className="hover:text-gold transition-colors font-light">Testimonials & Reviews</a>
                <a href="#faqs" className="hover:text-gold transition-colors font-light">Frequently Asked Questions</a>
              </nav>
            </div>

            {/* Column 3: Areas Served */}
            <div className="space-y-4">
              <h4 className="font-semibold text-xs uppercase tracking-wider text-gold font-serif">Governates Covered</h4>
              <ul className="grid grid-cols-2 gap-2 text-xs text-cream-300 font-light">
                <li className="flex items-center gap-1.5"><MapPinIcon className="w-3 h-3 text-gold" />Capital</li>
                <li className="flex items-center gap-1.5"><MapPinIcon className="w-3 h-3 text-gold" />Hawally</li>
                <li className="flex items-center gap-1.5"><MapPinIcon className="w-3 h-3 text-gold" />Farwaniya</li>
                <li className="flex items-center gap-1.5"><MapPinIcon className="w-3 h-3 text-gold" />Ahmadi</li>
                <li className="flex items-center gap-1.5"><MapPinIcon className="w-3 h-3 text-gold" />Jahra</li>
                <li className="flex items-center gap-1.5"><MapPinIcon className="w-3 h-3 text-gold" />Mubarak Al-Kabeer</li>
              </ul>
            </div>

            {/* Column 4: Immediate Assistance */}
            <div className="space-y-4">
              <h4 className="font-semibold text-xs uppercase tracking-wider text-gold font-serif">Quick Booking</h4>
              <p className="text-xs text-cream-300 font-light">
                Send us a direct message on WhatsApp with your location and date details for instant responses.
              </p>
              <div className="space-y-2">
                <a 
                  href="https://wa.me/96569695042" 
                  className="w-full text-center bg-gold hover:bg-gold-400 text-maroon-950 font-bold py-3 rounded-full text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 shadow-md"
                >
                  <MessageCircleIcon className="w-3.5 h-3.5 fill-current stroke-none" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gold/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-cream-300/80 font-light space-y-4 sm:space-y-0">
            <p>&copy; {new Date().getFullYear()} Henna Kuwait Fatima. All rights reserved.</p>
            <p>Designed with cultural elegance in Kuwait. Available 24 Hours.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
