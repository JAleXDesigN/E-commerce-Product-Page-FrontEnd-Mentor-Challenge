import { useMenu } from "../context/MenuContext";
import { data } from "../data";
import { Section } from "./Product.styled";
import InfoProduct from "./ProductInfo";
import Slider from "./Slider";
import Modal from "./Modal";

const Product = () => {
  const { closeCart } = useMenu();
  const {
    productImages: { images, thumbnails },
    productInfo,
  } = data[0];

  return (
    <main onClick={closeCart}>
      <Section>
        <Slider design="mobile" images={images} thumbnails={thumbnails} />
        <Modal images={images} thumbnails={thumbnails} />

        <InfoProduct info={productInfo} thumbnail={thumbnails[0].src} />
      </Section>
    </main>
  );
};

export default Product;
