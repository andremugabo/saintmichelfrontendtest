"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "fr" | "rw"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.announcements": "Announcements",

    // About Dropdown
    "about.priests": "Our Priests",
    "about.catholic_action": "Catholic Action",
    "about.choirs": "Our Choirs",
    "about.community": "Community",
    "about.about": "About Us",

    // Home Page
    "home.welcome": "Welcome to Saint Michel Cathedral",
    "home.join": "Join Our Community",
    "home.experience": "Experience centuries of history, art, and spirituality in the heart of our city",
    "home.welcome_section": "Welcome to Saint Michel Cathedral",
    "home.welcome_text":
      "Saint Michel Cathedral stands as a testament to human faith and architectural brilliance. Built over centuries, it represents the pinnacle of Gothic architecture and continues to inspire visitors from around the world.",
    "home.welcome_text2":
      "Whether you come to worship, to admire the art and architecture, or to connect with history, Saint Michel Cathedral offers a profound experience for all visitors.",
    "home.learn_more": "Learn More",
    "home.highlights": "Cathedral Highlights",
    "home.architecture": "Stunning Architecture",
    "home.architecture_desc":
      "Marvel at the flying buttresses, soaring spires, and intricate stone carvings that define Gothic architecture.",
    "home.stained_glass": "Stained Glass Masterpieces",
    "home.stained_glass_desc":
      "Experience the breathtaking beauty of our medieval stained glass windows that bathe the interior in colored light.",
    "home.relics": "Sacred Relics",
    "home.relics_desc":
      "Discover our collection of sacred relics and artifacts that tell the story of faith through the centuries.",
    "home.upcoming": "Upcoming Events",
    "home.view_all": "View All Events",

    // Services Page
    "services.title": "Services",
    "services.mass_schedule": "Mass Schedule",
    "services.confessions": "Confessions",
    "services.baptism": "Baptism",
    "services.communion": "First Communion",
    "services.confirmation": "Confirmation",
    "services.marriage": "Marriage",
    "services.weekday": "Weekday Mass",
    "services.saturday": "Saturday Vigil",
    "services.sunday": "Sunday Mass",
    "services.holy_days": "Holy Days",
    "services.sacraments": "Sacraments",
    "services.participation": "Service Participation",
    "services.preparation": "Sacramental Preparation",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.office_hours": "Office Hours",
    "contact.form_name": "Your Name",
    "contact.form_email": "Your Email",
    "contact.form_subject": "Subject",
    "contact.form_message": "Message",
    "contact.form_submit": "Send Message",
    "contact.location": "Our Location",

    // Announcements Page
    "announcements.title": "Announcements",
    "announcements.latest": "Latest Announcements",
    "announcements.important": "Important",
    "announcements.all": "All Announcements",
    "announcements.search": "Search announcements...",
    "announcements.filter": "Filter by category",
    "announcements.date": "Date",
    "announcements.category": "Category",
    "announcements.read_more": "Read More",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.contact": "Contact",

    // Donation
    "donation.support": "Support the Cathedral",
    "donation.button": "Donate Now",
    "donation.description":
      "Your donation helps preserve this historic monument and supports our mission of education, worship, and community service.",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.announcements": "Annonces",

    // About Dropdown
    "about.priests": "Nos Prêtres",
    "about.catholic_action": "Action Catholique",
    "about.choirs": "Nos Chorales",
    "about.community": "Communauté",
    "about.about": "À Propos de Nous",

    // Home Page
    "home.welcome": "Bienvenue à la Cathédrale Saint Michel",
    "home.join": "Rejoignez Notre Communauté",
    "home.experience": "Découvrez des siècles d'histoire, d'art et de spiritualité au cœur de notre ville",
    "home.welcome_section": "Bienvenue à la Cathédrale Saint Michel",
    "home.welcome_text":
      "La Cathédrale Saint Michel témoigne de la foi humaine et du génie architectural. Construite au fil des siècles, elle représente l'apogée de l'architecture gothique et continue d'inspirer les visiteurs du monde entier.",
    "home.welcome_text2":
      "Que vous veniez pour prier, pour admirer l'art et l'architecture, ou pour vous connecter à l'histoire, la Cathédrale Saint Michel offre une expérience profonde à tous les visiteurs.",
    "home.learn_more": "En Savoir Plus",
    "home.highlights": "Points Forts de la Cathédrale",
    "home.architecture": "Architecture Impressionnante",
    "home.architecture_desc":
      "Admirez les arcs-boutants, les flèches élancées et les sculptures en pierre complexes qui définissent l'architecture gothique.",
    "home.stained_glass": "Chefs-d'œuvre de Vitraux",
    "home.stained_glass_desc":
      "Découvrez la beauté époustouflante de nos vitraux médiévaux qui baignent l'intérieur de lumière colorée.",
    "home.relics": "Reliques Sacrées",
    "home.relics_desc":
      "Découvrez notre collection de reliques sacrées et d'artefacts qui racontent l'histoire de la foi à travers les siècles.",
    "home.upcoming": "Événements à Venir",
    "home.view_all": "Voir Tous les Événements",

    // Services Page
    "services.title": "Services",
    "services.mass_schedule": "Horaires des Messes",
    "services.confessions": "Confessions",
    "services.baptism": "Baptême",
    "services.communion": "Première Communion",
    "services.confirmation": "Confirmation",
    "services.marriage": "Mariage",
    "services.weekday": "Messe en Semaine",
    "services.saturday": "Veillée du Samedi",
    "services.sunday": "Messe du Dimanche",
    "services.holy_days": "Jours Saints",
    "services.sacraments": "Sacrements",
    "services.participation": "Participation aux Services",
    "services.preparation": "Préparation Sacramentelle",

    // Contact Page
    "contact.title": "Contactez-Nous",
    "contact.address": "Adresse",
    "contact.phone": "Téléphone",
    "contact.email": "Email",
    "contact.office_hours": "Heures de Bureau",
    "contact.form_name": "Votre Nom",
    "contact.form_email": "Votre Email",
    "contact.form_subject": "Sujet",
    "contact.form_message": "Message",
    "contact.form_submit": "Envoyer le Message",
    "contact.location": "Notre Emplacement",

    // Announcements Page
    "announcements.title": "Annonces",
    "announcements.latest": "Dernières Annonces",
    "announcements.important": "Important",
    "announcements.all": "Toutes les Annonces",
    "announcements.search": "Rechercher des annonces...",
    "announcements.filter": "Filtrer par catégorie",
    "announcements.date": "Date",
    "announcements.category": "Catégorie",
    "announcements.read_more": "Lire Plus",

    // Footer
    "footer.rights": "Tous droits réservés",
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions d'Utilisation",
    "footer.contact": "Contact",

    // Donation
    "donation.support": "Soutenez la Cathédrale",
    "donation.button": "Faire un Don",
    "donation.description":
      "Votre don aide à préserver ce monument historique et soutient notre mission d'éducation, de culte et de service communautaire.",
  },
  rw: {
    // Navigation
    "nav.home": "Ahabanza",
    "nav.about": "Ibyerekeye",
    "nav.services": "Serivisi",
    "nav.contact": "Twandikire",
    "nav.announcements": "Amatangazo",

    // About Dropdown
    "about.priests": "Abapadiri Bacu",
    "about.catholic_action": "Ibikorwa bya Gatolika",
    "about.choirs": "Abaririmbyi Bacu",
    "about.community": "Umuryango",
    "about.about": "Ibyerekeye Twebwe",

    // Home Page
    "home.welcome": "Murakaza Neza muri Katedrali ya Saint Michel",
    "home.join": "Ifatanye n'Umuryango Wacu",
    "home.experience": "Uzabone amateka, ubugeni n'ubwenge mu mutima w'umujyi wacu",
    "home.welcome_section": "Murakaza Neza muri Katedrali ya Saint Michel",
    "home.welcome_text":
      "Katedrali ya Saint Michel ni ubuhamya bw'ukwemera kw'abantu n'ubuhanga mu bwubatsi. Yubatswe mu myaka amagana, ihagarariye impera y'ubwubatsi bwa gotike kandi ikomeza guhumuriza abashyitsi baturuka hirya no hino ku isi.",
    "home.welcome_text2":
      "Niba uza gusenga, cyangwa kureba ubugeni n'ubwubatsi, cyangwa kwifatanya n'amateka, Katedrali ya Saint Michel itanga uburambe bwimbitse ku bashyitsi bose.",
    "home.learn_more": "Menya Byinshi",
    "home.highlights": "Ibiranga Katedrali",
    "home.architecture": "Ubwubatsi Butangaje",
    "home.architecture_desc":
      "Witegereze imyubakire, imisozi miremire, n'ibicuruzwa by'amabuye bisobanutse bigaragaza ubwubatsi bwa gotike.",
    "home.stained_glass": "Amadirishya y'Amabara",
    "home.stained_glass_desc": "Uzabone ubwiza butangaje bw'amadirishya yacu ya kera atanga urumuri rw'amabara mu nzu.",
    "home.relics": "Ibintu Byera",
    "home.relics_desc": "Uzabone imbuga yacu y'ibintu byera n'ibikoresho bivuga inkuru y'ukwemera mu myaka amagana.",
    "home.upcoming": "Ibikorwa Bizaza",
    "home.view_all": "Reba Ibikorwa Byose",

    // Services Page
    "services.title": "Serivisi",
    "services.mass_schedule": "Gahunda ya Misa",
    "services.confessions": "Kwicuza",
    "services.baptism": "Umubatizo",
    "services.communion": "Ukaristiya ya Mbere",
    "services.confirmation": "Gukomezwa",
    "services.marriage": "Gushyingirwa",
    "services.weekday": "Misa yo mu Cyumweru",
    "services.saturday": "Misa yo ku Isabato",
    "services.sunday": "Misa yo ku Cyumweru",
    "services.holy_days": "Iminsi Mikuru",
    "services.sacraments": "Amasakramentu",
    "services.participation": "Kwitabira Serivisi",
    "services.preparation": "Gutegura Amasakramentu",

    // Contact Page
    "contact.title": "Twandikire",
    "contact.address": "Aderesi",
    "contact.phone": "Telefoni",
    "contact.email": "Imeyili",
    "contact.office_hours": "Amasaha y'Akazi",
    "contact.form_name": "Izina Ryawe",
    "contact.form_email": "Imeyili Yawe",
    "contact.form_subject": "Impamvu",
    "contact.form_message": "Ubutumwa",
    "contact.form_submit": "Ohereza Ubutumwa",
    "contact.location": "Aho Duherereye",

    // Announcements Page
    "announcements.title": "Amatangazo",
    "announcements.latest": "Amatangazo Mashya",
    "announcements.important": "Byihutirwa",
    "announcements.all": "Amatangazo Yose",
    "announcements.search": "Shakisha amatangazo...",
    "announcements.filter": "Shungura ukurikije icyiciro",
    "announcements.date": "Itariki",
    "announcements.category": "Icyiciro",
    "announcements.read_more": "Soma Byinshi",

    // Footer
    "footer.rights": "Uburenganzira bwose bwihariwe",
    "footer.privacy": "Politiki y'Ibanga",
    "footer.terms": "Amabwiriza y'Ikoreshwa",
    "footer.contact": "Twandikire",

    // Donation
    "donation.support": "Shyigikira Katedrali",
    "donation.button": "Tanga Impano",
    "donation.description":
      "Impano yawe ifasha kubungabunga iki kigo cy'amateka kandi ishyigikira umurimo wacu w'uburezi, gusenga no gufasha umuryango.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

