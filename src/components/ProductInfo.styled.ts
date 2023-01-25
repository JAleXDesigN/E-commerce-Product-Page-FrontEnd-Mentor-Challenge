import styled from "@emotion/styled";
import { mqMin } from "../theme/mediaQueries";

export const InfoWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: 24,
  ...mqMin("lg", {
    padding: 0,
  }),
});

export const CompanyName = styled("span")(({ theme }) => ({
  color: theme.colors.orange,
  textTransform: "uppercase",
  fontSize: "1.3rem",
  fontWeight: 700,
  letterSpacing: 1,
  ...mqMin("sm", {
    fontSize: "1.4rem",
  }),
}));

export const TitleProduct = styled("h1")(({ theme }) => ({
  fontSize: "2.8rem",
  color: theme.colors.veryDarkBlue,
  margin: "1.3rem 0 1.6rem",
  ...mqMin("sm", {
    margin: "1.9rem 0 3.6rem",
    fontSize: "3.4rem",
  }),
  ...mqMin("md", {
    fontSize: "4.1rem",
  }),
}));

export const Description = styled("p")(({ theme }) => ({
  lineHeight: 1.6,
  color: theme.colors.darkGrayishBlue,
  marginTop: 0,
}));

export const PriceWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 4,
  ...mqMin("sm", {
    marginTop: "1.2rem",
    flexDirection: "column",
  }),
});

export const PriceDiscount = styled("span")(({ theme }) => ({
  color: theme.colors.veryDarkBlue,
  fontWeight: 700,
  fontSize: "2.4rem",
  display: "flex",
  alignItems: "center",
  columnGap: 10,
  span: {
    fontSize: "1.4rem",
    padding: "0.2rem 0.5rem",
    color: theme.colors.orange,
    backgroundColor: theme.colors.paleOrange,
  },
}));

export const PriceNormal = styled("span")(({ theme }) => ({
  color: theme.colors.darkGrayishBlue,
  textDecoration: "line-through",
  margin: "10px 0",
}));

export const ActionsWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  rowGap: 17,
  width: "100%",
  minHeight: 56,
  columnGap: 16,
  marginTop: 10,
  ...mqMin("sm", {
    marginTop: 30,
    flexDirection: "row",
  }),
  button: {
    minHeight: "inherit",
  },
});

export const QuantityWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "inherit",
  borderRadius: 15,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.colors.lightGrayishBlue,
  ...mqMin("sm", {
    width: "34%",
  }),
}));

export const Number = styled("span")({
  flex: 1,
  textAlign: "center",
  fontSize: "2rem",
});
