import { FC, useState } from "react";
import { ProductInfoProps } from "./types";

import {
  InfoWrapper,
  CompanyName,
  TitleProduct,
  Description,
  PriceWrapper,
  PriceDiscount,
  PriceNormal,
  ActionsWrapper,
  QuantityWrapper,
  Number,
} from "./ProductInfo.styled";
import { Button } from "./Cart.styled";
import IconMinus from "./icons/IconMinus";
import IconPlus from "./icons/IconPlus";

import { useCart } from "../context/CartContext";
import { valueWithDesc, currencyFormatter, newQuantity } from "../utils/index";

const ProductInfo: FC<ProductInfoProps> = ({ info, thumbnail }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItems } = useCart();
  const { company, name, description, price, descPercent } = info;

  const priceFormatted = currencyFormatter(price);
  const { formatted, number } = valueWithDesc(price, descPercent);

  return (
    <InfoWrapper>
      <CompanyName>{company}</CompanyName>
      <TitleProduct>{name}</TitleProduct>
      <Description>{description}</Description>

      <PriceWrapper>
        <PriceDiscount>
          {formatted}
          <span>{descPercent}%</span>
        </PriceDiscount>
        <PriceNormal>{priceFormatted}</PriceNormal>
      </PriceWrapper>

      <ActionsWrapper>
        <QuantityWrapper>
          <IconMinus
            onClick={() => newQuantity("minus", quantity, setQuantity)}
          />
          <Number>{quantity}</Number>
          <IconPlus
            onClick={() => newQuantity("plus", quantity, setQuantity)}
          />
        </QuantityWrapper>
        <Button
          className="addToCard"
          type="button"
          onClick={() =>
            addItems({
              image: thumbnail,
              name,
              priceNormal: price,
              priceDesc: number,
              descPercent,
              quantity,
            })
          }
        >
          Add to cart
        </Button>
      </ActionsWrapper>
    </InfoWrapper>
  );
};

export default ProductInfo;
