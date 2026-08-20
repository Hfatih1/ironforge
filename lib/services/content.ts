import type { Locale } from "@/lib/i18n/config";
import type { ServiceCategory } from "@/lib/i18n/types";

export type ServicePageContent = {
  meta: {
    title: string;
    description: string;
  };
  title: string;
  intro: string;
  paragraphs: string[];
  cta: {
    title: string;
    text: string;
  };
};

export type ServiceContentEntry = Record<Locale, ServicePageContent>;

export const servicePageLabels: Record<
  Locale,
  {
    home: string;
    services: string;
    relatedWork: string;
    ctaButton: string;
    noGallery: string;
  }
> = {
  sr: {
    home: "Početna",
    services: "Usluge",
    relatedWork: "Povezani radovi",
    ctaButton: "Zatraži ponudu",
    noGallery: "Fotografije za ovu kategoriju uskoro.",
  },
  en: {
    home: "Home",
    services: "Services",
    relatedWork: "Related work",
    ctaButton: "Request a quote",
    noGallery: "Photos for this category coming soon.",
  },
};

export const serviceContent: Record<ServiceCategory, ServiceContentEntry> = {
  "metalne-konstrukcije": {
    sr: {
      meta: {
        title: "Metalne konstrukcije po meri | Iron Forge, Novi Pazar",
        description:
          "Proizvodnja metalnih konstrukcija — hale, nosači, platforme i noseći elementi po tehničkom crtežu. Iron Forge, Novi Pazar. Isporuka i montaža.",
      },
      title: "Metalne konstrukcije",
      intro:
        "Projektujemo i izrađujemo noseće i nestrukturalne metalne konstrukcije za industrijske, poslovne i stambene objekte — po vašem crtežu, sa jasno definisanim rokom isporuke.",
      paragraphs: [
        "Radimo hale, platforme, nosače mašina, ramove i spojne elemente od čelika. Svaki element se proizvodi prema specifikaciji materijala, tolerancijama i načinu montaže definisanim u projektu.",
        "Saradnju započinjemo pregledom tehničke dokumentacije ili skice. Na osnovu toga pripremamo ponudu sa stavkama za materijal, sečenje, zavarivanje, antikorozivnu zaštitu i montažu ako je potrebna.",
        "Iron Forge je lociran u Novom Pazaru i isporučuje konstrukcije klijentima u Srbiji i inostranstvu. Za firme iz EU koje traže podizvođača za metalne radove, nudimo direktnu komunikaciju bez posrednika.",
      ],
      cta: {
        title: "Imate projekat konstrukcije?",
        text: "Pošaljite crtež ili opis posla — pripremićemo ponudu sa rokom isporuke.",
      },
    },
    en: {
      meta: {
        title: "Custom steel structures | Iron Forge, Serbia",
        description:
          "Steel structure fabrication — halls, supports, platforms and load-bearing frames to drawing. Based in Novi Pazar, Serbia. Delivery and installation available.",
      },
      title: "Steel structures",
      intro:
        "We design and fabricate structural and non-structural steel work for industrial, commercial and residential projects — built to your drawing with a clearly defined delivery date.",
      paragraphs: [
        "We produce halls, platforms, machine supports, frames and connection elements in steel. Every component is made to the material spec, tolerances and installation method defined in your project.",
        "Engagements start with a review of your technical documentation or sketch. We then prepare a line-item quote covering material, cutting, welding, corrosion protection and installation if required.",
        "Iron Forge is based in Novi Pazar, Serbia and delivers to clients domestically and abroad. For EU companies looking for a metal fabrication subcontractor, we offer direct workshop communication with no middlemen.",
      ],
      cta: {
        title: "Have a structure to fabricate?",
        text: "Send a drawing or brief — we'll prepare a quote with a delivery timeline.",
      },
    },
  },
  "metalni-namestaj": {
    sr: {
      meta: {
        title: "Metalni nameštaj po meri | Iron Forge, Novi Pazar",
        description:
          "Izrada metalnog nameštaja — stolovi, police, stolice i enterijerski elementi od čelika. Po crtežu ili meri prostora. Novi Pazar.",
      },
      title: "Metalni nameštaj",
      intro:
        "Proizvodimo metalni nameštaj za domove, poslovne prostore, ugostiteljske objekte i proizvodne hale — funkcionalan, izdržljiv i prilagođen vašem prostoru.",
      paragraphs: [
        "Radimo stolove, stolice, police, vitrine, radne pultove i dekorativne elemente od čelika i aluminijuma. Završna obrada — bojenje, patiniranje, kombinacija sa drvetom ili staklom — definiše se u ponudi.",
        "CNC obrada omogućava precizne detalje i ponovljivu serijsku proizvodnju kada je potrebno više identičnih komada. Za jedinstvene komade radimo ručnu izradu i zavarivanje.",
        "Svaki komad se pravi po meri: prosledite dimenzije, referentnu fotografiju ili crtež i dobićete konkretnu ponudu sa rokom izrade.",
      ],
      cta: {
        title: "Trebate metalni nameštaj po meri?",
        text: "Opišite dimenzije i namenu — odgovorićemo sa ponudom u roku od 24 sata.",
      },
    },
    en: {
      meta: {
        title: "Custom metal furniture | Iron Forge, Serbia",
        description:
          "Metal furniture fabrication — tables, shelving, chairs and interior steel elements. Built to drawing or room dimensions. Novi Pazar, Serbia.",
      },
      title: "Metal furniture",
      intro:
        "We manufacture metal furniture for homes, commercial spaces, hospitality venues and production halls — functional, durable and sized for your space.",
      paragraphs: [
        "We build tables, chairs, shelving, display units, work counters and decorative steel elements in steel and aluminium. Finish — paint, patina, timber or glass combinations — is defined in the quote.",
        "CNC machining enables precise details and repeatable batch production when multiple identical pieces are needed. For one-off items we use hand fabrication and welding.",
        "Every piece is custom-made: send dimensions, a reference photo or drawing and you'll receive a concrete quote with a production timeline.",
      ],
      cta: {
        title: "Need custom metal furniture?",
        text: "Describe the dimensions and intended use — we'll reply with a quote within 24 hours.",
      },
    },
  },
  bravarija: {
    sr: {
      meta: {
        title: "Bravarija po meri | Iron Forge, Novi Pazar",
        description:
          "Bravarski radovi po specifikaciji — vrata, okviri, zaštitne rešetke i metalni elementi. Čelik i aluminijum. Novi Pazar i okolina.",
      },
      title: "Bravarija po meri",
      intro:
        "Izrađujemo bravarske konstrukcije i elemente prema vašim merama i tehničkim zahtevima — od jednostavnih okvira do složenih ulaznih sistema.",
      paragraphs: [
        "Radimo aluminijumska i čelična vrata, zaštitne rešetke, okvirе, nadvratnike i prateće elemente. Materijal i način završne obrade biraju se prema nameni i uslovima na lokaciji.",
        "Kombinujemo ručnu bravarsku izradu sa CNC sečenjem za precizne detalje i uklapanje. Svaki element se proverava pre isporuke.",
        "Bravariju radimo kao samostalnu uslugu ili kao deo većeg projekta — kapije, ograde, fasade i enterijerski elementi. Pošaljite mere otvora ili crtež za brzu ponudu.",
      ],
      cta: {
        title: "Potrebna bravarija po specifikaciji?",
        text: "Pošaljite mere ili crtež — pripremićemo ponudu za vaš projekat.",
      },
    },
    en: {
      meta: {
        title: "Custom metalwork | Iron Forge, Serbia",
        description:
          "Metal fabrication to specification — doors, frames, grilles and structural elements. Steel and aluminium. Based in Novi Pazar, Serbia.",
      },
      title: "Custom metalwork",
      intro:
        "We fabricate metalwork and components to your dimensions and technical requirements — from simple frames to complex entrance systems.",
      paragraphs: [
        "We produce aluminium and steel doors, security grilles, frames, lintels and accompanying elements. Material and finish are selected based on purpose and site conditions.",
        "We combine hand metalwork with CNC cutting for precise details and fit. Every element is checked before delivery.",
        "Metalwork is available as a standalone service or as part of a larger project — gates, fences, facades and interior elements. Send opening dimensions or a drawing for a quick quote.",
      ],
      cta: {
        title: "Need metalwork to specification?",
        text: "Send dimensions or a drawing — we'll prepare a quote for your project.",
      },
    },
  },
  "cnc-obrada": {
    sr: {
      meta: {
        title: "CNC obrada i sečenje metala | Iron Forge, Novi Pazar",
        description:
          "CNC sečenje i obrada metala po crtežu — precizni delovi, maske, paneli i serijska proizvodnja. Iron Forge, Novi Pazar.",
      },
      title: "CNC obrada i sečenje metala",
      intro:
        "CNC mašinska obrada omogućava precizno sečenje i izradu metalnih delova po tehničkom crtežu — sa ponovljivom tačnošću, bilo da se radi o jednom komadu ili seriji.",
      paragraphs: [
        "Radimo sečenje, bušenje i izradu panela, maski, poklopaca, ukrasnih elemenata i konstrukcionih delova od čelika, aluminijuma i drugih metala. Prihvatamo DXF, DWG ili PDF crteže.",
        "CNC obrada je posebno pogodna za elemente sa složenim konturama, repetitivnu proizvodnju i projekte gde je tolerancija kritična — kao što su fasadne maske, rešetke i prateći elementi.",
        "Iron Forge kombinuje CNC kapacitete sa zavarivanjem i završnom obradom, tako da dobijate kompletan proizvod spreman za montažu, a ne samo isečene ploče.",
      ],
      cta: {
        title: "Imate crtež za CNC obradu?",
        text: "Pošaljite fajl ili skicu — procenićemo vreme obrade i pripremiti ponudu.",
      },
    },
    en: {
      meta: {
        title: "CNC metal cutting & machining | Iron Forge, Serbia",
        description:
          "CNC cutting and metal machining to drawing — precision parts, covers, panels and batch production. Iron Forge, Novi Pazar, Serbia.",
      },
      title: "CNC cutting & machining",
      intro:
        "CNC machining delivers precise cutting and fabrication of metal parts from technical drawings — with repeatable accuracy, whether you need a single piece or a batch run.",
      paragraphs: [
        "We cut, drill and fabricate panels, covers, enclosures, decorative elements and structural parts in steel, aluminium and other metals. We accept DXF, DWG or PDF drawings.",
        "CNC work is especially suited to complex contours, repetitive production and projects where tolerance is critical — facade covers, grilles and ancillary components.",
        "Iron Forge combines CNC capacity with welding and finishing, so you receive a complete product ready for installation — not just cut sheets.",
      ],
      cta: {
        title: "Have a drawing for CNC work?",
        text: "Send the file or sketch — we'll estimate machining time and prepare a quote.",
      },
    },
  },
  kapije: {
    sr: {
      meta: {
        title: "Kapije po meri — klizne i krilne | Iron Forge, Novi Pazar",
        description:
          "Izrada kapija od čelika, aluminijuma i drveta. Klizne i krilne kapije sa konstrukcijom i montažom. Novi Pazar i šire.",
      },
      title: "Kapije",
      intro:
        "Projektujemo i izrađujemo kapije prilagođene vašem ulazu — klizne, krilne i pešačke — sa nosećom konstrukcijom, okovom i završnom obradom.",
      paragraphs: [
        "Radimo kapije od čelika, aluminijuma i kombinacija sa drvetom. Konstrukcija se dimenzioniše prema širini otvora, terenu i načinu otvaranja. Klizni mehanizam ili šarke biraju se prema težini i učestalosti korišćenja.",
        "Svaka kapija se izrađuje po meri: dimenzije, dizajn ispune, boja i tip brave definišu se u dogovoru pre proizvodnje. Montaža na licu mesta je moguća na teritoriji Srbije.",
        "Za firme koje u ponudi šalju link ka konkretnoj usluzi — ova stranica daje jasan pregled kapaciteta i primer realizovanog rada.",
      ],
      cta: {
        title: "Planirate novu kapiju?",
        text: "Pošaljite mere ulaza i fotografiju lokacije — odgovorićemo sa predlogom i ponudom.",
      },
    },
    en: {
      meta: {
        title: "Custom gates — sliding & swing | Iron Forge, Serbia",
        description:
          "Gate fabrication in steel, aluminium and timber. Sliding and swing gates with frame, hardware and installation. Based in Novi Pazar, Serbia.",
      },
      title: "Gates",
      intro:
        "We design and build gates tailored to your entrance — sliding, swing and pedestrian — with supporting structure, hardware and finish.",
      paragraphs: [
        "We fabricate gates in steel, aluminium and timber combinations. The frame is sized to opening width, ground conditions and opening method. Sliding gear or hinges are selected based on weight and frequency of use.",
        "Every gate is custom-made: dimensions, infill design, colour and lock type are agreed before production. On-site installation is available across Serbia.",
        "For companies sending a link to a specific capability in a proposal, this page gives a clear overview of what we deliver.",
      ],
      cta: {
        title: "Planning a new gate?",
        text: "Send opening dimensions and a site photo — we'll reply with a proposal and quote.",
      },
    },
  },
  ograde: {
    sr: {
      meta: {
        title: "Ograde po meri — dvorišne, terasne, čelik | Iron Forge, Novi Pazar",
        description:
          "Ograde od čelika i aluminijuma — dvorišne, terasne i stepenišne. CNC detalji i montaža. Iron Forge, Novi Pazar.",
      },
      title: "Ograde",
      intro:
        "Izrađujemo ograde za dvorišta, terase, stepeništa i poslovne objekte — od jednostavnih čeličnih panela do dekorativnih rešenja sa CNC detaljima.",
      paragraphs: [
        "Radimo ograde od čelika, aluminijuma i kombinacija sa staklom ili drvetom. Konstrukcija se prilagođava terenu, nagibu i propisima bezbednosti na lokaciji.",
        "CNC obrada omogućava dekorativne panele, repetitivne elemente i precizno ponavljanje uzoraka kroz dužinu ograde. Antikorozivna zaštita i bojenje su deo standardne ponude.",
        "Realizovali smo aluminijumske i čelične ograde sa CNC elementima za stambene i poslovne objekte u Novom Pazaru i šire. Pošaljite dužinu, visinu i fotografiju terena za ponudu.",
      ],
      cta: {
        title: "Trebate ogradu po meri?",
        text: "Pošaljite dimenzije i fotografiju — pripremićemo rešenje i cenu.",
      },
    },
    en: {
      meta: {
        title: "Custom fences — steel & aluminium | Iron Forge, Serbia",
        description:
          "Steel and aluminium fencing — perimeter, terrace and stair railings. CNC details and installation. Iron Forge, Novi Pazar, Serbia.",
      },
      title: "Fences",
      intro:
        "We build fences for yards, terraces, staircases and commercial sites — from simple steel panels to decorative solutions with CNC details.",
      paragraphs: [
        "We fabricate fences in steel, aluminium and combinations with glass or timber. Structure adapts to ground conditions, slope and local safety requirements.",
        "CNC machining enables decorative panels, repetitive elements and precise pattern repeats along the fence run. Corrosion protection and painting are part of the standard quote.",
        "We have delivered aluminium and steel fences with CNC elements for residential and commercial sites in Novi Pazar and beyond. Send length, height and a site photo for a quote.",
      ],
      cta: {
        title: "Need a custom fence?",
        text: "Send dimensions and a photo — we'll prepare a solution and price.",
      },
    },
  },
  nadstresnice: {
    sr: {
      meta: {
        title: "Nadstrešnice i stepeništa po meri | Iron Forge, Novi Pazar",
        description:
          "Metalne nadstrešnice, stepeništa i prilazne konstrukcije po projektu. Čelik, montaža. Iron Forge, Novi Pazar.",
      },
      title: "Nadstrešnice i stepeništa",
      intro:
        "Projektujemo i izrađujemo nadstrešnice, stepeništa i prilazne metalne konstrukcije — za stambene objekte, poslovne prostore i industrijske lokacije.",
      paragraphs: [
        "Radimo nadstrešnice za ulaze, terase, parkinge i industrijske objekte, kao i stepenišne konstrukcije sa gazištima od čelika, rešetki ili kombinacije sa drvetom i betonom.",
        "Konstrukcija se dimenzioniše prema snегu, vetru i načinu učvršćenja na postojeću građevinu. U ponudi se jasno navode materijal, antikorozivna zaštita i montaža.",
        "Svaki projekat počinje pregledom lokacije ili crteža. Iron Forge isporučuje konstrukciju spremnu za montažu, sa jasno definisanim rokom.",
      ],
      cta: {
        title: "Planirate nadstrešnicu ili stepenište?",
        text: "Pošaljite crtež ili fotografiju lokacije — pripremićemo tehnički predlog i ponudu.",
      },
    },
    en: {
      meta: {
        title: "Custom canopies & staircases | Iron Forge, Serbia",
        description:
          "Metal canopies, staircases and access structures to project. Steel fabrication and installation. Iron Forge, Novi Pazar, Serbia.",
      },
      title: "Canopies & staircases",
      intro:
        "We design and build canopies, staircases and access metal structures — for residential buildings, commercial spaces and industrial sites.",
      paragraphs: [
        "We produce entrance canopies, terrace covers, parking shelters and industrial canopies, as well as stair structures with steel treads, grating or combinations with timber and concrete.",
        "Structure is sized for snow, wind and the method of fixing to the existing building. Quotes clearly state material, corrosion protection and installation.",
        "Every project starts with a site review or drawing. Iron Forge delivers structures ready for installation with a clearly defined timeline.",
      ],
      cta: {
        title: "Planning a canopy or staircase?",
        text: "Send a drawing or site photo — we'll prepare a technical proposal and quote.",
      },
    },
  },
  "zavarivanje-servis": {
    sr: {
      meta: {
        title: "Zavarivanje, servis i popravke metala | Iron Forge, Novi Pazar",
        description:
          "Zavarivanje čelika i aluminijuma, popravke konstrukcija i servis metalnih elemenata. Iron Forge, Novi Pazar.",
      },
      title: "Zavarivanje, servis i popravke",
      intro:
        "Pružamo usluge zavarivanja, popravke i servisa postojećih metalnih konstrukcija i elemenata — brzo, pouzdano i prema stanju na licu mesta.",
      paragraphs: [
        "Radimo zavarivanje čelika i aluminijuma, sanaciju pukotina, pojačanje konstrukcija i zamenu oštećenih delova. Intervenišemo na kapijama, ogradama, nosećim elementima i industrijskoj opremi.",
        "Pre rada procenjujemo stanje konstrukcije i predlažemo najisplativije rešenje — privremena popravka ili trajna sanacija. Sve se dogovara unapred, sa jasnom cenom.",
        "Servisne intervencije su dostupne klijentima u Novom Pazaru i okolini. Za hitne slučajeve kontaktirajte nas telefonom — proverićemo mogućnost brzog izlaska na teren.",
      ],
      cta: {
        title: "Potreban servis ili popravka?",
        text: "Opišite problem ili pošaljite fotografiju — odgovorićemo sa procenom i rokom.",
      },
    },
    en: {
      meta: {
        title: "Welding, repair & metal service | Iron Forge, Serbia",
        description:
          "Steel and aluminium welding, structure repairs and metal element servicing. Iron Forge, Novi Pazar, Serbia.",
      },
      title: "Welding, repair & service",
      intro:
        "We provide welding, repair and servicing of existing metal structures and components — quickly, reliably and based on on-site condition.",
      paragraphs: [
        "We weld steel and aluminium, repair cracks, reinforce structures and replace damaged parts. We work on gates, fences, load-bearing elements and industrial equipment.",
        "Before starting we assess the structure and propose the most cost-effective solution — temporary repair or permanent remediation. Everything is agreed upfront with a clear price.",
        "Service call-outs are available for clients in Novi Pazar and the surrounding area. For urgent cases contact us by phone — we'll check availability for a rapid site visit.",
      ],
      cta: {
        title: "Need a repair or service call?",
        text: "Describe the issue or send a photo — we'll reply with an estimate and timeline.",
      },
    },
  },
};

export function getServiceContent(
  category: ServiceCategory,
  locale: Locale,
): ServicePageContent {
  return serviceContent[category][locale];
}
