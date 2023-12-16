import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Link
      to="/products/1"
      className="w-56 bg-accent rounded-2xl cursor-pointer overflow-hidden hover:-translate-y-3 hover:transition-all hover:duration-300"
    >
      <div className="w-full">
        <img
          style={{ height: "100%", width: "100%" }}
          className="bg-cover bg-center"
          src="https://i.seadn.io/gcs/files/aa98dbd1ecf8973695f6096bae3753da.jpg?auto=format&dpr=1&h=500&fr=1"
        />
      </div>
      <div className="flex flex-col gap-5 p-4">
        <p className=" w-full text-md text-white font-semibold">
          Boomland Shards
        </p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-end w-full">
            <p className="text-sm font-light text-[#ffffffa6]">Floor</p>
            <p className="text-md font-semibold text-white">14 USDC</p>
          </div>
          <div className="flex flex-col justify-end w-full">
            <p className="text-sm font-light text-[#ffffffa6]">Total Volume</p>
            <p className="text-md font-semibold text-white">0.01 ETH</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
