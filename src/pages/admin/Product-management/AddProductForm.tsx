import { TProduct } from "@/components/pages/products/type";
import ProductForm from "./ProductForm";
import { useCreateProductMutation } from "@/redux/features/product/productApi";
import { uploadImage } from "@/utils/uploadImag";
import { useEffect, useState } from "react";

const AddProductForm = (): JSX.Element => {
  const [createProduct, {isLoading, isSuccess, data:createdProduct}] = useCreateProductMutation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const clickHandler = async (formData: TProduct) => {
    try {
      console.log(formData?.image);
      const {name, image, price,category,description,stock} = formData
      const {display_url,delete_url} = await uploadImage(image);


      const productData = {
        name,
        category,
        description,
        images: [display_url],
        price,
        stock,
        delete_url
      }
      
      await createProduct(productData)
      // Proceed with the rest of your logic here
    } catch (error) {
      console.error('Error in clickHandler:', error);
    }
  };
  

  // Effect to close the modal programmatically when the update is successful
  useEffect(() => {
    if (!isLoading && isSuccess && createdProduct?.success) {
      setIsDialogOpen(false);
    }
  }, [isLoading, isSuccess, createdProduct]);


  return (
    <ProductForm
      isOpen={isDialogOpen}
      onOpenChange={setIsDialogOpen}
      clickHandler={clickHandler}
      label="Add new product"
      title="Place the details of a product"
    />
  );
};

export default AddProductForm;
