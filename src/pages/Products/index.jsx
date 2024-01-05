import React, { useEffect } from "react";

import LeftBar from "./LeftBar";

import ProductsSection from "./ProductsSection";
import Layout from "../../components/Layout";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
