import { MdOutlineDelete, AiOutlineHeart, FaTimes } from "react-icons/all";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  removeNotification,
  removeItemFromCart,
  setSaveRemove,
} from "../Store/Features/CartItemSlice";
import Modal from "../Modal/Modal";

const SaveRemove = () => {
  const dispatch = useDispatch();
  const saveRemove = useSelector((state) => state.cartItems.saveRemove);
  const item = useSelector((state) => state.cartItems.item);

  //logic handling removal of items
  const removeItemHandler = () => {
    dispatch(removeItemFromCart(item));
    dispatch(removeNotification(true));
    dispatch(setSaveRemove(false));

    const timer = setTimeout(() => {
      dispatch(removeNotification(false));
      clearTimeout(timer);
    }, 2000);
  };
  return (
    <>
      {saveRemove && (
        <Modal>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center">
              <h4 className="text-sm md:text-lg font-semibold">
                Remove from cart
              </h4>
              <FaTimes onClick={() => dispatch(setSaveRemove(false))} className="text-xl cursor-pointer"/>
            </div>

            <p className="text-[10px] md:text-sm">
              Do you really want to remove this item from cart?
            </p>

            <div className="flex gap-2">
              <motion.div
                whileTap={{ scale: 0.7 }}
                //   onClick={removeItemHandler}
                className="flex items-center border-2 border-[#ff9900] hover:bg-[#F2E8DE] text-[#ff9900] cursor-pointer py-3 px-4 rounded-md w-1/2"
              >
                <AiOutlineHeart className="text-lg md:text-2xl" />
                <p className="text-sm font-medium mx-auto">SAVE</p>
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.7 }}
                onClick={removeItemHandler}
                className="flex items-center text-white bg-[#ff9900] cursor-pointer py-3 px-4 rounded-md w-1/2"
              >
                <MdOutlineDelete className="text-lg md:text-2xl" />
                <p className="text-sm font-medium mx-auto">REMOVE</p>
              </motion.div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SaveRemove;
