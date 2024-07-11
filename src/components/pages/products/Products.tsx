import Container from "@/components/shared/Container";
import Card from "@/components/shared/card/Card";
import BlurBall from "@/components/shared/visuals/BlurBall";

import SearchFilterBar from "./search-filter/SearchFilterBar";
import { useAppSelector } from "@/redux/hooks";
import {
  selectClear,
  selectCategory,
  selectSearch,
  selectMinPrice,
  selectMaxPrice,
} from "@/redux/features/product/productSlice";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "./type";

const Products = (): JSX.Element => {
  const search = useAppSelector(selectSearch);
  const category = useAppSelector(selectCategory);
  const minPrice = useAppSelector(selectMinPrice);
  const maxPrice = useAppSelector(selectMaxPrice);
  const clear = useAppSelector(selectClear);

  // Construct the query object
  const query: Record<string, string> = {};
  if (category) {
    query.category = category;
  }
  if (search) {
    query.searchTerm = search;
  }
  if (minPrice) {
    query.minPrice = minPrice;
  }
  if (maxPrice) {
    query.maxPrice = maxPrice;
  }
  if (clear) {
    delete query.category;
    delete query.searchTerm;
    delete query.minPrice;
    delete query.maxPrice;
  }

  console.log({ query });
  const { data } = useGetAllProductsQuery(query);
  console.log({ data });

  return (
    <Container>
      <BlurBall className="!h-[800px] bg-[#050900] brightness-200 bg-blend-overlay -right-80  w-[80%] !top-0 " />
      <>
        <SearchFilterBar />
        <h1 className="text-center text-white text-5xl mt-20 mb-11">
          Products
        </h1>
        <main className="grid grid-cols-1 gap-14 p-4 md:grid-cols-2 lg:grid-cols-3 lg:p-6">
          {data?.data?.map((product: TProduct) => (
            <Card key={product._id} product={product} />
          ))}
        </main>
      </>
    </Container>
  );
};

export default Products;
