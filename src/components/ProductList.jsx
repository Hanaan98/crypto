import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
const ProductList = ({ heading, products, isCategory }) => {
  return (
    <div className="flex items-center flex-col gap-5">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-white text-2xl font-semibold">{heading}</h1>
        {isCategory && (
          <Link to="/products">
            <button className="bg-accent flex items-center justify-center gap-2 text-white px-3 py-3 rounded-xl font-semibold hover:bg-tertiary">
              View Category
            </button>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center justify-between gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
