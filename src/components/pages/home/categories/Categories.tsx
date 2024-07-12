import product from "@/assets/images/productts/shoe1.png";
import Container from "@/components/shared/Container";
import Description from "@/components/ui/Description";
import Title from "@/components/ui/Title";
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

      <div className="mx-auto px-4 md:flex justify-center items-center z-20 relative">
        <article className="flex-1">
        <Title className="!text-2xl sm:!text-2xl ">Product Categories</Title>
        <Description className="text-[15px]">
        Reprehenderit cupiditate, laboriosam sit quae libero sint consequatur reiciendis soluta similique eos eligendi repellat id sed ducimus.
        </Description>
        </article>
        <div className="flex overflow-x-auto w-full flex-1 mt-8 md:mt-auto">
            <Marquee pauseOnHover >
          {categories.map((category) => (
            <div key={category.id} className="text-center  pb-7 cursor-pointer overflow-hidden flex-none min-w-[220px] md:min-w-[250px]">
              <img
                src={category.image}
                alt={category.name}
                className=" size-28 lg:size-32 object-cover mx-auto mb-4"
              />
              <h3 className="text-primaryColor text-[11px] md:text-[15px]">{category.name}</h3>
            </div>
          ))}

            </Marquee>
        </div>
      </div>
    </Container>
  );
};

export default Categories;