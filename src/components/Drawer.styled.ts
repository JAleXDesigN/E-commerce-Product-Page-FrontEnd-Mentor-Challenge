import styled from "@emotion/styled";
import { ModalStyledProps } from "./types";

export const DrawerWrapper = styled("div")<ModalStyledProps>(
  ({ theme, isOpen }) => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: 250,
    height: "100vh",
    zIndex: theme.zIndex.drawer,
    backgroundColor: theme.colors.white,
    padding: 25,
    transition: "transform .25s ease-in-out",
    transform: isOpen ? "translateX(0)" : "translateX(-100%)",
  })
);
