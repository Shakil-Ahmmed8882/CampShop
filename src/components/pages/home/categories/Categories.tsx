import product from "@/assets/images/productts/shoe1.png";
import Container from "@/components/shared/Container";
import Marquee from "react-fast-marquee";


const categories = [
  { id: 1, name: "Tents", image: product },
  { id: 2, name: "Backpacks", image: product },
  { id: 3, name: "Cooking Gear", image: product },
  { id: 3, name: "Cooking Gear", image: product },
  { id: 3, name: "Cooking Gear", image: product },
  { id: 3, name: "Cooking Gear", image: product },
  { id: 3, name: "Cooking Gear", image: product },
  { id: 3, name: "Cooking Gear", image: product },
  { id: 3, name: "Cooking Gear", image: product },
  { id: 3, name: "Cooking Gear", image: product },
  { id: 3, name: "Cooking Gear", image: product },
  { id: 3, name: "Cooking Gear", image: product },
  { id: 3, name: "Cooking Gear", image: product },
  { id: 3, name: "Cooking Gear", image: product },
  { id: 3, name: "Cooking Gear", image: product },
  // Add more categories as needed
];

const Categories = () => {
  return (
    <Container>

      <div className="container mx-auto px-4 flex justify-center items-center">
        <article className="flex-1">
        <h2 className="text-3xl font-bold mb-6  text-[#ececee] ">Product Categories</h2>
        <p className="text-gray-400"> Reprehenderit cupiditate, laboriosam sit quae libero sint consequatur reiciendis soluta similique eos eligendi repellat id sed ducimus.</p>
        </article>
        <div className="flex gap-6 overflow-x-auto w-full flex-1">
            <Marquee pauseOnHover>
          {categories.map((category) => (
            <div key={category.id} className="text-center ml-7 px-6 pb-7 bg-[#030508ac] rounded-lg overflow-hidden flex-none min-w-[300px]">
              <img
                src={category.image}
                alt={category.name}
                className="w-32 h-32 object-cover mx-auto mb-4"
              />
              <h3 className="text-primaryColor">{category.name}</h3>
            </div>
          ))}

            </Marquee>
        </div>
      </div>
    </Container>
  );
};

export default Categories;