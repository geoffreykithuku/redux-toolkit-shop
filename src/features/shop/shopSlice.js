import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/data.json";

const initialState = {
  products: data,
  isLoading: false,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { getProducts } = shopSlice.actions;

export default shopSlice.reducer;
