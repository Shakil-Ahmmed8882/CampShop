import React, { useEffect } from "react";
import { TProduct } from "@/components/pages/products/type";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { magnify } from "@/utils/magnifier";  // Ensure this path is correct

import productImg from "@/assets/images/productts/t-shirt.png";
import { Ratings } from "@/components/pages/products/product-details/ProductDetails";
import { CartIcon } from "@/assets/icons/Icons";

const Card = ({ product }: { product: TProduct }): JSX.Element => {

  useEffect(() => {
    magnify(`magnifier-${product._id}`, 3);
  }, [product._id]);

  return (
    <div className="bg-[#0e131b] transition-all duration-500 hover:-translate-y-4 flex flex-col  rounded-lg shadow-md">
      <div className="pt-6 img-magnifier-container">
        <img
          id={`magnifier-${product._id}`}
          src={productImg}
          alt={product.name}
          className="mx-auto size-28 cursor-grab  sm:size-40 mb-2 rounded-md object-top"
        />
      </div>
      <article className="p-3 sm:p-4">
        <div className="flex items-center justify-between pt-8">
          <h3 className=" sm:text-xl text-[#ececec] font-semibold mb-2">
            {product.name}
          </h3>
          <CartIcon />
        </div>
        <div className="py-4 sm:py-3">
          <Ratings />
        </div>
        <div className="flex items-center text-[14px] sm:text-[16px] justify-between">
          <p className="text-[#c3c3c3] mb-5 mt-3">{product.price}</p>
          <p className="text-[#c3c3c3] mb-5 mt-3">{product.category}</p>
        </div>
        <div className="flex py-3">
          <div className=" flex  items-center w-full justify-between mt-4">
            <Button className="text-[#c4c4c4] !text-[12px] sm:text-[16px] hover:text-white bg-[#2c362f42] hover:bg-transparent">
              Learn More
            </Button>
            <Link to={`/products/${product?._id}`}>
              <Button className="!bg-primaryLight hover:!bg-[#233b0f83] !text-[12px] sm:text-[16px] mt-3 sm:mt-auto w-full sm:w-auto text-primaryColor">
                View details
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
