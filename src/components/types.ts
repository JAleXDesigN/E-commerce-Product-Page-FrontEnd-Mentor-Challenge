import { ReactNode, MouseEvent, TouchEvent } from "react";
import { ProductInfo, ProductImages } from "../data";

//Avatar Component
export interface AvatarProps {
  width: number;
  height: number;
  src: string;
  alt: string;
}

export type AvatarStyledProps = {
  width: number;
  height: number;
};

//BackDrop Component
export interface BackDropProps {
  children?: ReactNode;
  isOpen: boolean;
  toggleFn: () => void;
}

export type BackDropStyledProps = {
  isOpen: boolean;
};

//Badge Component
export interface BadgeProps {
  orderNumber: number;
}

//Cart Component
export interface CartItemProps {
  image: string;
  name: string;
  priceDesc: number;
  quantity: number;
  total: number;
}

export type CartStyledProps = {
  isCartOpen: boolean;
};

//Drawer component and modal
export type ModalStyledProps = {
  isOpen: boolean;
};

//Navigation Component
export interface NavBarProps {
  design: "horizontal" | "vertical";
}

//Product Info Component
export interface ProductInfoProps {
  info: ProductInfo;
  thumbnail: string;
}

//Slider Component
export interface SliderProps extends ProductImages {
  design: "mobile" | "modal";
}

export type ArrowsStyledProps = {
  position: "left" | "right";
};

//Events Types
export type TMouseEvent = MouseEvent<HTMLDivElement, globalThis.MouseEvent>;
export type TTouchEvent = TouchEvent<HTMLDivElement>;
