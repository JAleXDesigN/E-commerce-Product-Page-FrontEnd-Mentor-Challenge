import {
  createContext,
  FC,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import { IProviderProps, IMenuContext } from "./types";



const MenuContext = createContext<IMenuContext>({
  isMenuOpen: false,
  isCartOpen: false,
  toggleMenu: () => {},
  toggleCart: () => {},
  closeCart: () => {},
});

const MenuProvider: FC<IProviderProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const query = useMemo(() => window.matchMedia("(min-width: 768px)"), []);
  const [matches, setMatches] = useState(query.matches);

  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (matches) {
      setIsMenuOpen(false);
    }
  }, [matches]);

  const toggle = {
    toggleMenu: () => setIsMenuOpen((prev) => !prev),
    toggleCart: () => setIsCartOpen((prev) => !prev),
  };

  const closeCart = () => {
    if (isCartOpen) {
      setIsCartOpen(false)
    }
  }

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        isCartOpen,
        toggleMenu: toggle.toggleMenu,
        toggleCart: toggle.toggleCart,
        closeCart
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
export default MenuProvider;
