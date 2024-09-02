import { HiOutlineHome } from "react-icons/hi2";

import {
  CiApple,
  GiPressureCooker,
  GiSmartphone,
  GiBabyFace,
  HiOutlinePaintBrush,
  HiOutlineRadio,
  HiOutlineComputerDesktop,
  IoShirtOutline,
  IoGameControllerOutline,
  IoTennisballOutline,
  TbDotsCircleHorizontal,
} from "react-icons/all";

import MenuItem from "./MenuItem";
import { FaTimes } from "react-icons/fa";

const Menu = ({ mobile, hideSide, showSideitem }) => {
  return (
    <>
      <div
        className={`bg-white w-[206px] rounded-md p-2 xl:gap-3 transition-all duration-300 ease-in ${
          mobile
            ? "fixed top-0 h-screen overflow-y-scroll scrollbar-none flex flex-col gap-3 justify-evenly rounded-none"
            : "hidden h-max gap-[4px]"
        } ${showSideitem ? "left-[0%]" : "left-[-100%]"} lg:flex flex-col`}
      >
        <FaTimes
          onClick={() => hideSide()}
          className={`text-2xl ${
            mobile
              ? "flex cursor-pointer absolute top-0 right-0 mx-3 my-4"
              : "hidden"
          }`}
        />

        <MenuItem text="Supermarket" icon={<CiApple />} />
        <MenuItem text="Health & Beauty" icon={<HiOutlinePaintBrush />} />
        <MenuItem text="Home & Office" icon={<HiOutlineHome />} />
        <MenuItem text="Appliances" icon={<GiPressureCooker />} />
        <MenuItem text="Phones & Tablets" icon={<GiSmartphone />} />
        <MenuItem text="Computing" icon={<HiOutlineComputerDesktop />} />
        <MenuItem text="Electronics" icon={<HiOutlineRadio />} />
        <MenuItem text="Fashion" icon={<IoShirtOutline />} />
        <MenuItem text="Baby Products" icon={<GiBabyFace />} />
        <MenuItem text="Gaming" icon={<IoGameControllerOutline />} />
        <MenuItem text="Sporting Goods" icon={<IoTennisballOutline />} />
        <MenuItem text="Other Categories" icon={<TbDotsCircleHorizontal />} />
      </div>
    </>
  );
};

export default Menu;
