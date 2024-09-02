import { FaEnvelope, FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";

const FirstSection = () => {
  return (
    <div className="hidden py-5 p-[20px] lg:px-[55px] bg-[#313133] text-white lg:flex flex-col md:flex-row justify-between">
      <div className="h-[50px] w-[130px]">
        <img
          className="h-full object-contain"
          src="/images/footerLogo.png"
          alt=""
        />
      </div>

      <div>
        <div className="flex flex-col">
          <h4 className="text-sm">NEW TO JUMIA?</h4>
          <p className="text-[11px] my-2">
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
        </div>

        <form>
          <div className="flex items-center gap-2">
            <div className="p-3 bg-white flex gap-3 items-center rounded-sm focus:border-[#ff9900]">
              <FaEnvelope className="text-[#A3A3A6] text-2xl" />
              <input
                type="email"
                placeholder="Enter E-mail Address"
                className="focus:outline-0 w-full text-black"
              />
            </div>
            <div className="flex gap-2">
              <button className="my-2 border text-sm px-4 py-3 rounded-sm hover:text-[#ff9900] hover:border-[#ff9900]">
                MALE
              </button>

              <button className="my-2 border text-sm px-4 py-3 rounded-sm hover:text-[#ff9900] hover:border-[#ff9900]">
                FEMALE
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-3">
          <img className="w-12 h-12" src="/images/footerstar.png" alt="" />
          <div className="flex flex-col gap-2">
            <h4 className="text-[13px] font-semibold">
              DOWNLOAD JUMIA FREE APP
            </h4>
            <p className="text-xs">Get access to exclusive offers!</p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="border px-2 py-1 rounded-md flex gap-1 items-center w-max cursor-pointer hover:border-[#ff9900] hover:text-[#ff9900]">
            <AiFillApple className="text-2xl" />
            <div className="flex flex-col gap-0">
              <p className="text-[7px]">Download on the</p>
              <p className="text-md">App Store</p>
            </div>
          </div>

          <div className="border px-2 py-1 rounded-md flex gap-1 items-center w-max cursor-pointer hover:border-[#ff9900] hover:text-[#ff9900]">
            <FaGooglePlay className="text-2xl" />
            <div className="flex flex-col gap-0">
              <p className="text-[7px]">Get it on</p>
              <p className="text-md">Google Play</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
