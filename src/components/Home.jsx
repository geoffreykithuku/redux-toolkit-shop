import React from "react";
import data from "./data.json";
import Item from "./Item";
const Home = () => {

  return (
    <div className="py-20 px-5 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-auto  w-full">
        {data.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
