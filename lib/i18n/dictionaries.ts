import type { Dictionary } from "./types";

const serviceItemsSr = {
  "metalne-konstrukcije": {
    title: "Metalne konstrukcije",
    short: "Hale, nosači, platforme i noseće konstrukcije po projektu.",
  },
  "metalni-namestaj": {
    title: "Metalni nameštaj",
    short: "Stolovi, stolice, police i enterijerski elementi od metala.",
  },
  bravarija: {
    title: "Bravarija po meri",
    short: "Kapije, ograde, nadstrešnice i bravarski radovi prema specifikaciji.",
  },
  "cnc-obrada": {
    title: "CNC obrada",
    short: "Precizno sečenje i obrada metala po tehničkom crtežu.",
  },
  kapije: {
    title: "Kapije",
    short: "Klizne i krilne kapije, sa pripadajućom konstrukcijom i montažom.",
  },
  ograde: {
    title: "Ograde",
    short: "Dvorišne, terasne i stepenišne ograde za poslovne i stambene objekte.",
  },
  nadstresnice: {
    title: "Nadstrešnice i stepeništa",
    short: "Nadstrešnice, stepeništa i prilazne konstrukcije po meri.",
  },
  "zavarivanje-servis": {
    title: "Zavarivanje i servis",
    short: "Zavarivanje, popravke i servis postojećih metalnih konstrukcija.",
  },
};

const serviceItemsEn = {
  "steel-structures": {
    title: "Steel structures",
    short: "Halls, supports, platforms and load-bearing structures to specification.",
  },
  "metal-furniture": {
    title: "Metal furniture",
    short: "Tables, chairs, shelving and interior metal elements.",
  },
  metalwork: {
    title: "Custom metalwork",
    short: "Gates, fences, canopies and metal fabrication to your drawings.",
  },
  "cnc-cutting": {
    title: "CNC cutting",
    short: "Precision metal cutting and machining from technical drawings.",
  },
  gates: {
    title: "Gates",
    short: "Sliding and swing gates with supporting structures and installation.",
  },
  fences: {
    title: "Fences",
    short: "Perimeter, terrace and stair railings for commercial and residential sites.",
  },
  "canopies-stairs": {
    title: "Canopies & stairs",
    short: "Custom canopies, staircases and access structures.",
  },
  "welding-service": {
    title: "Welding & service",
    short: "Welding, repairs and maintenance of existing metal structures.",
  },
};

export const dictionaries: Record<"sr" | "en", Dictionary> = {
  sr: {
    meta: {
      title: "Iron Forge — Metalne konstrukcije i bravarija po meri",
      description:
        "Proizvodnja metalnih konstrukcija, nameštaja, bravarije i CNC obrade. Saradnja sa firmama u Srbiji i EU — po crtežu, uz poštovanje rokova.",
    },
    nav: {
      services: "Usluge",
      whyUs: "Zašto mi",
      process: "Proces",
      gallery: "Galerija",
      about: "O nama",
      faq: "Pitanja",
      contact: "Kontakt",
      cta: "Zatraži ponudu",
      menu: "Meni",
      closeMenu: "Zatvori meni",
    },
    hero: {
      title: "Metal po meri.\nBez posrednika.",
      subtitle:
        "Proizvodimo metalne konstrukcije, nameštaj i bravarske radove za firme koje traže pouzdanog kooperanta — po tehničkom crtežu, sa direktnom komunikacijom i jasnim rokovima.",
      ctaPrimary: "Zatraži ponudu",
      ctaSecondary: "Pogledaj radove",
    },
    footer: {
      tagline: "Metalne konstrukcije, bravarija i CNC obrada.",
      navigation: "Navigacija",
      contact: "Kontakt",
      legal: "Pravni podaci",
      privacy: "Politika privatnosti",
      rights: "Sva prava zadržana.",
    },
    services: {
      title: "Šta radimo",
      subtitle:
        "Osam oblasti u kojima podržavamo investitore, izvođače i proizvođače — od ideje do montaže.",
      learnMore: "Detaljnije",
      items: serviceItemsSr,
    },
    whyUs: {
      title: "Zašto Iron Forge",
      subtitle:
        "Bez marketinških brojki — samo ono što za poslovnog kupca zaista ima značaj.",
      items: [
        {
          title: "Izrada po crtežu",
          text: "Radimo direktno od vašeg tehničkog crteža ili skice. Nema prilagođavanja gotovih rešenja — svaki element se proizvodi za vaš projekat.",
        },
        {
          title: "CNC preciznost",
          text: "CNC sečenje i obrada omogućavaju ponavljanu tačnost i čiste spojeve, bilo da se radi o ogradi, maski ili enterijerskom elementu.",
        },
        {
          title: "Direktna komunikacija",
          text: "Razgovor ide direktno sa radionicom. Bez posrednika, bez prebacivanja odgovornosti — znate tačno sa kim radite i ko stoji iza ponude.",
        },
        {
          title: "Poštovanje rokova",
          text: "Rok isporuke se definiše u ponudi i drži se dogovora. Ako se nešto promeni, obaveštavamo odmah, pre nego što postane problem.",
        },
      ],
    },
    process: {
      title: "Kako radimo",
      subtitle:
        "Jasan proces smanjuje rizik za obe strane — posebno kada saradnja počinje mejlom ili preporukom.",
      steps: [
        {
          title: "Upit i konsultacija",
          text: "Pošaljete opis posla, crtež ili fotografiju. Razjasnimo obim, materijal i rok. Odgovor stiže u roku od jednog radnog dana.",
        },
        {
          title: "Tehnički crtež i ponuda",
          text: "Na osnovu specifikacije pripremamo ponudu sa jasnom stavkom po stavci — materijal, obrada, transport i montaža ako je uključena.",
        },
        {
          title: "Proizvodnja",
          text: "Nakon potvrde narudžbine prelazimo u proizvodnju. Za složenije projekte šaljemo fotografije u toku rada.",
        },
        {
          title: "Isporuka i montaža",
          text: "Gotov proizvod isporučujemo na lokaciju ili montiramo na licu mesta, u zavisnosti od dogovora u ponudi.",
        },
      ],
    },
    about: {
      title: "O nama",
      paragraphs: [
        "Iron Forge je radionica za metalne konstrukcije, bravariju i CNC obradu sa sedištem u Novom Pazaru. Specijalizovani smo za izradu po meri — od ograda i kapija, preko enterijerskog nameštaja, do preciznih CNC elemenata za industrijske i stambene projekte.",
        "Radimo sa domaćim investitorima i firmama iz regiona i EU koje traže pouzdanog kooperanta za metalne radove. Naš pristup je jednostavan: jasna ponuda, direktan kontakt i posao urađen kako je dogovoreno.",
        "Ako tražite partnera za podugovaranje ili jednokratnu izradu po crtežu, pošaljite upit — odgovorićemo sa konkretnom ponudom, bez obaveze.",
      ],
    },
    faq: {
      title: "Česta pitanja",
      items: [
        {
          question: "Da li radite isključivo po dostavljenom crtežu?",
          answer:
            "Preferiramo rad po tehničkom crtežu ili detaljnoj skici, jer to garantuje tačnost. Ako crtež nemate, možemo pomoći oko osnovne specifikacije i mere na osnovu vaših zahteva i fotografija lokacije.",
        },
        {
          question: "Koje materijale koristite?",
          answer:
            "Primarno radimo sa čelikom, aluminijumom i kombinacijama sa drvetom ili staklom, u zavisnosti od projekta. Materijal se definiše u ponudi pre početka proizvodnje.",
        },
        {
          question: "Da li izvozite proizvode u EU?",
          answer:
            "Da. Isporuku organizujemo za klijente u Srbiji i inostranstvu. U ponudi se navode uslovi transporta i rok isporuke za konkretnu destinaciju.",
        },
        {
          question: "Kako se formira cena?",
          answer:
            "Cena zavisi od materijala, obima obrade, CNC vremena, zavarivanja i montaže. Svaka ponuda je individualna i sadrži jasan opis stavki — bez skrivenih troškova.",
        },
        {
          question: "Koji su rokovi izrade?",
          answer:
            "Rok zavisi od složenosti i trenutnog obima posla. U ponudi se navodi tačan datum isporuke. Za hitne intervencije kontaktirajte nas direktno — proverićemo mogućnost prioritetne izrade.",
        },
        {
          question: "Da li vršite montažu na licu mesta?",
          answer:
            "Da, montaža je moguća za kapije, ograde, konstrukcije i nameštaj. U ponudi se jasno navodi da li je montaža uključena ili se isporučuje samo proizvod.",
        },
        {
          question: "Koliko brzo dobijam odgovor na upit?",
          answer:
            "Na upite poslate radnim danom odgovaramo u roku od 24 sata. Poruke poslate vikendom obrađujemo narednog radnog dana.",
        },
      ],
    },
    gallery: {
      title: "Galerija radova",
      subtitle: "Pregled realizovanih projekata — ograde, kapije, nameštaj i CNC obrada.",
      filterAll: "Sve",
      close: "Zatvori",
      previous: "Prethodna",
      next: "Sledeća",
    },
    contact: {
      title: "Kontakt",
      subtitle: "Pošaljite upit sa opisom posla ili crtežom — odgovorićemo sa ponudom.",
      name: "Ime i prezime",
      company: "Naziv firme",
      email: "E-mail",
      phone: "Telefon",
      jobType: "Tip posla",
      jobTypePlaceholder: "Izaberite kategoriju",
      message: "Poruka",
      send: "Pošalji upit",
      sending: "Slanje…",
      orReach: "Ili nas kontaktirajte direktno:",
      mapLabel: "Lokacija radionice Iron Forge, Novi Pazar",
    },
    cookies: {
      message:
        "Koristimo kolačiće za analitiku kako bismo razumeli korišćenje sajta. Možete prihvatiti ili odbiti.",
      accept: "Prihvati",
      reject: "Odbij",
      privacyLink: "Politika privatnosti",
    },
  },
  en: {
    meta: {
      title: "Iron Forge — Custom metal fabrication & steel structures",
      description:
        "Metal structures, furniture, metalwork and CNC cutting for companies in Serbia and the EU. Built to drawing, delivered on schedule.",
    },
    nav: {
      services: "Services",
      whyUs: "Why us",
      process: "Process",
      gallery: "Gallery",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      cta: "Request a quote",
      menu: "Menu",
      closeMenu: "Close menu",
    },
    hero: {
      title: "Custom metal.\nDirect from the shop.",
      subtitle:
        "We manufacture steel structures, metal furniture and metalwork for companies looking for a reliable subcontractor — built to your drawings, with direct communication and clear lead times.",
      ctaPrimary: "Request a quote",
      ctaSecondary: "View our work",
    },
    footer: {
      tagline: "Metal structures, metalwork and CNC cutting.",
      navigation: "Navigation",
      contact: "Contact",
      legal: "Legal",
      privacy: "Privacy policy",
      rights: "All rights reserved.",
    },
    services: {
      title: "What we do",
      subtitle:
        "Eight areas where we support investors, contractors and manufacturers — from concept to installation.",
      learnMore: "Learn more",
      items: serviceItemsEn,
    },
    whyUs: {
      title: "Why Iron Forge",
      subtitle:
        "No vanity metrics — only what matters to a business buyer evaluating a subcontractor.",
      items: [
        {
          title: "Built to your drawing",
          text: "We work directly from your technical drawing or sketch. No forcing standard products to fit — every element is made for your project.",
        },
        {
          title: "CNC precision",
          text: "CNC cutting and machining deliver repeatable accuracy and clean joints, whether it's a fence, a cover panel or a furniture piece.",
        },
        {
          title: "Direct communication",
          text: "You speak straight to the workshop. No middlemen, no passing the buck — you know exactly who you're dealing with and who stands behind the quote.",
        },
        {
          title: "Deadlines kept",
          text: "Delivery dates are defined in the quote and honoured. If anything changes, we flag it early — before it becomes your problem.",
        },
      ],
    },
    process: {
      title: "How we work",
      subtitle:
        "A clear process reduces risk for both sides — especially when the relationship starts with a cold email or referral.",
      steps: [
        {
          title: "Inquiry & consultation",
          text: "Send a brief, drawing or photo. We clarify scope, material and timeline. You hear back within one business day.",
        },
        {
          title: "Technical drawing & quote",
          text: "Based on your spec we prepare a line-item quote — material, machining, transport and installation if included.",
        },
        {
          title: "Production",
          text: "Once the order is confirmed, we move to fabrication. For complex jobs we share progress photos during production.",
        },
        {
          title: "Delivery & installation",
          text: "Finished work is delivered to site or installed on location, depending on what was agreed in the quote.",
        },
      ],
    },
    about: {
      title: "About us",
      paragraphs: [
        "Iron Forge is a metal fabrication, metalwork and CNC machining workshop based in Novi Pazar, Serbia. We specialise in custom-made work — from fences and gates to interior furniture and precision CNC components for commercial and residential projects.",
        "We work with local investors and companies across the region and the EU looking for a reliable subcontractor for metal work. Our approach is straightforward: a clear quote, direct contact and work delivered as agreed.",
        "If you need a partner for subcontracting or a one-off fabrication job to drawing, send an inquiry — we'll reply with a concrete quote, no obligation.",
      ],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Do you work exclusively from supplied drawings?",
          answer:
            "We prefer working from a technical drawing or detailed sketch because it guarantees accuracy. If you don't have one, we can help define basic dimensions and specs from your requirements and site photos.",
        },
        {
          question: "What materials do you use?",
          answer:
            "We primarily work with steel, aluminium and combinations with timber or glass, depending on the project. Material is confirmed in the quote before production starts.",
        },
        {
          question: "Do you export to the EU?",
          answer:
            "Yes. We arrange delivery for clients in Serbia and abroad. Each quote states transport terms and lead time for the specific destination.",
        },
        {
          question: "How is pricing calculated?",
          answer:
            "Price depends on material, machining scope, CNC time, welding and installation. Every quote is individual and lists clear line items — no hidden costs.",
        },
        {
          question: "What are typical lead times?",
          answer:
            "Lead time depends on complexity and current workload. The quote states a firm delivery date. For urgent jobs contact us directly — we'll check priority availability.",
        },
        {
          question: "Do you provide on-site installation?",
          answer:
            "Yes, installation is available for gates, fences, structures and furniture. The quote clearly states whether installation is included or supply-only.",
        },
        {
          question: "How quickly will I get a reply?",
          answer:
            "Inquiries sent on business days are answered within 24 hours. Messages sent at the weekend are handled on the next business day.",
        },
      ],
    },
    gallery: {
      title: "Project gallery",
      subtitle: "A selection of completed work — fences, gates, furniture and CNC fabrication.",
      filterAll: "All",
      close: "Close",
      previous: "Previous",
      next: "Next",
    },
    contact: {
      title: "Contact",
      subtitle: "Send an inquiry with a job description or drawing — we'll reply with a quote.",
      name: "Full name",
      company: "Company name",
      email: "Email",
      phone: "Phone",
      jobType: "Job type",
      jobTypePlaceholder: "Select a category",
      message: "Message",
      send: "Send inquiry",
      sending: "Sending…",
      orReach: "Or reach us directly:",
      mapLabel: "Iron Forge workshop location, Novi Pazar",
    },
    cookies: {
      message:
        "We use cookies for analytics to understand how the site is used. You can accept or reject.",
      accept: "Accept",
      reject: "Reject",
      privacyLink: "Privacy policy",
    },
  },
};

export function getDictionary(locale: "sr" | "en"): Dictionary {
  return dictionaries[locale];
}
