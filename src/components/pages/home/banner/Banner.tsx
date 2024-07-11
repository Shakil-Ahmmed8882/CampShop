import { Button } from "@/components/ui/button";
import bannerImage from "@/assets/images/hero/CAMP1.jpg";
import Container from "@/components/shared/Container";
import Title from "@/components/ui/Title";
import CustomButton from "@/components/ui/CustomButton";
import Description from "@/components/ui/Description";

const Banner = (): JSX.Element => {
  return (
    <Container py={"py-0"}>
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
          <div className="max-w-3xl  ">
            <Title>
              Outdoors with Camp<span className="text-gradient">Shop</span>.
            </Title>

            <Description>
              {" "}
              Get Quality equipment and accessories to make your outdoor
              experiences unforgettable.Come on in.
            </Description>
            <CustomButton>ShopNow</CustomButton>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Banner;
