import {
  CartWrapper,
  TitleCart,
  ItemsWrapper,
  Item,
  ItemImage,
  ItemData,
  Button,
} from "./Cart.styled";
import IconDelete from "./icons/IconDelete";
import { useMenu } from "../context/MenuContext";
import { useCart } from "../context/CartContext";
import { currencyFormatter } from "../utils";

const Cart = () => {
  const { isCartOpen } = useMenu();
  const { itemsAdded, removeItem } = useCart();

  return (
    <CartWrapper isCartOpen={isCartOpen}>
      <TitleCart>Cart</TitleCart>
      <ItemsWrapper>
        {itemsAdded.length > 0 ? (
          itemsAdded.map(({ image, name, priceDesc, cantidad, total }) => (
            <Item key={name}>
              <ItemImage src={image} alt={`Product ${name}`} />
              <ItemData>
                <h3>{name}</h3>
                <p>
                  {currencyFormatter(priceDesc)} x {cantidad} {" "}
                  <span>{currencyFormatter(total)}</span>
                </p>
              </ItemData>
              <IconDelete onClick={() => removeItem(name)} />
            </Item>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
        {itemsAdded.length > 0 && (
          <Button className="checkOut">Check out</Button>
        )}
      </ItemsWrapper>
    </CartWrapper>
  );
};

export default Cart;
