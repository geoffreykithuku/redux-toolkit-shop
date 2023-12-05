import React, { useEffect } from "react";
import Spinner from "./Spinner";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/shop/shopSlice";

const Home = () => {

  const { products, isLoading } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="py-20 px-5 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-auto  w-full items-center justify-center">
        {products.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
