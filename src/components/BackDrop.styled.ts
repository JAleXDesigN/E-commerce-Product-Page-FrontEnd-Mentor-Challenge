import styled from "@emotion/styled";
import { BackDropStyledProps } from "./types";

export const Background = styled("div")<BackDropStyledProps>(
  ({ theme, isOpen }) => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    zIndex: isOpen ? theme.zIndex.backdrop : -1,
    backgroundColor: theme.colors.blackOpacity,
    transition: "opacity .2s ease-in-out",
    display: isOpen ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
  })
);
