import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  selectMaxPrice,
  selectMinPrice,
  setPrice,
} from "@/redux/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

const FilterByPrice = (): JSX.Element => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const selectorMinPrice = useAppSelector(selectMinPrice);
  const selectorMaxPrice = useAppSelector(selectMaxPrice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPrice({ minPrice, maxPrice }));
  }, [minPrice, maxPrice]);

  return (
    <div className="z-20">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="hover:bg-transparent bg-transparent z-20">
            <PriceIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 p-4" hideWhenDetached={false}>
          <DropdownMenuLabel className="text-[#ededed]">
            Filter by price
          </DropdownMenuLabel>

          <Input
            placeholder="Min price"
            onChange={(e) => setMinPrice(e.target.value)}
            type="number"
            defaultValue={Number(selectorMinPrice)}
            className="my-5 bg-[#4c781ab4] placeholder:text-[#c8c8c8] text-[#ededed] "
          />
          <Input
            placeholder="Max price"
            type="number"
            defaultValue={Number(selectorMaxPrice)}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="placeholder:text-[#c8c8c8] my-5 bg-[#4c781ab4] text-[#ededed] "
          />
          {/* 
          <div className="flex justify-center">
            <Button
              onClick={handleFilterByPrice}
              className="bg-[#00000071] hover:bg-[#00000089]text-white rounded-full size-12 mx-auto"
            >
              Filter
            </Button>
          </div> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FilterByPrice;

const PriceIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5 md:size-7 text-[gray] smooth-transition !duration-300 hover:text-white z-20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};
