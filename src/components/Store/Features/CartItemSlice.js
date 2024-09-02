import { createSlice } from "@reduxjs/toolkit";
import { fetchItems } from "../../utils/fetchCartItems";

const cartItems = fetchItems();

const initialState = {
  cartItems,
  cartTotal: 0,
  cartCount: 0,
  addNotification: false,
  removeNotification: false,
  itemToRemove: null,
  saveRemove: false,
  item: null,
};

const cartItemSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      // check if the item is already in the cart
      const existingItem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });

      // if the item is in the cart
      if (existingItem) {
        const newState = state.cartItems.map((item) => {
          //check if the item in the cart is the same as the incoming item
          //if yes increase the quantity
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : //if no, leave the item alone
              item;
        });

        state.cartItems = newState;
      } else {
        //if there is no exisitng item
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    reduceItemQuantity: (state, action) => {
      // check if the item is already in the cart
      const exisitingItem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });

      // if the quantity of the item in the cart is one
      if (exisitingItem.quantity === 1) {
        //leave the cart as is it
        const newCartItems = state.cartItems;
        state.cartItems = newCartItems;
      } else {
        //if the quantity of the item in the cart is more than one
        const newCartItems = state.cartItems.map((item) => {
          //check for the corresponding item in the cart
          return item.id === action.payload.id
            ? //if item is the same with incoming item, reduce the quantity
              { ...item, quantity: item.quantity - 1 }
            : //if not leave the item alone
              item;
        });

        state.cartItems = newCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeItemFromCart: (state, action) => {
      //return items that the id does not equal to the item to remove
      const newCartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload.id;
      });

      state.cartItems = newCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    setCartCount: (state, action) => {
      state.cartCount = action.payload;
    },

    setCartTotal: (state, action) => {
      state.cartTotal = action.payload;
    },

    setNotification: (state, action) => {
      state.addNotification = action.payload;
    },

    removeNotification: (state, action) => {
      state.removeNotification = action.payload;
    },

    setItemToRemove: (state, action) => {
      state.itemToRemove = action.payload;
    },

    setSaveRemove: (state, action) => {
      state.saveRemove = action.payload;
    },

    setItem: (state, action) => {
      state.item = action.payload;
    },
  },
});

export default cartItemSlice.reducer;

export const {
  addItemToCart,
  reduceItemQuantity,
  removeItemFromCart,
  clearCart,
  setCartCount,
  setCartTotal,
  setNotification,
  removeNotification,
  setItemToRemove,
  setSaveRemove,
  setItem,
} = cartItemSlice.actions;
