import Menu from "./Menu";
import ImageSlider from "./ImageSlider";
import Delivery from "./Delivery";

const FirstSection = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <Menu />
      <ImageSlider />
      <Delivery />
    </div>
  );
};

export default FirstSection;
