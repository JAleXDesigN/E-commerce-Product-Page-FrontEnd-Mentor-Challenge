import styled from "@emotion/styled";
import { CartStyledProps } from "./types";
import { mqMin } from "../theme/mediaQueries";

export const CartWrapper = styled("div")<CartStyledProps>(
  ({ theme, isCartOpen }) => ({
    position: "absolute",
    minHeight: 256,
    left: "-5%",
    top: 78,
    right: "-5%",
    borderRadius: 10,
    boxShadow:
      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
    backgroundColor: theme.colors.white,
    display: isCartOpen ? "initial" : "none",
    zIndex: 20,
    ...mqMin("md", {
      width: 360,
      left: "auto",
      right: "-3%",
      top: 60,
    }),
    ...mqMin("lg", {
      right: "-6%",
      top: 90,
    }),
  })
);

export const TitleCart = styled("h2")(({ theme }) => {
  const { veryDarkBlue, grayishBlue } = theme.colors;
  return {
    display: "flex",
    alignItems: "center",
    fontSize: "1.6rem",
    margin: 0,
    height: 72,
    fontWeight: 700,
    color: veryDarkBlue,
    padding: "0 24px",
    borderBottom: `1px solid ${grayishBlue}`,
  };
});

export const ItemsWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 256 - 72,
  rowGap: 25,
  padding: 24,
});

export const Item = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  columnGap: 14,
});

export const ItemImage = styled("img")({
  width: 50,
  height: 50,
});

export const ItemData = styled("div")(({ theme }) => {
  const { darkGrayishBlue, veryDarkBlue } = theme.colors;
  return {
    flex: 1,
    h3: {
      fontSize: "1.6rem",
      margin: 0,
    },
    p: {
      margin: "10px 0 0",
      color: darkGrayishBlue,
      span: {
        color: veryDarkBlue,
        fontWeight: 700,
      },
    },
  };
});

export const Button = styled("button")(({ theme }) => {
  const { orange, lightOrange, paleOrange, white } = theme.colors;
  return {
    "&.checkOut": {
      width: "100%",
      padding: "17.3px 0",
    },
    "&.addToCard": {
      flex: 1,
    },
    border: "none",
    backgroundColor: orange,
    color: white,
    fontWeight: 700,
    borderRadius: 10,
    transition: "all .25s ease-in-out",
    ":hover": {
      cursor: "pointer",
      backgroundColor: lightOrange,
      boxShadow: `${paleOrange} 0px 1px 1px, ${paleOrange} 0px 2px 2px, ${paleOrange} 0px 4px 4px, ${paleOrange} 0px 4px 4px, ${paleOrange} 0px 3px 3px`,
    },
  };
});
