import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
const CartItem = ({ item }) => {
  const { id, category, price, image, title } = item;
  return (
    <div className="">
      <div className=" w-full max-w-[700px] mx-auto p-2 bg-white shadow my-2 text-[#190443]">
        <div className="flex justify-between w-full">
          <span className="w-3/4">
            <h1>{title}</h1>
            <p className="font-medium">${price}</p>
          </span>
          <span className="1/4 flex flex-col  justify-between items-center">
            <button>
              <ChevronUp />
            </button>
            <p>0</p>
            <button>
              <ChevronDown />
            </button>
          </span>
        </div>
        <div className="flex justify-center mt-[-20px]">
          <button className="border-[#190] text-[#190] border px-4 py-1 rounded-md ">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
