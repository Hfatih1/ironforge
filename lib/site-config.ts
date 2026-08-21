export const siteConfig = {
  company: {
    legalName: "IRON FORGE",
    legalForm: {
      sr: "Preduzetnik",
      en: "Sole proprietorship",
    },
    pib: "111976192",
    maticniBroj: "65781026",
    address: "Save Kovačevića br. 5",
    city: "Novi Pazar",
    postalCode: "36300",
    country: "Srbija",
    phone: "+38162298588",
    email: "info@iron-forge.net",
    workingHours: {
      sr: "Pon–Sub: 07:00–17:00",
      en: "Mon–Sat: 07:00–17:00",
    },
  },
  map: {
    lat: 43.144491455823776,
    lng: 20.525800558082445,
    embedUrl:
      "https://maps.google.com/maps?q=43.144491455823776,20.525800558082445&hl=sr&z=16&output=embed",
  },
  social: {
    instagram: "https://www.instagram.com/ironforgenp/",
    facebook: "https://www.facebook.com/IronForgeNP",
    linkedin: "",
  },
  whatsapp: "+38162298588",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
