import { FC } from "react";
import { NavBarX, NavBarY } from "./NavBar.styled";
import { NavBarProps } from "./types";

const links = ["Collections", "Men", "Women", "About", "Contact"];

const Navegacion: FC<NavBarProps> = ({ design }) => {
  const Nav = design === "horizontal" ? NavBarX : NavBarY;
  return (
    <Nav>
      {links.map((link) => (
        <a key={link} href="#">
          {link}
        </a>
      ))}
    </Nav>
  );
};

export default Navegacion;
