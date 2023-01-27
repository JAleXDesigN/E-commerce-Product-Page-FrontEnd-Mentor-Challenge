import { CartWrapper, TitleCart, ItemsWrapper, Button } from "./Cart.styled";
import { useMenu } from "../context/MenuContext";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { isCartOpen } = useMenu();
  const { itemsAdded } = useCart();

  return (
    <CartWrapper isCartOpen={isCartOpen}>
      <TitleCart>Cart</TitleCart>
      <ItemsWrapper>
        {itemsAdded.length > 0 ? (
          itemsAdded.map((item) => <CartItem key={item.name} {...item} />)
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
