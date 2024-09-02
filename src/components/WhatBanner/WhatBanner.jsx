import React from "react";
import BannerItem from "./BannerItem";

const WhatBanner = () => {
  return (
    <div className="bg-white mt-4 p-4 rounded-md flex items-center gap-2">
      <BannerItem href="/" image="/images/cooling.gif" alt='refrigerator'/>
      <BannerItem href="/" image="/images/chilling.gif" alt='aircon'/>
      <BannerItem href="/" image="/images/cooking.gif" alt='cooker'/>
    </div>
  );
};

export default WhatBanner;
