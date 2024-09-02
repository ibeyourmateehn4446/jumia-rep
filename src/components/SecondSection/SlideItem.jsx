import React from "react";

const SlideItem = ({ title, image }) => {
  return (
    <div className="cursor-pointer bg-white flex flex-col items-center hover:shadow-md hover:scale-[1.01] h-[120px] md:h-[150px] w-[90px] md:w-[130px] focus:outline-0 rounded-md p-1 lg:p-0">
      <div className="h-[full] w-[90%]">
        <img
          className="w-full h-full object-contain"
          src={image}
          alt="product"
        />
      </div>
      <p className="text-[9px] md:text-xs text-center">{title}</p>
    </div>
  );
};

export default SlideItem;
