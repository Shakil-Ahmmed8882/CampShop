export interface TProduct {
    _id?: string;
    name: string;
    category: string;
    description: string;
    images: string[];
    image?: string;
    price: number;
    stock: number;
    isDeleted?: boolean;
    createdAt?: string; // You can also use `Date` if you prefer to handle dates directly
  }
  
  
  