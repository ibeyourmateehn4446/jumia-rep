import SlideItem from "../CarouselWrapper/SlideItem";
import Wrapper from "../CarouselWrapper/Wrapper";
import { MdKeyboardArrowRight } from "react-icons/md";
import formartTime from "../utils/formartTime";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../CarouselWrapper/Loader";

const FourthSection = ({ isLoading }) => {
  const products = useSelector((state) => state.products.products);

  const width = window.innerWidth;
  let count;

  if (width > 1160) count = 6;
  if (width <= 1024) count = 5;
  if (width <= 768) count = 4;
  if (width <= 425) count = 2;

  if (width === 320) count = 1;

  const [countDown, setCountDown] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const timer = formartTime();
      setCountDown(timer);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="mx-2 lg:mx-0 my-4">
          <Wrapper count={count}>
            {Array(10)
              .fill(0)
              .map((_, idx) => {
                return <Loader key={idx} />;
              })}
          </Wrapper>
        </div>
      )}
      {!isLoading && (
        <>
          <h3 className="bg-[#E61601] rounded-t-md text-white text-xs md:text-lg py px-4 flex items-center justify-between">
            <span className="font-semibold">Flash Sales</span>
            <span className="font-light flex gap-1">
              Time Left:
              <p className="font-semibold">
                {countDown.hours}h : {countDown.minutes}m : {countDown.seconds}s
              </p>
            </span>
            <span className="md:text-[15px] flex items-center">
              SEE ALL <MdKeyboardArrowRight />
            </span>
          </h3>
          <Wrapper count={count}>
            {products
              ?.filter((product, index) => index > 14 && index <= 29)
              .map((product) => {
                return (
                  <Link key={product.id} to={`/${product.id}`}>
                    <SlideItem
                      key={product.id}
                      title={product.title}
                      image={product.image}
                      price={product.price}
                      percent={product.percent}
                    />
                  </Link>
                );
              })}
          </Wrapper>
        </>
      )}
    </>
  );
};

export default FourthSection;
