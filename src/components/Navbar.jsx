import React from "react";

const Navbar = () => {
  return (
    <div className="h-[67px] items-center flex  shadow-md px-4">
      <div className="flex-1">
        <p className=" text-lg font-bold">Logo</p>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="border border-zinc-100 rounded-2xl p-1">
            <input placeholder="Search anything ..." className="pl-2 w-[400px] border-none focus:outline-none "/>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
            Logout
      </div>
    </div>
  );
};

export default Navbar;
