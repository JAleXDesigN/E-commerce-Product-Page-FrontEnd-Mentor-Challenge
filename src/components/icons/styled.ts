import styled from "@emotion/styled";
import { mqMin } from "../../theme";

export const IconMobile = styled("svg")(({ theme }) => ({
  ":active": {
    path: {
      fill: theme.colors.orange,
    },
  },
}));

export const IconMenuWrap = styled("div")(({ theme }) => ({
  ...mqMin("md", {
    display: "none",
  }),
  ":active": {
    svg: {
      path: {
        fill: theme.colors.orange,
      },
    },
  },
}));

export const IconAddStyled = styled("div")(({ theme }) => ({
  width: "21%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "svg path": {
    transition: "fill .25s",
  },
  ":hover": {
    cursor: "pointer",
    "svg path": {
      fill: theme.colors.lightOrange,
    },
  },
}));
