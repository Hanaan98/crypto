import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";
import Hero from "../../components/Hero";
const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-10">
        <Hero />
        <ProductList heading="Trending in Art" />
        <ProductList heading="Trending in Electronics" />
        <ProductList heading="Explore Categories" />
      </div>
    </Layout>
  );
};

export default Home;
