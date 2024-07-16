import { useDispatch } from "react-redux";
import FilterByCategory from "./filter/FilterByCategory";
import Search from "./search/Search";
import { Input } from "@/components/ui/input";
import { clearFilters, setSearch } from "@/redux/features/product/productSlice";
import FilterByPrice from "./filter/FilterByPrice";
import Sort from "./filter/Sort";
import { useRef, useState } from "react";
import { ClearIcons } from "@/assets/icons/Icons";


const SearchFilterBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const [isSearch, setIsSearch] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClear = () => {
    dispatch(clearFilters())
    if (inputRef.current) {
      inputRef.current!.value = '';
    }
  }


  return (
    <div className="flex items-center justify-end sm:pr-12">
      <div className={`${isSearch?'opacity-0 translate-x-10':'opacity-100 translate-x-0'} flex items-center justify-end gap-8 px-8 smooth-transition`}>
        <ClearIcons clickHandler={handleClear}/>
      <Sort/>
      <FilterByPrice />
      <FilterByCategory />
      </div>
      <Search search={isSearch} handleSearch={setIsSearch} />
      <Input
        ref={inputRef}
        type="text"
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className={`${isSearch ?'w-[96%] opacity-100':'w-[0%] opacity-0'} bg-[#0e131b8d] !text-primaryColor text-xl md:text-2xl p-8 md:p-11 font-poppins rounded-lg absolute smooth-transition mx-auto right-[2%] px-8`}
        placeholder="Search.."
      />
    </div>
  );
};

export default SearchFilterBar;
