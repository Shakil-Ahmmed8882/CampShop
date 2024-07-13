// src/components/BestSellingProducts.jsx

import { Link } from "react-router-dom";
import Card from "@/components/shared/card/Card";
import Container from "@/components/shared/Container";
import BlurBall from "@/components/shared/visuals/BlurBall";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "../../products/type";
import Title from "@/components/ui/Title";
import CustomButton from "@/components/ui/CustomButton";

const BestSellingProducts = () => {
  const { data } = useGetAllProductsQuery(undefined);

  return (
    <Container py={"py-0"}>
      <section className=" py-20 min-h-screen relative bg-[#0000008e] z-20">
        <BlurBall />
        <div className="mx-auto px-4">
          <Title className="!text-2xl sm:!text-3xl lg:!text-center">Best Selling Products</Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data?.data?.map((product: TProduct) => (
              <Card key={product._id} product={product} />
            ))}
          </div>
          <div className="lg:text-center mt-8">

            <Link
              to="/products"
            >
              <CustomButton>

              View More
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default BestSellingProducts;
