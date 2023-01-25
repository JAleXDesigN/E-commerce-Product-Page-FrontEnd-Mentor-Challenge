import IconClose from "./icons/IconClose";
import { DrawerWrapper } from "./Drawer.styled";
import Navegacion from "./NavBar";
import { useMenu } from "../context/MenuContext";

const Drawer = () => {
  const { isMenuOpen, toggleMenu } = useMenu();
  return (
    <DrawerWrapper isOpen={isMenuOpen}>
      <IconClose onClick={toggleMenu} />
      <Navegacion design="vertical" />
    </DrawerWrapper>
  );
};

export default Drawer;
