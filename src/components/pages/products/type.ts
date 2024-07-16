export interface TProduct {
  _id?: string;
  name: string;
  category: string;
  description: string;
  images: string[];
  image: string;
  price: number;
  stock: number;
  delete_url?: string,
  isDeleted?: boolean;
  createdAt?: string; // You can also use `Date` if you prefer to handle dates directly
}

export interface TUserCart {
  _id:string, 
  product: string;
  price: number;
  productId: string;
  cartId: string;
  stock: number;
  image: string;
  quantity: number;
  totalPrice: number;
}


// refetch 
// Utility type to extract the refetch function type from any query hook
export type ExtractRefetchType<T extends (...args: any) => any> = ReturnType<T>["refetch"];
