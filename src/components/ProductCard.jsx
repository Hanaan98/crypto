import React from "react";

const ProductCard = () => {

  return (
      <div className=" cursor-pointer rounded-md border border-zinc-200 overflow-hidden">
        <div className="w-full  h-[120px]">
          <img
            style={{ height: "100%", width: "100%" }}
            className=""
            src="https://i.seadn.io/gcs/files/aa98dbd1ecf8973695f6096bae3753da.jpg?auto=format&dpr=1&h=500&fr=1"
          />
        </div>
        <div className="p-1 py-2">
          <p className=" w-full text-[14px] font-bold">Boomland Shards</p>
          <div className="flex justify-end items-center w-full">
            <p className="text-[12px] font-light">0.01 Eth</p>
          </div>
        </div>
      </div>
  );
};

export default ProductCard;
