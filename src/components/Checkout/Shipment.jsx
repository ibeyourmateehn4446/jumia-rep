import { useSelector } from "react-redux";
import ShipmentProduct from "./ShipmentProduct";
import { formatMonth } from "../utils/formartTime";

const Shipment = ({ onDelivery }) => {
  const delivery = onDelivery;

  const date = new Date();
  let newDate = date.getDate() + 3;

  if (newDate > 29) {
    newDate = date.getDate();
  }

  const month = formatMonth();

  const cartItems = useSelector((state) => state.cartItems.cartItems);
  return (
    <div className="px-4 my-3">
      <p className="text-xs font-medium">Shipments {cartItems.length}</p>

      <div className="border rounded-sm my-2">
        <div className="px-4 py-2 border-b">
          <p className="text-xs md:text-sm font-medium">{delivery}</p>
          <p className="text-[10px] font-light my-1">
            Delivery Scheduled on{" "}
            <span className="font-semibold">{newDate} {month}</span>
          </p>
        </div>

        <div className="pb-3">
          {cartItems?.map((item) => {
            return <ShipmentProduct key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shipment;
