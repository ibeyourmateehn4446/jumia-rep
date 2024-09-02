import React from "react";

const Promotion = () => {
  return (
    <div>
      <p className="uppercase text-sm font-medium pt-2 pb-4">Promotions</p>
      <div className="flex gap-2 items-center">
        <img className="h-[20px]" src="/images/jumpay.png" alt="" />
        <p className="text-[#2671C2] hover:underline text-[11px]">
          Need extra money? Loan up to N500,000 on JumiaPay Andriod app.
        </p>
      </div>

      <div className="flex gap-2 items-center my-2">
        <img className="h-[20px]" src="/images/jumstar.png" alt="" />
        <p className="text-[#2671C2] hover:underline text-[11px]">
          Enjoy cheaper shipping fees when you select a PickUp Station at
          checkout.
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <img className="h-[20px]" src="/images/jumpay.png" alt="" />
        <p className="text-[#2671C2] hover:underline text-[11px]">
          Transfer up to N200,000 to any bank in Nigeria for FREE!
        </p>
      </div>
    </div>
  );
};

export default Promotion;
