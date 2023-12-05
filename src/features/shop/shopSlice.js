import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk("shop/getProducts", async () => {
  const response = await axios.get(url);
  return response.data;
});

const initialState = {
  products: [],
  isLoading: false,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default shopSlice.reducer;
