import productImg from "@/assets/images/productts/t-shirt.png";

import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BlurBall from "@/components/shared/visuals/BlurBall";
import Container from "@/components/shared/Container";
import { DeleteIcon, EditIcon } from "@/assets/icons/Icons";

type Product = {
  id: string;
  image: string;
  name: string;
  price: number;
  category: string;
};

const products: Product[] = [
  {
    id: "1",
    image: "path_to_image_1.jpg",
    name: "Product 1",
    price: 29.99,
    category: "Category 1",
  },
  {
    id: "2",
    image: "path_to_image_2.jpg",
    name: "Product 2",
    price: 39.99,
    category: "Category 2",
  },
  // Add more products as needed
];

const ProductList = (): JSX.Element => {
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setProductData(products);
  }, []);

  return (
      <Container>

<div className="flex items-center justify-between mb-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold">Product List</h1>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          Add New Product
        </button>
      </div>
    <div className="rounded-md bg-[#141510] max-w-5xl mx-auto">
      <BlurBall/>
      <Table className="space-y-3">
        <TableHeader className="hover:!bg-transparent">
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {productData.length > 0 ? (
            productData.map((product) => (
              <TableRow key={product.id} className="!bg-[#2020206e] !py-8 text-[#c4c3c3]">
                <TableCell>
                  <img
                    src={productImg}
                    alt={product.name}
                    className="size-12 mt-5 object-cover"
                  />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <div className="flex space-x-3">
                    <button className="text-blue-600 hover:underline "><EditIcon/></button>
                    <DeleteIcon/>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

    </div>
      </Container>
  );
};

export default ProductList;