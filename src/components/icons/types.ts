import { MouseEventHandler } from "react";

export interface IconDivProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

export interface IconSvgProps {
  onClick: MouseEventHandler<SVGSVGElement>;
}