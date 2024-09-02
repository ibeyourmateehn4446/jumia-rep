import { useState } from "react";
import { FaCheckCircle, FaAngleRight, FaPencilAlt } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";

const AddressFilled = ({ edit }) => {
  const [change, setChange] = useState(false);
  const details = useSelector((state) => state.details.customerDetails);

  const editHandler = () => {
    edit();
    // console.log(edit)
  };

  // const allDetails = [details];
  // console.log([...allDetails]);
  return (
    <div>
      {change ? (
        <div className="bg-white flex flex-col rounded-sm">
          <div className="flex items-center gap-2 px-4 py-3 border-b">
            <FaCheckCircle className="text-[#7A7A7F]" />
            <p className="text-[13px] font-medium">1. DELIVERY ADDRESS</p>
          </div>

          <div className="p-6 ">
            <p className="text-xs text-[#535357] font-medium my-2">
              ADDRESS BOOK (1)
            </p>
            <div className="border p-4 rounded-md flex items-start justify-between">
              <div className="flex items-start justify-start gap-2">
                <input
                  type="radio"
                  id="details"
                  className="text-2xl text-[#ff9900]"
                  checked
                />
                <label htmlFor="details" className="flex flex-col gap-1 -mt-1">
                  <p className="text-sm font-medium">
                    {details.firstName} {details.lastName}
                  </p>
                  <p className="text-[10px]">
                    {details.address} | {details.LGA} - {details.state}
                  </p>
                  <p className="text-[10px]">
                    {details.number} / {details.addNumber}
                  </p>
                  <p className="bg-[#F1F1F2] text-xs p-1 w-max">
                    DEFAULT ADDRESS
                  </p>
                </label>
              </div>

              <div
                onClick={editHandler}
                className="p-2 rounded-md flex items-center gap-1 text-[#ff9900] text-xs font-medium hover:cursor-pointer hover:bg-[#FBDAB8]"
              >
                <p>EDIT</p>
                <FaPencilAlt />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white flex flex-col rounded-sm">
          <div className="flex items-center justify-between px-4 py-3 gap-2 border-b">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[green]" />
              <p className="text-[13px] font-medium">1. DELIVERY ADDRESS</p>
            </div>
            <div
              onClick={() => setChange(true)}
              className="text-[13px] flex gap-1 items-center text-[#264996] hover:underline cursor-pointer"
            >
              <p>Change</p>
              <FaAngleRight className="text-base" />
            </div>
          </div>

          <div className="p-6 ">
            <p className="text-sm">
              {details.firstName} {details.lastName}
            </p>
            <p className="text-[10px] mt-2 text-[#7A7A7F]">
              {details.address} | {details.state} - {details.LGA} |{" "}
              {details.number}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressFilled;
