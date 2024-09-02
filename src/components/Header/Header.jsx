import { useState, useEffect } from "react";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Store/Features/CartItemSlice";
import {
  MdSearch,
  MdKeyboardArrowDown,
  FiUserCheck,
  AiOutlineShoppingCart,
  GiHamburgerMenu,
  BiHelpCircle,
  MdLogout,
} from "react-icons/all";
import { HiOutlineUser } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nameFormater } from "../utils/nameFormatter";
import { setCartCount } from "../Store/Features/CartItemSlice";

import Banner from "./Banner";
import Account from "./Account";
import Help from "./Help";
import Menu from "../FirstSection/Menu";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const count = useSelector((state) => state.cartItems.cartCount);

  const [acc, setAcc] = useState(false);
  const [help, setHelp] = useState(false);
  const [showSideitem, setShowSideitem] = useState(false);
  const [fixedBackground, setFixedBackground] = useState(false);

  const showAcc = () => {
    setAcc(!acc);
    setHelp(false);
  };

  const showHelp = () => {
    setHelp(!help);
    setAcc(false);
  };

  const hideSideItem = () => {
    setShowSideitem(false);
  };

  //get the user email
  const email = user?.email;

  //format the user email to get a name
  let name;
  if (user) {
    const formattedName = nameFormater(email);
    name = formattedName.toUpperCase();
  }

  const signOutHandler = () => {
    signOut(auth);
    dispatch(clearCart());
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const count = cartItems.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);

    dispatch(setCartCount(count));
  }, [cartItems]);

  const TOP_OFFSET = 56;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setFixedBackground(true);
      } else {
        setFixedBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = window.scrollY;

  // console.log({scroll, fixedBackground})

  return (
    <div className="relative">
      
      <div className="block lg:hidden absolute left-0 top-5 md:top-[34px] z-30">
        <Menu
          mobile={true}
          hideSide={hideSideItem}
          showSideitem={showSideitem}
        />
      </div>
      
      <Banner />
      {/* DESKETOP NAVBAR */}
      <div
        className={`bg-white hidden px-[50px] gap-16 py-5 lg:flex items-center ${
          fixedBackground ? "fixed top-0" : "relative"
        } right-0 left-0 z-20`}
      >
        <Link to={"/"}>
          <div className="h-[50px]">
            <img className="h-full" src="/images/jumia-logo.png" alt="jumia" />
          </div>
        </Link>
        <div className="flex-1 flex item-center justify-center gap-3">
          <div className="flex-1 flex item-center justify-center gap-3">
            <div className="flex items-center border border-[#A3A3A6] rounded-md w-full p-[10px]">
              <MdSearch className="text-2xl mr-[10px] text-[#A3A3A6] font-bold" />
              <input
                className="flex-1 border border-none focus:outline-0"
                type="text"
                placeholder="Search products, brands and categories"
              />
            </div>
            <button className="bg-[#FF9900] rounded-md text-white px-3 py-2 hover:bg-[#E07E1B] shadow-lg">
              SEARCH
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div
              onClick={showAcc}
              className={`${
                acc ? "bg-[#D3D3D5]" : ""
              } rounded-md flex items-center gap-2 hover:text-[#FF9900] p-3 cursor-pointer transition-all duration-100`}
            >
              {user ? (
                <div className="flex items-center justify-center gap-2 w-max">
                  <FiUserCheck className="text-2xl" />
                  <p className="text-base font-medium">Hi, {name}</p>
                  <MdKeyboardArrowDown />
                </div>
              ) : (
                <>
                  <HiOutlineUser className="text-2xl" />
                  <p>Account</p>
                  <MdKeyboardArrowDown />
                </>
              )}
            </div>

            <div
              onClick={showHelp}
              className={`${
                help ? "bg-[#D3D3D5]" : ""
              } rounded-md flex items-center gap-2 hover:text-[#FF9900] p-3 cursor-pointer transition-all duration-100`}
            >
              <BiHelpCircle className="text-2xl" />
              <p>Help</p>
              <MdKeyboardArrowDown />
            </div>

            <Link to="cart">
              <div className="  flex items-center gap-2 hover:text-[#FF9900] cursor-pointer transition-all duration-100">
                <div className="relative">
                  <AiOutlineShoppingCart className="text-2xl" />
                  {cartItems.length !== 0 && (
                    <p className="absolute -top-1 -right-1 text-[9px] font-bold bg-[#ff9900] w-4 h-4 flex items-center justify-center border-2 border-white rounded-full text-white">
                      {count}
                    </p>
                  )}
                </div>
                <p>Cart</p>
              </div>
            </Link>
          </div>
        </div>
        {acc && <Account />}
        {help && <Help />}
      </div>
      {/* MOBILE VIEW */}
      <div
        className={`bg-white px-[20px] py-5 lg:hidden items-center z-20 right-0 left-0 ${
          fixedBackground ? "fixed top-0" : "relative"
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-2 items-center">
            <GiHamburgerMenu
              className="text-2xl cursor-pointer"
              onClick={() => setShowSideitem(true)}
            />
            <Link to="/">
              <div className="h-[20px]">
                <img
                  className="h-full"
                  src="/images/jumia-logo.png"
                  alt="jumia"
                />
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <>
              {user ? (
                <div
                  onClick={signOutHandler}
                  className="flex items-center gap-2 hover:text-[#FF9900] transition-all duration-100"
                >
                  <MdLogout className="text-2xl" />
                </div>
              ) : (
                <Link to="signin">
                  <div className="flex items-center gap-2 hover:text-[#FF9900] transition-all duration-100">
                    <HiOutlineUser className="text-2xl" />
                  </div>
                </Link>
              )}
            </>
            <Link to="cart">
              <div className="  flex items-center gap-2 hover:text-[#FF9900] cursor-pointer transition-all duration-100">
                <div className="relative">
                  <AiOutlineShoppingCart className="text-2xl" />
                  {cartItems.length !== 0 && (
                    <p className="absolute -top-1 -right-1 text-[9px] font-bold bg-[#ff9900] w-4 h-4 flex items-center justify-center border-2 border-white rounded-full text-white">
                      {count}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex-1 flex item-center justify-center gap-3">
          <div className="flex-1 flex item-center justify-center gap-3">
            <div className="flex items-center border border-[#A3A3A6] rounded-md w-full p-[5px] md:p-[10px]">
              <MdSearch className="text-2xl mr-[10px] text-[#A3A3A6] font-bold" />
              <input
                className="flex-1 border border-none focus:outline-0"
                type="text"
                placeholder="Search products, brands and categories"
              />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
