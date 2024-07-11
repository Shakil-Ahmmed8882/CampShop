import product from "@/assets/images/productts/shoe1.png";
import BlurBall from "@/components/shared/visuals/BlurBall";
import CustomButton from "@/components/ui/CustomButton";
import CustomSpinner from "@/components/ui/CustomSpinner";
import {
  useGetAllCartsQuery,
  useUpdateCartMutation,
} from "@/redux/features/cart/cartApi";
import OrderSummary from "./OrderSummary";

const Cart = (): JSX.Element => {
  const { data, isLoading } = useGetAllCartsQuery("668d753fecf871f4e7c5f0b8");

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (!data || !data.data) {
    return <div>No data available</div>;
  }

  const { products, totalPrice } = data.data && data.data;

  return (
    <>
      <section className="w-full py-12 pb-32">
        <BlurBall />
        <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
          <div className="flex items-center justify-between pt-14 pb-8">
            <h1 className="text-2xl font-bold tracking-tight title-color">
              Shopping Cart
            </h1>
            <CustomButton>Place Order</CustomButton>
          </div>
          <div className="grid gap-6 md:grid-cols-[1fr_300px]">
            <div className="grid gap-6">
              {products.map((cart) => (
                <div
                  className="rounded-lg bg-[#0f0f0bc0] text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="grid md:grid-cols-[120px_1fr_auto] gap-14 items-center">
                    <img
                      src={product}
                      alt="Cozy Blanket"
                      width={120}
                      height={120}
                      className="rounded-lg object-cover"
                      style={{ aspectRatio: "120 / 120", objectFit: "cover" }}
                    />
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="font-semibold title-color">
                        {cart?.product}
                      </h3>

                      <UpdateQuantity product={cart} />
                    </div>
                    <div className="flex  items-center gap-2">
                      <span className="font-semibold text-[#c3c3c3]">
                        ${cart?.price}
                      </span>
                      <DeleteIcon />
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
              <OrderSummary totalPrice={totalPrice} products={products} />
              <div className="flex items-center p-6 md:hidden">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

const UpdateQuantity = ({ product }) => {
  const cartInfo = {
    userId: "668d753fecf871f4e7c5f0b8",
    productId: "668d06eab0e44d84ba8a1193",
    quantity: 1,
  };

  const [updateQuantity, { data }] = useUpdateCartMutation(cartInfo);

  const handleUpdateProductQuantity = () => {
    updateQuantity(cartInfo);
  };

  console.log(data)

  return (
    <div className="flex items-center gap-5 ">
      {/* Decrease */}
      <CustomButton clickHandler={handleUpdateProductQuantity} px="px-3">
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
          className="h-4 w-4 "
        >
          <path d="M5 12h14" />
        </svg>
      </CustomButton>
      <span className="title-color">{product?.quantity}</span>

      {/* Increase */}
      <CustomButton clickHandler={handleUpdateProductQuantity} px="px-3">
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

const DeleteIcon = () => {
  return (
    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10">
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
        className="size-8 text-[red] font-bold smooth-transition hover:bg-[#490a0aec] p-2 bg-[#490a0a9d]  rounded-full"
      >
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </svg>
    </button>
  );
};
