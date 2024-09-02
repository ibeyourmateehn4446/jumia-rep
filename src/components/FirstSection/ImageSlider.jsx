import SliderItem from "./SliderItem";
import CarouselWrapper from "./CarouselWrapper";

const ImageSlider = () => {
  return (
    <CarouselWrapper className="overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 overflow-x-scroll lg:overflow-x-hidden relative w-[712px] rounded-md">
      <SliderItem image={"/images/sliderone.png"} />

      <SliderItem image={"/images/slidertwo.png"} />

      <SliderItem image={"/images/sliderthree.jpg"} />

      <SliderItem image={"/images/sliderfour.jpg"} />

      <SliderItem image={"/images/sliderfive.jpg"} />

      <SliderItem image={"/images/slidersix.jpg"} />

      <SliderItem image={"/images/sliderseven.png"} />

      <SliderItem image={"/images/slidereight.png"} />
    </CarouselWrapper>
  );
};

export default ImageSlider;
