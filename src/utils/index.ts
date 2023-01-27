import { Dispatch, SetStateAction } from "react";
export const currencyFormatter = (value: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    minimumFractionDigits: 2,
    currency: "USD",
  });
  return formatter.format(value);
};

export const valueWithDesc = (price: number, descPercent: number) => {
  const priceWithDesc = price - (price * descPercent) / 100;
  return {
    formatted: currencyFormatter(priceWithDesc),
    number: priceWithDesc,
  };
};

type NewQuantityType = "plus" | "minus";
type NewQuantitySetState = Dispatch<SetStateAction<number>>;

export const newQuantity = (
  type: NewQuantityType,
  state: number,
  setState: NewQuantitySetState
) => {
  if (type === "minus" && state === 0) return;
  if (type === "minus") {
    setState(state - 1);
  } else {
    setState(state + 1);
  }
};
