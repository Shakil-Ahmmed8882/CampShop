import Container from "@/components/shared/Container";
import Description from "@/components/ui/Description";
import Title from "@/components/ui/Title";
import { Link } from "react-router-dom";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Tent",
    image:
      "https://cdn.dribbble.com/userupload/15176470/file/original-03692077c984e3da8e4a2de11b8b4823.jpeg?resize=1600x5790",
    price: "$299.99",
    className: "!row-span-2",
    heading: true,
  },
  {
    id: 2,
    name: "Deluxe Backpack",
    image:
      "https://images.pexels.com/photos/792325/pexels-photo-792325.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$179.99",
  },
  {
    id: 2,
    name: "Deluxe Backpack",
    image:
      "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$179.99",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-[black] z-20">
      <Container>
        <div className=" ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 grid-rows-2">
            {featuredProducts.map((product) => (
              <div className={`${product?.className}`}>
                {product.heading && (
                  <>
                    <Title className="!text-2xl sm:!text-2xl ">
                      Featured Products
                    </Title>
                    <Description className="text-[15px]">
                      Get our exclusive collecitons
                    </Description>
                  </>
                )}
                <div
                  key={product.id}
                  className={` bg-gradient-to-t from-[#141e084d] bg-blend-overlay filter contrast-150 mix-blend-screen to-[#304f0a4d]   rounded-lg shadow-md`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md mb-4 filter contrast-100 mix-blend-normal"
                  />
                  <article className="p-5">
                    <h3 className="text-xl font-semibold mb-2 title-color">
                      {product.name}
                    </h3>
                    <p className="gray-description mb-4 ">{product.price}</p>
                    <Link
                      to={`/product/${product.id}`}
                      className="text-primaryColor hover:underline"
                    >
                      View Details
                    </Link>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
