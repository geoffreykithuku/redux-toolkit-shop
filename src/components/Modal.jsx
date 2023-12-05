import React from "react";

const Modal = () => {
  return (
    <div className=" bg-[#190443] bg-opacity-80 z-10 absolute justify-center items-center flex top-0 bottom-0 left-0 right-0">
      <div className="bg-[#f6f6f6] w-full max-w-[300px] h-full max-h-[150px] mx-auto my-auto flex  items-center py-6 flex-col justify-between">
        <p className="font-medium text-lg text-[#190443]">
          Are you sure to clear cart?
        </p>
        <span className="flex gap-10 font-semibold text-sm flex-wrap">
          <button className="text-[#190443] border border-[#190443] px-4 py-2 rounded-md">
            Clear
          </button>
          <button className="border border-[#190] text-[#190] px-4 py-2 rounded-md">
            Cancel
          </button>
        </span>
      </div>
    </div>
  );
};

export default Modal;
