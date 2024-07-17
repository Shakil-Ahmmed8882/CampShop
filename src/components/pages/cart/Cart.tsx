import { useEffect } from "react";
import BlurBall from "@/components/shared/visuals/BlurBall";
import CustomButton from "@/components/ui/CustomButton";

import {
  useDeleteCartMutation,
  useGetAllCartsQuery,
  useUpdateCartMutation,
} from "@/redux/features/cart/cartApi";
import OrderSummary from "./OrderSummary";
import ConfirmDialog from "@/components/shared/dialog/ConfirmDialog";

import { ShowToast } from "@/components/shared/toast/SuccessToast";
import Form from "@/components/shared/form/Form";
import { useAppDispatch } from "@/redux/hooks";
import { setFormData } from "@/redux/features/checkout/checkoutSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "@/components/shared/ui/Spinner";
import NoDataSearcingPlaceholder from "@/components/shared/ui/NoDataSearcingPlaceholder";
import { TUserCart } from "../products/type";
import { CartRefetchType } from "./cart.type";

const Cart = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { data, isLoading, refetch } = useGetAllCartsQuery(
    "668d753fecf871f4e7c5f0b8"
  );
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
    return <Spinner />;
  }

  if (!data || !data.data) {
    return (
      <div className=" mt-16">
        {" "}
        <BlurBall /> <NoDataSearcingPlaceholder />
      </div>
    );
  }

  const { products: carts, totalPrice } = data.data;

  const handleNavigation = () => {
    goTo("/success");
  };

  return (
    <>
      <BlurBall />
      <section className="w-full py-12 pb-32 sm:px-8 ">
        {carts?.length > 0 ? (
          <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
            <div className="flex items-center justify-between pt-14 pb-8">
              <h1 className=" text-[13px] sm:text-2xl font-bold tracking-tight title-color">
                Shopping Cart
              </h1>
              <Form
                totalPrice={totalPrice}
                handleNavigation={handleNavigation}
              />
            </div>
            <div className="grid gap-6  lg:grid-cols-[1fr_300px] ">
              <div className="grid gap-6">
                {carts.map((cart: TUserCart) => (
                  <div
                    key={cart?.productId}
                    className="rounded-lg   bg-[#0f0f0bc0] text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex justify-between items-center gap-8">

                      <img
                        src={cart?.image}
                        alt="Product Image"
                        width={120}
                        height={120}
                        className=" object-cover size-6 sm:size-10 md:size-14 !rounded-full"
                        style={{ aspectRatio: "120 / 120", objectFit: "cover" }}
                      />
                      <div className="flex items-center justify-between gap-8 flex-1">

                        <h3 className="hidden md:flex text-[12px] md:text-[15px] w-72 title-color">
                          {cart?.product?.split(" ")[0]}
                        </h3>

                          <span className="hidden sm:flex title-color gap-8">
                          Stock
                            <span className="!text-secondaryColor">
                            {cart?.stock}
                            </span>
                            
                          </span>
                        
                        <UpdateQuantity cart={cart} refetch={refetch} />
                      </div>
                      <div className="flex text-[10px] sm:text-[12px] md:text-[15px] items-center mt-2 justify-center gap-3">
                        <p className="text-secondaryColor">
                          <span className="title-color w-32">$ </span>
                          {cart?.price}
                        </p>
                        <DeleteIcon cart={cart} refetch={refetch} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="rounded-lg !bg-gradient-to-tr sticky top-0 max-h-screen overflow-y-auto from-[#509502ba]  to-[#a6bf0233] bg-blend-overlay text-card-foreground shadow-sm mt-11 md:mt-auto"
                data-v0-t="card"
              >
                <div className="flex flex-col  space-y-1.5 p-6">
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
        ) : (
          <div className="pl-20">
            <NoDataSearcingPlaceholder />
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;

const UpdateQuantity = ({
  cart,
  refetch,
}: {
  cart: TUserCart;
  refetch: CartRefetchType;
}) => {
  const [updateQuantity, { data: updateData, isSuccess, isError }] =
    useUpdateCartMutation();

  const handleUpdateProductQuantity = async (
    isIncrease: boolean,
    productId: string
  ) => {
    const updateProduct = {
      userId: "668d753fecf871f4e7c5f0b8",
      productId,
      isIncrease,
    };

    console.log(productId);

    await updateQuantity(updateProduct);

    if (isError) {
      ShowToast(
        "Failed!",
        `Oops! There was an error updating the product quantity.`
      );
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
    <div className="flex items-center sm:gap-8 justify-between sm:justify-center w-full">
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
          className="h-2 sm:h-4 !p-0 !py-0 !bg-transparent sm:px-3 w-2 text-[11px]  md:text-xl"
        >
          <path d="M5 12h14" />
        </svg>
      </CustomButton>
      <span className="title-color !text-[12px] sm:text-xl">{cart?.quantity}</span>

      {/* Increase */}
      <CustomButton
        isDisabled={cart.stock == 0}
        clickHandler={() => handleUpdateProductQuantity(true, cart.productId)}
        px="p-0 py-0 !bg-transparent sm:px-3"
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
          className="h-2 sm:h-4 w-2 text-[11px]  md:text-xl"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </CustomButton>
    </div>
  );
};
type UpdateQuantityProps = {
  cart: TUserCart;
  refetch: () => void;
};
const DeleteIcon = ({ cart, refetch }: UpdateQuantityProps) => {
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
