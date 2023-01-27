import styled from "@emotion/styled";
import { mqMin } from "../theme/mediaQueries";

export const Section = styled("section")({
  ...mqMin("md", {
    maxWidth: 1110,
    width: "90%",
    margin: "0 auto",
    padding: "48px 0",
  }),
  ...mqMin("lg", {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    columnGap: 128,
    margin: "35px auto 0",
    padding: 48,
  }),
  ...mqMin("xl", {
    margin: "42px auto .",
  }),
});
