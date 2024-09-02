import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineHeart, MdOutlineAddShoppingCart } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";

import { useProductDetails } from "../CustomHook/useProductDetails";
import Promotion from "./Promotion";
import Delivery from "./Delivery";
import Footer from "../Footer/Footer";
import {
  addItemToCart,
  setNotification,
} from "../Store/Features/CartItemSlice";
import formartTime from "../utils/formartTime";

const ProductDetails = () => {
  // STATE TO STORE THE COUNTDOWN
  const [countDown, setCountDown] = useState({});

  const { productID } = useParams();

  const dispatch = useDispatch();

  //THIS FETCH SPECIFIC PRODUCT DETAILS
  const { isLoading, isError, data } = useProductDetails(productID);

  //THIS CREATES NEW OBJECT FROM THE FETCHED DATA BY INCORPORATING ID
  const produtData = { ...data?.data, id: productID };

  //THIS CALCULATE THE REAL PRICE OF GOODS
  const realPrice = Math.ceil(
    data?.data.price / ((100 - data?.data.percent) / 100)
  );

  //THIS HANDLES ADDING PRODUT TO CART
  const addToCartHandler = () => {
    dispatch(addItemToCart(produtData));

    dispatch(setNotification(true));

    const timer = setTimeout(() => {
      dispatch(setNotification(false));
      clearTimeout(timer);
    }, 2000);
  };

  //THIS GENERATES THE COUNTDOWN TIME
  useEffect(() => {
    const interval = setInterval(() => {
      const timer = formartTime();
      setCountDown(timer);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //IF PRODUCTS ARE STILL LOADING RENDER THIS
  if (isLoading) {
    return (
      <h2 className="text-center mt-2 text-[#FF9900] text-xl font-medium">
        Loading product...
      </h2>
    );
  }

  return (
    <>
      <div className="lg:mx-[55px] my-[20px] p-3 flex flex-col lg:flex-row gap-3">
        {/* PRODUCT DETAILS */}
        <div className="md:flex bg-white rounded-md lg:w-[80%] border">
          {/* IMAGE SECTION */}
          <div className="mx-2 p-4">
            <img
              className="w-full object-contain"
              src={data?.data.imageURL}
              alt="product"
            />
          </div>

          <div className="flex-1 py-2 px-4">
            {/* Details section */}
            <div className="lg:flex items-start justify-between border-b-2 border-[#f1f1f2] pb-2">
              <div>
                <h4 className="text-sm md:text-base lg:text-xl md:w-[95%]">
                  {data?.data.label}
                </h4>
                <h5 className="text-xs md:text-sm mt-2">
                  <span>Brand:</span>{" "}
                  <span className="text-[#2671C2] hover:underline">
                    {data?.data.title}
                  </span>
                </h5>
              </div>
              <div className="cursor-pointer w-10 h-10 hover:bg-[#FCDBB9] flex items-center justify-center rounded-full">
                <AiOutlineHeart className="text-2xl text-[#FF9900]" />
              </div>
            </div>
            {/* PRICE SECTION */}
            {data?.data.category ? (
              // IF PRODUCT HAS CATEGORY, SHOW THIS PRICE SECTION
              <div className="border border-red-500 rounded-md mt-2">
                <h3 className="bg-[#E61601] py-3 rounded-t-md text-white text-xs md:text-lg py px-4 flex items-center justify-between">
                  <span className="text-xs font-semibold">Flash Sales</span>
                  <span className="text-xs font-light flex items-center gap-1">
                    Time Left:
                    <p className="text-xs font-semibold">
                      {countDown.hours}h : {countDown.minutes}m :
                      {countDown.seconds}s
                    </p>
                  </span>
                </h3>

                {/* If there is price then render price */}
                {data?.data.price && (
                  <h2 className="text-base mx-3 md:text-2xl font-semibold my-2">
                    ₦{data?.data.price}
                  </h2>
                )}

                <div className="flex mx-3 my-2 gap-2 items-center justify-between w-min">
                  {/* if there is percentage, render real price. */}
                  {data?.data.percent && (
                    <p className="text-sm md:text-lg text-[#75757A] line-through">
                      ₦{realPrice}
                    </p>
                  )}

                  {/* if there is percentage, render it */}
                  {data?.data.percent && (
                    <span className="text-xs md:text-base text-[#FF9900] bg-[#FEF3E9] p-1">
                      -{data?.data.percent}%
                    </span>
                  )}
                </div>
              </div>
            ) : (
              // IF PRODUCT HAS NO CATEGORY SHOW THIS PRICE SECTION
              <div>
                {/* If there is price then render price */}
                {data?.data.price && (
                  <h2 className="text-base md:text-2xl font-semibold my-1">
                    ₦{data?.data.price}
                  </h2>
                )}

                <div className="flex gap-2 items-center justify-between w-min">
                  {/* if there is percentage, render real price. */}
                  {data?.data.percent && (
                    <p className="text-sm md:text-lg text-[#75757A] line-through">
                      ₦{realPrice}
                    </p>
                  )}

                  {/* if there is percentage, render it */}
                  {data?.data.percent && (
                    <span className="text-xs md:text-base text-[#FF9900] bg-[#FEF3E9] p-1">
                      -{data?.data.percent}%
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* SHIPPING FEE */}
            <div>
              <p className="mt-3 mb-8 text-xs">
                + ₦210 shipping fee from the company
              </p>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={addToCartHandler}
                className="flex items-center w-full bg-[#FF9900] rounded-md text-white px-4 py-2 hover:bg-[#E07E1B] shadow-lg mb-4"
              >
                <MdOutlineAddShoppingCart className="text-lg font-medium" />
                <p className="mx-auto text-sm font-medium">ADD TO CART</p>
              </motion.button>
            </div>

            <Promotion />
          </div>
        </div>
        {/* Delivery Section */}
        <Delivery />
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
