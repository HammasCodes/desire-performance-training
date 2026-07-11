"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  Instagram, 
  MapPin, 
  Check, 
  Star, 
  Users, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  X, 
  Menu,
  Globe,
  MessageSquare
} from "lucide-react";

// Translations dictionary
const translations = {
  en: {
    navServices: "Services",
    navAbout: "About Olivia",
    navLocation: "Location",
    navContact: "Contact",
    bookBtn: "Book Appointment",
    heroBadge: "Wake Up & Makeup",
    heroTitle: "Effortless Beauty, Every Single Morning",
    heroSubtitle: "Experience premium permanent makeup and brow artistry in Waco, Texas. Custom-tailored to highlight your natural features, so you can save time and feel confident from the moment you wake up.",
    trustRating: "100% Recommendation",
    trustRatingDesc: "From our loyal clients",
    trustFollowers: "2,000+ Followers",
    trustFollowersDesc: "Growing social community",
    trustClients: "Active Growing Clientele",
    trustClientsDesc: "Waco's trusted brow studio",
    servicesTitle: "Our Services & Pricing",
    servicesSubtitle: "Each session is custom-crafted to match your unique facial structure, skin tone, and personal aesthetic style.",
    startingFrom: "Starting from",
    bookService: "Book Service",
    aboutTitle: "Meet Olivia",
    aboutSub: "Your Bilingual Permanent Makeup Specialist",
    aboutText1: "Hi, I'm Olivia! As a bilingual artist specializing in permanent makeup and brow designs, I'm dedicated to helping clients achieve their ultimate beauty goals. I blend advanced techniques with custom pigments to create brows and lips that perfectly harmonize with your facial structure.",
    aboutText2: "Whether you want bold definition, soft shading, or natural hair-like strokes, I work closely with you during our personalized consultation to bring your vision to life. As a bilingual studio, I am proud to welcome and serve both our English and Spanish-speaking community in Central Texas.",
    processTitle: "Our Simple Booking Process",
    processSubtitle: "Because permanent makeup is a highly personalized art, Olivia manages each appointment request individually to ensure you receive dedicated attention.",
    step1Title: "1. Request Your Slot",
    step1Desc: "Select your desired service, preferred time, and fill out our brief booking request form.",
    step2Title: "2. Personal Confirmation",
    step2Desc: "Olivia will review your request and contact you directly via text or DM to confirm your consultation detail.",
    step3Title: "3. Secure with Deposit",
    step3Desc: "A $50 deposit is required to secure your appointment. We accept Zelle, Venmo, or in-person cash payment.",
    locationTitle: "Visit Our Studio",
    locationDesc: "Conveniently located in the heart of Waco, Texas. Safe, private, and fully licensed aesthetic space.",
    address: "717 Lake Air Dr, Waco, TX 76710",
    getDirections: "Get Directions",
    contactTitle: "Let's Connect",
    contactSubtitle: "Have questions about brow styles or lip shading? Reach out via call, email, or DM, and Olivia will help you choose.",
    callUs: "Call or Text Olivia",
    emailUs: "Email Us",
    instagramDM: "Instagram DM",
    footerCredits: "© 2026 Waco Face Artistry. All rights reserved. Owned and operated by Olivia.",
    modalTitle: "Request Your Appointment",
    modalSub: "Complete this short form and Olivia will contact you personally within 24 hours to confirm.",
    formName: "Full Name",
    formPhone: "Phone Number",
    formService: "Choose a Service",
    formDate: "Preferred Day of Week",
    formNotes: "Notes or Questions (Optional)",
    formSubmit: "Send Booking Request via WhatsApp",
    formSubmitSMS: "Send Booking Request via SMS",
    depositNotice: "Note: A $50 deposit (Zelle, Venmo, or In-Person) is required to secure all bookings after confirmation.",
    bilingualBadge: "Bilingual Artist (English & Spanish)",
    comboNote: "Combo brows include precise hair-like strokes blended with soft shading for a fuller, longer-lasting look."
  },
  es: {
    navServices: "Servicios",
    navAbout: "Sobre Olivia",
    navLocation: "Ubicación",
    navContact: "Contacto",
    bookBtn: "Reservar Cita",
    heroBadge: "Despierta con Maquillaje",
    heroTitle: "Belleza sin Esfuerzo, Cada Mañana",
    heroSubtitle: "Experimenta el maquillaje permanente de primera calidad en Waco, Texas. Diseñado a la medida para resaltar tus rasgos naturales, ahorrándote tiempo y dándote confianza desde que te despiertas.",
    trustRating: "100% Recomendado",
    trustRatingDesc: "Por nuestras clientas leales",
    trustFollowers: "2,000+ Seguidores",
    trustFollowersDesc: "Comunidad social en crecimiento",
    trustClients: "Clientela en Crecimiento",
    trustClientsDesc: "El estudio de cejas de confianza en Waco",
    servicesTitle: "Servicios y Precios",
    servicesSubtitle: "Cada sesión se diseña individualmente para adaptarse a tu estructura facial, tono de piel y estilo estético.",
    startingFrom: "A partir de",
    bookService: "Reservar Servicio",
    aboutTitle: "Conoce a Olivia",
    aboutSub: "Tu Especialista Bilingüe en Maquillaje Permanente",
    aboutText1: "¡Hola, soy Olivia! Como artista bilingüe especializada en maquillaje permanente y diseño de cejas, mi pasión es ayudar a mis clientas a lograr sus metas de belleza. Combino técnicas avanzadas con pigmentos personalizados para crear cejas y labios que armonizan con tu rostro.",
    aboutText2: "Ya sea que busques definición audaz, sombreado suave o trazos naturales pelo a pelo, trabajo de la mano contigo durante nuestra consulta personalizada. Como estudio bilingüe, me enorgullece recibir y atender a nuestra comunidad tanto en inglés como en español en el centro de Texas.",
    processTitle: "Nuestro Sencillo Proceso de Reserva",
    processSubtitle: "Debido a que el maquillaje permanente es un arte personalizado, Olivia gestiona cada solicitud de cita de manera individual para garantizar una atención dedicada.",
    step1Title: "1. Solicita tu Turno",
    step1Desc: "Selecciona el servicio que deseas, tu horario preferido y llena nuestro breve formulario de solicitud.",
    step2Title: "2. Confirmación Personal",
    step2Desc: "Olivia revisará tu solicitud y se pondrá en contacto directo contigo por mensaje de texto o DM para confirmar los detalles.",
    step3Title: "3. Asegura con tu Depósito",
    step3Desc: "Se requiere un depósito de $50 para asegurar tu cita. Aceptamos pagos por Zelle, Venmo o en persona.",
    locationTitle: "Visita Nuestro Estudio",
    locationDesc: "Convenientemente ubicado en el corazón de Waco, Texas. Un espacio estético seguro, privado y con licencia completa.",
    address: "717 Lake Air Dr, Waco, TX 76710",
    getDirections: "Cómo Llegar",
    contactTitle: "Conectémonos",
    contactSubtitle: "¿Tienes preguntas sobre estilos de cejas o sombreado de labios? Escríbenos o llámanos, Olivia te ayudará a elegir.",
    callUs: "Llama o Envía Mensaje",
    emailUs: "Envíanos un Correo",
    instagramDM: "Mensaje Directo por Instagram",
    footerCredits: "© 2026 Waco Face Artistry. Todos los derechos reservados. Propiedad de y operado por Olivia.",
    modalTitle: "Solicita tu Cita",
    modalSub: "Completa este breve formulario y Olivia te contactará personalmente en menos de 24 horas para confirmar.",
    formName: "Nombre Completo",
    formPhone: "Número de Teléfono",
    formService: "Elige un Servicio",
    formDate: "Día de la Semana Preferido",
    formNotes: "Notas o Preguntas (Opcional)",
    formSubmit: "Enviar Solicitud por WhatsApp",
    formSubmitSMS: "Enviar Solicitud por SMS",
    depositNotice: "Nota: Se requiere un depósito de $50 (Zelle, Venmo o En Persona) para asegurar tu cita tras la confirmación.",
    bilingualBadge: "Artista Bilingüe (Inglés y Español)",
    comboNote: "Las cejas combinadas incluyen trazos pelo a pelo mezclados con sombreado suave para un aspecto más lleno y duradero."
  }
};

interface ServiceItem {
  id: string;
  name: string;
  nameEs: string;
  price: string;
  touchUpPrice?: string;
  desc: string;
  descEs: string;
  features: string[];
  featuresEs: string[];
}

// Services Data
const servicesList: ServiceItem[] = [
  {
    id: "combo-brows",
    name: "Combo Brows (Hairstrokes + Shading)",
    nameEs: "Cejas Combinadas (Pelo a Pelo + Sombreado)",
    price: "$400",
    touchUpPrice: "$150 touch-up",
    desc: "The ultimate brow transformation combining ultra-realistic nano hairstrokes at the front with soft, dense shading through the body and tail.",
    descEs: "La transformación definitiva de cejas que combina trazos pelo a pelo ultra-reales al inicio con un sombreado suave y denso en el cuerpo y la cola.",
    features: [
      "Best for all skin types",
      "Combines structure and density",
      "First Session: $400",
      "Touch-up Session: $150"
    ],
    featuresEs: [
      "Excelente para todo tipo de piel",
      "Combina estructura y volumen",
      "Primera Sesión: $400",
      "Sesión de Retoque: $150"
    ]
  },
  {
    id: "microblading",
    name: "Microblading",
    nameEs: "Microblading",
    price: "$350",
    desc: "Classic manual technique creating fine, crisp, hair-like strokes to fill in sparse areas and reshape the brow naturally.",
    descEs: "Técnica manual clásica que crea trazos finos y definidos imitando el vello natural para rellenar áreas despobladas y dar forma.",
    features: [
      "Ideal for normal to dry skin",
      "Incredibly natural appearance",
      "Custom pigment mapping",
      "Long-lasting stroke definition"
    ],
    featuresEs: [
      "Ideal para piel normal a seca",
      "Aspecto sumamente natural",
      "Mapeo de pigmentos a medida",
      "Trazos de larga duración"
    ]
  },
  {
    id: "ombre-brows",
    name: "Ombre Powder Brows",
    nameEs: "Cejas Efecto Polvo (Ombre)",
    price: "$375",
    desc: "A soft, misty, powder-filled makeup look gradient that transitions from light at the front to beautifully defined and darker at the tails.",
    descEs: "Un degradado suave que imita el maquillaje con polvo, yendo de más claro al inicio a más oscuro y definido en la colita de la ceja.",
    features: [
      "Perfect for oily or mature skin",
      "Gives a soft makeup/filled-in look",
      "Less touch-ups required",
      "Gentle machine shading method"
    ],
    featuresEs: [
      "Perfecto para piel grasa o madura",
      "Apariencia de maquillaje suave",
      "Requiere menos retoques",
      "Método de sombreado suave con máquina"
    ]
  },
  {
    id: "lip-blushing",
    name: "Lip Blushing",
    nameEs: "Lip Blushing (Color de Labios)",
    price: "$350",
    desc: "Enhance your natural lip shape, boost color, add symmetry, and create the illusion of fuller lips with a soft, healthy tinted blush.",
    descEs: "Mejora la forma natural de tus labios, realza el color, aporta simetría y crea una ilusión de mayor volumen con un tinte suave y saludable.",
    features: [
      "No more smudgeable lip liners",
      "Restores natural lip borders",
      "Beautiful range of rose & peach tones",
      "Heals into a soft, natural tint"
    ],
    featuresEs: [
      "Olvídate de delineadores que se corren",
      "Restaura el borde natural de los labios",
      "Bella gama de tonos rosa y durazno",
      "Sana en un tinte suave y natural"
    ]
  },
  {
    id: "lip-neutralization",
    name: "Lip Neutralization",
    nameEs: "Neutralización de Labios",
    price: "$375",
    desc: "A specialized treatment for cool or dark-toned lips. We neutralize cool undertones first to prep lips for a warmer, brighter target color.",
    descEs: "Tratamiento especializado para labios de tonos oscuros o fríos. Neutralizamos los subtonos fríos primero para lograr un color final cálido y brillante.",
    features: [
      "Balances uneven lip tones",
      "Corrects dark or cool undertones",
      "Requires advanced color theory expertise",
      "Multi-session plans available"
    ],
    featuresEs: [
      "Equilibra tonos de labios desiguales",
      "Corrige subtonos oscuros o fríos",
      "Requiere teoría del color avanzada",
      "Planes de múltiples sesiones disponibles"
    ]
  },
  {
    id: "nano-strokes",
    name: "Nano Strokes",
    nameEs: "Nano Strokes (Trazos Nano)",
    price: "$450",
    desc: "The latest machine-shuffled technique using single micro-needles to create hyper-realistic hair strokes. gentler on skin and lasts longer.",
    descEs: "La última técnica con máquina que usa micro-agujas para dibujar vellos hiperrealistas. Más suave con la piel y de mayor duración.",
    features: [
      "Suitable for oily and sensitive skin",
      "Less trauma to skin tissue",
      "Incredible precision and flow",
      "Longest lasting hair stroke method"
    ],
    featuresEs: [
      "Apto para piel grasa y sensible",
      "Menor trauma para el tejido de la piel",
      "Precisión y flujo increíbles",
      "Método de trazo de vello más duradero"
    ]
  }
];

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    datePref: "Any Day",
    notes: ""
  });

  const t = translations[lang];

  // Open booking modal
  const handleOpenBooking = (serviceName: string = "") => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
    setMobileMenuOpen(false);
  };

  // Submit and redirect to WhatsApp/SMS
  const handleSubmit = (type: "whatsapp" | "sms") => {
    if (!formData.name || !formData.phone) {
      alert(lang === "en" ? "Please fill in your name and phone number." : "Por favor ingresa tu nombre y número de teléfono.");
      return;
    }

    const message = lang === "en" 
      ? `Hello Olivia, I would like to request a booking at Waco Face Artistry!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${selectedService || "Consultation"}\nPreferred Day: ${formData.datePref}\nNotes: ${formData.notes || "None"}\n\n(I understand a $50 deposit is required to confirm).`
      : `¡Hola Olivia, me gustaría solicitar una cita en Waco Face Artistry!\n\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nServicio: ${selectedService || "Consulta"}\nDía Preferido: ${formData.datePref}\nNotas: ${formData.notes || "Ninguna"}\n\n(Entiendo que se requiere un depósito de $50 para confirmar).`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "2547158993"; // Olivia's phone number

    if (type === "whatsapp") {
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    } else {
      window.open(`sms:+1${phoneNumber}?body=${encodedMessage}`, "_blank");
    }

    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-rose-light selection:text-brand-dark">
      
      {/* Sticky Glassmorphism Header */}
      <header className="sticky top-0 z-40 w-full border-b border-brand-rose-light/20 bg-glass transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wide text-brand-dark sm:text-3xl">
                Waco Face Artistry
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-rose font-semibold -mt-1 pl-0.5">
                {t.bilingualBadge}
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium text-brand-dark-soft hover:text-brand-rose transition-colors">
                {t.navServices}
              </a>
              <a href="#about" className="text-sm font-medium text-brand-dark-soft hover:text-brand-rose transition-colors">
                {t.navAbout}
              </a>
              <a href="#location" className="text-sm font-medium text-brand-dark-soft hover:text-brand-rose transition-colors">
                {t.navLocation}
              </a>
              <a href="#contact" className="text-sm font-medium text-brand-dark-soft hover:text-brand-rose transition-colors">
                {t.navContact}
              </a>
            </nav>

            {/* Action Bar */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Switcher */}
              <button 
                onClick={() => setLang(lang === "en" ? "es" : "en")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-rose-light/50 text-xs font-semibold text-brand-dark hover:bg-brand-rose-soft hover:border-brand-rose transition-all"
                title="Change language / Cambiar idioma"
              >
                <Globe className="h-3.5 w-3.5 text-brand-rose" />
                <span>{lang === "en" ? "Español" : "English"}</span>
              </button>

              {/* Book Button */}
              <button 
                onClick={() => handleOpenBooking("")}
                className="gold-gradient hover:opacity-95 text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {t.bookBtn}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-3">
              {/* Language toggle on mobile */}
              <button 
                onClick={() => setLang(lang === "en" ? "es" : "en")}
                className="flex items-center gap-1 p-2 rounded-full border border-brand-rose-light/50 text-xs font-semibold text-brand-dark bg-white/50"
              >
                <Globe className="h-3.5 w-3.5 text-brand-rose" />
                <span>{lang === "en" ? "ES" : "EN"}</span>
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-brand-dark hover:text-brand-rose focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-brand-rose-light/10 bg-brand-cream px-4 py-6 space-y-4 animate-fade-in shadow-inner">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-brand-dark hover:text-brand-rose transition-colors py-2 border-b border-brand-rose-light/10"
            >
              {t.navServices}
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-brand-dark hover:text-brand-rose transition-colors py-2 border-b border-brand-rose-light/10"
            >
              {t.navAbout}
            </a>
            <a 
              href="#location" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-brand-dark hover:text-brand-rose transition-colors py-2 border-b border-brand-rose-light/10"
            >
              {t.navLocation}
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-brand-dark hover:text-brand-rose transition-colors py-2 border-b border-brand-rose-light/10"
            >
              {t.navContact}
            </a>
            <div className="pt-2">
              <button 
                onClick={() => handleOpenBooking("")}
                className="w-full gold-gradient text-white text-center py-3 rounded-full font-medium shadow-md"
              >
                {t.bookBtn}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-32 cream-gradient">
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-brand-rose-light/10 blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-gold-light/10 blur-3xl opacity-60"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
              <div className="inline-flex self-center lg:self-start items-center gap-2 px-4 py-1.5 rounded-full bg-brand-rose-soft border border-brand-rose-light text-brand-rose text-xs font-bold uppercase tracking-widest animate-pulse">
                <SparkleIcon className="h-3.5 w-3.5" />
                {t.heroBadge}
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark leading-[1.1] md:leading-[1.15]">
                {t.heroTitle}
              </h1>
              
              <p className="text-base sm:text-lg text-brand-dark-soft max-w-2xl leading-relaxed mx-auto lg:mx-0">
                {t.heroSubtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button 
                  onClick={() => handleOpenBooking("")}
                  className="w-full sm:w-auto gold-gradient text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:opacity-95 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  {t.bookBtn}
                  <ChevronRight className="h-5 w-5" />
                </button>
                
                <a 
                  href="#services"
                  className="w-full sm:w-auto text-center border border-brand-rose-light hover:border-brand-rose text-brand-dark font-medium px-8 py-4 rounded-full hover:bg-brand-rose-soft transition-all duration-300"
                >
                  {t.navServices}
                </a>
              </div>

              {/* Highlights */}
              <div className="pt-8 border-t border-brand-rose-light/20 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-brand-dark-soft">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-brand-rose" />
                  <span>Licensed & Certified Artist</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-brand-rose" />
                  <span>Personal Consultation Included</span>
                </div>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2rem] overflow-hidden border-[6px] border-white shadow-2xl">
                <Image 
                  src="/hero.png" 
                  alt="Waco Face Artistry Beauty Studio"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/25 via-transparent to-transparent"></div>
                {/* Gold Frame Highlight */}
                <div className="absolute inset-4 border border-brand-gold/30 rounded-[1.5rem] pointer-events-none"></div>
              </div>
              
              {/* Floating decorative badge */}
              <div className="absolute -bottom-6 -right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-brand-rose-light flex items-center gap-3">
                <div className="bg-brand-rose-soft p-2.5 rounded-xl">
                  <Phone className="h-5 w-5 text-brand-rose animate-bounce" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-brand-rose tracking-wider">Call to Book</p>
                  <a href="tel:2547158993" className="text-sm font-bold text-brand-dark hover:text-brand-rose transition-colors">
                    254-715-8993
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Signals Strip */}
      <section className="bg-brand-dark text-brand-rose-soft py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-brand-rose-light/10">
            <div className="flex flex-col items-center justify-center p-4">
              <div className="flex items-center gap-1 text-brand-gold mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-xl font-serif font-bold text-white">{t.trustRating}</p>
              <p className="text-xs text-brand-rose-light/80 mt-0.5">{t.trustRatingDesc}</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 pt-8 md:pt-4">
              <Users className="h-6 w-6 text-brand-gold mb-2" />
              <p className="text-xl font-serif font-bold text-white">{t.trustFollowers}</p>
              <p className="text-xs text-brand-rose-light/80 mt-0.5">{t.trustFollowersDesc}</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 pt-8 md:pt-4">
              <ShieldCheck className="h-6 w-6 text-brand-gold mb-2" />
              <p className="text-xl font-serif font-bold text-white">{t.trustClients}</p>
              <p className="text-xs text-brand-rose-light/80 mt-0.5">{t.trustClientsDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark">
              {t.servicesTitle}
            </h2>
            <p className="text-brand-dark-soft text-base sm:text-lg leading-relaxed">
              {t.servicesSubtitle}
            </p>
            <div className="w-16 h-1 bg-brand-rose mx-auto rounded-full mt-4"></div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <div 
                key={service.id} 
                className="flex flex-col justify-between p-8 rounded-3xl bg-brand-cream border border-brand-rose-light/30 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Title & Price */}
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="font-serif text-xl font-bold text-brand-dark group-hover:text-brand-rose transition-colors duration-300">
                      {lang === "en" ? service.name : service.nameEs}
                    </h3>
                    <div className="flex flex-col items-end">
                      <span className="font-serif text-lg font-bold text-brand-rose">
                        {service.price}
                      </span>
                      {service.touchUpPrice && (
                        <span className="text-[10px] text-brand-dark-soft/75 mt-0.5">
                          {service.touchUpPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-brand-dark-soft/90 leading-relaxed mb-6">
                    {lang === "en" ? service.desc : service.descEs}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3 mb-8">
                    {(lang === "en" ? service.features : service.featuresEs).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-brand-dark-soft">
                        <Check className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button
                  onClick={() => handleOpenBooking(lang === "en" ? service.name : service.nameEs)}
                  className="w-full py-3 px-4 rounded-xl border border-brand-rose/40 hover:border-brand-rose font-medium text-sm text-brand-dark bg-white hover:bg-brand-rose hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="h-4 w-4" />
                  {t.bookService}
                </button>
              </div>
            ))}
          </div>

          {/* Pricing Disclaimer Card */}
          <div className="mt-12 p-6 rounded-2xl bg-brand-rose-soft/40 border border-brand-rose-light/50 max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 items-center">
            <div className="bg-brand-rose-light p-3 rounded-full text-brand-rose">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-brand-dark">
                {lang === "en" ? "Combo Brows Pricing Details" : "Detalles de Precio de Cejas Combinadas"}
              </p>
              <p className="text-xs text-brand-dark-soft/90 mt-1">
                {lang === "en" 
                  ? "Combo Brows are priced at $400 for the first session and $150 for the required 6-8 week touch-up session to seal in details." 
                  : "Las Cejas Combinadas tienen un costo de $400 para la primera sesión y $150 para el retoque requerido a las 6-8 semanas."}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-brand-cream-dark/30 border-y border-brand-rose-light/20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-5 order-last lg:order-first flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden border-[6px] border-white shadow-xl">
                <Image 
                  src="/artist.png" 
                  alt="Olivia - Waco Face Artistry Artist"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                {/* Accent lines */}
                <div className="absolute inset-4 border border-brand-gold/30 rounded-[1.5rem] pointer-events-none"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="inline-flex self-start items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-rose/10 text-brand-rose text-xs font-bold uppercase tracking-wider">
                {t.aboutSub}
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark leading-tight">
                {t.aboutTitle}
              </h2>
              
              <p className="text-base text-brand-dark-soft leading-relaxed">
                {t.aboutText1}
              </p>
              
              <p className="text-base text-brand-dark-soft leading-relaxed">
                {t.aboutText2}
              </p>

              {/* Booking Process Card */}
              <div className="mt-4 p-8 rounded-3xl bg-white border border-brand-rose-light/30 shadow-md">
                <h3 className="font-serif text-lg font-bold text-brand-dark mb-2">
                  {t.processTitle}
                </h3>
                <p className="text-xs text-brand-dark-soft mb-6">
                  {t.processSubtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-brand-rose uppercase tracking-wider">{lang === "en" ? "Step 1" : "Paso 1"}</p>
                    <h4 className="text-sm font-bold text-brand-dark">{lang === "en" ? "1. Select & Request" : "1. Elige y Solicita"}</h4>
                    <p className="text-[11px] text-brand-dark-soft leading-relaxed">{t.step1Desc}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-brand-rose uppercase tracking-wider">{lang === "en" ? "Step 2" : "Paso 2"}</p>
                    <h4 className="text-sm font-bold text-brand-dark">{lang === "en" ? "2. Review & Call" : "2. Revisión y Llamada"}</h4>
                    <p className="text-[11px] text-brand-dark-soft leading-relaxed">{t.step2Desc}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-brand-rose uppercase tracking-wider">{lang === "en" ? "Step 3" : "Paso 3"}</p>
                    <h4 className="text-sm font-bold text-brand-dark">{lang === "en" ? "3. $50 Deposit" : "3. Depósito de $50"}</h4>
                    <p className="text-[11px] text-brand-dark-soft leading-relaxed">{t.step3Desc}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-rose-light/20 flex flex-col sm:flex-row items-center gap-3 justify-between">
                  <span className="text-xs font-semibold text-brand-dark-soft">
                    {lang === "en" ? "We accept: Zelle, Venmo, & Cash" : "Aceptamos: Zelle, Venmo y Efectivo"}
                  </span>
                  <button 
                    onClick={() => handleOpenBooking("")}
                    className="w-full sm:w-auto gold-gradient text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-sm"
                  >
                    {t.bookBtn}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section id="location" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Info */}
            <div className="lg:col-span-4 flex flex-col space-y-6">
              <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold-dark text-xs font-bold uppercase tracking-wider">
                <MapPin className="h-4 w-4" />
                {lang === "en" ? "Our Location" : "Nuestra Ubicación"}
              </div>
              <h2 className="font-serif text-3xl font-bold text-brand-dark">
                {t.locationTitle}
              </h2>
              <p className="text-sm text-brand-dark-soft leading-relaxed">
                {t.locationDesc}
              </p>
              
              <div className="bg-brand-cream border border-brand-rose-light/35 p-6 rounded-2xl space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-rose shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-brand-dark">{lang === "en" ? "Studio Address" : "Dirección del Estudio"}</p>
                    <p className="text-sm text-brand-dark-soft mt-0.5">{t.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-brand-rose shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-brand-dark">{lang === "en" ? "Studio Hours" : "Horario del Estudio"}</p>
                    <p className="text-sm text-brand-dark-soft mt-0.5">
                      {lang === "en" ? "By Appointment Only" : "Sólo con Cita Previa"}
                    </p>
                    <p className="text-xs text-brand-dark-soft/75 mt-0.5">
                      {lang === "en" ? "Flexible weekend & evening slots" : "Horarios flexibles fines de semana y tardes"}
                    </p>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.google.com/?q=717+Lake+Air+Dr,+Waco,+TX+76710"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center border border-brand-rose text-brand-dark hover:bg-brand-rose hover:text-white font-medium py-3 rounded-full transition-all duration-300 text-sm flex items-center justify-center gap-2"
              >
                <span>{t.getDirections}</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            {/* Interactive Map Embed */}
            <div className="lg:col-span-8 h-[400px] w-full rounded-[2rem] overflow-hidden border border-brand-rose-light/30 shadow-lg relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.0390161405085!2d-97.1818165243567!3d31.527376674211158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864f837375bfefeb%3A0xe54d2417730e2270!2s717%20Lake%20Air%20Dr%2C%20Waco%2C%20TX%2076710!5e0!3m2!1sen!2sus!4v1783764580000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <section id="contact" className="py-24 bg-brand-dark text-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                {t.contactTitle}
              </h2>
              <p className="text-brand-rose-light/80 text-base max-w-lg leading-relaxed">
                {t.contactSubtitle}
              </p>
              
              <div className="space-y-6 pt-4">
                {/* Click-to-Call */}
                <a 
                  href="tel:2547158993" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-brand-dark-soft hover:bg-brand-rose/20 border border-brand-rose-light/10 hover:border-brand-rose/40 transition-all duration-300 group"
                >
                  <div className="bg-brand-gold p-3 rounded-xl text-brand-dark group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-brand-rose-light/60 tracking-wider">{t.callUs}</p>
                    <p className="text-lg font-serif font-bold text-white group-hover:text-brand-rose-light transition-colors">254-715-8993</p>
                  </div>
                </a>

                {/* Instagram DM */}
                <a 
                  href="https://instagram.com/wacofaceartistry" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-brand-dark-soft hover:bg-brand-rose/20 border border-brand-rose-light/10 hover:border-brand-rose/40 transition-all duration-300 group"
                >
                  <div className="bg-brand-gold p-3 rounded-xl text-brand-dark group-hover:scale-110 transition-transform">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-brand-rose-light/60 tracking-wider">{t.instagramDM}</p>
                    <p className="text-lg font-serif font-bold text-white group-hover:text-brand-rose-light transition-colors">@wacofaceartistry</p>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:wacofaceartistry@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-brand-dark-soft hover:bg-brand-rose/20 border border-brand-rose-light/10 hover:border-brand-rose/40 transition-all duration-300 group"
                >
                  <div className="bg-brand-gold p-3 rounded-xl text-brand-dark group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-brand-rose-light/60 tracking-wider">{t.emailUs}</p>
                    <p className="text-lg font-serif font-bold text-white group-hover:text-brand-rose-light transition-colors">wacofaceartistry@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Contact Form Card */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-brand-dark-soft border border-brand-rose-light/15 shadow-xl">
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                {lang === "en" ? "Ready to wake up beautiful?" : "¿Lista para despertar hermosa?"}
              </h3>
              <p className="text-xs text-brand-rose-light/70 mb-6">
                {lang === "en" 
                  ? "Send a message directly to Olivia's workspace phone below to get started on your customized permanent makeup application."
                  : "Envía un mensaje directo al teléfono del estudio de Olivia para comenzar con tu aplicación de maquillaje permanente."}
              </p>

              <button 
                onClick={() => handleOpenBooking("")}
                className="w-full gold-gradient hover:opacity-95 text-white py-4 rounded-full font-semibold shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>{t.bookBtn}</span>
                <ChevronRight className="h-4 w-4" />
              </button>

              <div className="mt-6 text-center">
                <span className="text-[11px] text-brand-rose-light/50">
                  {t.depositNotice}
                </span>
              </div>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className="mt-20 pt-8 border-t border-brand-rose-light/10 text-center text-xs text-brand-rose-light/50 space-y-2">
            <p>{t.footerCredits}</p>
            <p className="text-[10px] tracking-wider text-brand-gold/60 uppercase">
              {lang === "en" ? "Waco, Texas Permanent Makeup Studio" : "Estudio de Maquillaje Permanente en Waco, Texas"}
            </p>
          </div>

        </div>
      </section>

      {/* Interactive Booking Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg p-8 rounded-3xl bg-brand-cream border border-brand-rose-light shadow-2xl overflow-y-auto max-h-[90vh]">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-brand-dark-soft hover:text-brand-rose transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Title */}
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-bold text-brand-dark">
                {t.modalTitle}
              </h3>
              <p className="text-xs text-brand-dark-soft mt-1 leading-relaxed">
                {t.modalSub}
              </p>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                  {t.formName} *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Maria Rodriguez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-brand-rose-light/50 bg-white text-sm text-brand-dark focus:outline-none focus:border-brand-rose transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                  {t.formPhone} *
                </label>
                <input 
                  type="tel" 
                  required
                  placeholder="254-XXX-XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-brand-rose-light/50 bg-white text-sm text-brand-dark focus:outline-none focus:border-brand-rose transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                  {t.formService}
                </label>
                <select 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-brand-rose-light/50 bg-white text-sm text-brand-dark focus:outline-none focus:border-brand-rose transition-all"
                >
                  <option value="">-- Choose one --</option>
                  {servicesList.map((s) => (
                    <option key={s.id} value={lang === "en" ? s.name : s.nameEs}>
                      {lang === "en" ? s.name : s.nameEs} ({s.price})
                    </option>
                  ))}
                  <option value="Consultation">Consultation / Consulta</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                  {t.formDate}
                </label>
                <select 
                  value={formData.datePref}
                  onChange={(e) => setFormData({ ...formData, datePref: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-brand-rose-light/50 bg-white text-sm text-brand-dark focus:outline-none focus:border-brand-rose transition-all"
                >
                  <option value="Any Day">{lang === "en" ? "Any Day" : "Cualquier día"}</option>
                  <option value="Tuesday">{lang === "en" ? "Tuesday" : "Martes"}</option>
                  <option value="Wednesday">{lang === "en" ? "Wednesday" : "Miércoles"}</option>
                  <option value="Thursday">{lang === "en" ? "Thursday" : "Jueves"}</option>
                  <option value="Friday">{lang === "en" ? "Friday" : "Viernes"}</option>
                  <option value="Saturday">{lang === "en" ? "Saturday" : "Sábado"}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                  {t.formNotes}
                </label>
                <textarea 
                  rows={3}
                  placeholder={lang === "en" ? "Describe your brow goals..." : "Describe tus metas para tus cejas o labios..."}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-brand-rose-light/50 bg-white text-sm text-brand-dark focus:outline-none focus:border-brand-rose transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-2">
                <button 
                  onClick={() => handleSubmit("whatsapp")}
                  className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-5 w-5" />
                  {t.formSubmit}
                </button>

                <button 
                  onClick={() => handleSubmit("sms")}
                  className="w-full py-3.5 rounded-full gold-gradient hover:opacity-95 text-white font-bold text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  {t.formSubmitSMS}
                </button>
              </div>

              <div className="mt-4 text-center">
                <span className="text-[10px] text-brand-dark-soft/75 block">
                  {t.depositNotice}
                </span>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

// Inline Sparkle Icon
function SparkleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <path d="m18 6-12 12" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
