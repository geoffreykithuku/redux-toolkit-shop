import React from "react";

const Item = ({ item }) => {
  const { id, category, price, image, title } = item;
  return (
    <div className="bg-white rounded-md shadow-md p-5 w-full">
      <p className="text-sm mb-2 text-gray-400">{category}</p>
      <div className="flex justify-center items-center max-w-[200px] h-full max-h-[200px] p-1 mx-auto">
        <img src={image} alt={title} className="w-full h-full " />
      </div>
      <div className="flex justify-between flex-col items-center mt-4">
        <div>
          <h2 className="text-sm font-medium">{title}</h2>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 mb-2">
        <p className="text-[#190433] font-semibold bg-[#f7f7f7] px-4 py-2 rounded-md border">
          ${price}
        </p>
        <button className="bg-[#190433] text-white px-4 py-2 rounded-md">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Item;
