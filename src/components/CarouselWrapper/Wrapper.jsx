import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
// import SlideItem from "./SlideItem";

const Wrapper = ({ children, count }) => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: count,
    slidesToScroll: 4,
    // autoplay: true,
    speed: 1000,
    cssEase: "linear",
  };

  return (
    <Carousel
      {...settings}
      className="bg-white mb-4 px-[50px] py-1 overflow-y-hidden overflow-x-scroll relative  w-full rounded-md scrollbar-none"
    >
      {children}
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  & > button {
    height: 100%;
    width: 7vw;
    cursor: pointer;
    z-index: 1;
    opacity: 1;

    &:before {
      font-size: 30px;
      color: gray;
      @media (max-width: 768px) {
        display: none;
      }
    }

    @media (max-width: 768px) {
      width: 0vw;
    }
  }

  ul li button {
    position: absolute;
    top: -35px;

    &:before {
      font-size: 10px;
      color: #828284;
    }
  }

  li.slick-active button:before {
    color: #ff9900;
  }

  .slick-list {
    overflow: initial;
  }
`;

export default Wrapper;
