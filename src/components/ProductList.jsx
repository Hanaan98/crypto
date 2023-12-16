import React from "react";
import ProductCard from "./ProductCard";
const ProductList = ({ heading }) => {
  return (
    <div className="flex items-center flex-col gap-5">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-white text-2xl font-semibold">{heading}</h1>
        <button className="bg-accent flex items-center justify-center gap-2 text-white px-3 py-3 rounded-xl font-semibold hover:bg-tertiary">
          View Category
        </button>
      </div>
      <div className="flex items-center justify-between gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
