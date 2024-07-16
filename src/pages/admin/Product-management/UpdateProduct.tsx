import { useState, useEffect } from "react";
import { TProduct } from "@/components/pages/products/type";
import ProductForm from "./ProductForm";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "@/redux/features/product/productApi";
import { ShowToast } from "@/components/shared/toast/SuccessToast";
import { uploadImage } from "@/utils/uploadImag";

const UpdateProduct = ({ id }: { id: string }): JSX.Element => {
  const { data } = useGetProductByIdQuery(id);
  const [updateProduct, { data: updatedData, isLoading, isSuccess }] =
    useUpdateProductMutation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const clickHandler = async (formData: TProduct) => {
    // Create product


    const {name, image, price,category,description,stock} = formData
    

    let imageURL = data?.data?.images[0];
    let deleteURL;
    if(image){
      const {display_url,delete_url} = await uploadImage(image);
      imageURL = display_url
      deleteURL = delete_url
    }


    const updatingData = {
      name,
      category,
      description,
      images: [imageURL],
      price,
      stock,
      delete_url: deleteURL
    }

    console.log(updatingData)

    await updateProduct({ id, data: updatingData });

    // Check if the update is successful
    if (!isLoading && isSuccess && updatedData?.success) {
      ShowToast("Success", "Updated successfully", true);
      // Close the modal after showing the toast
      setIsDialogOpen(false);
    }
  };

  // Effect to close the modal programmatically when the update is successful
  useEffect(() => {
    if (!isLoading && isSuccess && updatedData?.success) {
      setIsDialogOpen(false);
    }
  }, [isLoading, isSuccess, updatedData]);

  return (
    <ProductForm
      isOpen={isDialogOpen}
      onOpenChange={setIsDialogOpen}
      existingProduc={data?.data}
      clickHandler={clickHandler}
      label="Edit"
      title="Update the product details"
    />
  );
};

export default UpdateProduct;
