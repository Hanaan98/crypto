import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";
import Hero from "../../components/Hero";
import { useEffect } from "react";
import { ART_PRODUCTS } from "../../Data";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="flex flex-col gap-10">
        <Hero />
        <ProductList
          heading="Trending in Art"
          products={ART_PRODUCTS.slice(0, 5)}
          isCategory={true}
        />
        <ProductList
          heading="Trending in Electronics"
          products={ART_PRODUCTS.slice(5, 10)}
          isCategory={true}
        />
        <ProductList
          heading="Trending in Home"
          isCategory={true}
          products={ART_PRODUCTS.slice(0, 5)}
        />
        <ProductList
          heading="Explore Categories"
          isCategory={false}
          products={ART_PRODUCTS.slice(5, 10)}
        />
      </div>
    </Layout>
  );
};

export default Home;
