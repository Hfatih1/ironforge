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
  {
    id: "12",
    file: "12.png",
    category: "cnc-obrada",
    alt: {
      sr: "Okrugli zidni panel — drvo života sa licem u profilu, lasersko sečenje",
      en: "Round wall panel — tree of life with a face in profile, laser cut",
    },
  },
  {
    id: "13",
    file: "13.png",
    category: "cnc-obrada",
    alt: {
      sr: "Zidni panel sa pozadinskim osvetljenjem — krošnja izrezana iz čeličnog lima",
      en: "Backlit wall panel — tree canopy cut from steel sheet",
    },
  },
  {
    id: "14",
    file: "14.png",
    category: "kapije",
    alt: {
      sr: "Klizna kapija i ograda sa istim CNC uzorkom krugova",
      en: "Sliding gate and matching fence with CNC-cut circle pattern",
    },
  },
  {
    id: "15",
    file: "15.png",
    category: "kapije",
    alt: {
      sr: "Klizna kapija sa cvetnim uzorkom izrezanim po crtežu",
      en: "Sliding gate with floral pattern cut to drawing",
    },
  },
  {
    id: "16",
    file: "16.png",
    category: "kapije",
    alt: {
      sr: "Dvokrilna kapija sa organskim uzorkom izrezanim iz lima",
      en: "Double swing gate with organic pattern cut from sheet metal",
    },
  },
  {
    id: "17",
    file: "17.png",
    category: "metalni-namestaj",
    alt: {
      sr: "Klupski sto od čelika — ornament na ploči i nogarama izrezan CNC-om",
      en: "Steel coffee table — CNC-cut ornament on the top and legs",
    },
  },
  {
    id: "18",
    file: "18.png",
    category: "cnc-obrada",
    alt: {
      sr: "Presek CNC i laserske obrade — delovi od čelika, mesinga i cevi po crtežu",
      en: "Range of CNC and laser work — steel, brass and tube parts made to drawing",
    },
  },
  {
    id: "19",
    file: "19.png",
    category: "bravarija",
    alt: {
      sr: "Baštenska tuš-kolona od čelika sa izrezanim uzorkom i solarnim svetlom",
      en: "Steel garden shower column with cut-out pattern and solar light",
    },
  },
  {
    id: "20",
    file: "20.png",
    category: "bravarija",
    alt: {
      sr: "Baštenske svetiljke — čelični stubovi sa uzdužnim svetlosnim profilom",
      en: "Garden bollard lights — steel posts with a full-length light channel",
    },
  },
  {
    id: "21",
    file: "21.png",
    category: "bravarija",
    alt: {
      sr: "Baštenske slavine na čeličnim stubovima sa solarnim svetlom",
      en: "Garden taps on steel columns with solar lighting",
    },
  },
];
