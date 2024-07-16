import { useState, useEffect } from "react";
import { TProduct } from "@/components/pages/products/type";
import ProductForm from "./ProductForm";
import { useGetProductByIdQuery, useUpdateProductMutation } from "@/redux/features/product/productApi";
import { ShowToast } from "@/components/shared/toast/SuccessToast";
import { Dialog } from "@/components/ui/dialog";

const UpdateProduct = ({ id }: { id: string }): JSX.Element => {
  const { data } = useGetProductByIdQuery(id);
  const [updateProduct, { data: updatedData, isLoading, isSuccess }] = useUpdateProductMutation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const clickHandler = async (data: TProduct) => {
    // Create product
    await updateProduct({ id, data });

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
