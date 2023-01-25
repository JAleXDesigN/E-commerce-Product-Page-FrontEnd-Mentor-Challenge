import { FC } from "react";
import { NavBarX, NavBarY } from "./NavBar.styled";
import { NavBarProps } from "./types";

const links = ["Collections", "Men", "Women", "About", "Contact"];

const Navegacion: FC<NavBarProps> = ({ design }) => {
  const Nav = design === "horizontal" ? NavBarX : NavBarY;
  return (
    <Nav
      role="navigaton"
      aria-label={`${
        design === "horizontal" ? "Navigation mobile" : "Navigation desktop"
      }`}
    >
      {links.map((link) => (
        <a key={link} href="#">
          {link}
        </a>
      ))}
    </Nav>
  );
};

export default Navegacion;
