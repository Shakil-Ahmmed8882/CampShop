export type TProduct = {
    _id: string;
    image: string;
    name: string;
    price: number;
    category: string;
  };
  
  export const products: TProduct[] = [
    {
      id: "1",
      image: "path_to_image_1.jpg",
      name: "Product 1",
      price: 29.99,
      category: "Category 1",
    },
    {
      id: "2",
      image: "path_to_image_2.jpg",
      name: "Product 2",
      price: 39.99,
      category: "Category 2",
    },
    // Add more products as needed
  ];
  