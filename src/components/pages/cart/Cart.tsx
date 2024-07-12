import React, { useState, useEffect } from "react";
import product from "@/assets/images/productts/shoe1.png";
import BlurBall from "@/components/shared/visuals/BlurBall";
import CustomButton from "@/components/ui/CustomButton";
import CustomSpinner from "@/components/ui/CustomSpinner";
import {
  useDeleteCartMutation,
  useGetAllCartsQuery,
  useUpdateCartMutation,
} from "@/redux/features/cart/cartApi";
import OrderSummary from "./OrderSummary";
import ConfirmDialog from "@/components/shared/dialog/ConfirmDialog";

import { Badge } from "@/components/ui/badge";
import { ShowToast } from "@/components/shared/toast/SuccessToast";
import Form from "@/components/shared/form/Form";
import { useAppDispatch } from "@/redux/hooks";
import { setFormData } from "@/redux/features/checkout/checkoutSlice";
import { useNavigate } from "react-router-dom";

const Cart = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { data, isLoading, refetch } = useGetAllCartsQuery("668d753fecf871f4e7c5f0b8");
  const goTo = useNavigate();

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (data && data.data) {
      dispatch(setFormData(data.data.totalPrice));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (!data || !data.data) {
    return <div>No data available</div>;
  }

  const { products: carts, totalPrice } = data.data;

  const handleNavigation = () => {
    goTo('/success');
  };

  return (
    <>
      <section className="w-full py-12 pb-32">
        <BlurBall />
        <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
          <div className="flex items-center justify-between pt-14 pb-8">
            <h1 className="text-2xl font-bold tracking-tight title-color">
              Shopping Cart
            </h1>
          </div>
          <div className="grid gap-6 md:grid-cols-[1fr_300px]">
            <div className="grid gap-6">
              {carts.map((cart) => (
                <div
                  key={cart?.productId}
                  className="rounded-lg  lg:h-40 bg-[#0f0f0bc0] text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="grid md:grid-cols-[120px_1fr_auto] gap-14 items-center">
                    <img
                      src={product}
                      alt="Product Image"
                      width={120}
                      height={120}
                      className="rounded-lg object-cover"
                      style={{ aspectRatio: "120 / 120", objectFit: "cover" }}
                    />
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="font-semibold title-color">
                        {cart?.product}
                      </h3>

                      <Badge className="!bg-primaryLight !text-primaryColor">
                        stock : {" "}
                        <span className="title-color"> {cart?.stock}</span>
                      </Badge>

                      <UpdateQuantity cart={cart} refetch={refetch} />
                    </div>
                    <div className=" mt-10">
                      <Form
                      totalPrice={totalPrice}
                      handleNavigation={handleNavigation} isDisabled={cart?.quantity <= 0} />
                      <div className="flex items-center mt-2 justify-center gap-3">
                        <p className="font-semibold text-[#c3c3c3]">
                          ${cart?.price}
                        </p>
                        <DeleteIcon cart={cart} refetch={refetch} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="rounded-lg !bg-gradient-to-tr sticky top-0 max-h-screen overflow-y-auto from-[#509502ba]  to-[#a6bf0233] bg-blend-overlay text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap title-color text-2xl font-semibold leading-none tracking-tight">
                  Order Summary
                </h3>
              </div>
              <OrderSummary totalPrice={totalPrice} products={carts} />
              <div className="flex items-center p-6 md:hidden">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary h-10 px-4 py-2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

const UpdateQuantity = ({ cart, refetch }) => {
  const [updateQuantity, { data: updateData, isSuccess, isError }] = useUpdateCartMutation();

  const handleUpdateProductQuantity = async (isIncrease, productId) => {
    const updateProduct = {
      userId: "668d753fecf871f4e7c5f0b8",
      productId,
      isIncrease,
    };

    await updateQuantity(updateProduct);

    if (isError) {
      ShowToast("Failed!", `Oops! There was an error updating the product quantity.`);
      return;
    }

    if (updateData?.data?.isOutOfStock) {
      ShowToast("Failed!", `Oops! This product is out of stock.`);
      return;
    }

    if (isSuccess) {
      ShowToast("Success!", `Product quantity updated successfully.`);
      refetch();
    }
  };

  return (
    <div className="flex items-center gap-5">

      {/* decrease */}
      <CustomButton
        isDisabled={cart.quantity <= 0}
        clickHandler={() => handleUpdateProductQuantity(false, cart.productId)}
        px="px-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M5 12h14" />
        </svg>
      </CustomButton>
      <span className="title-color">{cart?.quantity}</span>

    {/* Increase */}
      <CustomButton
        isDisabled={cart.stock == 0}
        clickHandler={() => handleUpdateProductQuantity(true, cart.productId)}
        px="px-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </CustomButton>
    </div>
  );
};

const DeleteIcon = ({ cart, refetch }) => {
  const [deleteCart] = useDeleteCartMutation();
  const { cartId, productId } = cart;

  const handleDelete = (isConfirm: boolean) => {
    if (isConfirm) {
      deleteCart({ cartId, productId });
      refetch();
    }
  };

  return <ConfirmDialog handleDelete={handleDelete} />;
};