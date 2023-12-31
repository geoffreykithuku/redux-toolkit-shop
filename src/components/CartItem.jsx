import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ item }) => {
  const {price, image, title, quantity } = item;
  const dispatch = useDispatch();
  return (
    <div className="">
      <div className=" w-full max-w-[700px] mx-auto p-3 bg-white shadow my-2 text-[#190443]">
        <div className="flex justify-between w-full">
          <div className="flex gap-6 items-center">
            <img src={image} alt={title} className="w-20 h-20" />
            <span className="w-3/4">
              <h1>{title}</h1>
              <p className="font-medium text-sm mt-2">${price}</p>
            </span>
          </div>
          <span className="1/4 flex flex-col  justify-between items-center">
            <button onClick={() => dispatch(incrementQuantity(item))}>
              <ChevronUp />
            </button>
            <p>{quantity}</p>
            <button onClick={() => dispatch(decrementQuantity(item))}>
              <ChevronDown />
            </button>
          </span>
        </div>
        <div className="flex justify-center mt-3 sm:mt-[-20px]">
          <button
            onClick={() => dispatch(removeFromCart(item))}
            className="border-[#190] text-[#190] border px-4 py-1 rounded-md "
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
