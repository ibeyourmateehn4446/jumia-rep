import React from "react";

const SliderItem = ({image }) => {
  return (
    <div className="focus:outline-0 rounded-md p-1 lg:p-0">
      <img
        className="w-full h-full object-contain rounded-md"
        src={image}
        alt=""
      />
    </div>
  );
};

export default SliderItem;
