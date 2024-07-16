

import { useEffect, useState } from "react";
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
import AddProductForm from "./AddProductForm";
import { useDeleteProductMutation, useGetAllProductsQuery } from "@/redux/features/product/productApi";
import Spinner from "@/components/shared/ui/Spinner";
import { TProduct } from "./type";
import ConfirmDialog from "@/components/shared/dialog/ConfirmDialog";
import { Button } from "@/components/ui/button";
import UpdateProduct from "./UpdateProduct";

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
];

const ProductList = (): JSX.Element => {
  const { data, isLoading } = useGetAllProductsQuery(undefined);
  const [ deleteProduct, {data:deletedData} ] = useDeleteProductMutation()
  const [productData, setProductData] = useState<Product[]>([]);
  const [productId, setProductId] = useState("");
  

  useEffect(() => {
    // Simulate fetching data from an API
    setProductData(products);
  }, []);

  const handleDeleteProduct = (isDelete: boolean) => {
    if (isDelete) {
    deleteProduct(productId) 
    console.log(deletedData)
    }
    console.log("NO");
  };


  console.log(data?.data)

  return (
    <Container>
      <div className="flex items-center justify-between mb-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-white">Product List</h1>
        <AddProductForm />
      </div>
      <div className="rounded-md bg-[#141510] max-w-5xl mx-auto">
        <BlurBall />
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

          {/* Product table */}
          {isLoading ? (
            <Spinner />
          ) : (
            <TableBody className="">
              {productData.length > 0 ? (
                data?.data?.map((product: TProduct) => (
                  <TableRow
                    key={product?._id}
                    className="!bg-[#2020206e] !py-8 text-[#c4c3c3]"
                  >
                    <TableCell>
                      <img
                        src={product?.images[0]}
                        alt={product.name}
                        className="size-12 mt-5 object-cover"
                      />
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>
                      <div className="flex space-x-3">
                        <UpdateProduct id={product?._id}/>
                        <Button onClick={()=> setProductId(product?._id)} className="bg-transparent hover:bg-[#0000003d]">
                        <ConfirmDialog handleDelete={handleDeleteProduct} />
                        </Button>
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
          )}
        </Table>
      </div>
    </Container>
  );
};

export default ProductList;
