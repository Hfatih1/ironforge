import type { ServiceCategory } from "@/lib/i18n/types";

export type GalleryItem = {
  id: string;
  file: string;
  category: ServiceCategory;
  alt: {
    sr: string;
    en: string;
  };
};

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    file: "1.png",
    category: "ograde",
    alt: {
      sr: "Aluminijumska ograda po meri — čiste linije i dug vek trajanja",
      en: "Custom aluminum fence — clean lines and long service life",
    },
  },
  {
    id: "2",
    file: "2.png",
    category: "bravarija",
    alt: {
      sr: "Aluminijumska vrata izrađena prema merama otvora",
      en: "Aluminum doors built to the exact opening dimensions",
    },
  },
  {
    id: "3",
    file: "3.png",
    category: "bravarija",
    alt: {
      sr: "Čelična vrata sa CNC obradom i preciznom završnom obradom",
      en: "Steel doors with CNC machining and precise finishing",
    },
  },
  {
    id: "4",
    file: "4.png",
    category: "metalni-namestaj",
    alt: {
      sr: "Ukrasni sto od čelika — ručna izrada i zavarivanje",
      en: "Decorative steel table — hand-fabricated and welded",
    },
  },
  {
    id: "5",
    file: "5.png",
    category: "metalni-namestaj",
    alt: {
      sr: "Ukrasni sto od čelika sa CNC sečenjem detalja",
      en: "Decorative steel table with CNC-cut details",
    },
  },
  {
    id: "6",
    file: "6.png",
    category: "metalni-namestaj",
    alt: {
      sr: "Sto za dnevni boravak od metala — izrada po meri prostora",
      en: "Living room metal table — custom-sized for the space",
    },
  },
  {
    id: "7",
    file: "7.png",
    category: "metalni-namestaj",
    alt: {
      sr: "Sto za dnevni boravak — kombinacija čelika i završne obrade po projektu",
      en: "Living room table — steel construction with project-specific finish",
    },
  },
  {
    id: "8",
    file: "8.png",
    category: "kapije",
    alt: {
      sr: "Kapija od čelika i drveta — spoj metalne konstrukcije i drveta",
      en: "Steel and wood gate — metal frame combined with timber infill",
    },
  },
  {
    id: "9",
    file: "9.png",
    category: "cnc-obrada",
    alt: {
      sr: "CNC maska za spoljašnju jedinicu klime — precizno sečenje po crtežu",
      en: "CNC-cut cover for outdoor AC unit — precision cutting to drawing",
    },
  },
  {
    id: "10",
    file: "10.png",
    category: "ograde",
    alt: {
      sr: "Ograda od čelika sa CNC obradom elemenata",
      en: "Steel fence with CNC-machined components",
    },
  },
  {
    id: "11",
    file: "11.png",
    category: "ograde",
    alt: {
      sr: "Čelična ograda sa dekorativnim CNC detaljima",
      en: "Steel fence with decorative CNC details",
    },
  },
];
