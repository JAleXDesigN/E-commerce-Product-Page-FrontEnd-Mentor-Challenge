import { FC } from "react";
import { BadgeProps } from "./types";
import IconCart from "./icons/IconCart";
import { useMenu } from "../context/MenuContext";
import { BadgeContent, BadgeWrapper } from "./Badge.styled";

const CartBadge: FC<BadgeProps> = ({ orderNumber }) => {
  const { toggleCart } = useMenu();

  return (
    <BadgeWrapper onClick={toggleCart}>
      {orderNumber > 0 && <BadgeContent>{orderNumber}</BadgeContent>}
      <IconCart />
    </BadgeWrapper>
  );
};

export default CartBadge;
