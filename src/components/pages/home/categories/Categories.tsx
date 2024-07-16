import React, { useState } from 'react';
import Container from '@/components/shared/Container';
import Description from '@/components/ui/Description';
import Title from '@/components/ui/Title';
import Marquee from 'react-fast-marquee';
import { useAppDispatch } from '@/redux/hooks';
import { setCategory } from '@/redux/features/product/productSlice';
import TentsAndShelters from '@/assets/images/categories/tent.png';
import SleepingBagsAndPads from '@/assets/images/categories/sleepingbag.png';
import CampingFurniture from '@/assets/images/categories/furniture.png';
import CookingGear from '@/assets/images/categories/cooking-gear.png';
import BackpacksAndBags from '@/assets/images/categories/bagpack.png';
import shoe from '@/assets/images/productts/shoe1.png';
import Products from '../../products/Products';
import { CloseCircleOutlined } from '@ant-design/icons';

const categories = [
  { id: 1, name: 'Tents and Shelters', image: TentsAndShelters },
  { id: 2, name: 'Sleeping Bags and Pads', image: SleepingBagsAndPads },
  { id: 3, name: 'Backpacks and Bags', image: BackpacksAndBags },
  { id: 4, name: 'Camping Furniture', image: CampingFurniture },
  { id: 5, name: 'Shoes', image: shoe },
  { id: 6, name: 'Cooking Gear', image: CookingGear },
];

const Categories = () => {
  const dispatch = useAppDispatch();
  const [categoryProduct, setCategoryProduct] = useState("");

  const clickHandler = (category: { name: string }) => {
    dispatch(setCategory({ category: category.name }));
    setCategoryProduct(category.name);
  };

  return (
    <Container>
      <div className="mx-auto px-4 md:flex justify-center items-center z-20 relative">
        <article className="flex-1">
          <Title className="!text-2xl sm:!text-2xl ">Product Categories</Title>
          <Description className="text-[15px]">
            Reprehenderit cupiditate, laboriosam sit quae libero sint
            consequatur reiciendis soluta similique eos eligendi repellat id sed
            ducimus.
          </Description>
        </article>
        <div className="flex overflow-x-auto w-full flex-1 mt-8 md:mt-auto">
          <Marquee pauseOnHover>
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => clickHandler(category)}
                className="text-center  pb-7 cursor-pointer overflow-hidden flex-none min-w-[220px] md:min-w-[250px]"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className=" size-28 lg:size-32 object-cover mx-auto mb-4"
                />
                <h3 className="text-primaryColor text-[11px] md:text-[15px]">
                  {category.name}
                </h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Conditional rendering of Products component */}
      <div className={`fixed top-0 right-0 h-full bg-black transition-opacity duration-500 ease-in-out ${categoryProduct ? 'w-[90%] translate-x-0  !z-50' : 'w-[0%] opacity-0 -z-50 invisible translate-x-80'} `}>

        <CloseCircleOutlined onClick={()=> setCategoryProduct('')} className='text-2xl absolute left-8 top-8  text-[#cac8c8] smooth-transition hover:text-white cursor-pointer '/>

        <Products title={categoryProduct} isGradient={false} />
      </div>
    </Container>
  );
};

export default Categories;