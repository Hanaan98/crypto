import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";
import Hero from "../../components/Hero";
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
];
const ElectronicsProducts = [
  {
    id: 1,
    title: "Artwork",
    price: 14,
    volume: 0.01,
    image:
      "https://i.seadn.io/gcs/files/8bc879f0a6c5f92993686103285ce454.jpg?auto=format&dpr=1&h=500",
  },
  {
    id: 2,
    title: "Artwork",
    price: 14,
    volume: 0.01,
    image:
      "https://i.seadn.io/gcs/files/7e669f62113e6835fd4035ba15987622.jpg?auto=format&dpr=1&h=500",
  },
  {
    id: 3,
    title: "Artwork",
    price: 14,
    volume: 0.01,
    image:
      "https://i.seadn.io/gcs/files/7e669f62113e6835fd4035ba15987622.jpg?auto=format&dpr=1&h=500",
  },
  {
    id: 4,
    title: "Artwork",
    price: 14,
    volume: 0.01,
    image:
      "https://i.seadn.io/gcs/files/7e669f62113e6835fd4035ba15987622.jpg?auto=format&dpr=1&h=500",
  },
  {
    id: 5,
    title: "Artwork",
    price: 14,
    volume: 0.01,
    image:
      "https://i.seadn.io/gcs/files/7e669f62113e6835fd4035ba15987622.jpg?auto=format&dpr=1&h=500",
  },
];
const homeProducts = [
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
      "https://i.seadn.io/s/production/30d3196f-5df3-4f93-aac5-385ab7c7b1f3.png?w=500&auto=format",
  },
  {
    id: 4,
    title: "Artwork",
    price: 14,
    volume: 0.01,
    image:
      "https://i.seadn.io/gcs/files/66569ce21fefe99c997132692fd57f48.png?auto=format&dpr=1&h=500&fr=1",
  },
];
const categories = [
  {
    id: 1,
    title: "Artwork",
    image: "https://opensea.io/static/images/categories/maverick-art.png",
  },
  {
    id: 2,
    title: "Electronics",
    image: "https://opensea.io/static/images/categories/maverick-gaming.png",
  },
  {
    id: 3,
    title: "Home",
    image:
      "https://opensea.io/static/images/categories/maverick-membership.png",
  },
  {
    id: 4,
    title: "Artwork",
    image: "https://opensea.io/static/images/categories/maverick-music.png",
  },
  {
    id: 5,
    title: "Artwork",
    image: "https://opensea.io/static/images/categories/maverick-pfps.png",
  },
];
const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-10">
        <Hero />
        <ProductList
          heading="Trending in Art"
          products={ArtProducts}
          isCategory={true}
        />
        <ProductList
          heading="Trending in Electronics"
          products={ElectronicsProducts}
          isCategory={true}
        />
        <ProductList
          heading="Trending in Home"
          isCategory={true}
          products={homeProducts}
        />
        <ProductList
          heading="Explore Categories"
          isCategory={false}
          products={categories}
        />
      </div>
    </Layout>
  );
};

export default Home;
