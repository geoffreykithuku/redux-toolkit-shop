import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./features/shop/shopSlice";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";
export const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
    modal: modalReducer,
  },
});
