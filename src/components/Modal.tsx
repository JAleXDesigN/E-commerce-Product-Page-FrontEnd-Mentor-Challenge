import { FC } from "react";
import { ProductImages } from "../data/index";
import BackDrop from "./BackDrop";
import { ModalWrapper } from "./Modal.styled";
import Slider from "./Slider";
import { useSlider } from "../context/SliderContext";

const Modal: FC<ProductImages> = ({ images, thumbnails }) => {
  const { isModalOpen, toggleModal } = useSlider();
  return (
    <>
      <BackDrop isOpen={isModalOpen} toggleFn={toggleModal} />
      <ModalWrapper isOpen={isModalOpen}>
        <div>
          <Slider design="modal" images={images} thumbnails={thumbnails} />
        </div>
      </ModalWrapper>
    </>
  );
};

export default Modal;
