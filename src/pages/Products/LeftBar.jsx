import React from "react";

const LeftBar = () => {
  return (
    <div className="hidden sm:flex flex-col w-1/4 items-center">
      <div className="mt-8 flex justify-between items-center gap-2">
        <p>Select Currency</p>
        <select className="focus:outline-none px-3 text-[14px] py-1 rounded-md">
          <option value="">ETH</option>
          <option value="">BTC</option>
          <option value="">ETH</option>
          <option value="">BTC</option>
        </select>
      </div>
      <div className="w-[80%] mt-8 ">
        <p>Filter By Price</p>
        <div className="flex items-center justify-between my-4">
          <input className=" pl-2 py-1  text-[14px] w-[90px] border border-zinc-300 border-sm rounded-md focus:outline-none" type="text" placeholder="Eth"  />
          <p>to</p>
          <input className=" pl-2 py-1  text-[14px] w-[90px] border border-zinc-300 border-sm rounded-md focus:outline-none"  type="text" placeholder="Eth" />
        </div>
        <div  className="flex justify-center">
          <button className=" bg-zinc-200 border-none rounded-md py-2 px-4 text-sm">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
