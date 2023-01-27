import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ICartContext, IProviderProps, ItemInfo, AddItemsInfo } from "./types";

const CartContext = createContext<ICartContext>({
  itemsAdded: [],
  addItems: () => {},
  removeItem: () => {},
  total: 0,
});

const CartProvider: FC<IProviderProps> = ({ children }) => {
  const [itemsAdded, setItemsAdded] = useState<ItemInfo[]>([]);
  const [total, setTotal] = useState(0);

  const addItems = ({
    image,
    name,
    priceNormal,
    priceDesc,
    descPercent,
    quantity,
  }: AddItemsInfo) => {
    console.log({ image, name, priceNormal, priceDesc, descPercent, quantity });

    if (quantity === 0) return;

    const itemExist = itemsAdded.find((item) => item.name === name);

    const items = itemsAdded.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          quantity: item.quantity + quantity,
          total: priceDesc * (item.quantity + quantity),
        };
      }
      return item;
    });

    if (Boolean(itemExist)) {
      setItemsAdded([...items]);
    } else {
      setItemsAdded([
        ...itemsAdded,
        {
          image,
          name,
          priceNormal,
          priceDesc,
          descPercent,
          quantity,
          total: priceDesc * quantity,
        },
      ]);
    }
  };

  const removeItem = (name: string) => {
    const remove = itemsAdded.filter((item) => item.name !== name);

    setItemsAdded([...remove]);
  };

  const calcTotal = () => {
    let result = 0;
    itemsAdded.forEach((item) => {
      result += item.total;
    });

    setTotal(result);
  };

  useEffect(() => {
    calcTotal();
  }, [itemsAdded]);

  return (
    <CartContext.Provider
      value={{
        itemsAdded,
        addItems,
        removeItem,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export default CartProvider;
