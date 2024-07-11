import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";


type TCartState = {
  userId?: string;
  productId?: string;
  quantity?: number;
};

const initialState: TCartState = {
  userId: "",
  productId: "",
  quantity: 1
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});



export default productSlice.reducer;

export const selectSearch = (state: RootState) => state.product.search;
