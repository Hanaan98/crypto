import React from "react";
import SidebarButton from "./SidebarButton";

const SideBar = () => {
  return (
    <div className="w-1/5  p-3 h-full ">
      <div className="bg-accent px-1 py-2 h-full rounded-xl">
        <h2 className="text-lg font-semibold mb-4 text-heading text-center italic">
          Panel
        </h2>

        <div className="flex flex-col items-start gap-6 mt-7">
          <SidebarButton title={"Products"} navLink={"products"} />
          <SidebarButton title={"Categories"} navLink={"categories"} />
          <SidebarButton title={"Orders"} navLink={"orders"} />
        </div>
      </div>
      {/* Add more filter groups as needed */}
    </div>
  );
};

export default SideBar;
