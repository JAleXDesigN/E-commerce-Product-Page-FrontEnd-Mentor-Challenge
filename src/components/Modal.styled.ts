import styled from "@emotion/styled";
import { ModalStyledProps } from "./types";

export const ModalWrapper = styled("div")<ModalStyledProps>(
  ({ theme, isOpen }) => ({
    position: "fixed",
    width: "38%",
    maxHeight: 675,
    height: "80%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: isOpen ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    zIndex: theme.zIndex.drawer,
    "div:nth-of-type(1)": {
      width: "100%",
    },
  })
);
