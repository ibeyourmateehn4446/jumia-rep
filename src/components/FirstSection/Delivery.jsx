import { Link } from "react-router-dom";

const Delivery = () => {
  return (
    <div className="w-[220px] h-max  rounded-md hidden lg:flex flex-col gap-3">
      <div className="h-[50%] w-full bg-slate-50 flex flex-col gap-3 xl:gap-[22px] rounded-md p-4">
        {/* <img
          className="w-full h-full object-contain rounded-md"
          src="/images/delivery.png"
          alt=""
        /> */}

        <Link to="/">
          <div className="flex items-center gap-2">
            <img className="w-7 xl:w-9" src="/images/call.png" alt="" />
            <div className="flex flex-col">
              <p className="text-xs lx:text-sm font-medium">CALL TO ORDER</p>
              <p className="text-xs font-thin">0700-600-0000</p>
            </div>
          </div>
        </Link>

        <Link to="/">
          <div className="flex items-center gap-2">
            <img className="w-7 xl:w-9" src="/images/sell.png" alt="" />

            <p className="text-xs lx:text-sm font-medium">Sell on Jumia</p>
          </div>
        </Link>

        <Link to="/">
          <div className="flex items-center gap-2">
            <img className="w-7 xl:w-9" src="/images/deal.png" alt="" />

            <p className="text-xs lx:text-sm font-medium">Best Deals</p>
          </div>
        </Link>
      </div>

      <div className="h-[50%] w-full">
        <img
          className="w-full h-full object-contain rounded-md"
          src="/images/JForce.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Delivery;
