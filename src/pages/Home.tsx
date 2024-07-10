import Banner from "@/components/pages/home/banner/Banner";
import BestSellingProducts from "@/components/pages/home/best-selled-products/BestSelledProducts";
import Categories from "@/components/pages/home/categories/Categories";
import FAQ from "@/components/pages/home/FAQ/FAQ";
import FeaturedProducts from "@/components/pages/home/featured/Featured";
import Testimonials from "@/components/pages/home/testimonials/Testimonials";


const Home= (): JSX.Element => {
  return (
    <div className="">
        <Banner/>
        <BestSellingProducts/>
        <Categories/>
        <FeaturedProducts/>
        <Testimonials/>
        <FAQ/>
    </div>
  );
};

export default Home; 