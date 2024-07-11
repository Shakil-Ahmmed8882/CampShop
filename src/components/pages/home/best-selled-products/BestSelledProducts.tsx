// src/components/BestSellingProducts.jsx

import { Link } from "react-router-dom";
import Card from "@/components/shared/card/Card";
import Container from "@/components/shared/Container";
import BlurBall from "@/components/shared/visuals/BlurBall";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "../../products/type";

const BestSellingProducts = () => {
  const { data } = useGetAllProductsQuery(undefined);

  return (
    <Container py={"py-0"}>
      <section className=" py-20 relative bg-[#0000008e] z-20">
        <BlurBall />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-[#e3e1e1] pb-11 font-bold mb-6 text-center ">
            Best Selling Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data?.data?.map((product: TProduct) => (
              <Card key={product._id} product={product} />
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
