import { useState } from "react";
import { FaCheckCircle, MdAccountBalanceWallet } from "react-icons/all";

const Payment = ({ deliveryAttempt, onPayment }) => {
  const [confirm, setConfirm] = useState(false);

  const paymentHandler = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setConfirm(true);
    onPayment();
  };

  return (
    <div>
      <div className={`bg-white mt-4 ${deliveryAttempt ? "pb-3" : ""}`}>
        <div className="flex items-center px-4 py-3 gap-2 border-b">
          <FaCheckCircle
            className={`${confirm ? "text-[green]" : "text-[#7A7A7F]"}`}
          />
          <p className="text-[13px] md:text-sm font-medium">
            3. PAYMENT METHOD
          </p>
        </div>

        <>
          {deliveryAttempt && (
            <>
              <p className="px-4 text-lg my-3">Cards</p>

              <div className="px-4 flex items-start gap-2">
                <input type="radio" value="cards" />
                <div className="flex flex-col -mt-1">
                  <p className="text-sm font-medium">
                    Pay with Cards, Bank Transfer or USSD{" "}
                  </p>
                  <p className="text-[10px]">
                    You will be redirected to our secure checkout page
                  </p>
                </div>
              </div>

              <div className="px-4 my-3">
                <div className="border rounded-md">
                  <div className="border-b p-2">
                    <p className="text-sm bg-[#F1F1F2] p-2 rounded-sm w-1/2 text-[#264996] font-semibold flex items-center gap-2">
                      Jumia Pay Balance{" "}
                      <span>
                        <MdAccountBalanceWallet className="text-2xl" />
                      </span>{" "}
                      ₦0.00
                    </p>
                  </div>
                  <div className="p-2 flex flex-col gap-3 mb-4">
                    <p className="text-[10px]">
                      - Ensure your payment information is up to date and that
                      you have the necessary funds.
                    </p>

                    <p className="text-[10px]">
                      - For bank transfer, kindly ensure you transfer the exact
                      amount displayed.
                    </p>

                    <p className="text-[10px] text-[#264996] cursor-pointer">
                      Details...
                    </p>
                  </div>

                  <div className="p-2 border-t flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-[#7A7A7F]">Powered By</p>
                      <img src="/images/pay.png" alt="pay" className="w-20" />
                    </div>

                    <div className="flex items-center gap-2">
                      <p className="text-xs text-[#7A7A7F] font-medium">
                        We accept:
                      </p>
                      <img
                        src="/images/gateway.png"
                        alt="pay"
                        className="w-20"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 flex">
                <button
                  type="sumit"
                  className="ml-auto bg-[#ff9900] text-xs md:text-sm text-white font-semibold p-3 md:p-4 rounded-md hover:bg-[#E07E1B]"
                  onClick={paymentHandler}
                >
                  CONFIRM PAYMENT METHOD
                </button>
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Payment;
