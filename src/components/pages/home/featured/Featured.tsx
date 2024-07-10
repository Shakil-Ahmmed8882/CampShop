

import { Link } from "react-router-dom";

const featuredProducts = [
  { id: 1, name: "Premium Tent", image: "https://cdn.dribbble.com/userupload/15176470/file/original-03692077c984e3da8e4a2de11b8b4823.jpeg?resize=1600x5790", price: "$299.99" },
  { id: 2, name: "Deluxe Backpack", image: "https://images.pexels.com/photos/792325/pexels-photo-792325.jpeg?auto=compress&cs=tinysrgb&w=600", price: "$179.99" },
  { id: 2, name: "Deluxe Backpack", image: "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=600", price: "$179.99" },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-[black]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-[balck] p-6 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.price}</p>
              <Link to={`/product/${product.id}`} className="text-primary hover:underline">View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
