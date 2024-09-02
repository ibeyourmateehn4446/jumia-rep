import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaCheckCircle, FaTruck } from "react-icons/all";
import { formatMonth } from "../utils/formartTime";
import Shipment from "./Shipment";

const Delivery = ({ onDeliveryAttempt }) => {
  const [confirm, setConfirm] = useState(false);
  const [delivery, setDelivery] = useState("");

  const date = new Date();
  let newDate = date.getDate() + 3;

  if (newDate > 29) {
    newDate = date.getDate();
  }

  const month = formatMonth();

  const confirmationHandle = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setConfirm(true);
    onDeliveryAttempt();
  };

  return (
    <div>
      <div className="bg-white mt-4 pb-4">
        <div className="flex items-center px-4 py-3 gap-2 border-b">
          <FaCheckCircle
            className={`${confirm ? "text-[green]" : "text-[#7A7A7F]"}`}
          />
          <p className="text-[13px] md:text-sm font-medium">2. DELIVERY</p>
        </div>

        {/* DELIVERY TYPE SECTION */}

        <div className="px-4 py-3">
          <>
            {/* SHOWS THE PICKUP SECTION */}
            {delivery !== "Door Delivery" && (
              <div className="flex flex-col pb-3 border-b">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-2">
                    <input
                      type="radio"
                      name="delivery"
                      value="Pick-up Station"
                      onChange={(e) => setDelivery(e.target.value)}
                    />
                    <div className="-mt-1">
                      <p className="text-xs md:text-sm font-medium">
                        Pick-up Station
                      </p>
                      <p className="text-[10px] font-light mt-1 mb-2">
                        Delivery Scheduled on{" "}
                        <span className="font-semibold">
                          {newDate} {month}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() => setDelivery("")}
                    className="-mt-1 text-[10px] md:text-xs hover:underline cursor-pointer text-[#294B97] flex gap-1 items-center"
                  >
                    <p>Change</p>
                    <FaAngleRight />
                  </div>
                </div>

                <div className="border rounded-sm">
                  <p className="text-xs font-medium px-3 py-2 border-b">
                    Pickup Station
                  </p>
                  <div className="text-[11px] px-3 py-2">
                    <p>PDC Abeokuta Adigbe Station</p>
                    <p className="text-[#7A7A7F]">
                      4b, Car Wash, Opako Adigbe, Abeokuta, Beside Saquad
                      Filling Station | Ogun - ABEOKUTA-ADIGBE
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>

          {
            <>
              {/* SHOWS THE DELIVERY SECTION */}
              {delivery !== "Pick-up Station" && (
                <div className="flex justify-between items-center">
                  <div className="mt-4 flex items-start gap-2">
                    <input
                      type="radio"
                      name="delivery"
                      value="Door Delivery"
                      onChange={(e) => setDelivery(e.target.value)}
                    />
                    <div className="-mt-1">
                      <p className="text-xs md:text-sm font-medium">
                        Door Delivery
                      </p>
                      <p className="text-[10px] font-light my-1">
                        Delivery Scheduled on{" "}
                        <span className="font-semibold">{newDate} June</span>
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => setDelivery("")}
                    className="-mt-1 text-[10px] md:text-xs hover:underline cursor-pointer text-[#294B97] flex gap-1 items-center"
                  >
                    <p>Change</p>
                    <FaAngleRight />
                  </div>
                </div>
              )}
            </>
          }
        </div>

        {/* SHIPMENT SECTION */}
        <Shipment onDelivery={delivery} />

        <div className="px-4 flex items-center justify-center">
          {confirm ? (
            <Link to="/cart" className="justify-center">
              <div className="text-center">
                <span className="uppercase text-center font-semibold text-sm text-[#ff9900] p-2 hover:bg-[#FAC58E] rounded-sm w-auto">
                  modify cart
                </span>
              </div>
            </Link>
          ) : (
            <button
              type="sumit"
              className="ml-auto bg-[#ff9900] text-xs md:text-sm text-white font-semibold p-3 md:p-4 rounded-md hover:bg-[#E07E1B]"
              onClick={confirmationHandle}
            >
              CONFIRM DELIVERY DETAILS
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Delivery;
