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
import { valueWithDesc, currencyFormatter } from "../utils/index";

const ProductInfo: FC<ProductInfoProps> = ({ info, thumbnail }) => {
  const { addItems } = useCart();
  const { company, name, description, price, descPercent } = info;

  const [cantidad, setCantidad] = useState(0);

  return (
    <InfoWrapper>
      <CompanyName>{company}</CompanyName>
      <TitleProduct>{name}</TitleProduct>
      <Description>{description}</Description>

      <PriceWrapper>
        <PriceDiscount>
          {valueWithDesc(price, descPercent).formatted}
          <span>{descPercent}%</span>
        </PriceDiscount>
        <PriceNormal>{currencyFormatter(price)}</PriceNormal>
      </PriceWrapper>

      <ActionsWrapper>
        <QuantityWrapper>
          <IconMinus
            onClick={() => setCantidad((prev) => (prev > 0 ? prev - 1 : 0))}
          />
          <Number>{cantidad}</Number>
          <IconPlus onClick={() => setCantidad((prev) => prev + 1)} />
        </QuantityWrapper>
        <Button
          className="addToCard"
          type="button"
          onClick={() =>
            addItems({
              image: thumbnail,
              name,
              priceNormal: price,
              priceDesc: valueWithDesc(price, descPercent).number,
              descPercent,
              cantidad,
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
