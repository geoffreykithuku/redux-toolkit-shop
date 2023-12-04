import React from "react";
import data from "./data.json";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="py-20 px-5 w-full h-[90vh]">
      <div className="mx-auto  w-full max-h-[450px] overflow-y-scroll border-b-2">
        {data.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div className="max-w-[700px] mx-auto w-full py-5 flex justify-center items-center flex-col ">
        <span className="flex justify-between w-full">
          <h1 className="text-2xl font-medium">Total</h1>
          <h1 className="text-2xl font-medium">$ 100</h1>
        </span>

        <span className="w-full flex justify-center">
          <button className="border-[#190] text-[#190] border px-4 py-1 rounded-md ">
            Clear Cart
          </button>
        </span>
      </div>
    </div>
  );
};

export default Cart;
