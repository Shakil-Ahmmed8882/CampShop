import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type TProductState = {
  search?: string;
  minPrice?: string;
  maxPrice?: string;
  category?: string;
  sort?: string;
  isClear?: boolean;
};

const initialState: TProductState = {
  search: "",
  category: "",
  minPrice: "",
  maxPrice: "",
  isClear: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.isClear = false;
    },
    setCategory: (state, action: PayloadAction<TProductState>) => {
      const { category } = action.payload;
      state.category = category;
      state.isClear = false;
    },
    setPrice: (state, action: PayloadAction<TProductState>) => {
      const { minPrice, maxPrice } = action.payload;
      state.minPrice = minPrice;
      state.maxPrice = maxPrice;
      state.isClear = false;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    clearFilters: (state) => {
      state.category = "";
      state.search = "";
      state.minPrice = "";
      state.sort= "";
      state.isClear = true;
    },
  },
});

export const { setSearch, setPrice, setCategory, clearFilters, setSort } =
  productSlice.actions;

export default productSlice.reducer;

export const selectSearch = (state: RootState) => state.product.search;
export const selectCategory = (state: RootState) => state.product.category;
export const selectMinPrice = (state: RootState) => state.product.minPrice;
export const selectMaxPrice = (state: RootState) => state.product.maxPrice;
export const selectSort = (state: RootState) => state.product.sort;
export const selectClear = (state: RootState) => state.product.isClear;
