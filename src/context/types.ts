import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IProviderProps {
  children?: ReactNode;
}

//CartContext
export interface ICartContext {
  itemsAdded: ItemInfo[];
  addItems: ({
    image,
    name,
    priceNormal,
    priceDesc,
    descPercent,
    cantidad,
  }: AddItemsInfo) => void;
  removeItem: (name: string) => void;
  total: number;
}

export type ItemInfo = AddItemsInfo & {
  total: number;
};

export type AddItemsInfo = {
  image: string;
  name: string;
  priceNormal: number;
  priceDesc: number;
  descPercent: number;
  cantidad: number;
};

//MenuContext
export interface IMenuContext {
  isMenuOpen: boolean;
  isCartOpen: boolean;
  toggleMenu: () => void;
  toggleCart: () => void;
  closeCart: () => void;
}

//SliderContext
export interface ISliderContext {
  currentImage: number;
  isModalOpen: boolean;
  prevImage: () => void;
  nextImage: () => void;
  selectImage: (value: number) => void;
  setDragValueOne: Dispatch<SetStateAction<number>>;
  dragTo: (dragValueTwo: number) => void;
  toggleModal: () => void;
}
