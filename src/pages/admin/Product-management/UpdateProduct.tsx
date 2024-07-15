import { TProduct } from "@/components/pages/products/type";
import ProductForm from "./ProductForm";
import { useUpdateProductMutation } from "@/redux/features/product/productApi";

const UpdateProduct = ({id}:{id:string}): JSX.Element => {
  const [updateProduct, {}] = useUpdateProductMutation();


  const clickHandler = async(data:TProduct) => {
    // create product
    await updateProduct({id,data})
    console.log(data)
  };

  return (
    <ProductForm
      clickHandler={clickHandler}
      label="Edit"
      title="Update the product details"
    />
  );
};

export default UpdateProduct;
