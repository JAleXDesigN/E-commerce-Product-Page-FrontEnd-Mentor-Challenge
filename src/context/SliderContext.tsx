import {
  createContext,
  FC,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import { IProviderProps, ISliderContext } from "./types";

const SliderContext = createContext<ISliderContext>({
  currentImage: 0,
  isModalOpen: false,
  prevImage: () => {},
  nextImage: () => {},
  selectImage: () => {},
  setDragValueOne: () => {},
  dragTo: () => {},
  toggleModal: () => {},
});

const SliderProvider: FC<IProviderProps> = ({ children }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [dragValueOne, setDragValueOne] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const query = useMemo(() => window.matchMedia("(max-width: 991px)"), []);
  const [matches, setMatches] = useState(query.matches);

  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (matches) {
      setIsModalOpen(false);
    }
  }, [matches]);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev >= 3 ? 0 : prev + 1));
  };

  const selectImage = (value: number) => {
    setCurrentImage(value);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const dragTo = (dragValueTwo: number) => {
    const isNotDragging =
      dragValueTwo === dragValueOne && !matches && !isModalOpen;

    const isNotDraggingAndModalOpen =
      dragValueTwo === dragValueOne && isModalOpen;

    if (isNotDraggingAndModalOpen) return;
    if (isNotDragging) setIsModalOpen((prev) => !prev);
    if (dragValueTwo > dragValueOne + 30) prevImage();
    if (dragValueTwo < dragValueOne - 30) nextImage();
  };

  return (
    <SliderContext.Provider
      value={{
        currentImage,
        isModalOpen,
        prevImage,
        nextImage,
        selectImage,
        setDragValueOne,
        dragTo,
        toggleModal,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export const useSlider = () => useContext(SliderContext);
export default SliderProvider;
