import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/UserSlice";
import cartItemsReducer from "../Features/CartItemSlice";
import productsReducer from "../Features/ProductSlice";
import CustomerDetailsReducer from "../Features/CustomerDetails";

const store = configureStore({
  reducer: {
    user: userReducer,
    cartItems: cartItemsReducer,
    products: productsReducer,
    details: CustomerDetailsReducer,
  },
});

export default store;
