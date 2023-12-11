import React, { useEffect } from "react";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../features/shop/shopSlice";
import Spinner from "./Spinner";
import { Link, useNavigate } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, isLoading } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const item = products?.find((item) => item.id === parseInt(id));

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen pt-24 px-5 sm:px-10">
      <div className="bg-white mx-auto h-auto flex gap-6 justify-center items-center p-5 rounded-md  flex-col sm:flex-row">
        <div className="w-full max-w-[400px]  max-h-[500px] h-full flex justify-center items-center ">
          <img src={item?.image} alt="" className="max-h-[400px] h-full w-full " />
        </div>
        <div className="mt-8 max-w-[400px]">
          <h1 className="capitalize text-[#adc5aa] font-medium mb-5">{item?.category}</h1>
          <p className="text-[#190433] font-medium mb-5">{item?.title}</p>
          <p className="text-sm text-[#3f503d] mb-5">{item?.description}</p>
          <p className="font-bold mb-5">${item?.price}</p>
          <span className="flex gap-8 flex-wrap">
            <Link to="/">
              <button className="text-[#190433] bg-white px-4 py-2 rounded-md border hover:bg-[#190433] hover:text-white transition-all duration-500">
                Back to Home
              </button>
            </Link>
            <button
              className="bg-[#190433] text-white px-4 py-2 rounded-md"
              onClick={() => {
                dispatch(addToCart(item));
                navigate("/cart");
              }}
            >
              Add to Cart
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
