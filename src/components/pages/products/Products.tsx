import Container from "@/components/shared/Container";
import Card from "@/components/shared/card/Card";
import BlurBall from "@/components/shared/visuals/BlurBall";
import SearchFilterBar from "./search-filter/SearchFilterBar";
import { useAppSelector } from "@/redux/hooks";
import {
  selectCategory,
  selectSearch,
  selectMinPrice,
  selectMaxPrice,
} from "@/redux/features/product/productSlice";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "./type";
import Title from "@/components/ui/Title";
import Description from "@/components/ui/Description";
import NoDataSearcingPlaceholder from "@/components/shared/ui/NoDataSearcingPlaceholder";


const Products = (): JSX.Element => {
  const search = useAppSelector(selectSearch);
  const category = useAppSelector(selectCategory);
  const minPrice = useAppSelector(selectMinPrice);
  const maxPrice = useAppSelector(selectMaxPrice);
  
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
  
  const { data } = useGetAllProductsQuery(query);


  return (
    <Container px={true}>
      <BlurBall />
      <>
        <SearchFilterBar />
      <Title className="text-center mt-20 md:mt-14">Products</Title>
      <Description className="text-center pb-2">Get your choice</Description>
        <main className="grid grid-cols-1 gap-16 sm:gap-8 lg:gap-11   sm:grid-cols-2 lg:grid-cols-3  md:pt-11 lg:pt-10 lg:p-10">
          {/* {data?.data?.map((product: TProduct) => ( */}
          {
          
          
          (data?.data)?.length > 0? (
            data?.data?.map((product: TProduct) => (
              <Card key={product._id} product={product} />
            ))
          ):
      
            <NoDataSearcingPlaceholder/>
          }
        </main>
      </>
    </Container>
  );
};

export default Products;
