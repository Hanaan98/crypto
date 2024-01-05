import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";
import { ART_PRODUCTS } from "../../Data";

const productsPerPage = 8;
const ProductsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // Get the products for the current page
  const currentProducts = ART_PRODUCTS.slice(startIndex, endIndex);

  const totalPages = Math.ceil(ART_PRODUCTS.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="w-4/5 p-4">
      <div className="min-h-screen">
        <h2 className="text-3xl font-semibold mb-4 text-heading">
          All Products
        </h2>
        <p className="mb-2 text-[#ffffffbb] text-sm">
          Total Products: {ART_PRODUCTS.length}
        </p>
        <div className="flex items-center flex-wrap gap-3 mt-5">
          {currentProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <nav className="flex justify-center items-center mt-14">
        <ul className="flex">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index}>
              <Link
                to={`/products`}
                className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full ${
                  currentPage === index + 1
                    ? "bg-secondary text-white"
                    : "border border-blue-gray-100 bg-transparent text-white hover:bg-light-300"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ProductsSection;
