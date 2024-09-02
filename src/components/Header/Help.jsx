import React from "react";
import { BsChatLeftDots } from "react-icons/bs";
import { clx } from "../utils/clx";

const wrapperClass = clx(
  "absolute top-[70px] right-16 bg-white w-[220px] rounded-md border border-stone-200 z-10"
);
const buttonClass = clx(
  "w-full bg-[#FF9900] rounded-md text-white px-6 py-3 hover:bg-[#E07E1B] shadow-md flex items-center gap-4"
);
const pclasses = clx(
  "group p-3 hover:bg-[#f1f1f2] hover:font-semibold transition-all duration-[300]  cursor-pointer"
);
const spanClass = clx("text-[grey] text-sm group-hover:text-[black]");

const Help = () => {
  return (
    <div className={wrapperClass}>
      <div className="flex flex-col border-b-2 border-[#f1f1f2]">
        <p className={pclasses}>
          <span className={spanClass}>Help Center</span>
        </p>

        <p className={pclasses}>
          <span className={spanClass}>Place & track order</span>
        </p>

        <p className={pclasses}>
          <span className={spanClass}>Order cancellation</span>
        </p>

        <p className={pclasses}>
          <span className={spanClass}>Order cancellation</span>
        </p>

        <p className={pclasses}>
          <span className={spanClass}>Payment & Jumia account</span>
        </p>

        <p className={pclasses}>
          <span className={spanClass}>Contact Us</span>
        </p>
      </div>

      <div className="py-4 mx-3">
        <button className={buttonClass}>
          <BsChatLeftDots className="text-2xl" />
          LIVE CHAT
        </button>
      </div>
    </div>
  );
};

export default Help;
