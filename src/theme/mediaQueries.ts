import { CSSObject } from "@emotion/styled";
import { Breakpoint } from "./types";

const breakpoints: { [key in Breakpoint]: number } = {
  xs: 375,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

/**
 * Define a min-width media query.
 *
 * @param {string} breakpoint Breakpoint name.
 * @param {object} options CssObject with the styles.
 * @example ...mqMin("sm", { width: 274, ... }),
 *
 * @returns "@media (min-width: 576px)": { width: 274, ...}
 */
export const mqMin = (
  breakpoint: Breakpoint,
  options: CSSObject
): { [key: string]: CSSObject } => {
  const stylesMQ = {
    [`@media (min-width: ${breakpoints[breakpoint]}px)`]: {
      ...options,
    },
  };
  return stylesMQ;
};

/**
 * Define a max-width media query.
 *
 * @param {string} breakpoint Breakpoint name.
 * @param {object} options CssObject with the styles.
 * @example ...mqMax("sm", { width: 274, ... }),
 *
 * @returns "@media (max-width: 575px)": { width: 274, ...}
 */
export const mqMax = (
  breakpoint: Breakpoint,
  options: CSSObject
): { [key: string]: CSSObject } => {
  const stylesMQ = {
    [`@media (max-width: ${breakpoints[breakpoint] - 1}px)`]: {
      ...options,
    },
  };
  return stylesMQ;
};
