import { useDispatch } from "react-redux";
import FilterByCategory from "./filter/FilterByCategory";
import Search from "./search/Search";
import { Input } from "@/components/ui/input";
import { setSearch } from "@/redux/features/product/productSlice";
import FilterByPrice from "./filter/FilterByPrice";
import Sort from "./filter/Sort";

const SearchFilterBar = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-end gap-8 px-8">
      <Sort/>
      <FilterByPrice />
      <FilterByCategory />
      <Search />
      <Input
        type="text"
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="bg-[#0e131b8d] text-2xl p-16 font-poppins rounded-lg absolute w-[96%] mx-auto right-[2%] px-8"
        placeholder="Search.."
      />
    </div>
  );
};

export default SearchFilterBar;
