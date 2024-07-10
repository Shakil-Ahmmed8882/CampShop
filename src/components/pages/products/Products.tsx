import Container from "@/components/shared/Container";
import Card from "@/components/shared/card/Card";
import { products } from "../home/best-selled-products/BestSelledProducts";
import Filter from "./filter/Filter";
import Search from "./search/Search";
import { Input } from "@/components/ui/input";
import BlurBall from "@/components/shared/visuals/BlurBall";

const Products = (): JSX.Element => {
  return (
    <Container>
      <>
      <div className="flex items-center justify-end gap-8 px-8">
        <Filter/>
        <Search/>
        <BlurBall className="!h-[800px] bg-[#050900] brightness-200 bg-blend-overlay -right-80  w-[80%] !top-0 "/>
        <Input type="text" className=" bg-[#0e131b8d] text-2xl p-16 font-poppins rounded-lg absolute w-[96%] mx-auto right-[2%] px-8 " placeholder="Search.." />
      </div>
        <h1 className="text-center text-white text-5xl mt-20 mb-11">Products</h1>
        <main className="grid grid-cols-1 gap-14 p-4 md:grid-cols-2 lg:grid-cols-3 lg:p-6">
          {[...products, ...products]?.map((product) => (
            <Card product={product} />
          ))}
        </main>
      </>
    </Container>
  );
};

export default Products;
