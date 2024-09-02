import { MdOutlineDelete, FaPlus, FaMinus } from "react-icons/all";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  reduceItemQuantity,
  removeItemFromCart,
  setNotification,
  removeNotification,
  setSaveRemove,
  setItem,
} from "../Store/Features/CartItemSlice";

const Item = ({ image, label, percent, price, quantity, item }) => {
  const realPrice = Math.ceil(price / ((100 - percent) / 100));

  const dispatch = useDispatch();

  //logic handling the popup of saveRemove component

  const showSaveRemove = () => {
    dispatch(setSaveRemove(true));
    dispatch(setItem(item));
  };

  //logic handling reduction of product quantity
  const reduceQuantityHandler = () => {
    if (quantity > 1) {
      dispatch(reduceItemQuantity(item));
      dispatch(removeNotification(true));

      const timer = setTimeout(() => {
        dispatch(removeNotification(false));
        clearTimeout(timer);
      }, 2000);
    } else {
      return;
    }
  };

  //logic handling the increment of product quantity
  const increaseQuantityHandler = () => {
    dispatch(addItemToCart(item));

    dispatch(setNotification(true));

    const timer = setTimeout(() => {
      dispatch(setNotification(false));
      clearTimeout(timer);
    }, 2000);
  };

  return (
    <>
      <div className="p-4 flex gap-4 border-t">
        <div className="h-[80px] w-[80px]">
          <img
            src={image}
            alt="product"
            className="object-contain rounded-md"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-2 justify-between flex-1">
          <div>
            <h4 className="text-xs md:text-sm lg:text-base text-[#313133]">
              {label}
            </h4>
            <p className="text-xs md:text-sm text-[#313133] my-1">
              <span className="text-xs md:text-base text-[#7D7D82]">
                Seller:
              </span>
              <span> Jumia</span>
            </p>
            <p className="text-xs text-[#AF7D15] md:my-1">Few units left</p>
            <img
              className="w-[100px] hidden md:block"
              src="/images/jumexpress.png"
              alt=""
            />
          </div>

          <div className="flex flex-col md:items-end w-[150px]">
            <h4 className="md:text-xl font-medium">₦ {price}</h4>
            <div className="flex gap-2">
              <h5 className="text-sm md:text-base text-[#6A6A6E] line-through">
                ₦ {realPrice}
              </h5>
              <p className="text-xs w-max text-[#FF9900] bg-[#FEF3E9] p-1">
                -{percent}%
              </p>
            </div>

            <img
              className="w-[100px] mt-1 md:hidden"
              src="/images/jumexpress.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 flex justify-between items-center">
        <motion.div
          whileTap={{ scale: 0.7 }}
          onClick={showSaveRemove}
          className="flex items-center gap-2 text-[#ff9900] cursor-pointer"
        >
          <MdOutlineDelete className="text-2xl" />
          <p className="text-sm font-medium">REMOVE</p>
        </motion.div>

        <div className="flex items-center justify-center gap-5">
          <motion.div
            whileTap={{ scale: 0.7 }}
            onClick={reduceQuantityHandler}
            className={`${
              quantity > 1 ? "bg-[#ff9900]" : "bg-[#FAC58E]"
            } text-white h-[30px] w-[30px] flex items-center justify-center rounded-sm cursor-pointer`}
          >
            <FaMinus />
          </motion.div>

          <p className="text-medium">{quantity}</p>

          <motion.div
            whileTap={{ scale: 0.7 }}
            className={`bg-[#ff9900] text-white h-[30px] w-[30px] flex items-center justify-center rounded-sm cursor-pointer`}
            onClick={increaseQuantityHandler}
          >
            <FaPlus />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Item;
