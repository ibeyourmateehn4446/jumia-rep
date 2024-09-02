import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineUser, HiOutlineGift } from "react-icons/hi";
import {
  MdOutlineFavoriteBorder,
  FaRegEnvelope,
  MdCreditCard,
} from "react-icons/all";

import { clx } from "../utils/clx";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { nameFormater } from "../utils/nameFormatter";
import { clearCart } from "../Store/Features/CartItemSlice";

const wrapperClass = clx(
  "absolute top-[70px] right-56 bg-white w-[220px] rounded-md border border-stone-200 z-10"
);
const buttonClass = clx(
  "w-full bg-[#FF9900] rounded-md text-white px-3 py-2 hover:bg-[#E07E1B] shadow-md"
);
const pclasses = clx(
  "group flex items-center px-3 py-[6px] gap-3 hover:bg-[#f1f1f2] transition-all duration-[300]  cursor-pointer"
);
const spanClass = clx("text-[grey] text-sm group-hover:text-[black]");

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //get the logged in user
  const user = useSelector((state) => state.user.user);

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

  return (
    <div className={wrapperClass}>
      {user ? (
        <div className="py-4 mx-4">
          <button onClick={signOutHandler} className={buttonClass}>
            LOG OUT
          </button>
        </div>
      ) : (
        <Link to="signin">
          <div className="py-4 mx-4">
            <button className={buttonClass}>SIGN IN</button>
          </div>
        </Link>
      )}

      <div className="border-t-2 border-[#f1f1f2] mt-2 ">
        <p className={pclasses}>
          <HiOutlineUser className="text-2xl" />
          <span className={spanClass}>My Account</span>
        </p>

        <p className={pclasses}>
          <HiOutlineGift className="text-2xl" />
          <span className={spanClass}>Orders</span>
        </p>

        {user && (
          <p className={pclasses}>
            <FaRegEnvelope className="text-2xl" />
            <span className={spanClass}>Inbox</span>
          </p>
        )}

        <p className={pclasses}>
          <MdOutlineFavoriteBorder className="text-2xl" />
          <span className={spanClass}>Saved Items</span>
        </p>

        {user && (
          <p className={pclasses}>
            <MdCreditCard className="text-2xl" />
            <span className={spanClass}>Vouchers</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Account;
