import React from "react";
import data from "./data.json";
import CartItem from "./CartItem";
import Spinner from "./Spinner";

const Cart = () => {
  return (
    <div className="py-20 px-5 w-full">
      <div className="mx-auto  w-full ">
        {/* {data.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })} */}
        <Spinner />
      </div>
      <div className="max-w-[700px] mx-auto w-full py-5 flex justify-center items-center flex-col ">
        <span className="flex justify-between w-full border-b border-t py-1 mb-2">
          <h1 className="text-xl font-medium">Total</h1>
          <h1 className="text-xl font-medium">$ 100</h1>
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
