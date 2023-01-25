import styled from "@emotion/styled";
import { mqMin } from "../theme/mediaQueries";

export const TopBar = styled("header")(({ theme }) => ({
  width: "100%",
  position: "sticky",
  top: 0,
  background: theme.colors.white,
  zIndex: 1,
}));

export const Header = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: 68,
  maxWidth: 1110,
  width: "87.2%",
  margin: "0 auto",
  columnGap: 16,
  zIndex: 100,
  ...mqMin("md", {
    columnGap: 25,
    borderBottom: `1px solid ${theme.colors.grayishBlue}`,
  }),
  ...mqMin("lg", {
    columnGap: 52,
    height: 112,
  }),
}));

export const LogoWrapper = styled("a")(({ theme }) => ({
  svg: {
    path: {
      transition: "fill .2s cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
  ":hover": {
    svg: {
      path: {
        fill: theme.colors.orange,
      },
    },
  },
}));

export const NavWrapper = styled("nav")({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  height: "100%",
  ...mqMin("md", {
    justifyContent: "space-between",
  }),
});

export const RightWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  columnGap: 16,
  ...mqMin("lg", {
    columnGap: 41,
  }),
});
