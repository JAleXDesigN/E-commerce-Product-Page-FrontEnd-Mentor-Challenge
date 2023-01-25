export interface Colors {
  orange: string;
  lightOrange: string;
  paleOrange: string;
  veryDarkBlue: string;
  darkGrayishBlue: string;
  grayishBlue: string;
  lightGrayishBlue: string;
  white: string;
  black: string;
  blackOpacity: string;
}

declare module "@emotion/react" {
  export interface Theme {
    colors: Colors;
    zIndex: {
      drawer: number;
      backdrop: number;
    };
  }
}

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
