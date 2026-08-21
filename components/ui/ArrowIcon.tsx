import type { SVGProps } from "react";

const directionPaths = {
  right: "M2 8h11M9 4l4 4-4 4",
  left: "M14 8H3M7 4 3 8l4 4",
} as const;

type ArrowIconProps = SVGProps<SVGSVGElement> & {
  direction?: keyof typeof directionPaths;
};

export function ArrowIcon({ direction = "right", ...props }: ArrowIconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={directionPaths[direction]} />
    </svg>
  );
}
