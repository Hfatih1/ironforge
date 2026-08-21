import type { SVGProps } from "react";

type IconPaths = { d: string }[];

const iconPaths: Record<string, IconPaths> = {
  "metalne-konstrukcije": [
    { d: "M2 7h20M2 17h20" },
    { d: "M2 17 7 7l5 10 5-10 5 10" },
  ],
  "metalni-namestaj": [
    { d: "M2 9h20" },
    { d: "M5 9v11M19 9v11" },
    { d: "M5 15h14" },
  ],
  bravarija: [
    { d: "M5 3h14v18H5z" },
    { d: "M8 6h8v6H8z" },
    { d: "M15.5 16v2" },
  ],
  "cnc-obrada": [
    { d: "M3 5h18v14H3z" },
    { d: "M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" },
    { d: "M12 5v3.5M12 15.5V19M3 12h3.5M17.5 12H21" },
  ],
  kapije: [
    { d: "M3 20V10a9 9 0 0 1 18 0v10" },
    { d: "M12 4v16" },
    { d: "M7.5 6.5V20M16.5 6.5V20" },
    { d: "M2 20h20" },
  ],
  ograde: [
    { d: "M3 9h18M3 15h18" },
    { d: "M6.5 5v15M12 5v15M17.5 5v15" },
    { d: "M2 20h20" },
  ],
  nadstresnice: [
    { d: "M2 9l10-6 10 6" },
    { d: "M5 9v3M19 9v3" },
    { d: "M4 20h4v-3h4v-3h4v-3h4" },
  ],
  "zavarivanje-servis": [
    { d: "M3 20h18" },
    { d: "M19 4l-7.5 12" },
    { d: "M11.5 16 9 20M11.5 16l1.5 4M11.5 16l-4 1.5M11.5 16l3.5 2" },
  ],
};

const enToSr: Record<string, string> = {
  "steel-structures": "metalne-konstrukcije",
  "metal-furniture": "metalni-namestaj",
  metalwork: "bravarija",
  "cnc-cutting": "cnc-obrada",
  gates: "kapije",
  fences: "ograde",
  "canopies-stairs": "nadstresnice",
  "welding-service": "zavarivanje-servis",
};

type ServiceIconProps = SVGProps<SVGSVGElement> & {
  category: string;
};

export function ServiceIcon({ category, ...props }: ServiceIconProps) {
  const paths = iconPaths[category] ?? iconPaths[enToSr[category] ?? ""];
  if (!paths) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths.map((path) => (
        <path key={path.d} d={path.d} />
      ))}
    </svg>
  );
}
