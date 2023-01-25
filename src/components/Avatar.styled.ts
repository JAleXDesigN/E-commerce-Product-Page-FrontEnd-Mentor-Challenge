import { AvatarStyledProps } from "./types";
import styled from "@emotion/styled";
import { mqMin } from "../theme/mediaQueries";

export const AvatarImage = styled("img")<AvatarStyledProps>(
  ({ theme, width, height }) => ({
    width,
    height,
    borderRadius: "50%",
    ":active": {
      outline: `2px solid ${theme.colors.orange}`,
    },
    ...mqMin("sm", {
      width: width + width / 2,
      height: height + height / 2,
    }),
    ...mqMin("md", {
      ":hover": {
        cursor: "pointer",
        outline: `2px solid ${theme.colors.orange}`,
      },
    }),
    ...mqMin("lg", {
      width: width * 2,
      height: height * 2,
    }),
  })
);
