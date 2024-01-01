import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";

const productsPerPage = 8;
const ArtProducts = [
  {
    id: 1,
    title: "Artwork",
    price: 14,
    volume: 0.01,
    image:
      "https://i.seadn.io/gcs/files/66569ce21fefe99c997132692fd57f48.png?auto=format&dpr=1&h=500&fr=1",
  },
  {
    id: 2,
    title: "Artwork",
    price: 14,
    volume: 0.01,
    image:
      "https://i.seadn.io/gcs/files/1b97eabace3afbb82aed069abf15e265.png?auto=format&dpr=1&h=500",
  },
  {
    id: 3,
    title: "Artwork",
    price: 14,
    volume: 0.01,
    image:
      "https://i.seadn.io/gae/6PSdAp9ON7HKStiogFT87q44GhIyMGiGPSHDvZxY0gtJwWNXH-WKDgcUEg_16udVZl1GJvIF0eu7aq1Xir6Q1i2DMz0fIYoJlQz26A?auto=format&dpr=1&h=500",
  },
  {
    id: 4,
    title: "Artwork",
    price: 14,
    volume: 0.01,
    image:
      "https://i.seadn.io/s/production/30d3196f-5df3-4f93-aac5-385ab7c7b1f3.png?w=500&auto=format",
  },
  {
    id: 5,
    title: "Artwork",
    price: 14,
    volume: 0.01,
    image:
      "https://i.seadn.io/gcs/files/66569ce21fefe99c997132692fd57f48.png?auto=format&dpr=1&h=500&fr=1",
  },
  {
    id: 1,
    title: "Artwork",
    price: 14,
    volume: 0.01,
    image:
      "https://i.seadn.io/gcs/files/66569ce21fefe99c997132692fd57f48.png?auto=format&dpr=1&h=500&fr=1",
  },
  {
    id: 2,
    title: "Artwork",
    price: 14,
    volume: 0.01,
    image:
      "https://i.seadn.io/gcs/files/1b97eabace3afbb82aed069abf15e265.png?auto=format&dpr=1&h=500",
  },
  {
    id: 3,
    title: "Artwork",
    price: 14,
    volume: 0.01,
    image:
      "https://i.seadn.io/gae/6PSdAp9ON7HKStiogFT87q44GhIyMGiGPSHDvZxY0gtJwWNXH-WKDgcUEg_16udVZl1GJvIF0eu7aq1Xir6Q1i2DMz0fIYoJlQz26A?auto=format&dpr=1&h=500",
  },
  {
    id: 2,
    title: "Artwork",
    price: 14,
    volume: 0.01,
    image:
      "https://i.seadn.io/gcs/files/1b97eabace3afbb82aed069abf15e265.png?auto=format&dpr=1&h=500",
  },
  {
    id: 3,
    title: "Artwork",
    price: 14,
    volume: 0.01,
    image:
      "https://i.seadn.io/gae/6PSdAp9ON7HKStiogFT87q44GhIyMGiGPSHDvZxY0gtJwWNXH-WKDgcUEg_16udVZl1GJvIF0eu7aq1Xir6Q1i2DMz0fIYoJlQz26A?auto=format&dpr=1&h=500",
  },
];
const ProductsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // Get the products for the current page
  const currentProducts = ArtProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(ArtProducts.length / productsPerPage);

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
          Total Products: {ArtProducts.length}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
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
