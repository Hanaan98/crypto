import React from "react";

const CartItem = () => {
  return (
    <div className="flex justify-between p-3 w-full bg-tertiary rounded-xl items-center">
      <div className="flex items-center gap-3">
        <img
          src="https://i.seadn.io/gcs/files/aa98dbd1ecf8973695f6096bae3753da.jpg?auto=format&dpr=1&h=500&fr=1"
          alt=""
          className="w-[4.5rem] h-[4.5rem] rounded-xl object-cover"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-md font-semibold tracking-wider">
            Boomland Shards
          </h1>
          <div className="flex gap-4 items-center">
            <h1 className="text-secondary text-3xl cursor-pointer">-</h1>
            <h1 className="text-white">1</h1>
            <h1 className="text-secondary text-3xl cursor-pointer">+</h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-white text-md font-semibold">0.01 ETH</h1>
      </div>
    </div>
  );
};

export default CartItem;
