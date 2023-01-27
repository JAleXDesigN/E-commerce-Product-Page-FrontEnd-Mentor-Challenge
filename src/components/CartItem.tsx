import { FC } from "react";
import { Item, ItemImage, ItemData } from "./Cart.styled";
import IconDelete from "./icons/IconDelete";

import { useCart } from "../context/CartContext";
import { currencyFormatter } from "../utils/index";

import { CartItemProps } from "./types";

const CartItem: FC<CartItemProps> = ({
  image,
  name,
  priceDesc,
  quantity,
  total,
}) => {
  const { removeItem } = useCart();

  const priceDescFormatted = currencyFormatter(priceDesc);
  const totalFormatted = currencyFormatter(total);
  return (
    <Item key={name}>
      <ItemImage src={image} alt={`Product ${name}`} />
      <ItemData>
        <h3>{name}</h3>
        <p>
          {priceDescFormatted} x {quantity} <span>{totalFormatted}</span>
        </p>
      </ItemData>
      <IconDelete onClick={() => removeItem(name)} />
    </Item>
  );
};

export default CartItem;
