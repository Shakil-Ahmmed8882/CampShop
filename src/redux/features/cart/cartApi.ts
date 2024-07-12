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
      providesTags: ["cart"],
    }),
    createCart: builder.mutation({
      query: (newCart) => ({
        url: "/carts/add-to-cart",
        method: "POST",
        body: newCart,
      }),
      invalidatesTags: ["cart"],
    }),
    updateCart: builder.mutation({
      query: ({ ...updatedProduct }) => ({
        url: `/carts`,
        method: "PATCH",
        body: updatedProduct,
      }),
      invalidatesTags: ["cart"],
    }),
    deleteCart: builder.mutation({
      query: ({cartId, productId}:Record<string,unknown>) => {

        console.log(cartId)
        console.log(productId)
        return{
          url: `/carts/${cartId}/${productId}`,
          method: "DELETE",

        }
      },
      invalidatesTags: ["cart"],
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
