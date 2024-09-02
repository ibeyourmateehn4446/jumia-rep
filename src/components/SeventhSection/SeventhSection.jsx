import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideItem from "../CarouselWrapper/SlideItem";
import Wrapper from "../CarouselWrapper/Wrapper";
import { MdKeyboardArrowRight } from "react-icons/md";

const SeventhSection = () => {
  const width = window.innerWidth;
  let count;

  if (width > 1160) count = 6;
  if (width <= 1024) count = 5;
  if (width <= 768) count = 4;
  if (width <= 425) count = 2;
  if (width === 320) count = 1;

  return (
    <>
      <h3 className="bg-[#B5DE93] rounded-t-md text-white text-xs md:text-lg py-2 px-4 flex items-center justify-between">
        <span className="font-medium">Xiaomi Official Store</span>
        <span className="md:text-[15px] flex items-center">
          SEE ALL <MdKeyboardArrowRight />
        </span>
      </h3>
      <Wrapper count={count}>
        <SlideItem
          title="Xiaomi Redmi 12C 6.53-i"
          image="/images/redmi12c-one.jpg"
          price={65950}
          percent={16}
        />

        <SlideItem
          title="Xiaomi Redmi 12C 6.53-i"
          image="/images/redmi12c-two.jpg"
          price={65950}
          percent={16}
        />

        <SlideItem
          title="Xiaomi Redmi 12C 6.53-i"
          image="/images/redmi12c-three.jpg"
          price={65950}
          percent={16}
        />

        <SlideItem
          title="Xiaomi Redmi Note 12 P.."
          image="/images/redmi-note.jpg"
          price={173420}
          percent={9}
        />

        <SlideItem
          title="Xiaomi Redmi 12C 6.53'"
          image="/images/redmi12c-four.jpg"
          price={71670}
          percent={9}
        />

        <SlideItem
          title="Xiaomi Redmi Note 12 P.."
          image="/images/redmi-note-two.jpg"
          price={168000}
          percent={14}
        />

        <SlideItem
          title="Xiaomi Redmi Note 11 P.."
          image="/images/redmi-note-three.jpg"
          price={193630}
          percent={12}
        />

        <SlideItem
          title="Xiaomi Redmi Note 11 P.."
          image="/images/redmi-note-four.jpg"
          price={205970}
          percent={6}
        />

        <SlideItem
          title="Xiaomi Redmi 12C Mint"
          image="/images/redmi-mint.jpg"
          price={85500}
          percent={10}
        />

        <SlideItem
          title="Xiaomi Redmi Note 11 6.."
          image="/images/redmi-note-five.jpg"
          price={135260}
          percent={18}
        />

        <SlideItem
          title="Xiaomi Redmi Note 11 6.."
          image="/images/redmi-note-six.jpg"
          price={135260}
          percent={18}
        />

        <SlideItem
          title="Xiaomi Redmi 10A 6.53"
          image="/images/redmi-10a.jpg"
          price={88580}
          percent={19}
        />

        <SlideItem
          title="Xiaomi Redmi Note 12 Gr"
          image="/images/redmi-note-seven.jpg"
          price={134900}
          percent={10}
        />

        <SlideItem
          title="XIAOMI Mi 20000mAh Q"
          image="/images/xiaomi-power.jpg"
          price={13230}
          percent={30}
        />
      </Wrapper>
    </>
  );
};

export default SeventhSection;
