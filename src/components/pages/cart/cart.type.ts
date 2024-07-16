import { useGetAllCartsQuery } from "@/redux/features/cart/cartApi";
import { ExtractRefetchType } from "../products/type";

export type CartRefetchType = ExtractRefetchType<typeof useGetAllCartsQuery>;   