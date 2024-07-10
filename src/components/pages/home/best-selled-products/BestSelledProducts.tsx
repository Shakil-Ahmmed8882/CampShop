// src/components/BestSellingProducts.jsx

import { Link } from "react-router-dom";
import product from "@/assets/images/productts/shoe1.png";
import Card from "@/components/shared/card/Card";
import Container from "@/components/shared/Container";
import BlurBall from "@/components/shared/visuals/BlurBall";

export const products = [
  {
    id: 1,
    name: "Camping Tent",
    image: product,
    price: "$199.99",
  },
  {
    id: 2,
    name: "Hiking Backpack",
    image: product,
    price: "$129.99",
  },
  {
    id: 3,
    name: "Outdoor Stove",
    image: product,
    price: "$79.99",
  },
];

const BestSellingProducts = () => {
  return (
    <Container py={'py-0'}>
    <section className=" py-20 relative bg-[#0000008e] z-20">
     <BlurBall />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-[#e3e1e1] pb-11 font-bold mb-6 text-center ">
          Best Selling Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/products"
            className="inline-block bg-primary text-white px-6 py-2 rounded-md"
          >
            View More
          </Link>
        </div>
      </div>
    </section>

    </Container>
  );
};

export default BestSellingProducts;
