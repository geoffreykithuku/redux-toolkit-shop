import React from "react";
import { MoonLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <MoonLoader color="#190443" />
    </div>
  );
};

export default Spinner;
