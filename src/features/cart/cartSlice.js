import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],

  count: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.count = 0;
      state.total = 0;
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const item = state.cartItems.find((i) => i.id === product.id);
      if (!item) {
        state.cartItems.push({
          ...product,
          quantity: 1,
        });
      } else {
        item.quantity++;
      }
      state.count++;
      state.total += product.price;
    },
    removeFromCart: (state, action) => {
      const product = action.payload;

      state.cartItems = state.cartItems.filter((i) => i.id !== product.id);

      state.count--;
      state.total -= product.price;
    },
    incrementQuantity: (state, action) => {
      const product = action.payload;
      const item = state.cartItems.find((i) => i.id === product.id);
      item.quantity++;
      state.count++;
      state.total += product.price;
    },
    decrementQuantity: (state, action) => {
      const product = action.payload;
      const item = state.cartItems.find((i) => i.id === product.id);
      if (item.quantity > 1) {
        item.quantity--;
        state.count--;
        state.total -= product.price;
      } else {
        state.cartItems = state.cartItems.filter((i) => i.id !== product.id);
        state.count--;
        state.total -= product.price;
      }
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
