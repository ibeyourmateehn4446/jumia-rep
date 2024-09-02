import { createSlice } from "@reduxjs/toolkit";
import { fetchDetails } from "../../utils/fetchCustomerDetails";

const customerDetails = fetchDetails();

const initialState = {
  customerDetails,
};

const CustomerDetailsSlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      state.customerDetails = action.payload;
      localStorage.setItem(
        "fullDetails",
        JSON.stringify(state.customerDetails)
      );
    },
  },
});

export default CustomerDetailsSlice.reducer;

export const { setCustomer } = CustomerDetailsSlice.actions;
