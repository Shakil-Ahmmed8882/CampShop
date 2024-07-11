import product from "@/assets/images/productts/shoe1.png";
import { Button } from "@/components/ui/button";
import CustomButton from "@/components/ui/CustomButton";
import Description from "@/components/ui/Description";
import Title from "@/components/ui/Title";

const campShopProductDetails = {
  id: "668d06eab0e44d84ba8a1191",
  name: "92name",
  description: "A durable and spacious tent suitable for family camping trips.",
  price: 149.99,
  category: "Camping Gear",
  stock: 100,
  images: [
    "https://www.pngall.com/wp-content/uploads/5/Hand-Sanitizer.png",
    "https://www.pngall.com/wp-content/uploads/5/Hand-Sanitizer.png",
    "https://www.pngall.com/wp-content/uploads/5/Hand-Sanitizer.png",
    "https://www.pngall.com/wp-content/uploads/5/Hand-Sanitizer.png",
  ],
  isDeleted: true,
  createdAt: "2023-07-01T12:00:00.000Z",
};

const ProductDetails = (): JSX.Element => {
  return (
    <>
      <div className="grid my-20 md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
        <div className="grid gap-4 md:gap-8">
          <div className="grid gap-4">
            <img
              src={product}
              alt="Product Image"
              width={600}
              height={900}
              className="aspect-[2/3] object-cover h-full bg-[#0e0c0c81] w-full rounded-lg overflow-hidden"
            />

            <div className="hidden md:flex gap-4 items-start">
              {[1,2,3,4].map(img => <button className="bg-primaryLight pb-5 rounded-lg overflow-hidden transition-colors">
                <img
                  src={product}
                  alt="Preview thumbnail"
                  width={100}
                  height={100}
                  className=" object-cover"
                />
                <span className="sr-only">View Image 1</span>
              </button>)}
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:gap-8">
          <div className="grid gap-2">
            <Title>
              <> Circles T-Shirt</>
            </Title>
            <Description>
              60% combed ringspun cotton/40% polyester jersey tee.
            </Description>
            <Ratings />
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <p className="text-4xl font-bold text-[#d3d3d3] pt-2 pb-8">$99</p>
              {/* <CustomButton>Add to cart</CustomButton> */}
              <CustomButton>Add To Cart</CustomButton>
            </div>
            
            <div className="grid gap-2">
              <h2 className="text-xl font-bold">Product Details</h2>
              <Description>
              <p className="text-[#767874]">
                  Introducing the Acme Circles T-Shirt, a perfect blend of style
                  and comfort for the modern individual. This tee is crafted
                  with a meticulous composition of 60% combed ringspun cotton
                  and 40% polyester jersey, ensuring a soft and breathable
                  fabric that feels gentle against the skin.
                </p>
                <p className="text-[#767874]">
                  The design of the Acme Circles T-Shirt is as striking as it is
                  comfortable. The shirt features a unique prism-inspired
                  pattern that adds a modern and eye-catching touch to your
                  ensemble.
                </p>
              </Description>
            </div>
          
                <ProductSpecification/>


          
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

const Ratings = () => {
  return (
    <div className="flex items-center gap-0.5">
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
        className="w-5 h-5 fill-primaryColor"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
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
        className="w-5 h-5 fill-primaryColor"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
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
        className="w-5 h-5 fill-primaryColor"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
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
        className="w-5 h-5 fill-primaryLight stroke-primaryLight"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
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
        className="w-5 h-5 fill-primaryLight stroke-primaryLight"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </div>
  );
};





// Product specification
const ProductSpecification = () => {
  return (
    <div className="grid gap-2">
      <h2 className="text-xl font-bold">Product Specifications</h2>
      <div className="grid gap-2 text-sm leading-loose text-muted-foreground">
        <div className="grid sm:grid-cols-2 gap-2">
          <div>
            <p className="font-semibold title-color pb-5 ">Material:</p>
            <p>60% combed ringspun cotton, 40% polyester</p>
          </div>
          <div>
            <p className="font-semibold title-color pb-5 ">Fit:</p>
            <p>Regular</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-2">
          <div>
            <p className="font-semibold title-color pb-5 mt-5">
              Sleeve Length:
            </p>
            <p>Short</p>
          </div>
          <div>
            <p className="font-semibold title-color pb-5 mt-5">Neck Style:</p>
            <p>Crew</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-2">
          <div>
            <p className="font-semibold title-color pb-5 mt-5">
              Care Instructions:
            </p>
            <p>Machine wash cold, tumble dry low</p>
          </div>
          <div>
            <p className="font-semibold title-color pb-5 mt-5">Origin:</p>
            <p>Made in USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};
