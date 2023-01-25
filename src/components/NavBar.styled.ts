import styled from "@emotion/styled";
import { mqMin } from "../theme/mediaQueries";

export const NavBarX = styled("nav")(({ theme }) => ({
  display: "none",
  a: {
    color: theme.colors.darkGrayishBlue,
    textDecoration: "none",
    marginRight: 24,
    position: "relative",
    transition: "color .25s ease-in-out",
    fontWeight: 700,
    ":last-of-type": {
      marginRight: 0,
    },
    "::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: 4,
      transition: "transform .25s ease-in-out",
      transform: "scale(0)",
      transformOrigin: "center",
      backgroundColor: theme.colors.orange,
    },
    ":hover": {
      color: theme.colors.veryDarkBlue,
      "::before": {
        transform: "scale(1)",
        transformOrigin: "center",
      },
    },
  },
  ...mqMin("md", {
    display: "flex",
    height: "inherit",
    a: {
      display: "flex",
      alignItems: "center",
      height: "inherit",
    },
  }),
  ...mqMin("lg", {
    a: {
      marginRight: 34,
    },
  }),
}));

export const NavBarY = styled("nav")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: 25,
  marginTop: 48,
  ...mqMin("md", {
    display: "none",
  }),
  a: {
    textDecoration: "none",
    fontSize: "1.8rem",
    fontWeight: 700,
    color: theme.colors.black,
    ":active": {
      color: theme.colors.orange,
    },
  },
}));
