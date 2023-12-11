import React from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";


const Item = ({ item }) => {
  const { id, category, price, image, title } = item;

  
  return (
    <div className="bg-white rounded-md shadow-md p-5 w-full flex flex-col gap-5 h-full">
      <p className="text-sm mb-2 text-gray-400">{category}</p>
      <div className=" max-w-[200px] h-full max-h-[200px] p-1 mx-auto w-full">
        <img
          src={image}
          alt={title}
          className="w-full max-w-[200px] h-full max-h-[200px] p-2"
        />
      </div>

      <div className="flex justify-between flex-col items-center">
        <div>
          <h2 className="text-sm font-medium">{title}</h2>
        </div>
      </div>
      <div className="flex justify-between items-center mb-2">
        <p className="text-[#190433] font-semibold bg-[#f7f7f7] px-4 py-2 rounded-md border">
          ${price}
        </p>
        <Link to={`/products/${id}`}>
          <button className="bg-[#190433] text-white px-4 py-2 rounded-md">
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
