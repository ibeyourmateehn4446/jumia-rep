import { useState } from "react";
import NaijaStates from "naija-state-local-government";
import { CiDeliveryTruck, FaPeopleCarry, GiReturnArrow } from "react-icons/all";

const Delivery = () => {
  const [stateValue, setStateValue] = useState("Abia");

  const states = NaijaStates.states();

  const statesLGA = NaijaStates.lgas(stateValue);

  return (
    <div className="bg-white rounded-md flex-1">
      <div className="border-b-2 border-[#f1f1f2]">
        <p className="text-sm font-medium p-2">DELIVERY & RETURNS</p>
      </div>

      <div className="border-b-2 border-[#f1f1f2]">
        <div className="p-2">
          <img className="w-[100px]" src="/images/jumexpress.png" alt="" />
          <p className="text-[9px] font-medium ">
            Free delivery on thousands of products in Lagos, Ibadan & Abuja{" "}
            <span className="text-[11px] text-[#2671C2] cursor-pointer hover:underline">
              Details
            </span>
          </p>
        </div>
      </div>

      <div className="p-2">
        <p className="mb-2 text-sm font-medium">Choose your location</p>

        <select
          onChange={(e) => setStateValue(e.target.value)}
          className="focus:border-[#FF9900] mb-3 focus:outline-0 border border-black p-2 rounded-md w-full"
        >
          {states.map((state) => {
            return (
              <option key={state} value={state}>
                {state}
              </option>
            );
          })}
        </select>

        <select className="focus:border-[#FF9900] focus:outline-0 border border-black p-2 rounded-md w-full">
          {statesLGA.lgas.map((lga) => {
            return (
              <option key={lga} value={lga}>
                {lga}
              </option>
            );
          })}
        </select>
      </div>

      <div className="flex flex-col p-2 border-b-2 border-[#f1f1f2]">
        <div className="flex gap-2 mb-1">
          <div className="border border-[#D4D4D6] h-max w-max p-1 flex items-center rounded-md justify-center">
            <CiDeliveryTruck className="text-[#434343] text-2xl font-normal" />
          </div>
          <div className="relative">
            <p className="text-sm font-medium">Door Delivery</p>
            <p className="text-[10px] my-1">
              Delivery <span className="font-medium">₦ 520</span>
            </p>
            <p className="text-[10px]">
              Delivery by <span className="font-medium">05 June</span> when you
              order within next
              <span className="font-medium"> 14hrs 56mins</span>
            </p>
            <p className="absolute top-0 right-0 lg:relative text-[9px] text-[#2671C2] cursor-pointer hover:underline">
              Details
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="border border-[#D4D4D6] h-max w-max p-1 flex items-center rounded-md justify-center">
            <FaPeopleCarry className="text-[#434343] text-2xl font-normal" />
          </div>
          <div className="relative">
            <p className="text-sm font-medium">Pickup Station</p>
            <p className="text-[10px] my-1">
              Delivery <span className="font-medium">₦ 210</span>
            </p>
            <p className="text-[10px]">
              Delivery by <span className="font-medium">05 June</span> when you
              order within next{" "}
              <span className="font-medium">14hrs 56mins</span>
            </p>
            <p className="absolute top-0 right-0 lg:relative text-[9px] text-[#2671C2] cursor-pointer hover:underline">
              Details
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 p-2">
        <div className="border border-[#D4D4D6] h-max w-max p-1 flex items-center rounded-md justify-center">
          <GiReturnArrow className="text-[#434343] text-2xl font-normal" />
        </div>
        <div>
          <p className="text-sm font-medium">Return Policy</p>
          <p className="text-[10px]">
            Free return within 15 days for Official Store items and 7 days for
            other eligible items.{" "}
            <span className="text-[9px] text-[#2671C2] cursor-pointer hover:underline">
              See more
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
