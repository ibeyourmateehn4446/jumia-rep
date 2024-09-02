import { ImFacebook, ImYoutube, ImInstagram, ImTwitter } from "react-icons/all";

const SecondSection = () => {
  return (
    <div className="lg:pb-5 px-[55px] bg-[#535357] text-white">
      <div className="hidden pt-5 lg:flex flex-col item md:flex-row justify-between">
        <div className="flex flex-col">
          <h3 className="text-xs font-bold mb-3">NEED HELP?</h3>
          <div className="flex flex-col">
            <h5 className="text-[11px] hover:underline mb-1">Help Center</h5>
            <h5 className="text-[11px] hover:underline mb-1">Contact Us</h5>
            <h5 className="text-[11px] hover:underline mb-1">
              How to shop on Jumia?
            </h5>
            <h5 className="text-[11px] hover:underline mb-1">
              Delivery options and timelines
            </h5>
            <h5 className="text-[11px] hover:underline mb-1">
              How to return a product on Jumia?
            </h5>
            <h5 className="text-[11px] hover:underline mb-1">
              Corporate and bulk purchases
            </h5>
            <h5 className="text-[11px] hover:underline mb-1">Help Center</h5>
            <h5 className="text-[11px] hover:underline mb-1">
              Report a Product
            </h5>
            <h5 className="text-[11px] hover:underline mb-1">
              Ship your package anywhere in Nigeria
            </h5>
            <h5 className="text-[11px] hover:underline mb-1">
              Dispute Resolution Policy
            </h5>
            <h5 className="text-[11px] hover:underline mb-1">
              Returns and Refunds Policy
            </h5>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xs font-bold mb-3">ABOUT JUMIA</h3>
          <div className="flex flex-col">
            <h5 className="text-[11px] hover:underline mb-1">About us</h5>
            <h5 className="text-[11px] hover:underline mb-1">Jumia careers</h5>
            <h5 className="text-[11px] hover:underline mb-1">Jumia Express</h5>
            <h5 className="text-[11px] hover:underline mb-1">
              Terms and Conditions
            </h5>
            <h5 className="text-[11px] hover:underline mb-1">Privacy Notice</h5>
            <h5 className="text-[11px] hover:underline mb-1">Cookie Notice</h5>
            <h5 className="text-[11px] hover:underline mb-1">Jumia Global</h5>
            <h5 className="text-[11px] hover:underline mb-1">
              Official Stores
            </h5>
            <h5 className="text-[11px] hover:underline mb-1">Flash Sales</h5>
            <h5 className="text-[11px] hover:underline mb-1">
              Jumia Anniversary 2023
            </h5>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xs font-bold mb-3">MAKE MONEY WITH JUMIA</h3>
          <div className="flex flex-col">
            <h5 className="text-[11px] hover:underline mb-1">Sell on Jumia</h5>
            <h5 className="text-[11px] hover:underline mb-1">
              Become a Sales Consultant
            </h5>
            <h5 className="text-[11px] hover:underline mb-1">
              Become a Logistics Service Partner
            </h5>
            <h5 className="text-[11px] hover:underline mb-1">
              Join the Jumia DA Academy
            </h5>
            <h5 className="text-[11px] hover:underline mb-1">
              Join the Jumia KOL Program
            </h5>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xs font-bold mb-3">JUMIA INTERNATIONAL</h3>
          <div className="flex gap-6">
            <div className="flex flex-col">
              <h5 className="text-[11px] hover:underline mb-1">Algeria</h5>
              <h5 className="text-[11px] hover:underline mb-1">Egypt</h5>
              <h5 className="text-[11px] hover:underline mb-1">Ghana</h5>
              <h5 className="text-[11px] hover:underline mb-1">Ivory Coast</h5>
              <h5 className="text-[11px] hover:underline mb-1">Kenya</h5>
            </div>

            <div className="flex flex-col">
              <h5 className="text-[11px] hover:underline mb-1">Morocco</h5>
              <h5 className="text-[11px] hover:underline mb-1">Senegal</h5>
              <h5 className="text-[11px] hover:underline mb-1">Tunisia</h5>
              <h5 className="text-[11px] hover:underline mb-1">Uganda</h5>
              <h5 className="text-[11px] hover:underline mb-1">Zando</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex my-6">
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold">JOIN US ON</h3>
          <div className="flex gap-6 mt-5">
            <ImFacebook   className="text-xl hover:text-[#ff9900]"/>
            <ImYoutube    className="text-xl hover:text-[#ff9900]"/>
            <ImInstagram  className="text-xl hover:text-[#ff9900]"/>
            <ImTwitter    className="text-xl hover:text-[#ff9900]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
