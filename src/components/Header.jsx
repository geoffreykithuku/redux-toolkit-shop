import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#190433] fixed z-10 w-full">
      <div className="mx-auto w-full max-w-[90vw] text-white text-lg flex justify-between gap-5 py-4 font-medium">
        <span className="w-full">
          <h1>Dukaa</h1>
        </span>
        <div className="flex  justify-between items-center gap-8 w-full">
          <Link to="/">Products</Link>

          <Link to="/cart" className="relative">
            <ShoppingCart size={24} />
            <span className="absolute rounded-[50%] h-5 w-5 p-[2px] justify-center items-center flex text-[#454545] text-sm bg-[#f6f6f6] top-[-10px] right-[-14px]">
              9
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
