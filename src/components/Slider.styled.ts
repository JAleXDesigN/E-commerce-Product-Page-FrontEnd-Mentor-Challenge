import styled from "@emotion/styled";
import { mqMin } from "../theme/mediaQueries";
import { ArrowsStyledProps } from "./types";

export const Container = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  zIndex: 0,
});

export const SilderWrapper = styled("div")({
  width: "100%",
  overflow: "hidden",
  position: "relative",
  userSelect: "none",
  ...mqMin("lg", {
    borderRadius: 15,
    ":hover": {
      cursor: "pointer",
    },
  }),
});

export const ImagesWrapper = styled("div")({
  width: "inherit",
  display: "grid",
  gridTemplateColumns: "repeat(4, 100%)",
  transition: "margin .5s ease-in-out",
  backgroundColor: "#ce5d00",
  img: {
    width: "inherit",
    pointerEvents: "none",
  },
  "&.slide-0": {
    marginLeft: 0,
  },
  "&.slide-1": {
    marginLeft: "-100%",
  },
  "&.slide-2": {
    marginLeft: "-200%",
  },
  "&.slide-3": {
    marginLeft: "-300%",
  },
});

export const ArrowSlider = styled("div")<ArrowsStyledProps>(
  ({ theme, position }) => ({
    width: 46,
    height: 46,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.white,
    borderRadius: "50%",
    position: "absolute",
    zIndex: 11,
    ...mqMin("sm", {
      width: 56,
      height: 56,
    }),
    ":hover": {
      cursor: "pointer",
    },
    "&.mobile": {
      left: position === "left" ? 20 : "auto",
      right: position === "right" ? 20 : "auto",
      top: "50%",
      transform: "translateY(-50%)",
      ...mqMin("lg", {
        display: "none",
      }),
    },
    "&.modal": {
      left: position === "left" ? -28 : "auto",
      right: position === "right" ? -28 : "auto",
      top: "39.5%",
      "svg path": {
        transition: "stroke .2s",
      },
      ":hover": {
        "svg path": {
          stroke: theme.colors.orange,
        },
      },
    },
  })
);

export const ThumbnailsWrapper = styled("div")({
  display: "none",
  ...mqMin("lg", {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    columnGap: 29,
    marginTop: 30,
  }),
  "&.modal": {
    width: "85%",
    margin: "30px auto 0",
  },
});

export const ThumbnailImage = styled("div")(({ theme }) => ({
  width: "100%",
  borderRadius: 15,
  overflow: "hidden",
  transition: "border .5s ease-in-out",
  backgroundColor: theme.colors.white,
  border: `3px solid transparent`,
  "&.modal": {
    borderColor: theme.colors.blackOpacity,
  },
  "&.active": {
    borderColor: theme.colors.orange,
    img: {
      opacity: 0.4,
    },
  },
  ":hover": {
    cursor: "pointer",

    img: {
      opacity: 0.6,
    },
  },
  img: {
    width: "100%",
    height: "100%",
    transition: "opacity .5s ease-in-out",
  },
}));

export const IconWrapper = styled("div")(({ theme }) => ({
  textAlign: "end",
  marginBottom: 20,
  svg: {
    transform: "scale(1.5)",
    path: {
      transition: "fill .25s",
    },
  },
  ":hover": {
    cursor: "pointer",
    "svg path": {
      fill: theme.colors.orange,
    },
  },
}));
