import {
  Header,
  LogoWrapper,
  NavWrapper,
  RightWrapper,
  TopBar,
} from "./TopNav.styled";
import IconMenu from "./icons/IconMenu";
import Logo from "./icons/Logo";
import Navegacion from "./NavBar";

import Avatar from "./Avatar";
import Badge from "./Badge";
import Cart from "./Cart";

import Drawer from "./Drawer";
import BackDrop from "./BackDrop";

import { useMenu } from "../context/MenuContext";
import { useCart } from "../context/CartContext";

const TopNav = () => {
  const { isMenuOpen, toggleMenu } = useMenu();
  const { itemsAdded } = useCart();

  return (
    <>
      <TopBar>
        <Header>
          <IconMenu />

          <LogoWrapper href="/">
            <Logo />
          </LogoWrapper>

          <NavWrapper>
            <Navegacion design="horizontal" />

            <RightWrapper>
              <Badge orderNumber={itemsAdded.length} />
              <Avatar src="https://res.cloudinary.com/dekp1iyjf/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1673909165/ecommerce-fementor/image-avatar_kkrq90.png" alt="User Image" width={24} height={24} />
            </RightWrapper>
          </NavWrapper>

          <Cart />
        </Header>
      </TopBar>

      <Drawer />
      <BackDrop isOpen={isMenuOpen} toggleFn={toggleMenu} />
    </>
  );
};

export default TopNav;
