import React from "react";
import Navbar from "../../components/Navbar";
import Rating from "./components/Rating";
import DetailsSection from "./DetailsSection";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
  return (
    <div>
      <Navbar />

      <div className="p-4 h-[calc(100vh-67px)] overflow-auto">
        <div className="flex  mt-6">
          {/* Image  section */}
          <div className="flex-1 ">
            <div className="">
              <img
                className="rounded-md"
                src="https://i.seadn.io/gcs/files/aa98dbd1ecf8973695f6096bae3753da.jpg?auto=format&dpr=1&h=500&fr=1"
              />
            </div>
          </div>

          {/* Details Section */}
          <DetailsSection />
        </div>

        {/* Related Products */}
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
