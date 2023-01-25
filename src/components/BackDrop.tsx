import { FC } from "react";
import { BackDropProps } from "./types";
import { Background } from "./BackDrop.styled";

const BackDrop: FC<BackDropProps> = ({ children, isOpen, toggleFn }) => {
  return (
    <Background isOpen={isOpen} onClick={toggleFn}>
      {children}
    </Background>
  );
};

export default BackDrop;
