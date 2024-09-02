import React from "react";
import { MdCheck } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Alert = () => {
  const addNotification = useSelector(
    (state) => state.cartItems.addNotification
  );
  const removeNotification = useSelector(
    (state) => state.cartItems.removeNotification
  );

  return (
    <>
      {addNotification && (
        <div className="bg-[#6dbc28] w-full text-sm font-medium flex gap-2 items-center justify-center py-[10px] text-white fixed top-0 left-0 right-0 z-40">
          <MdCheck className="text-base font-medium" />
          <p>Product added successfully</p>
        </div>
      )}

      {removeNotification && (
        <div className="bg-[#6dbc28] w-full text-sm font-medium flex gap-2 items-center justify-center py-[10px] text-white fixed top-0 left-0 right-0 z-40">
          <MdCheck className="text-base font-medium" />
          <p>Product removed successfully</p>
        </div>
      )}
    </>
  );
};

export default Alert;
