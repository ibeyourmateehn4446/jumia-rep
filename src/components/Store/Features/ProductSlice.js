import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default productSlice.reducer;

export const { setProduct } = productSlice.actions;
