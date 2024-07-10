import { Button } from "@/components/ui/button";
import bannerImage from '@/assets/images/hero/CAMP1.jpg'
import Container from "@/components/shared/Container";

const Banner = (): JSX.Element => {
  return (
    <Container py={'py-0'}>
    <section className="relative w-full h-[90vh] -mt-20 overflow-hidden">
      <img
        className="h-full w-full object-bottom object-cover bg-blend-screen"
        src={bannerImage}
        alt="CMapShop Outdoors"
      />

      {/* overlay */}
      <div className="bg-gradient-to-tr bg-blend-darken filter contrast-150 brightness-200 from-[#000000f0] to-[#00000079] w-full h-full absolute top-0"></div>

      {/* content */}

      <div className="absolute top-10 left-0 w-full h-full flex items-center justify-start p-8">
        <div className="max-w-3xl  text-[#ececec]">
        <h1 className="text-5xl leading-[60px] font-bold mb-4 ">
            Outdoors with Camp<span className="text-gradient">Shop</span>.
          </h1>

          <p className="text-lg my-4 leading-[31px] text-[18px] mb-10 text-[#c6c6c6]">
            Get Quality equipment
            and accessories to make your outdoor experiences unforgettable.Come on in.
          </p>

          <Button className="text-primaryColor rounded-full px-14 !bg-[#2c3f1d60] hover:bg-transparent ">Shop Now</Button>
        </div>
      </div>
    </section>
      </Container>
  );
};

export default Banner;
