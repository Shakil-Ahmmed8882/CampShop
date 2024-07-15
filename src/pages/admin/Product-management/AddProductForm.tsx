import { TProduct } from "@/components/pages/products/type";
import ProductForm from "./ProductForm";
import { useCreateProductMutation } from "@/redux/features/product/productApi";

const AddProductForm = (): JSX.Element => {
  const [createProduct, {data}] = useCreateProductMutation();
  console.log(data)

  const clickHandler = (formData:TProduct) => {
    // create product
    createProduct(formData)
  };

  return (
    <ProductForm
      clickHandler={clickHandler}
      label="Add new product"
      title="Place the details of a product"
    />
  );
};

export default AddProductForm;
