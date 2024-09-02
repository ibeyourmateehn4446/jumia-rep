import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideItem from "../CarouselWrapper/SlideItem";
import Wrapper from "../CarouselWrapper/Wrapper";

const SixthSection = () => {
  const width = window.innerWidth;
  let count;

  if (width > 1160) count = 6;
  if (width <= 1024) count = 4;
  // if (width <= 768) count = 4;
  if (width <= 425) count = 2;


  return (
    <>
      <Wrapper count={count}>
        <div className="flex items-center justify-center text-center">
          <SlideItem title="50% Off & Above" image="/images/halfprice.png" />
        </div>

        <div className="flex items-center justify-center text-center">
          <SlideItem title="Your Utitity Shop" image="/images/jumiapay.png" />
        </div>

        <div className="flex items-center justify-center text-center">
          <SlideItem title="Jumia Food" image="/images/jumiafood.png" />
        </div>

        <div className="flex items-center justify-center text-center">
          <SlideItem title="Below ₦5000" image="/images/decor.jpg" />
        </div>

        <div className="flex items-center justify-center text-center">
          <SlideItem title="Today Only" image="/images/today.png" />
        </div>

        <div className="flex items-center justify-center text-center">
          <SlideItem title="Official Stores" image="/images/stores.gif" />
        </div>
      </Wrapper>
    </>
  );
};

export default SixthSection;
