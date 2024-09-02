import { Link } from "react-router-dom";
import { FiPhone, RiArrowGoBackFill } from "react-icons/all";
const Header = () => {
  return (
    <div className="bg-white px-[20px] lg:px-[30px] py-3 flex items-center justify-between fixed top-0 right-0 left-0 z-20 shadow-md">
      <Link to={"/"}>
        <div className="h-[20px] md:h-[50px]">
          <img className="h-full" src="/images/jumia-logo.png" alt="jumia" />
        </div>
      </Link>

      <p className="font-semibold text-[13px] md:text-base">Add New Address</p>

      <div className="flex items-center gap-11 justify-between">
        <div className="flex items-center gap-2">
          <FiPhone className="text-[#7A7A7F] text-lg font-bold" />
          <div>
            <p className="text-[9px] md:text-xs text-[#7A7A7F] font-bold">
              Need Help?
            </p>
            <p className="text-[9px] md:text-xs text-[#294B97] font-bold underline cursor-pointer">
              Contact us
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <RiArrowGoBackFill className="text-[#7A7A7F] font-bold text-lg" />
          <div>
            <p className="text-xs text-[#7A7A7F] font-bold">Easy</p>
            <p className="text-xs text-[#7A7A7F] font-bold">Return</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <FiPhone className="text-[#7A7A7F] font-bold text-lg" />
          <div>
            <p className="text-xs text-[#7A7A7F] font-bold">Secure</p>
            <p className="text-xs text-[#7A7A7F] font-bold">Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
