import React from "react";

function FilterGroup({ title, filters }) {
  return (
    <div className="mb-4">
      <h3 className="text-md font-semibold mb-2 text-heading">{title}</h3>
      <ul>
        {filters.map((filter) => (
          <li
            key={filter}
            className="cursor-pointer text-sm text-[#ffffffbb] hover:text-blue-500 transition"
          >
            {filter}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterGroup;
