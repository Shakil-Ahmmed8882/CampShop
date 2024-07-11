import { baseApi } from "@/redux/api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCarts: builder.query({
      query: (id: string) => {
        return {
          url: `/carts/${id}`,
          method: "GET",
        };
      },
    }),
    createCart: builder.mutation({
      query: (newCart) => ({
        url: "/carts/add-to-cart",
        method: "POST",
        body: newCart,
      }),
    }),
    updateCart: builder.mutation({
      query: ({...updatedProduct }) => ({
        url: `/carts`,
        method: "PATCH",
        body: updatedProduct,
      }),
    }),
    deleteCart: builder.mutation({
      query: (id: string) => ({
        url: `/carts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateCartMutation,
  useGetAllCartsQuery,
  useDeleteCartMutation,
  useUpdateCartMutation,
} = cartApi;

export default cartApi;
