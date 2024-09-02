import CartSummary from "./CartSummary";
import Item from "./Item";
import { useSelector } from "react-redux";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const count = useSelector((state) => state.cartItems.cartCount);

  return (
    <div className="my-4 flex lg:flex-row flex-col gap-3">
      <div className=" bg-white rounded-md flex flex-col shadow-xl flex-1 h-max">
        <div className="px-4 py-3 border">
          <h3 className="text-lg font-medium">Cart ({count})</h3>
        </div>

        {cartItems &&
          cartItems.map((item) => {
            return (
              <Item
                key={item.id}
                image={item.imageURL}
                label={item.label}
                percent={item.percent}
                price={item.price}
                quantity={item.quantity}
                item={item}
              />
            );
          })}
      </div>
      <CartSummary />
    </div>
  );
};

export default CartItem;
