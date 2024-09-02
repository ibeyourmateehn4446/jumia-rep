import { MdOutlineDelete, FaPlus, FaMinus } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import { setCartTotal } from "../Store/Features/CartItemSlice";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CartSummary = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const total = useSelector((state) => state.cartItems.cartTotal);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const total = cartItems.reduce((prev, curr) => {
      return prev + curr.quantity * curr.price;
    }, 0);

    dispatch(setCartTotal(total));
  }, [cartItems]);

  return (
    <div className="flex flex-col gap-2">
      <div className=" bg-white rounded-md flex flex-col shadow-xl">
        <div className="p-2 border">
          <h3 className="text-sm uppercase font-medium">Cart Summary</h3>
        </div>

        <div className="px-2 py-3 flex border-b gap-4">
          <div className="flex gap-5">
            <div className="flex flex-col gap-5">
              <h5 className="text-sm font-medium text-[#313133]">Subtotal</h5>
              <p className="text-xs text-[#7D7D82]">
                Delivery fee not included
              </p>
            </div>
            <h4 className="md:text-xl font-medium">₦ {total}</h4>
          </div>
        </div>

        <Link to={user ? "/checkout" : "/signin"}>
          <motion.div whileTap={{ scale: 0.9 }} className="px-2 py-3">
            <button className="bg-[#FF9900] rounded-md text-sm font-medium text-white  hover:bg-[#E07E1B] shadow-md flex items-center justify-center p-3 w-full md:w-auto lg:w-full">
              CHECKOUT (₦ {total})
            </button>
          </motion.div>
        </Link>
      </div>

      <div className="bg-white rounded-md flex flex-col shadow-xl">
        <div className="p-2 lg:w-[300px] flex flex-col gap-2">
          <h3 className="text-sm font-medium">Returns are easy</h3>
          <div className="text-[11px]">
            Free return within 15 days for Official Store items and 7 days for
            other eligible items{" "}
            <span className="hover:underline cursor-pointer text-[#264996]">
              See more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
