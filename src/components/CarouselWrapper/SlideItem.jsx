import React from "react";

const SlideItem = ({ title, image, price, percent }) => {
  const realPrice = Math.ceil(price / ((100 - percent) / 100));
  return (
    <>
      <div
        className={`cursor-pointer bg-white flex flex-col hover:shadow-md hover:scale-[1.01] w-[140px] md:w-[165px]  ${
          !price && !percent ? "h-[200px]" : "h-[230px]"
        }  focus:outline-0 rounded-md p-1 lg:p-0`}
      >
        <div className="h-full w-full relative">
          <img
            className="w-full h-full object-contain rounded-md"
            src={image}
            alt="product"
          />
          {percent && (
            <p className="absolute text-xs right-2 top-3 text-[#FF9900] bg-[#FEF3E9] p-1">
              -{percent}%
            </p>
          )}
        </div>
        <div className="px-1">
          <p className="text-[11px] md:text-xs">{title}</p>
          {price && (
            <p className="text-xs md:text-sm font-[500] mt-1">₦{price}</p>
          )}
          {percent && (
            <p className="text-[11px] mb-2 md:text-xs line-through">₦{realPrice}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SlideItem;
