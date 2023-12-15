import React from "react";
import ProductCard from "../../components/ProductCard";

const ProductsSection = () => {
  return (
    <div className="border-l border-zinc-100 px-6 flex-1">
      {/* Header */}
      <div className="mt-8">
        <p className="text-[24px] font-medium">Show Results for Product</p>
      </div>
      <div className=" py-4 flex justify-between">
        <p>Total 12 items found</p>
        <div className="flex items-center gap-2">
          <p>sort by :</p>
          <select className="border  border-zinc-200 rounded-md focus:outline-none py-1 px-5">
            <option disabled value="">
              -- Default --
            </option>
            <option value="">price: low to high</option>
            <option value="">price: high to low</option>
            <option value="">most recent</option>
            <option value="">most reviews</option>
          </select>
        </div>
      </div>

      
      {/* Body  (Products) */}
      <div className="flex gap-8 flex-wrap justify-center">
        {new Array(10).fill(0).map((_, index) => {
          return <ProductCard key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProductsSection;
