import React from "react";
import FilterGroup from "./FilterGroup";

const LeftBar = () => {
  return (
    <div className="w-1/5 rounded-xl p-4 max-h-screen bg-accent">
      <h2 className="text-lg font-semibold mb-4 text-heading">Filters</h2>
      <FilterGroup
        title="Categories"
        filters={["Electronics", "Clothing", "Books"]}
      />
      <FilterGroup
        title="Price Range"
        filters={["$0 - $25", "$25 - $50", "$50+"]}
      />
      {/* Add more filter groups as needed */}
    </div>
  );
};

export default LeftBar;
