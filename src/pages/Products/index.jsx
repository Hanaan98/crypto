import React from "react";
import ProductCard from "../../components/ProductCard";
import LeftBar from "./LeftBar";
import Navbar from "../../components/Navbar";
import ProductsSection from "./ProductsSection";
import Layout from "../../components/Layout";

const Products = () => {
  return (
    <Layout>
      <div className="flex overflow-auto">
        {/* LeftSide */}
        <LeftBar />

        {/* RightSide */}
        <ProductsSection />
      </div>
    </Layout>
  );
};

export default Products;
