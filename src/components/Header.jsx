import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#190433] ">
      <div className="mx-auto w-full max-w-[90vw] text-white text-lg flex justify-between gap-5 py-4 font-medium">
        <span className="w-full">
          <h1>Dukaa</h1>
        </span>
        <div className="flex  justify-between items-center gap-8 w-full">
          <Link to="/">Products</Link>

          <Link to="/cart">
            <ShoppingCart size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
