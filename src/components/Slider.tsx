import { useSlider } from "../context/SliderContext";
import IconPrevious from "./icons/IconPrevious";
import IconNext from "./icons/IconNext";
import { FC } from "react";
import { SliderProps, TMouseEvent, TTouchEvent } from "./types";
import {
  Container,
  SilderWrapper,
  ImagesWrapper,
  ArrowSlider,
  ThumbnailsWrapper,
  ThumbnailImage,
  IconWrapper,
} from "./Slider.styled";
import IconCloseModal from "./icons/IconCloseModal";

const Slider: FC<SliderProps> = ({ design, images, thumbnails }) => {
  const {
    currentImage,
    prevImage,
    nextImage,
    selectImage,
    setDragValueOne,
    dragTo,
    toggleModal,
  } = useSlider();

  const className = design === "mobile" ? design : "modal";

  const onMouseDown = (e: TMouseEvent) => {
    if (e.button === 0) {
      setDragValueOne(e.screenX);
    }
  };

  const onMouseUp = (e: TMouseEvent) => {
    if (e.button === 0) {
      dragTo(e.screenX);
    }
  };

  const onTouchStart = (e: TTouchEvent) => {
    setDragValueOne(e.changedTouches[0].screenX);
  };

  const onTouchEnd = (e: TTouchEvent) => {
    dragTo(e.changedTouches[0].screenX);
  };

  return (
    <Container>
      {design === "modal" && (
        <IconWrapper onClick={toggleModal}>
          <IconCloseModal />
        </IconWrapper>
      )}
      <SilderWrapper
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <ImagesWrapper className={`slide-${currentImage}`}>
          {images?.map(({ src, title }) => (
            <img key={title} src={src} alt={title} />
          ))}
        </ImagesWrapper>
      </SilderWrapper>

      <ThumbnailsWrapper className={className}>
        {thumbnails?.map(({ src, title }, idx) => (
          <ThumbnailImage
            key={title}
            className={`${
              idx === currentImage ? "active" : "normal"
            } ${className}`}
            onClick={() => selectImage(idx)}
          >
            <img src={src} alt={title} />
          </ThumbnailImage>
        ))}
      </ThumbnailsWrapper>

      <ArrowSlider position={"left"} onClick={prevImage} className={className}>
        <IconPrevious />
      </ArrowSlider>
      <ArrowSlider position={"right"} onClick={nextImage} className={className}>
        <IconNext />
      </ArrowSlider>
    </Container>
  );
};

export default Slider;
