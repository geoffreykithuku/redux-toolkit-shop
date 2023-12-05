import React from "react";
import data from "./data.json";
import CartItem from "./CartItem";

import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
const Cart = () => {
  const { cartItems, total, count } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="py-20 px-5 w-full min-h-screen">
      <div className="mx-auto  w-full ">
        {count < 1 ? (
          <p className="text-center text-2xl font-medium text-[#190] my-20">
            Your cart is empty
          </p>
        ) : (
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        )}
      </div>
      <div className="max-w-[700px] mx-auto w-full py-5 flex justify-center items-center flex-col ">
        <span className="flex justify-between w-full border-b border-t py-1 mb-2">
          <h1 className="text-xl font-medium">Total</h1>
          <h1 className="text-xl font-medium">$ {Number(total).toFixed(2)}</h1>
        </span>

        <span className="w-full flex justify-center">
          <button
            onClick={() => dispatch(openModal())}
            className="border-[#190] text-[#190] border px-4 py-1 rounded-md "
          >
            Clear Cart
          </button>
        </span>
      </div>
    </div>
  );
};

export default Cart;
