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
import Title from "@/components/ui/Title";
import Description from "@/components/ui/Description";


const customProducts = [
  {
    _id: 1,
    name: "Camping Tent",
    description: "A durable and spacious tent suitable for family camping trips.",
    price: 149.99,
    category: "Camping Gear",
    stock: 50,
    images: [
      "https://example.com/images/tent1.jpg",
      "https://example.com/images/tent2.jpg"
    ],
    isDeleted: false,
    createdAt: "2023-07-01T12:00:00Z"
  },
  {
    _id: 2,
    name: "Hiking Backpack",
    description: "A lightweight backpack with multiple compartments for easy organization.",
    price: 79.99,
    category: "Hiking Gear",
    stock: 100,
    images: [
      "https://example.com/images/backpack1.jpg",
      "https://example.com/images/backpack2.jpg"
    ],
    isDeleted: false,
    createdAt: "2023-07-01T12:00:00Z"
  },
  {
    _id: 3,
    name: "Portable Camping Stove",
    description: "A compact and efficient stove perfect for outdoor cooking.",
    price: 45.0,
    category: "Camping Gear",
    stock: 75,
    images: [
      "https://example.com/images/stove1.jpg",
      "https://example.com/images/stove2.jpg"
    ],
    isDeleted: false,
    createdAt: "2023-07-01T12:00:00Z"
  },
  {
    _id: 4,
    name: "Sleeping Bag",
    description: "A warm and comfortable sleeping bag for cold nights.",
    price: 89.99,
    category: "Camping Gear",
    stock: 120,
    images: [
      "https://example.com/images/sleepingbag1.jpg",
      "https://example.com/images/sleepingbag2.jpg"
    ],
    isDeleted: false,
    createdAt: "2023-07-01T12:00:00Z"
  }
]



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
    <Container px='dfkjdl'>
      <BlurBall />
      <>
        <SearchFilterBar />
      <Title className="text-center mt-20 md:mt-14">Products</Title>
      <Description className="text-center pb-2">Get your choice</Description>
        <main className="grid grid-cols-1 gap-11  sm:grid-cols-2 lg:grid-cols-3 lg:p-6">
          {/* {data?.data?.map((product: TProduct) => ( */}
          {customProducts?.map((product: TProduct) => (
            <Card key={product._id} product={product} />
          ))}
        </main>
      </>
    </Container>
  );
};

export default Products;
