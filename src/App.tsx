import TopNav from "./components/TopNav";
import Product from "./components/Product";
import MenuProvider from "./context/MenuContext";
import SliderProvider from "./context/SliderContext";
import CartProvider from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <MenuProvider>
        <TopNav />

        <SliderProvider>
          <Product />
        </SliderProvider>
      </MenuProvider>
    </CartProvider>
  );
};

export default App;


