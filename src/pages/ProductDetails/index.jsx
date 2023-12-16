import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Rating from "./components/Rating";
import DetailsSection from "./DetailsSection";
import RelatedProducts from "./RelatedProducts";
import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";

const ProductDetails = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="p-4 overflow-auto flex flex-col gap-10">
        <div className="flex  justify-between gap-5  mt-6">
          {/* Image  section */}
          <div className="flex-1 ">
            <div className="">
              <img
                className="rounded-xl w-full h-full object-cover"
                src="https://i.seadn.io/gcs/files/aa98dbd1ecf8973695f6096bae3753da.jpg?auto=format&dpr=1&h=500&fr=1"
              />
            </div>
          </div>

          {/* Details Section */}
          <DetailsSection />
        </div>

        {/* Related Products */}
        <ProductList heading="Related Products" />
      </div>
    </Layout>
  );
};

export default ProductDetails;
